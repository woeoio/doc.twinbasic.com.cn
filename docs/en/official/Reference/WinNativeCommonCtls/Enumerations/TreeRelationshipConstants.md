---
title: TreeRelationshipConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants
---

# TreeRelationshipConstants
Describes where a new node is inserted relative to an existing node. Passed as the *Relationship* parameter of [**Nodes.Add**](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add).

| Member               | Value | Description                                                                              |
|----------------------|-------|------------------------------------------------------------------------------------------|
| **tvwFirst**       | 0 | The new node becomes the first sibling of *Relative*'s parent --- i.e. the leftmost peer.    |
| **tvwLast**         | 1 | The new node becomes the last sibling of *Relative*'s parent --- i.e. the rightmost peer.    |
| **tvwNext**         | 2 | The new node is inserted immediately after *Relative*, as its next sibling.               |
| **tvwPrevious** | 3 | The new node is inserted immediately before *Relative*, as its previous sibling.          |
| **tvwChild**       | 4 | The new node becomes a child of *Relative*.                                               |

## See Also

- [TreeView](/en/official/Reference/WinNativeCommonCtls/TreeView/) -- consumer
- [Nodes.Add](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add) -- the consuming method
