---
title: StackArgsSize
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/StackArgsSize
---
# StackArgsSize

Returns the total size, in bytes, of the arguments passed on the stack of the enclosing procedure.

Syntax: **StackArgsSize()** **As Long**

The result is resolved at compile time and folded into the generated code as a numeric constant. Used inside a **Naked** procedure when the assembly needs to know how much to clean off the stack on return --- for example, to issue the right `ret n` opcode under the `_stdcall` convention.

### See Also

- [StackOffset](/official/Reference/VBA/HiddenModule/StackOffset) function
- [Emit](/official/Reference/VBA/HiddenModule/Emit), [EmitAny](/official/Reference/VBA/HiddenModule/EmitAny) procedures
- [Direct Assembly Insertion](/official/Features/Advanced/Assembly)
