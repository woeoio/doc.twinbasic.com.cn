---
title: TreeSortTypeConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants
---

# TreeSortTypeConstants
The string comparison enumeration used by [**TreeView.SortType**](/official/Reference/WinNativeCommonCtls/TreeView/#sorttype) and [**Node.SortType**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sorttype). Selects between case-sensitive and case-insensitive sorting.

| Member             | Value | Description                                                                         |
|--------------------|-------|-------------------------------------------------------------------------------------|
| **tvwBinary** | 0 | Case-sensitive comparison; uses `lstrcmpW` (binary Unicode order). |
| **tvwText**     | 1 | Case-insensitive comparison; uses `lstrcmpiW`.                       |

## See Also

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) -- consumer
- [Node](/official/Reference/WinNativeCommonCtls/TreeView/Node) -- consumer (per-subtree sorting)
- [TreeSortOrderConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) -- the companion enum selecting ascending / descending
