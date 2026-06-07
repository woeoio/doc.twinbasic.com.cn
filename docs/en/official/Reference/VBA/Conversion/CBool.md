---
title: CBool
parent: Conversion Module
permalink: /tB/Modules/Conversion/CBool
---
# CBool

Coerces an expression to a **Boolean**.

Syntax: **CBool(** *expression* **)**

*expression*
: *required* Any valid string or numeric expression.

The return type is **Boolean**. If *expression* evaluates to a nonzero value, **CBool** returns **True**; otherwise, it returns **False**.

If *expression* cannot be interpreted as a numeric value, a run-time error occurs.

The data-type conversion functions document code by showing that the result of some operation should be expressed as a particular data type rather than the default data type.

### Example

This example uses the **CBool** function to convert an expression to a **Boolean**.

```vb
Dim A, B, Check
A = 5: B = 5             ' Initialize variables.
Check = CBool(A = B)     ' Check contains True.

A = 0                    ' Define variable.
Check = CBool(A)         ' Check contains False.
```

### See Also

- [CByte](/en/official/Reference/VBA/Conversion/CByte), [CInt](/en/official/Reference/VBA/Conversion/CInt), [CLng](/en/official/Reference/VBA/Conversion/CLng), [CDbl](/en/official/Reference/VBA/Conversion/CDbl), [CSng](/en/official/Reference/VBA/Conversion/CSng), [CStr](/en/official/Reference/VBA/Conversion/CStr), [CVar](/en/official/Reference/VBA/Conversion/CVar) functions
