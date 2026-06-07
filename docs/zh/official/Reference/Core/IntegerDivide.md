---
title: "&#92;, &#92;="
parent: Operators
permalink: /tB/Core/IntegerDivide
---
# \ and \= operators

Used to divide two numbers and return an integer result. The compound form **\\=** divides-and-assigns in one step.

Syntax:
> *result* **=** *number1* **\\** *number2*  
> *variable* **\\=** *number*       *(twinBASIC)*

*result*
: Any numeric variable.

*variable*
: *(twinBASIC)* Any numeric variable or writable property.

*number*, *number1*, *number2*
: Any numeric expressions.

Before division is performed, the numeric expressions are rounded to **Byte**, **Integer**, **Long**, or **LongLong** expressions.

Usually, the data type of *result* is a **Byte**, **Byte** variant, **Integer**, **Integer** variant, **Long**, **Long** variant, or **LongLong**, regardless of whether *result* is a whole number.

Any fractional portion is truncated. However, if any expression is **Null**, *result* is **Null**. Any expression that is **Empty** is treated as 0.

Dividing by zero raises a run-time error.

### Compound assignment

`x \= y` is the twinBASIC shorthand for `x = x \ y`. The left-hand side is evaluated once and rounded to an integral type as described above. **\\=** is a statement, not an expression --- it does not produce a value.

```vb
Dim Value As Long = 100
Value \= 4                      ' Value is now 25.
Value \= 7                      ' Value is now 3 (truncating).
```

### Example

This example uses the **\\** operator to perform integer division.

```vb
Dim MyValue
MyValue = 11 \ 4                ' Returns 2.
MyValue = 9 \ 3                 ' Returns 3.
MyValue = 100 \ 3               ' Returns 33.
```

### See Also

- [**/** operator](/official/Reference/Core/Divide)
- [**Mod** operator](/official/Reference/Core/Mod)
- [Operators](/official/Reference/Operators)
