---
title: ListItem
parent: ListView
permalink: /tB/Packages/WinNativeCommonCtls/ListView/ListItem
---

# ListItem class
A **ListItem** is a single row in a [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView). Returned from [**ListItems.Add**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItems#add) and from [**ListItems.Item**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItems#item). In **lvwReport** view, the first column is the main label ([**Text**](#text)); subsequent columns are exposed through [**SubItems**](#subitemsindex)(*index*).

The class is tagged `[COMCreatable(False)]` --- user code accesses **ListItem** instances through the parent [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView)'s [**ListItems**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItems) collection, never by direct instantiation.

```vb
Dim item As ListItem = ListView1.ListItems.Add(, "doc1", "Report.docx", "doc")
item.SubItems(1) = "Word document"
item.SubItems(2) = "24 KB"
item.Bold = True
item.ForeColor = vbBlue
```

Properties
----------

### BackColor

The background color used to render this row. **OLE_COLOR**. Default: `-1` (transparent --- defer to [**ListView.BackColor**](#backcolor)).

### Bold

Whether the row is rendered in a bold font. **Boolean**. Default: **False**.

### Checked

Whether the row's checkbox is checked. **Boolean**. Only meaningful when [**ListView.CheckBoxes**](/en/official/Reference/WinNativeCommonCtls/ListView#checkboxes) is **True**.

### EnsureVisible

Scrolls the listview so this row is visible. Available as a method (not a property --- listed in the methods section below).

### ForeColor

The text color used to render this row. **OLE_COLOR**. Default: **vbWindowText**.

### Ghosted

Whether the row is rendered as ghosted / cut (typically half-transparent). **Boolean**. The visual mirrors the Win32 `LVIS_CUT` state.

### Height

The pixel height of the row's selection rectangle. **Single**, read-only.

### Icon

The large icon for the row in [**lvwIcon**](/en/official/Reference/WinNativeCommonCtls/ListView#listviewconstants) view. **Variant** --- either a 1-based **Long** index into [**ListView.Icons**](/en/official/Reference/WinNativeCommonCtls/ListView#icons), or a **String** key. Assignment validates against the bound image list and raises run-time error 35601 (*"Element not found"*) for an unknown key, 35600 (*"Index out of bounds"*) for an out-of-range index, or 35613 (*"ImageList must be initialized before it can be used"*) if no image list is bound.

### Index

The 1-based position of the row in the parent collection. **Long**, read-only. Attempting to assign raises run-time error 383.

### Key

The string key the row was added under. **String**, read/write. Re-assignment moves the row inside the collection's internal index, preserving its position.

### Left

The row's horizontal pixel position inside the listview. **Single**, read/write. Useful in [**lvwIcon**](/en/official/Reference/WinNativeCommonCtls/ListView#listviewconstants) view for repositioning items.

### Selected

Whether the row is selected. **Boolean**, read/write. Setting **Selected = True** also sets the focused state.

### SmallIcon

The small icon for the row in non-icon views. **Variant** --- either an index or a key into [**ListView.SmallIcons**](/en/official/Reference/WinNativeCommonCtls/ListView#smallicons). Same validation as [**Icon**](#icon).

### SubItems(Index)

The sub-item text at the given 1-based column index in [**lvwReport**](/en/official/Reference/WinNativeCommonCtls/ListView#listviewconstants) view. **String**, read/write. The main text is accessed through [**Text**](#text); **SubItems**(1) is the second column, **SubItems**(2) is the third, and so on. Index `0` is rejected with run-time error 380.

Syntax: *object*.**SubItems**( *Index* ) [ **=** *value* ]

### Tag

Arbitrary data the application can attach to the row. **Variant**.

### Text

The row's main label text. **String**, read/write. The default member. Maps to the listview item's column-0 text.

### ToolTipText

A tooltip string shown when the user hovers over this row. **String**. Exposed through the listview's `LVS_EX_INFOTIP` extended style.

### Top

The row's vertical pixel position inside the listview. **Single**, read/write.

### Width

The pixel width of the row's selection rectangle. **Single**, read-only.

Methods
-------

### CreateDragImage

::: info
**CreateDragImage** is tagged `[Unimplemented]` in the current source. Calling it has no useful effect --- the body is empty.
:::

### EnsureVisible

Scrolls the listview so this row is visible.

Syntax: *object*.**EnsureVisible**

## See Also

- [ListView](/en/official/Reference/WinNativeCommonCtls/ListView) -- the parent control
- [ListItems](/en/official/Reference/WinNativeCommonCtls/ListView/ListItems) -- the collection holding **ListItem** instances
- [ColumnHeader](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader) -- a column header (defines what [**SubItems**](#subitemsindex) align to)
