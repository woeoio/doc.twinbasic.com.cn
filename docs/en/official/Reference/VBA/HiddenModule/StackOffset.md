---
title: StackOffset
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/StackOffset
---
# StackOffset

Returns the stack-frame offset of a variable.

Syntax: **StackOffset(** *Variable* **)** **As Long**

*Variable*
: *required* A local variable, argument, or other stack-resident reference. The value passed is taken **As Any** so the call works for any type.

The result is the offset, in bytes, from the procedure's stack frame base to the storage of *Variable*. Typically used inside a **Naked** procedure to compute addresses for inline assembly emitted with [**Emit**](/en/official/Reference/VBA/HiddenModule/Emit) or [**EmitAny**](/en/official/Reference/VBA/HiddenModule/EmitAny). The offset is resolved at compile time and folded in as a numeric constant.

### See Also

- [StackArgsSize](/en/official/Reference/VBA/HiddenModule/StackArgsSize) function
- [Emit](/en/official/Reference/VBA/HiddenModule/Emit), [EmitAny](/en/official/Reference/VBA/HiddenModule/EmitAny) procedures
- [Direct Assembly Insertion](/en/official/Features/Advanced/Assembly)
