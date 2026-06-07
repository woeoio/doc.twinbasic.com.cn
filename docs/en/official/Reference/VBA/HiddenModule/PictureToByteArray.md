---
title: PictureToByteArray
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PictureToByteArray
---
# PictureToByteArray

Serialises an **IPicture** into a **Byte** array.

Syntax: **PictureToByteArray(** *Picture* **)** **As Variant**

*Picture*
: *required* **IUnknown**. The picture to serialise --- an **stdole.StdPicture**, or any object that implements **IPicture** / **IPictureDisp**.

The result is a **Variant** wrapping a `Byte()` array containing the bytes the picture would write to a stream via **IPersistStream**. The companion deserialiser is the global **LoadPicture**, which accepts a byte array as input and returns a fresh picture.

Returns an empty array if *Picture* is **Nothing**.

### Example

```vb
Dim Bytes As Variant = PictureToByteArray(Picture1.Picture)
Set Picture2.Picture = LoadPicture(Bytes)
```

### See Also

- [CreateStdPictureFromHandle](/en/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle) function
- [ConvertIconToBitmap](/en/official/Reference/VBA/HiddenModule/ConvertIconToBitmap) function
