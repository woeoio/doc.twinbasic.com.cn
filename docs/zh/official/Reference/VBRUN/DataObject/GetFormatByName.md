---
title: GetFormatByName
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/GetFormatByName
---
# GetFormatByName

返回**DataObject**是否保存以名称标识的格式的值，类型为**Boolean**。

语法：*object*.**GetFormatByName(** *Format* **)**

*object*
: *必需* 求值为**DataObject**的对象表达式。

*Format*
: *必需* 给出要测试格式名称的**String**——通常是自定义剪贴板格式通过`RegisterClipboardFormat`注册的名称。

如果**DataObject**可以在*Format*中产生值，结果为**True**，否则为**False**。当格式可能不存在时，在调用[**GetDataByName**](/official/Reference/VBRUN/DataObject/GetDataByName)之前使用此方法。

::: info
**GetFormatByName**是twinBASIC新增功能；VB6中没有对应功能。对于标准内置格式，使用带**ClipboardConstants**值的[**GetFormat**](/official/Reference/VBRUN/DataObject/GetFormat)更直接。
:::

### 示例

```vb
If Data.GetFormatByName("HTML Format") Then
    Dim Html As String
    Html = Data.GetDataByName("HTML Format")
End If
```

### 另见

- [GetDataByName](/official/Reference/VBRUN/DataObject/GetDataByName) 方法
- [GetFormat](/official/Reference/VBRUN/DataObject/GetFormat) 方法
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) 方法