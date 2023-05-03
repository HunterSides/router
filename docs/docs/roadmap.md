---
title: Roadmap
description: Fixing common issues with Expo Router setup.
sidebar_position: 1
---

Expo Router v1 is considered stable and will not add breaking changes until v2. Expo Router is still in early development and has a number of cases that prevent it from having parity with web-only equivalents.

This is a non-exhaustive list of features currently supported in the App Router

- ✅ Supported
- 🏗️ Work in Progress
- 💡 Under consideration

## React 18

| Feature           | Supported |
| ----------------- | --------- |
| Streaming         | ✅        |
| Server Components | 💡        |
| Suspense          | 🏗️        |

## Routing

| Feature                 | Supported |
| ----------------------- | --------- |
| Native Layouts          | ✅        |
| Custom Layouts          | ✅        |
| Deep-linking            | ✅        |
| Automatic deep-linking  | 🏗️        |
| Async Routes            | 🏗️        |
| Bundle splitting        | 🏗️        |
| Nested Layouts          | ✅        |
| Dynamic Route Segments  | ✅        |
| Route groups            | ✅        |
| Suspense loading states | 🏗️        |
| Error boundaries        | ✅        |
| Metadata                | 🏗️        |
| Link                    | ✅        |
| Splash Screen           | ✅        |
| Global Unmatched Route  | ✅        |

## Rendering

| Feature           | Supported |
| ----------------- | --------- |
| Static Rendering  | ✅        |
| Dynamic Rendering | ✅        |
| Node.js Rendering | ✅        |
| Edge Rendering    | ✅        |

<!-- TODO: Should test this        | -->
<!-- | Node Streaming    | ✅        | -->
<!-- | Edge Streaming    | ✅        | -->

## Bundling

Expo Router tightly coupled integration with the Metro bundler allows to add additional bundler features

| Feature          | Supported |
| ---------------- | --------- |
| Bundle splitting | 🏗️        |
| Tree shaking     | 🏗️        |

## External projects

These tasks are for external Expo and/or 3rd-Party projects that are required for us to complete our vision

| Feature                  | Supported |
| ------------------------ | --------- |
| Font fallbacks           | 🏗️        |
| Environment variables    | 🏗️        |
| CSS Modules              | 🏗️        |
| CSS className support    | 🏗️        |
| CSS media queries        | 🏗️        |
| CSS container queries    | 🏗️        |
| CSS variables            | 🏗️        |
| CSS psuedo classes       | 🏗️        |
| CSS parent state styling | 🏗️        |

## Utilities

| Feature      | Supported |
| ------------ | --------- |
| Jest testing | 🏗️        |
