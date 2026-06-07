---
title: AddStdLibraryBinder
parent: TbExpressionService
permalink: /tB/Modules/TbExpressionService/AddStdLibraryBinder
---
# AddStdLibraryBinder

Registers the standard-library binder so compiled expressions can call the common runtime functions.

Syntax: *service*.**AddStdLibraryBinder**

*service*
: *required* An object expression that evaluates to a **TbExpressionService** object.

After **AddStdLibraryBinder** has been called, expressions compiled by *service* can reference any procedure or property in the standard runtime library --- math functions like [**Sqr**](/en/official/Reference/VBA/Math/Sqr), [**Sin**](/en/official/Reference/VBA/Math/Sin), and [**Round**](/en/official/Reference/VBA/Math/Round); string functions like [**Len**](/en/official/Reference/VBA/Strings/Len), [**Mid**](/en/official/Reference/VBA/Strings/Mid), and [**Format**](/en/official/Reference/VBA/Strings/Format); conversion functions like [**CStr**](/en/official/Reference/VBA/Conversion/CStr) and [**CInt**](/en/official/Reference/VBA/Conversion/CInt); and so on.

A new **TbExpressionService** has no binders registered. Without at least one binder, compiled expressions can do little more than evaluate literal arithmetic --- any reference to a named symbol fails compilation with a run-time error.

### Example

```vb
Dim Service As TbExpressionService = New TbExpressionService
Service.AddStdLibraryBinder()

Debug.Print Service.Compile("Sqr(2) + Sqr(3)").Evaluate()    ' 3.14...
Debug.Print Service.Compile("UCase(""hello"")").Evaluate()   ' HELLO
```

### See Also

- [Compile](/en/official/Reference/VBA/TbExpressionService/Compile) method
- [AddCustomBinderObject](/en/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) method
- [AddCustomBinder](/en/official/Reference/VBA/TbExpressionService/AddCustomBinder) method
