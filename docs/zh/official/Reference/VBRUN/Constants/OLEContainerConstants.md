---
title: OLEContainerConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/OLEContainerConstants
---
# OLEContainerConstants

A combined enumeration containing every option value used by the **OLE** container control. Each logical group of values has a more specific enumeration of its own --- see the See Also section --- but **OLEContainerConstants** retains all of the original VB6 names so existing code continues to compile.

## OLE type

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLELinked** | 0 | The object is linked to its source. |
| **vbOLEEmbedded** | 1 | The object is embedded inside the container. |
| **vbOLEEither** | 2 | Either linked or embedded. |
| **vbOLENone** | 3 | No object. |

## Update options

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEAutomatic** | 0 | The container updates the linked object whenever the source changes. |
| **vbOLEFrozen** | 1 | Updates are paused. |
| **vbOLEManual** | 2 | Updates happen only when **Update** is called. |

## Activation triggers

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEActivateManual** | 0 | Manual activation via **DoVerb**. |
| **vbOLEActivateGetFocus** | 1 | Activate on focus. |
| **vbOLEActivateDoubleclick** | 2 | Activate on double-click. |
| **vbOLEActivateAuto** | 3 | Activate automatically based on the object's defaults. |

## Sizing

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLESizeClip** | 0 | The object is clipped at the container's edges. |
| **vbOLESizeStretch** | 1 | The object is stretched to fill the container. |
| **vbOLESizeAutoSize** | 2 | The container resizes itself to fit the object. |
| **vbOLESizeZoom** | 3 | The object is scaled to fit, preserving its aspect ratio. |

## Display style

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEDisplayContent** | 0 | The object's contents are displayed. |
| **vbOLEDisplayIcon** | 1 | The object is displayed as an icon. |

## Status

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEChanged** | 0 | The object has been changed since the last update. |
| **vbOLESaved** | 1 | The object has been saved. |
| **vbOLEClosed** | 2 | The object has been closed. |
| **vbOLERenamed** | 3 | The object has been renamed. |

## Verbs

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEPrimary** | 0 | Invoke the object's primary verb. |
| **vbOLEShow** | -1 | Show the object. |
| **vbOLEOpen** | -2 | Open the object in a separate window. |
| **vbOLEHide** | -3 | Hide the object. |
| **vbOLEUIActivate** | -4 | Activate the object's user interface. |
| **vbOLEInPlaceActivate** | -5 | Activate the object in place. |
| **vbOLEDiscardUndoState** | -6 | Discard any undo state the object holds. |

## Menu flags

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEFlagGrayed** | 1 | The verb appears grayed in the menu. |
| **vbOLEFlagDisabled** | 2 | The verb is disabled. |
| **vbOLEFlagChecked** | 8 | The verb appears with a check mark. |
| **vbOLEFlagSeparator** | 2048 | The item is rendered as a menu separator. |

## Miscellaneous

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOLEMiscFlagMemStorage** | 1 | The object's storage is held in memory rather than on disk. |
| **vbOLEMiscFlagDisableInPlace** | 2 | In-place activation is disabled for this object. |

### See Also

- [OLEContainerActivateConstants](/official/Reference/VBRUN/Constants/OLEContainerActivateConstants)
- [OLEContainerDisplayTypeConstants](/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants)
- [OLEContainerSizeModeConstants](/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants)
- [OLEContainerTypesAllowedConstants](/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants)
- [OLEContainerUpdateOptionsConstants](/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants)
