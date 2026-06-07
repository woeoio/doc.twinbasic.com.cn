---
title: DataObject
parent: VBRUN Package
nav_order: 12
permalink: /tB/Packages/VBRUN/DataObject/
---

# DataObject class

A **DataObject** is a container for one piece of information held in one or more clipboard formats --- the same payload represented as plain text, Unicode text, RTF, a bitmap, a list of file paths, and so on. The runtime hands a **DataObject** to clipboard and OLE drag-and-drop operations: the source side fills it with [**SetData**](/en/official/Reference/VBRUN/DataObject/SetData), and the destination side inspects what's available with [**GetFormat**](/en/official/Reference/VBRUN/DataObject/GetFormat) (or [**AvailableFormats**](/en/official/Reference/VBRUN/DataObject/AvailableFormats)) and pulls the bytes out with [**GetData**](/en/official/Reference/VBRUN/DataObject/GetData).

A new **DataObject** is created with **New** and starts out empty.

## Storing and retrieving data

[**SetData**](/en/official/Reference/VBRUN/DataObject/SetData) places a value into the **DataObject** under a given clipboard format --- typically a value from the **ClipboardConstants** enumeration such as `vbCFText`, `vbCFUnicodeText`, or `vbCFBitmap`. A single object can hold the same logical payload under several formats at once, so consumers with different requirements can each find a representation they understand.

```vb
Dim Data As New DataObject
Data.SetData "Hello, world!", vbCFText
Data.SetData StrConv("Hello, world!", vbUnicode), vbCFUnicodeText
```

[**GetData**](/en/official/Reference/VBRUN/DataObject/GetData) pulls the value back out for a chosen format. [**Clear**](/en/official/Reference/VBRUN/DataObject/Clear) removes every format and value at once --- useful when reusing a single **DataObject** for several operations.

twinBASIC also accepts format names as plain strings: [**GetDataByName**](/en/official/Reference/VBRUN/DataObject/GetDataByName) is the string-keyed counterpart to [**GetData**](/en/official/Reference/VBRUN/DataObject/GetData), and is convenient for custom or registered formats whose numeric identifier is not known up front.

## Discovering what's there

A consumer that did not place the data itself usually does not know which formats are present. [**GetFormat**](/en/official/Reference/VBRUN/DataObject/GetFormat) returns **True** if a given clipboard format is available, and [**GetFormatByName**](/en/official/Reference/VBRUN/DataObject/GetFormatByName) does the same for a named format. To discover the full set, [**AvailableFormats**](/en/official/Reference/VBRUN/DataObject/AvailableFormats) returns a [**DataObjectFormats**](/en/official/Reference/VBRUN/DataObject/DataObjectFormats) collection of [**DataObjectFormat**](/en/official/Reference/VBRUN/DataObject/DataObjectFormat) descriptors --- each with a `Name`, a `FormatType` from **ClipboardConstants**, and information about how the format is stored.

```vb
Dim F As DataObjectFormat
For Each F In Data.AvailableFormats
    Debug.Print F.Name, F.FormatType
Next F
```

::: info
[**AvailableFormats**](/en/official/Reference/VBRUN/DataObject/AvailableFormats), [**GetFormatByName**](/en/official/Reference/VBRUN/DataObject/GetFormatByName), and [**GetDataByName**](/en/official/Reference/VBRUN/DataObject/GetDataByName) are twinBASIC additions; they have no equivalent in VB6.
:::

## Files

When a **DataObject** contains a list of file paths --- for example, the payload of a Windows shell drag-and-drop --- [**Files**](/en/official/Reference/VBRUN/DataObject/Files) returns a [**DataObjectFiles**](/en/official/Reference/VBRUN/DataObject/DataObjectFiles) collection holding each path as a **String**.

```vb
Dim Path As Variant
For Each Path In Data.Files
    Debug.Print Path
Next Path
```

## Members

- [AvailableFormats](/en/official/Reference/VBRUN/DataObject/AvailableFormats) -- returns the collection of formats currently held in the **DataObject** *(twinBASIC extension)*
- [Clear](/en/official/Reference/VBRUN/DataObject/Clear) -- removes every format and value from the **DataObject**
- [Files](/en/official/Reference/VBRUN/DataObject/Files) -- returns the collection of file paths held in the **DataObject**
- [GetData](/en/official/Reference/VBRUN/DataObject/GetData) -- returns the value stored under a given clipboard format
- [GetDataByName](/en/official/Reference/VBRUN/DataObject/GetDataByName) -- returns the value stored under a given named format *(twinBASIC extension)*
- [GetFormat](/en/official/Reference/VBRUN/DataObject/GetFormat) -- returns whether the **DataObject** holds a value in a given clipboard format
- [GetFormatByName](/en/official/Reference/VBRUN/DataObject/GetFormatByName) -- returns whether the **DataObject** holds a value in a given named format *(twinBASIC extension)*
- [SetData](/en/official/Reference/VBRUN/DataObject/SetData) -- stores a value in the **DataObject** under a given clipboard format
