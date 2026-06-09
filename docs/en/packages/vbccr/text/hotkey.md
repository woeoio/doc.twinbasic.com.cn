---
title: HotKey Control
description: HotKey Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '30fc7dca-a073-4aaa-af64-0dd8202117bd'
  PropagateID: '30fc7dca-a073-4aaa-af64-0dd8202117bd'
  ReservedCode1: '069d83b7-8e58-4ad1-8125-bf7e12dfb192'
  ReservedCode2: '069d83b7-8e58-4ad1-8125-bf7e12dfb192'
---

# HotKey Control

Provides the Windows standard hot key input control, allowing users to select shortcut key combinations.

## Enumerations

### HkeInvalidKeyCombinationConstants

| Constant | Value | Description |
|----------|-------|-------------|
| HkeInvalidKeyCombinationNone | 1 | Invalid combination: no modifier |
| HkeInvalidKeyCombinationShift | 2 | Invalid combination: Shift only |
| HkeInvalidKeyCombinationCtrl | 4 | Invalid combination: Ctrl only |
| HkeInvalidKeyCombinationAlt | 8 | Invalid combination: Alt only |
| HkeInvalidKeyCombinationShiftCtrl | 16 | Invalid combination: Shift+Ctrl |
| HkeInvalidKeyCombinationShiftAlt | 32 | Invalid combination: Shift+Alt |
| HkeInvalidKeyCombinationCtrlAlt | 64 | Invalid combination: Ctrl+Alt |
| HkeInvalidKeyCombinationShiftCtrlAlt | 128 | Invalid combination: Shift+Ctrl+Alt |

## Properties

### Name

`Property Get Name() As String`

Returns the name of the control.

### Tag

`Property Get/Let Tag() As String`

Returns/sets the tag value of the control.

### Parent

`Property Get Parent() As Object`

Returns the parent object of the control.

### Container

`Property Get/Set Container() As Object`

Returns/sets the container of the control.

### Left

`Property Get/Let Left() As Single`

Returns/sets the position of the left edge of the control.

### Top

`Property Get/Let Top() As Single`

Returns/sets the position of the top edge of the control.

### Width

`Property Get/Let Width() As Single`

Returns/sets the width of the control.

### Height

`Property Get/Let Height() As Single`

Returns/sets the height of the control.

### Visible

`Property Get/Let Visible() As Boolean`

Returns/sets whether the control is visible.

### ToolTipText

`Property Get/Let ToolTipText() As String`

Returns/sets the tooltip text of the control.

### HelpContextID

`Property Get/Let HelpContextID() As Long`

Returns/sets the help context ID of the control.

### WhatsThisHelpID

`Property Get/Let WhatsThisHelpID() As Long`

Returns/sets the "What's This" help ID of the control.

### DragIcon

`Property Get/Let/Set DragIcon() As IPictureDisp`

Returns/sets the icon displayed during drag operations.

### DragMode

`Property Get/Let DragMode() As Integer`

Returns/sets the drag mode (manual or automatic).

### hWnd

`Property Get hWnd() As LongPtr`

Returns the window handle of the HotKey control.

### hWndUserControl

`Property Get hWndUserControl() As LongPtr`

Returns the window handle of the UserControl.

### Font

`Property Get/Let/Set Font() As StdFont`

Returns/sets the font used by the control.

### VisualStyles

`Property Get/Let VisualStyles() As Boolean`

Returns/sets whether visual styles are enabled.

### Enabled

`Property Get/Let Enabled() As Boolean`

Returns/sets whether the control is enabled.

### OLEDropMode

`Property Get/Let OLEDropMode() As OLEDropModeConstants`

Returns/sets the OLE drop mode. See common enumerations.

### MousePointer

`Property Get/Let MousePointer() As CCMousePointerConstants`

Returns/sets the mouse pointer type. See common enumerations.

### MouseIcon

`Property Get/Let/Set MouseIcon() As IPictureDisp`

Returns/sets the custom mouse icon.

### MouseTrack

`Property Get/Let MouseTrack() As Boolean`

Returns/sets whether mouse enter/leave tracking is enabled.

### BackColor

`Property Get/Let BackColor() As OLE_COLOR`

Returns/sets the background color of the control.

### BorderStyle

`Property Get/Let BorderStyle() As CCBorderStyleConstants`

Returns/sets the border style of the control. See common enumerations.

### Value

`Property Get/Let Value(Optional ByRef Modifiers As Integer) As VBRUN.KeyCodeConstants`

Returns/sets the key code of the hot key. The Modifiers parameter receives modifier key flags (Shift=1, Ctrl=2, Alt=4).

### RawValue

`Property Get/Let RawValue() As Long`

Returns/sets the raw numeric value of the hot key (low byte is the key code, high byte is the modifier key flags).

### Text

`Property Get Text() As String`

Returns the display text of the hot key. Read-only.

## Methods

### OLEDrag

`Public Sub OLEDrag()`

Initiates an OLE drag operation.

### Drag

`Public Sub Drag(Optional ByRef Action As Variant)`

Starts, ends, or cancels a drag operation.

### SetFocus

`Public Sub SetFocus()`

Moves the focus to the control.

### ZOrder

`Public Sub ZOrder(Optional ByRef Position As Variant)`

Sets the Z-order position of the control within its layer.

### Refresh

`Public Sub Refresh()`

Forces a complete repaint of the control.

### SetRules

`Public Sub SetRules(ByVal InvalidKeyCombinations As HkeInvalidKeyCombinationConstants, Optional ByVal DefaultModifiers As VBRUN.ShiftConstants)`

Sets invalid key combination rules and default modifier keys. InvalidKeyCombinations specifies the modifier key combinations that are not allowed; DefaultModifiers specifies the default modifier key to substitute when the user enters an invalid combination.

### SetApplicationHotKey

`Public Function SetApplicationHotKey(Optional ByVal hWnd As LongPtr) As Long`

Registers the current hot key as the application hot key for a window. The return value is the result of the WM_SETHOTKEY message.

## Events

### Click

`Public Event Click()`

Occurs when the control is clicked.

### DblClick

`Public Event DblClick()`

Occurs when the control is double-clicked.

### Change

`Public Event Change()`

Occurs when the hot key value changes.

### PreviewKeyDown

`Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Occurs before the KeyDown event; IsInputKey can be set to mark whether the key is an input key.

### PreviewKeyUp

`Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Occurs before the KeyUp event.

### KeyDown

`Public Event KeyDown(KeyCode As Integer, Shift As Integer)`

Occurs when a keyboard key is pressed.

### KeyUp

`Public Event KeyUp(KeyCode As Integer, Shift As Integer)`

Occurs when a keyboard key is released.

### KeyPress

`Public Event KeyPress(KeyChar As Integer)`

Occurs when a character key is pressed and released.

### MouseDown

`Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when a mouse button is pressed.

### MouseMove

`Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when the mouse is moved.

### MouseUp

`Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when a mouse button is released.

### MouseEnter

`Public Event MouseEnter()`

Occurs when the mouse enters the control.

### MouseLeave

`Public Event MouseLeave()`

Occurs when the mouse leaves the control.

### OLECompleteDrag

`Public Event OLECompleteDrag(Effect As Long)`

Occurs on the source control after an OLE drag-and-drop operation has been completed or canceled.

### OLEDragDrop

`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when data is dropped onto the control via an OLE drag-and-drop operation.

### OLEDragOver

`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

Occurs when the mouse moves over the control during an OLE drag-and-drop operation.

### OLEGiveFeedback

`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

Occurs on the source control when the mouse cursor needs to be changed during an OLE drag-and-drop operation.

### OLESetData

`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

Occurs on the source control when the drop target requests data.

### OLEStartDrag

`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

Occurs when an OLE drag-and-drop operation is initiated.

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With HotKey1
        .SetRules HkeInvalidKeyCombinationNone Or _
                   HkeInvalidKeyCombinationShift, vbCtrlMask
        .VisualStyles = True
    End With
End Sub

Private Sub HotKey1_Change()
    Dim Modifiers As Integer
    Dim KeyCode As VBRUN.KeyCodeConstants
    KeyCode = HotKey1.Value(Modifiers)
    Debug.Print "Hot key: " & HotKey1.Text
    Debug.Print "Raw value: " & HotKey1.RawValue
End Sub

Private Sub cmdRegisterHotKey_Click()
    Dim Result As Long
    Result = HotKey1.SetApplicationHotKey(Me.hWnd)
    If Result = 1 Then
        Debug.Print "Hot key registered successfully"
    Else
        Debug.Print "Hot key registration failed"
    End If
End Sub
```