---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f47a9525-a7dc-4317-b500-321c44dde4ad'
  PropagateID: 'f47a9525-a7dc-4317-b500-321c44dde4ad'
  ReservedCode1: '7132d602-6740-4df4-bb98-da90687aeecd'
  ReservedCode2: '7132d602-6740-4df4-bb98-da90687aeecd'
---

---
title: GetFormat
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/GetFormat
---
# GetFormat

返回**DataObject**是否保存给定剪贴板格式的值，类型为**Boolean**。

语法：*object*.**GetFormat(** *Format* **)**

*object*
: *必需* 求值为**DataObject**的对象表达式。

*Format*
: *必需* 标识要测试格式的**ClipboardConstants**值——例如`vbCFText`、`vbCFUnicodeText`、`vbCFBitmap`、`vbCFFiles`。

如果**DataObject**可以在*Format*中产生值，结果为**True**，否则为**False**。当格式可能不存在时，在调用[**GetData**](/official/Reference/VBRUN/DataObject/GetData)之前使用此方法，以免未知格式静默返回**Empty**。

### 示例

```vb
If Data.GetFormat(vbCFFiles) Then
    Dim Path As Variant
    For Each Path In Data.Files
        Debug.Print Path
    Next Path
End If
```

### 另见

- [GetData](/official/Reference/VBRUN/DataObject/GetData) 方法
- [GetFormatByName](/official/Reference/VBRUN/DataObject/GetFormatByName) 方法
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) 方法
- [SetData](/official/Reference/VBRUN/DataObject/SetData) 方法