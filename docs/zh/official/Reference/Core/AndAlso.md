---
title: AndAlso
parent: Operators
permalink: /tB/Core/AndAlso
---
# AndAlso operator

Performs a short-circuit logical conjunction of two **Boolean** expressions. If the left operand evaluates to **False**, the right operand is not evaluated.

::: info
**AndAlso** is a twinBASIC extension. The classic [**And**](/official/Reference/Core/And) operator always evaluates both operands and returns a bitwise result; **AndAlso** evaluates the right operand only when needed and always returns a **Boolean**.
:::

Syntax:
> *result* **=** *expression1* **AndAlso** *expression2*

*result*
: A **Boolean** variable.

*expression1*, *expression2*
: Any expressions that evaluate to **Boolean** (or are coercible to **Boolean**).

If *expression1* is **False**, *result* is **False** and *expression2* is not evaluated. Otherwise *expression2* is evaluated and its **Boolean** value becomes *result*.

This is the standard "short-circuit AND". It is useful when *expression2* depends on *expression1* having succeeded --- for example, a null-check guarding a property access.

### Example

Guarding a property access by first verifying the object reference:

```vb
If obj IsNot Nothing AndAlso obj.IsReady Then
    ' Safe to call - obj.IsReady is only evaluated when obj is non-Nothing.
    obj.DoWork
End If
```

Compare with the equivalent code using **And**, which would crash if `obj` were **Nothing** because both operands are always evaluated:

```vb
' WRONG - obj.IsReady is evaluated even when obj is Nothing.
If obj IsNot Nothing And obj.IsReady Then
    obj.DoWork
End If
```

### See Also

- [**OrElse** operator](/official/Reference/Core/OrElse)
- [**And** operator](/official/Reference/Core/And)
- [Operators](/official/Reference/Operators)
