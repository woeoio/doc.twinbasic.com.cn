---
title: FontCombo Control
description: FontCombo Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd6f8f5ea-523c-4d03-a096-ba80e4cdd2b5'
  PropagateID: 'd6f8f5ea-523c-4d03-a096-ba80e4cdd2b5'
  ReservedCode1: '672fb75c-eb1f-489c-9405-62d5b3fbd8fb'
  ReservedCode2: '672fb75c-eb1f-489c-9405-62d5b3fbd8fb'
---

# FontCombo Control

Provides a font selection combo box control with a most-recently-used list, capable of enumerating system fonts and filtering by type and pitch.

## Enumerations

### FtcStyleConstants

| Constant | Value | Description |
|----------|-------|-------------|
| FtcStyleDropDownCombo | 0 | Drop-down combo box (editable) |
| FtcStyleSimpleCombo | 1 | Simple combo box (list always visible) |
| FtcStyleDropDownList | 2 | Drop-down list (selection only) |

### FtcFontTypeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| FtcFontTypeTrueType | 0 | TrueType fonts only |
| FtcFontTypeBitmap | 1 | Bitmap fonts only |
| FtcFontTypeBitmapTrueType | 2 | Bitmap and TrueType fonts |

### FtcFontPitchConstants

| Constant | Value | Description |
|----------|-------|-------------|
| FtcFontPitchAll | 0 | All pitches |
| FtcFontPitchFixed | 1 | Fixed pitch |
| FtcFontPitchVariable | 2 | Variable pitch |

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

### HelpContextID

```vb
Property Get/Let HelpContextID() As Long
```

Returns/sets the help context ID of the control.

### WhatsThisHelpID

```vb
Property Get/Let WhatsThisHelpID() As Long
```

Returns/sets the "What's This" help ID of the control.

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

Returns the window handle of the combo box.

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

Returns the window handle of the UserControl.

### hWndEdit

```vb
Property Get hWndEdit() As LongPtr
```

Returns the window handle of the edit box portion.

### hWndList

```vb
Property Get hWndList() As LongPtr
```

Returns the window handle of the list portion.

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

### BackColor

```vb
Property Get/Let BackColor() As OLE_COLOR
```

Returns/sets the background color of the control.

### ForeColor

```vb
Property Get/Let ForeColor() As OLE_COLOR
```

Returns/sets the foreground color of the control.

### Enabled

```vb
Property Get/Let Enabled() As Boolean
```

Returns/sets whether the control is enabled.

### OLEDragMode

```vb
Property Get/Let OLEDragMode() As VBRUN.OLEDragConstants
```

Returns/sets the OLE drag mode.

### OLEDropMode

```vb
Property Get/Let OLEDropMode() As OLEDropModeConstants
```

Returns/sets the OLE drop mode. See common enumerations.

### MousePointer

```vb
Property Get/Let MousePointer() As CCMousePointerConstants
```

Returns/sets the mouse pointer type. See common enumerations.

### MouseIcon

```vb
Property Get/Let/Set MouseIcon() As IPictureDisp
```

Returns/sets the custom mouse icon.

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

Returns/sets the right-to-left mode. See common enumerations.

### BuddyControl

```vb
Property Get/Set/Let BuddyControl() As Variant
```

Returns/sets the associated buddy control, which is notified to update when a font is selected.

### Style

```vb
Property Get/Let Style() As FtcStyleConstants
```

Returns/sets the combo box style.

### FontType

```vb
Property Get/Let FontType() As FtcFontTypeConstants
```

Returns/sets the font type filter for display.

### FontPitch

```vb
Property Get/Let FontPitch() As FtcFontPitchConstants
```

Returns/sets the font pitch filter for display.

### Locked

```vb
Property Get/Let Locked() As Boolean
```

Returns/sets whether the control is locked (prevents editing and selection).

### Text

```vb
Property Get/Let Text() As String
```

Returns/sets the text in the edit box.

### Default

```vb
Property Get/Let Default() As String
```

Returns/sets the default font name.

### ExtendedUI

```vb
Property Get/Let ExtendedUI() As Boolean
```

Returns/sets whether extended user interface is used.

### MaxDropDownItems

```vb
Property Get/Let MaxDropDownItems() As Integer
```

Returns/sets the maximum number of visible items in the drop-down list.

### IntegralHeight

```vb
Property Get/Let IntegralHeight() As Boolean
```

Returns/sets whether only complete items are shown (no partial items truncated).

### MaxLength

```vb
Property Get/Let MaxLength() As Long
```

Returns/sets the maximum number of characters that can be entered in the edit box.

### HorizontalExtent

```vb
Property Get/Let HorizontalExtent() As Single
```

Returns/sets the horizontal scroll width of the list.

### IMEMode

```vb
Property Get/Let IMEMode() As CCIMEModeConstants
```

Returns/sets the input method editor mode. See common enumerations.

### ScrollTrack

```vb
Property Get/Let ScrollTrack() As Boolean
```

Returns/sets whether the scroll bar tracks in real time.

### AutoSelect

```vb
Property Get/Let AutoSelect() As Boolean
```

Returns/sets whether the edit box text is automatically selected when the control receives focus.

### AlwaysFindExact

```vb
Property Get/Let AlwaysFindExact() As Boolean
```

Returns/sets whether to always perform exact matching.

### RecentMax

```vb
Property Get/Let RecentMax() As Integer
```

Returns/sets the maximum number of items in the recently used list (0-9), 0 hides the recent list.

### RecentBackColor

```vb
Property Get/Let RecentBackColor() As OLE_COLOR
```

Returns/sets the background color of the recently used list.

### RecentForeColor

```vb
Property Get/Let RecentForeColor() As OLE_COLOR
```

Returns/sets the foreground color of the recently used list.

### RecentCount

```vb
Property Get RecentCount() As Long
```

Returns the number of items in the recently used list. Read-only.

### ListCount

```vb
Property Get ListCount() As Long
```

Returns the total number of items in the list. Read-only.

### List

```vb
Property Get List(ByVal Index As Long) As String
```

Returns the text of the list item at the specified index. Read-only.

### ListIndex

```vb
Property Get/Let ListIndex() As Long
```

Returns/sets the index of the currently selected item.

### ItemData

```vb
Property Get/Let ItemData(ByVal Index As Long) As LongPtr
```

Returns/sets the extra data for the item at the specified index.

### SelStart

```vb
Property Get/Let SelStart() As Long
```

Returns/sets the starting position of the selected text.

### SelLength

```vb
Property Get/Let SelLength() As Long
```

Returns/sets the length of the selected text.

### SelText

```vb
Property Get/Let SelText() As String
```

Returns/sets the currently selected text.

### ItemHeight

```vb
Property Get ItemHeight() As Single
```

Returns the height of list items. Read-only.

### FieldHeight

```vb
Property Get FieldHeight() As Single
```

Returns the height of the edit box (or static text) portion. Read-only.

### DroppedDown

```vb
Property Get/Let DroppedDown() As Boolean
```

Returns/sets whether the drop-down list is expanded.

### DropDownWidth

```vb
Property Get/Let DropDownWidth() As Single
```

Returns/sets the width of the drop-down list. Not supported in simple style.

### TopIndex

```vb
Property Get/Let TopIndex() As Long
```

Returns/sets the index of the top visible item in the list.

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

### SetFocus

```vb
Public Sub SetFocus()
```

Moves focus to this control.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the control's Z-order position within its layer.

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete redraw of the control.

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long = -1, Optional ByVal Partial As Boolean) As Long
```

Finds an item in the font combo box and returns its index. When Partial is True, performs partial matching.

### GetIdealHorizontalExtent

```vb
Public Function GetIdealHorizontalExtent() As Single
```

Gets the ideal value for the horizontal scroll width.

### SelectItem

```vb
Public Function SelectItem(ByVal Text As String, Optional ByVal Index As Long = -1) As Long
```

Searches for an item starting with the specified string and selects it. Case-insensitive.

### SaveRecent

```vb
Public Function SaveRecent() As Variant
```

Saves the recently used list and returns a string array.

### RestoreRecent

```vb
Public Sub RestoreRecent(ByVal ArgList As Variant)
```

Restores the recently used list from a previously saved state.

### ClearRecent

```vb
Public Sub ClearRecent()
```

Clears the contents of the recently used list.

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

### Scroll

```vb
Public Event Scroll()
```

Occurs when the list is scrolled.

### Change

```vb
Public Event Change()
```

Occurs when the control content changes.

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

Occurs on right-click or Shift+F10. Set Handled to True to prevent the default context menu.

### DropDown

```vb
Public Event DropDown()
```

Occurs when the drop-down list is about to expand.

### CloseUp

```vb
Public Event CloseUp()
```

Occurs when the drop-down list closes.

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Occurs before the KeyDown event. Set IsInputKey to mark whether the key is an input key.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Occurs before the KeyUp event.

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

Occurs when a character key is pressed and released.

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

Occurs on the source control after an OLE drag-drop operation is completed or canceled.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Occurs when data is dropped onto the control via an OLE drag-drop operation.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Occurs when the mouse passes over the control during an OLE drag-drop operation.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Occurs on the source control when the mouse cursor needs to change during an OLE drag-drop operation.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Occurs on the source control when the drop target requests data.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Occurs when an OLE drag-drop operation is started.

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    With FontCombo1
        .Style = FtcStyleDropDownCombo
        .FontType = FtcFontTypeTrueType
        .FontPitch = FtcFontPitchAll
        .RecentMax = 5
    End With
End Sub

Private Sub FontCombo1_Click()
    Me.Font.Name = FontCombo1.Text
    Debug.Print "Selected font: " & FontCombo1.Text
End Sub

Private Sub Form_Unload(Cancel As Integer)
    Dim v As Variant
    v = FontCombo1.SaveRecent
    SaveSetting App.Title, "FontCombo", "Recent", Join(v, vbTab)
End Sub
```