---
title: GetDeclaredTypeClsid
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredTypeClsid
---
# GetDeclaredTypeClsid

Returns the COM CLSID (class identifier) associated with a declared type, resolved at compile time.

Syntax: **GetDeclaredTypeClsid(Of** *T* **)()** **As String**

*T*
: *required* The type to query for. Typically a coclass declared with the **CoClassId** attribute or imported from a type library.

The CLSID is returned in registry format (`{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`). The lookup happens at compile time and the result is stored in the generated code as a string literal --- there is no run-time call.

Returns an empty string if the type has no associated CLSID.

### See Also

- [GetDeclaredTypeProgId](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId) function
- [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid) function
- [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid) function
