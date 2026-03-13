---
title: Event
parent: 语句
permalink: /zh/tB/Core/Event
---

声明用户定义事件。

语法：[ **Public** ] **Event** *过程名* [ (*参数列表*) ]

**Public**
: *可选*。指定**Event**在整个项目中可见。**Events**类型默认为**Public**。注意事件只能在其声明的模块中引发。

*过程名*
: 事件的名称；遵循标准变量命名约定。

*参数列表*
:  [ **ByVal** \| **ByRef** ] *变量名* \[ **()** ] [ **As** *类型* ]

   **ByVal**
   : *可选* 指示参数按值传递。

   **ByRef**
   : *可选* 指示参数按引用传递。**ByRef**是默认值，与Visual Basic .NET不同。

   *变量名*
   : 表示传递给过程的参数的变量名称；遵循标准变量命名约定。

   *类型*
   : *可选* 传递给过程的参数的数据类型；可以是Byte、Boolean、Integer、Long、Currency、Single、Double、Decimal（目前不支持）、Date、String（仅变长）、Object、Variant、用户定义类型（UDT）或对象类型。

声明事件后，使用[**RaiseEvent**](RaiseEvent)语句触发事件。如果在标准模块中出现**Event**声明，则会发生语法错误。不能声明事件以返回值。典型事件可能如下面片段所示声明和引发。

```vb
' 在类模块的模块级别声明事件

Event LogonCompleted (UserName as String)

Sub
 RaiseEvent LogonCompleted("AntoineJan")
End Sub
```

> [!NOTE]
>
> 您可以像声明过程的参数一样声明事件参数，但有以下例外：事件不能具有命名参数、**Optional**参数或**ParamArray**参数。事件没有返回值。

### 示例

以下示例使用事件来计算最快100米赛跑演示期间的秒数。代码说明了所有事件相关的方法、属性和语句，包括**Event**语句。

引发事件的类是事件源，实现事件的类是接收器。事件源可以为其生成的事件有多个接收器。当类引发事件时，该事件在每个选择为该对象的实例接收事件的类上触发。

该示例还使用了包含按钮（`Command1`）、标签（`Label1`）和两个文本框（`Text1`和`Text2`）的窗体（`Form1`）。当您点击按钮时，第一个文本框显示"From Now"，第二个开始计数秒数。当经过完整时间（9.84秒）时，第一个文本框显示"Until Now"，第二个显示"9.84"。

代码指定窗体的初始和终止状态。它还包含事件引发时执行的代码。

```vb
Class Form1
  Option Explicit

  Private WithEvents mText As TimerState

  Private Sub Command1_Click()
    Text1.Text = "From Now"
    Text1.Refresh
    Text2.Text = "0"
    Text2.Refresh
    Call mText.TimerTask(9.84)
  End Sub

  Private Sub Form_Load()
    Command1.Caption = "Click to Start Timer"
    Text1.Text = ""
    Text2.Text = ""
    Label1.Caption = "The fastest 100 meter run took this long:"
    Set mText = New TimerState
  End Sub

  Private Sub mText_ChangeText()
    Text1.Text = "Until Now"
    Text2.Text = "9.84"
  End Sub

  Private Sub mText_UpdateTime(ByVal dblJump As Double)
    Text2.Text = Str(Format(dblJump, "0"))
    DoEvents
  End Sub
End Class
```

其余代码在名为TimerState的类模块中。**Event**语句声明事件引发时启动的过程。

VB

```vb
Class TimerState
    Option Explicit
    Public Event UpdateTime(ByVal dblJump As Double)
    Public Event ChangeText()

    Public Sub TimerTask(ByVal Duration As Double)
        Dim dblStart As Double
        Dim dblSecond As Double
        Dim dblSoFar As Double
        dblStart = Timer
        dblSoFar = dblStart

        Do While Timer < dblStart + Duration
        If Timer - dblSoFar >= 1 Then
            dblSoFar = dblSoFar + 1
            RaiseEvent UpdateTime(Timer - dblStart)
        End If
        Loop

        RaiseEvent ChangeText
    End Sub
End Class
```