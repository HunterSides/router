---
title: React Native
sidebar_position: 1
---

Expo Router supports styling using React Native's `StyleSheet.create` API and/or inline styles.

## Limits of React Native styling

React Native's in-built `StyleSheet` API was designed as a low-level API and does not provide support for modern features that simplify building universal applications.

When targetting the web, we highly recommend using a different method of styling. Methods such as (CSS)[./css.md] allow responsive styling while streaming and avoid flashes of unstyled content.
