---
title: ListBoxW Control
description: ListBoxW Control - VBCCR Development Manual, complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '386a94a7-ba45-46cb-8292-dfda6e6c82ae'
  PropagateID: '386a94a7-ba45-46cb-8292-dfda6e6c82ae'
  ReservedCode1: '2b847cfe-f2c3-478c-bce0-784ec0742afb'
  ReservedCode2: '2b847cfe-f2c3-478c-bce0-784ec0742afb'
---

# ListBoxW Control

Wraps the Win32 native list box control with support for checkbox/radio styles, owner-draw, insertion marks, and multi-column display.

## Enumerations

### LstStyleConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LstStyleStandard | 0 | Standard list box |
| LstStyleCheckbox | 1 | Checkbox style |
| LstStyleOption | 2 | Option button style |

### LstDrawModeConstants

| Constant | Value | Description |
|----------|-------|-------------|
| LstDrawModeNormal | 0 | System-drawn |
| LstDrawModeOwnerDrawFixed | 1 | Owner-draw fixed height |
| LstDrawModeOwnerDrawVariable | 2 | Owner-draw variable height |

### CCBorderStyleConstants

See common enumerations.

### CCMousePointerConstants

See common enumerations.

### CCRightToLeftModeConstants

See common enumerations.

## Properties

### Text

```vb
Property Get Text() As String
Property Let Text(ByVal Value As String)
```

Text of the currently selected item.

### List

```vb
Property Get List(ByVal Index As Long) As String
Property Let List(ByVal Index As Long, ByVal Value As String)
```

Gets or sets list item text by index.

### ItemData

```vb
Property Get ItemData(ByVal Index As Long) As LongPtr
Property Let ItemData(ByVal Index As Long, ByVal Value As LongPtr)
```

Gets or sets item-associated data by index.

### ItemChecked

```vb
Property Get ItemChecked(ByVal Index As Long) As Boolean
Property Let ItemChecked(ByVal Index As Long, ByVal Value As Boolean)
```

Gets or sets the checked state of an item by index (effective when Style is Checkbox or Option).

### ListCount

```vb
Property Get ListCount() As Long
```

Total number of list items. Read-only.

### ListIndex

```vb
Property Get ListIndex() As Long
Property Let ListIndex(ByVal Value As Long)
```

Index of the currently selected item.

### NewIndex

```vb
Property Get NewIndex() As Long
```

Index of the most recently added item. Read-only.

### TopIndex

```vb
Property Get TopIndex() As Long
Property Let TopIndex(ByVal Value As Long)
```

Index of the first visible item in the list.

### AnchorIndex

```vb
Property Get AnchorIndex() As Long
Property Let AnchorIndex(ByVal Value As Long)
```

Index of the selection anchor.

### SelCount

```vb
Property Get SelCount() As Long
```

Number of selected items. Read-only.

### Selected

```vb
Property Get Selected(ByVal Index As Long) As Boolean
Property Let Selected(ByVal Index As Long, ByVal Value As Boolean)
```

Gets or sets the selected state of an item by index.

### ItemHeight

```vb
Property Get ItemHeight(Optional ByVal Index As Long) As Single
Property Let ItemHeight(Optional ByVal Index As Long, ByVal Value As Single)
```

Item height. In variable-height owner-draw mode, it can be set per index.

### InsertMark

```vb
Property Get InsertMark(Optional ByRef After As Boolean) As Long
Property Let InsertMark(Optional ByRef After As Boolean, ByVal Value As Long)
```

Index of the insertion mark.

### OptionIndex

```vb
Property Get OptionIndex() As Long
Property Let OptionIndex(ByVal Value As Long)
```

Index of the selected item in option button style.

### OLEDraggedItem

```vb
Property Get OLEDraggedItem() As Long
```

Index of the dragged item in an OLE drag-drop operation. Read-only.

### Style

```vb
Property Get Style() As LstStyleConstants
Property Let Style(ByVal Value As LstStyleConstants)
```

List box style. Read-only at design time.

### DrawMode

```vb
Property Get DrawMode() As LstDrawModeConstants
Property Let DrawMode(ByVal Value As LstDrawModeConstants)
```

Drawing mode. Read-only at design time.

### MultiSelect

```vb
Property Get MultiSelect() As VBRUN.MultiSelectConstants
Property Let MultiSelect(ByVal Value As VBRUN.MultiSelectConstants)
```

Multi-selection mode.

### Sorted

```vb
Property Get Sorted() As Boolean
Property Let Sorted(ByVal Value As Boolean)
```

Whether to automatically sort items.

### MultiColumn

```vb
Property Get MultiColumn() As Boolean
Property Let MultiColumn(ByVal Value As Boolean)
```

Whether to enable multi-column display.

### IntegralHeight

```vb
Property Get IntegralHeight() As Boolean
Property Let IntegralHeight(ByVal Value As Boolean)
```

Whether to show only complete items. Can be set at design time.

### AllowSelection

```vb
Property Get AllowSelection() As Boolean
Property Let AllowSelection(ByVal Value As Boolean)
```

Whether to allow item selection.

### UseTabStops

```vb
Property Get UseTabStops() As Boolean
Property Let UseTabStops(ByVal Value As Boolean)
```

Whether to recognize and expand tab characters.

### DisableNoScroll

```vb
Property Get DisableNoScroll() As Boolean
Property Let DisableNoScroll(ByVal Value As Boolean)
```

Whether to disable (instead of hide) the scroll bar when scrolling is not needed.

### HorizontalExtent

```vb
Property Get HorizontalExtent() As Single
Property Let HorizontalExtent(ByVal Value As Single)
```

Horizontal scroll width.

### InsertMarkColor

```vb
Property Get InsertMarkColor() As OLE_COLOR
Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

Color of the insertion mark.

### ScrollTrack

```vb
Property Get ScrollTrack() As Boolean
Property Let ScrollTrack(ByVal Value As Boolean)
```

Whether to scroll content in real time while dragging the scroll bar.

### Redraw

```vb
Property Get Redraw() As Boolean
Property Let Redraw(ByVal Value As Boolean)
```

Whether to redraw the list box when items change. Disabling can speed up batch additions.

### BorderStyle

```vb
Property Get BorderStyle() As CCBorderStyleConstants
Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

Border style. See common enumerations.

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

Whether to enable visual styles.

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

Background color.

### ForeColor

```vb
Property Get ForeColor() As OLE_COLOR
Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Foreground color.

### Font

```vb
Property Get Font() As StdFont
Property Let Font(ByVal NewFont As StdFont)
Property Set Font(ByVal NewFont As StdFont)
```

Font.

### Enabled

```vb
Property Get Enabled() As Boolean
Property Let Enabled(ByVal Value As Boolean)
```

Whether the control is enabled.

### AllowDropFiles

```vb
Property Get AllowDropFiles() As Boolean
Property Let AllowDropFiles(ByVal Value As Boolean)
```

Whether to allow file drop.

### OLEDragMode

```vb
Property Get OLEDragMode() As VBRUN.OLEDragConstants
Property Let OLEDragMode(ByVal Value As VBRUN.OLEDragConstants)
```

OLE drag mode.

### OLEDragDropScroll

```vb
Property Get OLEDragDropScroll() As Boolean
Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

Whether to auto-scroll during OLE drag-drop.

### OLEDropMode

```vb
Property Get OLEDropMode() As OLEDropModeConstants
Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

OLE drop mode.

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

Mouse pointer style. See common enumerations.

### MouseIcon

```vb
Property Get MouseIcon() As IPictureDisp
Property Let MouseIcon(ByVal Value As IPictureDisp)
Property Set MouseIcon(ByVal Value As IPictureDisp)
```

Custom mouse icon.

### MouseTrack

```vb
Property Get MouseTrack() As Boolean
Property Let MouseTrack(ByVal Value As Boolean)
```

Whether to enable mouse enter/leave tracking.

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

Right-to-left display direction.

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Right-to-left mode. See common enumerations.

### hWnd

```vb
Property Get hWnd() As LongPtr
```

Window handle of the list box control.

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

Window handle of the UserControl.

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

Tooltip text.

### Name

```vb
Property Get Name() As String
```

Control name. Read-only.

### Tag

```vb
Property Get Tag() As String
Property Let Tag(ByVal Value As String)
```

Custom data.

### Parent

```vb
Property Get Parent() As Object
```

Parent object. Read-only.

### Container

```vb
Property Get Container() As Object
Property Set Container(ByVal Value As Object)
```

Container object.

### Left

```vb
Property Get Left() As Single
Property Let Left(ByVal Value As Single)
```

Left position.

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

Top position.

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

Width.

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

Height.

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

Whether the control is visible.

### HelpContextID

```vb
Property Get HelpContextID() As Long
Property Let HelpContextID(ByVal Value As Long)
```

Help context ID.

### WhatsThisHelpID

```vb
Property Get WhatsThisHelpID() As Long
Property Let WhatsThisHelpID(ByVal Value As Long)
```

"What's This" help ID.

### DragIcon

```vb
Property Get DragIcon() As IPictureDisp
Property Let DragIcon(ByVal Value As IPictureDisp)
Property Set DragIcon(ByVal Value As IPictureDisp)
```

Drag icon.

### DragMode

```vb
Property Get DragMode() As Integer
Property Let DragMode(ByVal Value As Integer)
```

Drag mode.

## Methods

### AddItem

```vb
Public Sub AddItem(ByVal Item As String, Optional ByVal Index As Variant)
```

Adds a list item.

### RemoveItem

```vb
Public Sub RemoveItem(ByVal Index As Long)
```

Removes the list item at the specified index.

### Clear

```vb
Public Sub Clear()
```

Clears all list items.

### Refresh

```vb
Public Sub Refresh()
```

Forces a redraw of the control.

### SetSelRange

```vb
Public Sub SetSelRange(ByVal StartIndex As Long, ByVal EndIndex As Long)
```

Sets the selection range (in multi-select mode).

### SetColumnWidth

```vb
Public Sub SetColumnWidth(ByVal Value As Single)
```

Sets the column width in multi-column mode.

### SelectItem

```vb
Public Function SelectItem(ByVal Text As String, Optional ByVal Index As Long = -1) As Long
```

Selects an item matching the text and returns the selected item index.

### FindItem

```vb
Public Function FindItem(ByVal Text As String, Optional ByVal Index As Long = -1, Optional ByVal Partial As Boolean) As Long
```

Finds an item matching the text and returns its index.

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As Long
```

Hit test, returns the item index at the specified coordinates.

### HitTestInsertMark

```vb
Public Function HitTestInsertMark(ByVal X As Single, ByVal Y As Single, Optional ByRef After As Boolean) As Long
```

Insertion mark hit test, returns the insertion position index.

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

### CheckedIndices

```vb
Public Function CheckedIndices() As Collection
```

Returns a collection of all checked item (checkbox/radio) indices.

### GetIdealHorizontalExtent

```vb
Public Function GetIdealHorizontalExtent() As Single
```

Gets the ideal horizontal scroll width.

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

Sets focus.

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

Adjusts the Z-order.

### Move

```vb
Public Sub Move(ByVal Left As Single, Optional ByVal Top As Variant, Optional ByVal Width As Variant, Optional ByVal Height As Variant)
```

Moves and resizes the control.

## Events

### Click

```vb
Public Event Click()
```

Click.

### DblClick

```vb
Public Event DblClick()
```

Double-click.

### Scroll

```vb
Public Event Scroll()
```

Fired when scrolling.

### ItemCheck

```vb
Public Event ItemCheck(ByVal Item As Long)
```

Fired when an item is checked or unchecked.

### ItemBeforeCheck

```vb
Public Event ItemBeforeCheck(ByVal Item As Long, ByRef Cancel As Boolean)
```

Fired before an item is checked or unchecked, can be canceled.

### ItemMeasure

```vb
Public Event ItemMeasure(ByVal Item As Long, ByRef ItemHeight As Long)
```

Fired when measuring item height in variable-height owner-draw mode.

### ItemDraw

```vb
Public Event ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, ByVal ItemState As Long, ByVal hDC As Long, ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
```

Fired when drawing an item in owner-draw mode.

### DropFiles

```vb
Public Event DropFiles(ByRef FileList As Variant, ByVal X As Single, ByVal Y As Single)
```

Fired when files are dropped onto the control.

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single)
```

Fired when a context menu is requested.

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Preview key down event, fired before KeyDown.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Preview key up event, fired before KeyUp.

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

Key pressed.

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

Key released.

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

Key character.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Mouse button pressed.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Mouse moved.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Mouse button released.

### MouseEnter

```vb
Public Event MouseEnter()
```

Mouse entered the control.

### MouseLeave

```vb
Public Event MouseLeave()
```

Mouse left the control.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE drag-drop completed.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE drag-drop dropped.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE drag-drop hover.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE give feedback.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE set data.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE drag started.

## Code Examples

### Basic Usage

```vb
' Add list items
ListBoxW1.AddItem "Item 1"
ListBoxW1.AddItem "Item 2", 0

' Set the currently selected item
ListBoxW1.ListIndex = 0

' Get selected item text
Dim s As String
s = ListBoxW1.Text
```

### Checkbox and Option Styles

```vb
' Checkbox style (set at design time)
' ListBoxW1.Style = LstStyleCheckbox

' Get checked items
Dim i As Long
For i = 0 To ListBoxW1.ListCount - 1
    If ListBoxW1.ItemChecked(i) Then
        Debug.Print ListBoxW1.List(i)
    End If
Next i
```

### Owner-Draw

```vb
' Variable-height owner-draw (set DrawMode = LstDrawModeOwnerDrawVariable at design time)
Private Sub ListBoxW1_ItemMeasure(ByVal Item As Long, ByRef ItemHeight As Long)
    ItemHeight = 30
End Sub

Private Sub ListBoxW1_ItemDraw(ByVal Item As Long, ByVal ItemAction As Long, _
    ByVal ItemState As Long, ByVal hDC As Long, _
    ByVal Left As Long, ByVal Top As Long, ByVal Right As Long, ByVal Bottom As Long)
    ' Custom drawing logic
End Sub
```

### Batch Addition

```vb
' Disable redraw to speed up batch addition
ListBoxW1.Redraw = False
Dim i As Long
For i = 1 To 1000
    ListBoxW1.AddItem "Item " & i
Next i
ListBoxW1.Redraw = True
```