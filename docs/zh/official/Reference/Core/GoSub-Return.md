---
title: GoSub ... Return
parent: Statements
permalink: /tB/Core/GoSub-Return
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '066c2bcf-aa2b-4cf2-bf92-008088f06b98'
  PropagateID: '066c2bcf-aa2b-4cf2-bf92-008088f06b98'
  ReservedCode1: 'a74ad9b4-b42c-4ad8-8137-0153d484a062'
  ReservedCode2: 'a74ad9b4-b42c-4ad8-8137-0153d484a062'
---

# GoSub ... Return

在过程中分支到子程序并从中返回。

语法：
> **GoSub** *line*  
> &nbsp;&nbsp;&nbsp;&nbsp; ...  
> *line*  
> &nbsp;&nbsp;&nbsp;&nbsp; ...  
> &nbsp;&nbsp;&nbsp;&nbsp; **Return**

*line*
: 任何行标签或行号。

可以在过程中的任何位置使用 **GoSub** 和 **Return**，但 **GoSub** 和对应的 **Return** 语句必须在同一过程中。子程序可以包含多个 **Return** 语句，但遇到第一个 **Return** 语句时，执行流程将分支回最近执行的 **GoSub** 语句之后紧接的语句。

::: info
**GoSub...Return** 不能进入或退出 [**Sub**](/official/Reference/Core/Sub) 过程。
:::

::: tip
创建单独的可调用过程可能比使用 **GoSub...Return** 提供更具结构化的替代方案。
:::

### 示例

本示例使用 **GoSub** 在 **Sub** 过程内调用子程序。**Return** 语句使执行恢复到 **GoSub** 语句之后紧接的语句。[**Exit Sub**](/official/Reference/Core/Exit) 语句用于防止控制意外流入子程序。

```vb
Sub GosubDemo()
    Dim Num
    ' Solicit a number from the user.
    Num = InputBox("Enter a positive number to be divided by 2.")
    ' Only use routine if user enters a positive number.
    If Num > 0 Then GoSub MyRoutine
    Debug.Print Num
    Exit Sub ' Use Exit to prevent an error.
MyRoutine:
    Num = Num / 2 ' Perform the division.
    Return ' Return control to statement following the GoSub statement.
End Sub
```

### 另请参阅

- [**Return** 语句](/official/Reference/Core/Return)
- [**GoTo** 语句](/official/Reference/Core/GoTo)
- [**On...GoSub** 语句](/official/Reference/Core/On-GoSub)
- [**Sub** 语句](/official/Reference/Core/Sub)