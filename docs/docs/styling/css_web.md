---
title: CSS (web)
sidebar_position: 2
---

Expo Router supports CSS for styling web components.

## Using className

Expo Router supports styling components via the `className` prop. Simply `import` your stylesheet in the top-most `_layout` file.

```tsx
// app/layout.tsx
import { Slot } from "expo-router";

// Import your styles!
import "global.css";

export default function RootLayout() {
  return <Slot />;
}
```

```tsx
// app/index.tsx
export default function MyApp() {
  return <div className="css-selector" />;
}
```

## Using CSS Modules

CSS Modules are available by using the `.module.css` extension.

CSS Modules locally scope CSS by creating unique class names and work similarly to React Native styles.

```tsx
// app/index.tsx
import styles from "./styles.module.css";

export default function MyApp() {
  return <div styles={styles.container} />;
}
```
