---
title: Eval
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/Eval
---
# Eval

Compiles and evaluates a twinBASIC expression supplied as a string, returning the result as a **Variant**.

Syntax: **Eval(** *Expression* **)** **As Variant**

*Expression*
: *required* **String**. A twinBASIC expression that resolves to a value --- for example, `"2 + 2"`, `"Sqr(2)"`, or `"UCase(""hello"")"`.

A fresh [**TbExpressionService**](/en/official/Reference/VBA/TbExpressionService) is built for every call, with the standard library binder registered so the standard runtime functions ([**Sin**](/en/official/Reference/VBA/Math/Sin), [**Sqr**](/en/official/Reference/VBA/Math/Sqr), [**Len**](/en/official/Reference/VBA/Strings/Len), [**CStr**](/en/official/Reference/VBA/Conversion/CStr), and the rest) are visible. The expression is then compiled and evaluated once, and the service is discarded.

For repeated evaluation of the same source, or for expressions that need to see application objects, construct the service explicitly and reuse a compiled [**ITbExpression**](/en/official/Reference/VBA/TbExpressionService#itbexpression-interface).

### Example

```vb
Debug.Print Eval("2 * (Sqr(2) + 1)")    ' 4.82842712474619
Debug.Print Eval("UCase(""hello"")")     ' "HELLO"
```

### See Also

- [ExpressionService module](/en/official/Reference/VBA/TbExpressionService)
