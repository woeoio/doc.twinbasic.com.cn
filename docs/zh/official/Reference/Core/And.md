---
title: And
parent: Operators
permalink: /tB/Core/And
---
# And operator

Used to perform a bitwise conjunction on two expressions.

Syntax:
> *result* **=** *expression1* **And** *expression2*

*result*
: Any numeric variable.

*expression1*, *expression2*
: Any expressions.

If both expressions evaluate to **True**, *result* is **True**. If either expression evaluates to **False**, *result* is **False**. The following table illustrates how *result* is determined:

| If *expression1* is | And *expression2* is | The *result* is |
|:-----|:-----|:-----|
| **True**  | **True**  | **True**  |
| **True**  | **False** | **False** |
| **True**  | **Null**  | **Null**  |
| **False** | **True**  | **False** |
| **False** | **False** | **False** |
| **False** | **Null**  | **False** |
| **Null**  | **True**  | **Null**  |
| **Null**  | **False** | **False** |
| **Null**  | **Null**  | **Null**  |

The **And** operator performs a bitwise comparison of identically positioned bits in two numeric expressions and sets the corresponding bit in *result* according to the following table:

| If bit in *expression1* is | And bit in *expression2* is | The *result* is |
|:-----:|:-----:|:-----:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

::: info
**And** evaluates *both* operands every time, even when *expression1* alone determines the result. Use [**AndAlso**](/official/Reference/Core/AndAlso) for short-circuit evaluation --- for example, when *expression2* is expensive, has side effects, or would fail without the guard provided by *expression1*.
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

- [**AndAlso** operator](/official/Reference/Core/AndAlso)
- [**Or** operator](/official/Reference/Core/Or)
- [**Not** operator](/official/Reference/Core/Not)
- [**Xor** operator](/official/Reference/Core/Xor)
- [**Eqv** operator](/official/Reference/Core/Eqv)
- [**Imp** operator](/official/Reference/Core/Imp)
- [Operators](/official/Reference/Operators)
