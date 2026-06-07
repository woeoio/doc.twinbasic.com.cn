---
title: GetFormat
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/GetFormat
---
# GetFormat

Returns whether the **DataObject** holds a value in the given clipboard format, as a **Boolean**.

Syntax: *object*.**GetFormat(** *Format* **)**

*object*
: *required* An object expression that evaluates to a **DataObject**.

*Format*
: *required* A **ClipboardConstants** value identifying the format to test for --- for example `vbCFText`, `vbCFUnicodeText`, `vbCFBitmap`, `vbCFFiles`.

The result is **True** if the **DataObject** can produce a value in *Format*, **False** otherwise. Use this before calling [**GetData**](/en/official/Reference/VBRUN/DataObject/GetData) when the format may not be present, so that an unknown format does not silently return **Empty**.

### Example

```vb
If Data.GetFormat(vbCFFiles) Then
    Dim Path As Variant
    For Each Path In Data.Files
        Debug.Print Path
    Next Path
End If
```

### See Also

- [GetData](/en/official/Reference/VBRUN/DataObject/GetData) method
- [GetFormatByName](/en/official/Reference/VBRUN/DataObject/GetFormatByName) method
- [AvailableFormats](/en/official/Reference/VBRUN/DataObject/AvailableFormats) method
- [SetData](/en/official/Reference/VBRUN/DataObject/SetData) method
