---
title: vbaObjSetAddref
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaObjSetAddref
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'feb38b1e-40c1-4e1d-b50d-cad5c00a5bbb'
  PropagateID: 'feb38b1e-40c1-4e1d-b50d-cad5c00a5bbb'
  ReservedCode1: '33daaaee-3137-4ef6-a98d-00a1954fe844'
  ReservedCode2: '33daaaee-3137-4ef6-a98d-00a1954fe844'
---

# vbaObjSetAddref

Assigns a raw object pointer to an **Object** variable, addrefing the new pointer and releasing any prior reference.

Syntax: **vbaObjSetAddref(** *DstObject* **,** *SrcObjPtr* **)** **As LongPtr**

*DstObject*
: *required* **IUnknown**. The variable to receive the pointer. Any prior reference is released.

*SrcObjPtr*
: *required* **LongPtr**. The pointer to the COM object that *DstObject* should refer to. **IUnknown::AddRef** is called on the pointer.

This is the copy-with-addref primitive --- equivalent to a regular `Set DstObject = obj` when *obj* is held only as a raw **LongPtr**.

The return value mirrors the assigned pointer.

### See Also

- [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet) function -- move-without-addref counterpart
- [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) procedure
- [ObjPtr](/official/Reference/VBA/Information/ObjPtr) function

> AI生成