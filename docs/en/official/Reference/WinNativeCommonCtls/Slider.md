---
title: Slider
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/Slider
---

# Slider class
A **Slider** is a trackbar control --- a horizontal or vertical channel with a draggable thumb that lets the user pick a value between [**Min**](#min) and [**Max**](#max). Optional tick marks, a floating value tip, and a highlighted selection range round out the control.

```vb
Private Sub Form_Load()
    Slider1.Min = 0
    Slider1.Max = 100
    Slider1.Value = 50
    Slider1.SmallChange = 1   ' arrow-key step
    Slider1.LargeChange = 10  ' PgUp/PgDn step
    Slider1.TickFrequency = 10
End Sub

Private Sub Slider1_Change()
    Label1.Caption = Slider1.Value & " %"
End Sub
```

The control inherits the focusable rect-dockable members from `BaseControlFocusableNoFont` --- size, position, **Anchors**, **Dock**, **Appearance**, **MousePointer** / **MouseIcon**, **ToolTipText**, **DragMode** / **DragIcon**, **Drag**, **Refresh**, **SetFocus**, **TabIndex** / **TabStop**, **ZOrder**, **CausesValidation**, **VisualStyles**, **hWnd**, **HelpContextID** / **WhatsThisHelpID**. Slider does not have a [**Font**](/en/official/Reference/VB/CheckBox/#font) property (its thumb and tick marks are drawn by the OS theme).

## Change vs Scroll

The slider raises two distinct events as the user interacts with the thumb:

- **[Scroll](#scroll)** fires *during* drag and during keyboard navigation --- every time the thumb position is updated, regardless of whether the user has settled.
- **[Change](#change)** fires *only when the drag completes* (mouse release) or when the user reaches an extremity with the keyboard.

Use **Scroll** for live previews ("show the value as the user is dragging") and **Change** for commit-style handlers ("apply the value once the user lets go").

## Selection range

Set [**SelectRange**](#selectrange) to **True** to enable a highlighted selection band overlay on the channel. [**SelStart**](#selstart) and [**SelLength**](#sellength) then become writable and define the selection's bounds. This is useful for "between X and Y" UI patterns where the user picks a value but the application wants to highlight a recommended sub-range.

When [**SelectRange**](#selectrange) is **False** (the default), [**SelLength**](#sellength) always reads as `0` and [**SelStart**](#selstart) reads back as the [**Min**](#min) value.

Properties
----------

### BackColor

The background color of the channel. **OLE_COLOR**. Default: **vbButtonFace**.

### BorderStyle

The control's border style. A [**ControlBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) member. Default: **vbNoBorder**.

### HideThumb

Whether the draggable thumb is hidden. **Boolean**. Default: **False**. When **True** the channel still functions but the user can only navigate it with the keyboard.

### LargeChange

The amount **PgUp** / **PgDn** moves the thumb by. **Long**. Default: `2`.

### Max

The upper bound of the range. **Long**. Default: `10`.

### Min

The lower bound of the range. **Long**. Default: `0`.

### Orientation

The slider's orientation. A [**OrientationConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) member (**ccOrientationHorizontal** or **ccOrientationVertical**). Default: **ccOrientationHorizontal**.

### SelectRange

Whether a highlighted selection band overlay is enabled. **Boolean**. Default: **False**. When **False**, [**SelStart**](#selstart) and [**SelLength**](#sellength) are inert; assignments are silently dropped.

### SelLength

The length of the highlighted selection band. **Long**. Read/write only when [**SelectRange**](#selectrange) is **True**. Assigning a value that pushes the end past [**Max**](#max) raises run-time error 380.

### SelStart

The starting position of the highlighted selection band. **Long**. Assigning a value outside [[**Min**](#min), [**Max**](#max)] raises run-time error 380.

### ShowTip

Whether the slider shows a floating tip with the current value while the thumb is being dragged. **Boolean**. Default: **True**. The tip side is controlled by [**TextPosition**](#textposition).

### SmallChange

The amount the arrow keys move the thumb by. **Long**. Default: `1`.

### TextPosition

Which side of the channel the floating tip is rendered on. A member of [**TextPositionConstants**](#textpositionconstants). Default: **sldBelowRight**. The naming reflects both axes: in horizontal orientation, **sldAboveLeft** renders above the channel and **sldBelowRight** renders below; in vertical orientation, **sldAboveLeft** renders to the left and **sldBelowRight** renders to the right.

### TickFrequency

How often tick marks appear along the channel. **Long**. Default: `1` (one tick per unit). Assigning `0` is silently coerced to the same as `1`.

### TickStyle

Which side(s) of the channel tick marks appear on. A member of [**TickStyleConstants**](#tickstyleconstants). Default: **sldBottomRight**.

### Value

The current thumb position. **Long**. The default member. Fires [**Change**](#change) when set programmatically.

Events
------

### Change

Raised when the user lets go of the thumb at a new position, or when the keyboard navigates to a track extremity. Distinct from [**Scroll**](#scroll), which fires continuously during drag.

Syntax: *object*\_**Change**( )

### Click

Raised on a mouse click inside the control's rectangle.

Syntax: *object*\_**Click**( )

### DragDrop, DragOver

Inherited drag-drop events.

### GotFocus, LostFocus

Inherited focus events.

### Initialize

Raised after the control's window has been created.

### KeyDown, KeyPress, KeyUp

Inherited keyboard events. The trackbar consumes arrow keys, **Home**, **End**, **PgUp**, and **PgDn** to navigate; the events still fire for the application to observe.

### MouseDown, MouseMove, MouseUp

Inherited mouse events.

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

Inherited OLE drag-and-drop events.

### Scroll

Raised continuously while the user is interacting with the thumb. Use this for live previews; use [**Change**](#change) for commit-style handlers.

Syntax: *object*\_**Scroll**( )

### Validate

Inherited validation event.

## TickStyleConstants

Determines which side(s) of the slider channel tick marks are rendered on. Declared on the **Slider** class.

| Member                | Value | Description                                                          |
|-----------------------|-------|----------------------------------------------------------------------|
| **sldBottomRight** | 0 | Ticks render below the channel (horizontal) or to the right (vertical). |
| **sldTopLeft**         | 1 | Ticks render above the channel (horizontal) or to the left (vertical). |
| **sldBoth**               | 2 | Ticks render on both sides of the channel.                            |
| **sldNoTicks**         | 3 | Tick marks are hidden.                                                |

## TextPositionConstants

Determines which side of the slider channel the floating tip is rendered on when [**ShowTip**](#showtip) is **True**. Declared on the **Slider** class.

| Member                          | Value | Description                                                                  |
|---------------------------------|-------|------------------------------------------------------------------------------|
| **sldAboveLeft** | 0 | Tip renders above the channel (horizontal) or to the left (vertical). |
| **sldBelowRight** | 1 | Tip renders below the channel (horizontal) or to the right (vertical). |

## See Also

- [ProgressBar](/en/official/Reference/WinNativeCommonCtls/ProgressBar) -- when the user only needs to see progress, not adjust a value
- [UpDown](/en/official/Reference/WinNativeCommonCtls/UpDown) -- a spin control for numeric value entry
- [OrientationConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) -- the shared horizontal / vertical enum used by **Slider** and **UpDown**
- [ControlTypeConstants](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) -- where **vbSlider** lives
