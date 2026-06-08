---
title: GetDeclaredTypeClsid
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredTypeClsid
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4d70b958-15a8-46e1-9671-4fcda53d19eb'
  PropagateID: '4d70b958-15a8-46e1-9671-4fcda53d19eb'
  ReservedCode1: 'c5d0413d-fdd9-46f0-abf3-df14da41bdb7'
  ReservedCode2: 'c5d0413d-fdd9-46f0-abf3-df14da41bdb7'
---

# GetDeclaredTypeClsid

返回与已声明类型关联的COM CLSID（类标识符），在编译时解析。

语法：**GetDeclaredTypeClsid(Of** *T* **)()** **As String**

*T*
: *必需* 要查询的类型。通常是使用**CoClassId**属性声明的coclass或从类型库导入的类型。

CLSID以注册表格式返回（`{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`）。查找在编译时进行，结果作为字符串字面值存储在生成的代码中——没有运行时调用。

如果类型没有关联的CLSID，则返回空字符串。

### 另请参阅

- [GetDeclaredTypeProgId](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId)函数
- [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid)函数
- [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid)函数