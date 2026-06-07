---
title: CompilerVersion
parent: Compilation Module
permalink: /tB/Modules/Compilation/CompilerVersion
---
# CompilerVersion

Returns the twinBASIC compiler version number.

Syntax: **CompilerVersion** [ **()** ]

The return value is a **Long** identifying the compiler that produced the running code.

### Example

```vb
Debug.Print "Built with twinBASIC compiler build #" & CompilerVersion()
```

### See Also

- [ProcessorArchitecture](/en/official/Reference/VBA/Compilation/ProcessorArchitecture) function
