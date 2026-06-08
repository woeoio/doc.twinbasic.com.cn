---
title: "内联变量初始化"
parent: Language Syntax
nav_order: 14
permalink: /Features/Language/Inline-Initialization
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a748928d-220c-4a61-9053-fc70eac0323c'
  PropagateID: 'a748928d-220c-4a61-9053-fc70eac0323c'
  ReservedCode1: 'a253e43f-08d7-4396-a44a-8ac044aadc5e'
  ReservedCode2: 'a253e43f-08d7-4396-a44a-8ac044aadc5e'
---

# 内联变量初始化

你现在可以为变量内联设置初始值，无需续行符。

## 示例

```vb
Dim i As Long = 1
Dim foo As Boolean = bar()
Dim arr As Variant = Array(1, 2, 3)
Dim strArr(2) As String = Array("a", "b", "c")
Dim cMC As cMyClass = New cMyClass(customConstructorArgs)
```

## For 循环的内联变量声明

你现在不再需要为计数器变量单独写 `Dim` 语句：

```vb
For i As Long = 0 To 10
    '...
Next
```

现在是有效语法。你可以使用任何类型，不只是 `Long`。