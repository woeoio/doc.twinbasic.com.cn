---
title: ProgressBar Control
description: ProgressBar Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '15427758-ee78-4e8c-ae3d-c5846b91eef0'
  PropagateID: '15427758-ee78-4e8c-ae3d-c5846b91eef0'
  ReservedCode1: '20cd32db-ec34-4509-a8f0-ea044fa7a05b'
  ReservedCode2: '20cd32db-ec34-4509-a8f0-ea044fa7a05b'
---

# ProgressBar Control

Wraps the msctls_progress32 system progress bar control for displaying operation progress, supporting standard, smooth, and marquee scrolling modes as well as taskbar progress display.

## Enumerations

### PrbOrientationConstants

| Constant | Value | Description |
|----------|-------|-------------|
| PrbOrientationHorizontal | 0 | Horizontal orientation |
| PrbOrientationVertical | 1 | Vertical orientation |

### PrbScrollingConstants

| Constant | Value | Description |
|----------|-------|-------------|
| PrbScrollingStandard | 0 | Standard mode |
| PrbScrollingSmooth | 1 | Smooth scrolling |
| PrbScrollingMarquee | 2 | Marquee mode |

### PrbStateConstants

| Constant | Value | Description |
|----------|-------|-------------|
| PrbStateNormal | 1 | Normal state |
| PrbStateError | 2 | Error state (red) |
| PrbStatePaused | 3 | Paused state (yellow) |

### CCMousePointerConstants

See common enumerations.

## Properties

### Min
`Property Get Min() As Long`
`Property Let Min(ByVal Value As Long)`

Minimum value.

### Max
`Property Get Max() As Long`
`Property Let Max(ByVal Value As Long)`

Maximum value.

### Value
`Property Get Value() As Long`
`Property Let Value(ByVal Value As Long)`

Current value.

### Step
`Property Get Step() As Long`
`Property Let Step(ByVal Value As Long)`

Step increment.

### StepAutoReset
`Property Get StepAutoReset() As Boolean`
`Property Let StepAutoReset(ByVal Value As Boolean)`

Whether to automatically reset to the minimum value when StepIt reaches the maximum.

### MarqueeAnimation
`Property Get MarqueeAnimation() As Boolean`
`Property Let MarqueeAnimation(ByVal Value As Boolean)`

Whether to enable marquee animation. Only effective when Scrolling is PrbScrollingMarquee.

### MarqueeSpeed
`Property Get MarqueeSpeed() As Long`
`Property Let MarqueeSpeed(ByVal Value As Long)`

Marquee animation speed in milliseconds. Only effective when Scrolling is PrbScrollingMarquee.

### Orientation
`Property Get Orientation() As PrbOrientationConstants`
`Property Let Orientation(ByVal Value As PrbOrientationConstants)`

Progress bar orientation.

### Scrolling
`Property Get Scrolling() As PrbScrollingConstants`
`Property Let Scrolling(ByVal Value As PrbScrollingConstants)`

Scrolling mode.

### SmoothReverse
`Property Get SmoothReverse() As Boolean`
`Property Let SmoothReverse(ByVal Value As Boolean)`

Whether to enable smooth reverse effect. Requires comctl32.dll version 6.0 or later.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Foreground color.

### State
`Property Get State() As PrbStateConstants`
`Property Let State(ByVal Value As PrbStateConstants)`

Progress bar state (normal/error/paused).

### ShowInTaskBar
`Property Get ShowInTaskBar() As Boolean`
`Property Let ShowInTaskBar(ByVal Value As Boolean)`

Whether to display progress on the taskbar. Requires Windows 7 or later.

### Text
`Property Get Text() As String`
`Property Let Text(ByVal Value As String)`

Text overlaid on the progress bar. Supports placeholders: `{0}` for current value, `{1}` for minimum value, `{2}` for maximum value, `{3}` for percentage value.

### TextColor
`Property Get TextColor() As OLE_COLOR`
`Property Let TextColor(ByVal Value As OLE_COLOR)`

Color of the overlay text.

### BorderStyle
`Property Get BorderStyle() As Integer`
`Property Let BorderStyle(ByVal Value As Integer)`

Border style (vbBSNone or vbFixedSingle).

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether to enable visual styles.

### hWnd
`Property Get hWnd() As LongPtr`

Window handle of the progress bar control.

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

Window handle of the user control.

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

Font.

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

Whether the control is enabled.

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

Mouse pointer style. See common enumerations.

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

Custom mouse icon.

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

Whether to enable mouse enter/leave tracking.

### Name
`Property Get Name() As String`

Control name. Read-only.

### Tag
`Property Get Tag() As String`
`Property Let Tag(ByVal Value As String)`

Custom data.

### Parent
`Property Get Parent() As Object`

Parent object. Read-only.

### Container
`Property Get Container() As Object`
`Property Set Container(ByVal Value As Object)`

Container object.

### Left
`Property Get Left() As Single`
`Property Let Left(ByVal Value As Single)`

Left position.

### Top
`Property Get Top() As Single`
`Property Let Top(ByVal Value As Single)`

Top position.

### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

Width.

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

Height.

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

Whether the control is visible.

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

Tooltip text.

### HelpContextID
`Property Get HelpContextID() As Long`
`Property Let HelpContextID(ByVal Value As Long)`

Help context ID.

### WhatsThisHelpID
`Property Get WhatsThisHelpID() As Long`
`Property Let WhatsThisHelpID(ByVal Value As Long)`

"What's This" help ID.

### DragIcon
`Property Get DragIcon() As IPictureDisp`
`Property Let DragIcon(ByVal Value As IPictureDisp)`
`Property Set DragIcon(ByVal Value As IPictureDisp)`

Drag icon.

### DragMode
`Property Get DragMode() As Integer`
`Property Let DragMode(ByVal Value As Integer)`

Drag mode.

## Methods

### StepIt
`Public Sub StepIt()`

Advances the current position by the increment specified by the Step property.

### Increment
`Public Sub Increment(ByVal Delta As Long)`

Advances the current position by the specified increment.

### Drag
`Public Sub Drag([ByRef Action As Variant])`

Starts, ends, or cancels a drag operation.

### SetFocus
`Public Sub SetFocus()`

Moves focus to the control.

### ZOrder
`Public Sub ZOrder([ByRef Position As Variant])`

Sets the Z-order of the control.

### OLEDrag
`Public Sub OLEDrag()`

Initiates an OLE drag operation.

### Refresh
`Public Sub Refresh()`

Forces the control to repaint.

## Events

### Change
`Public Event Change()`

Fired when the Value property changes.

### Click
`Public Event Click()`

Fired when the control is clicked.

### DblClick
`Public Event DblClick()`

Fired when the control is double-clicked.

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when a mouse button is pressed.

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when a mouse button is released.

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when the mouse is moved.

### MouseEnter
`Public Event MouseEnter()`

Fired when the mouse enters the control.

### MouseLeave
`Public Event MouseLeave()`

Fired when the mouse leaves the control.

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

Fired when a key is pressed.

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

Fired when a key is released.

### KeyPress
`Public Event KeyPress(KeyChar As Integer)`

Fired when a key character is input.

## Code Examples

```vb
' Standard progress bar
ProgressBar1.Min = 0
ProgressBar1.Max = 100
ProgressBar1.Value = 0
ProgressBar1.Step = 10
ProgressBar1.StepIt

' Progress bar with text overlay
ProgressBar1.Min = 0
ProgressBar1.Max = 1000
ProgressBar1.Text = "Processing {3}%"
ProgressBar1.TextColor = vbWhite

' Marquee mode (indeterminate progress)
ProgressBar1.Scrolling = PrbScrollingMarquee
ProgressBar1.MarqueeAnimation = True
ProgressBar1.MarqueeSpeed = 30

' Taskbar progress display (Windows 7+)
ProgressBar1.ShowInTaskBar = True
ProgressBar1.State = PrbStateNormal
```