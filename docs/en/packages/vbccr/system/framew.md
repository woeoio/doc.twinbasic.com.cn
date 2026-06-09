---
title: FrameW Control
description: FrameW Control - VBCCR Development Manual, Complete API Reference Based on Source Code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '138e1629-b6b6-4ff1-9727-6bf3f40b0916'
  PropagateID: '138e1629-b6b6-4ff1-9727-6bf3f40b0916'
  ReservedCode1: '41b51579-0c74-4966-b4a8-62c584280e4a'
  ReservedCode2: '41b51579-0c74-4966-b4a8-62c584280e4a'
---

# FrameW Control

Provides a container frame control that supports visual styles, transparent background, and image display. Can serve as a container for other controls.

## Enumerations

No proprietary public enumerations. Uses the following common enumerations: CCAppearanceConstants, CCLeftRightAlignmentConstants, CCMousePointerConstants, CCRightToLeftModeConstants, OLEDropModeConstants.

## Properties

### Name

```vb
Property Get Name() As String
```

Returns the name of the control.

### Tag

```vb
Property Get/Let Tag() As String
```

Returns/sets the tag value of the control.

### Parent

```vb
Property Get Parent() As Object
```

Returns the parent object of the control.

### Container

```vb
Property Get/Set Container() As Object
```

Returns/sets the container of the control.

### Left

```vb
Property Get/Let Left() As Single
```

Returns/sets the position of the left edge of the control.

### Top

```vb
Property Get/Let Top() As Single
```

Returns/sets the position of the top edge of the control.

### Width

```vb
Property Get/Let Width() As Single
```

Returns/sets the width of the control.

### Height

```vb
Property Get/Let Height() As Single
```

Returns/sets the height of the control.

### Visible

```vb
Property Get/Let Visible() As Boolean
```

Returns/sets whether the control is visible.

### ToolTipText

```vb
Property Get/Let ToolTipText() As String
```

Returns/sets the tooltip text of the control.

### WhatsThisHelpID

```vb
Property Get/Let WhatsThisHelpID() As Long
```

Returns/sets the "What's This" Help ID of the control.

### DragIcon

```vb
Property Get/Let/Set DragIcon() As IPictureDisp
```

Returns/sets the icon displayed during drag operations.

### DragMode

```vb
Property Get/Let DragMode() As Integer
```

Returns/sets the drag mode (manual or automatic).

### hWnd

```vb
Property Get hWnd() As LongPtr
```

Returns the window handle of the control.

### Font

```vb
Property Get/Let/Set Font() As StdFont
```

Returns/sets the font used by the control.

### VisualStyles

```vb
Property Get/Let VisualStyles() As Boolean
```

Returns/sets whether visual styles are enabled.

### Appearance

```vb
Property Get/Let Appearance() As CCAppearanceConstants
```

Returns/sets the visual appearance of the control. See Common Enumerations.

### BackColor

```vb
Property Get/Let BackColor() As OLE_COLOR
```

Returns/sets the background color of the control.

### ForeColor

```vb
Property Get/Let ForeColor() As OLE_COLOR
```

Returns/sets the foreground color of the control (caption text color).

### Enabled

```vb
Property Get/Let Enabled() As Boolean
```

Returns/sets whether the control is enabled.

### OLEDropMode

```vb
Property Get/Let OLEDropMode() As OLEDropModeConstants
```

Returns/sets the OLE drop mode. See Common Enumerations.

### MousePointer

```vb
Property Get/Let MousePointer() As CCMousePointerConstants
```

Returns/sets the mouse pointer type. See Common Enumerations.

### MouseIcon

Not available. The frame control does not support custom mouse icons.

### MouseTrack

```vb
Property Get/Let MouseTrack() As Boolean
```

Returns/sets whether mouse enter/leave tracking is enabled.

### RightToLeft

```vb
Property Get/Let RightToLeft() As Boolean
```

Returns/sets whether right-to-left layout is enabled.

### RightToLeftMode

```vb
Property Get/Let RightToLeftMode() As CCRightToLeftModeConstants
```

Returns/sets the right-to-left mode. See Common Enumerations.

### BorderStyle

```vb
Property Get/Let BorderStyle() As Integer
```

Returns/sets the border style of the control. Values: 0 (vbBSNone) no border, 1 (vbFixedSingle) fixed single border.

### Caption

```vb
Property Get/Let Caption() As String
```

Returns/sets the frame caption text.

### UseMnemonic

```vb
Property Get/Let UseMnemonic() As Boolean
```

Returns/sets whether the & character in the caption acts as an access key.

### Alignment

```vb
Property Get/Let Alignment() As VBRUN.AlignmentConstants
```

Returns/sets the alignment of the caption.

### Transparent

```vb
Property Get/Let Transparent() As Boolean
```

Returns/sets whether the control is transparent.

### Picture

```vb
Property Get/Let/Set Picture() As IPictureDisp
```

Returns/sets the image displayed in the frame.

### PictureAlignment

```vb
Property Get/Let PictureAlignment() As CCLeftRightAlignmentConstants
```

Returns/sets the alignment of the image. See Common Enumerations.

### ContainedControls

```vb
Property Get ContainedControls() As VBRUN.ContainedControls
```

Returns the collection of controls contained by the frame. Read-only.

## Methods

### OLEDrag

```vb
Public Sub OLEDrag()
```

Initiates an OLE drag operation.

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

Starts, ends, or cancels a drag operation.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the Z-order position of the control within its layer.

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete repaint of the control.

## Events

### Click

```vb
Public Event Click()
```

Occurs when the control is clicked.

### DblClick

```vb
Public Event DblClick()
```

Occurs when the control is double-clicked.

### Resize

```vb
Public Event Resize()
```

Occurs when the control is resized.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when a mouse button is pressed.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when the mouse is moved.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when a mouse button is released.

### MouseEnter

```vb
Public Event MouseEnter()
```

Occurs when the mouse enters the control.

### MouseLeave

```vb
Public Event MouseLeave()
```

Occurs when the mouse leaves the control.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

Occurs on the source control after an OLE drag-and-drop operation is completed or cancelled.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when data is dropped onto the control via an OLE drag-and-drop operation.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Occurs when the mouse moves over the control during an OLE drag-and-drop operation.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Occurs on the source control when the mouse cursor needs to be changed during an OLE drag-and-drop operation.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Occurs on the source control when the drop target requests data.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Occurs when an OLE drag-and-drop operation is started.

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With FrameW1
        .Caption = "Option Settings"
        .BorderStyle = vbFixedSingle
        .UseMnemonic = True
        .Alignment = vbLeftJustify
        .VisualStyles = True
    End With
End Sub

Private Sub FrameW1_Resize()
    Debug.Print "Frame size: " & FrameW1.Width & " x " & FrameW1.Height
End Sub
```