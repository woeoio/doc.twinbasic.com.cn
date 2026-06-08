---
title: ObjPtr
parent: Information Module
permalink: /tB/Modules/Information/ObjPtr
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "bfd88893-cb8e-4941-8576-c7d09db45aba"
  PropagateID: "bfd88893-cb8e-4941-8576-c7d09db45aba"
  ReservedCode1: "b29acc66-e19f-489d-aa76-ba6edb6c38f1"
  ReservedCode2: "b29acc66-e19f-489d-aa76-ba6edb6c38f1"
---

# ObjPtr

Returns the COM-identity address of an object as a **LongPtr**.

Syntax: **ObjPtr(** _Object_ **)**

_Object_
: _required_ The object reference whose pointer is to be obtained. The argument is taken as **IUnknown**.

The returned value is the address of the object's **IUnknown** vtable --- the same value the COM runtime uses to test object identity. Two **Object** variables refer to the same instance if and only if their **ObjPtr** values are equal.

The pointer is valid only as long as the underlying object stays alive; nothing about taking **ObjPtr** holds a reference. Pass the result to API functions that need a raw object address, or store it for an identity check, but do not assume it remains meaningful after the last reference is released.

### Example

```vb
Dim a As Collection
Dim b As Collection
Set a = New Collection
Set b = a
Debug.Print ObjPtr(a) = ObjPtr(b)   ' True — same instance.

Set b = New Collection
Debug.Print ObjPtr(a) = ObjPtr(b)   ' False — different instances.
```

### See Also

- [StrPtr](/en/official/Reference/VBA/Information/StrPtr) function
- [VarPtr](/en/official/Reference/VBA/Information/VarPtr) function
