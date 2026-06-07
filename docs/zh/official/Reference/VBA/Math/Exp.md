---
title: Exp
parent: Math Module
permalink: /tB/Modules/Math/Exp
---
# Exp

Returns a **Double** specifying *e* (the base of natural logarithms) raised to a power.

Syntax: **Exp(** *number* **)**

*number*
: *required* A **Double** or any valid numeric expression.

If the value of *number* exceeds 709.782712893, an error occurs. The constant *e* is approximately 2.718282.

::: info
The **Exp** function complements the action of the [**Log**](/official/Reference/VBA/Math/Log) function and is sometimes referred to as the antilogarithm.
:::

### Example

This example uses the **Exp** function to return *e* raised to a power.

```vb
Dim MyAngle, MyHSin
' Define angle in radians.
MyAngle = 1.3
' Calculate hyperbolic sine.
MyHSin = (Exp(MyAngle) - Exp(-1 * MyAngle)) / 2
```

### See Also

- [Log](/official/Reference/VBA/Math/Log) function
