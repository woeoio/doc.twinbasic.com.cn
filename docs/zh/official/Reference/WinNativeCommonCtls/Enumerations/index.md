---
title: Enumerations
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/
nav_order: 99
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '703dfdc8-f80f-468c-acbc-29bb22056d5e'
  PropagateID: '703dfdc8-f80f-468c-acbc-29bb22056d5e'
  ReservedCode1: '6b99461d-f0f6-4e32-b42a-0faf5a5a074f'
  ReservedCode2: '6b99461d-f0f6-4e32-b42a-0faf5a5a074f'
---

# WinNativeCommonCtls 枚举
包的共享模块中声明并暴露给用户代码的十个模块级枚举。每个枚举都可以从引用该包的任何项目中访问。

每控件嵌套枚举（在 `<Name>BaseCtl` 类*内部*声明的 —— `ListViewConstants`、`ListArrangeConstants`、`ListLabelEditConstants`、`ListTextBackgroundConstants`、`ListColumnAlignmentConstants`、`PrbOrientation`、`PrbScrolling`、`PrbState`、`TickStyleConstants`、`TextPositionConstants`、`ImageListColorDepth`）记录在声明它们的控件页面上，而非此文件夹下。

## DTPicker

- [DTPickerFormatConstants](/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) —— [**DTPicker.Format**](/official/Reference/WinNativeCommonCtls/DTPicker#format) 的取值

## ImageList

- [ImlDrawConstants](/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) —— [**ListImage.Draw**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage#draw) 的 *Style* 标志

## 共享（Slider、UpDown）

- [OrientationConstants](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) —— [**Slider.Orientation**](/official/Reference/WinNativeCommonCtls/Slider#orientation) 和 [**UpDown.Orientation**](/official/Reference/WinNativeCommonCtls/UpDown#orientation) 使用的水平/垂直枚举

## TreeView（及 ListView via TreeBorderStyleConstants）

- [TreeBorderStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) —— [**TreeView.BorderStyle**](/official/Reference/WinNativeCommonCtls/TreeView/#borderstyle) 和 [**ListView.BorderStyle**](/official/Reference/WinNativeCommonCtls/ListView/#borderstyle) 的取值
- [TreeLabelEditConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants) —— [**TreeView.LabelEdit**](/official/Reference/WinNativeCommonCtls/TreeView/#labeledit) 的取值
- [TreeLineStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) —— [**TreeView.LineStyle**](/official/Reference/WinNativeCommonCtls/TreeView/#linestyle) 的取值
- [TreeRelationshipConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) —— [**Nodes.Add**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add) 的 *Relationship* 取值
- [TreeSortOrderConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) —— [**TreeView.SortOrder**](/official/Reference/WinNativeCommonCtls/TreeView/#sortorder) 和 [**Node.SortOrder**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sortorder) 的取值
- [TreeSortTypeConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) —— [**TreeView.SortType**](/official/Reference/WinNativeCommonCtls/TreeView/#sorttype) 和 [**Node.SortType**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sorttype) 的取值
- [TreeStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) —— [**TreeView.Style**](/official/Reference/WinNativeCommonCtls/TreeView/#style) 的取值