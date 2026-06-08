---
title: And
parent: Operators
permalink: /tB/Core/And
---

# And operator

Used to perform a bitwise conjunction on two expressions.

Syntax:

> _result_ **=** _expression1_ **And** _expression2_

_result_
: Any numeric variable.

_expression1_, _expression2_
: Any expressions.

If both expressions evaluate to **True**, _result_ is **True**. If either expression evaluates to **False**, _result_ is **False**. The following table illustrates how _result_ is determined:

| If _expression1_ is | And _expression2_ is | The _result_ is |
| :------------------ | :------------------- | :-------------- |
| **True**            | **True**             | **True**        |
| **True**            | **False**            | **False**       |
| **True**            | **Null**             | **Null**        |
| **False**           | **True**             | **False**       |
| **False**           | **False**            | **False**       |
| **False**           | **Null**             | **False**       |
| **Null**            | **True**             | **Null**        |
| **Null**            | **False**            | **False**       |
| **Null**            | **Null**             | **Null**        |

The **And** operator performs a bitwise comparison of identically positioned bits in two numeric expressions and sets the corresponding bit in _result_ according to the following table:

| If bit in _expression1_ is | And bit in _expression2_ is | The _result_ is |
| :------------------------: | :-------------------------: | :-------------: |
|             0              |              0              |        0        |
|             0              |              1              |        0        |
|             1              |              0              |        0        |
|             1              |              1              |        1        |

::: info
**And** evaluates _both_ operands every time, even when _expression1_ alone determines the result. Use [**AndAlso**](/en/official/Reference/Core/AndAlso) for short-circuit evaluation --- for example, when _expression2_ is expensive, has side effects, or would fail without the guard provided by _expression1_.
:::

### Example

This example uses the **And** operator to perform a logical conjunction on two expressions.

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = A > B And B > C         ' Returns True.
MyCheck = B > A And B > C         ' Returns False.
MyCheck = A > B And B > D         ' Returns Null.
MyCheck = A And B                 ' Returns 8 (bitwise comparison).
```

### See Also

- [**AndAlso** operator](/en/official/Reference/Core/AndAlso)
- [**Or** operator](/en/official/Reference/Core/Or)
- [**Not** operator](/en/official/Reference/Core/Not)
- [**Xor** operator](/en/official/Reference/Core/Xor)
- [**Eqv** operator](/en/official/Reference/Core/Eqv)
- [**Imp** operator](/en/official/Reference/Core/Imp)
- [Operators](/en/official/Reference/Operators)
