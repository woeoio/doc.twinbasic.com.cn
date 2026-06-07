---
title: GetFormatByName
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/GetFormatByName
---
# GetFormatByName

Returns whether the **DataObject** holds a value in a format identified by name, as a **Boolean**.

Syntax: *object*.**GetFormatByName(** *Format* **)**

*object*
: *required* An object expression that evaluates to a **DataObject**.

*Format*
: *required* A **String** giving the name of the format to test for --- typically the name a custom clipboard format was registered under with `RegisterClipboardFormat`.

The result is **True** if the **DataObject** can produce a value in *Format*, **False** otherwise. Use this before calling [**GetDataByName**](/en/official/Reference/VBRUN/DataObject/GetDataByName) when the format may not be present.

::: info
**GetFormatByName** is a twinBASIC addition; it has no equivalent in VB6. For the standard built-in formats, [**GetFormat**](/en/official/Reference/VBRUN/DataObject/GetFormat) with a **ClipboardConstants** value is more direct.
:::

### Example

```vb
If Data.GetFormatByName("HTML Format") Then
    Dim Html As String
    Html = Data.GetDataByName("HTML Format")
End If
```

### See Also

- [GetDataByName](/en/official/Reference/VBRUN/DataObject/GetDataByName) method
- [GetFormat](/en/official/Reference/VBRUN/DataObject/GetFormat) method
- [AvailableFormats](/en/official/Reference/VBRUN/DataObject/AvailableFormats) method
