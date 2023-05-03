---
title: Sitemap
sidebar_position: 1
---

On native, you can use the [`uri-scheme`](https://www.npmjs.com/package/uri-scheme) CLI to test opening native links on a device.

For example, if you want to launch the Expo Go app on iOS to the `/form-sheet` route, you can run:

> Replace `192.168.87.39:19000` with the IP address shown when running `npx expo start`.

```bash
npx uri-scheme open exp://192.168.87.39:19000/--/form-sheet --ios
```

You can also search for links directly in a browser like Safari or Chrome to test deep linking on physical devices. Learn more about [testing deep links](https://reactnavigation.org/docs/deep-linking).

## Sitemap

![](/img/directory.png)

We currently inject a `/_sitemap` file which provides a list of all routes in the app. This is useful for debugging and development. This screen is only injected during development, and won't be available in production.

We may remove this feature for the official release, but it's useful for now.
