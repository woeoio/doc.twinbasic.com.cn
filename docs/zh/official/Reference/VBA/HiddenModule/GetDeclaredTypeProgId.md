---
title: GetDeclaredTypeProgId
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredTypeProgId
---
# GetDeclaredTypeProgId

Returns the COM ProgID associated with a declared type, resolved at compile time.

Syntax: **GetDeclaredTypeProgId(Of** *T* **)()** **As String**

*T*
: *required* The type to query for. Typically a coclass declared with the **CoClassId** attribute or imported from a type library.

The ProgID is the human-readable name (`Application.Object`, `Scripting.Dictionary`, ...) that matches *T*'s CLSID in the registry. The lookup happens at compile time and the result is stored in the generated code as a string literal --- there is no run-time call.

Returns an empty string if the type has no associated ProgID.

### Example

```vb
Dim Id As String = GetDeclaredTypeProgId(Of MyApp.Document)()
Debug.Print Id                       ' "MyApp.Document"
```

### See Also

- [GetDeclaredTypeClsid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid) function
- [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid) function
- [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid) function
