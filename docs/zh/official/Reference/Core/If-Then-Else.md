---
title: If...Then...Else
parent: Statements
permalink: /tB/Core/If-Then-Else
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cb103a51-182f-482e-a9b4-4478ff8e64c2'
  PropagateID: 'cb103a51-182f-482e-a9b4-4478ff8e64c2'
  ReservedCode1: 'ab79622d-8cfd-45b9-a3f5-579235d05206'
  ReservedCode2: 'ab79622d-8cfd-45b9-a3f5-579235d05206'
---

# If...Then...Else

根据表达式的值有条件地执行一组语句。

语法：

- > **If** *condition* **Then** [ *statements* ] [ **Else** *elsestatements* ]
- > **If** *condition* **Then**  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]  
  > [ **ElseIf** *condition-n* **Then**  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *elseifstatements* ] ]  
  > [ **Else**  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *elsestatements* ] ]  
  > **End If**

*condition*
: 以下两种类型的表达式之一或多个：
  - 求值为 **True** 或 **False** 的数值表达式或字符串表达式。如果 *condition* 为Null，则 *condition* 被视为 **False**。
  - **TypeOf** *objectname* **Is** *objecttype* 形式的表达式。*objectname* 是任何对象引用，*objecttype* 是任何有效的对象类型。如果 *objectname* 是 *objecttype* 指定的对象类型，则表达式为 **True**；否则为 **False**。

*statements*
: 块形式中可选；没有 **Else** 子句的单行形式中必需。用冒号分隔的一条或多条语句；当 *condition* 为 **True** 时执行。

*condition-n*
: *可选* 与 *condition* 相同。

*elseifstatements*
: *可选* 当关联的 *condition-n* 为 **True** 时执行的一条或多条语句。

*elsestatements*
: *可选* 当前面没有 *condition* 或 *condition-n* 表达式为 **True** 时执行的一条或多条语句。

对于简短的测试使用单行形式（第一种语法）。块形式（第二种语法）比单行形式提供更多结构和灵活性，通常更容易阅读、维护和调试。

::: info
使用单行形式时，可以作为 **If...Then** 判断的结果执行多条语句。所有语句必须在同一行并用冒号分隔，如下语句：

```vb
If A > 10 Then A = A + 1 : B = B + A : C = C + B
```
:::

块形式 **If** 语句必须是一行中的第一条语句。语句的 **Else**、**ElseIf** 和 **End If** 部分前面只能有行号或行标签。块 **If** 必须以 **End If** 语句结束。

要确定语句是否是块 **If**，检查 **Then** 关键字后面是什么。如果 **Then** 后面的同一行上出现注释以外的任何内容，该语句被视为单行 **If** 语句。

**Else** 和 **ElseIf** 子句都是可选的。块 **If** 可以有任意数量的 **ElseIf** 子句，但都不能出现在 **Else** 子句之后。块 **If** 语句可以嵌套；即相互包含。

执行块 **If**（第二种语法）时，测试 *condition*。如果 *condition* 为 **True**，执行 **Then** 后面的语句。如果 *condition* 为 **False**，依次评估每个 **ElseIf** 条件（如果有的话）。当找到 **True** 条件时，执行紧接在关联 **Then** 之后的语句。如果没有 **ElseIf** 条件为 **True**（或没有 **ElseIf** 子句），执行 **Else** 之后的语句。执行 **Then** 或 **Else** 之后的语句后，执行继续到 **End If** 之后的语句。

::: tip
当评估具有多种可能操作的单个表达式时，[**Select Case**](/official/Reference/Core/Select-Case) 可能更有用。但 **TypeOf** *objectname* **Is** *objecttype* 子句不能与 **Select Case** 语句一起使用。
:::

::: info
**TypeOf** 不能与 **Long**、**Integer** 等除 **Object** 之外的硬数据类型一起使用。
:::

### 示例

本示例展示 **If...Then...Else** 语句的块形式和单行形式。还展示了 **If TypeOf...Then...Else** 的用法。

```vb
Dim Number, Digits, MyString
Number = 53 ' Initialize variable.
If Number < 10 Then
    Digits = 1
ElseIf Number < 100 Then
    ' Condition evaluates to True so the next statement is executed.
    Digits = 2
Else
    Digits = 3
End If

' Assign a value using the single-line form of syntax.
If Digits = 1 Then MyString = "One" Else MyString = "More than one"
```

使用 **If TypeOf** 构造确定传入过程的控件是否是特定类型的控件。

```vb
Sub ControlProcessor(MyControl As Control)
    If TypeOf MyControl Is CommandButton Then
        Debug.Print "You passed in a " & TypeName(MyControl)
    ElseIf TypeOf MyControl Is CheckBox Then
        Debug.Print "You passed in a " & TypeName(MyControl)
    ElseIf TypeOf MyControl Is TextBox Then
        Debug.Print "You passed in a " & TypeName(MyControl)
    End If
End Sub
```

### 另请参阅

- [**Select Case** 语句](/official/Reference/Core/Select-Case)
- [**#If...Then...Else** 指令](/official/Reference/Core/Topic-Preprocessor)