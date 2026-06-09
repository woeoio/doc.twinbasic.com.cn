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

```vb
Property Get Index() As Long
```

Returns the index of the item in the collection. Read-only.

#### Key

```vb
Property Get/Let Key() As String
```

Returns/sets the key of the item.

#### Tag

```vb
Property Get/Let/Set Tag() As Variant
```

Returns/sets the extra data of the item.

#### Text

```vb
Property Get/Let Text() As String
```

Returns/sets the text of the item.

#### Image

```vb
Property Get/Let Image() As Variant
```

Returns/sets the associated image index or key of the item.

#### ImageIndex

```vb
Property Get ImageIndex() As Long
```

Returns the associated image index of the item. Read-only.

#### SelImage

```vb
Property Get/Let SelImage() As Variant
```

Returns/sets the associated image index or key when the item is selected.

#### SelImageIndex

```vb
Property Get SelImageIndex() As Long
```

Returns the associated image index when the item is selected. Read-only.

#### Indentation

```vb
Property Get/Let Indentation() As Long
```

Returns/sets the indentation level of the item (in icon width units).

#### Selected

```vb
Property Get/Let Selected() As Boolean
```

Returns/sets whether the item is selected.

#### Data

```vb
Property Get/Let Data() As LongPtr
```

Returns/sets the extra numeric data of the item.

## ImcComboItems Collection

Represents the collection of all items in the image combo box.

### ImcComboItems Properties and Methods

#### NewEnum

```vb
Public Function NewEnum() As IEnumVARIANT
```

Returns an enumerator, supporting For Each syntax.

#### Add

```vb
Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Image As Variant, Optional ByVal SelImage As Variant, Optional ByVal Indentation As Variant) As ImcComboItem
```

Adds an item to the collection and returns the newly created ImcComboItem object.

#### Item

```vb
Public Property Get Item(ByVal Index As Variant) As ImcComboItem
```

Returns an item by index or key.

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

Checks whether an item with the specified index or key exists.

#### Count

```vb
Public Property Get Count() As Long
```

Returns the number of items in the collection.

#### Clear

```vb
Public Sub Clear()
```

Removes all items from the collection.

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

Removes an item by index or key.

## Properties

### ControlsEnum

```vb
Property Get ControlsEnum() As VBRUN.ParentControls
```

Returns the parent controls enumerator.

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

Returns the window handle of the image combo box.

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

Returns the window handle of the UserControl.

### hWndCombo

```vb
Property Get hWndCombo() As LongPtr
```

Returns the window handle of the ComboBoxEx control.

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

### RightToLeftLayout

```vb
Property Get/Let RightToLeftLayout() As Boolean
```

Returns/sets whether right-to-left layout mirroring is enabled.

### RightToLeftMode

```vb
Property Get/Let RightToLeftMode() As CCRightToLeftModeConstants
```

Returns/sets the right-to-left mode. See common enumerations.

### ImageList

```vb
Property Get/Set/Let ImageList() As Variant
```

Returns/sets the associated ImageList control used to provide item icons.

### Style

```vb
Property Get/Let Style() As ImcStyleConstants
```

Returns/sets the combo box style.

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

Returns/sets the default value.

### Indentation

```vb
Property Get/Let Indentation() As Long
```

Returns/sets the default indentation level for new items.

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

### ShowImages

```vb
Property Get/Let ShowImages() As Boolean
```

Returns/sets whether item icons are displayed.

### MaxLength

```vb
Property Get/Let MaxLength() As Long
```

Returns/sets the maximum number of characters that can be entered in the edit box.

### IMEMode

```vb
Property Get/Let IMEMode() As CCIMEModeConstants
```

Returns/sets the input method editor mode. See common enumerations.

### EllipsisFormat

```vb
Property Get/Let EllipsisFormat() As ImcEllipsisFormatConstants
```

Returns/sets the ellipsis format when text exceeds the width.

### ScrollTrack

```vb
Property Get/Let ScrollTrack() As Boolean
```

Returns/sets whether the scroll bar tracks in real time.

### ComboItems

```vb
Property Get ComboItems() As ImcComboItems
```

Returns the combo box items collection. Read-only.

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

### TopItem

```vb
Property Get/Set TopItem() As ImcComboItem
```

Returns/sets the top visible item in the list.

### SelectedItem

```vb
Property Get/Set SelectedItem() As ImcComboItem
```

Returns/sets the currently selected item.

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

### OLEDraggedItem

```vb
Property Get OLEDraggedItem() As ImcComboItem
```

Returns the item currently being dragged in an OLE drag-drop operation. Read-only.

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

### GetItemHeight

```vb
Public Function GetItemHeight() As Single
```

Returns the height of list items (taking icon height into account).

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long, Optional ByVal Partial As Boolean, Optional ByVal Wrap As Boolean) As ImcComboItem
```

Finds an item in the list and returns a reference to it. When Partial is True, performs partial matching; when Wrap is True, continues searching from the beginning.

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

### ItemDrag

```vb
Public Event ItemDrag(ByVal Item As ImcComboItem, ByVal Button As Integer)
```

Occurs when an item initiates a drag-drop operation.

### BeginEdit

```vb
Public Event BeginEdit()
```

Occurs when the user activates the drop-down list or clicks the edit box.

### EndEdit

```vb
Public Event EndEdit(ByVal Changed As Boolean, ByVal NewIndex As Long, ByVal NewText As String, ByVal Reason As ImcEndEditReasonConstants)
```

Occurs when an edit operation ends. Changed indicates whether the text changed, NewIndex is the index of the newly selected item, NewText is the new text, and Reason is the end reason.

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