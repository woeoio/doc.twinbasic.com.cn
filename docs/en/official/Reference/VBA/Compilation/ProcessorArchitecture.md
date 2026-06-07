---
title: ProcessorArchitecture
parent: Compilation Module
permalink: /tB/Modules/Compilation/ProcessorArchitecture
---
# ProcessorArchitecture

Returns the processor architecture for which the running application was built.

Syntax: **ProcessorArchitecture** [ **()** ]

The return value is a **VbArchitecture** constant: **vbArchWin32** for a 32-bit build, or **vbArchWin64** for a 64-bit build.

### Example

```vb
If ProcessorArchitecture() = vbArchWin64 Then
    Debug.Print "Running as 64-bit"
Else
    Debug.Print "Running as 32-bit"
End If
```

### See Also

- [CompilerVersion](/en/official/Reference/VBA/Compilation/CompilerVersion) function
