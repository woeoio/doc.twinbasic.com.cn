---
title: ColumnHeader
parent: ListView
permalink: /tB/Packages/WinNativeCommonCtls/ListView/ColumnHeader
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '296645be-63ff-4186-975f-23ded6e4a9c1'
  PropagateID: '296645be-63ff-4186-975f-23ded6e4a9c1'
  ReservedCode1: '5049dba1-4387-4e19-a2ec-e580f2c3c06c'
  ReservedCode2: '5049dba1-4387-4e19-a2ec-e580f2c3c06c'
---

# ColumnHeader 类

**ColumnHeader** 表示在 **lvwReport** 视图中运行的 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 中的单个列。从 [**ColumnHeaders.Add**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders#add) 和 [**ColumnHeaders.Item**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders#item) 返回。

该类标记为 `[COMCreatable(False)]` --- 用户代码通过父级 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 的 [**ColumnHeaders**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) 集合访问 **ColumnHeader** 实例。

```vb
With ListView1.ColumnHeaders
    .Add , "name", "Name", 150
    .Add , "size", "Size",  80, lvwColumnRight
    .Add , "date", "Date", 100, lvwColumnCenter
End With
```

属性
----------

### Alignment

列文本的水平对齐方式。[**ListColumnAlignmentConstants**](#listcolumnalignmentconstants) 的成员。默认：**lvwColumnLeft**。

::: info
ListView 中的第一列必须左对齐。尝试在位置1添加非左对齐的列会引发运行时错误 5。
:::

### Icon

在标题中渲染的图标。**Variant** --- 可以是基于1的 **Long** 索引指向 [**ListView.ColumnHeaderIcons**](/official/Reference/WinNativeCommonCtls/ListView/#columnheadericons)，或 **String** 键。赋值对照绑定图像列表验证。

### Index

此列在父集合中基于1的位置。**Long**，只读。尝试赋值引发运行时错误 383。

### Key

此列添加时的字符串键。**String**，读/写。

### Left

列在列表视图中的水平像素位置，计算为前面列宽度之和。**Single**，只读。

### Position

列的视觉位置。**Long**，读/写。与 [**Index**](#index) 不同 --- 当 [**ListView.AllowColumnReorder**](/official/Reference/WinNativeCommonCtls/ListView/#allowcolumnreorder) 为 **True** 时，用户可拖动列重新排序，此时 **Index** 保持不变但 **Position** 改变。

赋值超出 `1..Count` 范围引发运行时错误 380。

### SubItemIndex

此列显示的基于0的子项索引。**Long**，只读。将列映射到 [**ListItem.SubItems**](/official/Reference/WinNativeCommonCtls/ListView/ListItem#subitemsindex)(*index*) 值。第一列返回 `0`（显示 [**ListItem.Text**](/official/Reference/WinNativeCommonCtls/ListView/ListItem#text)）。

### Tag

应用程序可附加到此列的任意数据。**Variant**。

### Text

列标题文本。**String**，读/写。默认成员。

### Width

列的像素宽度。**Single**，读/写。

## ListColumnAlignmentConstants

确定列文本的水平对齐方式。在 **ColumnHeader** 类上声明。

| 成员                    | 值 | 描述       |
|---------------------------|-------|-------------------|
| **lvwColumnLeft**     | 0 | 左对齐文本。   |
| **lvwColumnRight**   | 1 | 右对齐文本。  |
| **lvwColumnCenter** | 2 | 居中文本。       |

## 另见

- [ListView](/official/Reference/WinNativeCommonCtls/ListView/) --- 父控件
- [ColumnHeaders](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) --- 持有 **ColumnHeader** 实例的集合
- [ListItem](/official/Reference/WinNativeCommonCtls/ListView/ListItem) --- 行，其 [**SubItems**](/official/Reference/WinNativeCommonCtls/ListView/ListItem#subitemsindex) 与列对齐