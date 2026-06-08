---
title: For Each...Next
parent: Statements
permalink: /tB/Core/For-Each-Next
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '68b122d6-18e5-4c0f-8bf8-9f2cf43172dc'
  PropagateID: '68b122d6-18e5-4c0f-8bf8-9f2cf43172dc'
  ReservedCode1: '61dbcf49-acaa-489e-bc07-df471192011e'
  ReservedCode2: '61dbcf49-acaa-489e-bc07-df471192011e'
---

# For Each...Next

对数组或集合中的每个元素重复执行一组语句。

语法：
> **For Each** *element* [ **As** *type* ] **In** *group*  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; [ **Continue For** \| **Exit For** ]  
> &nbsp;&nbsp;&nbsp;&nbsp;  [ *statements* ]  
> **Next** [ *element* ]

*element*
: 用于遍历集合或数组元素的变量。对于集合，*element* 只能是 **Variant** 变量、通用对象变量或任何特定对象变量。对于数组，*element* 只能是 **Variant** 变量。

*type*
: *可选* 用于声明 *element* 的类型。  
  当存在时，等效于在 **For Each** 语句之前紧接放置 `Dim element As type`。

*group*
: 对象集合或数组的名称（用户自定义类型(UDT)数组除外）。

*statements*
: *可选* 对 *group* 中每个项执行的一条或多条语句。

**Continue For**
: *可选* 立即跳过剩余语句并开始下一次迭代，如果没有更多迭代则退出循环。  
  **Continue For** 通常在评估某个条件后使用，例如 **If...Then**。

**Exit For**
: *可选* 立即退出循环体。  
  **Exit For** 通常在评估某个条件后使用，例如 **If...Then**，并将控制权转移到紧接在 **Next** 之后的语句。

如果 *group* 中至少有一个元素，则进入 **For…Each** 块。进入循环后，对 *group* 中的第一个元素执行循环中的所有语句。如果 *group* 中有更多元素，循环中的语句继续为每个元素执行。当 *group* 中没有更多元素时，退出循环，执行继续到 **Next** 语句之后的语句。

**For...Each...Next** 循环可以通过将一个 **For…Each…Next** 循环放在另一个内部来嵌套。但每个循环的 *element* 必须唯一。

::: info

当 **Next** 语句中省略 *element* 时，执行继续如同包含了 *element* 一样。如果在对应的 **For** 语句之前遇到 **Next** 语句，将发生错误。
:::

**For...Each...Next** 语句不能用于用户自定义类型的数组，因为 **Variant** 不能包含用户自定义类型。

### 示例

本示例使用 **For Each...Next** 语句搜索集合中所有元素的 **Text** 属性是否存在字符串"Hello"。在示例中，*MyObject* 是文本相关对象，是集合 *MyCollection* 的元素。两者都是仅用于说明的通用名称。

```vb
Dim Found, MyObject, MyCollection 
Found = False         ' Initialize variable. 
For Each MyObject In MyCollection    ' Iterate through each element.  
  If MyObject.Text = "Hello" Then    ' If Text equals "Hello". 
    Found = True      ' Set Found to True. 
    Exit For          ' Exit loop. 
  End If 
Next
```