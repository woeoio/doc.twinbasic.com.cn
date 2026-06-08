---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '18702383-c384-4eed-8016-04677dc4983d'
  PropagateID: '18702383-c384-4eed-8016-04677dc4983d'
  ReservedCode1: '363e69bb-0a2b-474e-ad41-09142fb0a3e3'
  ReservedCode2: '363e69bb-0a2b-474e-ad41-09142fb0a3e3'
---

---
title: GetDataByName
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/GetDataByName
---
# GetDataByName

返回先前以名称标识的格式存储在**DataObject**中的值，类型为**Variant**。

语法：*object*.**GetDataByName(** *Format* **)**

*object*
: *必需* 求值为**DataObject**的对象表达式。

*Format*
: *必需* 给出要读回格式名称的**String**——通常是自定义剪贴板格式通过`RegisterClipboardFormat`注册的名称。如果**DataObject**不包含*Format*的数据，结果为**Empty**；当格式可能不存在时，请先使用[**GetFormatByName**](/official/Reference/VBRUN/DataObject/GetFormatByName)检查。

::: info
**GetDataByName**是twinBASIC新增功能；VB6中没有对应功能。当消费端只知道格式的注册名称而没有相应的数字标识符时使用。对于标准内置格式，使用带**ClipboardConstants**值的[**GetData**](/official/Reference/VBRUN/DataObject/GetData)更直接。
:::

### 示例

```vb
If Data.GetFormatByName("HTML Format") Then
    Dim Html As String
    Html = Data.GetDataByName("HTML Format")
End If
```

### 另见

- [GetData](/official/Reference/VBRUN/DataObject/GetData) 方法
- [GetFormatByName](/official/Reference/VBRUN/DataObject/GetFormatByName) 方法
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) 方法