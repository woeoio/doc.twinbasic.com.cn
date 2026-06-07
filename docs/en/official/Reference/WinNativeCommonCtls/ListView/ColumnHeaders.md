---
title: ColumnHeaders
parent: ListView
permalink: /tB/Packages/WinNativeCommonCtls/ListView/ColumnHeaders
---

# ColumnHeaders class
The **ColumnHeaders** collection is the entry point for managing the columns of a [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView/) in **lvwReport** view. Accessed as `<listView>.ColumnHeaders`; supports adding, removing, indexed access, and `For Each` iteration.

The class is tagged `[COMCreatable(False)]` --- user code accesses **ColumnHeaders** through the parent [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView/) control's [**ColumnHeaders**](/en/official/Reference/WinNativeCommonCtls/ListView/#columnheaders) property.

```vb
With ListView1.ColumnHeaders
    .Add , "name", "Name", 150
    .Add , "size", "Size",  80, lvwColumnRight
    .Add , "date", "Date", 100, lvwColumnCenter
End With
```

Properties
----------

### Count

The number of columns in the collection. **Long**, read-only.

### Item

Returns the [**ColumnHeader**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader) at the given index or with the given key. The default member, so `ListView1.ColumnHeaders("name")` works without writing `.Item("name")`.

Syntax: *object*.**Item** ( *Index* ) **As ColumnHeader**

*Index*
: A **Variant** --- either a 1-based **Long** position or a **String** key.

Methods
-------

### Add

Adds a column to the listview.

Syntax: *object*.**Add** ( [ *Index* ] [, *Key* ] [, *Text* ] [, *Width* ] [, *Alignment* ] [, *Icon* ] ) **As ColumnHeader**

*Index*
: *optional* A **Long** giving the 1-based position at which to insert the new column. When omitted, the column is appended.

*Key*
: *optional* A **String** name under which the column can be looked up. Keys must be unique within the collection (otherwise run-time error 35602).

*Text*
: *optional* A **String** giving the column header label.

*Width*
: *optional* A **Variant** giving the column's pixel width. When omitted, defaults to 96 pixels (scaled).

*Alignment*
: *optional* A member of [**ListColumnAlignmentConstants**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#listcolumnalignmentconstants). Default: **lvwColumnLeft**. Attempting to add a non-left-aligned column at position `1` raises run-time error 5.

*Icon*
: *optional* A **Variant** identifying the header icon --- either a 1-based **Long** index into [**ListView.ColumnHeaderIcons**](/en/official/Reference/WinNativeCommonCtls/ListView/#columnheadericons), or a **String** key.

Returns the newly-created [**ColumnHeader**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader).

### Clear

Removes every column from the listview.

Syntax: *object*.**Clear**

### Remove

Removes a column from the listview.

Syntax: *object*.**Remove** ( *Index* )

*Index*
: A **Variant** --- either a 1-based **Long** position or a **String** key.

### _NewEnum

Returns the enumerator used by `For Each col In listView.ColumnHeaders`. Iterates columns in **Index** order.

Syntax: *object*.**_NewEnum** **As stdole.IUnknown**

## See Also

- [ListView](/en/official/Reference/WinNativeCommonCtls/ListView/) -- the parent control
- [ColumnHeader](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader) -- a single column header
- [ListColumnAlignmentConstants](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#listcolumnalignmentconstants) -- the **Alignment** values
