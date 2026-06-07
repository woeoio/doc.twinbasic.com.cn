---
title: CurrentComponentName
parent: Compilation Module
permalink: /tB/Modules/Compilation/CurrentComponentName
---
# CurrentComponentName

Returns the name of the current component (module or class) as a literal **String**.

Syntax: **CurrentComponentName** [ **()** ]

The value identifies the source unit --- the **Module**, **Class**, **Form**, or other component --- that lexically contains the call site.

::: info
**CurrentComponentName** is a compile-time intrinsic: the literal string is embedded in the compiled code at the point of the call. It does not change at run time, even when the call is reached through a forwarded or inherited member.
:::

### Example

```vb
Public Sub Log(Message As String)
    Debug.Print CurrentComponentName() & ": " & Message
End Sub
```

### See Also

- [CurrentComponentCLSID](/en/official/Reference/VBA/Compilation/CurrentComponentCLSID) function
- [CurrentProcedureName](/en/official/Reference/VBA/Compilation/CurrentProcedureName) function
- [CurrentProjectName](/en/official/Reference/VBA/Compilation/CurrentProjectName) function
- [CurrentSourceFile](/en/official/Reference/VBA/Compilation/CurrentSourceFile) function
