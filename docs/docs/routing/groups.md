---
title: Groups
sidebar_position: 3
---

You can prevent a segment from showing in the URL by using the group syntax `()`.

- `app/root/home.js` -- Matches `/root/home`.
- `app/(root)/home.js` -- Matches `/home`.

This is useful for adding layouts without adding additional segments to the URL.

### Shared Routes

To match the same URL with different layouts, use _groups_ with overlapping child routes.

This pattern is very common in native apps. For example, in Twitter, a profile can be viewed in every tab (home, search, profile). There should only be one URL needed to access this route however.

```bash title="File System"
app/
  _layout.js # Tab bar
  (home)
    _layout.js # Header
    [user].js # Matches `/baconbrix`
  (search)
    _layout.js # Header with search bar
    [user].js # Also matches `/baconbrix`
  (profile)
    _layout.js # Folding profile header
    [user].js # Also matches `/baconbrix`
```

> When reloading the page, the first match (alphabetically) will be rendered.

Shared routes can be navigated to directly by including the group name in the route, e.g. `/(search)/baconbrix` would navigate to `/baconbrix` in the _search_ layout.

<!-- TODO: optional group syntax `(())` -->

### Arrays

Instead of defining the same route multiple times with different layouts, use the array syntax `(,)` to duplicate the children of a group.

- `app/(home,search)/[user].js` -- creates `app/(home)/[user].js` and `app/(search)/[user].js` in memory.

Distinguishing between the two routes using the `segment` prop of a layout.

```js title="app/(home,search)/_layout.js"
export default function DynamicLayout({ segment }) {
  if (segment === "(search)") {
    return <SearchStack />;
  }

  return <Stack />;
}
```
