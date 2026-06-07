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

After **AddStdLibraryBinder** has been called, expressions compiled by *service* can reference any procedure or property in the standard runtime library --- math functions like [**Sqr**](/official/Reference/VBA/Math/Sqr), [**Sin**](/official/Reference/VBA/Math/Sin), and [**Round**](/official/Reference/VBA/Math/Round); string functions like [**Len**](/official/Reference/VBA/Strings/Len), [**Mid**](/official/Reference/VBA/Strings/Mid), and [**Format**](/official/Reference/VBA/Strings/Format); conversion functions like [**CStr**](/official/Reference/VBA/Conversion/CStr) and [**CInt**](/official/Reference/VBA/Conversion/CInt); and so on.

A new **TbExpressionService** has no binders registered. Without at least one binder, compiled expressions can do little more than evaluate literal arithmetic --- any reference to a named symbol fails compilation with a run-time error.

### Example

```vb
Dim Service As TbExpressionService = New TbExpressionService
Service.AddStdLibraryBinder()

Debug.Print Service.Compile("Sqr(2) + Sqr(3)").Evaluate()    ' 3.14...
Debug.Print Service.Compile("UCase(""hello"")").Evaluate()   ' HELLO
```

### See Also

- [Compile](/official/Reference/VBA/TbExpressionService/Compile) method
- [AddCustomBinderObject](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) method
- [AddCustomBinder](/official/Reference/VBA/TbExpressionService/AddCustomBinder) method
