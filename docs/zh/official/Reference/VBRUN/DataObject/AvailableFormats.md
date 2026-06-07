---
title: AvailableFormats
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/AvailableFormats
---
# AvailableFormats

Returns a [**DataObjectFormats**](/official/Reference/VBRUN/DataObject/DataObjectFormats) collection describing every format the **DataObject** currently holds a value in.

Syntax: *object*.**AvailableFormats**

*object*
: *required* An object expression that evaluates to a **DataObject**.

Each element of the returned collection is a [**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat) descriptor with the format's `Name`, its `FormatType` from **ClipboardConstants**, and information about how the format is stored. Use this when the consumer side does not know in advance which formats the source has supplied --- typically in OLE drag-and-drop or paste operations from another application.

::: info
**AvailableFormats** is a twinBASIC addition; VB6 callers had to probe each format of interest with **GetFormat** instead.
:::

### Example

```vb
Dim F As DataObjectFormat
For Each F In Data.AvailableFormats
    Debug.Print F.Name, F.FormatType
Next F
```

### See Also

- [DataObjectFormats](/official/Reference/VBRUN/DataObject/DataObjectFormats) collection
- [DataObjectFormat](/official/Reference/VBRUN/DataObject/DataObjectFormat)
- [GetFormat](/official/Reference/VBRUN/DataObject/GetFormat) method
- [GetFormatByName](/official/Reference/VBRUN/DataObject/GetFormatByName) method
