---
title: RaiseEvent
parent: Statements
permalink: /tB/Core/RaiseEvent
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '067b6699-9e39-4e56-923c-b4aee0d80498'
  PropagateID: '067b6699-9e39-4e56-923c-b4aee0d80498'
  ReservedCode1: '6d6f7ca0-1b12-4b42-bc57-4d326ec9ed38'
  ReservedCode2: '6d6f7ca0-1b12-4b42-bc57-4d326ec9ed38'
---

# RaiseEvent

在类、窗体或文档中触发在模块级声明的事件。

语法：
> **RaiseEvent** *eventname* [ **(** *argumentlist* **)** ]

*eventname*
: 要触发的事件名称。必须是在同一模块中声明的[**Event**](/official/Reference/Core/Event)的名称。

*argumentlist*
: *可选* 以逗号分隔的变量、数组或表达式列表，作为事件参数传递。*argumentlist*必须用括号括起。如果事件没有参数，则必须省略括号。

如果事件未在引发它的模块中声明，则产生错误。如果事件没有参数，在**RaiseEvent**调用中包含空括号会导致错误。

**RaiseEvent**不能触发未在模块中显式声明的事件。例如，即使窗体有内置的**Click**事件，**RaiseEvent**也不能触发它。在窗体模块中声明**Click**事件会遮蔽窗体自身的**Click**事件。

事件触发按连接建立的顺序进行。因为事件可以有**ByRef**参数，较晚连接的进程可能接收到已被先前事件处理程序更改的参数。

### 示例

以下代码片段在类模块的模块级声明一个事件，并从过程中引发它：

```vb
' In a class module:
Public Event LogonCompleted(UserName As String)

Sub Demo()
    RaiseEvent LogonCompleted("AntoineJan")
End Sub
```

一个更完整的示例展示事件源/接收器的连接。引发事件的类是事件源，处理事件的类是接收器。一个事件源可以有多个接收器；当源引发事件时，每个接收器都会收到。

源类声明两个事件并从工作过程中引发它们：

```vb
Class TimerState
    Public Event UpdateElapsedTime(ByVal elapsedTime As Double)
    Public Event DisplayFinalTime()
    Private Const delta As Double = 0.01

    Public Sub TimerTask(ByVal duration As Double)
        Dim startTime As Double, timeElapsedSoFar As Double
        startTime = Timer
        timeElapsedSoFar = startTime

        Do While Timer < startTime + duration
            If Timer - timeElapsedSoFar >= delta Then
                timeElapsedSoFar = timeElapsedSoFar + delta
                RaiseEvent UpdateElapsedTime(Timer - startTime)
                DoEvents
            End If
        Loop

        RaiseEvent DisplayFinalTime
    End Sub
End Class
```

接收器通过使用`WithEvents`字段并提供名为`<field>_<EventName>`的处理程序过程来订阅：

```vb
Class Form1
    Private WithEvents ts As TimerState

    Private Sub UserForm_Initialize()
        Set ts = New TimerState
    End Sub

    Private Sub Command1_Click()
        ts.TimerTask 9.58
    End Sub

    Private Sub ts_UpdateElapsedTime(ByVal elapsedTime As Double)
        Text2.Text = Format(elapsedTime, "0.00")
    End Sub

    Private Sub ts_DisplayFinalTime()
        Text1.Text = "Until Now"
        Text2.Text = "9.58"
    End Sub
End Class
```

### 另请参阅

- [**Event** 语句](/official/Reference/Core/Event)
- [**Class** 语句](/official/Reference/Core/Class)
- [**Implements** 语句](/official/Reference/Core/Implements)