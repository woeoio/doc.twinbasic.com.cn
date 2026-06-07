---
title: CDbl
parent: Conversion Module
permalink: /tB/Modules/Conversion/CDbl
---
# CDbl

Coerces an expression to a **Double**.

Syntax: **CDbl(** *expression* **)**

*expression*
: *required* Any valid string or numeric expression in the **Double** range --- `-1.79769313486231E308` to `-4.94065645841247E-324` for negative values, and `4.94065645841247E-324` to `1.79769313486232E308` for positive values.

The return type is **Double**. If *expression* is outside the range of a **Double**, a run-time error occurs.

**CDbl** is the internationally aware alternative to [**Val**](/en/official/Reference/VBA/Conversion/Val) for converting a string to a numeric type. **CDbl** recognizes different decimal separators and different thousand separators properly, depending on the system's locale setting.

### Example

This example uses the **CDbl** function to convert an expression to a **Double**.

```vb
Dim MyCurr, MyDouble
MyCurr = CCur(234.456784)                    ' MyCurr is a Currency.
MyDouble = CDbl(MyCurr * 8.2 * 0.01)         ' Convert result to a Double.
```

### See Also

- [CCur](/en/official/Reference/VBA/Conversion/CCur), [CDec](/en/official/Reference/VBA/Conversion/CDec), [CInt](/en/official/Reference/VBA/Conversion/CInt), [CLng](/en/official/Reference/VBA/Conversion/CLng), [CSng](/en/official/Reference/VBA/Conversion/CSng), [CStr](/en/official/Reference/VBA/Conversion/CStr), [CVar](/en/official/Reference/VBA/Conversion/CVar) functions
