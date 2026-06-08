---
title: Event
parent: Statements
permalink: /tB/Core/Event
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6ccc3c16-a22c-4ac8-b093-d8be92d3f1b7'
  PropagateID: '6ccc3c16-a22c-4ac8-b093-d8be92d3f1b7'
  ReservedCode1: 'b47aae0f-c497-4bee-944b-fc8d803be99c'
  ReservedCode2: 'b47aae0f-c497-4bee-944b-fc8d803be99c'
---

# Event

声明用户自定义事件。

语法：[ **Public** ] **Event** *procedurename* [ (*arglist*) ]

**Public**
: *可选*。指定 **Event** 在整个项目中可见。**Event** 类型默认为 **Public**。注意事件只能在声明它们的模块中引发。

*procedurename*
: 事件的名称；遵循标准变量命名约定。

*arglist*
: [ **ByVal** \| **ByRef** ] *varname* \[ **()** ] [ **As** *type* ]
   
   **ByVal**
   : *可选* 指示参数按值传递。
   
   **ByRef**
   : *可选* 指示参数按引用传递。**ByRef** 是默认方式，与Visual Basic .NET不同。
   
   *varname*
   : 表示传递给过程的参数的变量名称；遵循标准变量命名约定。
   
   *type*
   : *可选* 传递给过程的参数的数据类型；可以是Byte、Boolean、Integer、Long、Currency、Single、Double、Decimal、Date、String（仅限变长）、Object、Variant、用户自定义类型(UDT)或对象类型。

声明事件后，使用 [**RaiseEvent**](/official/Reference/Core/RaiseEvent) 语句触发事件。如果 **Event** 声明出现在标准模块中，将产生语法错误。事件不能声明为返回值。典型的事件声明和触发如下片段所示。

```vb
' Declare an event at module level of a class module 
 
Event LogonCompleted (UserName as String) 
 
Sub 
 RaiseEvent LogonCompleted("AntoineJan") 
End Sub
```

事件参数的声明方式与过程参数相同，但有以下例外：事件不能有命名参数、**Optional** 参数或 **ParamArray** 参数。事件没有返回值。

### 示例

以下示例使用事件在最快100米赛跑演示期间倒数秒数。代码说明了所有与事件相关的方法、属性和语句，包括 **Event** 语句。

引发事件的类是事件源，实现事件的类是接收器。一个事件源可以有多个接收器来处理它生成的事件。当类引发事件时，该事件会在每个选择接收该对象实例事件的类上触发。

示例还使用了包含按钮（`Command1`）、标签（`Label1`）和两个文本框（`Text1` 和 `Text2`）的窗体（`Form1`）。当按钮被点击时，第一个文本框显示"From Now"，第二个文本框开始计数秒数。当完整时间（9.84秒）过去后，第一个文本框显示"Until Now"，第二个显示"9.84"。

代码指定了窗体的初始和终止状态。还包含引发事件时执行的代码。

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

其余代码在名为TimerState的类模块中。**Event** 语句声明了事件引发时启动的过程。

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