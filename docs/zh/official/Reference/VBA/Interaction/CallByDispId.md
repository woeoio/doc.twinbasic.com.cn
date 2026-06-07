---
title: CallByDispId
parent: Interaction Module
permalink: /tB/Modules/Interaction/CallByDispId
---
# CallByDispId

Calls a method, or reads or writes a property, on an object --- looked up by raw IDispatch dispatch ID at run time. **CallByDispId** is a twinBASIC addition; the by-name variant, [**CallByName**](/official/Reference/VBA/Interaction/CallByName), exists in VBA as well.

Syntax: **CallByDispId(** *object* **,** *dispid* **,** *calltype* [ **,** *args* ... ] **)**

*object*
: *required* **Object**. The object whose member is to be invoked.

*dispid*
: *required* **Long**. The IDispatch dispatch ID (`DISPID`) of the method or property to invoke.

*calltype*
: *required* A [**VbCallType**](/official/Reference/VBA/Constants/VbCallType) value indicating the kind of member: `vbMethod`, `vbGet`, `vbLet`, or `vbSet`.

*args*
: *optional* The arguments to pass to the method, **Property Get**, **Property Let**, or **Property Set**.

The return value is a **Variant** containing whatever the call returned. For methods that return nothing, or for property assignments, the result is **Empty**.

**CallByDispId** skips the name lookup that [**CallByName**](/official/Reference/VBA/Interaction/CallByName) performs, which is useful in two situations: when the dispatch ID is already known and the cost of a `GetIDsOfNames` round trip should be avoided, and when the target member is not exposed by name (e.g. a default member with `DISPID_VALUE = 0`, an explicit-DISPID extension, or a hidden/restricted member).

### Example

This example invokes the default member of an object --- `DISPID_VALUE`, defined as 0 --- by dispatch ID.

```vb
Const DISPID_VALUE As Long = 0

Dim Result As Variant
Result = CallByDispId(SomeObject, DISPID_VALUE, vbGet)
```

### See Also

- [CallByName](/official/Reference/VBA/Interaction/CallByName) function
- [VbCallType](/official/Reference/VBA/Constants/VbCallType) enumeration
