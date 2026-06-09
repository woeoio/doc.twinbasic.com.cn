---
title: SpinBox Control
description: SpinBox Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '78774c34-9763-475c-8fd8-2a99326f7140'
  PropagateID: '78774c34-9763-475c-8fd8-2a99326f7140'
  ReservedCode1: '0dfa603c-cca5-4d60-8d08-dfe30cf619ee'
  ReservedCode2: '0dfa603c-cca5-4d60-8d08-dfe30cf619ee'
---

# SpinBox Control

Provides a numeric spin control with an edit box, supporting hexadecimal display, thousands separator, accelerated increment, and OLE drag-and-drop.

## Enumerations

### SpbNumberStyleConstants

Number display style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| SpbNumberStyleDecimal | 0 | Decimal |
| SpbNumberStyleHexadecimal | 1 | Hexadecimal |

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

### hWndUserControl

```vb
Public Property Get hWndUserControl() As LongPtr
```

Returns the UserControl handle.

### hWndEdit

```vb
Public Property Get hWndEdit() As LongPtr
```

Returns the embedded edit box handle.

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

Returns/sets the font.

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

Returns/sets whether the value wraps around. When True, exceeding the maximum value returns to the minimum, and vice versa.

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

Returns/sets whether hot tracking is enabled.

### Alignment

```vb
Public Property Get Alignment() As CCLeftRightAlignmentConstants
Public Property Let Alignment(ByVal Value As CCLeftRightAlignmentConstants)
```

Returns/sets the alignment of the up/down buttons. See common enumerations.

### ThousandsSeparator

```vb
Public Property Get ThousandsSeparator() As Boolean
Public Property Let ThousandsSeparator(ByVal Value As Boolean)
```

Returns/sets whether the thousands separator is displayed.

### NumberStyle

```vb
Public Property Get NumberStyle() As SpbNumberStyleConstants
Public Property Let NumberStyle(ByVal Value As SpbNumberStyleConstants)
```

Returns/sets the number display style.

### ArrowKeysChange

```vb
Public Property Get ArrowKeysChange() As Boolean
Public Property Let ArrowKeysChange(ByVal Value As Boolean)
```

Returns/sets whether arrow keys can change the value.

### AllowOnlyNumbers

```vb
Public Property Get AllowOnlyNumbers() As Boolean
Public Property Let AllowOnlyNumbers(ByVal Value As Boolean)
```

Returns/sets whether only numeric input is allowed.

### TextAlignment

```vb
Public Property Get TextAlignment() As VBRUN.AlignmentConstants
Public Property Let TextAlignment(ByVal Value As VBRUN.AlignmentConstants)
```

Returns/sets the text alignment.

### Locked

```vb
Public Property Get Locked() As Boolean
Public Property Let Locked(ByVal Value As Boolean)
```

Returns/sets whether the edit box content is locked and non-editable.

### HideSelection

```vb
Public Property Get HideSelection() As Boolean
Public Property Let HideSelection(ByVal Value As Boolean)
```

Returns/sets whether the selection is hidden when the control loses focus.

### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

Returns/sets the text in the edit box.

### SelStart

```vb
Public Property Get SelStart() As Long
Public Property Let SelStart(ByVal Value As Long)
```

Returns/sets the starting position of the selected text.

### SelLength

```vb
Public Property Get SelLength() As Long
Public Property Let SelLength(ByVal Value As Long)
```

Returns/sets the length of the selected text.

### SelText

```vb
Public Property Get SelText() As String
Public Property Let SelText(ByVal Value As String)
```

Returns/sets the selected text.

## Methods

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete repaint of the object.

### SetAcceleration

```vb
Public Sub SetAcceleration(ByVal Delays As Variant, ByVal Increments As Variant)
```

Sets accelerated increment parameters. Delays and Increments are arrays specifying delay times and increment amounts.

### ValidateText

```vb
Public Sub ValidateText()
```

Validates whether the text in the edit box is a valid numeric value.

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

Moves the focus to the control.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the Z-order.

## Events

### DownClick

```vb
Public Event DownClick()
```

Occurs when the down button is clicked.

### UpClick

```vb
Public Event UpClick()
```

Occurs when the up button is clicked.

### BeforeChange

```vb
Public Event BeforeChange(ByVal Value As Long, ByRef Delta As Long)
```

Occurs before the value is about to change. Value is the current value, Delta is the expected change amount; modifying Delta controls the actual change.

### Change

```vb
Public Event Change()
```

Occurs after the value has changed.

### TextChange

```vb
Public Event TextChange()
```

Occurs after the edit box text has changed.

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

Occurs when the control is right-clicked. Set Handled to True to prevent the default context menu.

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Preview before key press. IsInputKey being True indicates the key is an input key.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Preview before key release.

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

Occurs when a keyboard key is pressed.

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

Occurs when a keyboard key is released.

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

Occurs when an ANSI key is pressed and released.

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
' Set up the SpinBox control
With SpinBox1
    .Min = 0
    .Max = 1000
    .Value = 100
    .Increment = 10
    .Wrap = True
    .HotTracking = True
    .ThousandsSeparator = True
End With

' Set accelerated increment
Dim Delays(0 To 2) As Long, Increments(0 To 2) As Long
Delays(0) = 500: Increments(0) = 10
Delays(1) = 300: Increments(1) = 50
Delays(2) = 100: Increments(2) = 100
SpinBox1.SetAcceleration Delays, Increments

' Limit value change range
Private Sub SpinBox1_BeforeChange(ByVal Value As Long, ByRef Delta As Long)
    If Value + Delta > 1000 Then Delta = 1000 - Value
End Sub
```