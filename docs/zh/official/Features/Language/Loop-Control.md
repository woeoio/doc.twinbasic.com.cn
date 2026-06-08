---
title: "循环控制"
parent: Language Syntax
nav_order: 12
permalink: /Features/Language/Loop-Control
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'edba1e05-af9c-4d95-9b8e-0a3465aa9718'
  PropagateID: 'edba1e05-af9c-4d95-9b8e-0a3465aa9718'
  ReservedCode1: 'e10c5133-0c9f-4501-9109-134b4d7c7e79'
  ReservedCode2: 'e10c5133-0c9f-4501-9109-134b4d7c7e79'
---

# 循环控制

以下新语句可用于控制循环的执行流程：

- `Continue For` - 进入 `For` 循环的下一次迭代（或结束）。
- `Continue While` - 进入 `While` 循环的下一次迭代（或结束）。
- `Continue Do` - 进入 `Do` 循环的下一次迭代。
- `Exit While` - 立即退出 `While` 循环。

## 示例

```vb
Dim i As Long
For i = 1 To 10
    If i Mod 2 = 0 Then Continue For  ' skip even numbers
    If i > 7 Then Exit For            ' stop before reaching 8
    Debug.Print i
Next
' prints: 1, 3, 5, 7
```