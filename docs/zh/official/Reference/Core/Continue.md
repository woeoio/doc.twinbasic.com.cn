---
title: Continue
parent: Statements
permalink: /tB/Core/Continue
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e9afbfeb-047e-44e2-a334-2af34da81440'
  PropagateID: 'e9afbfeb-047e-44e2-a334-2af34da81440'
  ReservedCode1: '7d8572d2-5fd9-4059-a5ca-a326ccf9b511'
  ReservedCode2: '7d8572d2-5fd9-4059-a5ca-a326ccf9b511'
---

# Continue

立即开始外层循环的下一次迭代。

语法：**Continue** [ **Do** \| **For** \| **While** ]

Do

: 在 [Do](/official/Reference/Core/Do-Loop) 循环中使用。

For

: 在 [For](/official/Reference/Core/For-Next) 循环中使用。

While

: 在 [While](/official/Reference/Core/While-Wend) 循环中使用

::: info
**Continue** 是twinBASIC扩展。经典VBA中任何循环结构都没有跳过迭代的形式——最接近的等价方式是使用 [**GoTo**](/official/Reference/Core/GoTo) 前向跳转到放置在循环终止符之前的标签。
:::

### 示例

本示例使用 **Continue For** 跳过字符串中某些字符的处理。

```vb
Dim i%, ch$, text$
For i = 1 To 10
    ch = Mid$(text, i, 1)
    If ch = " " Then Continue For
    ' Process a non-space character here
Next i
```