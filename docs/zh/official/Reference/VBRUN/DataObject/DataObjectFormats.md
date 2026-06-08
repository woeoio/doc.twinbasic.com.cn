---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '599d5636-7c9c-4a44-be47-523f88ae9b73'
  PropagateID: '599d5636-7c9c-4a44-be47-523f88ae9b73'
  ReservedCode1: '77afa370-13cd-458f-b8b6-77e3ea79a851'
  ReservedCode2: '77afa370-13cd-458f-b8b6-77e3ea79a851'
---

---
title: DataObjectFormats
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/DataObjectFormats
---
# DataObjectFormats

**DataObjectFormats**对象是[**DataObject**](/official/Reference/VBRUN/DataObject/)当前公开的[**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat)描述符的只读集合——每个元素对应对象保存值的一种剪贴板格式。此集合由[**AvailableFormats**](/official/Reference/VBRUN/DataObject/AvailableFormats)方法返回，是在运行时发现从其他应用程序接收的**DataObject**提供哪些格式的唯一通用方式。

## 成员

### Count

返回集合中的格式数量。

语法：*object*.**Count**

*object*
: *必需* 求值为**DataObjectFormats**对象的对象表达式。

值为**Long**。[**Item**](#item)的有效索引范围从`1`到**Count**。

### Item

按从一开始的位置从集合中返回单个格式描述符。

语法：*object*.**Item(** *Index* **)**

*object*
: *必需* 求值为**DataObjectFormats**对象的对象表达式。

*Index*
: *必需* 给出要返回描述符从一开始位置的**Long**。必须在`1`和[**Count**](#count)之间；否则将发生错误。

结果为[**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat)。

### For Each 迭代

**DataObjectFormats**对象可以使用[**For Each...Next**](/official/Reference/Core/For-Each-Next)语句进行迭代，依次产生每个[**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat)。隐藏的`_NewEnum`成员提供枚举器，不从用户代码直接调用。

```vb
Dim F As DataObjectFormat
For Each F In Data.AvailableFormats
    Debug.Print F.Name, F.FormatType
Next F
```

### 示例

此示例列出**DataObject**保存的每种格式的名称和格式类型。

```vb
Dim fmt As DataObjectFormat
For Each fmt In Data.AvailableFormats
    Debug.Print fmt.Name & " (" & fmt.FormatType & ")"
Next fmt
```

## 另见

- [DataObject](/official/Reference/VBRUN/DataObject/)
- [DataObjectFormat](/official/Reference/VBRUN/DataObject/DataObjectFormat)
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) 方法