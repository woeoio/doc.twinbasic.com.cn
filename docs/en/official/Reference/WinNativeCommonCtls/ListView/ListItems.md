---
title: ListItems
parent: ListView
permalink: /tB/Packages/WinNativeCommonCtls/ListView/ListItems
---

# ListItems class
The **ListItems** collection is the entry point for managing the rows of a [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView). Accessed as `<listView>.ListItems`; supports adding, removing, indexed access, and `For Each` iteration.

The class is tagged `[COMCreatable(False)]` --- user code accesses **ListItems** through the parent [**ListView**](/en/official/Reference/WinNativeCommonCtls/ListView) control's [**ListItems**](/en/official/Reference/WinNativeCommonCtls/ListView#listitems) property.

```vb
With ListView1.ListItems
    .Add , "doc1", "Report.docx"
    .Add , "doc2", "Budget.xlsx"
    .Add , "doc3", "Photos.zip"
    Debug.Print .Count    ' 3
End With

Dim item As ListItem
For Each item In ListView1.ListItems
    Debug.Print item.Index, item.Key, item.Text
Next
```

Properties
----------

### Count

The number of rows in the collection. **Long**, read-only.

### Item

Returns the [**ListItem**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem) at the given index or with the given key. The default member, so `ListView1.ListItems("doc1")` works without writing `.Item("doc1")`.

Syntax: *object*.**Item** ( *Index* ) **As ListItem**

*Index*
: A **Variant** --- either a 1-based **Long** position or a **String** key.

Methods
-------

### Add

Adds a row to the listview.

Syntax: *object*.**Add** ( [ *Index* ] [, *Key* ] [, *Text* ] [, *Icon* ] [, *SmallIcon* ] ) **As ListItem**

*Index*
: *optional* A **Long** giving the 1-based position at which to insert the new row. When omitted, the row is appended at the end. Out-of-range values raise run-time error 35600.

*Key*
: *optional* A **String** name under which the row can be looked up. When omitted, the row has no key. Keys must be unique within the collection (otherwise run-time error 35602).

*Text*
: *optional* A **String** giving the row's main label.

*Icon*
: *optional* A **Variant** identifying the row's large icon --- either a 1-based **Long** index into [**ListView.Icons**](/en/official/Reference/WinNativeCommonCtls/ListView#icons), or a **String** key. Validated against the bound image list.

*SmallIcon*
: *optional* A **Variant** identifying the row's small icon, against [**ListView.SmallIcons**](/en/official/Reference/WinNativeCommonCtls/ListView#smallicons).

Returns the newly-created [**ListItem**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem).

### Clear

Removes every row from the listview.

Syntax: *object*.**Clear**

### Remove

Removes a row from the listview. The remaining rows' [**Index**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem#index) values are renumbered.

Syntax: *object*.**Remove** ( *Index* )

*Index*
: A **Variant** --- either a 1-based **Long** position or a **String** key.

### _NewEnum

Returns the enumerator used by `For Each item In listView.ListItems`. Iterates rows in **Index** order.

Syntax: *object*.**_NewEnum** **As stdole.IUnknown**

## See Also

- [ListView](/en/official/Reference/WinNativeCommonCtls/ListView) -- the parent control
- [ListItem](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem) -- one row in the collection
