---
title: Do...Loop
parent: Statements
permalink: /tB/Core/Do-Loop
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2840f531-7540-4905-be72-4941fdca4d55'
  PropagateID: '2840f531-7540-4905-be72-4941fdca4d55'
  ReservedCode1: '3ac0deeb-d524-4549-b58e-4f72d63af992'
  ReservedCode2: '3ac0deeb-d524-4549-b58e-4f72d63af992'
---

# Do...Loop

当条件为 **True** 时或直到条件变为 **True** 时重复执行语句块。

语法：
- > **Do** [{ **While** \| **Until** } *condition* ]  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ **Exit Do** \| **Continue Do**  ]  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ] ...  
  > **Loop**
- > **Do**  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ **Exit Do** \| **Continue Do** ]  
  > &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ] ...  
  > **Loop** [{ **While** \| **Until** } *condition* ]

*condition*
: *可选* 求值为 **True** 或 **False** 的数值表达式或字符串表达式。如果 *condition* 为Null，则 *condition* 被视为 **False**。

*statements*
: 当条件为 **True** 时或直到条件变为 **True** 时重复执行的一条或多条语句。

可以在 **Do…Loop** 中任意位置放置任意数量的 [**Exit Do**](/official/Reference/Core/Exit) 语句作为退出 **Do…Loop** 的替代方式。**Exit Do** 通常在评估某个条件后使用，例如 **If…Then**，此时 **Exit Do** 语句将控制权转移到紧接在 **Loop** 之后的语句。

在嵌套的 **Do…Loop** 语句中使用时，**Exit Do** 将控制权转移到比出现 **Exit Do** 的循环高一层嵌套的循环。

可以在 **Do…Loop** 中任意位置放置任意数量的 [**Continue Do**](/official/Reference/Core/Continue) 语句，以跳过剩余语句并开始新的迭代。

### 示例

本示例展示如何使用 **Do...Loop** 语句。内部 **Do...Loop** 语句循环10次，询问用户是否继续，当用户选择 **No** 时将标志值设为 **False**，并通过 **Exit Do** 语句提前退出。外层循环在检查标志值后立即退出。

```vb
Public Sub LoopExample()
    Dim Check As Boolean, Counter As Long, Total As Long
    Check = True: Counter = 0: Total = 0 ' Initialize variables.
    Do ' Outer loop.
        Do While Counter < 20 ' Inner Loop
            Counter = Counter + 1 ' Increment Counter.
            If Counter Mod 10 = 0 Then ' Check in with the user on every multiple of 10.
                Check = (MsgBox("Keep going?", vbYesNo) = vbYes) ' Stop when user click's on No
                If Not Check Then Exit Do ' Exit inner loop.
            End If
        Loop
        Total = Total + Counter ' Exit Do Lands here.
        Counter = 0
    Loop Until Check = False ' Exit outer loop immediately.
    MsgBox "Counted to: " & Total
End Sub
```

## 使用 Do...Loop 语句

使用 **Do...Loop** 语句可以不限次数地运行语句块。语句在条件为 **True** 时或直到条件变为 **True** 时重复执行。

### 当条件为 True 时重复语句

有两种方式使用 **While** 关键字在 **Do...Loop** 语句中检查条件。可以在进入循环之前检查条件，或在循环至少运行一次之后检查条件。

在以下 `ChkFirstWhile` 过程中，条件在进入循环之前检查。如果 `myNum` 设为9而非20，循环内的语句将永远不会执行。在 `ChkLastWhile` 过程中，循环内的语句在条件变为 **False** 之前只执行一次。

```vb
Sub ChkFirstWhile() 
    counter = 0 
    myNum = 20 
    Do While myNum > 10 
        myNum = myNum - 1 
        counter = counter + 1 
    Loop 
    MsgBox "The loop made " & counter & " repetitions." 
End Sub 
 
Sub ChkLastWhile() 
    counter = 0 
    myNum = 9 
    Do 
        myNum = myNum - 1 
        counter = counter + 1 
    Loop While myNum > 10 
    MsgBox "The loop made " & counter & " repetitions." 
End Sub
```

### 直到条件变为 True 时重复语句

有两种方式使用 **Until** 关键字在 **Do...Loop** 语句中检查条件。可以在进入循环之前检查条件（如 `ChkFirstUntil` 过程所示），或在循环至少运行一次之后检查条件（如 `ChkLastUntil` 过程所示）。当条件仍为 **False** 时继续循环。

```vb
Sub ChkFirstUntil() 
    counter = 0 
    myNum = 20 
    Do Until myNum = 10 
        myNum = myNum - 1 
        counter = counter + 1 
    Loop 
    MsgBox "The loop made " & counter & " repetitions." 
End Sub 
 
Sub ChkLastUntil() 
    counter = 0 
    myNum = 1 
    Do 
        myNum = myNum + 1 
        counter = counter + 1 
    Loop Until myNum = 10 
    MsgBox "The loop made " & counter & " repetitions." 
End Sub
```

### 从循环内部退出 Do...Loop 语句

[**Exit Do**](/official/Reference/Core/Exit) 语句从内部退出 **Do...Loop**。例如，要退出无限循环，可在 [**If...Then...Else**](/official/Reference/Core/If-Then-Else) 语句或 [**Select Case**](/official/Reference/Core/Select-Case) 语句的 **True** 语句块中使用 **Exit Do** 语句。如果条件为 **False**，循环将正常运行。

在以下示例中，`myNum` 被赋予一个创建无限循环的值。**If...Then...Else** 语句检查此条件然后退出，防止无限循环。

```vb
Sub ExitExample() 
    counter = 0 
    myNum = 9 
    Do Until myNum = 10 
        myNum = myNum - 1 
        counter = counter + 1 
        If myNum < 10 Then Exit Do 
    Loop 
    MsgBox "The loop made " & counter & " repetitions." 
End Sub
```

::: info

要停止无限循环，请按ESC或CTRL+BREAK。
:::