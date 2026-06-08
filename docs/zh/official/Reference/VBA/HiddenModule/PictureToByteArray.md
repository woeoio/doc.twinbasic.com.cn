---
title: PictureToByteArray
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PictureToByteArray
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ad3a809c-ec13-4bfb-8f87-0f5ce211d030'
  PropagateID: 'ad3a809c-ec13-4bfb-8f87-0f5ce211d030'
  ReservedCode1: '90f9e382-c5d1-4ae3-a849-fac1b425e10d'
  ReservedCode2: '90f9e382-c5d1-4ae3-a849-fac1b425e10d'
---

# PictureToByteArray

将**IPicture**序列化为**Byte**数组。

语法：**PictureToByteArray(** *Picture* **)** **As Variant**

*Picture*
: *必需* **IUnknown**。要序列化的图片——**stdole.StdPicture**或任何实现**IPicture**/**IPictureDisp**的对象。

结果是一个**Variant**，包装了包含图片通过**IPersistStream**写入流的字节的`Byte()`数组。配合的反序列化器是全局**LoadPicture**，它接受字节数组作为输入并返回新的图片。

如果*Picture*为**Nothing**，则返回空数组。

### 示例

```vb
Dim Bytes As Variant = PictureToByteArray(Picture1.Picture)
Set Picture2.Picture = LoadPicture(Bytes)
```

### 另请参阅

- [CreateStdPictureFromHandle](/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle)函数
- [ConvertIconToBitmap](/official/Reference/VBA/HiddenModule/ConvertIconToBitmap)函数