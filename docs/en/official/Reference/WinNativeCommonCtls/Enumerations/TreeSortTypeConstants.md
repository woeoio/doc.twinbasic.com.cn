---
title: TreeSortTypeConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants
---

# TreeSortTypeConstants
The string comparison enumeration used by [**TreeView.SortType**](/en/official/Reference/WinNativeCommonCtls/TreeView#sorttype) and [**Node.SortType**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#sorttype). Selects between case-sensitive and case-insensitive sorting.

| Member             | Value | Description                                                                         |
|--------------------|-------|-------------------------------------------------------------------------------------|
| **tvwBinary** | 0 | Case-sensitive comparison; uses `lstrcmpW` (binary Unicode order). |
| **tvwText**     | 1 | Case-insensitive comparison; uses `lstrcmpiW`.                       |

## See Also

- [TreeView](/en/official/Reference/WinNativeCommonCtls/TreeView) -- consumer
- [Node](/en/official/Reference/WinNativeCommonCtls/TreeView/Node) -- consumer (per-subtree sorting)
- [TreeSortOrderConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) -- the companion enum selecting ascending / descending
