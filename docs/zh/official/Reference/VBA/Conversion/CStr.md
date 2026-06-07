---
title: CStr
parent: Conversion Module
permalink: /tB/Modules/Conversion/CStr
---
# CStr

Coerces an expression to a **String**.

Syntax: **CStr(** *expression* **)**

*expression*
: *required* Any valid expression.

The return type is **String**. The result depends on the type of *expression*:

| If *expression* is | CStr returns                                                  |
|--------------------|---------------------------------------------------------------|
| **Boolean**        | A string containing `"True"` or `"False"`.                    |
| **Date**           | A string containing a date in the system's short date format. |
| **Empty**          | A zero-length string (`""`).                                  |
| **Error**          | A string containing the word `Error` followed by the error number. |
| **Null**           | A run-time error.                                             |
| Other numeric      | A string containing the number.                               |

**CStr** is the internationally aware alternative to [**Str**](/official/Reference/VBA/Conversion/Str) for converting a number to a string. **CStr** recognizes different decimal separators properly, depending on the system's locale setting.

### Example

This example uses the **CStr** function to convert a numeric value to a **String**.

```vb
Dim MyDouble, MyString
MyDouble = 437.324                       ' MyDouble is a Double.
MyString = CStr(MyDouble)                ' MyString contains "437.324".
```

### See Also

- [CBool](/official/Reference/VBA/Conversion/CBool), [CByte](/official/Reference/VBA/Conversion/CByte), [CCur](/official/Reference/VBA/Conversion/CCur), [CDbl](/official/Reference/VBA/Conversion/CDbl), [CInt](/official/Reference/VBA/Conversion/CInt), [CLng](/official/Reference/VBA/Conversion/CLng), [CSng](/official/Reference/VBA/Conversion/CSng), [CVar](/official/Reference/VBA/Conversion/CVar) functions
- [Str](/official/Reference/VBA/Conversion/Str), [Format](/official/Reference/VBA/Strings/Format) functions
