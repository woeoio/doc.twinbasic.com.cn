---
title: Information Module
parent: VBA Package
permalink: /tB/Modules/Information/
---

# Information module

The **Information** module groups together standalone procedures for asking questions about a value at run time --- its subtype, whether it has been initialised, whether an optional argument was supplied --- together with related utilities for querying array bounds, building **Variant** arrays, taking raw addresses, decomposing colour values, and reaching the current run-time error state.

## Inspecting a value

The `Is...` family of functions test whether an expression has a particular state or subtype, returning a **Boolean**: [**IsArray**](/en/official/Reference/VBA/Information/IsArray), [**IsArrayInitialized**](/en/official/Reference/VBA/Information/IsArrayInitialized), [**IsDate**](/en/official/Reference/VBA/Information/IsDate), [**IsEmpty**](/en/official/Reference/VBA/Information/IsEmpty), [**IsError**](/en/official/Reference/VBA/Information/IsError), [**IsMissing**](/en/official/Reference/VBA/Information/IsMissing), [**IsNull**](/en/official/Reference/VBA/Information/IsNull), [**IsNumeric**](/en/official/Reference/VBA/Information/IsNumeric), and [**IsObject**](/en/official/Reference/VBA/Information/IsObject). For richer queries, [**VarType**](/en/official/Reference/VBA/Information/VarType) returns the [**VbVarType**](/en/official/Reference/VBA/Constants/VbVarType) enumeration value identifying the subtype of a **Variant**, and [**TypeName**](/en/official/Reference/VBA/Information/TypeName) returns its name as a **String**.

```vb
Dim v As Variant
v = "1/1/2000"
Debug.Print IsDate(v)        ' True
Debug.Print VarType(v)       ' 8  (vbString)
Debug.Print TypeName(v)      ' "String"
```

## Array bounds

[**LBound**](/en/official/Reference/VBA/Information/LBound) and [**UBound**](/en/official/Reference/VBA/Information/UBound) return the smallest and largest valid subscript for a chosen dimension of an array. With a single argument they report on the first dimension; pass an explicit *Dimension* index to query a multidimensional array.

```vb
Dim Grid(1 To 4, 0 To 9) As Long
Debug.Print LBound(Grid)        ' 1   — first dimension lower bound
Debug.Print UBound(Grid)        ' 4   — first dimension upper bound
Debug.Print LBound(Grid, 2)     ' 0   — second dimension lower bound
Debug.Print UBound(Grid, 2)     ' 9   — second dimension upper bound
```

## Building Variant arrays

[**Array**](/en/official/Reference/VBA/Information/Array) creates a **Variant** array from a comma-separated list of values; the lower bound follows the source file's **Option Base** setting. As a special form, the same name doubles as a destructuring `Property Let` for unpacking an array on the right-hand side into individual variables on the left.

```vb
Dim a As Variant = Array("one", "two", "three")
Dim x As Variant, y As Variant, z As Variant
Array(x, y, z) = a              ' destructuring assignment
```

## Raw pointers

Three functions return raw addresses for use with API calls or unsafe interop: [**ObjPtr**](/en/official/Reference/VBA/Information/ObjPtr) for an object's COM identity, [**StrPtr**](/en/official/Reference/VBA/Information/StrPtr) for the underlying buffer of a **String**, and [**VarPtr**](/en/official/Reference/VBA/Information/VarPtr) for any variable. The result is a **LongPtr** valid only while the underlying object, string, or variable stays alive --- taking a pointer never holds a reference of its own. To read or write the memory at a known address, pair these with the [**GetMem**](/en/official/Reference/VBA/HiddenModule/GetMem4) / [**PutMem**](/en/official/Reference/VBA/HiddenModule/PutMem4) family from the [(Default)](/en/official/Reference/VBA/HiddenModule) module.

```vb
Dim n As Long = &H12345678
Dim Bytes(0 To 3) As Byte
vbaCopyBytes 4, VarPtr(Bytes(0)), VarPtr(n)
Debug.Print Hex(Bytes(0))        ' "78" — little-endian
```

## Working with colour values

[**RGB**](/en/official/Reference/VBA/Information/RGB) and [**RGBA**](/en/official/Reference/VBA/Information/RGBA) build a 32-bit colour value from individual red, green, blue, and (optionally) alpha components; [**RGB_R**](/en/official/Reference/VBA/Information/RGB_R), [**RGB_G**](/en/official/Reference/VBA/Information/RGB_G), [**RGB_B**](/en/official/Reference/VBA/Information/RGB_B), and [**RGBA_A**](/en/official/Reference/VBA/Information/RGBA_A) extract those components back out. [**QBColor**](/en/official/Reference/VBA/Information/QBColor) returns the RGB value of one of the sixteen QuickBASIC colour indexes, and [**TranslateColor**](/en/official/Reference/VBA/Information/TranslateColor) converts an OLE colour value (which may reference an entry in the system palette) into a plain RGB colour.

```vb
Dim C As Long
C = RGB(255, 100, 150)
Debug.Print RGB_R(C)         ' 255
Debug.Print RGB_G(C)         ' 100
Debug.Print RGB_B(C)         ' 150
```

## Run-time error state

[**Err**](/en/official/Reference/VBA/Information/Err) returns the [**ErrObject**](/en/official/Reference/VBA/ErrObject) describing the run-time error currently in effect --- its number, description, source, and so on. [**Erl**](/en/official/Reference/VBA/Information/Erl) returns the line number of the statement that raised the most recent error, when one was supplied as a numeric label.

## Members

- [Array](/en/official/Reference/VBA/Information/Array) -- creates a **Variant** array from a comma-separated list of values, or destructures one when used on the left of an assignment
- [Erl](/en/official/Reference/VBA/Information/Erl) -- returns the line number where the most recent run-time error occurred
- [Err](/en/official/Reference/VBA/Information/Err) -- returns the [**ErrObject**](/en/official/Reference/VBA/ErrObject) describing the current run-time error state
- [IMEStatus](/en/official/Reference/VBA/Information/IMEStatus) -- returns the status of the Input Method Editor
- [IsArray](/en/official/Reference/VBA/Information/IsArray) -- returns whether a variable is an array
- [IsArrayInitialized](/en/official/Reference/VBA/Information/IsArrayInitialized) -- returns whether an array has been dimensioned
- [IsDate](/en/official/Reference/VBA/Information/IsDate) -- returns whether an expression can be evaluated as a date
- [IsEmpty](/en/official/Reference/VBA/Information/IsEmpty) -- returns whether a **Variant** is uninitialised
- [IsError](/en/official/Reference/VBA/Information/IsError) -- returns whether an expression is an error subtype
- [IsMissing](/en/official/Reference/VBA/Information/IsMissing) -- returns whether an optional argument was supplied
- [IsNull](/en/official/Reference/VBA/Information/IsNull) -- returns whether a variable contains a **Null** value
- [IsNumeric](/en/official/Reference/VBA/Information/IsNumeric) -- returns whether an expression can be evaluated as a number
- [IsObject](/en/official/Reference/VBA/Information/IsObject) -- returns whether a variable refers to an object
- [LBound](/en/official/Reference/VBA/Information/LBound) -- returns the smallest valid subscript for a dimension of an array
- [ObjPtr](/en/official/Reference/VBA/Information/ObjPtr) -- returns the COM-identity address of an object
- [QBColor](/en/official/Reference/VBA/Information/QBColor) -- returns the RGB colour value for a QuickBASIC colour index
- [RGB](/en/official/Reference/VBA/Information/RGB) -- builds an RGB colour value from red, green, and blue components
- [RGBA](/en/official/Reference/VBA/Information/RGBA) -- builds an RGBA colour value from red, green, blue, and alpha components
- [RGBA_A](/en/official/Reference/VBA/Information/RGBA_A) -- returns the alpha component of an RGBA colour value
- [RGB_B](/en/official/Reference/VBA/Information/RGB_B) -- returns the blue component of an RGB colour value
- [RGB_G](/en/official/Reference/VBA/Information/RGB_G) -- returns the green component of an RGB colour value
- [RGB_R](/en/official/Reference/VBA/Information/RGB_R) -- returns the red component of an RGB colour value
- [StrPtr](/en/official/Reference/VBA/Information/StrPtr) -- returns the address of the underlying buffer of a **String**
- [TranslateColor](/en/official/Reference/VBA/Information/TranslateColor) -- translates an OLE colour value to a plain RGB colour value
- [TypeName](/en/official/Reference/VBA/Information/TypeName) -- returns the name of a variable's data type as a **String**
- [UBound](/en/official/Reference/VBA/Information/UBound) -- returns the largest valid subscript for a dimension of an array
- [VarPtr](/en/official/Reference/VBA/Information/VarPtr) -- returns the address of a variable
- [VarType](/en/official/Reference/VBA/Information/VarType) -- returns the [**VbVarType**](/en/official/Reference/VBA/Constants/VbVarType) enumeration value identifying a variable's subtype
