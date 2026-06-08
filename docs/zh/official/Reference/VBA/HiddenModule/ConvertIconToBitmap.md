---
title: ConvertIconToBitmap
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/ConvertIconToBitmap
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3f0d5cd2-27fa-4132-a324-bf1ade562f16'
  PropagateID: '3f0d5cd2-27fa-4132-a324-bf1ade562f16'
  ReservedCode1: '411ca8d0-87f9-4b86-b169-b6e219fd066a'
  ReservedCode2: '411ca8d0-87f9-4b86-b169-b6e219fd066a'
---

# ConvertIconToBitmap

将图标图片转换为位图图片。

语法：**ConvertIconToBitmap(** *IconPicture* [ **,** *BackColor* ] **)** **As Object**

*IconPicture*
: *必需* **Object**。一个持有图标（`vbPicTypeIcon`）或光标（`vbPicTypeIcon`）的**stdole.StdPicture**。

*BackColor*
: *可选* **Variant**。将透明像素展平到的背景颜色，以OLE颜色值给出。如果省略，则使用系统**Window**颜色。

返回的图片是一个全新的位图类型**stdole.StdPicture**，图标栅格化在所选背景之上。原始图标图片保持不变。

### 示例

```vb
Dim Bmp As StdPicture
Set Bmp = ConvertIconToBitmap(MyIconPicture, RGB(255, 255, 255))
Set Picture1.Picture = Bmp
```

### 另请参阅

- [CreateStdPictureFromHandle](/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle)函数
- [PictureToByteArray](/official/Reference/VBA/HiddenModule/PictureToByteArray)函数