---
title: GoTo
parent: Statements
permalink: /tB/Core/GoTo
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1f075214-04f8-4f82-af6e-24e6527b86b3'
  PropagateID: '1f075214-04f8-4f82-af6e-24e6527b86b3'
  ReservedCode1: 'd40e4fb8-fa49-4602-81f3-1accba3dccf7'
  ReservedCode2: 'd40e4fb8-fa49-4602-81f3-1accba3dccf7'
---

# GoTo

无条件分支到过程中指定的行。

语法：
> **GoTo** *line*

*line*
: 任何行标签或行号。

**GoTo** 只能分支到它所在过程中的行。

::: info
过多的 **GoTo** 语句会使代码难以阅读和调试。尽可能使用结构化控制语句（[**Do...Loop**](/official/Reference/Core/Do-Loop)、[**For...Next**](/official/Reference/Core/For-Next)、[**If...Then...Else**](/official/Reference/Core/If-Then-Else)、[**Select Case**](/official/Reference/Core/Select-Case)）。
:::

### 示例

本示例使用 **GoTo** 语句分支到过程中的行标签。

```vb
Sub GotoStatementDemo()
    Dim Number, MyString
    Number = 1 ' Initialize variable.
    ' Evaluate Number and branch to appropriate label.
    If Number = 1 Then GoTo Line1 Else GoTo Line2

Line1:
    MyString = "Number equals 1"
    GoTo LastLine ' Go to LastLine.
Line2:
    ' The following statement never gets executed.
    MyString = "Number equals 2"
LastLine:
    Debug.Print MyString ' Print "Number equals 1" in the Immediate window.
End Sub
```

### 另请参阅

- [**On...GoTo** 语句](/official/Reference/Core/On-GoTo)
- [**GoSub...Return** 语句](/official/Reference/Core/GoSub-Return)
- [**On Error** 语句](/official/Reference/Core/On-Error)
- [**Select Case** 语句](/official/Reference/Core/Select-Case)