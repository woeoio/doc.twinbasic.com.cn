---
title: VirtualCombo Control
description: VirtualCombo Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'dc16b9c5-f822-4adb-8fa0-3ded0d513ce4'
  PropagateID: 'dc16b9c5-f822-4adb-8fa0-3ded0d513ce4'
  ReservedCode1: 'd02b2c1d-c3d6-4762-b8b7-69224867934f'
  ReservedCode2: 'd02b2c1d-c3d6-4762-b8b7-69224867934f'
---

# VirtualCombo Control

Provides a virtual data combo box using the LBS_NODATA style for large dataset display, supplying data on demand, with support for owner-draw, incremental search, and OLE drag-drop.

## Enumerations

### VcbStyleConstants

Combo box style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| VcbStyleDropDownCombo | 0 | Drop-down combo box (editable) |
| VcbStyleSimpleCombo | 1 | Simple combo box |
| VcbStyleDropDownList | 2 | Drop-down list box (not editable) |

### VcbDrawModeConstants

Draw mode constants.

| Constant | Value | Description |
|----------|-------|-------------|
| VcbDrawModeNormal | 0 | Standard draw mode |
| VcbDrawModeOwnerDrawFixed | 1 | Owner-draw fixed height mode |

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

Returns the object containing the object.

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

Returns/sets the distance between the left edge of the object and its container.

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

Returns/sets the distance between the top edge of the object and its container.

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

Returns/sets the help context ID.

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

Returns/sets the icon displayed during drag-drop operations.

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

Returns the edit box handle.

### hWndList

```vb
Public Property Get hWndList() As LongPtr
```

Returns the drop-down list box handle.

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

Returns/sets whether visual styles are enabled. Requires comctl32.dll 6.0 or later.

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

### OLEDragMode

```vb
Public Property Get OLEDragMode() As VBRUN.OLEDragConstants
Public Property Let OLEDragMode(ByVal Value As VBRUN.OLEDragConstants)
```

Returns/sets the OLE drag mode.

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

Returns/sets the pointer type displayed when the mouse hovers. See common enumerations.

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

### Style

```vb
Public Property Get Style() As VcbStyleConstants
Public Property Let Style(ByVal Value As VcbStyleConstants)
```

Returns/sets the combo box style. Can only be set at design time.

### Locked

```vb
Public Property Get Locked() As Boolean
Public Property Let Locked(ByVal Value As Boolean)
```

Returns/sets whether the control is locked (prevents editing and selection).

### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

Returns/sets the edit box text.

### Default

```vb
Public Property Get Default() As String
Public Property Let Default(ByVal Value As String)
```

Returns/sets the default text.

### ExtendedUI

```vb
Public Property Get ExtendedUI() As Boolean
Public Property Let ExtendedUI(ByVal Value As Boolean)
```

Returns/sets whether extended user interface is used (F4 key opens drop-down, ESC key closes).

### MaxDropDownItems

```vb
Public Property Get MaxDropDownItems() As Integer
Public Property Let MaxDropDownItems(ByVal Value As Integer)
```

Returns/sets the maximum number of items displayed in the drop-down list.

### IntegralHeight

```vb
Public Property Get IntegralHeight() As Boolean
Public Property Let IntegralHeight(ByVal Value As Boolean)
```

Returns/sets whether the height is adjusted to show complete items. Can only be set at design time.

### MaxLength

```vb
Public Property Get MaxLength() As Long
Public Property Let MaxLength(ByVal Value As Long)
```

Returns/sets the maximum text length in the edit box.

### UseListBackColor

```vb
Public Property Get UseListBackColor() As Boolean
Public Property Let UseListBackColor(ByVal Value As Boolean)
```

Returns/sets whether to use the list background color.

### UseListForeColor

```vb
Public Property Get UseListForeColor() As Boolean
Public Property Let UseListForeColor(ByVal Value As Boolean)
```

Returns/sets whether to use the list foreground color.

### ListBackColor

```vb
Public Property Get ListBackColor() As OLE_COLOR
Public Property Let ListBackColor(ByVal Value As OLE_COLOR)
```

Returns/sets the drop-down list background color.

### ListForeColor

```vb
Public Property Get ListForeColor() As OLE_COLOR
Public Property Let ListForeColor(ByVal Value As OLE_COLOR)
```

Returns/sets the drop-down list foreground color.

### HorizontalExtent

```vb
Public Property Get HorizontalExtent() As Single
Public Property Let HorizontalExtent(ByVal Value As Single)
```

Returns/sets the horizontal scroll range of the drop-down list.

### DrawMode

```vb
Public Property Get DrawMode() As VcbDrawModeConstants
Public Property Let DrawMode(ByVal Value As VcbDrawModeConstants)
```

Returns/sets the draw mode. Can only be set at design time.

### IMEMode

```vb
Public Property Get IMEMode() As CCIMEModeConstants
Public Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

Returns/sets the input method editor mode. See common enumerations.

### ScrollTrack

```vb
Public Property Get ScrollTrack() As Boolean
Public Property Let ScrollTrack(ByVal Value As Boolean)
```

Returns/sets whether scroll tracking is enabled (real-time scrolling while dragging the thumb).

### AutoSelect

```vb
Public Property Get AutoSelect() As Boolean
Public Property Let AutoSelect(ByVal Value As Boolean)
```

Returns/sets whether to automatically select matching items.

### AlwaysFindExact

```vb
Public Property Get AlwaysFindExact() As Boolean
Public Property Let AlwaysFindExact(ByVal Value As Boolean)
```

Returns/sets whether to always perform exact find.

### ListCount

```vb
Public Property Get ListCount() As Long
```

Returns the number of list items.

### List

```vb
Public Property Get List(ByVal Index As Long) As String
```

Gets the list item text at the specified index. Data is obtained through the GetVirtualItem event.

### ListIndex

```vb
Public Property Get ListIndex() As Long
Public Property Let ListIndex(ByVal Value As Long)
```

Returns/sets the currently selected item index.

### SelStart

```vb
Public Property Get SelStart() As Long
Public Property Let SelStart(ByVal Value As Long)
```

Returns/sets the selection start position.

### SelLength

```vb
Public Property Get SelLength() As Long
Public Property Let SelLength(ByVal Value As Long)
```

Returns/sets the selection length.

### SelText

```vb
Public Property Get SelText() As String
Public Property Let SelText(ByVal Value As String)
```

Returns/sets the selected text.

### ItemHeight

```vb
Public Property Get ItemHeight() As Single
Public Property Let ItemHeight(ByVal Value As Single)
```

Returns/sets the item height.

### FieldHeight

```vb
Public Property Get FieldHeight() As Single
```

Returns the edit box height.

### DroppedDown

```vb
Public Property Get DroppedDown() As Boolean
Public Property Let DroppedDown(ByVal Value As Boolean)
```

Returns/sets whether the control is in a dropped-down state.

### DropDownWidth

```vb
Public Property Get DropDownWidth() As Single
Public Property Let DropDownWidth(ByVal Value As Single)
```

Returns/sets the drop-down list width.

### DropDownHeight

```vb
Public Property Get DropDownHeight() As Single
Public Property Let DropDownHeight(ByVal Value As Single)
```

Returns/sets the drop-down list height.

### TopIndex

```vb
Public Property Get TopIndex() As Long
Public Property Let TopIndex(ByVal Value As Long)
```

Returns/sets the index of the top visible item in the drop-down list.

## Methods

### OLEDrag

```vb
Public Sub OLEDrag()
```

Initiates an OLE drag-drop operation.

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

Starts, ends, or cancels a drag operation.

### SetFocus

```vb
Public Sub SetFocus()
```

Moves focus to the specified object.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Sets the Z-order.

### Refresh

```vb
Public Sub Refresh()
```

Forces a complete redraw of the object.

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long = -1, Optional ByVal Partial As Boolean) As Long
```

Finds a list item. Returns the matching item index, or -1 if not found.

### GetIdealHorizontalExtent

```vb
Public Function GetIdealHorizontalExtent() As Single
```

Gets the ideal horizontal scroll range.

### SelectItem

```vb
Public Function SelectItem(ByVal Text As String, Optional ByVal Index As Long = -1) As Long
```

Searches for and selects a matching list item. Returns the selected item index.

## Events

### Click

```vb
Public Event Click()
```

Fired when the user clicks the control.

### DblClick

```vb
Public Event DblClick()
```

Fired when the user double-clicks the control.

### Scroll

```vb
Public Event Scroll()
```

Fired when the drop-down list scrolls.

### Change

```vb
Public Event Change()
```

Fired when the text content changes.

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

Context menu event. Set Handled to True to suppress the default menu.

### GetVirtualItem

```vb
Public Event GetVirtualItem(ByVal Item As Long, ByRef Text As String)
```

Fired when virtual item data is requested. Set the Text parameter to return the item text.

### FindVirtualItem

```vb
Public Event FindVirtualItem(ByVal StartIndex As Long, ByVal SearchText As String, ByVal Partial As Boolean, ByRef FoundIndex As Long)
```

Fired when searching for a virtual item. Set FoundIndex to return the matching item index, or -1 if not found.

### IncrementalSearch

```vb
Public Event IncrementalSearch(ByVal SearchString As String, ByVal StartIndex As Long, ByRef FoundIndex As Long)
```

Fired during incremental search. Set FoundIndex to return the matching item index.

### DropDown

```vb
Public Event DropDown()
```

Fired when the drop-down list expands.

### CloseUp

```vb
Public Event CloseUp()
```

Fired when the drop-down list closes.

### ItemDraw

```vb
Public Event ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, ByVal ItemState As Long, ByVal hDC As Long, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

Fired when drawing an owner-draw item (when DrawMode is OwnerDrawFixed).

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Preview key event. Set IsInputKey to True to mark the key as an input key.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Preview key up event.

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

Fired when an OLE drag-drop operation completes.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Fired when data is dropped in an OLE drag-drop operation.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Fired when the mouse hovers during an OLE drag-drop operation.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Fired when feedback is given during an OLE drag-drop operation.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Fired when data is set during an OLE drag-drop operation.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Fired when an OLE drag-drop operation starts.

## Helper Module

### VirtualComboBase.bas

Custom window class helper module that registers/unregisters the "VComboBoxWndClass" window class and adds the LBS_NODATA style to ComboLBox.

#### VcbWndRegisterClass

```vb
Public Sub VcbWndRegisterClass()
```

Registers the custom window class.

#### VcbWndReleaseClass

```vb
Public Sub VcbWndReleaseClass()
```

Unregisters the custom window class.

## Code Examples

### Basic Usage

```vb
' Set up virtual combo box
With VirtualCombo1
    .Style = VcbStyleDropDownList
    .ListCount = 1000
    .MaxDropDownItems = 15
End With

' Provide virtual item data
Private Sub VirtualCombo1_GetVirtualItem(ByVal Item As Long, ByRef Text As String)
    Text = "Item " & CStr(Item)
End Sub

' Find virtual item
Private Sub VirtualCombo1_FindVirtualItem(ByVal StartIndex As Long, _
    ByVal SearchText As String, ByVal Partial As Boolean, ByRef FoundIndex As Long)
    FoundIndex = -1
End Sub

' Listen for drop-down event
Private Sub VirtualCombo1_DropDown()
    Debug.Print "Drop-down list opened"
End Sub

Private Sub VirtualCombo1_Change()
    Debug.Print "Current text: " & VirtualCombo1.Text
End Sub
```