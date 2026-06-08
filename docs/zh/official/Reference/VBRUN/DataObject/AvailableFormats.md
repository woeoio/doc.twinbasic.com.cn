---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c3e4e1c0-66ba-4cc3-929f-d1f870a20bf5'
  PropagateID: 'c3e4e1c0-66ba-4cc3-929f-d1f870a20bf5'
  ReservedCode1: 'be1d25d3-2c13-45ee-98a3-9805cbe84988'
  ReservedCode2: 'be1d25d3-2c13-45ee-98a3-9805cbe84988'
---

---
title: AvailableFormats
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/AvailableFormats
---
# AvailableFormats

返回[**DataObjectFormats**](/official/Reference/VBRUN/DataObject/DataObjectFormats)集合，描述**DataObject**当前保存值的所有格式。

语法：*object*.**AvailableFormats**

*object*
: *必需* 求值为**DataObject**的对象表达式。

返回集合的每个元素是[**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat)描述符，包含格式的`Name`、来自**ClipboardConstants**的`FormatType`以及格式存储方式的信息。当消费端事先不知道源端提供了哪些格式时使用——通常在OLE拖放或从其他应用程序粘贴操作中。

::: info
**AvailableFormats**是twinBASIC新增功能；VB6调用方必须使用**GetFormat**逐一探测每种格式。
:::

### 示例

```vb
Dim F As DataObjectFormat
For Each F In Data.AvailableFormats
    Debug.Print F.Name, F.FormatType
Next F
```

### 另见

- [DataObjectFormats](/official/Reference/VBRUN/DataObject/DataObjectFormats) 集合
- [DataObjectFormat](/official/Reference/VBRUN/DataObject/DataObjectFormat)
- [GetFormat](/official/Reference/VBRUN/DataObject/GetFormat) 方法
- [GetFormatByName](/official/Reference/VBRUN/DataObject/GetFormatByName) 方法