---
title: Animation Control
description: Animation Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b608eee6-db3c-4e20-b1ae-3e5eef4431a0'
  PropagateID: 'b608eee6-db3c-4e20-b1ae-3e5eef4431a0'
  ReservedCode1: '972b6a38-2f51-4071-8dde-033e894032bf'
  ReservedCode2: '972b6a38-2f51-4071-8dde-033e894032bf'
---

# Animation Control

Wraps the SysAnimate32 system animation control for playing silent AVI animations.

## Enumerations

### CCBackStyleConstants

See common enumerations.

## Properties

### AutoPlay
`Property Get AutoPlay() As Boolean`
`Property Let AutoPlay(ByVal Value As Boolean)`

Auto play; starts playing immediately after the control is created.

### BackStyle
`Property Get BackStyle() As CCBackStyleConstants`
`Property Let BackStyle(ByVal Value As CCBackStyleConstants)`

Background style, transparent or opaque.

### Center
`Property Get Center() As Boolean`
`Property Let Center(ByVal Value As Boolean)`

Whether to center the AVI animation display.

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

Right-to-left display direction.

### RightToLeftLayout
`Property Get RightToLeftLayout() As Boolean`
`Property Let RightToLeftLayout(ByVal Value As Boolean)`

Right-to-left mirrored layout.

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

Right-to-left mode. See common enumerations.

### hWnd
`Property Get hWnd() As LongPtr`

Window handle of the animation control.

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

### Playing
`Property Get Playing() As Boolean`

Whether the animation is currently playing. Read-only.

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

### Play
`Public Sub Play(Optional ByVal FromFrame As Variant, Optional ByVal ToFrame As Variant, Optional ByVal RepeatCount As Variant)`

Plays the animation. Can specify the start frame, end frame, and repeat count.

### StopPlay
`Public Sub StopPlay()`

Stops playing the animation.

### LoadFile
`Public Sub LoadFile(ByVal PathName As String)`

Loads an AVI animation from a file.

### LoadRes
`Public Sub LoadRes(ByVal ResourceID As Variant)`

Loads an AVI animation from a resource. Supports string or numeric resource IDs.

### Unload
`Public Sub Unload()`

Unloads the current animation.

### Refresh
`Public Sub Refresh()`

Forces the control to repaint.

### OLEDrag
`Public Sub OLEDrag()`

Initiates an OLE drag-and-drop operation.

### Drag
`Public Sub Drag(Optional ByRef Action As Variant)`

Starts, ends, or cancels a drag operation.

### ZOrder
`Public Sub ZOrder(Optional ByRef Position As Variant)`

Adjusts the Z-order.

### SetFocus
`Public Sub SetFocus()`

Sets focus.

### Move
`Public Sub Move(ByVal Left As Single, Optional ByVal Top As Variant, Optional ByVal Width As Variant, Optional ByVal Height As Variant)`

Moves and resizes the control.

## Events

### Click
`Public Event Click()`

Click.

### DblClick
`Public Event DblClick()`

Double-click.

### Change
`Public Event Change()`

Fired when the animation state changes.

### PreviewKeyDown
`Public Event PreviewKeyDown(KeyCode As Integer, Shift As Integer)`

Preview key event, fired before KeyDown.

### PreviewKeyUp
`Public Event PreviewKeyUp(KeyCode As Integer, Shift As Integer)`

Preview key up event, fired before KeyUp.

### KeyDown
`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

Key pressed.

### KeyUp
`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

Key released.

### KeyPress
`Public Event KeyPress(KeyAscii As Integer)`

Key character.

### MouseDown
`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Mouse button pressed.

### MouseMove
`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Mouse moved.

### MouseUp
`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Mouse button released.

### MouseEnter
`Public Event MouseEnter()`

Mouse entered the control.

### MouseLeave
`Public Event MouseLeave()`

Mouse left the control.

### OLECompleteDrag
`Public Event OLECompleteDrag(Effect As Long)`

OLE drag-and-drop completed.

### OLEDragDrop
`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

OLE drag-and-drop drop.

### OLEDragOver
`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

OLE drag-and-drop hover.

### OLEGiveFeedback
`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

OLE give feedback.

### OLESetData
`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

OLE set data.

### OLEStartDrag
`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

OLE start drag.

## Code Examples

### Basic Usage

```vb
' Load and play an AVI animation
Animation1.LoadFile "C:\Icons\filecopy.avi"
Animation1.AutoPlay = True

' Play from frame 5 to frame 20, repeat 3 times
Animation1.Play 5, 20, 3

' Stop playing
Animation1.StopPlay

' Load from resource
Animation1.LoadRes 101

' Unload animation
Animation1.Unload
```