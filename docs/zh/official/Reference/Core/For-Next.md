---
title: For...Next
parent: Statements
permalink: /tB/Core/For-Next
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8d1ebb8c-b4d9-4bc1-beba-d57a77f11f14'
  PropagateID: '8d1ebb8c-b4d9-4bc1-beba-d57a77f11f14'
  ReservedCode1: '6c4bc41f-f41b-4055-a3ff-2f48c2b6efec'
  ReservedCode2: '6c4bc41f-f41b-4055-a3ff-2f48c2b6efec'
---

# For...Next

当循环计数器接近其终值时重复执行一组语句。

语法：

> **For** *counter* [ **As** *type* ] **=** *start* **To** *end* [ **Step** *step* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; [ **Continue For** \| **Exit For** ]  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
> **Next** [ *counter* ]

*counter*
: 用作循环计数器的数值变量。该变量不能是Boolean或数组元素。

*type*
: *可选* 用于声明 *counter* 的数值类型。  
  当存在时，等效于在 **For** 语句之前紧接放置 `Dim counter As type`。

*start*
: *counter* 的初始值。

*end*
: *counter* 的终值。

*step*
: *可选* 每次循环时 *counter* 的变化量。如果未指定，*step* 默认为1。

*statements*
: *可选* **For** 和 **Next** 之间的一条或多条语句，执行指定次数。

**Continue For**
: *可选* 立即跳过剩余语句并开始下一次迭代，如果没有更多迭代则退出循环。  
  **Continue For** 通常在评估某个条件后使用，例如 **If...Then**。

**Exit For**
: *可选* 立即退出循环体。  
  **Exit For** 通常在评估某个条件后使用，例如 **If...Then**，并将控制权转移到紧接在 **Next** 之后的语句。

*step* 参数可以是正数或负数。*step* 参数的值决定循环处理方式如下：

| 值         | 循环执行条件   |
| :------------ | :----------------- |
| 正数或0 | *counter* <= *end* |
| 负数      | *counter* >= *end* |

循环中所有语句执行完毕后，*step* 被加到 *counter* 上。此时，循环中的语句再次执行（基于最初使循环执行的相同测试），或退出循环，执行继续到 **Next** 语句之后的语句。

::: tip

在循环内部更改 *counter* 的值可能使代码更难阅读和调试。
:::

**For...Next** 循环可以通过将一个 **For...Next** 循环放在另一个内部来嵌套。给每个循环一个唯一的变量名作为 *counter*。以下结构是正确的：

```vb
For I = 1 To 10 
  For J = 1 To 10 
    For K = 1 To 10 
    ' ... 
    Next K 
  Next J 
Next I 
```

::: info

当 **Next** 语句中省略 *counter* 时，执行继续如同包含了 *counter* 一样。如果在对应的 **For** 语句之前遇到 **Next** 语句，将发生错误。
:::

### 示例

本示例使用 **For...Next** 语句创建一个包含0到9数字10个实例的字符串，每个字符串之间用单个空格分隔。外层循环使用每次循环递减的循环计数器变量。

```vb
Dim Words, Chars, MyString 
For Words = 10 To 1 Step -1 ' Set up 10 repetitions. 
  For Chars = 0 To 9 ' Set up 10 repetitions. 
    MyString = MyString & Chars ' Append number to string. 
  Next Chars ' Increment counter 
  MyString = MyString & " " ' Append a space. 
Next Words 
```