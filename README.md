# Expo Linking.getInitialURL() returns null intermittently

This repository demonstrates a bug in Expo's `Linking` API where `getInitialURL()` sometimes returns `null` even when a deep link is available. This can lead to unexpected behavior in apps that rely on deep linking for initial navigation.

## Bug Description

The `Linking.getInitialURL()` method, used to retrieve the URL that launched the app, occasionally fails to return the expected URL. Instead, it returns `null`, preventing the app from properly handling the deep link and leading to a broken user experience. This issue appears to be intermittent and not consistently reproducible.

## Reproduction

The `bug.js` file shows how this bug can manifest.  You can reproduce the issue by building the project for iOS or Android and testing with various scenarios such as testing on a physical device versus simulator, re-installing the app or multiple launches.

## Solution

The `bugSolution.js` file demonstrates a potential workaround by implementing more robust error handling and retry mechanisms.  The solution includes retries and a check if the `getInitialURL()` returns null before proceeding further. This solution is not a perfect fix, but it offers increased reliability.