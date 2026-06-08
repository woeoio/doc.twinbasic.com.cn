---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '05ed4527-ac0f-40bc-8112-1c1b4cf3be96'
  PropagateID: '05ed4527-ac0f-40bc-8112-1c1b4cf3be96'
  ReservedCode1: 'af6d226a-54e4-460c-81e9-af81421a8fbe'
  ReservedCode2: 'af6d226a-54e4-460c-81e9-af81421a8fbe'
---

---
title: DataObjectFormat
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/DataObjectFormat
---
# DataObjectFormat

**DataObjectFormat**描述[**DataObject**](/official/Reference/VBRUN/DataObject/)保存值的格式之一。此描述符是迭代[**DataObjectFormats**](/official/Reference/VBRUN/DataObject/DataObjectFormats)集合时产生的元素类型，公开了运行时协商传输所需的一切信息：数据所处的剪贴板格式类型、提供的数据方面（渲染）以及字节的存储方式。

## 成员

### AspectIndex

返回或设置所选[**AspectType**](#aspecttype)中从一开始的索引，类型为**Long**。

语法：*object*.**AspectIndex** [ **=** *value* ]

对于具有多个页面或帧的方面——例如以`dvaspect_Content`渲染的多页图元文件——**AspectIndex**选择此描述符引用的页面或帧。对于单方面格式，保留默认值即可。

### AspectType

返回或设置描述符引用的底层数据渲染方式，类型为**AspectTypeConstants**值。

语法：*object*.**AspectType** [ **=** *value* ]

常见值为`dvaspect_Content`（数据本身）、`dvaspect_Thumbnail`（小预览）、`dvaspect_Icon`和`dvaspect_DocPrint`（打印时渲染）。大多数格式只公开`dvaspect_Content`。

### FormatType

返回或设置剪贴板格式类型，类型为**ClipboardConstants**值。

语法：*object*.**FormatType** [ **=** *value* ]

示例：`vbCFText`、`vbCFUnicodeText`、`vbCFBitmap`、`vbCFFiles`。同一数字标识符可传递给[**GetData**](/official/Reference/VBRUN/DataObject/GetData)或[**GetFormat**](/official/Reference/VBRUN/DataObject/GetFormat)。

### Name

返回格式的人类可读名称，类型为**String**。只读。

语法：*object*.**Name**

对于内置剪贴板格式，这是稳定的标签，如`"Text"`或`"Bitmap"`；对于通过`RegisterClipboardFormat`注册的格式，这是注册时使用的名称，也是[**GetDataByName**](/official/Reference/VBRUN/DataObject/GetDataByName)和[**GetFormatByName**](/official/Reference/VBRUN/DataObject/GetFormatByName)接受的键。

### StorageType

返回或设置数据的存储方式，类型为**StorageTypeConstants**值。

语法：*object*.**StorageType** [ **=** *value* ]

标识用于传输字节的介质——全局内存句柄、文件路径、`IStream`、`IStorage`、GDI句柄、图元文件或增强型图元文件。运行时通常自动协商此值；仅在需要与要求特定介质的另一组件互操作时才需要直接设置。

### 示例

此示例读取**DataObject**上第一个可用格式的名称和类型。

```vb
If Data.AvailableFormats.Count > 0 Then
    Dim fmt As DataObjectFormat
    Set fmt = Data.AvailableFormats.Item(1)
    Debug.Print fmt.Name & " (" & fmt.FormatType & ")"
End If
```

## 另见

- [DataObject](/official/Reference/VBRUN/DataObject/)
- [DataObjectFormats](/official/Reference/VBRUN/DataObject/DataObjectFormats) 集合
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) 方法