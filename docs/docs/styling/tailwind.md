---
title: Tailwind CSS 🧪
sidebar_position: 3
# TODO
sidebar_class_name: hidden
---

:::caution

This guide refers to upcoming Expo Router features which are experimental, not covered by semantic versioning and you may need to be using the latest version on `main`

:::

Using Expo Router's [CSS-interop](./css.md), [Tailwind CSS](https://tailwindcss.com/) can be used to style a universal application.

## Installing Tailwind

```bash
npm install -D tailwindcss
npx tailwindcss init -p
```

## Configuring Tailwind

You will need to ensure that the `content` options of your `tailwind.config.js` include the paths to the files that use Tailwind CSS class names

```tsx title="tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

You do not need to modify `postcss.config.js`

Be specific with your `content` regexes. Being too broad (such as `./**/*`) may include unintented files such as your `node_modules`.

## Importing styles

Add the neccessary [Tailwind directives](https://tailwindcss.com/docs/functions-and-directives#directives) to a `.css` file.

```css title="app/global.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And import this file into your application

```tsx title="app/_layout.tsx
import { Slot } from "expo-router";

// Import your styles!
import "./global.css";

export default function RootLayout() {
  return <Slot />;
}
```

## Known issues

### FOUC during development

When changing a style, you may see FOUC (Flash Of Unstyled Content) during developement. This is known issue between Tailwind and the development server and will not occur in production.
