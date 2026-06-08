---
title: GetData
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/GetData
---
# GetData

返回先前以给定剪贴板格式存储在**DataObject**中的值，类型为**Variant**。

语法：*object*.**GetData(** *Format* **)**

*object*
: *必需* 求值为**DataObject**的对象表达式。

*Format*
: *必需* 标识要读回格式的**ClipboardConstants**值——例如`vbCFText`、`vbCFUnicodeText`、`vbCFBitmap`。如果**DataObject**不包含*Format*的数据，结果为**Empty**；当格式可能不存在时，请先使用[**GetFormat**](/official/Reference/VBRUN/DataObject/GetFormat)检查。

返回的**Variant**的具体子类型取决于*Format*：文本格式产生**String**，`vbCFBitmap`产生**stdole.IPictureDisp**，`vbCFFiles`产生路径或路径集合，等等。要按文本格式名称而非数字剪贴板常量提取数据，请使用[**GetDataByName**](/official/Reference/VBRUN/DataObject/GetDataByName)。

### 示例

```vb
If Data.GetFormat(vbCFText) Then
    Dim Text As String
    Text = Data.GetData(vbCFText)
    Debug.Print Text
End If
```

### 另见

- [GetDataByName](/official/Reference/VBRUN/DataObject/GetDataByName) 方法
- [GetFormat](/official/Reference/VBRUN/DataObject/GetFormat) 方法
- [SetData](/official/Reference/VBRUN/DataObject/SetData) 方法
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) 方法