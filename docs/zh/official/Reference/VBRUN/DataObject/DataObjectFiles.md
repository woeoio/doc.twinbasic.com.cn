---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '323cec4d-0423-4f7a-88ba-e65e7f2d515e'
  PropagateID: '323cec4d-0423-4f7a-88ba-e65e7f2d515e'
  ReservedCode1: 'eecf9286-8102-4fd8-b4b7-543c617cd9a7'
  ReservedCode2: 'eecf9286-8102-4fd8-b4b7-543c617cd9a7'
---

---
title: DataObjectFiles
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/DataObjectFiles
---
# DataObjectFiles

**DataObjectFiles**对象是[**DataObject**](/official/Reference/VBRUN/DataObject/)保存的文件路径集合——通常是Windows Shell拖放的有效负载，以`vbCFFiles`剪贴板格式到达。每个元素是以**String**保存的完全限定路径。此集合可通过父**DataObject**的[**Files**](/official/Reference/VBRUN/DataObject/Files)属性获取。

此集合是可变的：拖放或剪贴板操作的源端可以使用[**Add**](#add)构建列表，目标端使用[**Item**](#item)或**For Each**迭代读回列表。

## 成员

### Add

向集合追加文件路径。

语法：*object*.**Add** *Filename* [ **,** *Index* ]

*object*
: *必需* 求值为**DataObjectFiles**对象的对象表达式。

*Filename*
: *必需* 给出要添加文件完全限定路径的**String**。

*Index*
: *可选* 标识现有条目的**Variant**。提供时，新路径插入到该条目之前；如果为数值，*Index*是`1`到[**Count**](#count)之间从一开始的位置。省略时，路径追加到末尾。

### Clear

从集合中移除所有条目。

语法：*object*.**Clear**

*object*
: *必需* 求值为**DataObjectFiles**对象的对象表达式。

调用**Clear**后，[**Count**](#count)为`0`。

### Count

返回集合中的路径数量。

语法：*object*.**Count**

*object*
: *必需* 求值为**DataObjectFiles**对象的对象表达式。

值为**Long**。[**Item**](#item)的有效索引范围从`1`到**Count**。

### Item

按从一开始的位置从集合中返回一个路径，类型为**String**。

语法：*object*.**Item(** *Index* **)**

*object*
: *必需* 求值为**DataObjectFiles**对象的对象表达式。

*Index*
: *必需* 给出要返回路径从一开始位置的**Long**。必须在`1`和[**Count**](#count)之间；否则将发生错误。

**Item**是**DataObjectFiles**的默认成员，因此以下两行等效：

```vb
path = Data.Files.Item(1)
path = Data.Files(1)
```

### Remove

从集合中移除单个条目。

语法：*object*.**Remove** *Index*

*object*
: *必需* 求值为**DataObjectFiles**对象的对象表达式。

*Index*
: *必需* 标识要移除条目的**Variant**。数值被视为`1`到[**Count**](#count)之间从一开始的位置；字符串与存储的路径匹配。如果没有匹配的条目，将发生错误。

### For Each 迭代

**DataObjectFiles**对象可以使用[**For Each...Next**](/official/Reference/Core/For-Each-Next)语句进行迭代，按插入顺序依次产生每个路径。隐藏的`_NewEnum`成员提供枚举器，不从用户代码直接调用。

```vb
Dim Path As Variant
For Each Path In Data.Files
    Debug.Print Path
Next Path
```

### 示例

此示例迭代从Shell拖放接收的**DataObjectFiles**集合中的文件路径。

```vb
Private Sub Form1_OLEDragDrop(Data As DataObject, Effect As Long, _
                               Button As Integer, Shift As Integer, _
                               X As Single, Y As Single)
    Dim path As Variant
    For Each path In Data.Files
        Debug.Print path
    Next path
End Sub
```

## 另见

- [DataObject](/official/Reference/VBRUN/DataObject/)
- [Files](/official/Reference/VBRUN/DataObject/Files) 属性