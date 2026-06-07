---
title: GetMem1
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetMem1
---
# GetMem1

Reads one byte from a memory address into a **Byte** variable.

Syntax: **GetMem1** *Address* **,** *retVal*

*Address*
: *required* **LongPtr**. The address to read from.

*retVal*
: *required* **Byte**. The variable to receive the byte read from *Address*.

The address is read directly with no bounds or alignment check. Reading from an address that does not belong to the process, or from one that has been freed, will crash the host.

### Example

```vb
Dim s As String = "ABC"
Dim b As Byte
GetMem1 StrPtr(s), b
Debug.Print b              ' 65 — the low byte of the UTF-16 code unit for "A".
```

### See Also

- [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2), [GetMem4](/official/Reference/VBA/HiddenModule/GetMem4), [GetMem8](/official/Reference/VBA/HiddenModule/GetMem8), [GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr) procedures
- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1) procedure
