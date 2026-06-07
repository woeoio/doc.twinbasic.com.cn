---
title: PutMem2
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/PutMem2
---
# PutMem2

Writes two bytes to a memory address.

Syntax: **PutMem2** *Address* **,** *Value*

*Address*
: *required* **LongPtr**. The address to write to.

*Value*
: *required* **Integer**. The 16-bit value to store at *Address*.

The bytes are written in the host's native byte order --- little-endian on x86 and x64. The address is written directly with no bounds or alignment check.

### Example

This example writes a 16-bit value to a buffer and reads it back.

```vb
Dim buf As LongPtr = AllocMem(4)
PutMem2 buf, &H1234
Dim v As Integer
GetMem2 buf, v          ' v = &H1234
FreeMem buf
```

### See Also

- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1), [PutMem4](/official/Reference/VBA/HiddenModule/PutMem4), [PutMem8](/official/Reference/VBA/HiddenModule/PutMem8), [PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr) procedures
- [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2) procedure
