---
title: GetDataByName
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/GetDataByName
---
# GetDataByName

Returns the value previously stored in the **DataObject** under a format identified by name, as a **Variant**.

Syntax: *object*.**GetDataByName(** *Format* **)**

*object*
: *required* An object expression that evaluates to a **DataObject**.

*Format*
: *required* A **String** giving the name of the format to read back --- typically the name a custom clipboard format was registered under with `RegisterClipboardFormat`. If the **DataObject** does not contain data in *Format*, the result is **Empty**; check first with [**GetFormatByName**](/official/Reference/VBRUN/DataObject/GetFormatByName) when the format may not be present.

::: info
**GetDataByName** is a twinBASIC addition; it has no equivalent in VB6. Use it when the consumer side knows the format only by its registered name and does not have the corresponding numeric identifier available. For the standard built-in formats, [**GetData**](/official/Reference/VBRUN/DataObject/GetData) with a **ClipboardConstants** value is more direct.
:::

### Example

```vb
If Data.GetFormatByName("HTML Format") Then
    Dim Html As String
    Html = Data.GetDataByName("HTML Format")
End If
```

### See Also

- [GetData](/official/Reference/VBRUN/DataObject/GetData) method
- [GetFormatByName](/official/Reference/VBRUN/DataObject/GetFormatByName) method
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) method
