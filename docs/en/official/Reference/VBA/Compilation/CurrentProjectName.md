---
title: CurrentProjectName
parent: Compilation Module
permalink: /tB/Modules/Compilation/CurrentProjectName
---
# CurrentProjectName

Returns the name of the current project as a literal **String**.

Syntax: **CurrentProjectName** [ **()** ]

The value is the name of the project (executable or library) that owns the call site.

::: info
**CurrentProjectName** is a compile-time intrinsic --- the literal string is embedded in the compiled code from the project's metadata at the point of the call.
:::

### Example

```vb
Dim ProjectName As String
ProjectName = CurrentProjectName()
Debug.Print "Running in project: " & ProjectName
```

### See Also

- [CurrentComponentName](/en/official/Reference/VBA/Compilation/CurrentComponentName) function
- [CurrentProcedureName](/en/official/Reference/VBA/Compilation/CurrentProcedureName) function
- [CurrentSourceFile](/en/official/Reference/VBA/Compilation/CurrentSourceFile) function
