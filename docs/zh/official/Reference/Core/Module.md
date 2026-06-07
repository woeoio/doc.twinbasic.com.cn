---
title: Module
parent: Statements
permalink: /tB/Core/Module
---
# Module

Defines a module --- a non-instantiable container for procedures, constants, types, enums, and module-level variables. A module's members are accessed through the module name (or, for **Public** members in a non-private module, directly).

::: info
The explicit **Module** ... **End Module** block is a twinBASIC extension. Classic VBA distinguishes "standard modules" from "class modules" purely by file type (`.bas` vs. `.cls`); the source has no enclosing keyword. In `.twin` files twinBASIC requires (and supports) the explicit block, which permits a class and a module in the same file and allows attributes to apply to the module as a whole.
:::

Syntax:
> [ *attributes* ]  
> [ **Public** \| **Private** ] **Module** *name*  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *modulemember* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; ...  
> **End Module**

*attributes*
: *optional* One or more attributes applicable to a module.

**Public**
: *optional* In an ActiveX project, marks the module as exported into the type library so that consumers in other projects can see its **Public** members.

**Private**
: *optional* In an ActiveX project, withholds the module from the type library: its members remain usable within the project, but are not exported. Equivalent to placing [**Option Private Module**](/official/Reference/Core/Option) at the top of a classic standard module.

*name*
: The identifier naming the module.

*modulemember*
: *optional* Any of the following:

  - constants defined using [**Const**](/official/Reference/Core/Const)
  - module-level variables defined using [**Public**](/official/Reference/Core/Public), [**Private**](/official/Reference/Core/Private), or [**Dim**](/official/Reference/Core/Dim) (modules don't take part in inheritance, so [**Protected**](/official/Reference/Core/Protected) is not allowed)
  - procedures defined using [**Sub**](/official/Reference/Core/Sub), [**Function**](/official/Reference/Core/Function), or [**Property**](/official/Reference/Core/Property)
  - user-defined types defined using [**Type**](/official/Reference/Core/Type) or [**Enum**](/official/Reference/Core/Enum)
  - external procedure declarations using [**Declare**](/official/Reference/Core/Declare)

Modules cannot be instantiated and have no `New` constructor. Their **Public** members behave as project-wide globals (subject to the **Public**/**Private** module modifier above).

### Example

```vb
Public Module StringHelpers
    Public Function Reverse(ByVal s As String) As String
        Dim i As Long, r As String
        For i = Len(s) To 1 Step -1
            r = r & Mid$(s, i, 1)
        Next i
        Reverse = r
    End Function

    Public Function StartsWith(ByVal s As String, ByVal prefix As String) As Boolean
        StartsWith = (Left$(s, Len(prefix)) = prefix)
    End Function
End Module
```

Callers reach the members either through the module name or directly:

```vb
Debug.Print StringHelpers.Reverse("hello")  ' "olleh"
Debug.Print StartsWith("hello world", "hi") ' False
```

### See Also

- [**Class** statement](/official/Reference/Core/Class)
- [**Public** statement](/official/Reference/Core/Public)
- [**Private** statement](/official/Reference/Core/Private)
- [**Option** statement](/official/Reference/Core/Option)
- [Class and Module Enhancements](/official/Features/Advanced/Classes-and-Modules)
