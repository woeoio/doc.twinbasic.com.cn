---
title: GetDeclaredTypeProgId
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredTypeProgId
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '907bd7fa-5a29-4e07-9ce6-a7ecd4a9f963'
  PropagateID: '907bd7fa-5a29-4e07-9ce6-a7ecd4a9f963'
  ReservedCode1: 'f2097637-84c2-4444-a0e1-87166946ab3a'
  ReservedCode2: 'f2097637-84c2-4444-a0e1-87166946ab3a'
---

# GetDeclaredTypeProgId

返回与已声明类型关联的COM ProgID，在编译时解析。

语法：**GetDeclaredTypeProgId(Of** *T* **)()** **As String**

*T*
: *必需* 要查询的类型。通常是使用**CoClassId**属性声明的coclass或从类型库导入的类型。

ProgID是可读名称（`Application.Object`、`Scripting.Dictionary`等），在注册表中与*T*的CLSID匹配。查找在编译时进行，结果作为字符串字面值存储在生成的代码中——没有运行时调用。

如果类型没有关联的ProgID，则返回空字符串。

### 示例

```vb
Dim Id As String = GetDeclaredTypeProgId(Of MyApp.Document)()
Debug.Print Id                       ' "MyApp.Document"
```

### 另请参阅

- [GetDeclaredTypeClsid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid)函数
- [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid)函数
- [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid)函数