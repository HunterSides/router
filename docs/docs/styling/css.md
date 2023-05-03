---
title: CSS 🧪
sidebar_position: 2
# TODO
sidebar_class_name: hidden
---

:::caution

This guide refers to upcoming Expo Router features which are experimental, not covered by semantic versioning and you may need to be using the latest version on `main`

:::

Expo Router provides a CSS-interop for your application. This allows you to style your application using the CSS language or use a styling solution that compiles to CSS.

:::tip

This is not a full CSS implemention. Think of it as "CSS - just the good bits"

:::

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
  return <View className="css-selector" />;
}
```

## Using CSS Modules

CSS Modules are available by using the `.module.css` extension.

CSS Modules locally scope CSS by creating unique class names and work similarly to React Native styles.

```tsx
// app/index.tsx
import styles from "./styles.module.css";

export default function MyApp() {
  return <View styles={styles.container} />;
}
```

## Features

The CSS-interop provides a React Native polyfills for these common CSS features.

- Additional relative units
  - `vw`,`vh`
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
  - [Media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#targeting_media_features)
  - [prefered-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
  - [Accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)
- [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
  - Dimentions
  - Styles
- Style variables
- Psuedo classes
- Works with web streaming

Additionally it includes these bundling features

- When developing locally, changes to stylesheets will instantly reflect changes as edits are made.
- When building for production, CSS files will be minified and common styles grouped.

## Behaviour differences

### Flexbox

Yoga (React Native's layout engine) using a slightly different Flexbox model than web browsers, as such there are minor behavioural differences.

| Feature        | Difference                                                | Solution                        |
| -------------- | --------------------------------------------------------- | ------------------------------- |
| flex-direction | Native defaults to `column` while web uses `row`.         | Explicity set `flex-direction`. |
| align-content  | Native defaults to `flex-start` while web uses `stretch`. | Explicity set `align-content`.  |
| flex-shrink    | Native defaults to `0` while web uses `1`.                | Explicity set `flex-shrink`.    |

Additionally, React Native's numeric representation of `flex` is not supported and instead represents the **One-value syntax** of [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex).

```css
flex: <value>
// expands to
flex-grow: <value>;
flex-shrink: 1;
flex-basis: 0;
```

### No style inheritance

The CSS interop does not support [CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade). As such, allow CSS rules should be written as single-selectors. We recommend using a CSS methodolgy such as:

- Atomic CSS (https://css-tricks.com/lets-define-exactly-atomic-css/)
- BEM (https://getbem.com/introduction/)

### Selectors

On native, only single class selectors are used.

```css
// ❌
div {
  color: red;
}
// ❌
.container .text {
  color: red;
}

// ✔️
.text-red {
  color: red;
}
```

You can still specify them, as they are still valid for web, but we recommend limiting to usuage to only `html`/`body`

### Specificity

:::info

We are working on resolving this discrepancy

:::

Native styles are resolved right-to-left, while Web styles are resolved via [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

### rem

`rem` is the relative CSS unit for Font size of the root element. On native, the font size defaults to `14` and is _not relative_ to your root element. If you which to dynamically change the `rem` value, you need to set `inlineRem: false` in your `metro.config.js` file. Now the value of `rem` can be set by calling `StyleSheet.rem.set(<number>)`

## Troubleshooting

### Elements are not appearing on Native

This is most likely due to minor differences in [React Native's flexbox model](#flexbox). A common offender is the differences between `flex-shrink` and simply setting `flex: 1` will resolve your issue.
