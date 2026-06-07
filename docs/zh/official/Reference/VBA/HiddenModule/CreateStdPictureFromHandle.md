---
title: CreateStdPictureFromHandle
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/CreateStdPictureFromHandle
---
# CreateStdPictureFromHandle

Wraps a GDI handle in an **stdole.StdPicture** so it can be assigned to a control's **Picture** property or passed to any other **IPicture** consumer.

Syntax: **CreateStdPictureFromHandle(** *Handle* **,** *Type* **,** *TakeOwnership* **)** **As Object**

*Handle*
: *required* **LongPtr**. The GDI handle to wrap --- typically an `HBITMAP`, `HICON`, `HCURSOR`, `HENHMETAFILE`, or `HMETAFILE`.

*Type*
: *required* **Long**. The picture type. Pass one of the **PictureTypeConstants** values (`vbPicTypeBitmap`, `vbPicTypeIcon`, `vbPicTypeMetafile`, `vbPicTypeEnhMetafile`) corresponding to *Handle*'s flavour.

*TakeOwnership*
: *required* **Boolean**. If **True**, the returned picture takes ownership of *Handle* and frees it when released. If **False**, the caller remains responsible for the handle's lifetime.

The result is a regular **stdole.StdPicture** equivalent to one returned by **LoadPicture**, suitable for assignment to a **Picture** property.

### See Also

- [PictureToByteArray](/official/Reference/VBA/HiddenModule/PictureToByteArray) function
- [ConvertIconToBitmap](/official/Reference/VBA/HiddenModule/ConvertIconToBitmap) function
