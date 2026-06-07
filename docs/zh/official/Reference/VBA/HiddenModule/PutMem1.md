---
title: PutMem1
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PutMem1
---
# PutMem1

Writes one byte to a memory address.

Syntax: **PutMem1** *Address* **,** *Value*

*Address*
: *required* **LongPtr**. The address to write to.

*Value*
: *required* **Byte**. The byte to store at *Address*.

The address is written directly with no bounds or alignment check. Writing to an address that does not belong to the process, or one that points into read-only memory, will crash the host.

### Example

This example writes a single byte to a buffer and reads it back.

```vb
Dim buf As LongPtr = AllocMem(4)
PutMem1 buf, &HFF
Dim b As Byte
GetMem1 buf, b          ' b = &HFF
FreeMem buf
```

### See Also

- [PutMem2](/official/Reference/VBA/HiddenModule/PutMem2), [PutMem4](/official/Reference/VBA/HiddenModule/PutMem4), [PutMem8](/official/Reference/VBA/HiddenModule/PutMem8), [PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr) procedures
- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1) procedure
