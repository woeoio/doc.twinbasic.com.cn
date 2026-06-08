---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7c7ffa6d-bdb0-45aa-8e10-8683434beb36'
  PropagateID: '7c7ffa6d-bdb0-45aa-8e10-8683434beb36'
  ReservedCode1: '6e8a4ebb-34a5-45fd-85d4-3c6fe64f60f6'
  ReservedCode2: '6e8a4ebb-34a5-45fd-85d4-3c6fe64f60f6'
---

---
title: SetData
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/SetData
---
# SetData

以给定剪贴板格式在**DataObject**中存储值。对同一对象多次调用**SetData**可使一个逻辑有效负载以多种格式提供——例如`vbCFText`和`vbCFUnicodeText**——使每个消费者都能选择其理解的表示。

语法：*object*.**SetData** [ *Value* [ **,** *Format* ] ]

*object*
: *必需* 求值为**DataObject**的对象表达式。

*Value*
: *可选* 要存储的值。可以是可赋值给**Variant**的任何表达式——文本、字节数组、**stdole.IPictureDisp**等。

*Format*
: *可选* **ClipboardConstants**值——`vbCFText`、`vbCFUnicodeText`、`vbCFBitmap`、`vbCFFiles**等——命名*Value*存储所用的剪贴板格式。如果省略，**DataObject**根据*Value*的运行时类型选择默认格式。

使用自定义（私有）剪贴板格式时，在将其标识符传递给**SetData**之前，应先通过`RegisterClipboardFormat`向系统注册；否则其他应用程序将无法读回数据。

### 示例

```vb
Dim Data As New DataObject
Data.SetData "Hello, world!", vbCFText
Data.SetData LoadPicture("logo.bmp"), vbCFBitmap
```

### 另见

- [Clear](/official/Reference/VBRUN/DataObject/Clear) 方法
- [GetData](/official/Reference/VBRUN/DataObject/GetData) 方法
- [GetFormat](/official/Reference/VBRUN/DataObject/GetFormat) 方法