---
title: CLng
parent: Conversion Module
permalink: /tB/Modules/Conversion/CLng
---
# CLng

Coerces an expression to a **Long**.

Syntax: **CLng(** *expression* **)**

*expression*
: *required* Any valid string or numeric expression in the range `-2,147,483,648` to `2,147,483,647`. Fractions are rounded.

The return type is **Long**. If *expression* is outside the range of a **Long**, a run-time error occurs.

When the fractional part is exactly `0.5`, **CLng** always rounds it to the nearest even number. For example, `0.5` rounds to `0`, and `1.5` rounds to `2`. **CLng** differs from the [**Fix**](/official/Reference/VBA/Conversion/Fix) and [**Int**](/official/Reference/VBA/Conversion/Int) functions, which truncate, rather than round, the fractional part of a number.

### Example

This example uses the **CLng** function to convert values to a **Long**.

```vb
Dim MyVal1, MyVal2, MyLong1, MyLong2
MyVal1 = 25427.45: MyVal2 = 25427.55     ' MyVal1, MyVal2 are Doubles.
MyLong1 = CLng(MyVal1)                   ' MyLong1 contains 25427.
MyLong2 = CLng(MyVal2)                   ' MyLong2 contains 25428.
```

### See Also

- [CBool](/official/Reference/VBA/Conversion/CBool), [CByte](/official/Reference/VBA/Conversion/CByte), [CInt](/official/Reference/VBA/Conversion/CInt), [CLngLng](/official/Reference/VBA/Conversion/CLngLng), [CLngPtr](/official/Reference/VBA/Conversion/CLngPtr), [CSng](/official/Reference/VBA/Conversion/CSng), [CStr](/official/Reference/VBA/Conversion/CStr), [CVar](/official/Reference/VBA/Conversion/CVar) functions
- [Fix](/official/Reference/VBA/Conversion/Fix), [Int](/official/Reference/VBA/Conversion/Int) functions
