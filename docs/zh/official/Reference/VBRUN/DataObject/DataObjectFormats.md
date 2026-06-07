---
title: DataObjectFormats
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/DataObjectFormats
---
# DataObjectFormats

A **DataObjectFormats** object is the read-only collection of [**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat) descriptors a [**DataObject**](/official/Reference/VBRUN/DataObject/) currently exposes --- one element per clipboard format the object holds a value in. The collection is returned by the [**AvailableFormats**](/official/Reference/VBRUN/DataObject/AvailableFormats) method and is the only general way to discover, at run time, which formats a **DataObject** received from another application has on offer.

## Members

### Count

Returns the number of formats in the collection.

Syntax: *object*.**Count**

*object*
: *required* An object expression that evaluates to a **DataObjectFormats** object.

The value is a **Long**. Valid indexes for [**Item**](#item) run from `1` to **Count**.

### Item

Returns a single format descriptor from the collection by its one-based position.

Syntax: *object*.**Item(** *Index* **)**

*object*
: *required* An object expression that evaluates to a **DataObjectFormats** object.

*Index*
: *required* A **Long** giving the one-based position of the descriptor to return. Must be between `1` and [**Count**](#count); otherwise an error occurs.

The result is a [**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat).

### For Each iteration

A **DataObjectFormats** object can be iterated with the [**For Each...Next**](/official/Reference/Core/For-Each-Next) statement, which yields each [**DataObjectFormat**](/official/Reference/VBRUN/DataObject/DataObjectFormat) in turn. The hidden `_NewEnum` member supplies the enumerator and is not called directly from user code.

```vb
Dim F As DataObjectFormat
For Each F In Data.AvailableFormats
    Debug.Print F.Name, F.FormatType
Next F
```

### Example

This example lists the name and format type of every format a **DataObject** holds.

```vb
Dim fmt As DataObjectFormat
For Each fmt In Data.AvailableFormats
    Debug.Print fmt.Name & " (" & fmt.FormatType & ")"
Next fmt
```

## See Also

- [DataObject](/official/Reference/VBRUN/DataObject/)
- [DataObjectFormat](/official/Reference/VBRUN/DataObject/DataObjectFormat)
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) method
