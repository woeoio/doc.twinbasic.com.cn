---
title: CurrentComponentName
parent: Compilation Module
permalink: /tB/Modules/Compilation/CurrentComponentName
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b629badb-11e6-4e5e-b37c-873b45833e47'
  PropagateID: 'b629badb-11e6-4e5e-b37c-873b45833e47'
  ReservedCode1: 'ee78071c-b34a-43a4-b1e6-0357b60a7eba'
  ReservedCode2: 'ee78071c-b34a-43a4-b1e6-0357b60a7eba'
---

# CurrentComponentName

以字面 **String** 形式返回当前组件（模块或类）的名称。

语法：**CurrentComponentName** [ **()** ]

该值标识词汇上包含调用点的源单元——**Module**、**Class**、**Form** 或其他组件。

::: info
**CurrentComponentName** 是编译时内部函数：字面字符串在调用点嵌入到编译后的代码中。它在运行时不会改变，即使调用是通过转发或继承的成员到达的。
:::

### 示例

```vb
Public Sub Log(Message As String)
    Debug.Print CurrentComponentName() & ": " & Message
End Sub
```

### 另请参阅

- [CurrentComponentCLSID](/official/Reference/VBA/Compilation/CurrentComponentCLSID) 函数
- [CurrentProcedureName](/official/Reference/VBA/Compilation/CurrentProcedureName) 函数
- [CurrentProjectName](/official/Reference/VBA/Compilation/CurrentProjectName) 函数
- [CurrentSourceFile](/official/Reference/VBA/Compilation/CurrentSourceFile) 函数