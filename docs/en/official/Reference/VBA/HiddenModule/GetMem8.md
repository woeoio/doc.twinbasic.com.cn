---
title: GetMem8
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetMem8
---
# GetMem8

Reads eight bytes from a memory address into a **Currency** variable.

Syntax: **GetMem8** *Address* **,** *retVal*

*Address*
: *required* **LongPtr**. The address to read from.

*retVal*
: *required* **Currency**. The variable to receive the bytes read from *Address*.

**Currency** is the convenient eight-byte signed-integer carrier used by these primitives because of its in-memory representation; the resulting bits are the raw 64-bit pattern stored at *Address*, scaled by the **Currency** type's fixed factor of 10000 only at the point of arithmetic. To work with the bits as an unscaled 64-bit integer, [**LSet**](/en/official/Reference/Core/LSet) the **Currency** value into a **LongLong** variable.

The address is read directly with no bounds or alignment check.

### Example

This example writes an 8-byte value to a buffer and reads it back with **GetMem8**.

```vb
Dim buf As LongPtr = AllocMem(8)
Dim src As Currency = 1000000@
PutMem8 buf, src
Dim dst As Currency
GetMem8 buf, dst        ' dst = src (same raw 8-byte pattern)
FreeMem buf
```

### See Also

- [GetMem1](/en/official/Reference/VBA/HiddenModule/GetMem1), [GetMem2](/en/official/Reference/VBA/HiddenModule/GetMem2), [GetMem4](/en/official/Reference/VBA/HiddenModule/GetMem4), [GetMemPtr](/en/official/Reference/VBA/HiddenModule/GetMemPtr) procedures
- [PutMem8](/en/official/Reference/VBA/HiddenModule/PutMem8) procedure
