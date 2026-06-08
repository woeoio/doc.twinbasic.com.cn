---
title: GetDeclaredMinEnumValue
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetDeclaredMinEnumValue
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '88d58991-a3c1-4f95-850a-8ae145e5d561'
  PropagateID: '88d58991-a3c1-4f95-850a-8ae145e5d561'
  ReservedCode1: '2f859865-eb5e-47db-b7b1-a2de5b323bf6'
  ReservedCode2: '2f859865-eb5e-47db-b7b1-a2de5b323bf6'
---

# GetDeclaredMinEnumValue

返回已声明枚举类型的最小成员值，在编译时解析。

语法：**GetDeclaredMinEnumValue(Of** *T* **)()** **As Long**

*T*
: *必需* 要查询的枚举类型。

遍历*T*的成员并返回最低的赋值。在编译时解析，并作为数值常量折叠到生成的代码中——没有运行时遍历。

### 示例

```vb
Enum Severity
    Trace = 0
    Debug = 1
    Info = 2
    Warning = 3
    Error = 4
End Enum

Debug.Print GetDeclaredMinEnumValue(Of Severity)()    ' 0
Debug.Print GetDeclaredMaxEnumValue(Of Severity)()    ' 4
```

### 另请参阅

- [GetDeclaredMaxEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue)函数