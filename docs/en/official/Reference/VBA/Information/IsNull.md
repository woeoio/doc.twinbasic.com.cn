---
title: IsNull
parent: Information Module
permalink: /tB/Modules/Information/IsNull
---

# IsNull

Returns a **Boolean** indicating whether an expression contains no valid data (**Null**).

Syntax: **IsNull(** _expression_ **)**

_expression_
: _required_ A **Variant** containing a numeric or string expression.

**IsNull** returns **True** if _expression_ is **Null**; otherwise, **False**. If _expression_ contains more than one variable, **Null** in any constituent variable causes the whole expression to evaluate to **Null**, and **IsNull** to return **True**.

The **Null** value indicates that a **Variant** holds no valid data. **Null** is not the same as [**Empty**](/en/official/Reference/VBA/Information/IsEmpty) (a variable that has not yet been initialized), nor the same as a zero-length string (`""`), which is sometimes called a null string.

::: warning
Use **IsNull** to determine whether an expression contains a **Null** value. Comparisons such as `If Var = Null` and `If Var <> Null` are always **False**, because any expression involving **Null** is itself **Null**, and a **Null** comparison is treated as **False**.
:::

### Example

This example uses **IsNull** to determine whether a variable contains a **Null**.

```vb
Dim MyVar As Variant
Dim MyCheck As Boolean
MyCheck = IsNull(MyVar)               ' False — MyVar is Empty.

MyVar = ""
MyCheck = IsNull(MyVar)               ' False — empty string is not Null.

MyVar = Null
MyCheck = IsNull(MyVar)               ' True.
```

### See Also

- [IsEmpty](/en/official/Reference/VBA/Information/IsEmpty), [IsMissing](/en/official/Reference/VBA/Information/IsMissing) functions
- [Nz](/en/official/Reference/VBA/Conversion/Nz) function
