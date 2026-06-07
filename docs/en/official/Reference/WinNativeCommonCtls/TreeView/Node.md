---
title: Node
parent: TreeView
permalink: /tB/Packages/WinNativeCommonCtls/TreeView/Node
---

# Node class
A **Node** is a single entry in a [**TreeView**](/en/official/Reference/WinNativeCommonCtls/TreeView/)'s [**Nodes**](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes) collection. Returned from [**Nodes.Add**](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add) and from [**Nodes.Item**](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes#item). Each node has its own text, icons, sort settings, check state, and sibling / parent / child relationships.

The class is tagged `[COMCreatable(False)]` --- user code accesses **Node** instances through the parent [**TreeView**](/en/official/Reference/WinNativeCommonCtls/TreeView/)'s [**Nodes**](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes) collection or through navigation properties on other nodes.

```vb
Dim root As Node = TreeView1.Nodes.Add(, , "root", "My Computer")
Dim drive As Node = TreeView1.Nodes.Add(root, tvwChild, "c", "C: drive")
drive.Bold = True
drive.Image = "disk"

Debug.Print drive.FullPath              ' "My Computer\C: drive"
Debug.Print drive.Parent.Text           ' "My Computer"
Debug.Print drive.Root.Text             ' "My Computer"
```

Properties
----------

### BackColor

The background color used to render this node. **OLE_COLOR**. Default: **vbWindowBackground**.

### Bold

Whether the node text is rendered in a bold font. **Boolean**. Default: **False**.

### Checked

Whether the node's checkbox is checked. **Boolean**. Only meaningful when [**TreeView.CheckBoxes**](/en/official/Reference/WinNativeCommonCtls/TreeView/#checkboxes) is **True**.

### Child

The first child node of this node, or **Nothing** if it has no children. **Node**, read-only.

### Children

The number of immediate child nodes of this node. **Long**, read-only.

### Expanded

Whether the node is currently expanded (showing its children). **Boolean**, read/write. Assigning fires [**TreeView.BeforeExpand**](/en/official/Reference/WinNativeCommonCtls/TreeView/#beforeexpand) / [**TreeView.BeforeCollapse**](/en/official/Reference/WinNativeCommonCtls/TreeView/#beforecollapse) (cancellable) followed by [**TreeView.Expand**](/en/official/Reference/WinNativeCommonCtls/TreeView/#expand) / [**TreeView.Collapse**](/en/official/Reference/WinNativeCommonCtls/TreeView/#collapse).

### FirstSibling

The first sibling of this node (the leftmost peer under the same parent). **Node**, read-only. If the node is itself the first sibling, returns the node.

### ForeColor

The text color used to render this node. **OLE_COLOR**. Default: **vbWindowText**.

### FullPath

The hierarchical path from the root to this node, with [**TreeView.PathSeparator**](/en/official/Reference/WinNativeCommonCtls/TreeView/#pathseparator) inserted between node texts. **String**, read-only.

Example: a node "C: drive" whose parent is "My Computer" returns `"My Computer\C: drive"`.

### Image

The icon rendered when the node is not selected. **Variant** --- either a 1-based **Long** index into [**TreeView.ImageList**](/en/official/Reference/WinNativeCommonCtls/TreeView/#imagelist), or a **String** key. Assignment validates against the bound image list.

### Index

The 1-based position of this node in the parent collection. **Long**, read-only.

### Key

The string key the node was added under. **String**, read/write.

### LastSibling

The last sibling of this node (the rightmost peer under the same parent). **Node**, read-only.

### Next

The next sibling of this node, or **Nothing** if this is the last sibling. **Node**, read-only.

### Parent

The parent **Node**, or **Nothing** if this node is at the root level. **Node**, read/write. Note: assigning **Parent** does not move the node --- it merely changes the recorded parent reference.

### Previous

The previous sibling of this node, or **Nothing** if this is the first sibling. **Node**, read-only.

### Root

The root node of the subtree this node belongs to. **Node**, read-only.

### Selected

Whether this node is the [**TreeView.SelectedItem**](/en/official/Reference/WinNativeCommonCtls/TreeView/#selecteditem) of the treeview. **Boolean**, read/write.

### SelectedImage

The icon rendered when the node is selected. **Variant** --- either an index or a key into [**TreeView.ImageList**](/en/official/Reference/WinNativeCommonCtls/TreeView/#imagelist). When unset, defaults to the same as [**Image**](#image).

### Sorted

Whether this node's children are sorted. **Boolean**. Default: **False**. Independent of [**TreeView.Sorted**](/en/official/Reference/WinNativeCommonCtls/TreeView/#sorted), which controls root-level sorting.

### SortOrder

The sort direction for this node's children. A member of [**TreeSortOrderConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants). Default: **tvwAscending**.

### SortType

The string comparison used for sorting this node's children. A member of [**TreeSortTypeConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants): **tvwBinary** or **tvwText**. Default: **tvwText**.

### Tag

Arbitrary data the application can attach to the node. **Variant**.

### Text

The node's label text. **String**, read/write.

### Visible

Whether the node is currently visible --- i.e. not hidden because an ancestor is collapsed and not scrolled out of view. **Boolean**, read-only.

Methods
-------

### EnsureVisible

Scrolls and expands ancestor nodes as necessary to make this node visible in the treeview.

Syntax: *object*.**EnsureVisible**

## See Also

- [TreeView](/en/official/Reference/WinNativeCommonCtls/TreeView/) -- the parent control
- [Nodes](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes) -- the collection holding **Node** instances
- [TreeSortOrderConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants), [TreeSortTypeConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) -- the **SortOrder** / **SortType** enums
