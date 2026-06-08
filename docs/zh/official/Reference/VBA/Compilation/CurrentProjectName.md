---
title: CurrentProjectName
parent: Compilation Module
permalink: /tB/Modules/Compilation/CurrentProjectName
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0ed19da9-cb28-4f70-b735-e2c94c2a4a27'
  PropagateID: '0ed19da9-cb28-4f70-b735-e2c94c2a4a27'
  ReservedCode1: '77ef058f-a41b-47c1-bbf6-0c3b69464dd6'
  ReservedCode2: '77ef058f-a41b-47c1-bbf6-0c3b69464dd6'
---

# CurrentProjectName

以字面 **String** 形式返回当前项目的名称。

语法：**CurrentProjectName** [ **()** ]

该值是拥有调用点的项目（可执行文件或库）的名称。

::: info
**CurrentProjectName** 是编译时内部函数——字面字符串在调用点从项目的元数据嵌入到编译后的代码中。
:::

### 示例

```vb
Dim ProjectName As String
ProjectName = CurrentProjectName()
Debug.Print "Running in project: " & ProjectName
```

### 另请参阅

- [CurrentComponentName](/official/Reference/VBA/Compilation/CurrentComponentName) 函数
- [CurrentProcedureName](/official/Reference/VBA/Compilation/CurrentProcedureName) 函数
- [CurrentSourceFile](/official/Reference/VBA/Compilation/CurrentSourceFile) 函数