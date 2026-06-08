---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8f8a8cc7-87d0-4b66-9c98-aaab9789dcd5'
  PropagateID: '8f8a8cc7-87d0-4b66-9c98-aaab9789dcd5'
  ReservedCode1: 'd3f9415f-c7fa-4fd8-b0e4-0cbbd453f9f9'
  ReservedCode2: 'd3f9415f-c7fa-4fd8-b0e4-0cbbd453f9f9'
---

---
title: DataObject
parent: VBRUN Package
nav_order: 12
permalink: /tB/Packages/VBRUN/DataObject/
---

# DataObject 类

**DataObject**是一个容器，以一个或多个剪贴板格式保存一条信息——同一有效负载表示为纯文本、Unicode文本、RTF、位图、文件路径列表等。运行时将**DataObject**传递给剪贴板和OLE拖放操作：源端使用[**SetData**](/official/Reference/VBRUN/DataObject/SetData)填充数据，目标端使用[**GetFormat**](/official/Reference/VBRUN/DataObject/GetFormat)（或[**AvailableFormats**](/official/Reference/VBRUN/DataObject/AvailableFormats)）检查可用格式，并使用[**GetData**](/official/Reference/VBRUN/DataObject/GetData)提取字节。

新的**DataObject**使用**New**创建，初始为空。

## 存储和检索数据

[**SetData**](/official/Reference/VBRUN/DataObject/SetData)将值以给定剪贴板格式放入**DataObject**——通常为**ClipboardConstants**枚举中的值，如bCFText、bCFUnicodeText或bCFBitmap**。单个对象可以同时以多种格式保存相同的逻辑有效负载，使有不同需求的消费者都能找到其理解的表示。

``vb
Dim Data As New DataObject
Data.SetData "Hello, world!", vbCFText
Data.SetData StrConv("Hello, world!", vbUnicode), vbCFUnicodeText
``

[**GetData**](/official/Reference/VBRUN/DataObject/GetData)以选定格式取回值。[**Clear**](/official/Reference/VBRUN/DataObject/Clear)一次性移除所有格式和值——在重用单个**DataObject**进行多次操作时很有用。

twinBASIC还接受纯字符串作为格式名称：[**GetDataByName**](/official/Reference/VBRUN/DataObject/GetDataByName)是[**GetData**](/official/Reference/VBRUN/DataObject/GetData)的字符串键对应版本，适用于数字标识符未预先知道的自定义或注册格式。

## 发现可用内容

未自行放置数据的消费者通常不知道存在哪些格式。[**GetFormat**](/official/Reference/VBRUN/DataObject/GetFormat)在给定剪贴板格式可用时返回**True**，[**GetFormatByName**](/official/Reference/VBRUN/DataObject/GetFormatByName)对命名的格式执行相同操作。要发现完整集合，[**AvailableFormats**](/official/Reference/VBRUN/DataObject/AvailableFormats)返回[**DataObjectFormats**](/official/Reference/VBRUN/DataObject/DataObjectFormats)集合，包含[**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat)描述符——每个描述符具有Name、来自**ClipboardConstants**的FormatType以及格式存储方式的信息。

``vb
Dim F As DataObjectFormat
For Each F In Data.AvailableFormats
    Debug.Print F.Name, F.FormatType
Next F
``

::: info
[**AvailableFormats**](/official/Reference/VBRUN/DataObject/AvailableFormats)、[**GetFormatByName**](/official/Reference/VBRUN/DataObject/GetFormatByName)和[**GetDataByName**](/official/Reference/VBRUN/DataObject/GetDataByName)是twinBASIC新增功能；VB6中没有对应功能。
:::

## 文件

当**DataObject**包含文件路径列表时——例如Windows Shell拖放的有效负载——[**Files**](/official/Reference/VBRUN/DataObject/Files)返回[**DataObjectFiles**](/official/Reference/VBRUN/DataObject/DataObjectFiles)集合，以**String**形式保存每个路径。

``vb
Dim Path As Variant
For Each Path In Data.Files
    Debug.Print Path
Next Path
``

## 成员

- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) -- 返回**DataObject**中当前保存的格式集合 *(twinBASIC扩展)*
- [Clear](/official/Reference/VBRUN/DataObject/Clear) -- 从**DataObject**中移除所有格式和值
- [Files](/official/Reference/VBRUN/DataObject/Files) -- 返回**DataObject**中保存的文件路径集合
- [GetData](/official/Reference/VBRUN/DataObject/GetData) -- 返回以给定剪贴板格式存储的值
- [GetDataByName](/official/Reference/VBRUN/DataObject/GetDataByName) -- 返回以给定命名格式存储的值 *(twinBASIC扩展)*
- [GetFormat](/official/Reference/VBRUN/DataObject/GetFormat) -- 返回**DataObject**是否保存给定剪贴板格式的值
- [GetFormatByName](/official/Reference/VBRUN/DataObject/GetFormatByName) -- 返回**DataObject**是否保存给定命名格式的值 *(twinBASIC扩展)*
- [SetData](/official/Reference/VBRUN/DataObject/SetData) -- 以给定剪贴板格式在**DataObject**中存储值