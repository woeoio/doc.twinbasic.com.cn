---
title: CType
parent: Conversion Module
permalink: /tB/Modules/Conversion/CType
---
# CType

Performs an explicit type conversion to a type chosen by the caller.

Syntax: **CType(Of** *type* **)** **(** *value* **)**

*type*
: *required* The type to convert *value* to. Any type known to the compiler is accepted, including built-in types, **Enum** types, classes, interfaces, and user-defined types.

*value*
: *required* The expression being converted.

The return type matches *type*.

::: info
**CType** is a twinBASIC extension; VBA has no equivalent.
:::

**CType** has two roles:

1. **As an explicit cast**, used wherever an implicit conversion would either be disallowed or produce a compiler warning. It conveys the same intent as [**CInt**](/en/official/Reference/VBA/Conversion/CInt), [**CLng**](/en/official/Reference/VBA/Conversion/CLng), and the rest of the C-prefix functions, but for any target type --- most usefully when the target is an **Enum** or an interface. For example, assigning a numeric literal or another **Enum** member to an **Enum**-typed variable triggers a compiler warning that **CType** silences:

   ```vb
   Dim day As VbDayOfWeek
   day = CType(Of VbDayOfWeek)(1)
   ```

2. **As a pointer-to-UDT cast**, used to view the memory pointed to by a **LongPtr** as a particular user-defined type without copying it. See [Enhanced Pointer Functionality](/en/official/Features/Language/Pointers#ctypeof-type) for the canonical examples.

In both roles **CType** is an operator-like form recognized by the compiler; it isn't called like a regular function and the unparameterized name `CType` cannot be assigned to a function reference.

### See Also

- [Enhanced Pointer Functionality](/en/official/Features/Language/Pointers#ctypeof-type)
- [Generics](/en/official/Features/Language/Generics)
- [Compiler Warnings](/en/official/Features/Compiler-IDE/Compiler-Warnings)
- [CBool](/en/official/Reference/VBA/Conversion/CBool), [CByte](/en/official/Reference/VBA/Conversion/CByte), [CInt](/en/official/Reference/VBA/Conversion/CInt), [CLng](/en/official/Reference/VBA/Conversion/CLng), [CDbl](/en/official/Reference/VBA/Conversion/CDbl), [CStr](/en/official/Reference/VBA/Conversion/CStr), [CVar](/en/official/Reference/VBA/Conversion/CVar) functions
