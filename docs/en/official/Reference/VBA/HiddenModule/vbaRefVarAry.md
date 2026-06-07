---
title: vbaRefVarAry
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaRefVarAry
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f8b0574f-b62a-4291-b403-b139a32d0f4a'
  PropagateID: 'f8b0574f-b62a-4291-b403-b139a32d0f4a'
  ReservedCode1: 'df036e5d-aeb9-40c6-ae6e-1912f3adbc97'
  ReservedCode2: 'df036e5d-aeb9-40c6-ae6e-1912f3adbc97'
---

# vbaRefVarAry

Returns a pointer to the **SAFEARRAY** descriptor stored inside a **Variant** array.

Syntax: **vbaRefVarAry(** *Variant* **)** **As LongPtr**

*Variant*
: *required* A **Variant** that contains an array, passed by reference.

The returned address is the location of the **SAFEARRAY*** field inside the **Variant** --- that is, the dereference yields the **SAFEARRAY** pointer that the **Variant** wraps. Useful when calling Win32 APIs that expect to receive or fill a **SAFEARRAY** through a `VARIANT*` argument.

If *Variant* does not contain an array, the result is undefined.

### Example

This example retrieves the address of the **SAFEARRAY** descriptor inside a **Variant** array.

```vb
Dim v As Variant
v = Array(10, 20, 30)          ' Variant holding an array
Dim pSAPtr As LongPtr
pSAPtr = vbaRefVarAry(v)       ' address of the SAFEARRAY* field in v
Dim pSA As LongPtr
GetMemPtr pSAPtr, pSA          ' dereference: pSA is the SAFEARRAY pointer
```

### See Also

- [VarPtr](/en/official/Reference/VBA/Information/VarPtr) function
- [vbaAryMove](/en/official/Reference/VBA/HiddenModule/vbaAryMove) procedure

> AI生成