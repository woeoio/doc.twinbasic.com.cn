---
title: Slider Control
description: Slider Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8b7b5915-9809-4fc7-ba76-521e2c6db691'
  PropagateID: '8b7b5915-9809-4fc7-ba76-521e2c6db691'
  ReservedCode1: '6119ff80-2e9c-4f46-8602-1ece3b683665'
  ReservedCode2: '6119ff80-2e9c-4f46-8602-1ece3b683665'
---

# Slider Control

Provides a customizable slider control supporting horizontal/vertical orientation, tick styles, selection range, owner-draw, and OLE drag-and-drop.

## Enumerations

### SldOrientationConstants

Control orientation constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SldOrientationHorizontal | 0 | Horizontal orientation |
| SldOrientationVertical | 1 | Vertical orientation |

### SldTipSideConstants

Tooltip position constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SldTipSideAboveLeft | 0 | Tooltip displayed above/left |
| SldTipSideBelowRight | 1 | Tooltip displayed below/right |

### SldTickStyleConstants

Tick style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SldTickStyleBottomRight | 0 | Bottom/right ticks |
| SldTickStyleTopLeft | 1 | Top/left ticks |
| SldTickStyleBoth | 2 | Ticks on both sides |
| SldTickStyleNone | 3 | No ticks |

### SldDrawModeConstants

Draw mode constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SldDrawModeNormal | 0 | Normal drawing |
| SldDrawModeOwnerDraw | 1 | Owner-draw mode |

### SldOwnerDrawItemConstants

Owner-draw item constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SldOwnerDrawItemTics | 1 | Tick marks |
| SldOwnerDrawItemThumb | 2 | Slider thumb |
| SldOwnerDrawItemChannel | 3 | Channel |

## Properties

### Name

```vb
Public Property Get Name() As String
```

Returns the name used to identify the object in code.

### Tag

```vb
Public Property Get Tag() As String
Public Property Let Tag(ByVal Value As String)
```

Stores extra data needed by the program.

### Parent

```vb
Public Property Get Parent() As Object
```

Returns the object that contains this object.

### Container

```vb
Public Property Get Container() As Object
Public Property Set Container(ByVal Value As Object)
```

Returns/sets the container of the object.

### Left

```vb
Public Property Get Left() As Single
Public Property Let Left(ByVal Value As Single)
```

Returns/sets the distance between the left edge of the object and the left edge of its container.

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

Returns/sets the distance between the top edge of the object and the top edge of its container.

### Width

```vb
Public Property Get Width() As Single
Public Property Let Width(ByVal Value As Single)
```

Returns/sets the width of the object.

### Height

```vb
Public Property Get Height() As Single
Public Property Let Height(ByVal Value As Single)
```

Returns/sets the height of the object.

### Visible

```vb
Public Property Get Visible() As Boolean
Public Property Let Visible(ByVal Value As Boolean)
```

Returns/sets whether the object is visible.

### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

Returns/sets the tooltip text displayed when the mouse hovers.

### HelpContextID

```vb
Public Property Get HelpContextID() As Long
Public Property Let HelpContextID(ByVal Value As Long)
```

Returns/sets the associated context help ID.

### WhatsThisHelpID

```vb
Public Property Get WhatsThisHelpID() As Long
Public Property Let WhatsThisHelpID(ByVal Value As Long)
```

Returns/sets the associated context help ID.

### DragIcon

```vb
Public Property Get DragIcon() As IPictureDisp
Public Property Let DragIcon(ByVal Value As IPictureDisp)
Public Property Set DragIcon(ByVal Value As IPictureDisp)
```

Returns/sets the icon displayed during a drag-and-drop operation.

### DragMode

```vb
Public Property Get DragMode() As Integer
Public Property Let DragMode(ByVal Value As Integer)
```

Returns/sets the drag mode.

### hWnd

```vb
Public Property Get hWnd() As LongPtr
```

Returns the control handle.

### hWndUserControl

```vb
Public Property Get hWndUserControl() As LongPtr
```

Returns the UserControl handle.

### VisualStyles

```vb
Public Property Get VisualStyles() As Boolean
Public Property Let VisualStyles(ByVal Value As Boolean)
```

Returns/sets whether visual styles are enabled. Requires comctl32.dll version 6.0 or later.

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

Returns/sets the background color.

### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

Returns/sets whether the object can respond to user events.

### OLEDropMode

```vb
Public Property Get OLEDropMode() As OLEDropModeConstants
Public Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

Returns/sets whether the object can act as an OLE drop target.

### MousePointer

```vb
Public Property Get MousePointer() As CCMousePointerConstants
Public Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

Returns/sets the type of mouse pointer displayed when hovering. See common enumerations.

### MouseIcon

```vb
Public Property Get MouseIcon() As IPictureDisp
Public Property Let MouseIcon(ByVal Value As IPictureDisp)
Public Property Set MouseIcon(ByVal Value As IPictureDisp)
```

Returns/sets the custom mouse icon.

### MouseTrack

```vb
Public Property Get MouseTrack() As Boolean
Public Property Let MouseTrack(ByVal Value As Boolean)
```

Returns/sets whether events are fired when the mouse enters or leaves the control.

### RightToLeft

```vb
Public Property Get RightToLeft() As Boolean
Public Property Let RightToLeft(ByVal Value As Boolean)
```

Returns/sets the right-to-left display direction.

### RightToLeftLayout

```vb
Public Property Get RightToLeftLayout() As Boolean
Public Property Let RightToLeftLayout(ByVal Value As Boolean)
```

Returns/sets the right-to-left layout.

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Returns/sets the right-to-left mode. See common enumerations.

### Min

```vb
Public Property Get Min() As Long
Public Property Let Min(ByVal Value As Long)
```

Returns/sets the minimum value.

### Max

```vb
Public Property Get Max() As Long
Public Property Let Max(ByVal Value As Long)
```

Returns/sets the maximum value.

### Value

```vb
Public Property Get Value() As Long
Public Property Let Value(ByVal NewValue As Long)
```

Returns/sets the current value.

### TickFrequency

```vb
Public Property Get TickFrequency() As Long
Public Property Let TickFrequency(ByVal Value As Long)
```

Returns/sets the tick frequency.

### Orientation

```vb
Public Property Get Orientation() As SldOrientationConstants
Public Property Let Orientation(ByVal Value As SldOrientationConstants)
```

Returns/sets the control orientation.

### SmallChange

```vb
Public Property Get SmallChange() As Long
Public Property Let SmallChange(ByVal Value As Long)
```

Returns/sets the change amount when pressing arrow keys.

### LargeChange

```vb
Public Property Get LargeChange() As Long
Public Property Let LargeChange(ByVal Value As Long)
```

Returns/sets the change amount when pressing PageUp/PageDown or clicking the channel.

### TickStyle

```vb
Public Property Get TickStyle() As SldTickStyleConstants
Public Property Let TickStyle(ByVal Value As SldTickStyleConstants)
```

Returns/sets the tick style.

### ShowTip

```vb
Public Property Get ShowTip() As Boolean
Public Property Let ShowTip(ByVal Value As Boolean)
```

Returns/sets whether to display the value tooltip.

### TipSide

```vb
Public Property Get TipSide() As SldTipSideConstants
Public Property Let TipSide(ByVal Value As SldTipSideConstants)
```

Returns/sets the tooltip display position.

### SelectRange

```vb
Public Property Get SelectRange() As Boolean
Public Property Let SelectRange(ByVal Value As Boolean)
```

Returns/sets whether selection range is enabled.

### SelStart

```vb
Public Property Get SelStart() As Long
Public Property Let SelStart(ByVal Value As Long)
```

Returns/sets the start position of the selection range.

### SelLength

```vb
Public Property Get SelLength() As Long
Public Property Let SelLength(ByVal Value As Long)
```

Returns/sets the length of the selection range.

### Transparent

```vb
Public Property Get Transparent() As Boolean
Public Property Let Transparent(ByVal Value As Boolean)
```

Returns/sets whether the control background is transparent.

### HideThumb

```vb
Public Property Get HideThumb() As Boolean
Public Property Let HideThumb(ByVal Value As Boolean)
```

Returns/sets whether the slider thumb is hidden.

### Reversed

```vb
Public Property Get Reversed() As Boolean
Public Property Let Reversed(ByVal Value As Boolean)
```

Returns/sets whether the slider direction is reversed.

### DrawMode

```vb
Public Property Get DrawMode() As SldDrawModeConstants
Public Property Let DrawMode(ByVal Value As SldDrawModeConstants)
```

Returns/sets the draw mode.

### ThumbLeft

```vb
Public Property Get ThumbLeft() As Single
```

Returns the left position of the thumb.

### ThumbTop

```vb
Public Property Get ThumbTop() As Single
```

Returns the top position of the thumb.

### ThumbWidth

```vb
Public Property Get ThumbWidth() As Single
```

Returns the width of the thumb.

### ThumbHeight

```vb
Public Property Get ThumbHeight() As Single
```

Returns the height of the thumb.

### ChannelLeft

```vb
Public Property Get ChannelLeft() As Single
```

Returns the left position of the channel.

### ChannelTop

```vb
Public Property Get ChannelTop() As Single
```

Returns the top position of the channel.

### ChannelWidth

```vb
Public Property Get ChannelWidth() As Single
```

Returns the width of the channel.

### ChannelHeight

```vb
Public Property Get ChannelHeight() As Single
```

Returns the height of the channel.

## Methods

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete repaint of the object.

### ClearSel

```vb
Public Sub ClearSel()
```

Clears the selection range.

### GetNumTicks

```vb
Public Function GetNumTicks() As Long
```

Returns the number of ticks.

### GetTickPosition

```vb
Public Function GetTickPosition(ByVal Index As Long) As Single
```

Returns the position of the specified tick.

### OLEDrag

```vb
Public Sub OLEDrag()
```

Initiates an OLE drag-and-drop operation.

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

Starts, ends, or cancels a drag operation.

### SetFocus

```vb
Public Sub SetFocus()
```

Moves focus to the control.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the Z-order.

## Events

### Click

```vb
Public Event Click()
```

Fired when the user clicks the control.

### Scroll

```vb
Public Event Scroll()
```

Fired when the user drags the slider thumb.

### Change

```vb
Public Event Change()
```

Fired after the value changes.

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single)
```

Fired when the control is right-clicked.

### ModifyTipText

```vb
Public Event ModifyTipText(ByRef Text As String)
```

Fired when the tooltip text is about to be displayed, allowing modification of the tooltip text.

### ItemDraw

```vb
Public Event ItemDraw(ByVal Item As SldOwnerDrawItemConstants, ByRef Cancel As Boolean, ByVal ItemState As Long, ByVal hDC As Long, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

Fired when an owner-draw item needs to be drawn. Item is the owner-draw item type, Cancel can cancel default drawing, hDC is the device context.

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Preview before key down. IsInputKey being True indicates the key is an input key.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Preview before key up.

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

Fired when a keyboard key is pressed.

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

Fired when a keyboard key is released.

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

Fired when an ANSI key is pressed and released.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when a mouse button is pressed.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when the mouse is moved.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when a mouse button is released.

### MouseEnter

```vb
Public Event MouseEnter()
```

Fired when the mouse enters the control area.

### MouseLeave

```vb
Public Event MouseLeave()
```

Fired when the mouse leaves the control area.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

Fired when an OLE drag-and-drop operation completes.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when data is dropped via an OLE drag-and-drop operation.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Fired when the mouse hovers during an OLE drag-and-drop operation.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Fired when an OLE drag-and-drop operation gives feedback.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Fired when an OLE drag-and-drop operation sets data.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Fired when an OLE drag-and-drop operation starts.

## Code Examples

### Basic Usage

```vb
' Set up the slider control
With Slider1
    .Min = 0
    .Max = 100
    .Value = 50
    .TickFrequency = 10
    .SmallChange = 1
    .LargeChange = 10
    .SelectRange = True
    .SelStart = 20
    .SelLength = 60
End With

' Respond to value change
Private Sub Slider1_Change()
    Debug.Print "Current value: " & Slider1.Value
End Sub

' Customize tooltip text
Private Sub Slider1_ModifyTipText(ByRef Text As String)
    Text = "Progress: " & Slider1.Value & "%"
End Sub
```