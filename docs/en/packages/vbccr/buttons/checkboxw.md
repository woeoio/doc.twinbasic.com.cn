---
title: CheckBoxW Control
description: CheckBoxW Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a086dc6b-f882-493a-b792-97fc6c61d2fa'
  PropagateID: 'a086dc6b-f882-493a-b792-97fc6c61d2fa'
  ReservedCode1: '8a8b4cbe-cc90-400a-b434-03377ddc2cbf'
  ReservedCode2: '8a8b4cbe-cc90-400a-b434-03377ddc2cbf'
---

# CheckBoxW Control

Enhanced CheckBox control with support for visual styles, owner-draw, ImageList icons, and PushLike mode.

## Enumerations

### ChkImageListAlignmentConstants

| Constant | Value | Description |
|----------|-------|-------------|
| ChkImageListAlignmentLeft | 0 | Left alignment |
| ChkImageListAlignmentRight | 1 | Right alignment |
| ChkImageListAlignmentTop | 2 | Top alignment |
| ChkImageListAlignmentBottom | 3 | Bottom alignment |
| ChkImageListAlignmentCenter | 4 | Center alignment |

### ChkDrawModeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| ChkDrawModeNormal | 0 | Normal mode, drawn by the system |
| ChkDrawModeOwnerDraw | 1 | Owner-draw mode, drawn by code |

## Properties

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether to enable visual styles.

### Appearance
`Property Get Appearance() As CCAppearanceConstants`
`Property Let Appearance(ByVal Value As CCAppearanceConstants)`

Appearance style. See Common Enumerations.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Foreground color.

### ImageList
`Property Get ImageList() As Variant`
`Property Let ImageList(ByVal Value As Variant)`
`Property Set ImageList(ByVal Value As Variant)`

Associated ImageList control.

### ImageListAlignment
`Property Get ImageListAlignment() As ChkImageListAlignmentConstants`
`Property Let ImageListAlignment(ByVal Value As ChkImageListAlignmentConstants)`

ImageList icon alignment.

### ImageListMargin
`Property Get ImageListMargin() As Single`
`Property Let ImageListMargin(ByVal Value As Single)`

ImageList icon margin.

### Value
`Property Get Value() As Integer`
`Property Let Value(ByVal Value As Integer)`

CheckBox state (0 - unchecked, 1 - checked, 2 - grayed).

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

Caption text.

### Alignment
`Property Get Alignment() As CCLeftRightAlignmentConstants`
`Property Let Alignment(ByVal Value As CCLeftRightAlignmentConstants)`

CheckBox alignment. See Common Enumerations.

### TextAlignment
`Property Get TextAlignment() As VBRUN.AlignmentConstants`
`Property Let TextAlignment(ByVal Value As VBRUN.AlignmentConstants)`

Text alignment.

### PushLike
`Property Get PushLike() As Boolean`
`Property Let PushLike(ByVal Value As Boolean)`

Whether to display as a button style.

### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

Picture.

### WordWrap
`Property Get WordWrap() As Boolean`
`Property Let WordWrap(ByVal Value As Boolean)`

Whether to enable word wrap.

### Transparent
`Property Get Transparent() As Boolean`
`Property Let Transparent(ByVal Value As Boolean)`

Whether to use a transparent background (effective at run time).

### VerticalAlignment
`Property Get VerticalAlignment() As CCVerticalAlignmentConstants`
`Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)`

Vertical alignment. See Common Enumerations.

### Style
`Property Get Style() As VBRUN.ButtonConstants`
`Property Let Style(ByVal Value As VBRUN.ButtonConstants)`

Appearance style (standard or graphical).

### DisabledPicture
`Property Get DisabledPicture() As IPictureDisp`
`Property Let DisabledPicture(ByVal Value As IPictureDisp)`
`Property Set DisabledPicture(ByVal Value As IPictureDisp)`

Disabled state picture. Effective when Style is graphical.

### DownPicture
`Property Get DownPicture() As IPictureDisp`
`Property Let DownPicture(ByVal Value As IPictureDisp)`
`Property Set DownPicture(ByVal Value As IPictureDisp)`

Pressed state picture. Effective when Style is graphical.

### UseMaskColor
`Property Get UseMaskColor() As Boolean`
`Property Let UseMaskColor(ByVal Value As Boolean)`

Whether to use mask color. Effective when Style is graphical.

### MaskColor
`Property Get MaskColor() As OLE_COLOR`
`Property Let MaskColor(ByVal Value As OLE_COLOR)`

Mask color. Effective when Style is graphical.

### DrawMode
`Property Get DrawMode() As ChkDrawModeConstants`
`Property Let DrawMode(ByVal Value As ChkDrawModeConstants)`

Draw mode.

### Pushed
`Property Get Pushed() As Boolean`

Whether the control is in a pressed state. Read-only.

### Hot
`Property Get Hot() As Boolean`

Whether the control is in a hot state (mouse hover). Read-only.

### hWnd
`Property Get hWnd() As LongPtr`

Window handle.

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

UserControl window handle.

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

Font.

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

Whether the control is enabled.

### OLEDropMode
`Property Get OLEDropMode() As OLEDropModeConstants`
`Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)`

OLE drag-drop mode. See Common Enumerations.

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

Mouse pointer. See Common Enumerations.

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

Custom mouse icon.

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

Mouse enter/leave tracking.

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / HelpContextID / WhatsThisHelpID / DragIcon / DragMode

See standard extender properties.

## Methods

### Refresh
`Public Sub Refresh()`

Forces a repaint.

### OLEDrag
`Public Sub OLEDrag()`

Initiates an OLE drag-drop operation.

### Drag / ZOrder / SetFocus / Move

See standard methods.

## Events

### Click
`Public Event Click()`

Single click.

### DblClick
`Public Event DblClick()`

Double click.

### HotChanged
`Public Event HotChanged()`

Fired when the hot state changes.

### OwnerDraw
`Public Event OwnerDraw(ByVal ItemAction As Long, ByVal ItemState As Long, ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)`

Owner-draw event. Fired when DrawMode is OwnerDraw.

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

### KeyPress
`Public Event KeyPress(KeyAscii As Integer)`

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

### MouseEnter
`Public Event MouseEnter()`

### MouseLeave
`Public Event MouseLeave()`

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

See OLE drag-drop events.

## Code Examples

### Basic Usage

```vb
' Set up a tri-state CheckBox
CheckBoxW1.Value = vbChecked    ' Checked
CheckBoxW2.Value = vbUnchecked  ' Unchecked
CheckBoxW3.Value = vbGrayed     ' Grayed

' PushLike button style
CheckBoxW1.PushLike = True

' Associate ImageList
Set CheckBoxW1.ImageList = ImageList1
CheckBoxW1.ImageListAlignment = ChkImageListAlignmentLeft
```

### Owner-Draw Mode

```vb
Private Sub CheckBoxW1_OwnerDraw(ByVal ItemAction As Long, ByVal ItemState As Long, _
    ByVal hDC As LongPtr, ByVal Left As Long, ByVal Top As Long, _
    ByVal Right As Long, ByVal Bottom As Long)
    ' Draw custom CheckBox here
End Sub
```