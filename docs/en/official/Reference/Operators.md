---
title: Operators
parent: Reference Section
nav_order: 4
permalink: /Reference/Operators
---

# Operators

Operators built into the twinBASIC language. They are understood by the compiler and are not declared or defined in the runtime library.

## Arithmetic

- [+](/en/official/Reference/Core/Plus) -- addition; with **String** operands, concatenation
- [-](/en/official/Reference/Core/Minus) -- subtraction; as a unary operator, negation
- [*](/en/official/Reference/Core/Multiply) -- multiplication
- [/](/en/official/Reference/Core/Divide) -- floating-point division
- [\\](/en/official/Reference/Core/IntegerDivide) -- integer division (truncating)
- [Mod](/en/official/Reference/Core/Mod) -- divides two numbers and returns only the remainder
- [ ^](/en/official/Reference/Core/Exponent) -- exponentiation

## Concatenation

- [&](/en/official/Reference/Core/Concat) -- forces string concatenation, regardless of operand types

## Comparison

- [Comparison operators](/en/official/Reference/Core/Comparison-Operators) (`=`, `<>`, `<`, `<=`, `>`, `>=`) -- numeric or string comparison
- [Like](/en/official/Reference/Core/Like) -- wildcard / pattern-matching comparison
- [Is](/en/official/Reference/Core/Is) -- compares two object references for identity
- [IsNot](/en/official/Reference/Core/IsNot) -- (twinBASIC) the logical inverse of **Is**

## Bitwise

Both operands are always evaluated. Booleans are treated as integers: True = -1, False = 0.

- [And](/en/official/Reference/Core/And) -- bitwise conjunction
- [Or](/en/official/Reference/Core/Or) -- bitwise disjunction
- [Not](/en/official/Reference/Core/Not) -- bitwise negation
- [Xor](/en/official/Reference/Core/Xor) -- bitwise exclusive-or
- [Eqv](/en/official/Reference/Core/Eqv) -- bitwise equivalence
- [Imp](/en/official/Reference/Core/Imp) -- bitwise implication

## Logical Short-Circuit

The right operand is evaluated only when the left operand does not already determine the result.

- [AndAlso](/en/official/Reference/Core/AndAlso) -- (twinBASIC) short-circuit conjunction; evaluates the right operand only if the left is **True**
- [OrElse](/en/official/Reference/Core/OrElse) -- (twinBASIC) short-circuit disjunction; evaluates the right operand only if the left is **False**

## Bitshift

*(twinBASIC)* Shifts are *logical* --- vacated bits are filled with zero, and shifts past the operand's width yield `0` rather than wrapping.

- [\<<](/en/official/Reference/Core/LeftShift) -- (twinBASIC) shifts a numeric value left by a given number of bits
- [\>>](/en/official/Reference/Core/RightShift) -- (twinBASIC) shifts a numeric value right by a given number of bits

## Object Identity

- [Is](/en/official/Reference/Core/Is) -- compares two object references for identity
- [IsNot](/en/official/Reference/Core/IsNot) -- (twinBASIC) the logical inverse of **Is**

## Compound Assignment

*(twinBASIC)* For most arithmetic, concatenation, and bitshift operators, twinBASIC provides a compound form `op=` that combines the operation with assignment. `x op= y` is equivalent to `x = x op y`, but evaluates the left-hand side only once and is a statement rather than an expression.

| Operator                       | Compound form | Equivalent to |
| :----------------------------- | :------------ | :------------ |
| [+](/en/official/Reference/Core/Plus)           | **+=**        | `x = x + y`   |
| [-](/en/official/Reference/Core/Minus)          | **-=**        | `x = x - y`   |
| [*](/en/official/Reference/Core/Multiply)       | **\*=**       | `x = x * y`   |
| [/](/en/official/Reference/Core/Divide)         | **/=**        | `x = x / y`   |
| [\\](/en/official/Reference/Core/IntegerDivide) | **\\=**       | `x = x \ y`   |
| [ ^](/en/official/Reference/Core/Exponent)      | **^=**        | `x = x ^ y`   |
| [&](/en/official/Reference/Core/Concat)         | **&=**        | `x = x & y`   |
| [\<<](/en/official/Reference/Core/LeftShift)    | **\<<=**      | `x = x << y`  |
| [\>>](/en/official/Reference/Core/RightShift)   | **\>>=**      | `x = x >> y`  |

There is no compound form for [**Mod**](/en/official/Reference/Core/Mod), or for any of the logical / comparison operators.

## Function Pointers

- [AddressOf](/en/official/Reference/Core/AddressOf) -- produces a typed function-pointer to a procedure

## Operator Precedence

When several operations occur in an expression, each part is evaluated in a fixed order. Arithmetic operators are evaluated first, comparison operators next, and logical operators last. Parentheses override the default order.

Within each category, the order from highest to lowest precedence is:

| Arithmetic                                           | Comparison                            | Logical    |
|:-----------------------------------------------------|:--------------------------------------|:-----------|
| Exponentiation (`^`)                                 | Equality (`=`)                        | **Not**    |
| Unary negation (`-`)                                 | Inequality (`<>`)                     | **And**, **AndAlso** |
| Multiplication and division (`*`, `/`)               | Less than (`<`)                       | **Or**, **OrElse**   |
| Integer division (`\`)                               | Greater than (`>`)                    | **Xor**    |
| Modulus (`Mod`)                                      | Less than or equal to (`<=`)          | **Eqv**    |
| Addition and subtraction (`+`, `-`)                  | Greater than or equal to (`>=`)       | **Imp**    |
| String concatenation (`&`)                           | **Like**, **Is**, **IsNot**           |            |
| Bitshift (`<<`, `>>`)                                |                                       |            |

Comparison operators all have equal precedence and evaluate left-to-right. Multiplication and division also evaluate left-to-right when they appear together, as do addition and subtraction. The `&` operator is not strictly arithmetic, but in precedence it follows all arithmetic operators and precedes all comparison operators.

The compound-assignment operators (`+=`, `-=`, `*=`, `/=`, `^=`, `&=`, `<<=`, `>>=`) appear only at statement level --- they are not part of any expression, so they do not participate in precedence.
