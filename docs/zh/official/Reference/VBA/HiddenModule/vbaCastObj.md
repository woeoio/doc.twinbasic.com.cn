---
title: vbaCastObj
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaCastObj
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '792a2d37-a70c-4ace-befa-a1e4067c3ae8'
  PropagateID: '792a2d37-a70c-4ace-befa-a1e4067c3ae8'
  ReservedCode1: 'c68facc5-897e-41ca-9f25-8f1194d34613'
  ReservedCode2: 'c68facc5-897e-41ca-9f25-8f1194d34613'
---

# vbaCastObj

根据给定的IID，返回重新解释为另一个COM接口的对象，如果对象未实现该接口则返回**Nothing**。

语法：**vbaCastObj(** *Obj* **,** *IID* **)** **As IUnknown**

*Obj*
: *必需* **stdole.IUnknown**。要转换的对象。

*IID*
: *必需* **Any**。要查询的接口ID——接受为16字节的**GUID**结构或注册表格式的**String**（`{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`）。

这是**IUnknown::QueryInterface**的直接封装：询问对象是否实现了请求的接口，如果实现了则返回该接口的引用。如果没有，则返回**Nothing**。

### 示例

```vb
Const IID_IPicture As String = "{7BF80980-BF32-101A-8BBB-00AA00300CAB}"

Dim Pic As Object = LoadPicture("logo.bmp")
Dim AsPicture As IUnknown = vbaCastObj(Pic, IID_IPicture)
If Not AsPicture Is Nothing Then
    ' Use AsPicture as an IPicture.
End If
```

### 另请参阅

- [ObjPtr](/official/Reference/VBA/Information/ObjPtr)函数
- [CreateGUID](/official/Reference/VBA/HiddenModule/CreateGUID)函数