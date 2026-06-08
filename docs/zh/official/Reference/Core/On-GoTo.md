---
title: "On...GoTo, On...GoSub"
parent: Statements
permalink: /tB/Core/On-GoTo
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2cb3fc0b-045a-41d6-8a75-5b562dd93ac2'
  PropagateID: '2cb3fc0b-045a-41d6-8a75-5b562dd93ac2'
  ReservedCode1: '9990dbb5-84f3-44d9-b076-74ec61aa3dc3'
  ReservedCode2: '9990dbb5-84f3-44d9-b076-74ec61aa3dc3'
---

# On...GoTo, On...GoSub

根据表达式的值，分支到几个指定行之一。

语法：
- > **On** *expression* **GoTo** *destinationlist*
- > **On** *expression* **GoSub** *destinationlist*

*expression*
: 计算结果为0到255之间（含）的整数的任意数值表达式。如果*expression*不是整数，则在计算前进行四舍五入。

*destinationlist*
: 以逗号分隔的行号或行标签列表。

*expression*的值决定分支到*destinationlist*中的哪一行。如果*expression*的值小于1或大于列表中的项数，则产生以下结果之一：

| 如果 *expression* 为 | 则 |
|:-----|:-----|
| 等于0 | 控制落到**On...GoSub**或**On...GoTo**之后的语句。 |
| 大于列表中的项数 | 控制落到**On...GoSub**或**On...GoTo**之后的语句。 |
| 为负数 | 产生错误。 |
| 大于255 | 产生错误。 |

行号和行标签可以在同一列表中混合使用。**On...GoSub**和**On...GoTo**可以使用任意数量的行标签和行号。但是，当标签或编号多于一行所能容纳时，必须使用行继续符将逻辑行延续到下一个物理行。

::: tip
[**Select Case**](/official/Reference/Core/Select-Case)提供了一种更结构化、更灵活的方式来执行多路分支。
:::

### 示例

本示例使用**On...GoSub**和**On...GoTo**语句分别分支到子例行程序和行标签。

```vb
Sub OnGosubGotoDemo()
    Dim Number, MyString
    Number = 2 ' Initialize variable.
    ' Branch to Sub2.
    On Number GoSub Sub1, Sub2 ' Execution resumes here after On...GoSub.
    On Number GoTo Line1, Line2 ' Branch to Line2.
    ' Execution does not resume here after On...GoTo.
    Exit Sub
Sub1:
    MyString = "In Sub1" : Return
Sub2:
    MyString = "In Sub2" : Return
Line1:
    MyString = "In Line1"
Line2:
    MyString = "In Line2"
End Sub
```

### 另请参阅

- [**GoTo** 语句](/official/Reference/Core/GoTo)
- [**GoSub...Return** 语句](/official/Reference/Core/GoSub-Return)
- [**Select Case** 语句](/official/Reference/Core/Select-Case)