---
title: CurrentSourceFile
parent: Compilation Module
permalink: /tB/Modules/Compilation/CurrentSourceFile
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ea9f29f8-22f4-4810-b2a5-25da8c900e1d'
  PropagateID: 'ea9f29f8-22f4-4810-b2a5-25da8c900e1d'
  ReservedCode1: '597474a1-b12b-499b-b9d5-30b5475a6f9b'
  ReservedCode2: '597474a1-b12b-499b-b9d5-30b5475a6f9b'
---

# CurrentSourceFile

以 **String** 形式返回函数被调用时所在源文件的完整路径。

语法：**CurrentSourceFile** [ **()** ]

该值是词汇上包含调用的源文件的绝对路径。

::: info
**CurrentSourceFile** 是编译时内部函数：路径在源代码编译时捕获。它反映的是文件在构建机器上的位置，可能与运行时存在的任何路径不一致。
:::

### 示例

```vb
Public Sub TraceHere()
    Debug.Print "Trace from " & CurrentSourceFile() & " in " & CurrentProcedureName()
End Sub
```

### 另请参阅

- [CurrentComponentName](/official/Reference/VBA/Compilation/CurrentComponentName) 函数
- [CurrentProcedureName](/official/Reference/VBA/Compilation/CurrentProcedureName) 函数
- [CurrentProjectName](/official/Reference/VBA/Compilation/CurrentProjectName) 函数