---
title: With
parent: Statements
permalink: /tB/Core/With
---

# With

Executes a series of statements on a single object or a user-defined type.

Syntax:

> **With** _object_  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]  
> **End With**

_object_
: Name of an object or a user-defined type.

_statements_
: _optional_ One or more statements to be executed on _object_.

The **With** statement permits a series of statements on a specified object without requalifying the name of the object. For example, to change a number of different properties on a single object, place the property assignment statements within the **With** control structure, referring to the object once instead of referring to it with each property assignment.

The following example illustrates use of the **With** statement to assign values to several properties of the same object.

```vb
With MyLabel
    .Height = 2000
    .Width = 2000
    .Caption = "This is MyLabel"
End With
```

::: info
Once a **With** block is entered, _object_ can't be changed. As a result, a single **With** statement cannot affect a number of different objects.
:::

**With** statements can be nested by placing one **With** block within another. However, because members of outer **With** blocks are masked within the inner **With** blocks, a fully qualified object reference must be supplied in an inner **With** block to any member of an object in an outer **With** block.

::: warning
Jumping into or out of **With** blocks is not recommended. If statements in a **With** block are executed, but either the **With** or **End With** statement is not executed, a temporary variable containing a reference to the object remains in memory until the procedure exits.
:::

### Example

This example uses the **With** statement to execute a series of statements on a single object. The object and its properties are generic names used for illustration purposes only.

```vb
With MyObject
    .Height = 100 ' Same as MyObject.Height = 100.
    .Caption = "Hello World" ' Same as MyObject.Caption = "Hello World".
    With .Font
        .Color = Red ' Same as MyObject.Font.Color = Red.
        .Bold = True ' Same as MyObject.Font.Bold = True.
    End With
End With
```
