---
title: LinkModeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/LinkModeConstants
---
# LinkModeConstants

DDE link-mode values for the **LinkMode** property of forms and supported controls.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbLinkNone** | 0 | No DDE link is active. |
| **vbLinkAutomatic** | 1 | The control updates whenever the source data changes. (Same value as **vbLinkSource**.) |
| **vbLinkSource** | 1 | The form acts as a DDE source: changes to its controls notify any client that has linked to them. |
| **vbLinkManual** | 2 | The control updates only when **LinkRequest** is called. |
| **vbLinkNotify** | 3 | A **LinkNotify** event is raised when the source data changes; the control updates only on demand. |
