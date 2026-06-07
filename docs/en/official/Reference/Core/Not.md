---
title: Not
parent: Operators
permalink: /tB/Core/Not
---
# Not operator

Used to perform bitwise negation on an expression.

Syntax:
> *result* **=** **Not** *expression*

*result*
: Any numeric variable.

*expression*
: Any expression.

The following table illustrates how *result* is determined:

| If *expression* is | Then *result* is |
|:-----|:-----|
| **True**  | **False** |
| **False** | **True**  |
| **Null**  | **Null**  |

The **Not** operator inverts the bit values of its operand and sets the corresponding bit in *result* according to the following table:

| If bit in *expression* is | Then bit in *result* is |
|:-----:|:-----:|
| 0 | 1 |
| 1 | 0 |

### Example

This example uses the **Not** operator to perform logical negation on an expression.

```vb
Dim A, B, C, D, MyCheck
A = 10: B = 8: C = 6: D = Null    ' Initialize variables.
MyCheck = Not (A > B)    ' Returns False.
MyCheck = Not (B > A)    ' Returns True.
MyCheck = Not (C > D)    ' Returns Null.
MyCheck = Not A          ' Returns -11 (bitwise comparison).
```

### See Also

- [**And** operator](/en/official/Reference/Core/And)
- [**Or** operator](/en/official/Reference/Core/Or)
- [**Xor** operator](/en/official/Reference/Core/Xor)
- [**Eqv** operator](/en/official/Reference/Core/Eqv)
- [**Imp** operator](/en/official/Reference/Core/Imp)
- [**IsNot** operator](/en/official/Reference/Core/IsNot)
- [Operators](/en/official/Reference/Operators)
