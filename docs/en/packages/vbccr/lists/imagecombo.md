---
title: ImageCombo Control
description: ImageCombo Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6061dab4-5320-43e9-bad5-01cc8b84c260'
  PropagateID: '6061dab4-5320-43e9-bad5-01cc8b84c260'
  ReservedCode1: 'a9c28b8d-1ca3-42ed-b04c-f61bee606c8f'
  ReservedCode2: 'a9c28b8d-1ca3-42ed-b04c-f61bee606c8f'
---

# ImageCombo Control

Provides an enhanced combo box control with icon support, where each item can be associated with an icon from an image list.

## Enumerations

### ImcStyleConstants

| Constant | Value | Description |
|----------|-------|-------------|
| ImcStyleDropDownCombo | 0 | Drop-down combo box (editable) |
| ImcStyleSimpleCombo | 1 | Simple combo box (list always visible) |
| ImcStyleDropDownList | 2 | Drop-down list (selection only) |

### ImcEndEditReasonConstants

| Constant | Value | Description |
|----------|-------|-------------|
| ImcEndEditReasonLostFocus | 1 | End edit reason: lost focus |
| ImcEndEditReasonReturn | 2 | End edit reason: Enter key pressed |
| ImcEndEditReasonEscape | 3 | End edit reason: Escape key pressed |
| ImcEndEditReasonDropDown | 4 | End edit reason: drop-down selection |

### ImcEllipsisFormatConstants

| Constant | Value | Description |
|----------|-------|-------------|
| ImcEllipsisFormatNone | 0 | No ellipsis |
| ImcEllipsisFormatEnd | 1 | Ellipsis at the end of text |

## ImcComboItem Object

Represents an item in the image combo box.

### ImcComboItem Properties

#### Index

`Property Get Index() As Long`

Returns the index of the item in the collection. Read-only.

#### Key

`Property Get/Let Key() As String`

Returns/sets the key of the item.

#### Tag

`Property Get/Let/Set Tag() As Variant`

Returns/sets the extra data of the item.

#### Text

`Property Get/Let Text() As String`

Returns/sets the text of the item.

#### Image

`Property Get/Let Image() As Variant`

Returns/sets the associated image index or key of the item.

#### ImageIndex

`Property Get ImageIndex() As Long`

Returns the associated image index of the item. Read-only.

#### SelImage

`Property Get/Let SelImage() As Variant`

Returns/sets the associated image index or key when the item is selected.

#### SelImageIndex

`Property Get SelImageIndex() As Long`

Returns the associated image index when the item is selected. Read-only.

#### Indentation

`Property Get/Let Indentation() As Long`

Returns/sets the indentation level of the item (in icon width units).

#### Selected

`Property Get/Let Selected() As Boolean`

Returns/sets whether the item is selected.

#### Data

`Property Get/Let Data() As LongPtr`

Returns/sets the extra numeric data of the item.

## ImcComboItems Collection

Represents the collection of all items in the image combo box.

### ImcComboItems Properties and Methods

#### NewEnum

`Public Function NewEnum() As IEnumVARIANT`

Returns an enumerator, supporting For Each syntax.

#### Add

`Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Image As Variant, Optional ByVal SelImage As Variant, Optional ByVal Indentation As Variant) As ImcComboItem`

Adds an item to the collection and returns the newly created ImcComboItem object.

#### Item

`Public Property Get Item(ByVal Index As Variant) As ImcComboItem`

Returns an item by index or key.

#### Exists

`Public Function Exists(ByVal Index As Variant) As Boolean`

Checks whether an item with the specified index or key exists.

#### Count

`Public Property Get Count() As Long`

Returns the number of items in the collection.

#### Clear

`Public Sub Clear()`

Removes all items from the collection.

#### Remove

`Public Sub Remove(ByVal Index As Variant)`

Removes an item by index or key.

## Properties

### ControlsEnum

`Property Get ControlsEnum() As VBRUN.ParentControls`

Returns the parent controls enumerator.

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

Returns the window handle of the image combo box.

### hWndUserControl

`Property Get hWndUserControl() As LongPtr`

Returns the window handle of the UserControl.

### hWndCombo

`Property Get hWndCombo() As LongPtr`

Returns the window handle of the ComboBoxEx control.

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

### RightToLeftLayout

`Property Get/Let RightToLeftLayout() As Boolean`

Returns/sets whether right-to-left layout mirroring is enabled.

### RightToLeftMode

`Property Get/Let RightToLeftMode() As CCRightToLeftModeConstants`

Returns/sets the right-to-left mode. See common enumerations.

### ImageList

`Property Get/Set/Let ImageList() As Variant`

Returns/sets the associated ImageList control used to provide item icons.

### Style

`Property Get/Let Style() As ImcStyleConstants`

Returns/sets the combo box style.

### Locked

`Property Get/Let Locked() As Boolean`

Returns/sets whether the control is locked (prevents editing and selection).

### Text

`Property Get/Let Text() As String`

Returns/sets the text in the edit box.

### Default

`Property Get/Let Default() As String`

Returns/sets the default value.

### Indentation

`Property Get/Let Indentation() As Long`

Returns/sets the default indentation level for new items.

### ExtendedUI

`Property Get/Let ExtendedUI() As Boolean`

Returns/sets whether extended user interface is used.

### MaxDropDownItems

`Property Get/Let MaxDropDownItems() As Integer`

Returns/sets the maximum number of visible items in the drop-down list.

### ShowImages

`Property Get/Let ShowImages() As Boolean`

Returns/sets whether item icons are displayed.

### MaxLength

`Property Get/Let MaxLength() As Long`

Returns/sets the maximum number of characters that can be entered in the edit box.

### IMEMode

`Property Get/Let IMEMode() As CCIMEModeConstants`

Returns/sets the input method editor mode. See common enumerations.

### EllipsisFormat

`Property Get/Let EllipsisFormat() As ImcEllipsisFormatConstants`

Returns/sets the ellipsis format when text exceeds the width.

### ScrollTrack

`Property Get/Let ScrollTrack() As Boolean`

Returns/sets whether the scroll bar tracks in real time.

### ComboItems

`Property Get ComboItems() As ImcComboItems`

Returns the combo box items collection. Read-only.

### SelStart

`Property Get/Let SelStart() As Long`

Returns/sets the starting position of the selected text.

### SelLength

`Property Get/Let SelLength() As Long`

Returns/sets the length of the selected text.

### SelText

`Property Get/Let SelText() As String`

Returns/sets the currently selected text.

### TopItem

`Property Get/Set TopItem() As ImcComboItem`

Returns/sets the top visible item in the list.

### SelectedItem

`Property Get/Set SelectedItem() As ImcComboItem`

Returns/sets the currently selected item.

### DroppedDown

`Property Get/Let DroppedDown() As Boolean`

Returns/sets whether the drop-down list is expanded.

### DropDownWidth

`Property Get/Let DropDownWidth() As Single`

Returns/sets the width of the drop-down list. Not supported in simple style.

### OLEDraggedItem

`Property Get OLEDraggedItem() As ImcComboItem`

Returns the item currently being dragged in an OLE drag-drop operation. Read-only.

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

### GetItemHeight

`Public Function GetItemHeight() As Single`

Returns the height of list items (taking icon height into account).

### FindItem

`Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long, Optional ByVal Partial As Boolean, Optional ByVal Wrap As Boolean) As ImcComboItem`

Finds an item in the list and returns a reference to it. When Partial is True, performs partial matching; when Wrap is True, continues searching from the beginning.

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

### DropDown

`Public Event DropDown()`

Occurs when the drop-down list is about to expand.

### CloseUp

`Public Event CloseUp()`

Occurs when the drop-down list closes.

### ItemDrag

`Public Event ItemDrag(ByVal Item As ImcComboItem, ByVal Button As Integer)`

Occurs when an item initiates a drag-drop operation.

### BeginEdit

`Public Event BeginEdit()`

Occurs when the user activates the drop-down list or clicks the edit box.

### EndEdit

`Public Event EndEdit(ByVal Changed As Boolean, ByVal NewIndex As Long, ByVal NewText As String, ByVal Reason As ImcEndEditReasonConstants)`

Occurs when an edit operation ends. Changed indicates whether the text changed, NewIndex is the index of the newly selected item, NewText is the new text, and Reason is the end reason.

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
    Set ImageCombo1.ImageList = ImageList1
    With ImageCombo1
        .Style = ImcStyleDropDownCombo
        .ShowImages = True
        .MaxDropDownItems = 10
    End With

    Dim Item As ImcComboItem
    Set Item = ImageCombo1.ComboItems.Add(, "k1", "Item One", 1, 2)
    Set Item = ImageCombo1.ComboItems.Add(, "k2", "Item Two", 1, 2)
    Set Item = ImageCombo1.ComboItems.Add(, "k3", "Sub Item", 3, 4)
    Item.Indentation = 1
End Sub

Private Sub ImageCombo1_Click()
    If Not ImageCombo1.SelectedItem Is Nothing Then
        Debug.Print "Selected: " & ImageCombo1.SelectedItem.Text
    End If
End Sub

Private Sub ImageCombo1_EndEdit(ByVal Changed As Boolean, ByVal NewIndex As Long, ByVal NewText As String, ByVal Reason As ImcEndEditReasonConstants)
    If Changed Then
        Debug.Print "Edit completed: " & NewText
    End If
End Sub
```