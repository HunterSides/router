---
title: Layouts
sidebar_position: 2
---

## Overview

Pages on their own fill the entire screen. Moving between them is a full page transition with no animation.

In native apps, users expect shared elements like headers and tab bars to persist between pages. These can be created using _layout routes_.

To create a layout route for a directory, create a file named `_layout.js` in the directory, and export a React component as _default_.

```js title="app/home/_layout.js"
import { Slot } from "expo-router";

export default function HomeLayout() {
  return <Slot />;
}
```

`<Slot />` will render the selected child route. This component can be wrapped with other components to create a layout.

```js title="app/home/_layout.js"
import { Slot } from "expo-router";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
```

## Native Layouts

Mobile app users expect a refined platform-specific look and native feel for layouts. Expo Router provides a few drop-in native layouts that you can use to easily achieve familiar native behavior.

- `Stack` - Render a stack of screens like a deck of cards with a header on top. This is a native stack navigator that uses native animations and gestures. Extends the library [`@react-navigation/native-stack`](https://reactnavigation.org/docs/native-stack-navigator).
- `Tabs` - Render screens with a tab bar below. [`@react-navigation/bottom-tabs`](https://reactnavigation.org/docs/bottom-tab-navigator/).
- `Navigator` - Render screens in a generic, unstyled wrapper. This is useful for creating custom layouts.

```js title="app/home/_layout.js"
import { Stack } from 'expo-router';

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ ... }} />
    )
}
```

## Custom layouts

TODO
