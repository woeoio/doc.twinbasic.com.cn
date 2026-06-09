---
title: WindowedLabel Control
description: WindowedLabel Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '38e9890c-9850-46fa-8837-3fa9b256559f'
  PropagateID: '38e9890c-9850-46fa-8837-3fa9b256559f'
  ReservedCode1: '0bc922e7-aa93-424c-941f-970ce0d5559c'
  ReservedCode2: '0bc922e7-aa93-424c-941f-970ce0d5559c'
---

# WindowedLabel Control

Provides a label control with a window handle, supporting ellipsis display, vertical alignment, word wrap, and transparent background.

## Enumerations

### WlbEllipsisFormatConstants

Ellipsis format constants.

| Constant | Value | Description |
|----------|-------|-------------|
| WlbEllipsisNone | 0 | No ellipsis displayed |
| WlbEllipsisEnd | 1 | Display ellipsis at the end of the text |
| WlbEllipsisPath | 2 | Display ellipsis in the middle of the path (preserving the file name) |
| WlbEllipsisWord | 3 | Display ellipsis at word boundaries |

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

Returns the object that contains the object.

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

Returns/sets the distance between the internal left edge of the object and the left edge of its container.

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

Returns/sets the distance between the internal top edge of the object and the top edge of its container.

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

Returns/sets the icon displayed during drag-and-drop operations.

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

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

Returns/sets the font.

### Appearance

```vb
Public Property Get Appearance() As CCAppearanceConstants
Public Property Let Appearance(ByVal Value As CCAppearanceConstants)
```

Returns/sets the appearance style. See common enumerations.

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

Returns/sets the background color.

### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Returns/sets the foreground color.

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

Returns/sets the type of mouse pointer displayed when the mouse hovers. See common enumerations.

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

Returns/sets whether events are triggered when the mouse enters or leaves the control.

### RightToLeft

```vb
Public Property Get RightToLeft() As Boolean
Public Property Let RightToLeft(ByVal Value As Boolean)
```

Returns/sets the right-to-left display direction.

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Returns/sets the right-to-left mode. See common enumerations.

### Alignment

```vb
Public Property Get Alignment() As VBRUN.AlignmentConstants
Public Property Let Alignment(ByVal Value As VBRUN.AlignmentConstants)
```

Returns/sets the horizontal text alignment.

### BorderStyle

```vb
Public Property Get BorderStyle() As CCBorderStyleConstants
Public Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

Returns/sets the border style. See common enumerations.

### Caption

```vb
Public Property Get Caption() As String
Public Property Let Caption(ByVal Value As String)
```

Returns/sets the label text.

### Default

```vb
Public Property Get Default() As String
Public Property Let Default(ByVal Value As String)
```

Returns/sets the default text.

### UseMnemonic

```vb
Public Property Get UseMnemonic() As Boolean
Public Property Let UseMnemonic(ByVal Value As Boolean)
```

Returns/sets whether mnemonic prefix characters (&) are processed.

### AutoSize

```vb
Public Property Get AutoSize() As Boolean
Public Property Let AutoSize(ByVal Value As Boolean)
```

Returns/sets whether the control automatically resizes to fit its content.

### WordWrap

```vb
Public Property Get WordWrap() As Boolean
Public Property Let WordWrap(ByVal Value As Boolean)
```

Returns/sets whether text wraps automatically.

### SingleLine

```vb
Public Property Get SingleLine() As Boolean
Public Property Let SingleLine(ByVal Value As Boolean)
```

Returns/sets whether the display is forced to a single line.

### EllipsisFormat

```vb
Public Property Get EllipsisFormat() As WlbEllipsisFormatConstants
Public Property Let EllipsisFormat(ByVal Value As WlbEllipsisFormatConstants)
```

Returns/sets the ellipsis format.

### MimicTextBox

```vb
Public Property Get MimicTextBox() As Boolean
Public Property Let MimicTextBox(ByVal Value As Boolean)
```

Returns/sets whether to mimic the appearance of a text box (3D border + white background).

### VerticalAlignment

```vb
Public Property Get VerticalAlignment() As CCVerticalAlignmentConstants
Public Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)
```

Returns/sets the vertical alignment. See common enumerations.

### Transparent

```vb
Public Property Get Transparent() As Boolean
Public Property Let Transparent(ByVal Value As Boolean)
```

Returns/sets whether a transparent background is used.

### DisplayedCaption

```vb
Public Property Get DisplayedCaption() As String
```

Returns the actually displayed text (after ellipsis processing).

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

## Events

### Click

```vb
Public Event Click()
```

Occurs when the user clicks the control.

### DblClick

```vb
Public Event DblClick()
```

Occurs when the user double-clicks the control.

### Change

```vb
Public Event Change()
```

Occurs when the Caption property changes.

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

Occurs when the mouse enters the control area.

### MouseLeave

```vb
Public Event MouseLeave()
```

Occurs when the mouse leaves the control area.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

Occurs when an OLE drag-and-drop operation is completed.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when data is dropped during an OLE drag-and-drop operation.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Occurs when data is dragged over the control during an OLE drag-and-drop operation.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Occurs during an OLE drag-and-drop operation to provide feedback.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Occurs when data is set during an OLE drag-and-drop operation.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Occurs when an OLE drag-and-drop operation starts.

## Code Examples

### Basic Usage

```vb
' Set up a windowed label
With WindowedLabel1
    .Caption = "C:\Users\Documents\Very\Long\Path\FileName.txt"
    .AutoSize = False
    .EllipsisFormat = WlbEllipsisPath
    .VerticalAlignment = CCVerticalAlignmentCenter
    .WordWrap = False
    .SingleLine = True
    .UseMnemonic = False
End With

' Listen for text changes
Private Sub WindowedLabel1_Change()
    Debug.Print "Displayed text: " & WindowedLabel1.DisplayedCaption
End Sub

' Label mimicking text box appearance
With WindowedLabel1
    .MimicTextBox = True
    .BorderStyle = CCBorderStyleSunken
End With
```