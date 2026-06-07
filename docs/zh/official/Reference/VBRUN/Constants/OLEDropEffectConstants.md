---
title: OLEDropEffectConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/OLEDropEffectConstants
---
# OLEDropEffectConstants

Bit flags for the *Effect* argument of OLE drag-and-drop events, controlling what the source and target want the drop to do.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbDropEffectNone** | 0 | The drop is not allowed. |
| **vbDropEffectCopy** | 1 | The data should be copied to the target. |
| **vbDropEffectMove** | 2 | The data should be moved to the target --- the source removes it after a successful drop. |
| **vbDropEffectLink** | 4 | A link to the data should be created at the target. *(twinBASIC addition.)* |
| **vbDropEffectScroll** | -2147483648 | The target is scrolling because the cursor is near its edge. |

::: info
Available only when the **FEATURE_OLEDRAGDROP** feature is enabled.
:::
