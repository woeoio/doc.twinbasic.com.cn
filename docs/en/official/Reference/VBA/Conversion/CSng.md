---
title: CSng
parent: Conversion Module
permalink: /tB/Modules/Conversion/CSng
---
# CSng

Coerces an expression to a **Single**.

Syntax: **CSng(** *expression* **)**

*expression*
: *required* Any valid string or numeric expression in the **Single** range --- `-3.402823E38` to `-1.401298E-45` for negative values, and `1.401298E-45` to `3.402823E38` for positive values.

The return type is **Single**. If *expression* is outside the range of a **Single**, a run-time error occurs.

**CSng** is the internationally aware alternative to [**Val**](/en/official/Reference/VBA/Conversion/Val) for converting a string to a numeric type.

### Example

This example uses the **CSng** function to convert values to a **Single**.

```vb
Dim MyDouble1, MyDouble2, MySingle1, MySingle2
' MyDouble1, MyDouble2 are Doubles.
MyDouble1 = 75.3421115: MyDouble2 = 75.3421555
MySingle1 = CSng(MyDouble1)              ' MySingle1 contains 75.34211.
MySingle2 = CSng(MyDouble2)              ' MySingle2 contains 75.34216.
```

### See Also

- [CBool](/en/official/Reference/VBA/Conversion/CBool), [CByte](/en/official/Reference/VBA/Conversion/CByte), [CCur](/en/official/Reference/VBA/Conversion/CCur), [CDbl](/en/official/Reference/VBA/Conversion/CDbl), [CDec](/en/official/Reference/VBA/Conversion/CDec), [CInt](/en/official/Reference/VBA/Conversion/CInt), [CLng](/en/official/Reference/VBA/Conversion/CLng), [CStr](/en/official/Reference/VBA/Conversion/CStr), [CVar](/en/official/Reference/VBA/Conversion/CVar) functions
