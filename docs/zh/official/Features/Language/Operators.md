---
title: Operators
parent: Language Syntax
nav_order: 7
permalink: /Features/Language/Operators
---

# New Operators

twinBASIC introduces several new operators to enhance language capabilities. Reference pages for each individual operator live under [Reference → Operators](/official/Reference/Operators).

## Bitshift Operators

[`<<`](/official/Reference/Core/LeftShift) and [`>>`](/official/Reference/Core/RightShift) perform left-shift and right-shift operations on a numeric variable. Note that shifts beyond available size result in 0, not wrapping.

## Short-Circuit Conditional Operators

### OrElse and AndAlso

With the regular [`Or`](/official/Reference/Core/Or) and [`And`](/official/Reference/Core/And) statements, both sides are evaluated, even when not necessary. With a short-circuit operator, if the condition is resolved by the first side, the other side is not evaluated. So if you have
`If Condition1 `[`OrElse`](/official/Reference/Core/OrElse)` Condition2 Then`, if `Condition1` is `True`, then `Condition2` will not be evaluated, and any code called by it will not run. The companion conjunction operator is [`AndAlso`](/official/Reference/Core/AndAlso).

### If() Operator

Short-circuit [`If()`](/official/Reference/Core/If) operator with syntax identical to the traditional [`IIf`](/official/Reference/Core/IIf). This has the additional benefit of not converting variables into a `Variant` if they're the same type; i.e. `If(condition, Long, Long)` the `Long` variables will never become a `Variant`.

## Assignment Operators

`+= -= /= \= *= ^= &= <<= >>=`

These are the equivalent of `var = var (operand) (var2)`. So `i += 1` is the equivalent of `i = i + 1`. See [Reference → Operators → Compound Assignment](/official/Reference/Operators#compound-assignment) for the per-operator details.

## IsNot Operator

The logical opposite of the [`Is`](/official/Reference/Core/Is) operator for testing object equivalence. For example, instead of `If (object Is Nothing) = False` you could now write `If object `[`IsNot`](/official/Reference/Core/IsNot)` Nothing Then`.

## Examples

```vb
Dim n As Long = &HFF
Dim shifted As Long = n << 4   ' result: &HFF0

n += 1                         ' compound assignment: n = &H100
n <<= 2                        ' left-shift assignment: n = &H400

Dim obj As Object = Nothing
If obj IsNot Nothing Then Debug.Print obj

Dim x As Long = -5
Debug.Print If(x >= 0, x, -x) ' short-circuit If(): prints 5
```
