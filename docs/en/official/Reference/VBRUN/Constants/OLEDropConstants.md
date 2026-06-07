---
title: OLEDropConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/OLEDropConstants
---
# OLEDropConstants

Mode values for the **OLEDropMode** property of a control, controlling whether and how the control accepts OLE drop operations.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEDropNone** | 0 | The control does not accept OLE drops. |
| **vbOLEDropManual** | 1 | The control raises **OLEDragOver** and **OLEDragDrop** events; the developer's code decides what to do. |
| **vbOLEDropAutomatic** | 2 | The control handles drops automatically based on the dropped data's format. |

::: info
Available only when the **FEATURE_OLEDRAGDROP** feature is enabled.
:::
