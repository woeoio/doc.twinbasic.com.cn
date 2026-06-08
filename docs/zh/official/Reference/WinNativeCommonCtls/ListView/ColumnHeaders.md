---
title: ColumnHeaders
parent: ListView
permalink: /tB/Packages/WinNativeCommonCtls/ListView/ColumnHeaders
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd3f01eeb-24c3-42cc-a725-b62802188694'
  PropagateID: 'd3f01eeb-24c3-42cc-a725-b62802188694'
  ReservedCode1: '184d38f0-05bd-4f0f-a971-6cd91cbc17ae'
  ReservedCode2: '184d38f0-05bd-4f0f-a971-6cd91cbc17ae'
---

# ColumnHeaders 类
**ColumnHeaders** 集合是管理 **lvwReport** 视图中 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 列的入口。通过 `<listView>.ColumnHeaders` 访问；支持添加、删除、索引访问和 `For Each` 迭代。

该类标记为 `[COMCreatable(False)]` —— 用户代码通过父级 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 控件的 [**ColumnHeaders**](/official/Reference/WinNativeCommonCtls/ListView/#columnheaders) 属性访问 **ColumnHeaders**。

```vb
With ListView1.ColumnHeaders
    .Add , "name", "Name", 150
    .Add , "size", "Size",  80, lvwColumnRight
    .Add , "date", "Date", 100, lvwColumnCenter
End With
```

属性
----------

### Count

集合中的列数。**Long**，只读。

### Item

返回给定索引或给定键对应的 [**ColumnHeader**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader)。这是默认成员，因此 `ListView1.ColumnHeaders("name")` 无需写 `.Item("name")` 即可工作。

语法：*对象*.**Item** ( *Index* ) **As ColumnHeader**

*Index*
: **Variant** —— 可以是从1开始的 **Long** 位置或 **String** 键。

方法
------

### Add

向列表视图添加一列。

语法：*对象*.**Add** ( [ *Index* ] [, *Key* ] [, *Text* ] [, *Width* ] [, *Alignment* ] [, *Icon* ] ) **As ColumnHeader**

*Index*
: *可选* **Long**，指定插入新列的从1开始的位置。省略时，列被追加到末尾。

*Key*
: *可选* **String**，用于查找列的名称。键在集合内必须唯一（否则将引发运行时错误35602）。

*Text*
: *可选* **String**，指定列标题标签。

*Width*
: *可选* **Variant**，指定列的像素宽度。省略时默认为96像素（经过缩放）。

*Alignment*
: *可选* [**ListColumnAlignmentConstants**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#listcolumnalignmentconstants) 的成员。默认：**lvwColumnLeft**。尝试在位置 `1` 添加非左对齐的列将引发运行时错误5。

*Icon*
: *可选* **Variant**，标识标题图标 —— 可以是 [**ListView.ColumnHeaderIcons**](/official/Reference/WinNativeCommonCtls/ListView/#columnheadericons) 中从1开始的 **Long** 索引，或 **String** 键。

返回新创建的 [**ColumnHeader**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader)。

### Clear

从列表视图中移除所有列。

语法：*对象*.**Clear**

### Remove

从列表视图中移除一列。

语法：*对象*.**Remove** ( *Index* )

*Index*
: **Variant** —— 可以是从1开始的 **Long** 位置或 **String** 键。

### _NewEnum

返回 `For Each col In listView.ColumnHeaders` 使用的枚举器。按 **Index** 顺序迭代列。

语法：*对象*.**_NewEnum** **As stdole.IUnknown**

## 另见

- [ListView](/official/Reference/WinNativeCommonCtls/ListView/) —— 父控件
- [ColumnHeader](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader) —— 单个列标题
- [ListColumnAlignmentConstants](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#listcolumnalignmentconstants) —— **Alignment** 取值