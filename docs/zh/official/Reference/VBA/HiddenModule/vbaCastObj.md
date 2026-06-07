---
title: vbaCastObj
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaCastObj
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '060cae57-92ab-43b8-a4d2-e333eebc820c'
  PropagateID: '060cae57-92ab-43b8-a4d2-e333eebc820c'
  ReservedCode1: 'b1b05775-34bf-4bb2-8a3b-a156907ec329'
  ReservedCode2: 'b1b05775-34bf-4bb2-8a3b-a156907ec329'
---

# vbaCastObj

Returns an object reinterpreted as another COM interface, given its IID, or **Nothing** if the object does not implement that interface.

Syntax: **vbaCastObj(** *Obj* **,** *IID* **)** **As IUnknown**

*Obj*
: *required* **stdole.IUnknown**. The object to cast.

*IID*
: *required* **Any**. The interface ID to query for --- accepted as a 16-byte **GUID** structure or as a **String** in registry format (`{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`).

A direct wrapper over **IUnknown::QueryInterface**: the object is asked whether it implements the requested interface, and if so a reference to that interface is returned. If not, **Nothing** is returned.

### Example

```vb
Const IID_IPicture As String = "{7BF80980-BF32-101A-8BBB-00AA00300CAB}"

Dim Pic As Object = LoadPicture("logo.bmp")
Dim AsPicture As IUnknown = vbaCastObj(Pic, IID_IPicture)
If Not AsPicture Is Nothing Then
    ' Use AsPicture as an IPicture.
End If
```

### See Also

- [ObjPtr](/official/Reference/VBA/Information/ObjPtr) function
- [CreateGUID](/official/Reference/VBA/HiddenModule/CreateGUID) function

> AI生成