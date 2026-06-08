---
title: "On Error"
parent: Statements
permalink: /tB/Core/On-Error
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9f56f0be-c56f-4751-80d6-eacff2c33235'
  PropagateID: '9f56f0be-c56f-4751-80d6-eacff2c33235'
  ReservedCode1: 'b104f7f4-1075-462d-81cf-dc60e83e4c3e'
  ReservedCode2: 'b104f7f4-1075-462d-81cf-dc60e83e4c3e'
---

# On Error

启用错误处理例程并指定该例程在过程中的位置；也可用于禁用错误处理例程。

语法：
- > **On Error GoTo** *line*
- > **On Error Resume Next**
- > **On Error GoTo 0**

**On Error GoTo** *line*
: 启用从*line*开始的错误处理例程。*line*参数可以是任何行标签或行号。如果发生运行时错误，控制分支转到*line*，使错误处理程序成为活动的。指定的*line*必须与**On Error**语句在同一过程中；否则会产生编译时错误。

**On Error Resume Next**
: 指定当运行时错误发生时，控制转到出错语句之后紧接着的语句并继续执行。在访问对象时，此形式优于**On Error GoTo**。

**On Error GoTo 0**
: 禁用当前过程中已启用的错误处理程序。

如果没有**On Error**语句，任何发生的运行时错误都是致命的；即显示错误消息并停止执行。

"已启用"的错误处理程序是已由**On Error**语句打开的处理程序；"活动的"错误处理程序是正在处理错误的已启用处理程序。如果错误处理程序处于活动状态时发生错误（在错误发生和[**Resume**](/official/Reference/Core/Resume)、[**Exit Sub**](/official/Reference/Core/Exit)、**Exit Function**或**Exit Property**语句之间），当前过程的错误处理程序无法处理该错误。控制返回到调用过程。

如果调用过程有已启用的错误处理程序，则激活它来处理错误。如果调用过程的错误处理程序也处于活动状态，则控制向上回溯先前调用过程，直到找到已启用但非活动的错误处理程序。如果找不到非活动的已启用错误处理程序，则错误在实际发生点成为致命错误。

每次错误处理程序将控制返回给调用过程时，该过程就成为当前过程。在错误被任何过程中的错误处理程序处理后，执行在当前过程中由**Resume**语句指定的位置继续。

::: info
错误处理例程不是[**Sub**](/official/Reference/Core/Sub)过程或[**Function**](/official/Reference/Core/Function)过程。它是由行标签或行号标记的代码段。
:::

错误处理例程依赖**Err**对象的**Number**属性值来确定错误原因。在发生任何其他错误或调用可能产生错误的过程之前，错误处理例程应测试或保存**Err**对象中的相关属性值。**Err**对象中的属性值仅反映最近一次错误。与**Err.Number**关联的错误消息包含在**Err.Description**中。

**On Error Resume Next**使执行继续到导致运行时错误的语句之后紧接着的语句，或继续到从包含**On Error Resume Next**语句的过程最近一次调用之后的语句。此语句允许在运行时错误发生时继续执行。错误处理例程可以放在错误可能发生的位置，而不是将控制转移到过程内的其他位置。**On Error Resume Next**语句在调用其他过程时变为非活动状态，因此必须在需要内联错误处理的每个被调用例程中执行**On Error Resume Next**语句。

::: info
在处理访问其他对象时产生的错误时，**On Error Resume Next**结构可能比**On Error GoTo**更可取。在与对象每次交互后检查**Err**可以消除代码访问了哪个对象的歧义。这样就可以清楚地知道哪个对象将错误代码放入了**Err.Number**，以及哪个对象最初产生了错误（**Err.Source**中指定的对象）。
:::

**On Error GoTo 0**禁用当前过程中的错误处理。即使过程包含编号为0的行，它也不会将第0行指定为错误处理代码的起始位置。如果没有**On Error GoTo 0**语句，错误处理程序在过程退出时自动禁用。

为防止在没有错误发生时错误处理代码运行，请在错误处理例程之前紧接放置[**Exit Sub**](/official/Reference/Core/Exit)、**Exit Function**或**Exit Property**语句，如下面的代码片段所示：

```vb
Sub InitializeMatrix(Var1, Var2, Var3, Var4)
    On Error GoTo ErrorHandler
    . . .
    Exit Sub
ErrorHandler:
    . . .
    Resume Next
End Sub
```

此处，错误处理代码位于**Exit Sub**语句之后、[**End Sub**](/official/Reference/Core/End)语句之前，以将其与过程流程分开。错误处理代码可以放在过程中的任何位置。

创建访问其他对象的对象时，应尽量处理从这些对象传回的未处理错误。当无法处理此类错误时，将**Err.Number**中的错误代码映射为项目特定的错误，然后将其传回给对象的调用者。通过将项目错误代码加到**vbObjectError**常量上来指定错误。例如，如果错误代码为1052，则按如下方式赋值：

```vb
Err.Number = vbObjectError + 1052
```

::: info
调用Windows动态链接库（DLL）时的系统错误不会引发异常，也无法用twinBASIC的错误捕获机制捕获。调用DLL函数时，应根据API规范检查每个返回值的成功或失败，如果失败，则检查**Err**对象的**LastDLLError**属性值。
:::

### 示例

本示例首先使用**On Error GoTo**语句指定过程中错误处理例程的位置。在示例中，尝试删除已打开的文件会产生错误号55。该错误在错误处理例程中处理，然后控制返回到导致错误的语句。**On Error GoTo 0**语句关闭错误捕获。

然后使用**On Error Resume Next**语句延迟错误捕获，以便可以确定下一条语句所产生的错误的上下文。注意，在处理错误后使用**Err.Clear**清除**Err**对象的属性。

```vb
Sub OnErrorStatementDemo()
    On Error GoTo ErrorHandler ' Enable error-handling routine.
    Open "TESTFILE" For Output As #1 ' Open file for output.
    Kill "TESTFILE" ' Attempt to delete open file.
    On Error GoTo 0 ' Turn off error trapping.
    On Error Resume Next ' Defer error trapping.
    ObjectRef = GetObject("MyWord.Basic") ' Try to start nonexistent object.

    ' Check for likely Automation errors.
    If Err.Number = 440 Or Err.Number = 432 Then
        ' Tell user what happened. Then clear the Err object.
        Msg = "There was an error attempting to open the Automation object!"
        MsgBox Msg, , "Deferred Error Test"
        Err.Clear ' Clear Err object fields.
    End If
    Exit Sub ' Exit to avoid handler.
ErrorHandler: ' Error-handling routine.
    Select Case Err.Number ' Evaluate error number.
        Case 55 ' "File already open" error.
            Close #1 ' Close open file.
        Case Else
            ' Handle other situations here...
    End Select
    Resume ' Resume execution at same line that caused the error.
End Sub
```

### 另请参阅

- [**Resume** 语句](/official/Reference/Core/Resume)
- [**Error** 语句](/official/Reference/Core/Error)
- [**Exit** 语句](/official/Reference/Core/Exit)
- [**GoTo** 语句](/official/Reference/Core/GoTo)