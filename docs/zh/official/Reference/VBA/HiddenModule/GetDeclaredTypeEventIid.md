---
title: GetDeclaredTypeEventIid
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredTypeEventIid
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e55bd6ab-5752-48cb-9109-e82a07708ed9'
  PropagateID: 'e55bd6ab-5752-48cb-9109-e82a07708ed9'
  ReservedCode1: 'fe36219d-bbc0-4c2e-8408-86002a68fa7b'
  ReservedCode2: 'fe36219d-bbc0-4c2e-8408-86002a68fa7b'
---

# GetDeclaredTypeEventIid

返回与已声明类型关联的COM事件接口的IID，在编译时解析。

语法：**GetDeclaredTypeEventIid(Of** *T* **)()** **As String**

*T*
: *必需* 要查询的类型。通常是通过**EventInterfaceId**属性暴露事件的coclass或从类型库导入的类型。

IID以注册表格式返回（`{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`）。查找在编译时进行，结果作为字符串字面值存储在生成的代码中——没有运行时调用。

如果类型没有关联的事件接口，则返回空字符串。

### 另请参阅

- [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid)函数
- [GetDeclaredTypeProgId](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId)函数
- [GetDeclaredTypeClsid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid)函数