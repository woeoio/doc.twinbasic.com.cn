---
title: "While...Wend"
parent: Statements
permalink: /tB/Core/While-Wend
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1d5a0e78-694f-402a-a290-89c3549c37a9'
  PropagateID: '1d5a0e78-694f-402a-a290-89c3549c37a9'
  ReservedCode1: '9bbca938-bd1d-4873-aff0-8cbeb7a2a386'
  ReservedCode2: '9bbca938-bd1d-4873-aff0-8cbeb7a2a386'
---

# While...Wend

只要给定条件为**True**，就执行一系列语句。

语法：

> **While** *condition*  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]  
> **Wend**

*condition*
: 计算结果为**True**或**False**的数值表达式或字符串表达式。如果*condition*为Null，则*condition*被视为**False**。

*statements*
: *可选* 当*condition*为**True**时执行的一个或多个语句。

如果*condition*为**True**，则执行所有*statements*直到遇到**Wend**语句。然后控制返回到**While**语句并再次检查*condition*。如果*condition*仍为**True**，则重复该过程。如果不为**True**，执行从**Wend**语句之后的语句继续。

**While...Wend**循环可以嵌套到任意层级。每个**Wend**匹配最近的**While**。

可以在**While...Wend**循环中的任何位置放置任意数量的[**Exit While**](/official/Reference/Core/Exit)语句作为提前退出的方式。**Exit While**通常在评估某些条件后使用，此时它将控制转移到**Wend**之后紧接着的语句。

可以在**While...Wend**循环中的任何位置放置任意数量的[**Continue While**](/official/Reference/Core/Continue)语句来跳过其余语句并继续下一次迭代。

::: info
**Exit While**和**Continue While**是twinBASIC扩展。经典VBA没有**While...Wend**循环的提前退出或跳过迭代形式。
:::

::: tip
[**Do...Loop**](/official/Reference/Core/Do-Loop)语句提供了更结构化、更灵活的循环方式。
:::

### 示例

本示例使用**While...Wend**语句递增计数器变量。只要条件计算为**True**，循环中的语句就会执行。

```vb
Dim Counter
Counter = 0 ' Initialize variable.
While Counter < 20 ' Test value of Counter.
    Counter = Counter + 1 ' Increment Counter.
Wend ' End While loop when Counter > 19.
Debug.Print Counter ' Prints 20 in the Immediate window.
```

### 另请参阅

- [**Do...Loop** 语句](/official/Reference/Core/Do-Loop)
- [**For...Next** 语句](/official/Reference/Core/For-Next)