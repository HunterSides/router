---
title: Pages
sidebar_position: 1
---

The file-based routing convention enables developers to structure their app in a logic and intuitive way. Expo Router uses this convention to optimize the app by generating native deep links and web routes automatically.

The convention is based on the concept of nesting routes inside each other to create shared UI elements like tab bars and headers across multiple children. This format should feel familiar to React developers.

File-based routing enables URLs for every page in your app. All routes must be created within the root `app/` directory. Within this directory, you can create routes by defining files using the route name.

- `app/home.js` matches `/home`.
- `app/settings/index.js` matches `/settings`.
- `app/[user].js` matches any unmatched path like `/evanbacon` or `/expo`.

## Pages

Pages are defined by exporting a React component as the default value from a file in the app directory.

```js title="app/home.js"
import { Text } from "react-native";

export default function Home() {
  return <Text>Home page</Text>;
}
```

- Files named `index` add no path segment to the URL. For example, `app/index.js` matches `/`.
- The following extensions are supported by default: `js`, `jsx`, `ts`, `tsx`.
- Metro platform extensions (e.g. `.ios.js`, `.native.ts`) are not supported.
  - The page can re-export a component from a platform extension file

## Dynamic Routes

Dynamic routes match any unmatched path at a given segment level.

- `app/blog/[slug].js` -- Matches `/blog/123` in your app and in the browser.
- `app/blog/[...rest].js` -- Matches `/blog/123/settings` in your app and in the browser.

Routes with higher specificity will be matched before a dynamic route. For example, `/blog/bacon` will match `blog/bacon.js` before `blog/[id].js`.

Multiple slugs can be matched in a single route by adding the _rest syntax_: `...`. For example, `app/blog/[...id].js` will match `/blog/123/settings` in your app and in the browser.

<!-- > The _optional syntax_ `[[]]` is not currently supported. -->
