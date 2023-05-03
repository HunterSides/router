---
title: Tabs
sidebar_position: 2
---

The `Stack` Layout in Expo Router wraps the [Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator) from React Navigation.

Expo Router adds an additional `href` screen option which can only be used with screen options that are an object (e.g. `screenOptions={{ href: "/path" }}`) and cannot be used simultaneously with `tabBarButton`.

## Hiding a tab

Sometimes you want a route to exist but not show up in the tab bar, you can pass `href: null` to disable the button:

```tsx title=app/_layout.tsx
import { Tabs } from "expo-router/tabs";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
    </Tabs>
  );
}
```

## Dynamic routes

You may want to use a dynamic route in your tab bar (for example a profile tab). For this case, you'll want the button to always link to a specific href.

```tsx title=app/_layout.tsx
import { Link } from "expo-router";
import { Tabs } from "expo-router/tabs";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the dynamic route.
        name="[user]"
        options={{
          // Ensure the tab always links to the same href.
          href: "/evanbacon",

          // OR you can use the Href object:
          href: {
            pathname: "/[user]",
            params: {
              user: "evanbacon",
            },
          },
        }}
      />
    </Tabs>
  );
}
```
