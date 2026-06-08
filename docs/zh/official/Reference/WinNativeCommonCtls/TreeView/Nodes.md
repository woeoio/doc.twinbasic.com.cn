---
title: Nodes
parent: TreeView
permalink: /tB/Packages/WinNativeCommonCtls/TreeView/Nodes
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '054d5fa8-685f-4e26-b2e7-22cff7572196'
  PropagateID: '054d5fa8-685f-4e26-b2e7-22cff7572196'
  ReservedCode1: 'dd8baeaf-43c0-4466-9e91-9adcbd3648b4'
  ReservedCode2: 'dd8baeaf-43c0-4466-9e91-9adcbd3648b4'
---

# Nodes 类

**Nodes** 集合是管理 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 的 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) 树的入口。通过 `<treeView>.Nodes` 访问；支持添加、删除、索引访问和 `For Each` 迭代。

该类标记为 `[COMCreatable(False)]` --- 用户代码通过父级 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 控件的 [**Nodes**](/official/Reference/WinNativeCommonCtls/TreeView/#nodes) 属性访问 **Nodes**。

```vb
With TreeView1.Nodes
    Dim root As Node
    Set root = .Add(, , "root", "My Computer")
    .Add root, tvwChild, "c", "C: drive"
    .Add root, tvwChild, "d", "D: drive"
End With

Dim node As Node
For Each node In TreeView1.Nodes
    Debug.Print node.Index, node.Key, node.FullPath
Next
```

`For Each` 迭代**仅按添加顺序访问节点** --- 而非树序。对于遵循视觉层次的深度优先或广度优先遍历，请从根 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) 开始手动遍历父子链接，使用 [**Node.Child**](/official/Reference/WinNativeCommonCtls/TreeView/Node#child) / [**Node.Next**](/official/Reference/WinNativeCommonCtls/TreeView/Node#next)。

属性
----------

### Count

树视图中的节点总数（根节点加所有后代）。**Long**，只读。

### Item

返回给定索引或键的 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node)。默认成员，因此 `TreeView1.Nodes("root")` 无须写 `.Item("root")`。

语法：*object*.**Item**（*Index*）**As Node**

*Index*
: 一个 **Variant** --- 可以是基于1的 **Long** 位置或 **String** 键。

方法
-------

### Add

向树视图添加一个节点，可选相对于另一个节点定位。

语法：*object*.**Add**（[*Relative*] [, *Relationship*] [, *Key*] [, *Text*] [, *Image*] [, *SelectedImage*]）**As Node**

*Relative*
: *可选* 标识新节点定位所依据的现有节点的 **Variant** --- 可以是 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) 引用、基于1的 **Long** 索引或 **String** 键。省略时，新节点按 *Relationship* = **tvwNext** 语义在根级插入。

*Relationship*
: *可选* [**TreeRelationshipConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) 的成员，描述新节点相对于 *Relative* 的位置。默认：**tvwNext**。

*Key*
: *可选* 一个 **String** 名称，可通过其查找节点。键在 **Nodes** 集合中必须唯一（否则运行时错误 35602）。

*Text*
: *可选* 一个给出节点标签的 **String**。

*Image*
: *可选* 标识未选中状态图标的 **Variant** --- 可以是基于1的 **Long** 索引指向 [**TreeView.ImageList**](/official/Reference/WinNativeCommonCtls/TreeView/#imagelist) 或 **String** 键。

*SelectedImage*
: *可选* 标识选中状态图标的 **Variant**。未设置时默认与 *Image* 相同。

返回新创建的 [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node)。

### Clear

从树视图中移除所有节点，包括所有后代。

语法：*object*.**Clear**

### Remove

从树视图中移除一个节点及其所有后代。剩余节点的 [**Index**](/official/Reference/WinNativeCommonCtls/TreeView/Node#index) 值会重新计算。

语法：*object*.**Remove**（*Index*）

*Index*
: 一个 **Variant** --- 可以是基于1的 **Long** 位置或 **String** 键。

### _NewEnum

返回 `For Each node In treeView.Nodes` 使用的枚举器。按 **Index** 顺序（添加顺序）迭代节点，而非树遍历顺序。

语法：*object*.**_NewEnum** **As stdole.IUnknown**

## 另见

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) --- 父控件
- [Node](/official/Reference/WinNativeCommonCtls/TreeView/Node) --- 集合中的一个节点
- [TreeRelationshipConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) --- [**Add**](#add) 的 *Relationship* 值