---
title: Stack
sidebar_position: 1
---

The `Stack` Layout in Expo Router wraps the [Native Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator) from React Navigation, not to be confused with the legacy [JS Stack Navigator](https://reactnavigation.org/docs/stack-navigator).

For a list of all options, see the [Native Stack Navigator: Options](https://reactnavigation.org/docs/native-stack-navigator#options).

```bash title="File System"
app/
  _layout.js
  index.js
  details.js
```

```js title=app/_layout.js
import { Stack } from "expo-router/stack";

export default function Layout() {
  return <Stack initialRouteName="index" />;
}
```

This will create a `Stack Layout` with two screens.
