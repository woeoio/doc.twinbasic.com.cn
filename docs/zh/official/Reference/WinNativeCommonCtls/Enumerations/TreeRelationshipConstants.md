---
title: TreeRelationshipConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd5bf2198-0fb7-4005-b959-137c7a12c553'
  PropagateID: 'd5bf2198-0fb7-4005-b959-137c7a12c553'
  ReservedCode1: '03b10c00-7529-41b9-8c21-79c161bf1c32'
  ReservedCode2: '03b10c00-7529-41b9-8c21-79c161bf1c32'
---

# TreeRelationshipConstants
描述新节点相对于现有节点的插入位置。作为 [**Nodes.Add**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add) 的 *Relationship* 参数传递。

| 成员               | 值 | 描述                                                                              |
|----------------------|-------|------------------------------------------------------------------------------------------|
| **tvwFirst**       | 0 | 新节点成为 *Relative* 父级的第一个同级 —— 即最左边的同级节点。    |
| **tvwLast**         | 1 | 新节点成为 *Relative* 父级的最后一个同级 —— 即最右边的同级节点。    |
| **tvwNext**         | 2 | 新节点紧接在 *Relative* 之后插入，作为其下一个同级节点。               |
| **tvwPrevious** | 3 | 新节点紧接在 *Relative* 之前插入，作为其上一个同级节点。          |
| **tvwChild**       | 4 | 新节点成为 *Relative* 的子节点。                                               |

## 另见

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) —— 使用者
- [Nodes.Add](/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add) —— 使用该枚举的方法