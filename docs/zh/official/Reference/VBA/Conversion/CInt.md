---
title: CInt
parent: Conversion Module
permalink: /tB/Modules/Conversion/CInt
---
# CInt

Coerces an expression to an **Integer**.

Syntax: **CInt(** *expression* **)**

*expression*
: *required* Any valid string or numeric expression in the range `-32,768` to `32,767`. Fractions are rounded.

The return type is **Integer**. If *expression* is outside the range of an **Integer**, a run-time error occurs.

When the fractional part is exactly `0.5`, **CInt** always rounds it to the nearest even number. For example, `0.5` rounds to `0`, and `1.5` rounds to `2`. **CInt** differs from the [**Fix**](/official/Reference/VBA/Conversion/Fix) and [**Int**](/official/Reference/VBA/Conversion/Int) functions, which truncate, rather than round, the fractional part of a number. Also, **Fix** and **Int** always return a value of the same type as is passed in.

**CInt** is the internationally aware alternative to [**Val**](/official/Reference/VBA/Conversion/Val) for converting a string to a numeric type.

### Example

This example uses the **CInt** function to convert a value to an **Integer**.

```vb
Dim MyDouble, MyInt
MyDouble = 2345.5678                 ' MyDouble is a Double.
MyInt = CInt(MyDouble)               ' MyInt contains 2346.
```

### See Also

- [CBool](/official/Reference/VBA/Conversion/CBool), [CByte](/official/Reference/VBA/Conversion/CByte), [CLng](/official/Reference/VBA/Conversion/CLng), [CLngLng](/official/Reference/VBA/Conversion/CLngLng), [CSng](/official/Reference/VBA/Conversion/CSng), [CStr](/official/Reference/VBA/Conversion/CStr), [CVar](/official/Reference/VBA/Conversion/CVar) functions
- [Fix](/official/Reference/VBA/Conversion/Fix), [Int](/official/Reference/VBA/Conversion/Int) functions
