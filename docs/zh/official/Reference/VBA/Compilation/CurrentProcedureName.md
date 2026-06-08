---
title: CurrentProcedureName
parent: Compilation Module
permalink: /tB/Modules/Compilation/CurrentProcedureName
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd54cc2b5-4e21-4950-b542-c3a531c5d415'
  PropagateID: 'd54cc2b5-4e21-4950-b542-c3a531c5d415'
  ReservedCode1: '7ce48f2a-54fe-4e5a-98f8-89ebd724ebe4'
  ReservedCode2: '7ce48f2a-54fe-4e5a-98f8-89ebd724ebe4'
---

# CurrentProcedureName

以字面 **String** 形式返回函数被调用时所在过程的名称。

语法：**CurrentProcedureName** [ **()** ]

该值是词汇上包含调用的 **Sub**、**Function** 或 **Property** 的名称。

::: info
**CurrentProcedureName** 是编译时内部函数：字面字符串在源代码编译时确定，来自包围调用的过程。它不是从运行时调用栈派生的——将调用包装在辅助函数中会记录辅助函数的名称，而非原始调用者的名称。
:::

### 示例

```vb
Public Sub DoWork()
    Debug.Print CurrentProcedureName()    ' Prints "DoWork"
End Sub
```

### 另请参阅

- [CurrentComponentName](/official/Reference/VBA/Compilation/CurrentComponentName) 函数
- [CurrentProjectName](/official/Reference/VBA/Compilation/CurrentProjectName) 函数
- [CurrentSourceFile](/official/Reference/VBA/Compilation/CurrentSourceFile) 函数