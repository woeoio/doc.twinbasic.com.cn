---
title: TreeLineStyleConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9658f106-3eab-4e88-aac5-d26397d502c1'
  PropagateID: '9658f106-3eab-4e88-aac5-d26397d502c1'
  ReservedCode1: '8a0d5a90-a929-4d77-bef6-214ff221690b'
  ReservedCode2: '8a0d5a90-a929-4d77-bef6-214ff221690b'
---

# TreeLineStyleConstants
控制 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 是从根节点还是仅从子节点绘制树线。由 [**TreeView.LineStyle**](/official/Reference/WinNativeCommonCtls/TreeView/#linestyle) 使用。仅当 [**Style**](/official/Reference/WinNativeCommonCtls/TreeView/#style) 为 **tvwTreelines…** 变体之一时才有可见效果。

| 成员                | 值 | 描述                                                                |
|-----------------------|-------|----------------------------------------------------------------------------|
| **tvwTreeLines** | 0 | 树线将子节点连接到其父节点，但不连接根级同级节点。 |
| **tvwRootLines** | 1 | 树线不仅连接子节点，还将根级节点彼此连接。 |

## 另见

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) —— 使用者
- [TreeStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) —— 控制树线是否出现