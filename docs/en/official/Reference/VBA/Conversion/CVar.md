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

- [CBool](/en/official/Reference/VBA/Conversion/CBool), [CByte](/en/official/Reference/VBA/Conversion/CByte), [CCur](/en/official/Reference/VBA/Conversion/CCur), [CDate](/en/official/Reference/VBA/Conversion/CDate), [CDbl](/en/official/Reference/VBA/Conversion/CDbl), [CInt](/en/official/Reference/VBA/Conversion/CInt), [CLng](/en/official/Reference/VBA/Conversion/CLng), [CSng](/en/official/Reference/VBA/Conversion/CSng), [CStr](/en/official/Reference/VBA/Conversion/CStr) functions
- [CVDate](/en/official/Reference/VBA/Conversion/CVDate), [CVErr](/en/official/Reference/VBA/Conversion/CVErr) functions
