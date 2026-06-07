---
title: OLEDragConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/OLEDragConstants
---
# OLEDragConstants

Mode values for the **OLEDragMode** property of a control, controlling whether OLE drag operations start automatically or only on demand.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEDragManual** | 0 | OLE dragging starts only when the control's **OLEDrag** method is called from code. |
| **vbOLEDragAutomatic** | 1 | OLE dragging starts automatically when the user begins to drag the control. |

::: info
Available only when the **FEATURE_OLEDRAGDROP** feature is enabled.
:::
