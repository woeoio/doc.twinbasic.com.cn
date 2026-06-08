---
title: InputBox
parent: Interaction Module
permalink: /tB/Modules/Interaction/InputBox
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0da85737-ed3a-48e3-af1e-cece51b1abf1'
  PropagateID: '0da85737-ed3a-48e3-af1e-cece51b1abf1'
  ReservedCode1: '2faef64c-46e2-4637-b007-e22e4f66083b'
  ReservedCode2: '2faef64c-46e2-4637-b007-e22e4f66083b'
---

# InputBox

在对话框中显示提示，等待用户输入文本或点击按钮，并返回一个包含文本框内容的**String**。

语法：**InputBox(** *prompt* [ **,** *title* ] [ **,** *default* ] [ **,** *xpos* ] [ **,** *ypos* ] [ **,** *helpfile* **,** *context* ] **)**

*prompt*
: *必需* 字符串表达式，在对话框中显示为消息。*prompt*的最大长度约为1024个字符，取决于所使用字符的宽度。要将*prompt*分为多行，请用回车符(`Chr(13)`)、换行符(`Chr(10)`)或CR-LF组合(`vbCrLf`)分隔各行。

*title*
: *可选* 字符串表达式，显示在对话框的标题栏中。如果省略，则使用应用程序名称。

*default*
: *可选* 字符串表达式，在文本框中显示为初始响应。如果省略，文本框显示为空。

*xpos*
: *可选* 数值表达式，以缇为单位指定对话框左边缘与屏幕左边缘的水平距离。如果省略，对话框水平居中。

*ypos*
: *可选* 数值表达式，以缇为单位指定对话框上边缘与屏幕顶部的垂直距离。如果省略，对话框位于屏幕大约三分之一处。

*helpfile*
: *可选* 字符串表达式，标识用于为对话框提供上下文相关帮助的帮助文件。如果提供了*helpfile*，则还必须提供*context*。

*context*
: *可选* 数值表达式，给出分配给相关帮助主题的帮助上下文编号。如果提供了*context*，则还必须提供*helpfile*。

如果用户点击**OK**或按ENTER，**InputBox**返回文本框中的内容。如果用户点击**Cancel**，函数返回零长度字符串(`""`)。

::: info
仅凭零长度返回值无法区分"用户取消"和"用户提交了空字符串"。要区分它们，请将结果捕获到**Variant**中并使用**StrPtr**测试底层**BSTR**指针：取消的对话框返回空指针，而提交的空字符串返回指向已分配零长度**BSTR**的指针。

```vb 
Dim Reply As Variant
Reply = InputBox("Enter your name:")
If StrPtr(Reply) = 0 Then
    ' User cancelled.
ElseIf Reply = "" Then
    ' User submitted an empty string.
Else
    ' User entered: Reply.
End If
```
:::

文本框最多接受255个字符；返回字符串截断为254个字符。文本框不接受换行符（例如SHIFT+ENTER）；包含换行符的粘贴文本在换行符处截断。

同时提供*helpfile*和*context*时，用户可以按F1查看相关帮助主题。

### 示例

本示例展示了调用**InputBox**的多种方式。如果省略*xpos*和*ypos*，对话框在相应轴上居中。变量`MyValue`最终包含用户按**OK**或ENTER时键入的内容，或按**Cancel**时的零长度字符串。

```vb
Dim Message As String, Title As String, Default As String, MyValue As String
Message = "Enter a value between 1 and 3"
Title = "InputBox Demo"
Default = "1"

' Display message, title, and default value.
MyValue = InputBox(Message, Title, Default)

' Use a Help file and context. The Help button is added automatically.
MyValue = InputBox(Message, Title, , , , "DEMO.HLP", 10)

' Display the dialog at screen position (100, 100).
MyValue = InputBox(Message, Title, Default, 100, 100)
```

### 另请参阅

- [MsgBox](/official/Reference/VBA/Interaction/MsgBox)函数