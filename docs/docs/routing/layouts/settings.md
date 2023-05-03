---
title: Settings
sidebar_position: 9999
---

:::caution

This guide refers to upcoming Expo Router features which are experimental, not covered by semantic versioning and you may need to be using the latest version on `main`

:::

### initialRouteName

When deep-linking to a route may want to provide a user with a "back" button. The `initialRouteName` sets the default screen of the stack and should match a valid filename (without the extension).

:::info

`initialRouteName` is ignored on Web.

:::

```bash title="File System"
app/
  _layout.js
  index.js
  other.js
```

```js title=app/_layout.tsx
import { Stack } from "expo-router";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function Layout() {
  return <Stack />;
}
```

Now deep linking directly to `/other` or reloading the page will continue to show the back arrow.

When using [array syntax](#arrays) `(foo,bar)` you can specify the name of a group in the `unstable_settings` object to target a particular segment.

```js
export const unstable_settings = {
  // Used for `(foo)`
  initialRouteName: "first",
  // Used for `(bar)`
  bar: {
    initialRouteName: "second",
  },
};
```
