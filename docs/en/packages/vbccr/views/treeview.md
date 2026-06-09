---
title: TreeView Control
description: TreeView Control - VBCCR Developer Reference, complete API documentation based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '13382dac-30b0-4233-9347-3052a6673717'
  PropagateID: '13382dac-30b0-4233-9347-3052a6673717'
  ReservedCode1: '862d9b0b-9e39-4d47-bbdc-9262d1e829a8'
  ReservedCode2: '862d9b0b-9e39-4d47-bbdc-9262d1e829a8'
---

# TreeView Control

Provides a hierarchical tree display of data, supporting node expand/collapse, checkboxes, multi-select, image lists, label editing, sorting, and OLE drag-and-drop.

## Enumerations

### TvwStyleConstants

Tree view style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TvwStyleTextOnly | 0 | Text only |
| TvwStylePictureText | 1 | Picture and text |
| TvwStylePlusMinusText | 2 | Plus/minus signs and text |
| TvwStylePlusMinusPictureText | 3 | Plus/minus signs, picture, and text |
| TvwStyleTreeLinesText | 4 | Tree lines and text |
| TvwStyleTreeLinesPictureText | 5 | Tree lines, picture, and text |
| TvwStyleTreeLinesPlusMinusText | 6 | Tree lines, plus/minus signs, and text |
| TvwStyleTreeLinesPlusMinusPictureText | 7 | Tree lines, plus/minus signs, picture, and text |

### TvwLineStyleConstants

Line style constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TvwLineStyleTreeLines | 0 | Show tree lines |
| TvwLineStyleRootLines | 1 | Show root lines (lines shown between root nodes as well) |

### TvwLabelEditConstants

Label edit mode constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TvwLabelEditAutomatic | 0 | Automatic label edit (click to select, click again to edit) |
| TvwLabelEditManual | 1 | Manual label edit (requires code to call StartLabelEdit) |
| TvwLabelEditDisabled | 2 | Label edit disabled |

### TvwNodeRelationshipConstants

Node relationship constants, used by the Add and Move methods.

| Constant | Value | Description |
|----------|-------|-------------|
| TvwNodeFirst | 0 | First node |
| TvwNodeLast | 1 | Last node |
| TvwNodeNext | 2 | Next node (same level) |
| TvwNodePrevious | 3 | Previous node (same level) |
| TvwNodeChild | 4 | Child node |

### TvwSortOrderConstants

Sort order constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TvwSortAscending | 0 | Ascending order |
| TvwSortDescending | 1 | Descending order |

### TvwSortTypeConstants

Sort type constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TvwSortBinary | 0 | Binary sort (case-sensitive) |
| TvwSortText | 1 | Text sort (case-insensitive) |

### TvwMultiSelectConstants

Multi-select mode constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TvwMultiSelectNone | 0 | Multi-select not allowed |
| TvwMultiSelectAll | 1 | Allow selecting all nodes |
| TvwMultiSelectVisibleOnly | 2 | Allow selecting visible nodes only |
| TvwMultiSelectRestrictSiblings | 3 | Allow selecting sibling nodes only |

### TvwVisualThemeConstants

Visual theme constants.

| Constant | Value | Description |
|----------|-------|-------------|
| TvwVisualThemeStandard | 0 | Standard theme |
| TvwVisualThemeExplorer | 1 | Explorer theme |

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

Returns the object that contains this object.

### Container

```vb
Public Property Get Container() As Object
Public Property Set Container(ByVal Value As Object)
```

Returns/sets the object's container.

### Left

```vb
Public Property Get Left() As Single
Public Property Let Left(ByVal Value As Single)
```

Returns/sets the distance between the object and the left edge of its container.

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

Returns/sets the distance between the object and the top edge of its container.

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

Returns/sets the tooltip text displayed when the mouse hovers over the control.

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

Returns/sets the associated context-sensitive help ID.

### Align

```vb
Public Property Get Align() As Integer
Public Property Let Align(ByVal Value As Integer)
```

Returns/sets the alignment of the control on its form.

### DragIcon

```vb
Public Property Get DragIcon() As IPictureDisp
Public Property Let DragIcon(ByVal Value As IPictureDisp)
Public Property Set DragIcon(ByVal Value As IPictureDisp)
```

Returns/sets the icon displayed during a drag-and-drop operation.

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

### hWndLabelEdit

```vb
Public Property Get hWndLabelEdit() As LongPtr
```

Returns the label edit box handle.

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

### VisualTheme

```vb
Public Property Get VisualTheme() As TvwVisualThemeConstants
Public Property Let VisualTheme(ByVal Value As TvwVisualThemeConstants)
```

Returns/sets the visual theme.

### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

Returns/sets whether the object can respond to user-generated events.

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

Returns/sets whether automatic scrolling is enabled during OLE drag-and-drop.

### OLEDragExpandTime

```vb
Public Property Get OLEDragExpandTime() As Long
Public Property Let OLEDragExpandTime(ByVal Value As Long)
```

Returns/sets the hover duration before expanding a node during OLE drag-and-drop (milliseconds).

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

Returns/sets the pointer type displayed when the mouse hovers over the control. See common enumerations.

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

Returns/sets whether events are raised when the mouse enters or leaves the control.

### RightToLeft

```vb
Public Property Get RightToLeft() As Boolean
Public Property Let RightToLeft(ByVal Value As Boolean)
```

Returns/sets the right-to-left display direction.

### RightToLeftLayout

```vb
Public Property Get RightToLeftLayout() As Boolean
Public Property Let RightToLeftLayout(ByVal Value As Boolean)
```

Returns/sets the right-to-left layout.

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

Returns/sets the right-to-left mode. See common enumerations.

### ImageList

```vb
Public Property Get ImageList() As Variant
Public Property Let ImageList(ByVal Value As Variant)
Public Property Set ImageList(ByVal Value As Variant)
```

Returns/sets the associated ImageList control. Can be an object reference, a string key name, or a LongPtr handle.

### BorderStyle

```vb
Public Property Get BorderStyle() As CCBorderStyleConstants
Public Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)
```

Returns/sets the border style. See common enumerations.

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

### Redraw

```vb
Public Property Get Redraw() As Boolean
Public Property Let Redraw(ByVal Value As Boolean)
```

Returns/sets whether redrawing is enabled. Disabling can accelerate bulk operations.

### Style

```vb
Public Property Get Style() As TvwStyleConstants
Public Property Let Style(ByVal Value As TvwStyleConstants)
```

Returns/sets the tree view style.

### LineStyle

```vb
Public Property Get LineStyle() As TvwLineStyleConstants
Public Property Let LineStyle(ByVal Value As TvwLineStyleConstants)
```

Returns/sets the line style.

### LineColor

```vb
Public Property Get LineColor() As OLE_COLOR
Public Property Let LineColor(ByVal Value As OLE_COLOR)
```

Returns/sets the line color.

### LabelEdit

```vb
Public Property Get LabelEdit() As TvwLabelEditConstants
Public Property Let LabelEdit(ByVal Value As TvwLabelEditConstants)
```

Returns/sets the label edit mode.

### Checkboxes

```vb
Public Property Get Checkboxes() As Boolean
Public Property Let Checkboxes(ByVal Value As Boolean)
```

Returns/sets whether checkboxes are displayed next to nodes.

### ShowTips

```vb
Public Property Get ShowTips() As Boolean
Public Property Let ShowTips(ByVal Value As Boolean)
```

Returns/sets whether tooltips are displayed.

### HideSelection

```vb
Public Property Get HideSelection() As Boolean
Public Property Let HideSelection(ByVal Value As Boolean)
```

Returns/sets whether the selection highlight is hidden when the control loses focus.

### FullRowSelect

```vb
Public Property Get FullRowSelect() As Boolean
Public Property Let FullRowSelect(ByVal Value As Boolean)
```

Returns/sets whether full row selection is enabled.

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

Returns/sets whether hot tracking is enabled.

### Indentation

```vb
Public Property Get Indentation() As Single
Public Property Let Indentation(ByVal Value As Single)
```

Returns/sets the child node indentation amount.

### PathSeparator

```vb
Public Property Get PathSeparator() As String
Public Property Let PathSeparator(ByVal Value As String)
```

Returns/sets the path separator used by the FullPath property.

### Scroll

```vb
Public Property Get Scroll() As Boolean
Public Property Let Scroll(ByVal Value As Boolean)
```

Returns/sets whether scroll bars are displayed.

### SingleSel

```vb
Public Property Get SingleSel() As Boolean
Public Property Let SingleSel(ByVal Value As Boolean)
```

Returns/sets whether clicking a node expands it and collapses other nodes.

### Sorted

```vb
Public Property Get Sorted() As Boolean
Public Property Let Sorted(ByVal Value As Boolean)
```

Returns/sets whether root nodes are sorted.

### SortOrder

```vb
Public Property Get SortOrder() As TvwSortOrderConstants
Public Property Let SortOrder(ByVal Value As TvwSortOrderConstants)
```

Returns/sets the sort order.

### SortType

```vb
Public Property Get SortType() As TvwSortTypeConstants
Public Property Let SortType(ByVal Value As TvwSortTypeConstants)
```

Returns/sets the sort type.

### InsertMarkColor

```vb
Public Property Get InsertMarkColor() As OLE_COLOR
Public Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

Returns/sets the insert mark color.

### DoubleBuffer

```vb
Public Property Get DoubleBuffer() As Boolean
Public Property Let DoubleBuffer(ByVal Value As Boolean)
```

Returns/sets whether double-buffered drawing is enabled.

### IMEMode

```vb
Public Property Get IMEMode() As CCIMEModeConstants
Public Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

Returns/sets the input method editor mode. See common enumerations.

### MultiSelect

```vb
Public Property Get MultiSelect() As TvwMultiSelectConstants
Public Property Let MultiSelect(ByVal Value As TvwMultiSelectConstants)
```

Returns/sets the multi-select mode.

### Nodes

```vb
Public Property Get Nodes() As TvwNodes
```

Returns the nodes collection.

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

## Events

### Click

```vb
Public Event Click()
```

Raised when the user clicks the control.

### DblClick

```vb
Public Event DblClick()
```

Raised when the user double-clicks the control.

### NodeClick

```vb
Public Event NodeClick(ByVal Node As TvwNode, ByVal Button As Integer)
```

Raised when the user clicks a node. Button indicates the mouse button.

### NodeDblClick

```vb
Public Event NodeDblClick(ByVal Node As TvwNode, ByVal Button As Integer)
```

Raised when the user double-clicks a node.

### NodeBeforeCheck

```vb
Public Event NodeBeforeCheck(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

Raised before a node's checkbox is about to change. Set Cancel to True to cancel the operation.

### NodeCheck

```vb
Public Event NodeCheck(ByVal Node As TvwNode)
```

Raised after a node's checkbox state has changed.

### NodeDrag

```vb
Public Event NodeDrag(ByVal Node As TvwNode, ByVal Button As Integer)
```

Raised when the user drags a node.

### NodeBeforeSelect

```vb
Public Event NodeBeforeSelect(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

Raised before a node is about to be selected. Set Cancel to True to cancel the selection.

### NodeSelect

```vb
Public Event NodeSelect(ByVal Node As TvwNode)
```

Raised after a node has been selected.

### NodeRangeSelect

```vb
Public Event NodeRangeSelect(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

Raised during a range selection. Set Cancel to True to cancel.

### BeforeCollapse

```vb
Public Event BeforeCollapse(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

Raised before a node is about to collapse. Set Cancel to True to cancel the collapse.

### Collapse

```vb
Public Event Collapse(ByVal Node As TvwNode)
```

Raised after a node has collapsed.

### BeforeExpand

```vb
Public Event BeforeExpand(ByVal Node As TvwNode, ByRef Cancel As Boolean)
```

Raised before a node is about to expand. Set Cancel to True to cancel the expansion.

### Expand

```vb
Public Event Expand(ByVal Node As TvwNode)
```

Raised after a node has expanded.

### BeforeLabelEdit

```vb
Public Event BeforeLabelEdit(ByRef Cancel As Boolean)
```

Raised before a label is about to be edited. Set Cancel to True to cancel the edit.

### AfterLabelEdit

```vb
Public Event AfterLabelEdit(ByRef Cancel As Boolean, ByRef NewString As String)
```

Raised after label editing is complete. Set Cancel to True to cancel the modification; NewString is the edited text.

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Key preview event. Set IsInputKey to True to mark the key as an input key.

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

Key release preview event.

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

Raised when a keyboard key is pressed.

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

Raised when a keyboard key is released.

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

Raised when an ANSI key is pressed and released.

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when a mouse button is pressed.

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when the mouse is moved.

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when a mouse button is released.

### MouseEnter

```vb
Public Event MouseEnter()
```

Raised when the mouse enters the control area.

### MouseLeave

```vb
Public Event MouseLeave()
```

Raised when the mouse leaves the control area.

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

Raised when an OLE drag-and-drop operation is completed.

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

Raised when an OLE drag-and-drop operation is dropped.

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

Raised during an OLE drag-and-drop hover.

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

Raised when OLE drag-and-drop gives feedback.

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

Raised when OLE drag-and-drop sets data.

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

Raised when an OLE drag-and-drop operation starts.

## Sub-Objects

### TvwNode Class

Tree view node object.

#### TvwNode Properties

##### Index

```vb
Public Property Get Index() As Long
```

The index of the node in the collection.

##### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

Unique identifier key.

##### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
```

Extra data.

##### Handle

```vb
Public Property Get Handle() As LongPtr
```

Node handle.

##### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

Node text.

##### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

ToolTip text.

##### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

Background color.

##### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

Foreground color.

##### Image

```vb
Public Property Get Image() As Variant
Public Property Let Image(ByVal Value As Variant)
```

Node image.

##### ImageIndex

```vb
Public Property Get ImageIndex() As Long
```

Image index.

##### SelectedImage

```vb
Public Property Get SelectedImage() As Variant
Public Property Let SelectedImage(ByVal Value As Variant)
```

Selected state image.

##### SelectedImageIndex

```vb
Public Property Get SelectedImageIndex() As Long
```

Selected image index.

##### ExpandedImage

```vb
Public Property Get ExpandedImage() As Variant
Public Property Let ExpandedImage(ByVal Value As Variant)
```

Expanded state image.

##### ExpandedImageIndex

```vb
Public Property Get ExpandedImageIndex() As Long
```

Expanded image index.

##### NoImages

```vb
Public Property Get NoImages() As Boolean
Public Property Let NoImages(ByVal Value As Boolean)
```

Whether no image is displayed.

##### Selected

```vb
Public Property Get Selected() As Boolean
Public Property Let Selected(ByVal Value As Boolean)
```

Whether selected.

##### CheckBox

```vb
Public Property Get CheckBox() As Boolean
Public Property Let CheckBox(ByVal Value As Boolean)
```

Whether a checkbox is displayed.

##### Checked

```vb
Public Property Get Checked() As Boolean
Public Property Let Checked(ByVal Value As Boolean)
```

Whether checked.

##### Bold

```vb
Public Property Get Bold() As Boolean
Public Property Let Bold(ByVal Value As Boolean)
```

Whether bold.

##### Ghosted

```vb
Public Property Get Ghosted() As Boolean
Public Property Let Ghosted(ByVal Value As Boolean)
```

Whether ghosted.

##### Expanded

```vb
Public Property Get Expanded() As Boolean
Public Property Let Expanded(ByVal Value As Boolean)
```

Whether expanded.

##### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

Whether enabled.

##### Sorted

```vb
Public Property Get Sorted() As Boolean
Public Property Let Sorted(ByVal Value As Boolean)
```

Whether child nodes are sorted.

##### SortOrder

```vb
Public Property Get SortOrder() As TvwSortOrderConstants
Public Property Let SortOrder(ByVal Value As TvwSortOrderConstants)
```

Sort order.

##### SortType

```vb
Public Property Get SortType() As TvwSortTypeConstants
Public Property Let SortType(ByVal Value As TvwSortTypeConstants)
```

Sort type.

##### Children

```vb
Public Property Get Children() As Long
```

Number of child nodes.

##### Child

```vb
Public Property Get Child() As TvwNode
```

First child node.

##### Level

```vb
Public Property Get Level() As Long
```

Node level (root node is 0).

##### Parent

```vb
Public Property Get Parent() As TvwNode
Public Property Set Parent(ByVal Value As TvwNode)
```

Parent node.

##### Root

```vb
Public Property Get Root() As TvwNode
```

Root node.

##### NextSibling

```vb
Public Property Get NextSibling() As TvwNode
```

Next sibling node.

##### PreviousSibling

```vb
Public Property Get PreviousSibling() As TvwNode
```

Previous sibling node.

##### FirstSibling

```vb
Public Property Get FirstSibling() As TvwNode
```

First sibling node.

##### LastSibling

```vb
Public Property Get LastSibling() As TvwNode
```

Last sibling node.

##### FirstVisibleSibling

```vb
Public Property Get FirstVisibleSibling() As TvwNode
```

First visible sibling node.

##### LastVisibleSibling

```vb
Public Property Get LastVisibleSibling() As TvwNode
```

Last visible sibling node.

##### NextVisibleSibling

```vb
Public Property Get NextVisibleSibling() As TvwNode
```

Next visible sibling node.

##### PreviousVisibleSibling

```vb
Public Property Get PreviousVisibleSibling() As TvwNode
```

Previous visible sibling node.

##### FullPath

```vb
Public Property Get FullPath() As String
```

The full path from the root to the current node.

##### Visible

```vb
Public Property Get Visible() As Boolean
```

Whether the node is visible.

#### TvwNode Methods

##### Move

```vb
Public Sub Move(ByVal Relative As Variant, ByVal Relationship As TvwNodeRelationshipConstants)
```

Moves the node to a new position.

##### EnsureVisible

```vb
Public Sub EnsureVisible()
```

Ensures the node is visible (expands parent nodes and scrolls into view).

##### CreateDragImage

```vb
Public Function CreateDragImage() As LongPtr
```

Creates a drag image for the node; returns the image list handle.

##### SelectedIndex

```vb
Public Function SelectedIndex() As Long
```

Returns the selected item index.

### TvwNodes Class

Tree view nodes collection.

#### TvwNodes Members

##### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

Enumerator (hidden).

##### Add

```vb
Public Function Add(Optional ByVal Relative As Variant, Optional ByVal Relationship As Variant, Optional ByVal Key As Variant, Optional ByVal Text As Variant, Optional ByVal Image As Variant, Optional ByVal SelectedImage As Variant) As TvwNode
```

Adds a node.

##### Item

```vb
Public Function Item(ByVal Index As Variant) As TvwNode
```

Gets a node (default member).

##### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

Checks if a node exists.

##### Count

```vb
Public Property Get Count() As Long
```

Node count.

##### Clear

```vb
Public Sub Clear()
```

Clears all nodes.

##### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

Removes a node.

### TvwSelectedNodes Class

Selected nodes collection (multi-select mode).

#### TvwSelectedNodes Members

##### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

Enumerator (hidden).

##### Item

```vb
Public Function Item(ByVal Index As Long) As TvwNode
```

Gets a selected node (default member).

##### Exists

```vb
Public Function Exists(ByVal Index As Long) As Boolean
```

Checks if a selected node exists.

##### Count

```vb
Public Property Get Count() As Long
```

Selected node count.

## Code Examples

### Basic Usage

```vb
' Add tree nodes
Dim root As TvwNode
Set root = TreeView1.Nodes.Add(, , "root", "Root Node", 1)
root.Expanded = True

TreeView1.Nodes.Add "root", TvwNodeChild, "child1", "Child 1", 2
TreeView1.Nodes.Add "root", TvwNodeChild, "child2", "Child 2", 2

' Handle node click
Private Sub TreeView1_NodeClick(ByVal Node As TvwNode, ByVal Button As Integer)
    MsgBox "Clicked: " & Node.Text
End Sub

' Control node expansion
Private Sub TreeView1_BeforeExpand(ByVal Node As TvwNode, ByRef Cancel As Boolean)
    If Node.Children = 0 Then
        Cancel = True
    End If
End Sub

' Node selection change
Private Sub TreeView1_NodeSelect(ByVal Node As TvwNode)
    Debug.Print "Selected: " & Node.FullPath
End Sub
```