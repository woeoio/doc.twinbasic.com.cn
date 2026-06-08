---
title: CreateStdPictureFromHandle
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/CreateStdPictureFromHandle
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6ea33ccc-c299-4772-b605-684b09ab0dd2'
  PropagateID: '6ea33ccc-c299-4772-b605-684b09ab0dd2'
  ReservedCode1: 'edeb323b-322f-481c-831b-0603bb391d61'
  ReservedCode2: 'edeb323b-322f-481c-831b-0603bb391d61'
---

# CreateStdPictureFromHandle

将GDI句柄包装在**stdole.StdPicture**中，以便可以将其赋值给控件的**Picture**属性或传递给任何其他**IPicture**消费者。

语法：**CreateStdPictureFromHandle(** *Handle* **,** *Type* **,** *TakeOwnership* **)** **As Object**

*Handle*
: *必需* **LongPtr**。要包装的GDI句柄——通常是`HBITMAP`、`HICON`、`HCURSOR`、`HENHMETAFILE`或`HMETAFILE`。

*Type*
: *必需* **Long**。图片类型。传递与*Handle*类型对应的**PictureTypeConstants**值之一（`vbPicTypeBitmap`、`vbPicTypeIcon`、`vbPicTypeMetafile`、`vbPicTypeEnhMetafile`）。

*TakeOwnership*
: *必需* **Boolean**。如果为**True**，返回的图片获取*Handle*的所有权并在释放时释放它。如果为**False**，调用者仍负责句柄的生命周期。

结果是一个常规的**stdole.StdPicture**，等效于**LoadPicture**返回的对象，适合赋值给**Picture**属性。

### 另请参阅

- [PictureToByteArray](/official/Reference/VBA/HiddenModule/PictureToByteArray)函数
- [ConvertIconToBitmap](/official/Reference/VBA/HiddenModule/ConvertIconToBitmap)函数