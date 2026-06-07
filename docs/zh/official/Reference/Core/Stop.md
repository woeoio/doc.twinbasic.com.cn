---
title: Stop
parent: Statements
permalink: /tB/Core/Stop
---

# Stop

Suspends execution.

Syntax:

> **Stop**

**Stop** statements can be placed anywhere in procedures to suspend execution. Using the **Stop** statement is similar to setting a breakpoint in the code.

The **Stop** statement suspends execution, but unlike [**End**](/official/Reference/Core/End), it doesn't close any files or clear variables, unless it is in a compiled executable (.exe) file.

### Example

This example uses the **Stop** statement to suspend execution for each iteration through the **For...Next** loop.

```vb
Dim i As Long
For i = 1 To 10 ' Start For...Next loop.
    Debug.Print i ' Print i to the Immediate window.
    Stop ' Stop during each iteration.
Next i
```

### See Also

- [**End** statement](/official/Reference/Core/End)
