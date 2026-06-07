---
title: Imp
parent: Operators
permalink: /tB/Core/Imp
---
# Imp operator

Used to perform a bitwise implication on two expressions. *expression1* **Imp** *expression2* is **False** only when *expression1* is **True** and *expression2* is **False**; in every other non-**Null** case the result is **True**.

Syntax:
> *result* **=** *expression1* **Imp** *expression2*

*result*
: Any numeric variable.

*expression1*, *expression2*
: Any expressions.

The following table illustrates how *result* is determined:

| If *expression1* is | And *expression2* is | The *result* is |
|:-----|:-----|:-----|
| **True**  | **True**  | **True**  |
| **True**  | **False** | **False** |
| **True**  | **Null**  | **Null**  |
| **False** | **True**  | **True**  |
| **False** | **False** | **True**  |
| **False** | **Null**  | **True**  |
| **Null**  | **True**  | **True**  |
| **Null**  | **False** | **Null**  |
| **Null**  | **Null**  | **Null**  |

The **Imp** operator performs a bitwise comparison of identically positioned bits in two numeric expressions and sets the corresponding bit in *result* according to the following table:

| If bit in *expression1* is | And bit in *expression2* is | The *result* is |
|:-----:|:-----:|:-----:|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

::: info
**Imp** always evaluates *both* operands.
:::

### Example

This example uses the **Imp** operator to perform a logical implication on two expressions.

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = A > B Imp B > C         ' Returns True.
MyCheck = A > B Imp C > B         ' Returns False.
MyCheck = B > A Imp C > B         ' Returns True.
MyCheck = B > A Imp C > D         ' Returns True.
MyCheck = C > D Imp B > A         ' Returns Null.
MyCheck = B Imp A                 ' Returns -1 (bitwise comparison).
```

### See Also

- [**Eqv** operator](/official/Reference/Core/Eqv)
- [**Xor** operator](/official/Reference/Core/Xor)
- [**And** operator](/official/Reference/Core/And)
- [**Or** operator](/official/Reference/Core/Or)
- [Operators](/official/Reference/Operators)
