---
title: OptionButtonW Control
description: OptionButtonW Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '56aa530f-6bc7-47eb-a8c9-b5c269ba73bf'
  PropagateID: '56aa530f-6bc7-47eb-a8c9-b5c269ba73bf'
  ReservedCode1: '9e6633ee-5d39-4199-8d04-d15ef6ee5e5e'
  ReservedCode2: '9e6633ee-5d39-4199-8d04-d15ef6ee5e5e'
---

# OptionButtonW Control

Wraps the Windows system Button control, running in radio button style, with support for graphical style, owner-draw, image list, and visual styles.

## Enumerations

### OptImageListAlignmentConstants

| Constant | Value | Description |
|----------|-------|-------------|
| OptImageListAlignmentLeft | 0 | Left alignment |
| OptImageListAlignmentRight | 1 | Right alignment |
| OptImageListAlignmentTop | 2 | Top alignment |
| OptImageListAlignmentBottom | 3 | Bottom alignment |
| OptImageListAlignmentCenter | 4 | Center alignment |

### OptDrawModeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| OptDrawModeNormal | 0 | Standard mode, drawn by the system |
| OptDrawModeOwnerDraw | 1 | Owner-draw mode, drawing handled by code |

### CCAppearanceConstants

See Common Enumerations.

### CCLeftRightAlignmentConstants

See Common Enumerations.

### CCVerticalAlignmentConstants

See Common Enumerations.

### CCMousePointerConstants

See Common Enumerations.

### CCRightToLeftModeConstants

See Common Enumerations.

### OLEDropModeConstants

See Common Enumerations.

## Properties

### Value
`Property Get Value() As OLE_OPTEXCLUSIVE`
`Property Let Value(ByVal NewValue As OLE_OPTEXCLUSIVE)`

Selected state of the option button. True means selected.

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

Text caption displayed on the control.

### Alignment
`Property Get Alignment() As CCLeftRightAlignmentConstants`
`Property Let Alignment(ByVal Value As CCLeftRightAlignmentConstants)`

Alignment of the option button caption (left or right). See Common Enumerations.

### TextAlignment
`Property Get TextAlignment() As VBRUN.AlignmentConstants`
`Property Let TextAlignment(ByVal Value As VBRUN.AlignmentConstants)`

Alignment of the caption text (left, center, or right).

### PushLike
`Property Get PushLike() As Boolean`
`Property Let PushLike(ByVal Value As Boolean)`

Whether to make the control look and behave like a push button.

### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

Picture displayed on the control.

### WordWrap
`Property Get WordWrap() As Boolean`
`Property Let WordWrap(ByVal Value As Boolean)`

Whether to allow the caption text to wrap to prevent overflow.

### Transparent
`Property Get Transparent() As Boolean`
`Property Let Transparent(ByVal Value As Boolean)`

Whether to simulate a transparent background using a copy of the underlying background. This property is ignored at design time.

### VerticalAlignment
`Property Get VerticalAlignment() As CCVerticalAlignmentConstants`
`Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)`

Vertical alignment. See Common Enumerations.

### Style
`Property Get Style() As VBRUN.ButtonConstants`
`Property Let Style(ByVal Value As VBRUN.ButtonConstants)`

Control appearance style, standard or graphical. When DrawMode is not Normal, Style must be Standard.

### DisabledPicture
`Property Get DisabledPicture() As IPictureDisp`
`Property Let DisabledPicture(ByVal Value As IPictureDisp)`
`Property Set DisabledPicture(ByVal Value As IPictureDisp)`

Picture displayed when the button is disabled. Only applicable when Style is graphical.

### DownPicture
`Property Get DownPicture() As IPictureDisp`
`Property Let DownPicture(ByVal Value As IPictureDisp)`
`Property Set DownPicture(ByVal Value As IPictureDisp)`

Picture displayed when the button is pressed. Only applicable when Style is graphical.

### UseMaskColor
`Property Get UseMaskColor() As Boolean`
`Property Let UseMaskColor(ByVal Value As Boolean)`

Whether to use the MaskColor property as a transparent color. Only applicable when Style is graphical.

### MaskColor
`Property Get MaskColor() As OLE_COLOR`
`Property Let MaskColor(ByVal Value As OLE_COLOR)`

Color used as the transparent (mask) color in pictures. Only applicable when Style is graphical.

### DrawMode
`Property Get DrawMode() As OptDrawModeConstants`
`Property Let DrawMode(ByVal Value As OptDrawModeConstants)`

Draw mode, standard or owner-draw.

### ImageList
`Property Get ImageList() As Variant`
`Property Let ImageList(ByVal Value As Variant)`
`Property Set ImageList(ByVal Value As Variant)`

Associated image list control. The image list should contain a single image (for all states) or separate images for each state. Requires comctl32.dll 6.0 or later.

### ImageListAlignment
`Property Get ImageListAlignment() As OptImageListAlignmentConstants`
`Property Let ImageListAlignment(ByVal Value As OptImageListAlignmentConstants)`

Alignment of images from the image list. Requires comctl32.dll 6.0 or later.

### ImageListMargin
`Property Get ImageListMargin() As Single`
`Property Let ImageListMargin(ByVal Value As Single)`

Margin for images from the image list. Requires comctl32.dll 6.0 or later.

### Pushed
`Property Get Pushed() As Boolean`
`Property Let Pushed(ByVal Value As Boolean)`

Whether the option button is in a pressed state.

### Hot
`Property Get Hot() As Boolean`
`Property Let Hot(ByVal Value As Boolean)`

Whether the option button is in a hot state (mouse hover). Read-only; writing raises error 383. Requires comctl32.dll 6.0 or later.

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

Whether to enable visual styles. Requires comctl32.dll 6.0 or later.

### Appearance
`Property Get Appearance() As CCAppearanceConstants`
`Property Let Appearance(ByVal Value As CCAppearanceConstants)`

Control appearance, flat or 3D effect. See Common Enumerations.

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

Background color.

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

Foreground color.

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

Whether the control is enabled.

### OLEDropMode
`Property Get OLEDropMode() As OLEDropModeConstants`
`Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)`

OLE drag-drop target mode. See Common Enumerations.

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

Mouse pointer style. See Common Enumerations.

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

Custom mouse icon.

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

Whether to enable mouse enter/leave tracking.

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

Right-to-left display direction.

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

Right-to-left mode. See Common Enumerations.

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

Font.

### hWnd
`Property Get hWnd() As LongPtr`

Window handle of the option button control.

### hWndUserControl
`Property Get hWndUserControl() As LongPtr`

Window handle of the UserControl.

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

Initiates an OLE drag-drop operation.

### Refresh
`Public Sub Refresh()`

Forces the control to repaint.

## Events

### Click
`Public Event Click()`

Fired when a mouse button is pressed and released on the control.

### DblClick
`Public Event DblClick()`

Fired when the mouse is double-clicked on the control.

### HotChanged
`Public Event HotChanged()`

Fired when the hot state of the option button changes. Requires comctl32.dll 6.0 or later.

### OwnerDraw
`Public Event OwnerDraw(ByVal Action As Long, ByVal State As Long, ByVal hDC As Long, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)`

Fired when a visual aspect of the owner-draw button needs to be drawn.

### PreviewKeyDown
`Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Fired before the KeyDown event.

### PreviewKeyUp
`Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Fired before the KeyUp event.

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

Fired when a key is pressed.

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

Fired when a key is released.

### KeyPress
`Public Event KeyPress(KeyChar As Integer)`

Fired when a key character is input.

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when a mouse button is pressed.

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when the mouse is moved.

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when a mouse button is released.

### MouseEnter
`Public Event MouseEnter()`

Fired when the mouse enters the control.

### MouseLeave
`Public Event MouseLeave()`

Fired when the mouse leaves the control.

### OLECompleteDrag
`Public Event OLECompleteDrag(Effect As Long)`

Fired after an OLE drag-drop operation is completed or cancelled.

### OLEDragDrop
`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

Fired when data is dropped on the control via an OLE drag-drop operation.

### OLEDragOver
`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

Fired when the mouse moves over the control during an OLE drag-drop operation.

### OLEGiveFeedback
`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

Fired when the mouse cursor needs to be changed during an OLE drag-drop operation.

### OLESetData
`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

Fired when the drop target requests data not provided during OLEDragStart.

### OLEStartDrag
`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

Fired when an OLE drag-drop operation starts.

## Code Examples

```vb
' Basic option button
OptionButtonW1.Caption = "Option A"
OptionButtonW1.Value = True

' Graphical style
OptionButtonW1.Style = vbButtonGraphical
Set OptionButtonW1.Picture = LoadPicture("C:\icon.bmp")
Set OptionButtonW1.DownPicture = LoadPicture("C:\icon_down.bmp")

' Push-like option button
OptionButtonW1.PushLike = True

' Using image list
Set OptionButtonW1.ImageList = ImageList1
OptionButtonW1.ImageListAlignment = OptImageListAlignmentLeft
OptionButtonW1.ImageListMargin = 4

' Owner draw
OptionButtonW1.DrawMode = OptDrawModeOwnerDraw
```