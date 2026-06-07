---
title: vbaObjAddref
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaObjAddref
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '097047c1-fa3a-4cec-b55a-d11f1e027941'
  PropagateID: '097047c1-fa3a-4cec-b55a-d11f1e027941'
  ReservedCode1: '1fab06e3-ea8d-4b76-8ef6-5a7b16f2db61'
  ReservedCode2: '1fab06e3-ea8d-4b76-8ef6-5a7b16f2db61'
---

# vbaObjAddref

Calls **IUnknown::AddRef** on the COM object at a given address.

Syntax: **vbaObjAddref** *Address*

*Address*
: *required* **LongPtr**. The address of an **IUnknown**-derived COM object --- typically the value returned by [**ObjPtr**](/en/official/Reference/VBA/Information/ObjPtr).

The reference count of the object is incremented by one. The runtime does not validate that *Address* points at a real COM object; an invalid pointer will crash the host.

This is a low-level primitive. Ordinary code does not need it --- assigning to an **Object** variable already addrefs.

### See Also

- [vbaObjSet](/en/official/Reference/VBA/HiddenModule/vbaObjSet) function
- [vbaObjSetAddref](/en/official/Reference/VBA/HiddenModule/vbaObjSetAddref) function
- [ObjPtr](/en/official/Reference/VBA/Information/ObjPtr) function

> AI生成