---
title: Class
parent: Statements
permalink: /tB/Core/Class
---

# Class


Defines a class. Classes are templates from which objects are created --- classes are object types, as opposed to value types. Objects are held by reference and are reference-counted. The memory an object occupies is freed when there are no more references to it --- when no variables in the process refer to them.

Syntax:

> [ *attributes* ]  
> [ **Public** \| **Private** ] **Class** *name* [ **(** **Of** *typevars* **)** ]  
> &nbsp;&nbsp;&nbsp;&nbsp;[ **Inherits** *baseclass* ]  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *classmember* ]  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *classmember* ] ...  
> **End Class**

*attributes*
: *optional* One or more of:  
[ArrayBoundsChecks](/official/Reference/Attributes#arrayboundschecks), [ClassId](/official/Reference/Attributes#classid), [COMCreatable](/official/Reference/Attributes#comcreatable), [CustomControl](/official/Reference/Attributes#customcontrol), [Description](/official/Reference/Attributes#description), [FloatingPointErrorChecks](/official/Reference/Attributes#floatingpointerrorchecks), [FormDesignerId](/official/Reference/Attributes#formdesignerid), [Hidden](/official/Reference/Attributes#hidden), [IntegerOverflowChecks](/official/Reference/Attributes#integeroverflowchecks), [PredeclaredID](/official/Reference/Attributes#predeclaredid)

**Public**
: *optional* (twinBASIC) In an ActiveX project, marks the class as exported into the type library so that consumers in other projects can create and use it.

**Private**
: *optional* (twinBASIC) In an ActiveX project, withholds the class from the type library: it remains usable within the project but is not exported. The conventional pairing with [**CoClass**](/official/Reference/Core/CoClass) --- a public **CoClass** as the consumer-visible contract paired with a `Private Class` as the hidden implementation --- relies on this modifier.

*name*
: The identifier naming the class.

**Of** *typevars*
: *optional* (twinBASIC) One or more type variable names, separated by commas, that make the class a *generic class*. Each type variable can be referenced in member declarations as if it were a regular type. See [Generics](/official/Features/Language/Generics).

**Inherits** *baseclass*
: *optional* (twinBASIC) Names a single base class whose **Public** and [**Protected**](/official/Reference/Core/Protected) members are inherited by *name*. The **Inherits** line, when present, must appear immediately after the **Class** header and before any other member. **Inherits** enables [**Overridable**](/official/Reference/Core/Sub) / **Overrides** members, explicit `*baseclass*.New(...)` chained constructor calls from inside `Sub New`, and **Protected** member visibility. See [Inheritance](/official/Features/Language/Inheritance).

*classmember*
: *optional* Any of the following:

  - [constant](/official/Reference/Glossary#constant) defined using [**Const**](/official/Reference/Core/Const),
  - [variable](/official/Reference/Glossary#variable) defined using [**Public**](/official/Reference/Core/Public), [**Protected**](/official/Reference/Core/Protected), [**Private**](/official/Reference/Core/Private), or [**Dim**](/official/Reference/Core/Dim),
  - [procedure](/official/Reference/Glossary#procedure) defined using [**Sub**](/official/Reference/Core/Sub), [**Function**](/official/Reference/Core/Function), or [**Property**](/official/Reference/Core/Property) --- including the special instance constructor `Sub New(`*args*`)`, which the runtime invokes when the class is created with [**New**](/official/Reference/Core/New),
  - [user-defined type (UDTs)](/official/Reference/Glossary#user-defined-type) defined using [**Type**](/official/Reference/Core/Type),
  - (twinBASIC) [**Implements**](/official/Reference/Core/Implements) clauses, listing interfaces or classes whose members this class provides bodies for.

In `.twin` files, a **Class** block may share a file with [**Interface**](/official/Reference/Core/Interface), [**CoClass**](/official/Reference/Core/CoClass), and [**Alias**](/official/Reference/Core/Alias) declarations (which appear *before* the **Class** block) and with a [**Module**](/official/Reference/Core/Module) block. In legacy `.cls` files the class is implicit and the **Class**/**End Class** keywords are not written.

### See Also

- [**Module** statement](/official/Reference/Core/Module)
- [**Interface** statement](/official/Reference/Core/Interface)
- [**CoClass** statement](/official/Reference/Core/CoClass)
- [**Implements** statement](/official/Reference/Core/Implements)
- [**Protected** statement](/official/Reference/Core/Protected)
- [**New** statement](/official/Reference/Core/New)
- [Inheritance](/official/Features/Language/Inheritance)
- [Generics](/official/Features/Language/Generics)
