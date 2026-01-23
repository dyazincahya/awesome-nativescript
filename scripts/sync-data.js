const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const OUTPUT_FILE = path.join(__dirname, "../assets/data.json");
const README_FILES = [
  "README.md",
  "examples/README.md",
  "examples/angular/README.md",
  "examples/core/README.md",
  "examples/react/README.md",
  "examples/solid/README.md",
  "examples/svelte/README.md",
  "examples/vue/README.md",
];

function runGit(cmd) {
  try {
    return execSync(cmd, { encoding: "utf8" }).trim();
  } catch (e) {
    console.warn(`Git command failed: ${cmd}`);
    return null;
  }
}

function normalizeHeadingText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function stripBackticks(s) {
  return (s || "").replace(/`/g, "").trim();
}

function titleize(s) {
  return (s || "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function getDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function getSourceFile(origin) {
  if (!origin) return "";
  return origin.replace(/^\.\//, "").replace(/^\.\.\//, "");
}

function getSourceLabel(origin) {
  const file = getSourceFile(origin).toLowerCase();
  const m = file.match(/^examples\/([^/]+)\/readme\.md$/);
  if (m && m[1]) return `Example of ${titleize(m[1])}`;
  if (file === "examples/readme.md") return "Examples Directory";
  if (file === "readme.md") return "Main README";
  return "";
}

function computeLocation(origin, headingPath) {
  const file = getSourceFile(origin);
  const lower = file.toLowerCase();
  if (lower.startsWith("examples/")) {
    const m = lower.match(/^examples\/([^/]+)\//);
    const sub = m && m[1] ? titleize(m[1]) : "";
    return {
      top: "Examples",
      sub,
      path: sub ? `Examples / ${sub}` : "Examples",
    };
  }
  const top = headingPath[0] || "Uncategorized";
  const sub = headingPath[1] || "";
  const fullPath = headingPath.join(" / ");
  return { top, sub, path: fullPath };
}

function parseListItemLine(line) {
  // More flexible regex:
  // 1. Starts with optional space and a dash
  // 2. [Name](URL)
  // 3. Optional separator (dash, colon, or just space)
  // 4. Optional description
  const m = line.match(
    /^\s*-\s+\[([^\]]+)\]\(([^)]+)\)(?:\s*[-:—–]?\s*(.+))?\s*$/,
  );
  if (!m) return null;
  return {
    name: normalizeHeadingText(m[1]).replace("✨", "").trim(),
    url: m[2].trim(),
    description: normalizeHeadingText(m[3] || "")
      .replace("✨", "")
      .trim(),
  };
}

function parseAuthorCell(cell) {
  const m = (cell || "").match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (!m) return { authorName: stripBackticks(cell), authorUrl: "" };
  return { authorName: normalizeHeadingText(m[1]), authorUrl: m[2].trim() };
}

function parseTableLine(line) {
  if (!/^\s*\|/.test(line)) return null;
  if (!line.includes("](")) return null;
  const cells = line
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());
  if (cells.length < 3) return null;

  const nameRaw = normalizeHeadingText(stripBackticks(cells[0] || ""));
  const descriptionRaw = normalizeHeadingText(cells[1] || "");
  const name = nameRaw.replace("✨", "").trim();
  const description = descriptionRaw.replace("✨", "").trim();

  const linkCell = cells[cells.length - 1] || "";
  const linkMatch = linkCell.match(/\[([^\]]+)\]\(([^)]+)\)/);
  const url = linkMatch ? linkMatch[2].trim() : "";
  if (!url) return null;

  const platform = normalizeHeadingText(cells[2] || "");
  const source = normalizeHeadingText(cells[4] || "");
  const { authorName, authorUrl } = parseAuthorCell(cells[3] || "");

  return {
    name,
    url,
    description,
    meta: { platform, source, authorName, authorUrl },
  };
}

function getGitDates(filePath, items) {
  // Get last modification date for each line (updatedAt)
  console.log(`  - Running git blame for ${filePath}...`);
  const blame = runGit(`git blame --date=iso "${filePath}"`);
  if (!blame) return items;

  const blameMap = {};
  blame.split(/\r?\n/).forEach((line) => {
    // git blame format: hash (author date time timezone line) content
    const match = line.match(
      /^\w+\s+\([^)]+\s+(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\s+[+-]\d{4})\s+\d+\)\s+(.+)$/,
    );
    if (match) {
      const updatedAt = match[1];
      const content = match[2].trim();
      blameMap[content] = updatedAt;
    }
  });

  console.log(`  - Fetching addedAt dates for ${items.length} items...`);

  // For each parsed item, find its first appearance (addedAt)
  items.forEach((item, index) => {
    const { url, lineContent } = item;
    const updatedAt = blameMap[lineContent];

    if (url && !url.startsWith("#")) {
      // Find the first commit that added this URL
      const addedLog = runGit(
        `git log --diff-filter=A --follow --format=%ai -S "${url}" -- "${filePath}"`,
      );
      if (addedLog) {
        const logs = addedLog.split(/\r?\n/).filter(Boolean);
        item.addedAt = logs[logs.length - 1]; // Oldest is at the bottom
      } else {
        item.addedAt = updatedAt || new Date().toISOString();
      }
    } else {
      item.addedAt = updatedAt || new Date().toISOString();
    }

    if ((index + 1) % 20 === 0) {
      console.log(`    ...processed ${index + 1}/${items.length} items`);
    }

    // Cleanup internal properties
    delete item.lineContent;
  });

  return items;
}

function parseReadme(filePath) {
  if (!fs.existsSync(filePath)) return [];

  console.log(`Parsing ${filePath}...`);
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);
  const items = [];

  const stack = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    // Detect Headings for Top/Sub categories
    const headingMatch = line.match(/^(#{2,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = normalizeHeadingText(headingMatch[2]);

      while (stack.length && stack[stack.length - 1].level >= level)
        stack.pop();
      stack.push({ level, text });
      continue;
    }

    const row = parseListItemLine(line) || parseTableLine(line);
    if (!row) continue;
    if (!row.url || row.url.startsWith("#")) continue;

    const headingPath = stack.map((s) => s.text).filter(Boolean);
    if (headingPath.length && headingPath[0].toLowerCase() === "contents")
      continue;

    const loc = computeLocation(filePath, headingPath);

    items.push({
      ...row,
      top: loc.top,
      sub: loc.sub,
      path: loc.path,
      domain: getDomain(row.url),
      sourceLabel: getSourceLabel(filePath),
      sourceFile: getSourceFile(filePath),
      source: filePath, // Keep for reference
      lineContent: trimmedLine,
    });
  }

  console.log(`  Found ${items.length} items. Analyzing history...`);
  return getGitDates(filePath, items);
}

console.log("Starting data synchronization...");

let allItems = [];
README_FILES.forEach((file) => {
  const items = parseReadme(file);
  allItems = allItems.concat(items);
});

// Sort by date descending
allItems.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));

const output = {
  lastUpdated: new Date().toISOString(),
  total: allItems.length,
  items: allItems,
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
console.log(
  `Successfully generated ${OUTPUT_FILE} with ${allItems.length} items.`,
);
