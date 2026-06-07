---
title: CVar
parent: Conversion Module
permalink: /tB/Modules/Conversion/CVar
---
# CVar

Coerces an expression to a **Variant**.

Syntax: **CVar(** *expression* **)**

*expression*
: *required* Any valid expression. The acceptable range is the same as **Double** for numerics, and the same as **String** for non-numerics.

The return type is **Variant**.

### Example

This example uses the **CVar** function to convert an expression to a **Variant**.

```vb
Dim MyInt, MyVar
MyInt = 4534                             ' MyInt is an Integer.
MyVar = CVar(MyInt & 000)                ' MyVar contains the string "4534000".
```

### See Also

- [CBool](/official/Reference/VBA/Conversion/CBool), [CByte](/official/Reference/VBA/Conversion/CByte), [CCur](/official/Reference/VBA/Conversion/CCur), [CDate](/official/Reference/VBA/Conversion/CDate), [CDbl](/official/Reference/VBA/Conversion/CDbl), [CInt](/official/Reference/VBA/Conversion/CInt), [CLng](/official/Reference/VBA/Conversion/CLng), [CSng](/official/Reference/VBA/Conversion/CSng), [CStr](/official/Reference/VBA/Conversion/CStr) functions
- [CVDate](/official/Reference/VBA/Conversion/CVDate), [CVErr](/official/Reference/VBA/Conversion/CVErr) functions
