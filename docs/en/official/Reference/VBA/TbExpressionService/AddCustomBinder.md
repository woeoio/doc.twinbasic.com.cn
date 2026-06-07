---
title: AddCustomBinder
parent: TbExpressionService
permalink: /tB/Modules/TbExpressionService/AddCustomBinder
---
# AddCustomBinder

Registers a user-supplied binder that resolves symbols dynamically at compile time.

Syntax: *service*.**AddCustomBinder** *customBinder*

*service*
: *required* An object expression that evaluates to a **TbExpressionService** object.

*customBinder*
: *required* An object that implements [**ITbCustomBinder**](./#itbcustombinder-interface).

Use **AddCustomBinder** when [**AddCustomBinderObject**](/en/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) doesn't fit --- for example, when the names available to the expression are not statically known, when a name should resolve to something other than a member access on a fixed object, or when the implementer needs to inspect the argument count at the call site as part of resolution.

The engine calls [**Bind**](/en/official/Reference/VBA/TbExpressionService/Bind) on each registered custom binder during compilation, once per unresolved symbol. The first binder that returns a non-**Nothing** result wins. Multiple custom binders can be registered with one service, and they are consulted in registration order.

### Example

This example registers a class instance as both a property source (via [**AddCustomBinderObject**](/en/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) with [**IsAppObject**](./#IsAppObject)) and a custom binder. Bare symbols in the expression are first looked up as members of `Me` via the property source; whatever isn't matched there falls through to `Me.Bind`, which can resolve it dynamically --- for example, against a live recordset.

```vb
' Inside a class that does: Implements ITbCustomBinder
Dim Service As TbExpressionService = New TbExpressionService
Service.AddStdLibraryBinder()
Service.AddCustomBinderObject "Report", Me, IsAppObject
Service.AddCustomBinder Me

Dim Expr As ITbExpression = Service.Compile("UCase(FieldName) & "" — "" & Title")
```

### See Also

- [Bind](/en/official/Reference/VBA/TbExpressionService/Bind) method
- [Compile](/en/official/Reference/VBA/TbExpressionService/Compile) method
- [AddStdLibraryBinder](/en/official/Reference/VBA/TbExpressionService/AddStdLibraryBinder) method
- [AddCustomBinderObject](/en/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) method
