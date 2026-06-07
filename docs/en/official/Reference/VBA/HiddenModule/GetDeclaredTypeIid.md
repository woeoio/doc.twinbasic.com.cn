---
title: GetDeclaredTypeIid
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredTypeIid
---
# GetDeclaredTypeIid

Returns the COM interface IID associated with a declared type, resolved at compile time.

Syntax: **GetDeclaredTypeIid(Of** *T* **)()** **As String**

*T*
: *required* The type to query for. Typically an interface declared with the **InterfaceId** attribute or imported from a type library.

The IID is returned in registry format (`{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`). The lookup happens at compile time and the result is stored in the generated code as a string literal --- there is no run-time call.

Useful when calling [**vbaCastObj**](/en/official/Reference/VBA/HiddenModule/vbaCastObj) or any API that takes an interface IID as a string.

### Example

```vb
Dim Iid As String = GetDeclaredTypeIid(Of stdole.IPicture)()
Dim AsPic As IUnknown = vbaCastObj(SomeObj, Iid)
```

### See Also

- [GetDeclaredTypeProgId](/en/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId) function
- [GetDeclaredTypeClsid](/en/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid) function
- [GetDeclaredTypeEventIid](/en/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid) function
- [vbaCastObj](/en/official/Reference/VBA/HiddenModule/vbaCastObj) function
