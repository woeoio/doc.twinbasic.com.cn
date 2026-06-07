---
title: wv2PermissionKind
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2PermissionKind
---
# wv2PermissionKind
Identifies which device or browser capability a web page is asking permission to use. Passed as the `PermissionKind` argument of the [**PermissionRequested**](/en/official/Reference/WebView2/WebView2#permissionrequested) event. Mirrors the `COREWEBVIEW2_PERMISSION_KIND` enumeration in the Edge WebView2 runtime.

| Constant | Value | Description |
|----------|-------|-------------|
| **wv2UnknownPermission** | 0 | Permission kind not recognised by the runtime. |
| **wv2Microphone** | 1 | Permission to capture audio from the user's microphone. |
| **wv2Camera** | 2 | Permission to capture video from the user's camera. |
| **wv2Geolocation** | 3 | Permission to read the device's geographic location. |
| **wv2Notifications** | 4 | Permission to show desktop notifications. |
| **wv2Sensors** | 5 | Permission to read motion, orientation, light, and similar sensors. |
| **wv2ClipboardRead** | 6 | Permission to read the system clipboard. |
