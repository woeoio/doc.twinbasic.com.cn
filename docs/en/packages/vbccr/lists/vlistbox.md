---
title: VListBox Control
description: VListBox Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2635fb43-c4f4-42e6-b607-421e385718eb'
  PropagateID: '2635fb43-c4f4-42e6-b607-421e385718eb'
  ReservedCode1: 'a05ff317-65dc-463e-929a-22cadb3016e2'
  ReservedCode2: 'a05ff317-65dc-463e-929a-22cadb3016e2'
---

# VListBox Control

Provides a virtual data list box using the LBS_NODATA style for large dataset display, supplying data on demand, with support for multi-selection, owner-draw, insertion marks, and OLE drag-drop.

## Enumerations

### VlbDrawModeConstants

Draw mode constants.

| Constant | Value | Description |
|----------|-------|-------------|
| VlbDrawModeNormal | 0 | Standard draw mode |
| VlbDrawModeOwnerDrawFixed | 1 | Owner-draw fixed height mode |

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

### OLEDragDropScroll

```vb
Public Property Get OLEDragDropScroll() As Boolean
Public Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

Returns/sets whether to auto-scroll during OLE drag-drop.

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

### Redraw

```vb
Public Property Get Redraw() As Boolean
Public Property Let Redraw(ByVal Value As Boolean)
```

Returns/sets whether to redraw. Disabling can speed up bulk operations.

### BorderStyle

```vb
Public Property Get BorderStyle() As CCBorderStyleConstants
Public Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

Returns/sets the border style. See common enumerations.

### MultiColumn

```vb
Public Property Get MultiColumn() As Boolean
Public Property Let MultiColumn(ByVal Value As Boolean)
```

Returns/sets whether to display in multiple columns.

### IntegralHeight

```vb
Public Property Get IntegralHeight() As Boolean
Public Property Let IntegralHeight(ByVal Value As Boolean)
```

Returns/sets whether the height is adjusted to show complete items. Can only be set at design time.

### AllowSelection

```vb
Public Property Get AllowSelection() As Boolean
Public Property Let AllowSelection(ByVal Value As Boolean)
```

Returns/sets whether item selection is allowed.

### MultiSelect

```vb
Public Property Get MultiSelect() As VBRUN.MultiSelectConstants
Public Property Let MultiSelect(ByVal Value As VBRUN.MultiSelectConstants)
```

Returns/sets the multi-selection mode. Uses VBRUN.MultiSelectConstants (vbMultiSelectNone=0, vbMultiSelectSimple=1, vbMultiSelectExtended=2).

### HorizontalExtent

```vb
Public Property Get HorizontalExtent() As Single
Public Property Let HorizontalExtent(ByVal Value As Single)
```

Returns/sets the horizontal scroll range. Only effective when MultiColumn is False.

### UseTabStops

```vb
Public Property Get UseTabStops() As Boolean
Public Property Let UseTabStops(ByVal Value As Boolean)
```

Returns/sets whether to recognize and expand tab characters.

### DisableNoScroll

```vb
Public Property Get DisableNoScroll() As Boolean
Public Property Let DisableNoScroll(ByVal Value As Boolean)
```

Returns/sets whether to disable (instead of hide) the scroll bar when not needed.

### DrawMode

```vb
Public Property Get DrawMode() As VlbDrawModeConstants
Public Property Let DrawMode(ByVal Value As VlbDrawModeConstants)
```

Returns/sets the draw mode. Can only be set at design time.

### InsertMarkColor

```vb
Public Property Get InsertMarkColor() As OLE_COLOR
Public Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

Returns/sets the insertion mark color.

### ScrollTrack

```vb
Public Property Get ScrollTrack() As Boolean
Public Property Let ScrollTrack(ByVal Value As Boolean)
```

Returns/sets whether scroll tracking is enabled (real-time scrolling while dragging the thumb).

### ListCount

```vb
Public Property Get ListCount() As Long
Public Property Let ListCount(ByVal Value As Long)
```

Returns/sets the number of list items. In a virtual list, this is the total number of data items.

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

### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

Returns/sets the currently selected item text. Setting triggers FindVirtualItem to find a matching item.

### SelCount

```vb
Public Property Get SelCount() As Long
```

Returns the number of selected items.

### Selected

```vb
Public Property Get Selected(ByVal Index As Long) As Boolean
Public Property Let Selected(ByVal Index As Long, ByVal Value As Boolean)
```

Returns/sets the selected state of the item at the specified index.

### ItemHeight

```vb
Public Property Get ItemHeight() As Single
Public Property Let ItemHeight(ByVal Value As Single)
```

Returns/sets the item height.

### TopIndex

```vb
Public Property Get TopIndex() As Long
Public Property Let TopIndex(ByVal Value As Long)
```

Returns/sets the index of the top visible item in the list.

### AnchorIndex

```vb
Public Property Get AnchorIndex() As Long
Public Property Let AnchorIndex(ByVal Value As Long)
```

Returns/sets the anchor item index (the starting item for multi-selection).

### InsertMark

```vb
Public Property Get InsertMark(Optional ByRef After As Boolean) As Long
Public Property Let InsertMark(Optional ByRef After As Boolean, ByVal Value As Long)
```

Returns/sets the insertion mark position. The After parameter indicates whether the insertion mark appears below (True) or above (False) the item. Set to -1 to remove the insertion mark.

### OLEDraggedItem

```vb
Public Property Get OLEDraggedItem() As Long
```

Returns the index of the item currently being dragged in an OLE drag-drop operation.

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

### SetSelRange

```vb
Public Sub SetSelRange(ByVal StartIndex As Long, ByVal EndIndex As Long)
```

Sets the selection range (in multi-select mode).

### SetColumnWidth

```vb
Public Sub SetColumnWidth(ByVal Value As Single)
```

Sets the column width for a multi-column list.

### ItemsPerColumn

```vb
Public Function ItemsPerColumn() As Long
```

Gets the number of items per column.

### SelectedIndices

```vb
Public Function SelectedIndices() As Collection
```

Returns a collection of all selected item indices.

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As Long
```

Hit test, returns the item index at the specified coordinates. Returns -1 if not on any item.

### HitTestInsertMark

```vb
Public Function HitTestInsertMark(ByVal X As Single, ByVal Y As Single, Optional ByRef After As Boolean) As Long
```

Insertion mark hit test, also determines whether the insertion mark should appear above or below the item.

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

Fired when the list scrolls.

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single)
```

Context menu event. When X and Y are -1, the event was triggered by keyboard (Shift+F10).

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

## Code Examples

### Basic Usage

```vb
' Set up virtual list box
With VListBox1
    .ListCount = 10000
    .MultiSelect = vbMultiSelectExtended
    .InsertMarkColor = vbBlue
    .ScrollTrack = True
End With

' Provide virtual item data
Private Sub VListBox1_GetVirtualItem(ByVal Item As Long, ByRef Text As String)
    Text = "Item " & CStr(Item + 1)
End Sub

' Find virtual item
Private Sub VListBox1_FindVirtualItem(ByVal StartIndex As Long, _
    ByVal SearchText As String, ByVal Partial As Boolean, ByRef FoundIndex As Long)
    FoundIndex = -1
End Sub

' Owner-draw item example
Private Sub VListBox1_ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, _
    ByVal ItemState As Long, ByVal hDC As Long, ByVal Left As Long, _
    ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
    ' Custom drawing code
End Sub
```