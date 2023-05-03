---
title: Unmatched routes
sidebar_position: 3
---

![](/img/unmatched.png)

Native apps don't have a server so there are technically no 404s. However, if you're implementing a router universally, then it makes sense to handle missing routes. This is done automatically for each app, but you can also customize it.

```js title=app/[...unmatched].js
import { Unmatched } from "expo-router";

export default Unmatched;
```

This will render the default `Unmatched`. You can export any component you want to render instead. We recommend having a link to `/` so users can navigate back to the home screen.
