---
title: WinNativeCommonCtls Package
parent: Packages
nav_order: 12
permalink: /tB/Packages/WinNativeCommonCtls/
---

# WinNativeCommonCtls Package
The **WinNativeCommonCtls** built-in package is a VB6-compatible replacement for **Microsoft Common Controls 6.0** (the legacy `MSCOMCTL.OCX`), reimplemented on top of the Win32 ComCtl32 controls in `COMCTL32.DLL` and `MSFTEDIT.DLL`. It ships eight controls that mirror the MSCOMCTL member names where possible, with the same property / method / event spellings VB6 developers will recognise.

The package is a built-in package shipped with twinBASIC. Add it through Project → References (**Ctrl-T**) → Available Packages.

## Why this package exists

VB6 projects that depend on `MSCOMCTL.OCX` cannot run unmodified in modern environments --- the OCX is unsigned, requires per-machine registration with admin rights, ships with known security advisories, and is not available on non-Windows hosts at all. **WinNativeCommonCtls** removes the dependency: drop a [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/), [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/), [**ProgressBar**](/official/Reference/WinNativeCommonCtls/ProgressBar), [**Slider**](/official/Reference/WinNativeCommonCtls/Slider), [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/), [**DTPicker**](/official/Reference/WinNativeCommonCtls/DTPicker), [**MonthView**](/official/Reference/WinNativeCommonCtls/MonthView), or [**UpDown**](/official/Reference/WinNativeCommonCtls/UpDown) onto a [**Form**](/official/Reference/VB/Form/) and twinBASIC creates the underlying Win32 ComCtl32 control directly, with no OCX involved.

The control names, property names, event signatures, and the `vb…` / `tvw…` / `lvw…` / `sld…` / `Prb…` member-name conventions all match the original `MSCOMCTL.OCX` API, so VB6 code that uses the original controls usually compiles and runs unchanged once the package reference is in place.

## Controls

Eight controls, each a leaf class that inherits from a `<Name>BaseCtl` where the entire API is declared:

- [DTPicker](/official/Reference/WinNativeCommonCtls/DTPicker) -- date / time picker: dropdown calendar, single-date [**Value**](/official/Reference/WinNativeCommonCtls/DTPicker#value), custom format strings, optional spin-button and checkbox variants
- [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/) -- off-screen image collection that feeds icons to [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) and [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) through the [**Icons**](/official/Reference/WinNativeCommonCtls/ListView/#icons) / [**SmallIcons**](/official/Reference/WinNativeCommonCtls/ListView/#smallicons) / [**ImageList**](/official/Reference/WinNativeCommonCtls/TreeView/#imagelist) properties; not visible at run time
- [ListView](/official/Reference/WinNativeCommonCtls/ListView/) -- multi-column list with four [**View**](/official/Reference/WinNativeCommonCtls/ListView/#view) modes (Icon / SmallIcon / List / Report), label-edit, checkboxes, column-header icons, and per-item state
- [MonthView](/official/Reference/WinNativeCommonCtls/MonthView) -- full-month calendar grid with multi-month layout ([**MonthColumns**](/official/Reference/WinNativeCommonCtls/MonthView#monthcolumns) × [**MonthRows**](/official/Reference/WinNativeCommonCtls/MonthView#monthrows)), multi-day selection, bold-day callbacks for highlighting, week numbers, and a today indicator
- [ProgressBar](/official/Reference/WinNativeCommonCtls/ProgressBar) -- standard / smooth / marquee progress indicator with three visual states (Normal / Error / Paused), horizontal or vertical orientation
- [Slider](/official/Reference/WinNativeCommonCtls/Slider) -- trackbar / slider with tick marks, optional selection range, vertical or horizontal orientation, and a draggable thumb with floating tip
- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) -- hierarchical tree of [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) objects with sorting, label-edit, checkboxes, image lists, and per-node bold / color overrides
- [UpDown](/official/Reference/WinNativeCommonCtls/UpDown) -- spin control with up / down arrows: pure [**Min**](/official/Reference/WinNativeCommonCtls/UpDown#min) / [**Max**](/official/Reference/WinNativeCommonCtls/UpDown#max) / [**Value**](/official/Reference/WinNativeCommonCtls/UpDown#value) / [**Increment**](/official/Reference/WinNativeCommonCtls/UpDown#increment) (no auto-buddy)

[**ListView**](/official/Reference/WinNativeCommonCtls/ListView/), [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/), and [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) include collection sub-objects --- see the folder index pages for the full hierarchy.

## Enumerations

Module-level enumerations shared across multiple controls live under [**Enumerations**](/official/Reference/WinNativeCommonCtls/Enumerations/); per-control nested enumerations (`ListViewConstants`, `PrbState`, `TickStyleConstants`, …) are documented on the page of the control that declares them.

- [Enumerations](/official/Reference/WinNativeCommonCtls/Enumerations/) -- the ten user-facing enumerations declared in shared modules

## Cross-control members

Every control inherits the standard VB-package members from `BaseControl` / `BaseControlRect` / `BaseControlRectDockable` / `BaseControlFocusable` (or `BaseControlNotFocusable`, where the control cannot take focus). Inherited members include:

- **Positioning and layout** --- **Name**, **Left**, **Top**, **Width**, **Height**, **Anchors**, **Dock**, **Visible**, **Enabled**, **Move**, **Refresh**, **ZOrder**, **Container**, **Parent**, **Index**, **Tag**, **hWnd**
- **Appearance** --- **BackColor** / **ForeColor** / **Font** (where focusable), **Appearance**, **VisualStyles**, **MousePointer** / **MouseIcon**
- **Tooltips, drag-and-drop, validation** --- **ToolTipText**, **DragMode** / **DragIcon**, **Drag**, **CausesValidation**, **Validate** event
- **Focus** (focusable controls only) --- **SetFocus**, **TabIndex**, **TabStop**, **GotFocus** / **LostFocus** events
- **Help integration** --- **HelpContextID**, **WhatsThisHelpID**
- **OLE drag-and-drop** --- **OLEDropMode**, the **OLEDrag** method, and the **OLEStartDrag** / **OLEGiveFeedback** / **OLESetData** / **OLEDragOver** / **OLEDragDrop** / **OLECompleteDrag** events. See [**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)
- **Transparency** --- **Opacity** (`Double`, 0--100, percentage) and **TransparencyKey** (`OLE_COLOR`, `-1` to disable). Both require Windows 8 (target OS 6.2+) for child controls; on older OS versions they are silently no-ops

Each control's reference page lists the control-specific members --- own properties, methods, events, and nested enums --- without re-enumerating the entire inherited base every time.

## Control type constants

Every control answers to one of the `vb…` values in [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants):

| Constant            | Value | Control                            |
|---------------------|-------|------------------------------------|
| **vbProgressBar**   | 21    | [ProgressBar](/official/Reference/WinNativeCommonCtls/ProgressBar)         |
| **vbTreeView**      | 22    | [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/)              |
| **vbSlider**        | 26    | [Slider](/official/Reference/WinNativeCommonCtls/Slider)                   |
| **vbUpDown**        | 27    | [UpDown](/official/Reference/WinNativeCommonCtls/UpDown)                   |
| **vbDTPicker**      | 28    | [DTPicker](/official/Reference/WinNativeCommonCtls/DTPicker)               |
| **vbMonthView**     | 29    | [MonthView](/official/Reference/WinNativeCommonCtls/MonthView)             |
| **vbListView**      | 30    | [ListView](/official/Reference/WinNativeCommonCtls/ListView/)              |
| **vbImageList**     | 31    | [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/)            |

Each control's **ControlType** property returns its constant at run time, allowing generic `For Each` loops over a form's **Controls** collection to discriminate between controls.

## See also

- [VB Package](/official/Reference/VB/) -- the standard control set: **CheckBox**, **CommandButton**, **TextBox**, **Frame**, **Form**, …
- [CustomControls Package](/official/Reference/CustomControls/) -- owner-drawn `Waynes…` custom controls when the Win32 API is not enough
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) -- the `vb…` discriminator constants used by the **ControlType** property on every control
- [OLEDropConstants](/official/Reference/VBRUN/Constants/OLEDropConstants) -- the **OLEDropMode** values shared by every control in this package
