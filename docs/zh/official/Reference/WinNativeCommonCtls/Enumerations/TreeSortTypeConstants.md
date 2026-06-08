---
title: TreeSortTypeConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2a6090b9-acad-40b4-83c9-10197d0a1ae3'
  PropagateID: '2a6090b9-acad-40b4-83c9-10197d0a1ae3'
  ReservedCode1: 'e6b7d3ed-ed79-4eea-a5eb-5f318361ab52'
  ReservedCode2: 'e6b7d3ed-ed79-4eea-a5eb-5f318361ab52'
---

# TreeSortTypeConstants
由 [**TreeView.SortType**](/official/Reference/WinNativeCommonCtls/TreeView/#sorttype) 和 [**Node.SortType**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sorttype) 使用的字符串比较枚举。在区分大小写和不区分大小写的排序之间选择。

| 成员             | 值 | 描述                                                                         |
|--------------------|-------|-------------------------------------------------------------------------------------|
| **tvwBinary** | 0 | 区分大小写的比较；使用 `lstrcmpW`（二进制Unicode顺序）。 |
| **tvwText**     | 1 | 不区分大小写的比较；使用 `lstrcmpiW`。                       |

## 另见

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) —— 使用者
- [Node](/official/Reference/WinNativeCommonCtls/TreeView/Node) —— 使用者（按子树排序）
- [TreeSortOrderConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) —— 选择升序/降序的配套枚举