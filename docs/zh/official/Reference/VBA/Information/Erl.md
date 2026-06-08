---
title: Erl
parent: Information Module
permalink: /tB/Modules/Information/Erl
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'af2a47a4-30f2-4a01-905c-13f462443fb8'
  PropagateID: 'af2a47a4-30f2-4a01-905c-13f462443fb8'
  ReservedCode1: '7dc75e57-488e-4ddf-8ded-dbd7e1105b56'
  ReservedCode2: '7dc75e57-488e-4ddf-8ded-dbd7e1105b56'
---

# Erl

返回一个**Long**，包含引发运行时错误的最近执行语句的行号。

语法：**Erl** [ **()** ]

*行号*是语句前缀的数字标签，例如`110:`在`110: x = 1 / 0`中。它们是旧版Basic方言的遗留特性，保留主要是为了让错误处理程序能报告故障发生的位置。当错误在标记语句内引发时，**Erl**设置为该标签，当活动错误处理程序通过**Resume**、**Resume Next**或任何**Exit**语句退出时，**Erl**重置为**0**。

如果引发错误的语句没有前面的行号，**Erl**返回**0**。

### 示例

本示例使用**Erl**记录引发运行时错误的行号。

```vb
Sub Demo()
    On Error GoTo Handler
100:    Dim x As Double
110:    x = 1 / 0                      ' Generates a division-by-zero error.
        Exit Sub
Handler:
        Debug.Print "Error at line "; Erl    ' Prints "Error at line  110".
End Sub
```

### 另请参阅

- [Err](/official/Reference/VBA/Information/Err)属性
- [On Error](/official/Reference/Core/On-Error)语句