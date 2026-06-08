---
title: ListItems
parent: ListView
permalink: /tB/Packages/WinNativeCommonCtls/ListView/ListItems
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '31860e35-6eb9-4a0a-9f02-8e3ca22d5246'
  PropagateID: '31860e35-6eb9-4a0a-9f02-8e3ca22d5246'
  ReservedCode1: 'b4a1ee64-fb20-4d0f-aba3-4f477fe8656d'
  ReservedCode2: 'b4a1ee64-fb20-4d0f-aba3-4f477fe8656d'
---

# ListItems 类

**ListItems** 集合是管理 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 行的入口。通过 `<listView>.ListItems` 访问；支持添加、删除、索引访问和 `For Each` 迭代。

该类标记为 `[COMCreatable(False)]` --- 用户代码通过父级 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 控件的 [**ListItems**](/official/Reference/WinNativeCommonCtls/ListView/#listitems) 属性访问 **ListItems**。

```vb
With ListView1.ListItems
    .Add , "doc1", "Report.docx"
    .Add , "doc2", "Budget.xlsx"
    .Add , "doc3", "Photos.zip"
    Debug.Print .Count    ' 3
End With

Dim item As ListItem
For Each item In ListView1.ListItems
    Debug.Print item.Index, item.Key, item.Text
Next
```

属性
----------

### Count

集合中的行数。**Long**，只读。

### Item

返回给定索引或键的 [**ListItem**](/official/Reference/WinNativeCommonCtls/ListView/ListItem)。默认成员，因此 `ListView1.ListItems("doc1")` 无须写 `.Item("doc1")`。

语法：*object*.**Item**（*Index*）**As ListItem**

*Index*
: 一个 **Variant** --- 可以是基于1的 **Long** 位置或 **String** 键。

方法
-------

### Add

向列表视图添加一行。

语法：*object*.**Add**（[*Index*] [, *Key*] [, *Text*] [, *Icon*] [, *SmallIcon*]）**As ListItem**

*Index*
: *可选* 给出插入新行基于1位置的 **Long**。省略时，行追加到末尾。超出范围的值引发运行时错误 35600。

*Key*
: *可选* 可用于查找行的 **String** 名称。省略时，行没有键。键在集合内必须唯一（否则运行时错误 35602）。

*Text*
: *可选* 给出行的主标签的 **String**。

*Icon*
: *可选* 标识行大图标的 **Variant** --- 可以是基于1的 **Long** 索引指向 [**ListView.Icons**](/official/Reference/WinNativeCommonCtls/ListView/#icons)，或 **String** 键。对照绑定图像列表验证。

*SmallIcon*
: *可选* 标识行小图标的 **Variant**，对照 [**ListView.SmallIcons**](/official/Reference/WinNativeCommonCtls/ListView/#smallicons)。

返回新创建的 [**ListItem**](/official/Reference/WinNativeCommonCtls/ListView/ListItem)。

### Clear

从列表视图中移除所有行。

语法：*object*.**Clear**

### Remove

从列表视图中移除一行。剩余行的 [**Index**](/official/Reference/WinNativeCommonCtls/ListView/ListItem#index) 值会重新编号。

语法：*object*.**Remove**（*Index*）

*Index*
: 一个 **Variant** --- 可以是基于1的 **Long** 位置或 **String** 键。

### _NewEnum

返回 `For Each item In listView.ListItems` 使用的枚举器。按 **Index** 顺序迭代行。

语法：*object*.**_NewEnum** **As stdole.IUnknown**

## 另见

- [ListView](/official/Reference/WinNativeCommonCtls/ListView/) --- 父控件
- [ListItem](/official/Reference/WinNativeCommonCtls/ListView/ListItem) --- 集合中的一行