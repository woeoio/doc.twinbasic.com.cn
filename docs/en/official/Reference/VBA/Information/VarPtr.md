---
title: VarPtr
parent: Information Module
permalink: /tB/Modules/Information/VarPtr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7a4fc3a6-a61a-4cfb-84c1-e7415b032c4b'
  PropagateID: '7a4fc3a6-a61a-4cfb-84c1-e7415b032c4b'
  ReservedCode1: '4475ee97-926c-4c36-8a03-1cf62db087ad'
  ReservedCode2: '4475ee97-926c-4c36-8a03-1cf62db087ad'
---

# VarPtr

Returns the address of a variable as a **LongPtr**.

Syntax: **VarPtr(** *Var* **)**

*Var*
: *required* The variable whose pointer is to be obtained. Any type is accepted.

The returned address is the storage location of *Var* itself --- the same place the runtime would write to for an assignment. For a numeric or fixed-length type the value of the variable lives at that address; for a **String** or **Variant** the value at the address is the variable's BSTR pointer or **VARIANT** descriptor.

Pass the result to an API function that needs a raw address, or pass it to one of the [**GetMem**\* / **PutMem**\*](/en/official/Reference/VBA/HiddenModule/) helpers to read or write the underlying bytes. The pointer is valid only for as long as *Var* is alive in its scope; locals, arguments, and elements of expanded arrays can move when their owning frame or array is reallocated.

### Example

```vb
Dim n As Long
n = &H12345678

Dim Bytes(0 To 3) As Byte
vbaCopyBytes 4, VarPtr(Bytes(0)), VarPtr(n)
Debug.Print Hex(Bytes(0))        ' "78" — little-endian
```

### See Also

- [ObjPtr](/en/official/Reference/VBA/Information/ObjPtr) function
- [StrPtr](/en/official/Reference/VBA/Information/StrPtr) function

> AI生成