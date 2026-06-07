---
title: Alias
parent: Statements
permalink: /tB/Core/Alias
---
# Alias

Declares an alternative name for an intrinsic type, user-defined [**Type**](/official/Reference/Core/Type), [**Interface**](/official/Reference/Core/Interface), or another **Alias**. The alias and the original type are interchangeable --- assigning between them is not a type mismatch. Comparable to `typedef` in C/C++.

::: info
The **Alias** statement is a twinBASIC extension. It has no equivalent in classic VBA, where the only use of the **Alias** keyword is to name a DLL entry point in a [**Declare**](/official/Reference/Core/Declare) statement.
:::

Syntax:
> [ **Public** \| **Private** ] **Alias** *aliasname* **As** *type*

**Public**
: *optional* The alias is exported to the type library of an ActiveX DLL or control, so consumers in other projects see *aliasname* itself.

**Private**
: *optional* The alias is visible only within the project. Usages of a **Private** alias are replaced with the underlying *type* during compilation, so *aliasname* never appears in the project's type library.

*aliasname*
: The name of the alias. Must be a valid twinBASIC identifier.

*type*
: The original type. May be an intrinsic type, a user-defined [**Type**](/official/Reference/Core/Type), an [**Interface**](/official/Reference/Core/Interface), or another **Alias**.

**Alias** statements are valid only in `.twin` source files (not legacy `.bas` or `.cls` files), and must appear at file scope --- outside of [**Module**](/official/Reference/Core/Module) and [**Class**](/official/Reference/Core/Class) blocks, alongside [**Interface**](/official/Reference/Core/Interface) and [**CoClass**](/official/Reference/Core/CoClass) declarations.

### Example

Aliasing intrinsic types and a user-defined type:

```vb
Public Type POINT
    x As Long
    y As Long
End Type

Public Alias POINTAPI As POINT

Public Alias CBoolean As Byte

Public Alias KAFFINITY As LongPtr
```

A variable declared with the alias and a variable declared with the original type are interchangeable:

```vb
Dim p As POINT
Dim q As POINTAPI
p = q   ' OK — no type mismatch.
```

### See Also

- [**Type** statement](/official/Reference/Core/Type)
- [**Interface** statement](/official/Reference/Core/Interface)
- [**CoClass** statement](/official/Reference/Core/CoClass)
- [Alias Types](/official/Features/Language/Alias-Types)
