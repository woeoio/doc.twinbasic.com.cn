---
title: Do...Loop
parent: 语句
permalink: /zh/tB/Core/Do-Loop
---

# Do...Loop
{: .no_toc }

当条件为**True**时重复语句块，或直到条件变为**True**。

语法：
- > **Do** [{ **While** \| **Until** } *条件* ]
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *语句* ]
  > &nbsp;&nbsp;&nbsp;&nbsp;[ **Exit Do** \| **Continue Do**  ]
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *语句* ] ...
  > **Loop**
- > **Do**
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *语句* ]
  > &nbsp;&nbsp;&nbsp;&nbsp;[ **Exit Do** \| **Continue Do** ]
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *语句* ] ...
  > **Loop** [{ **While** \| **Until** } *条件* ]

*条件*
: *可选* 为**True**或**False**的数值表达式或字符串表达式。如果*条件*为Null，则将*条件*视为**False**。

*语句*
: 当或直到*条件*为**True**时重复的一个或多个语句。

[**Exit Do**](Exit)语句可以放置在**Do…Loop**中的任何位置，作为退出**Do…Loop**的替代方法。**Exit Do**通常在评估某些条件（例如**If…Then**）后使用，在这种情况下，**Exit Do**语句将控制权转移到紧跟在**Loop**后面的语句。

当在嵌套的**Do…Loop**语句中使用时，**Exit Do**将控制权转移到比**Exit Do**出现的循环高一级的循环。

[**Continue Do**](Continue)语句可以放置在**Do…Loop**中的任何位置，以跳过其余语句并继续新的迭代。

### 示例

此示例显示如何使用**Do...Loop**语句。内部**Do...Loop**语句循环10次，询问用户是否应该继续，当用户选择**否**时将标志的值设置为**False**，并使用**Exit Do**语句提前退出。外部循环在检查标志的值后立即退出。

```vb
Public Sub LoopExample()
    Dim Check As Boolean, Counter As Long, Total As Long
    Check = True: Counter = 0: Total = 0 ' 初始化变量。
    Do ' 外部循环。
        Do While Counter < 20 ' 内部循环
            Counter = Counter + 1 ' 增加计数器。
            If Counter Mod 10 = 0 Then ' 在每个10的倍数时检查用户。
                Check = (MsgBox("继续吗？", vbYesNo) = vbYes) ' 当用户点击否时停止
                If Not Check Then Exit Do ' 退出内部循环。
            End If
        Loop
        Total = Total + Counter ' Exit Do 到达这里。
        Counter = 0
    Loop Until Check = False ' 立即退出外部循环。
    MsgBox "计数到：" & Total
End Sub
```

## 使用Do...Loop语句

使用**Do...Loop**语句运行语句块不确定的次数。语句要么在条件为**True**时重复，要么直到条件变为**True**。

### 当条件为True时重复语句

有两种方法可以在**Do...Loop**语句中使用**While**关键字检查条件。您可以在进入循环之前检查条件，或者在循环至少运行一次后检查条件。

在以下`ChkFirstWhile`过程中，您在进入循环之前检查条件。如果`myNum`设置为9而不是20，循环内的语句将永远不会运行。在`ChkLastWhile`过程中，循环内的语句仅在条件变为**False**之前运行一次。

```vb
Sub ChkFirstWhile()
    counter = 0
    myNum = 20
    Do While myNum > 10
        myNum = myNum - 1
        counter = counter + 1
    Loop
    MsgBox "循环重复了" & counter & "次。"
End Sub

Sub ChkLastWhile()
    counter = 0
    myNum = 9
    Do
        myNum = myNum - 1
        counter = counter + 1
    Loop While myNum > 10
    MsgBox "循环重复了" & counter & "次。"
End Sub
```

### 重复语句直到条件变为True

有两种方法可以在**Do...Loop**语句中使用**Until**关键字检查条件。您可以在进入循环之前检查条件（如`ChkFirstUntil`过程中所示），或者在循环至少运行一次后检查条件（如`ChkLastUntil`过程中所示）。当条件保持**False**时继续循环。

```vb
Sub ChkFirstUntil()
    counter = 0
    myNum = 20
    Do Until myNum = 10
        myNum = myNum - 1
        counter = counter + 1
    Loop
    MsgBox "循环重复了" & counter & "次。"
End Sub

Sub ChkLastUntil()
    counter = 0
    myNum = 1
    Do
        myNum = myNum + 1
        counter = counter + 1
    Loop Until myNum = 10
    MsgBox "循环重复了" & counter & "次。"
End Sub
```

### 从循环内部退出Do...Loop语句

您可以使用[**Exit Do**](Exit)语句退出**Do...Loop**。例如，要退出无限循环，请在[**If...Then...Else**](If-Then-Else)语句或[**Select Case**](Select-Case)语句的**True**语句块中使用**Exit Do**语句。如果条件为**False**，循环将正常运行。

在以下示例中，`myNum`被分配创建无限循环的值。**If...Then...Else**语句检查此条件，然后退出，防止无限循环。

```vb
Sub ExitExample()
    counter = 0
    myNum = 9
    Do Until myNum = 10
        myNum = myNum - 1
        counter = counter + 1
        If myNum < 10 Then Exit Do
    Loop
    MsgBox "循环重复了" & counter & "次。"
End Sub
```

> [!NOTE]
>
> 要停止无限循环，请按ESC或CTRL+BREAK。