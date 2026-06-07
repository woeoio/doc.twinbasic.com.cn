---
title: UpDown
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/UpDown
---

# UpDown class
An **UpDown** is a small spin control --- a pair of up / down arrow buttons that adjust an internal [**Value**](#value) by [**Increment**](#increment) on each click. Often paired with an external textbox or label to display the current value.

```vb
Private Sub Form_Load()
    UpDown1.Min = 0
    UpDown1.Max = 100
    UpDown1.Increment = 5
    UpDown1.Value = 50
End Sub

Private Sub UpDown1_Change()
    Text1.Text = UpDown1.Value
End Sub

Private Sub Text1_Change()
    If IsNumeric(Text1.Text) Then UpDown1.Value = CLng(Text1.Text)
End Sub
```

The control inherits the focusable rect-dockable members from `BaseControlFocusableNoFont` --- size, position, **Anchors**, **Dock**, **Appearance**, **MousePointer** / **MouseIcon**, **ToolTipText**, **DragMode** / **DragIcon**, **Drag**, **Refresh**, **SetFocus**, **TabIndex** / **TabStop**, **ZOrder**, **CausesValidation**, **VisualStyles**, **hWnd**, **HelpContextID** / **WhatsThisHelpID**. **UpDown** does not have a [**Font**](/en/official/Reference/VB/CheckBox/#font) property (the arrows are drawn by the OS theme).

## No auto-buddy

Unlike the VB6-era Win32 `msctls_updown32` control, this **UpDown** does not auto-attach to a "buddy" textbox --- there is no `UDS_AUTOBUDDY` style exposed. Pair the spin control with another control manually by handling [**Change**](#change), [**UpClick**](#upclick), and [**DownClick**](#downclick).

## Three event flavors

Three events let the application observe spin interaction at different granularity:

- **[Change](#change)** fires whenever [**Value**](#value) actually changes --- including programmatic assignments.
- **[UpClick](#upclick)** fires when the user clicks the up arrow and [**Value**](#value) increases.
- **[DownClick](#downclick)** fires when the user clicks the down arrow and [**Value**](#value) decreases.

Properties
----------

### Increment

The amount each click of the arrow buttons changes [**Value**](#value) by. **Long**. Default: `1`. Stored as the `nInc` field of a `UDACCEL` record applied via `UDM_SETACCEL`.

### Max

The upper bound of the range. **Long**. Default: `10`. Applied via `UDM_SETRANGE32`.

### Min

The lower bound of the range. **Long**. Default: `0`.

### Orientation

The control's orientation. A [**OrientationConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) member (**ccOrientationHorizontal** or **ccOrientationVertical**). Default: **ccOrientationHorizontal**. Changing this property at run time recreates the underlying Win32 window.

### ToolTipText

A tooltip string shown when the user hovers over the control. **String**. Inherited but re-exposed.

### Value

The current spinner value. **Long**. The default member. Reads via `UDM_GETPOS32`, writes via `UDM_SETPOS32`. Fires [**Change**](#change) when set programmatically. Clamped to [[**Min**](#min), [**Max**](#max)].

### VisualStyles

Whether the OS visual styles theme is applied. **Boolean**. Default: **True**. Inherited but re-exposed.

Events
------

### Change

Raised when [**Value**](#value) has changed by user interaction, by an arrow click, or by code.

Syntax: *object*\_**Change**( )

### DownClick

Raised when the user clicks the down arrow and [**Value**](#value) is successfully decreased.

Syntax: *object*\_**DownClick**( )

### DragDrop, DragOver

Inherited drag-drop events.

### GotFocus, LostFocus

Inherited focus events.

### Initialize

Raised after the control's window has been created.

### MouseDown, MouseMove, MouseUp

Inherited mouse events.

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

Inherited OLE drag-and-drop events.

### UpClick

Raised when the user clicks the up arrow and [**Value**](#value) is successfully increased.

Syntax: *object*\_**UpClick**( )

### Validate

Inherited validation event.

## See Also

- [Slider](/en/official/Reference/WinNativeCommonCtls/Slider) -- a draggable thumb on a track, when the range is visualised
- [OrientationConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) -- the shared horizontal / vertical enum used by **UpDown** and **Slider**
- [ControlTypeConstants](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) -- where **vbUpDown** lives
