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

Returns the window handle of the combo box.

### hWndUserControl

`Property Get hWndUserControl() As LongPtr`

Returns the window handle of the UserControl.

### hWndEdit

`Property Get hWndEdit() As LongPtr`

Returns the window handle of the edit box portion.

### hWndList

`Property Get hWndList() As LongPtr`

Returns the window handle of the list portion.

### Font

`Property Get/Let/Set Font() As StdFont`

Returns/sets the font used by the control.

### VisualStyles

`Property Get/Let VisualStyles() As Boolean`

Returns/sets whether visual styles are enabled.

### BackColor

`Property Get/Let BackColor() As OLE_COLOR`

Returns/sets the background color of the control.

### ForeColor

`Property Get/Let ForeColor() As OLE_COLOR`

Returns/sets the foreground color of the control.

### Enabled

`Property Get/Let Enabled() As Boolean`

Returns/sets whether the control is enabled.

### OLEDragMode

`Property Get/Let OLEDragMode() As VBRUN.OLEDragConstants`

Returns/sets the OLE drag mode.

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

### RightToLeft

`Property Get/Let RightToLeft() As Boolean`

Returns/sets whether right-to-left layout is enabled.

### RightToLeftMode

`Property Get/Let RightToLeftMode() As CCRightToLeftModeConstants`

Returns/sets the right-to-left mode. See common enumerations.

### BuddyControl

`Property Get/Set/Let BuddyControl() As Variant`

Returns/sets the associated buddy control, which is notified to update when a font is selected.

### Style

`Property Get/Let Style() As FtcStyleConstants`

Returns/sets the combo box style.

### FontType

`Property Get/Let FontType() As FtcFontTypeConstants`

Returns/sets the font type filter for display.

### FontPitch

`Property Get/Let FontPitch() As FtcFontPitchConstants`

Returns/sets the font pitch filter for display.

### Locked

`Property Get/Let Locked() As Boolean`

Returns/sets whether the control is locked (prevents editing and selection).

### Text

`Property Get/Let Text() As String`

Returns/sets the text in the edit box.

### Default

`Property Get/Let Default() As String`

Returns/sets the default font name.

### ExtendedUI

`Property Get/Let ExtendedUI() As Boolean`

Returns/sets whether extended user interface is used.

### MaxDropDownItems

`Property Get/Let MaxDropDownItems() As Integer`

Returns/sets the maximum number of visible items in the drop-down list.

### IntegralHeight

`Property Get/Let IntegralHeight() As Boolean`

Returns/sets whether only complete items are shown (no partial items truncated).

### MaxLength

`Property Get/Let MaxLength() As Long`

Returns/sets the maximum number of characters that can be entered in the edit box.

### HorizontalExtent

`Property Get/Let HorizontalExtent() As Single`

Returns/sets the horizontal scroll width of the list.

### IMEMode

`Property Get/Let IMEMode() As CCIMEModeConstants`

Returns/sets the input method editor mode. See common enumerations.

### ScrollTrack

`Property Get/Let ScrollTrack() As Boolean`

Returns/sets whether the scroll bar tracks in real time.

### AutoSelect

`Property Get/Let AutoSelect() As Boolean`

Returns/sets whether the edit box text is automatically selected when the control receives focus.

### AlwaysFindExact

`Property Get/Let AlwaysFindExact() As Boolean`

Returns/sets whether to always perform exact matching.

### RecentMax

`Property Get/Let RecentMax() As Integer`

Returns/sets the maximum number of items in the recently used list (0-9), 0 hides the recent list.

### RecentBackColor

`Property Get/Let RecentBackColor() As OLE_COLOR`

Returns/sets the background color of the recently used list.

### RecentForeColor

`Property Get/Let RecentForeColor() As OLE_COLOR`

Returns/sets the foreground color of the recently used list.

### RecentCount

`Property Get RecentCount() As Long`

Returns the number of items in the recently used list. Read-only.

### ListCount

`Property Get ListCount() As Long`

Returns the total number of items in the list. Read-only.

### List

`Property Get List(ByVal Index As Long) As String`

Returns the text of the list item at the specified index. Read-only.

### ListIndex

`Property Get/Let ListIndex() As Long`

Returns/sets the index of the currently selected item.

### ItemData

`Property Get/Let ItemData(ByVal Index As Long) As LongPtr`

Returns/sets the extra data for the item at the specified index.

### SelStart

`Property Get/Let SelStart() As Long`

Returns/sets the starting position of the selected text.

### SelLength

`Property Get/Let SelLength() As Long`

Returns/sets the length of the selected text.

### SelText

`Property Get/Let SelText() As String`

Returns/sets the currently selected text.

### ItemHeight

`Property Get ItemHeight() As Single`

Returns the height of list items. Read-only.

### FieldHeight

`Property Get FieldHeight() As Single`

Returns the height of the edit box (or static text) portion. Read-only.

### DroppedDown

`Property Get/Let DroppedDown() As Boolean`

Returns/sets whether the drop-down list is expanded.

### DropDownWidth

`Property Get/Let DropDownWidth() As Single`

Returns/sets the width of the drop-down list. Not supported in simple style.

### TopIndex

`Property Get/Let TopIndex() As Long`

Returns/sets the index of the top visible item in the list.

## Methods

### OLEDrag

`Public Sub OLEDrag()`

Initiates an OLE drag operation.

### Drag

`Public Sub Drag(Optional ByRef Action As Variant)`

Starts, ends, or cancels a drag operation.

### SetFocus

`Public Sub SetFocus()`

Moves focus to this control.

### ZOrder

`Public Sub ZOrder(Optional ByRef Position As Variant)`

Sets the control's Z-order position within its layer.

### Refresh

`Public Sub Refresh()`

Forces a complete redraw of the control.

### FindItem

`Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long = -1, Optional ByVal Partial As Boolean) As Long`

Finds an item in the font combo box and returns its index. When Partial is True, performs partial matching.

### GetIdealHorizontalExtent

`Public Function GetIdealHorizontalExtent() As Single`

Gets the ideal value for the horizontal scroll width.

### SelectItem

`Public Function SelectItem(ByVal Text As String, Optional ByVal Index As Long = -1) As Long`

Searches for an item starting with the specified string and selects it. Case-insensitive.

### SaveRecent

`Public Function SaveRecent() As Variant`

Saves the recently used list and returns a string array.

### RestoreRecent

`Public Sub RestoreRecent(ByVal ArgList As Variant)`

Restores the recently used list from a previously saved state.

### ClearRecent

`Public Sub ClearRecent()`

Clears the contents of the recently used list.

## Events

### Click

`Public Event Click()`

Occurs when the control is clicked.

### DblClick

`Public Event DblClick()`

Occurs when the control is double-clicked.

### Scroll

`Public Event Scroll()`

Occurs when the list is scrolled.

### Change

`Public Event Change()`

Occurs when the control content changes.

### ContextMenu

`Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)`

Occurs on right-click or Shift+F10. Set Handled to True to prevent the default context menu.

### DropDown

`Public Event DropDown()`

Occurs when the drop-down list is about to expand.

### CloseUp

`Public Event CloseUp()`

Occurs when the drop-down list closes.

### PreviewKeyDown

`Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)`

Occurs before the KeyDown event. Set IsInputKey to mark whether the key is an input key.

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

Occurs on the source control after an OLE drag-drop operation is completed or canceled.

### OLEDragDrop

`Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`

Occurs when data is dropped onto the control via an OLE drag-drop operation.

### OLEDragOver

`Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`

Occurs when the mouse passes over the control during an OLE drag-drop operation.

### OLEGiveFeedback

`Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`

Occurs on the source control when the mouse cursor needs to change during an OLE drag-drop operation.

### OLESetData

`Public Event OLESetData(Data As DataObject, DataFormat As Integer)`

Occurs on the source control when the drop target requests data.

### OLEStartDrag

`Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)`

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