---
title: ColumnHeader
parent: ListView
permalink: /tB/Packages/WinNativeCommonCtls/ListView/ColumnHeader
---

# ColumnHeader class
A **ColumnHeader** represents a single column in a [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView) running in **lvwReport** view. Returned from [**ColumnHeaders.Add**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders#add) and from [**ColumnHeaders.Item**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders#item).

The class is tagged `[COMCreatable(False)]` --- user code accesses **ColumnHeader** instances through the parent [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView)'s [**ColumnHeaders**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) collection.

```vb
With ListView1.ColumnHeaders
    .Add , "name", "Name", 150
    .Add , "size", "Size",  80, lvwColumnRight
    .Add , "date", "Date", 100, lvwColumnCenter
End With
```

Properties
----------

### Alignment

The horizontal alignment of the column's text. A member of [**ListColumnAlignmentConstants**](#listcolumnalignmentconstants). Default: **lvwColumnLeft**.

::: info
The first column in a ListView must be left-aligned. Attempting to add a non-left-aligned column at position 1 raises run-time error 5.
:::

### Icon

The icon rendered in the header. **Variant** --- either a 1-based **Long** index into [**ListView.ColumnHeaderIcons**](/en/official/Reference/WinNativeCommonCtls/ListView#columnheadericons), or a **String** key. Assignment validates against the bound image list.

### Index

The 1-based position of the column in the parent collection. **Long**, read-only. Attempting to assign raises run-time error 383.

### Key

The string key the column was added under. **String**, read/write.

### Left

The column's horizontal pixel position in the listview, computed as the sum of preceding columns' widths. **Single**, read-only.

### Position

The column's visual position. **Long**, read/write. Distinct from [**Index**](#index) --- when [**ListView.AllowColumnReorder**](/en/official/Reference/WinNativeCommonCtls/ListView#allowcolumnreorder) is **True**, the user can drag columns to reorder them, in which case **Index** stays fixed but **Position** changes.

Assigning a value outside `1..Count` raises run-time error 380.

### SubItemIndex

The 0-based sub-item index this column displays. **Long**, read-only. Maps the column to a [**ListItem.SubItems**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem#subitemsindex)(*index*) value. Returns `0` for the first column (which shows [**ListItem.Text**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem#text)).

### Tag

Arbitrary data the application can attach to the column. **Variant**.

### Text

The column header text. **String**, read/write. The default member.

### Width

The column's pixel width. **Single**, read/write.

## ListColumnAlignmentConstants

Determines the horizontal alignment of a column's text. Declared on the **ColumnHeader** class.

| Member                    | Value | Description       |
|---------------------------|-------|-------------------|
| **lvwColumnLeft**     | 0 | Left-aligned text.   |
| **lvwColumnRight**   | 1 | Right-aligned text.  |
| **lvwColumnCenter** | 2 | Centered text.       |

## See Also

- [ListView](/en/official/Reference/WinNativeCommonCtls/ListView) -- the parent control
- [ColumnHeaders](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) -- the collection holding **ColumnHeader** instances
- [ListItem](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem) -- a row, whose [**SubItems**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem#subitemsindex) align with columns
