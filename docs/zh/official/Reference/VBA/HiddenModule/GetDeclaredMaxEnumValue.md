---
title: GetDeclaredMaxEnumValue
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredMaxEnumValue
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2926434a-20aa-4c08-bd75-a19c53c0dea3'
  PropagateID: '2926434a-20aa-4c08-bd75-a19c53c0dea3'
  ReservedCode1: 'f903ec8a-c06f-451c-9e2f-2df30408f21a'
  ReservedCode2: 'f903ec8a-c06f-451c-9e2f-2df30408f21a'
---

# GetDeclaredMaxEnumValue

返回已声明枚举类型的最大成员值，在编译时解析。

语法：**GetDeclaredMaxEnumValue(Of** *T* **)()** **As Long**

*T*
: *必需* 要查询的枚举类型。

遍历*T*的成员并返回最高的赋值。在编译时解析，并作为数值常量折叠到生成的代码中——没有运行时遍历。

### 另请参阅

- [GetDeclaredMinEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMinEnumValue)函数