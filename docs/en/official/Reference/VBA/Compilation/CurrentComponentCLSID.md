---
title: CurrentComponentCLSID
parent: Compilation Module
permalink: /tB/Modules/Compilation/CurrentComponentCLSID
---
# CurrentComponentCLSID

Returns the Class ID (CLSID) of the current class as a **String**.

Syntax: **CurrentComponentCLSID** [ **()** ]

The value is the GUID assigned to the enclosing class by its [`[ClassId(...)]`](/en/official/Reference/Core/Attributes#classid) attribute. If no **ClassId** is set, the function returns the all-zero GUID.

::: info
**CurrentComponentCLSID** is a compile-time intrinsic --- the CLSID is read from the class's attributes when the source is compiled, not looked up from the COM registry at run time. It uses special internal bindings and may not behave like an ordinary function.
:::

### Example

```vb
[ClassId("12345678-1234-1234-1234-123456789ABC")]
Class CFoo
    Public Sub PrintId()
        Debug.Print CurrentComponentCLSID()
    End Sub
End Class
```

### See Also

- [CurrentComponentName](/en/official/Reference/VBA/Compilation/CurrentComponentName) function
- [ClassId](/en/official/Reference/Core/Attributes#classid) attribute
