---
title: "Select Case"
parent: Statements
permalink: /tB/Core/Select-Case
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ca4975ad-3ab0-414d-8d97-ef0cfb47f43c'
  PropagateID: 'ca4975ad-3ab0-414d-8d97-ef0cfb47f43c'
  ReservedCode1: '5d928626-8921-47f3-b057-855c8d18b777'
  ReservedCode2: '5d928626-8921-47f3-b057-855c8d18b777'
---

# Select Case

根据表达式的值执行若干语句组之一。

语法：

> **Select Case** *testexpression*  
> &nbsp;&nbsp;&nbsp;&nbsp;[ **Case** *expressionlist-n*  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ *statements-n* ] ] ...  
> &nbsp;&nbsp;&nbsp;&nbsp;[ **Case Else**  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ *elsestatements* ] ]  
> **End Select**

*testexpression*
: 任意数值表达式或字符串表达式。

*expressionlist-n*
: 如果出现**Case**则为必需。以分隔符分隔的一个或多个以下形式的列表：
  - *expression*
  - *expression* **To** *expression*
  - **Is** *comparisonoperator* *expression*

  **To**关键字指定值的范围。使用**To**关键字时，较小的值必须出现在**To**之前。

  使用**Is**关键字与比较运算符（**Is**和**Like**除外）来指定值的范围。如果未提供，**Is**关键字会自动插入。

*statements-n*
: *可选* 如果*testexpression*匹配*expressionlist-n*的任何部分，则执行的一个或多个语句。

*elsestatements*
: *可选* 如果*testexpression*不匹配任何**Case**子句，则执行的一个或多个语句。

如果*testexpression*匹配任何**Case** *expressionlist*表达式，则执行该**Case**子句之后的*statements*，直到下一个**Case**子句，或对于最后一个子句直到**End Select**。然后控制传递到**End Select**之后的语句。如果*testexpression*匹配多个**Case**子句中的*expressionlist*表达式，则只执行第一个匹配之后的语句。

**Case Else**子句用于指示在*testexpression*与任何其他**Case**选择中的*expressionlist*没有匹配时要执行的*elsestatements*。虽然不是必需的，但在**Select Case**块中使用**Case Else**语句处理未预见的*testexpression*值是一个好习惯。如果没有**Case** *expressionlist*匹配*testexpression*且没有**Case Else**语句，执行继续到**End Select**之后的语句。

每个**Case**子句中可以出现多个表达式或范围。例如，以下行是有效的：

```vb
Case 1 To 4, 7 To 9, 11, 13, Is > MaxNumber
```

::: info
**Is**比较运算符与**Select Case**语句中使用的**Is**关键字不同。
:::

字符串也可以指定范围和多个表达式。在下面的示例中，**Case**匹配与`everything`完全相等的字符串、按字母顺序在`nuts`和`soup`之间的字符串以及`TestItem`的当前值：

```vb
Case "everything", "nuts" To "soup", TestItem
```

**Select Case**语句可以嵌套。每个嵌套的**Select Case**语句必须有匹配的**End Select**语句。

### 示例

本示例使用**Select Case**语句评估变量的值。第二个**Case**子句包含被评估变量的值，因此只执行与之关联的语句。

```vb
Dim Number
Number = 8    ' Initialize variable.
Select Case Number    ' Evaluate Number.
    Case 1 To 5    ' Number between 1 and 5, inclusive.
        Debug.Print "Between 1 and 5"
    ' The following is the only Case clause that evaluates to True.
    Case 6, 7, 8    ' Number between 6 and 8.
        Debug.Print "Between 6 and 8"
    Case 9 To 10    ' Number is 9 or 10.
        Debug.Print "Greater than 8"
    Case Else    ' Other values.
        Debug.Print "Not between 1 and 10"
End Select
```

### 另请参阅

- [**If...Then...Else** 语句](/official/Reference/Core/If-Then-Else)
- [**Do...Loop** 语句](/official/Reference/Core/Do-Loop)