---
title: wv2PermissionState
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2PermissionState
---
# wv2PermissionState
The host's decision on a permission request. Passed as the **ByRef** `State` argument of the [**PermissionRequested**](/en/official/Reference/WebView2/WebView2#permissionrequested) event --- assign one of these values to control whether the page is granted, denied, or left to the runtime's default behaviour. Mirrors the `COREWEBVIEW2_PERMISSION_STATE` enumeration.

| Constant | Value | Description |
|----------|-------|-------------|
| **wv2StateDefault** | 0 | Let the runtime decide --- typically prompts the user. |
| **wv2StateAllow** | 1 | Grant the permission silently. |
| **wv2StateDeny** | 2 | Deny the permission silently. |
