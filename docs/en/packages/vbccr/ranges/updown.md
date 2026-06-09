---
title: UpDown Control
description: UpDown Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3ce3bfa9-7c89-4719-9d57-a3e6f275efce'
  PropagateID: '3ce3bfa9-7c89-4719-9d57-a3e6f275efce'
  ReservedCode1: 'd175676b-e7fe-4a58-a53d-a1dfd9c3e611'
  ReservedCode2: 'd175676b-e7fe-4a58-a53d-a1dfd9c3e611'
---

# UpDown Control

Provides a spin button for incrementing/decrementing numeric values, supporting buddy control synchronization, wrapping, and hexadecimal display.

## Enumerations

### UdnOrientationConstants

Control orientation constants.

| Constant | Value | Description |
|----------|-------|-------------|
| UdnOrientationVertical | 0 | Vertical orientation |
| UdnOrientationHorizontal | 1 | Horizontal orientation |

### UdnNumberStyleConstants

Number display style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| UdnNumberStyleDecimal | 0 | Decimal |
| UdnNumberStyleHexadecimal | 1 | Hexadecimal |

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

### BuddyControl

```vb
Public Property Get BuddyControl() As Variant
Public Property Let BuddyControl(ByVal Value As Variant)
Public Property Set BuddyControl(ByVal Value As Variant)
```

Returns/sets the associated buddy control.

### BuddyProperty

```vb
Public Property Get BuddyProperty() As String
Public Property Let BuddyProperty(ByVal Value As String)
```

Returns/sets the property name of the buddy control used for data synchronization.

### SyncBuddy

```vb
Public Property Get SyncBuddy() As Boolean
Public Property Let SyncBuddy(ByVal Value As Boolean)
```

Returns/sets whether to automatically synchronize the value with the buddy control.

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
Public Property Let Value(ByVal Value As Long)
```

Returns/sets the current value.

### Increment

```vb
Public Property Get Increment() As Long
Public Property Let Increment(ByVal Value As Long)
```

Returns/sets the increment/decrement amount per click.

### Wrap

```vb
Public Property Get Wrap() As Boolean
Public Property Let Wrap(ByVal Value As Boolean)
```

Returns/sets whether the value wraps. When True, exceeding the maximum value wraps to the minimum and vice versa.

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

Returns/sets whether hot tracking is enabled.

### Orientation

```vb
Public Property Get Orientation() As UdnOrientationConstants
Public Property Let Orientation(ByVal Value As UdnOrientationConstants)
```

Returns/sets the control orientation.

### ThousandsSeparator

```vb
Public Property Get ThousandsSeparator() As Boolean
Public Property Let ThousandsSeparator(ByVal Value As Boolean)
```

Returns/sets whether to display the thousands separator.

### NumberStyle

```vb
Public Property Get NumberStyle() As UdnNumberStyleConstants
Public Property Let NumberStyle(ByVal Value As UdnNumberStyleConstants)
```

Returns/sets the number display style.

## Methods

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

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the Z-order.

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete repaint of the object.

### SyncFromBuddy

```vb
Public Sub SyncFromBuddy()
```

Synchronizes the value from the buddy control to the UpDown control.

## Events

### DownClick

```vb
Public Event DownClick()
```

Fired when the down/left button is clicked.

### UpClick

```vb
Public Event UpClick()
```

Fired when the up/right button is clicked.

### BeforeChange

```vb
Public Event BeforeChange(ByVal Value As Long, ByRef Delta As Long)
```

Fired before the value is about to change. Value is the current value, Delta is the expected change amount; modifying Delta controls the actual change.

### Change

```vb
Public Event Change()
```

Fired after the value changes.

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
' Set up the UpDown control
With UpDown1
    .Min = 0
    .Max = 100
    .Value = 50
    .Increment = 5
    .Wrap = True
    Set .BuddyControl = Text1
    .BuddyProperty = "Text"
    .SyncBuddy = True
End With

' Limit value change range
Private Sub UpDown1_BeforeChange(ByVal Value As Long, ByRef Delta As Long)
    If Value + Delta > 100 Then Delta = 0
End Sub

' Respond to value change
Private Sub UpDown1_Change()
    Debug.Print "Current value: " & UpDown1.Value
End Sub
```