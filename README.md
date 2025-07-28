# Awesome NativeScript [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

<img src="https://raw.githubusercontent.com/dyazincahya/awesome-nativescript/refs/heads/main/awesome-nativescript.png" />

A curated list of awesome plugins, and resources for NativeScript 8 or Newer.

> Empower JavaScript with native APIs. NativeScript provides direct access to platform APIs with strong typing, enabling a powerful TypeScript development experience. Build native apps for iOS, macOS, visionOS, Android, and Meta Quest—entirely in JavaScript.

## Contents
- [Official Resources](#official-resources)
- [Flavors](#flavors)
  - [Official Flavors](#official-flavors)
  - [Community Flavors](#community-flavors)
- [Platforms](#platforms)
- [Community](#community)
- [Templates](#templates)
- [Layouts](#layouts)
- [Navigations](#navigations)
- [Components](#components)
- [Plugins](#plugins)
  - [Advertising Plugins](#advertising-plugins)
  - [Artifical Intelligence (AI) Plugins](#artifical-intelligence-ai-plugins)
  - [Authentication Plugins](#authentication-plugins)
  - [Backend Service Plugins](#backend-service-plugins)
  - [Client-side Database Plugins](#client-side-database-plugins)
  - [Firebase Plugins](#firebase-plugins)
  - [Geo Plugins](#geo-plugins)
  - [ML Plugins](#ml-plugins)
  - [Multimedia Plugins](#multimedia-plugins)
  - [Networking Plugins](#networking-plugins)
  - [Payment Plugins](#payment-plugins)
  - [Reporting Plugins](#reporting-plugins)
  - [Styling and Theme Plugins](#styling-and-theme-plugins)
  - [UI Kit Plugins](#ui-kit-plugins)
  - [UI Material Plugins](#ui-material-plugins)
  - [UI Plugins](#ui-plugins)
  - [Utility Plugins](#utility-plugins)
- [More Plugins](#more-plugins)
- [Font and Font Icon](#font-and-font-icon)
- [Security](#security)
- [Testing](#testing)
  - [Unit Testing](#unit-testing)
  - [End-to-end Integration Testing](#end-to-end-integration-testing)
- [Background Service](#background-service)
- [macOS](#macos)
- [visionOS (Vision Pro)](#visionos-vision-pro)
- [Videos and Podcasts](#videos-and-podcasts)
- [Examples and Tutorials](#examples-and-tutorials)
- [Misc](#misc)
  - [iOS 26 Liquid Glass](#ios-26-liquid-glass)
- [Tools](#tools)

## Official Resources

- [NativeScript Homepage](http://nativescript.org/)
- [NativeScript Blog](https://blog.nativescript.org/)
- [NativeScript Snacks](https://docs.nativescript.org/snacks/)
- [NativeScript Show Case Apps](https://www.nativescript.org/showcases)
- [NativeScript on X (@nativescript)](https://x.com/nativescript)
- [NativeScript on Bsky (@nativescript.bsky.social)](https://bsky.app/profile/nativescript.bsky.social)
- [NativeScript on YouTube (@NativeScriptVideos)](https://www.youtube.com/@NativeScriptVideos/videos)
- [NativeScript on GitHub](https://github.com/NativeScript)
- [NativeScript on Stack Overflow](http://stackoverflow.com/questions/tagged/nativescript)
- [NativeScript RFC](https://github.com/NativeScript/rfcs/discussions)

## Flavors

NativeScript offers various flavors you can try, which are generally divided into two types: the official version and the community-developed version.

### Official Flavors

- [JavaScript](https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-plain-javascript) - Official JavaScript flavor with plain JS and no build step.
- [TypeScript](https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-plain-typescript) - Official TypeScript flavor with native class support.

### Community Flavors

- [Angular](https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-angular) - Popular flavor using Angular framework.
- [Vue](https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-vue) - Build apps using Vue.js and NativeScript runtime.
  - [Portal](https://nativescript-vue.org/) - Community site for NativeScript-Vue.
- [SolidJS](https://github.com/nativescript-community/solid-js) - Community-driven integration with SolidJS.
- [ReactJS](https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-react) - Use React to build native mobile apps.
  - [Portal](https://react-nativescript.netlify.app/) - Documentation site for React + NativeScript.
- [Svelte](https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-svelte) - Use Svelte to compile native apps with NativeScript.
  - [Portal](https://svelte.nativescript.org/) - Official portal for NativeScript-Svelte.
- [CapacitorJS](https://github.com/NativeScript/capacitor) - Integration of CapacitorJS with NativeScript runtime.
  - [Portal](https://capacitor.nativescript.org/) - Website for NativeScript-Capacitor integration.
- [Ionic](https://v8.docs.nativescript.org/plugins/ionic-portals.html) - Use Ionic Portals inside NativeScript apps.

## Platforms

Run NativeScript on the following platforms:

- [Android](https://docs.nativescript.org/guide/extending-classes-and-implementing-interfaces-android)
- [iOS](https://docs.nativescript.org/guide/extending-classes-and-conforming-to-protocols-ios)
- [VisionOS](https://docs.nativescript.org/guide/visionos)
- [macOS](https://blog.nativescript.org/macos-node-api-preview/)
- [WearOS](https://github.com/bradmartin/nativescript-wear-os)

## Community

- [Nativescript Community on Discord](https://nativescript.org/discord)
- [Nativescript Community on GitHub](https://github.com/nativescript-community/)

## Templates

- [Blank Template](https://github.com/NativeScript/nativescript-app-templates/tree/main/packages/template-blank) - A basic template with a single page and no custom styles.
- [Drawer Template](https://github.com/NativeScript/nativescript-app-templates/tree/main/packages/template-drawer-navigation) - A template with a side drawer.
- [Tabs Template](https://github.com/NativeScript/nativescript-app-templates/tree/main/packages/template-tab-navigation) - A template with multiple tabs.
- [List & Details Template](https://github.com/NativeScript/nativescript-app-templates/tree/main/packages/template-master-detail) - A template with a ListView and a details screen.

## Layouts

- [StackLayout](https://docs.nativescript.org/ui/stack-layout) - A layout container that arranges child views in a horizontal or vertical stack.
- [GridLayout](https://docs.nativescript.org/ui/grid-layout) - A layout container that lets you arrange its child elements in a table-like manner.
- [RootLayout](https://docs.nativescript.org/ui/root-layout) - Layout container for dynamically layering views with a programmatic API.
- [FlexboxLayout](https://docs.nativescript.org/ui/flexbox-layout) - A layout container that implements (close-to-spec) CSS Flexbox.
- [WrapLayout](https://docs.nativescript.org/ui/wrap-layout) - Layout Container that wraps it's items once there's no more space to fit them.
- [DockLayout](https://docs.nativescript.org/ui/dock-layout) - Layout container for docking views to the sides or the middle.
- [AbsoluteLayout](https://docs.nativescript.org/ui/absolute-layout) - A simple layout container for positioning elements at top/left coordinates.
- [Yoga Layout](https://github.com/nativescript-community/yoga) - Facebook's yoga layout engine, ported to NativeScript.
- [Yoga Layout by Triniwiz](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-yogalayout) - Facebook's yoga layout engine, ported to NativeScript by Triniwiz.
- [Universal layout views (via Taffy)](https://github.com/triniwiz/nativescript-mason/tree/main/packages/nativescript-masonkit) - Taffy is a flexible, high-performance, cross-platform UI layout library written in Rust.

## Navigations

- [Frame](https://docs.nativescript.org/ui/frame) - UI component for displaying and navigating between Pages.
- [Page](https://docs.nativescript.org/ui/page) - UI component for representing application screens the users can navigate to.
- [ActionBar](https://docs.nativescript.org/ui/action-bar) - UI component abstracting the Android ActionBar, and the iOS NavigationBar.

## Components

- [ActivityIndicator](https://docs.nativescript.org/ui/activity-indicator) - UI component for signaling activity.
- [Button](https://docs.nativescript.org/ui/button) - A basic native button that reacts to user gestures.
- [DatePicker](https://docs.nativescript.org/ui/date-picker) - UI component for selecting a date.
- [Dialogs](https://docs.nativescript.org/ui/dialogs) - UI for grabbing the users attention, prompting for confirmation, choice, input, or credentials.
- [HtmlView](https://docs.nativescript.org/ui/html-view) - UI component for rendering simple HTML content.
- [Image](https://docs.nativescript.org/ui/image) - UI component for rendering images.
- [Label](https://docs.nativescript.org/ui/label) - UI component for displaying text.
- [ListPicker](https://docs.nativescript.org/ui/list-picker) - UI component for selecting a value from a list.
- [ListView](https://docs.nativescript.org/ui/list-view) - UI component for rendering large lists using view recycling.
- [Placeholder](https://docs.nativescript.org/ui/placeholder) - Helper UI component for rendering native views.
- [Progress](https://docs.nativescript.org/ui/progress) - UI component to indicate the progress of a task.
- [ScrollView](https://docs.nativescript.org/ui/scroll-view) - UI component for rendering scrollable content (horizontal or vertical).
- [SearchBar](https://docs.nativescript.org/ui/search-bar) - UI component for entering search queries.
- [SegmentedBar](https://docs.nativescript.org/ui/segmented-bar) - UI component for discrete slection.
- [Slider](https://docs.nativescript.org/ui/slider) - UI component for picking numeric values from a range.
- [Switch](https://docs.nativescript.org/ui/switch) - UI component for toggling state on or off.
- [TabView](https://docs.nativescript.org/ui/tab-view) - UI component for grouping content into tabs and let users switch between them.
- [TextField](https://docs.nativescript.org/ui/text-field) - UI component for single-line text entry.
- [TextView](https://docs.nativescript.org/ui/text-view) - UI component for multi-line text entry.
- [TimePicker](https://docs.nativescript.org/ui/time-picker) - UI component that lets users select time.
- [WebView](https://docs.nativescript.org/ui/web-view) - UI component for rendering web content.

## Plugins

### Advertising Plugins

- [Google Mobile Ads](https://github.com/NativeScript/plugins/blob/main/packages/google-mobile-ads) - A plugin that allows you to monetize your NativeScript app by integrating the Google Mobile Ads SDK into the app.

### Artifical Intelligence (AI) Plugins

- [NativeScript AI SDK](https://github.com/erick-marro/ns-ai-plugin/tree/main/packages/ns-ai-kit) - Community Plugin for integrating AI models in a NativeScript App.

### Authentication Plugins

- [Apple Sign In](https://github.com/NativeScript/plugins/blob/main/packages/apple-sign-in) - A plugin that allows you to authenticate users with Sign In with Apple.
- [Descope](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-descope) - The Descope SDK for NativeScript provides convenient access to Descope for an application written on top of NativeScript.
- [Facebook](https://github.com/NativeScript/plugins/blob/main/packages/facebook) - A plugin that allows you to integrate Facebook Login with your app using the Facebook SDK.
- [Google Signin](https://github.com/NativeScript/plugins/blob/main/packages/google-signin) - A plugin that allows you to authenticate users with Google Sign-In.
- [Twitter](https://github.com/NativeScript/plugins/blob/main/packages/twitter) - A plugin that allows you to authenticate a user with their Twitter account.

### Backend Service Plugins

- [Appwrite](https://github.com/NativeScript/appwrite) - Is an open-source backend as a service server that abstract and simplify complex and repetitive development tasks behind a very simple to use REST API.
- [AWS](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-aws-sdk) - It simplifies the process of integrating AWS services by providing language-specific APIs, making it easier for developers to build and deploy applications that leverage AWS resources.
- [Firebase](https://docs.nativescript.org/plugins/firebase-core) - Modular Firebase 🔥 implementation for NativeScript. Supports both iOS & Android platforms for all Firebase services.
- [Supabase](https://github.com/NativeScript/supabase) - Supabase for NativeScript: Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.

### Client-side Database Plugins

- [Couchbase](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-couchbase) - Is an embedded, NoSQL JSON Document Style database for your mobile apps.
- [RxDB](https://github.com/herefishyfish/rxdb-nativescript) - Are a set of plugins that enable RxDB support for NativeScript. This set of plugins includes a core plugin and adapters for different databases.
- [SQLite](https://github.com/nativescript-community/sqlite) - A SQLite plugin for NativeScript.

### Firebase Plugins

- [Firebase Analytics](https://github.com/NativeScript/firebase/tree/main/packages/firebase-analytics) - This plugin allows you to add Google Analytics for Firebase to your app.
- [Firebase App Check](https://github.com/NativeScript/firebase/tree/main/packages/firebase-app-check) - App Check works alongside other Firebase services to help protect your backend resources from abuse, such as billing fraud or phishing.
- [Firebase Auth](https://github.com/NativeScript/firebase/tree/main/packages/firebase-auth) - A plugin that allows you to add Firebase Authentification to your NativeScript app.
- [Firebase Core](https://github.com/NativeScript/firebase/tree/main/packages/firebase-core) - A plugin to initialize [FirebaseApp](https://firebase.google.com/docs/reference/android/com/google/firebase/FirebaseApp) in your app.
- [Firebase Crashlytics](https://github.com/NativeScript/firebase/tree/main/packages/firebase-crashlytics) - A plugin that allows you to add Firebase Crashlytics to your NativeScript app.
- [Firebase Database](https://github.com/NativeScript/firebase/tree/main/packages/firebase-database) - A plugin that allows you to add Firebase Realtime Databse to your NativeScript app.
- [Firebase Dynamic Links](https://github.com/NativeScript/firebase/tree/main/packages/firebase-dynamic-links) - This plugin allows you to add the Firebase Dynamic Links SDK to your app, create dynamic links and receive links that launch a screen on your app.
- [Firebase Firestore](https://github.com/NativeScript/firebase/tree/main/packages/firebase-firestore) - This plugin allows you to add Firebase Cloud Firestore to your NativeScript app.
- [Firebase Functions](https://github.com/NativeScript/firebase/tree/main/packages/firebase-functions) - This plugin allows you to use Firebase Cloud Functions with NativeScript.
- [Firebase In App Messaging](https://github.com/NativeScript/firebase/tree/main/packages/firebase-in-app-messaging) - This plugin allows you to use the Firebase In-App Messaging SDK in your NativeScript app.
- [Firebase Installations](https://github.com/NativeScript/firebase/tree/main/packages/firebase-installations) - Provides a Firebase installation ID (FID) for each installed instance of a Firebase app.
- [Firebase Messaging](https://github.com/NativeScript/firebase/tree/main/packages/firebase-messaging) - This plugin allows you to use Firebase Cloud Messaging in your NativeScript app.
- [Firebase Messaging Core](https://github.com/NativeScript/firebase/tree/main/packages/firebase-messaging-core) - Firebase Messaging Core is a lite package which enables you to use a third-party push service on Android and iOS.
- [Firebase Performance](https://github.com/NativeScript/firebase/tree/main/packages/firebase-performance) - This plugin allows you to use the Firebase Performance Monitoring API in your NativeScript app.
- [Firebase Remote Config](https://github.com/NativeScript/firebase/tree/main/packages/firebase-remote-config) - This plugin allows you to use the Firebase Remote Config API in your NativeScript app.
- [Firebase Storage](https://github.com/NativeScript/firebase/tree/main/packages/firebase-storage) - This plugin allows you to use the native Firebase SDKs for Cloud Storage in your Nativescript app.
- [Firebase UI](https://github.com/NativeScript/firebase/tree/main/packages/firebase-ui) - With this plugin, you can use the FirebaseUI for Auth library in your NativeScript app. FirebaseUI for Auth is a library that provides a drop-in auth solution that handles the UI flows for signing up and signing in users with email and password, phone number, Google, Facebook, Twitter, and more.

### Geo Plugins

- [Carto](https://github.com/nativescript-community/ui-carto) - One Location Intelligence platform for all your spatial needs. Streamline your tech stack with an end-to-end geospatial platform built for the enterprise.
- [Directions](https://github.com/NativeScript/plugins/blob/main/packages/directions) - A plugin that allows you to launch the Google Maps app, if it's installed on the device, with some directions. For more information, visit [Directions action](https://developers.google.com/maps/documentation/urls/get-started#directions-action).
- [Geo Coding](https://github.com/nativescript-community/geocoding) - Provides access to native geocoding APIs for NativeScript apps (android.location.Geocoder for Android, CLGeocoder for iOS).
- [Geo Location](https://github.com/NativeScript/plugins/blob/main/packages/geolocation) - A geolocation plugin to use for getting current location, monitor movement, etc.
- [Google Maps](https://github.com/NativeScript/plugins/blob/main/packages/google-maps) - A plugin that allows you to use the Maps SDK to access Google Maps features.
- [Google Maps Utils](https://github.com/NativeScript/plugins/blob/main/packages/google-maps-utils) - You can access the google maps utilities from the GoogleMaps object. _Requires google maps plugin @nativescript/google-maps_.
- [Radar.io](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-radar-io) - Geofencing, maps, and geolocation compliance, all in a modern, cost-effective platform. Thousands of companies trust our APIs and SDKs to power location-based experiences across hundreds of millions of devices globally.
- [UI Mapbox](https://github.com/nativescript-community/ui-mapbox) - Interactive, thoroughly customizable maps powered by vector tiles and OpenGL. Awesome native OpenGL-powered maps - by Mapbox.

### ML Plugins

- [Barcode Scanning](https://github.com/NativeScript/mlkit/tree/main/packages/mlkit-barcode-scanning) - This plugin is used with `@nativescript/mlkit-core`. It enables barcode scanning and provides the BarcodeResult type for the barcode-scanned data.
- [Core](https://github.com/NativeScript/mlkit/tree/main/packages/mlkit-core) - A plugin that provides a UI component to access the different functionalities of [Google's ML Kit](https://developers.google.com/ml-kit) SDK.
- [Face Detection](https://github.com/NativeScript/mlkit/tree/main/packages/mlkit-face-detection) - A plugin that is used with `@nativescript/mlkit-core` to enable face detection and provide the FaceResult type for the data of the face detection event.
- [Image Labeling](https://github.com/NativeScript/mlkit/tree/main/packages/mlkit-image-labeling) - A plugin that is used with `@nativescript/mlkit-core` to enable Image Labeling and provide the ImageLabelingResult type for the image labeling event data.
- [Object Detection](https://github.com/NativeScript/mlkit/tree/main/packages/mlkit-object-detection) - A plugin that is used with `@nativescript/mlkit-core` to enable Object Detection and provide the ObjectResult type for the object detection event data.
- [Pose Detection](https://github.com/NativeScript/mlkit/tree/main/packages/mlkit-pose-detection) - A plugin that is used with `@nativescript/mlkit-core` to enable Pose Detection and provide the PoseResult type for the Pose Detection event data.
- [Text Recognition](https://github.com/NativeScript/mlkit/tree/main/packages/mlkit-text-recognition) - A plugin used with `@nativescript/mlkit-core` to enable Text Recognition in your app and provide TextResult type for the text recognition event data.

### Multimedia Plugins

- [Audio Player](https://github.com/VoiceThread/nativescript-plugins/tree/main/packages/nativescript-audio-player) - This plugin provides an audio player for Android and iOS that supports playback of both local files and remote URL audio files.
- [Audio Recorder](https://github.com/VoiceThread/nativescript-plugins/tree/main/packages/nativescript-audio-recorder) - This plugin provides an audio recorder for Android and iOS that supports recording of audio from a device microphone input and saved to an MP4/AAC audio file. It also provides a function to merge multiple audio recordings together.
- [Drawingpad](https://github.com/nativescript-community/nativescript-drawingpad) - NativeScript plugin to provide a way to capture any drawing (signatures are a common use case) from the device.
- [Exo Player](https://github.com/nstudio/nativescript-plugins/tree/main/packages/nativescript-exoplayer) - NativeScript plugin that uses the ExoPlayer video player on Android and AVPlayerViewController on iOS to play local and remote videos.
- [Trans Coder](https://github.com/VoiceThread/nativescript-plugins/tree/main/packages/nativescript-transcoder) - This plugin provides a few `audio` or `video` transcoding functions for Android API 21+ and iOS 4+.
- [Video Editor](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-video-editor) - A plugin for editing video.
- [Video Player](https://github.com/nstudio/nativescript-videoplayer) - A NativeScript plugin to provide the ability to play local and remote videos.
- [Video Recorder](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-videorecorder) - Video recording plugin for NativeScript.
- [YouTube Player](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-youtubeplayer) - Video Player only for YouTube.

### Networking Plugins

- [Klippa Nativescript Http](https://github.com/klippa-app/nativescript-http) - The best way to do HTTP requests in NativeScript, a drop-in replacement for the core HTTP with important improvements and additions like proper connection pooling, form data support and certificate pinning.
- [Nativescript Community Https](https://github.com/nativescript-community/https) - Secure HTTP client with SSL pinning for Nativescript - iOS/Android.
- [Pusher Channels](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-pusher-channels) - Powering realtime experiences for mobile and web by [pusher.com](https://pusher.com)
- [Socketio](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-socketio) - JavaScript Socket.IO client for real-time event-based communication (works with NativeScript).
- [websockets](https://github.com/valor-software/nativescript-plugins/tree/master/packages/nativescript-websockets) - For web-compatible WebSockets.

### Payment Plugins

- [Apple Pay](https://github.com/NativeScript/payments/tree/main/packages/apple-pay) - A plugin that allows you to offer Apple Pay in your iOS apps.
- [Google Pay](https://github.com/NativeScript/payments/tree/main/packages/google-pay) - A plugin that allows you to offer Google Pay in your Android app.
- [Payments](https://github.com/NativeScript/payments/tree/main/packages/payments) - A plugin that allows your app to use in-app purchases and subscriptions using Apple AppStore and Google PlayStore purchasing systems.
- [Revenuecat](https://github.com/mleleux-heykiddo/nativescript-plugins/tree/main/packages/nativescript-revenuecat) - A powerful and reliable in-app purchase server that makes it easy to build, analyze, and grow your subscriber base whether you're just starting out or already have millions of customers.
- [Square In App Payments](https://github.com/NativeScript/payments/tree/main/packages/square-in-app-payments) - Build remarkable payments experiences in your own apps with Square's In-App Payments SDK for NativeScript.
- [Stripe](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-stripe) - Is a financial infrastructure platform that enables businesses to accept and manage online payments, as well as handle recurring billing and other financial operations.

### Reporting Plugins

- [Sentry](https://github.com/nativescript-community/sentry) - A cross-platform application monitoring tool, with a focus on error reporting.

### Styling and Theme Plugins

- [Change Icon](https://github.com/NativeScript-Use/NativeScript-Use/tree/main/packages/change-icon) - A NativeScript plugin that allows dynamic switching of the app icon at runtime on iOS using alternate icons.
- [Tailwindcss](https://github.com/nativescript-community/tailwindcss) - Use Tailwind CSS utility classes in NativeScript.
- [Theme](https://github.com/NativeScript/theme) - Core themes for NativeScript apps.

### UI Kit Plugins

- [Flutter](https://github.com/NativeScript/ui-kit/tree/main/packages/flutter) - Use Flutter with NativeScript projects by creating a [Flutter module](https://docs.flutter.dev/add-to-app) in the root of your project.
- [Ionic Portals](https://github.com/NativeScript/ui-kit/tree/main/packages/ionic-portals) - A plugin that allows you to use [Ionic Portals](https://ionic.io/docs/portals) in NativeScript.
- [Jetpack Compose](https://github.com/NativeScript/ui-kit/tree/main/packages/jetpack-compose) - A plugin that allows you to use Jetpack Compose in NativeScript.
- [Morph Modal Kit](https://github.com/NativeScript/ui-kit/tree/main/packages/morph-modal-kit) - Is a lightweight, flexible UIKit package for building card-stack modals with smooth `morph` (replace) animations and support for sticky elements.
- [Rive](https://github.com/NativeScript/ui-kit/tree/main/packages/rive) - Rive for NativeScript, allows setup and interaction with the native implementation of the Rive runtime on iOS and Android.
- [Swift UI](https://github.com/NativeScript/ui-kit/tree/main/packages/swift-ui) - Use SwiftUI with NativeScript.
- [UI Charts](https://github.com/NativeScript/ui-kit/tree/main/packages/ui-charts) - Highcharts SDK for NativeScript.

### UI Material Plugins

Build beautiful, usable products using [Material Design Components](https://m2.material.io/design) for NativeScript.

- [Activity Indicator](https://github.com/nativescript-community/ui-material-components/tree/master/packages/activityindicator) - Material Design's Circular progress indicator component for NativeScript.
- [Bottom Navigation](https://github.com/nativescript-community/ui-material-components/tree/master/packages/bottom-navigation) - Material Design's Bottom navigation component for NativeScript.
- [Bottom Sheet](https://github.com/nativescript-community/ui-material-components/tree/master/packages/bottomsheet) - Material Design's Bottom sheet component for NativeScript.
- [Button](https://github.com/nativescript-community/ui-material-components/tree/master/packages/button) - Material Design's Button component for NativeScript.
- [Card](https://github.com/nativescript-community/ui-material-components/tree/master/packages/cardview) - Material Design's Card component for NativeScript.
- [Dialogs](https://github.com/nativescript-community/ui-material-components/tree/master/packages/dialogs) - Material Design's Dialogs component for NativeScript.
- [Floating Action Button](https://github.com/nativescript-community/ui-material-components/tree/master/packages/floatingactionbutton) - Material Design's Floating action button component for NativeScript.
- [Progress](https://github.com/nativescript-community/ui-material-components/tree/master/packages/progress) - Material Design's Linear progress indicator component for NativeScript.
- [Ripple](https://github.com/nativescript-community/ui-material-components/tree/master/packages/ripple) - Material Design's Ripple component for NativeScript.
- [Slider](https://github.com/nativescript-community/ui-material-components/tree/master/packages/slider) - Material Design's Slider component for NativeScript.
- [Snackbar](https://github.com/nativescript-community/ui-material-components/tree/master/packages/snackbar) - Material Design's Snackbar component for NativeScript.
- [Speed Dial](https://github.com/nativescript-community/ui-material-components/tree/master/packages/speeddial) - Material Design's Speed dial component for NativeScript.
- [Switch](https://github.com/nativescript-community/ui-material-components/tree/master/packages/switch) - Material Design's Switch component for NativeScript.
- [Tabs](https://github.com/nativescript-community/ui-material-components/tree/master/packages/tabs) - Material Design's Tabs component for NativeScript.
- [Text Field](https://github.com/nativescript-community/ui-material-components/tree/master/packages/textfield) - Material Design's Text field component for NativeScript.
- [Text View](https://github.com/nativescript-community/ui-material-components/tree/master/packages/textview) - Material Design's Text view component for NativeScript.

### UI Plugins

- [Accordion](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-accordion) - A NativeScript plugin for Accordion UI.
- [Auto Fit Text](https://github.com/NativeScript/plugins/blob/main/packages/auto-fit-text) - A plugin that extends the Nativescript Label with the functionality to adjust the font size according to the label's width.
- [Color Wheel](https://github.com/SergeyMell/nativescript-plugins/tree/main/packages/nativescript-color-wheel) - A NativeScript plugin that allows you to use a color wheel to select colors.
- [Country Code](https://github.com/wuilmerj24/nativescript-plugins/tree/main/packages/country-code) - Plugin for NativeScript provides a full list of country codes along with flags.
- [Datetime Picker](https://github.com/NativeScript/plugins/blob/main/packages/datetimepicker) - A plugin that provides the UI elements DatePickerField, TimePickerField and DateTimePickerFields for picking a date and a time.
- [Document Scanner](https://github.com/nativescript-community/document-scanner) - A NativeScript plugin to scan documents.
- [Feedback](https://github.com/valor-software/nativescript-plugins/tree/master/packages/nativescript-feedback) - Non-blocking textual feedback for your NativeScript App.
- [File Picker](https://github.com/VoiceThread/nativescript-plugins/tree/main/packages/nativescript-filepicker) - This file picker plugin exports function filePicker() that supports both single and multiple selection (for iOS, multiple selection feature depends on OS version) using only native picker approaches. Support Pick `Documents`, `Images`, `Video`, `Audio` and `Archives`.
- [Gallery View](https://github.com/wuilmerj24/nativescript-plugins/tree/main/packages/gallery-view) - A NativeScript plugin for viewing gallery assets, currently supports only images.
- [Image Cache It](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-image-cache-it) - A NativeScript plugin that automatically caches images for faster loading and better performance. It uses `SDWebImage` on iOS and `Glide` on android.
- [In App Review](https://github.com/valor-software/nativescript-plugins/tree/master/packages/nativescript-in-app-review) - A NativeScript plugin that triggers the native in-app review prompt, allowing users to rate your app without leaving it, using Play Store and App Store APIs.
- [Nested Scrollview](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-nested-scrollview) - A NativeScript plugin to make Nested Scroll View.
- [OTP](https://github.com/kefahB/plugins/tree/main/packages/nativescript-otp) - A NativeScript plugin to auto fill the One Time Code OTP for IOS and Android.
- [Picker](https://github.com/NativeScript/plugins/blob/main/packages/picker) - A NativeScript plugin that provides a UI element for picking an object/value from a list opened in a modal popup.
- [Radio Dialog](https://github.com/modos189/nativescript-radio-dialog) - A NativeScript plugin that provides radio button dialogs.
- [Ripple](https://github.com/edusperoni/nativescript-plugins/tree/main/packages/nativescript-ripple) - This plugin aims to bring a native (or close to native) ripple implementation on Android and iOS. The android version uses a `RippleDrawable` and conserves the previous background, as well as CSS styles.
- [RTL UI Layout](https://github.com/nativescript-rtl/ui) - Right-to-left UI Layout support for NativeScript.
- [Star Ratings](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-star-ratings) - A NativeScript plugin that provides a customizable star rating component for displaying and collecting user ratings in mobile apps.
- [SVG](https://github.com/SergeyMell/nativescript-plugins/tree/main/packages/nativescript-svg) - A NativeScript plugin that allows you to use SVG images in your NativeScript apps.
- [Time Range](https://github.com/wuilmerj24/nativescript-plugins/tree/main/packages/time-range) - A NativeScript plugin for selecting a time range using a time picker.
- [Toasty](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-toasty) - A NativeScript plugin to make Toast.
- [Tooltip](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-tooltip) - A NativeScript plugin to make Tooltip.
- [Tweeen](https://github.com/nativescript-community/tween) - A NativeScript plugin that natively wraps tween.js, a tweening engine for easy animations, incorporating optimized Robert Penner's equations.
- [UI Image](https://github.com/nativescript-community/ui-image) - Advanced and efficient image display plugin which uses `Fresco` (Android) and `SDWebImage` (iOS) to implement caching, placeholders, image effects, and much more.
- [UI Label](https://github.com/nativescript-community/ui-label) - Alternative to the built-in NativeScript Label but with better performance and additional features such as HTML rendering and more.
- [UI Pager](https://github.com/nativescript-community/ui-pager) - Pager / Carousel component that allows the user to swipe left and right through pages of data.
- [UI Chart](https://github.com/nativescript-community/ui-chart) - A powerful chart / graph plugin, supporting line, bar, pie, radar, bubble, and candlestick charts as well as scaling, panning and animations.
- [UI Canvas](https://github.com/nativescript-community/ui-canvas) - Implement Canvas into your NativeScript apps.
- [UI Persistent Bottomsheet](https://github.com/nativescript-community/ui-persistent-bottomsheet) - A NativeScript plugin that allows you to easily add a persistent bottomsheet to your projects.
- [UI Collectionview](https://github.com/nativescript-community/ui-collectionview) - Allows you to easily add a collection view (grid list view) to your projects. Supports vertical and horizontal modes, templating, and more.
- [UI Lottie](https://github.com/nativescript-community/ui-lottie) - A NativeScript plugin to expose AirBnB Lottie library.
- [UI PullToRefresh](https://github.com/nativescript-community/ui-pulltorefresh) - A NativeScript plugin to provide the Pull to Refresh control on any view.
- [UI Drawer](https://github.com/nativescript-community/ui-drawer) - A NativeScript plugin that allows you to easily add a side drawer (side menu) to your projects.
- [UI Popover](https://github.com/nativescript-community/ui-popover) - A NativeScript plugin to make Popover.
- [UI Webview](https://github.com/nativescript-community/ui-webview) - Extended WebView which adds many options such as custom scheme handlers, JavaScript execution, URL capturing, and more.
- [UI Cameraview](https://github.com/nativescript-community/ui-cameraview) - A CameraView allowing custom live processing for NativeScript.
- [UI Share File](https://github.com/nativescript-community/ui-share-file) - Send/share file to other apps.
- [UI Document Picker](https://github.com/nativescript-community/ui-document-picker) - A NativeScript plugin that allows you to select files from the device.
- [UI Checkbox](https://github.com/nativescript-community/ui-checkbox) - A NativeScript plugin for checkbox UI component.
- [UI Barcodeview](https://github.com/nativescript-community/ui-barcodeview) - NativeScript QR / barcode view plugin.
- [UI Blurview](https://github.com/nativescript-community/ui-blurview) - A image blurview plugin.
- [UI Neumorphic Layout](https://github.com/CatchABus/nativescript-plugins/tree/master/packages/ui-neumorphiclayout) - A plugin that adds support for neumorphism styling to NativeScript layout containers.
- [UI Range Seek Bar](https://github.com/nativescript-community/ui-range-seek-bar) - A NativeScript Range Seek Bar widget.
- [Windowed Modal](https://github.com/mukaschultze/nativescript-windowed-modal) - Consistent modals for NativeScript in Android and iOS.

### Utility Plugins

- [Accelerometer](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-accelerometer) - An acceleration sensor measures the acceleration applied to the device, including the force of gravity.
- [Algolia](https://github.com/nativescript-community/algolia) - A NativeScript plugin for Algolia search. This plugin is designed to mirror, as closely as possible, the structure of Algolia’s JavaScript client.
- [App Availability](https://github.com/NativeScript/plugins/tree/main/packages/appavailability) - A plugin that checks if an app is installed on a device.
- [Array Buffers](https://github.com/nativescript-community/arraybuffers) - Utility methods to work with Array Buffers in Nativescript.
- [Background HTTP](https://github.com/NativeScript/plugins/blob/main/packages/background-http) - A plugin that allows you to make background HTTP uploads.
- [Biometrics](https://github.com/NativeScript/plugins/blob/main/packages/biometrics) - A plugin that allows you to authenticate users with biometrics, such as fingerprints, facial recognition, etc.
- [Bitmap Factory](https://github.com/oliverphaser/nativescript-bitmap-factory) - A NativeScript plugin for creating and manipulating bitmap images.
- [Ble](https://github.com/nativescript-community/ble) - Connect to and interact with Bluetooth LE peripherals.
- [Brightness](https://github.com/NativeScript/plugins/blob/main/packages/brightness) - A plugin that get and set the device's brightness level.
- [Camera](https://github.com/NativeScript/plugins/blob/main/packages/camera) - A plugin that allows you to take a picture and optionally save it on the device storage.
- [Clipboard](https://github.com/NativeScript-Use/NativeScript-Use/tree/main/packages/nativescript-clipboard) - A NativeScript plugin that provides simple APIs to copy to and read from the system clipboard on Android and iOS.
- [Compass](https://github.com/modos189/nativescript-compass) - A NativeScript plugin that provides native compass functionality for both Android and iOS platforms. The plugin uses native sensor fusion algorithms and optimizes performance by minimizing JavaScript ↔ Native bridge calls.
- [Contacts](https://github.com/NativeScript/plugins/blob/main/packages/contacts) - A plugin that allows you to access Contacts directory on iOS and Android. You can pick a contact, update it, delete it, or add a new one.
- [Device Info](https://github.com/DeepakArora76/nativescript-dna-deviceinfo) - The plugin offers cross-platform utility APIs to retrieve or query device-related information. The utility APIs are available for iOS and Android platforms.
- [Downloader](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-downloader) - Is a NativeScript plugin used to download files from the internet directly to the user's device, with support for a progress bar, pause/resume functionality, and management of downloaded files.
- [Email](https://github.com/NativeScript/plugins/blob/main/packages/email) - A plugin to compose an e-mail, have the user edit the draft manually and send it.
- [ffmpeg](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-ffmpeg) - A NativeScript plugin that allows you to run FFmpeg commands directly on mobile devices for powerful media processing such as converting formats, compressing files, extracting audio, editing video, adding watermarks, and more.
- [Flashlight](https://github.com/it-serve/nativescript-ui-kit/tree/main/packages/flashlight) - A NativeScript plugin that allows you to control the device's flashlight.
- [Gesture Handler](https://github.com/nativescript-community/gesturehandler) - Declarative API exposing platform native touch and gesture system to NativeScript.
- [GPS](https://github.com/nativescript-community/gps) - Tracks GPS location updates regardless of the app state. Does not depend on Google Play Services.
- [Haptics](https://github.com/NativeScript/plugins/blob/main/packages/haptics) - A plugin that allows you to add haptics to your app. Playing haptics can engage people's sense of touch and bring their familiarity with the physical world into your app or game.
- [Image Cropper](https://github.com/bthurlow/nativescript-imagecropper) - A nativeScript image cropping plugin.
- [Image Optimize](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-imageoptimize) - Is a NativeScript plugin designed to optimize image rendering in applications, especially when handling large images, while maintaining performance and memory efficiency.
- [Image Picker](https://github.com/NativeScript/plugins/blob/main/packages/imagepicker) - Imagepicker plugin supporting both single and multiple selection.
- [Intersection Observer](https://github.com/NativeScript-Use/NativeScript-Use/tree/main/packages/nativescript-intersection-observer) - A NativeScript plugin that detects when a UI element enters or exits the viewport, similar to the IntersectionObserver API on the web.
- [InAppBrowser](https://github.com/proyecto26/nativescript-inappbrowser) - A NativeScript plugin that allows you to open URLs in an in-app browser.
- [iOS Security](https://github.com/NativeScript/plugins/tree/main/packages/ios-security) - IOSSecuritySuite for NativeScript. [iOS Security Suite](https://github.com/securing/IOSSecuritySuite) is an advanced and easy-to-use platform security & anti-tampering library.
- [IQ Keyboard Manager](https://github.com/NativeScript/plugins/blob/main/packages/iqkeyboardmanager) - A NativeScript wrapper for the popular [IQKeyboardManager](https://cocoapods.org/pods/IQKeyboardManager) iOS framework, which provides an elegant solution for preventing the iOS keyboard from covering UITextView controls.
- [Keyboard](https://github.com/NativeScript-Use/NativeScript-Use/tree/main/packages/nativescript-keyboard) - A NativeScript plugin that allows programmatically showing and hiding the virtual keyboard on Android and iOS.
- [Local Notifications](https://github.com/NativeScript/plugins/blob/main/packages/local-notifications) - A plugin that allows your app to show notifications when the app is not running. Just like remote push notifications, but a few orders of magnitude easier to set up.
- [Localize](https://github.com/NativeScript/plugins/tree/main/packages/localize) - A plugin that implements internationalization (i18n) using the native capabilities of each platform.
- [MD5](https://github.com/nativescript-community/md5) - A NativeScript plugin for fast MD5 computation for files.
- [Messenger](https://github.com/triniwiz/nativescript-plugins/tree/main/packages/nativescript-messenger) - A NativeScript plugin for sending SMS or MMS.
- [MQTT](https://github.com/edusperoni/nativescript-plugins/tree/main/packages/nativescript-mqtt) - A cross-platform NativeScript plugin for MQTT communication using native socket support and the open-source [MQTT PAHO library](http://www.eclipse.org/paho). Currently supports only the WebSocket protocol over port 80 or 443 (SSL).
- [NFC](https://github.com/EddyVerbruggen/nativescript-nfc) - NativeScript plugin to discover, read, and write NFC tags.
- [Nordic Semiconductor's DFU](https://github.com/CatchABus/nativescript-plugins/tree/master/packages/nordic-dfu) - A NativeScript plugin that integrates Nordic Semiconductor's DFU (Device Firmware Update) library, enabling seamless Bluetooth OTA firmware updates for compatible BLE devices.
- [Orientation](https://github.com/NativeScript-Use/NativeScript-Use/tree/main/packages/nativescript-orientation) - A NativeScript plugin to control and listen for device screen orientation changes on Android and iOS.
- [Pdf](https://github.com/NativeScript/plugins/blob/main/packages/pdf) - A simple PDF viewer. It conveniently uses the iOS WKWebView, and for Android it uses [AndroidPdfViewer](https://github.com/barteksc/AndroidPdfViewer).
- [preferences](https://github.com/nativescript-community/preferences) - This plugin allows native preference saving\loading on iOS and Android.
- [Printer](https://github.com/oliverphaser/nativescript-printer) - A NativeScript plugin for sending an image, PDF or the screen contents to a physical printer.
- [Secure Storage](https://github.com/NativeScript/plugins/blob/main/packages/secure-storage) - Secure Storage using [SAMKeychain](https://github.com/soffes/SAMKeychain) on iOS and [Hawk](https://github.com/orhanobut/hawk) on Android.
- [Shared Notification Delegate](https://github.com/NativeScript/plugins/blob/main/packages/shared-notification-delegate) - This project aims to prevent the shortcomings that come from the iOS implementation of only allowing a single delegate.
- [SMS Inbox](https://github.com/edusperoni/nativescript-plugins/tree/main/packages/nativescript-sms-inbox) - A NativeScript plugin to read text messages on android phone inbox using undocumented android api.
- [Social Share](https://github.com/NativeScript/plugins/blob/main/packages/social-share) - A plugin that allows you to share content to social media.
- [Speech Recognition](https://github.com/EddyVerbruggen/nativescript-speech-recognition) - Speech to text, using the awesome engines readily available on the device.
- [Task](https://github.com/NativeScript-Use/NativeScript-Use/tree/main/packages/nativescript-task) - A NativeScript module for simply handling background tasks via web workers.
- [Theme Switcher](https://github.com/NativeScript/plugins/blob/main/packages/theme-switcher) - A plugin that allows you to switch themes based on the theme from `@nativescript/theme`.
- [Universal Links](https://www.npmjs.com/package/@nativescript-community/universal-links) - Universal links (IOS) and App Links (Android) support for NativeScript.
- [View Shot](https://github.com/valor-software/nativescript-plugins/tree/master/packages/nativescript-view-shot) - Take a screenshot of an existing view, or render a view in the background and take a screenshot of it.
- [Zip](https://github.com/NativeScript/plugins/blob/main/packages/zip) - A plugin to zip and unzip files.

## More Plugins

- [NativeScript Market](https://market.nativescript.org) - Community plugin directory.
- [NativeScript on NPM](https://www.npmjs.com/search?page=0&q=nativescript&sortBy=score) - Plugin list sorted by popularity.

## Font and Font Icon

- [Fontawesome](https://www.kang-cahya.com/2025/07/how-to-install-and-use-font-awesome-in.html) - How to Install and Use Fontawesome in NativeScript.
- [Material Design Symbols](https://nstudio.io/blog/using-material-design-symbols-in-nativescript) - Using Material Design Symbols in NativeScript.
- [Fonts](https://docs.nativescript.org/project-structure/src/fonts) - How to add fonts type in NativeScript.

## Security

- [JavaScript obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator) - JavaScript Obfuscator is a powerful free obfuscator for JavaScript, containing a variety of features which provide protection for your source code. ([Tutorial](https://www.kang-cahya.com/2025/07/securing-javascript-code-in.html))

## Testing

### Unit Testing

- [ns test init](https://docs.nativescript.org/guide/testing)
- [NativeScript-Vue unit testing with Vitest](https://blog.nativescript.org/nativescript-vue-vitest-testing/)
- [@nativescript/unit-test-runner v3 release details - test your apps, your plugins, as well as platform APIs 💪 + integration extras like SonarCloud](https://blog.nativescript.org/unit-testing-with-v3-runner/)
- 

### End-to-end Integration Testing

- [Detox](https://docs.nativescript.org/plugins/detox) - Gray box end-to-end testing and automation framework for mobile apps.
- [Maestro](https://nstudio.io/blog/maestro-ui-testing-nativescript) - Maestro is the simplest and most effective UI testing framework.

## Background Service

- [Web Workers API](https://docs.nativescript.org/guide/multithreading) - The Workers API in NativeScript is loosely based on the [`Web Workers API`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) and the [`Web Workers Specification`](https://www.w3.org/TR/workers/).
- [JSch](https://github.com/NathanWalker/android-jsch-example) - NativeScript using Workers for Background Threading - Android example demonstrating a SSH connection via `com.jcraft.JSch`.

## macOS

- [Solidjs for macOS with NativeScript](https://github.com/ammarahm-ed/nativescript-macos-solid)
  - [Try yourself with Solid Desktop on macOS](https://apps.apple.com/us/app/solid-desktop/id6737216890?mt=12)
  
## visionOS (Vision Pro)

- [What happens when a SwiftUI and NativeScript developer embrace each other?](https://blog.nativescript.org/swiftui-dev-embraces-ns-dev/)
- [How to add visionOS to an existing app?](https://blog.nativescript.org/add-visionos-to-existing-nativescript-app/)
- [Particle Systems via RealityKit and Multiple Scenes during Vision Pro development with NativeScript](https://blog.nativescript.org/particles-and-multiple-scenes-vision-pro-development/)
- [Fastlane visionOS deployments with NativeScript](https://x.com/NativeScript/status/1923249210343723019)

## Videos and Podcasts

- [High Fidelity Platform APIs with v8 and NativeScript](https://www.youtube.com/watch?v=Mzy1jWxrSiw)
- [How NativeScript with Angular lit up Vegas in the Professional Lighting Industry](https://www.youtube.com/watch?v=3GT86zwEkSU)
- [Embedding V8 in the real world by Stanimira Vlaeva](https://www.youtube.com/watch?v=wz7Znu6tqFw)
- [Lightning Talk: Understanding how NativeScript works plus how to add your own Flavor](https://www.youtube.com/watch?v=iweVLGNzx1A)
- [Frontend Nation 2025: Native API Security with NativeScript](https://www.youtube.com/watch?v=iD_QWvJAiSI)
- [Why NativeScript? Why it’s worth learning today, tips for avoiding common pitfalls, and what’s coming next](https://x.com/frontendnation/status/1936113360702980351)
- [Real Native Vue Apps with NativeScript-Vue | VueConf US 2024](https://www.youtube.com/watch?v=6jmU1EfKWF0)
- [Use Native APIs in JS with Eduardo Speroni and Nathan Walker](https://www.youtube.com/watch?v=kzdq7GvXzAo)
- [Dive into NativeScript w/Nathan Walker & Ammar Ahmed](https://www.youtube.com/watch?v=j0s8w34Xh9o)
- [Kyohei Hamaguchi - Svelte Native in production](https://www.youtube.com/watch?v=0UwwJSQlKOM)
- [Alex Ziskind NativeScript Highlights](https://www.youtube.com/@AZisk/search?query=nativescript)
- [NativeScript 8.9 Q&A](https://www.youtube.com/watch?v=42dS4SwBKvw)

## Examples and Tutorials

### AI Integration Examples

- [Use Gemini Pro with NativeScript](https://x.com/NativeScript/status/1940163248051167399) - Official demo showcasing Gemini Pro AI integration.
  - [Interactive Demo](https://stackblitz.com/edit/nativescript-gemini-pro?file=src%2Fhome.html) - Try it live on StackBlitz.
- [Morphing Swift to 100% TypeScript with NativeScript + AI](https://nstudio.io/blog/morphing-swift-to-nativescript) - Advanced tutorial on converting Swift code to TypeScript using AI.

### Apple FoundationModels

- [Apple FoundationModels Documentation](https://developer.apple.com/documentation/foundationmodels) - Official Apple documentation for on-device AI.
- [Stream AI Responses using iOS 26 FoundationModels](https://nstudio.io/blog/stream-ai-responses-ios-26-foundationmodels) - Tutorial on implementing streaming AI responses.
- [ns-ios-foundationmodels](https://github.com/NathanWalker/ns-ios-foundationmodels) - Example NativeScript app using iOS 26+ FoundationModels.

## Misc

- [iOS 26 Liquid Glass](https://x.com/NativeScript/status/1932904031070097498)
- [Configure build.xcconfig for iOS 26 Liquid Glass](https://x.com/NativeScript/status/1932904032454214131)

## Tools

- [NativeScript online directly on StackBlitz by NativeScript Preview](https://preview.nativescript.org/)
- [Plugin Seed for Build NativeScript Plugins Fast ⚡](https://github.com/NativeScript/plugin-seed)
- [Nx: Smart Repos and Fast Builds](https://github.com/NativeScript/nx)
- [Cross-platform (xplat) tools for Nx workspaces](https://github.com/nstudio/xplat)
- [Crash Reporting with Sentry](https://docs.nativescript.org/guide/crash-reporting-sentry)
- [NativeScript Initializr is a Community tool to quickly generate NativeScript projects with associated plugins.](https://nativescript-initializr.jmarvall.com/)
- [NativeScript Snippets for Sublime Text](https://packagecontrol.io/search/nativescript)
- [NativeScript Snippets for Visual Studio Code](https://marketplace.visualstudio.com/search?term=NativeScript&target=VSCode&category=All%20categories&sortBy=Relevance)
- [Cursor Editor Rules for NativeScript](https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules-new/nativescript.mdc)
