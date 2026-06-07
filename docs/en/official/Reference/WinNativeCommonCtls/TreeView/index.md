---
title: TreeView
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/TreeView/
---

# TreeView class
A **TreeView** is a hierarchical display of [**Node**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node) objects organized into a tree. Each node can be expanded or collapsed, optionally has a checkbox, and references an icon from an associated [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList/). The collection of nodes is accessed through [**Nodes**](#nodes); each [**Node**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node) has its own siblings, parent, and child navigation properties.

```vb
Private Sub Form_Load()
    Set TreeView1.ImageList = ImageList1
    TreeView1.Style = tvwTreelinesPlusMinusPictureText

    Dim root As Node
    Set root = TreeView1.Nodes.Add(, , "root", "My Computer", "computer")
    TreeView1.Nodes.Add root, tvwChild, "c", "C: drive", "disk"
    TreeView1.Nodes.Add root, tvwChild, "d", "D: drive", "disk"
    root.Expanded = True
End Sub

Private Sub TreeView1_NodeClick(ByVal Node As Node)
    Debug.Print "Clicked: " & Node.FullPath
End Sub
```

The control inherits the focusable rect-dockable members from `BaseControlFocusable` --- size, position, **Anchors**, **Dock**, **Font**, **Appearance**, **MousePointer** / **MouseIcon**, **ToolTipText**, **DragMode** / **DragIcon**, **Drag**, **Refresh**, **SetFocus**, **TabIndex** / **TabStop**, **ZOrder**, **CausesValidation**, **VisualStyles**, **hWnd**, **HelpContextID** / **WhatsThisHelpID**.

## Style: a composite of buttons / lines / icons / text

[**Style**](#style) is the most-clicked property on this control. It is a single enum value but the eight choices encode a 3-bit combination of which visual elements appear:

| [**Style**](#style)                                | Buttons | Lines | Icons |
|----------------------------------------------------|---------|-------|-------|
| **tvwTextOnly**                                    | ---       | ---     | ---     |
| **tvwPictureText**                                 | ---       | ---     | yes   |
| **tvwPlusMinusText**                               | yes     | ---     | ---     |
| **tvwPlusMinusPictureText**                        | yes     | ---     | yes   |
| **tvwTreelinesText**                               | ---       | yes   | ---     |
| **tvwTreelinesPictureText**                        | ---       | yes   | yes   |
| **tvwTreelinesPlusMinusText**                      | yes     | yes   | ---     |
| **tvwTreelinesPlusMinusPictureText** (default)     | yes     | yes   | yes   |

The values are decoded internally into the Win32 `TVS_HASBUTTONS` / `TVS_HASLINES` style bits.

## Sorting

Sorting is configured at two levels:

- The **TreeView** as a whole sorts its root-level nodes when [**Sorted**](#sorted) is **True**, using [**SortOrder**](#sortorder) and [**SortType**](#sorttype) to control direction and comparison.
- Each individual [**Node**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node) has its own [**Sorted**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#sorted) / [**SortOrder**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#sortorder) / [**SortType**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#sorttype) properties, which control how *its* children are sorted, independently of the tree-level setting.

Toggling either flag triggers an immediate sort. New nodes added after a node has been sorted are inserted into the correct sorted position.

## Image lists and image references

Bind an [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList/) through [**ImageList**](#imagelist). Each [**Node**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node) references icons through [**Image**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#image) (rendered when the node is not selected) and [**SelectedImage**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#selectedimage) (rendered when the node is selected); either accepts a 1-based **Long** index or a **String** key into the bound image list. Omitting [**SelectedImage**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#selectedimage) defaults the selected icon to the same as [**Image**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#image).

## Checkboxes

Setting [**CheckBoxes**](#checkboxes) to **True** adds a leading checkbox to every node. The user can click the checkbox or press **Space** while a node is focused to toggle; the [**NodeCheck**](#nodecheck) event then fires. [**Node.Checked**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#checked) reads and writes the check state programmatically.

Properties
----------

### Appearance

How the control's border is drawn. A [**AppearanceConstants**](/en/official/Reference/VBRUN/Constants/AppearanceConstants) member. Default: **vbAppear3d**. Inherited.

### BorderStyle

The control's border style. A member of [**TreeBorderStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants): **ccNone** or **ccFixedSingle**. Default: **ccFixedSingle**.

### CheckBoxes

Whether each node has a leading checkbox. **Boolean**. Default: **False**.

### DropHighlight

The [**Node**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node) currently highlighted as a drag-drop target, or **Nothing**. **Node**, read/write.

### FullRowSelect

Whether clicking on the indentation area of a row selects the node (instead of only clicking on its icon or label). **Boolean**. Default: **False**.

### HideSelection

Whether the selection highlight is hidden when the control does not have focus. **Boolean**. Default: **True**.

### HotTracking

Whether nodes are highlighted as the mouse hovers over them. **Boolean**. Default: **False**.

### hWnd

The Win32 handle of the treeview window. **LongPtr**, read-only.

### hWndLabelEdit

The Win32 handle of the currently editing label's textbox window, or `0`. **LongPtr**, read-only.

### ImageList

The [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList/) used for node icons. Assignment increments the **ImageList**'s bound-count.

### Indentation

The horizontal pixel indent per level of node depth. **Double**, read/write. Default: `20`.

### LabelEdit

How inline label editing is triggered. A member of [**TreeLabelEditConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants): **tvwAutomatic**, **tvwManual**, or **tvwDisabled**. Default: **tvwAutomatic**.

### LineStyle

Whether tree lines are drawn from root nodes or only from child nodes. A member of [**TreeLineStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants): **tvwTreeLines** or **tvwRootLines**. Default: **tvwRootLines**.

### Nodes

The [**Nodes**](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes) collection. Read-only.

### PathSeparator

The string inserted between node texts in [**Node.FullPath**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#fullpath). **String**. Default: `"\"`.

### Scroll

Whether the treeview has scrollbars (when its content extends beyond the visible area). **Boolean**. Default: **True**.

### SelectedItem

The currently selected [**Node**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node), or **Nothing**. Read/write.

### SingleSel

Whether only a single node can be expanded at any time (any other expansion automatically collapses sibling subtrees). **Boolean**. Default: **False**.

### Sorted

Whether root-level nodes are sorted. **Boolean**. Default: **False**. Per-subtree sorting is controlled through [**Node.Sorted**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#sorted) on individual nodes.

### SortOrder

The sort direction at the root level. A member of [**TreeSortOrderConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants). Default: **tvwAscending**.

### SortType

The string comparison used for sorting at the root level. A member of [**TreeSortTypeConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants): **tvwBinary** (case-sensitive) or **tvwText** (case-insensitive). Default: **tvwText**.

### Style

The composite visual style --- see [the **Style** table above](#style-a-composite-of-buttons--lines--icons--text). A member of [**TreeStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants). Default: **tvwTreelinesPlusMinusPictureText**.

### WheelScrollEvent

Whether mouse-wheel events trigger [**Scroll**](#scroll-event). **Boolean**. Default: **True**.

Methods
-------

### GetVisibleCount

Returns the maximum number of fully-visible nodes the current viewport can show. **Long**.

Syntax: *object*.**GetVisibleCount** **As Long**

### HitTest

Returns the [**Node**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node) at the given point, or **Nothing** if no node lies under it. Useful for drag-drop hover effects, custom context menus, and right-click handling.

Syntax: *object*.**HitTest** ( *x*, *y* ) **As Node**

*x*
: A **Single** horizontal coordinate in the control's coordinate system (twips by default).

*y*
: A **Single** vertical coordinate.

### StartLabelEdit

Opens the inline editor on the currently selected node. Used when [**LabelEdit**](#labeledit) is **tvwManual**.

Syntax: *object*.**StartLabelEdit**

Events
------

### AfterLabelEdit

Raised when an inline label edit completes. Set *Cancel* to **True** to revert the change.

Syntax: *object*\_**AfterLabelEdit**( *Cancel* **As Boolean**, *NewString* **As String** )

### BeforeCollapse

Raised before a node is collapsed. Set *Cancel* to **True** to prevent the collapse.

Syntax: *object*\_**BeforeCollapse**( **ByVal** *Node* **As Node**, **ByRef** *Cancel* **As Boolean** )

### BeforeExpand

Raised before a node is expanded. Set *Cancel* to **True** to prevent the expansion.

Syntax: *object*\_**BeforeExpand**( **ByVal** *Node* **As Node**, **ByRef** *Cancel* **As Boolean** )

### BeforeLabelEdit

Raised when an inline label edit is about to start. Set *Cancel* to **True** to block the edit.

Syntax: *object*\_**BeforeLabelEdit**( *Cancel* **As Boolean** )

### Click

Raised on a mouse click inside the control. Distinct from [**NodeClick**](#nodeclick), which fires when the click hits a node.

Syntax: *object*\_**Click**( )

### Collapse

Raised after a node has been collapsed.

Syntax: *object*\_**Collapse**( **ByVal** *Node* **As Node** )

### DblClick

Raised on a double-click inside the control.

Syntax: *object*\_**DblClick**( )

### DragDrop, DragOver

Inherited drag-drop events.

### Expand

Raised after a node has been expanded.

Syntax: *object*\_**Expand**( **ByVal** *Node* **As Node** )

### Initialize

Raised after the control's window has been created.

### KeyDown, KeyPress, KeyUp

Inherited keyboard events. Pressing **Space** while [**CheckBoxes**](#checkboxes) is **True** toggles the focused node's check state and fires [**NodeCheck**](#nodecheck).

### MouseDown, MouseMove, MouseUp

Inherited mouse events.

### NodeCheck

Raised when a node's checkbox is toggled --- either by the user clicking it, by **Space** keypress, or by code assigning [**Node.Checked**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#checked).

Syntax: *object*\_**NodeCheck**( **ByVal** *Node* **As Node** )

### NodeClick

Raised when a node is clicked. Distinct from [**Click**](#click), which fires on any mouse click in the control regardless of where it occurs.

Syntax: *object*\_**NodeClick**( **ByVal** *Node* **As Node** )

### NodeSelect

Raised when a node becomes the selected node --- either by user click, by keyboard arrow navigation, or by code assigning [**SelectedItem**](#selecteditem).

Syntax: *object*\_**NodeSelect**( **ByVal** *Node* **As Node** )

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

Inherited OLE drag-and-drop events.

### Scroll

Raised when the treeview scrolls. New to this twinBASIC implementation; the original VB6 control did not expose this event. Set [**WheelScrollEvent**](#wheelscrollevent) to **False** to suppress firing on mouse-wheel input.

Syntax: *object*\_**Scroll**( )

### Validate

Inherited validation event.

## See Also

- [Node](/en/official/Reference/WinNativeCommonCtls/TreeView/Node) -- a single node in the tree
- [Nodes](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes) -- the collection of nodes
- [ImageList](/en/official/Reference/WinNativeCommonCtls/ImageList/) -- the picture source for node icons
- [TreeBorderStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants), [TreeLabelEditConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants), [TreeLineStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants), [TreeStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants), [TreeRelationshipConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants), [TreeSortOrderConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants), [TreeSortTypeConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) -- the seven user-facing TreeView enums
- [ControlTypeConstants](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) -- where **vbTreeView** lives
