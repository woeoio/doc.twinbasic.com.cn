---
title: CDec
parent: Conversion Module
permalink: /tB/Modules/Conversion/CDec
---
# CDec

Coerces an expression to a **Decimal**.

Syntax: **CDec(** *expression* **)**

*expression*
: *required* Any valid string or numeric expression. The range for zero-scaled numbers (no decimal places) is `±79,228,162,514,264,337,593,543,950,335`. For numbers with 28 decimal places, the range is `±7.9228162514264337593543950335`. The smallest possible non-zero number is `0.0000000000000000000000000001`.

The return type is **Decimal**.

::: info
In VBA, **CDec** does not return a discrete data type; it always returns a **Variant** whose value has been converted to a **Decimal** subtype. In twinBASIC, **Decimal** is a full first-class data type, so **CDec** returns a **Decimal** directly. The result can be assigned to a **Variant** for VBA-compatible behavior.
:::

**CDec** is the internationally aware alternative to [**Val**](/official/Reference/VBA/Conversion/Val) for converting a string to a numeric type.

### Example

This example uses the **CDec** function to convert a numeric value to a **Decimal**.

```vb
Dim MyDecimal As Decimal, MyCurr As Currency
MyCurr = 10000000.0587               ' MyCurr is a Currency.
MyDecimal = CDec(MyCurr)             ' MyDecimal is a Decimal.
```

### See Also

- [CCur](/official/Reference/VBA/Conversion/CCur), [CDbl](/official/Reference/VBA/Conversion/CDbl), [CSng](/official/Reference/VBA/Conversion/CSng), [ValDec](/official/Reference/VBA/Conversion/ValDec) functions
