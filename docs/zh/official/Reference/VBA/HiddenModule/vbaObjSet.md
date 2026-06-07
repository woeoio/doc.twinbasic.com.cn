---
title: vbaObjSet
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaObjSet
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9d9a0e19-930e-4d2f-b360-fd60e8670b95'
  PropagateID: '9d9a0e19-930e-4d2f-b360-fd60e8670b95'
  ReservedCode1: '2d89e18f-be5b-4a35-9747-0f23caa2e8ca'
  ReservedCode2: '2d89e18f-be5b-4a35-9747-0f23caa2e8ca'
---

# vbaObjSet

Assigns a raw object pointer to an **Object** variable, taking ownership of the existing reference without addrefing.

Syntax: **vbaObjSet(** *DstObject* **,** *SrcObjPtr* **)** **As LongPtr**

*DstObject*
: *required* **IUnknown**. The variable to receive the pointer. Any prior reference is released.

*SrcObjPtr*
: *required* **LongPtr**. The pointer to the COM object that *DstObject* should refer to. The pointer's existing reference count is **not** incremented.

This is the move-without-addref primitive --- used to wrap a freshly-handed-out raw pointer (from a Win32 `IUnknown**` out-parameter, for example) into an **Object** variable without leaking a reference.

The return value mirrors the assigned pointer.

### See Also

- [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref) function -- copy-with-addref counterpart
- [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) procedure
- [ObjPtr](/official/Reference/VBA/Information/ObjPtr) function

> AI生成