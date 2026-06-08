---
title: GetDeclaredTypeIid
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredTypeIid
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '68f73d42-2d41-493d-bd08-ff7e22539a3e'
  PropagateID: '68f73d42-2d41-493d-bd08-ff7e22539a3e'
  ReservedCode1: '42708658-006d-463d-abe7-09b9f0d6c345'
  ReservedCode2: '42708658-006d-463d-abe7-09b9f0d6c345'
---

# GetDeclaredTypeIid

返回与已声明类型关联的COM接口IID，在编译时解析。

语法：**GetDeclaredTypeIid(Of** *T* **)()** **As String**

*T*
: *必需* 要查询的类型。通常是使用**InterfaceId**属性声明的接口或从类型库导入的类型。

IID以注册表格式返回（`{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`）。查找在编译时进行，结果作为字符串字面值存储在生成的代码中——没有运行时调用。

在调用[**vbaCastObj**](/official/Reference/VBA/HiddenModule/vbaCastObj)或任何以接口IID字符串为参数的API时非常有用。

### 示例

```vb
Dim Iid As String = GetDeclaredTypeIid(Of stdole.IPicture)()
Dim AsPic As IUnknown = vbaCastObj(SomeObj, Iid)
```

### 另请参阅

- [GetDeclaredTypeProgId](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId)函数
- [GetDeclaredTypeClsid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid)函数
- [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid)函数
- [vbaCastObj](/official/Reference/VBA/HiddenModule/vbaCastObj)函数