---
title: MsgBox
parent: Interaction Module
permalink: /tB/Modules/Interaction/MsgBox
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '62e44c80-a99e-41d2-8461-d45488953140'
  PropagateID: '62e44c80-a99e-41d2-8461-d45488953140'
  ReservedCode1: 'c3f01a49-f8e9-48cd-bebd-5fd3d325339d'
  ReservedCode2: 'c3f01a49-f8e9-48cd-bebd-5fd3d325339d'
---

# MsgBox

在模式对话框中显示消息，带有选定的按钮集，等待用户点击按钮，并返回一个[**VbMsgBoxResult**](/official/Reference/VBA/Constants/VbMsgBoxResult)值标识该按钮。

语法：**MsgBox(** *prompt* [ **,** *buttons* ] [ **,** *title* ] [ **,** *helpfile* **,** *context* ] **)**

*prompt*
: *必需* 字符串表达式，在对话框中显示为消息。*prompt*的最大长度约为1024个字符，取决于所使用字符的宽度。要将*prompt*分为多行，请用回车符(`Chr(13)`)、换行符(`Chr(10)`)或CR-LF组合(`vbCrLf`)分隔各行。

*buttons*
: *可选* [**VbMsgBoxStyle**](/official/Reference/VBA/Constants/VbMsgBoxStyle)值，指定要显示的按钮数量和类型、图标样式、默认按钮标识和消息框的模态性。如果省略，*buttons*默认为`vbOKOnly`。

*title*
: *可选* 字符串表达式，显示在对话框的标题栏中。如果省略，则使用应用程序名称。

*helpfile*
: *可选* 字符串表达式，标识用于为对话框提供上下文相关帮助的帮助文件。如果提供了*helpfile*，则还必须提供*context*。

*context*
: *可选* 数值表达式，给出分配给相关帮助主题的帮助上下文编号。如果提供了*context*，则还必须提供*helpfile*。

*buttons*参数是[**VbMsgBoxStyle**](/official/Reference/VBA/Constants/VbMsgBoxStyle)枚举值的组合：一个*按钮组*值（`vbOKOnly`、`vbOKCancel`、`vbAbortRetryIgnore`、`vbYesNoCancel`、`vbYesNo`、`vbRetryCancel`、`vbCancelTryAgainContinue`），可选结合一个*图标*值（`vbCritical`、`vbQuestion`、`vbExclamation`、`vbInformation`），一个*默认按钮*值（`vbDefaultButton1`到`vbDefaultButton4`），一个*模态性*值（`vbApplicationModal`、`vbSystemModal`），以及任何选项标志（`vbMsgBoxHelpButton`、`vbMsgBoxSetForeground`、`vbMsgBoxRight`、`vbMsgBoxRtlReading`）。使用**Or**或加法组合值。

返回值是[**VbMsgBoxResult**](/official/Reference/VBA/Constants/VbMsgBoxResult)枚举中的常量之一，标识用户点击的按钮。

如果对话框显示**Cancel**按钮，按ESC键与点击**Cancel**效果相同。同时提供*helpfile*和*context*时，用户可以按F1查看相关帮助主题；如果对话框还包含**Help**按钮，点击它会调用上下文相关帮助。对话框保持打开状态，**MsgBox**在点击非Help按钮之一之前不会返回。

::: info
要按名称传递任何参数（第一个除外），请在表达式上下文中使用**MsgBox**——例如，将其结果赋给变量。要跳过位置参数，请包含相应的逗号分隔符。
:::

### 示例

本示例在带有**Yes**和**No**按钮的对话框中显示严重错误消息；**No**按钮为默认按钮。**MsgBox**返回的值取决于用户点击的按钮。

```vb
Dim Style As VbMsgBoxStyle
Dim Response As VbMsgBoxResult

Style = vbYesNo Or vbCritical Or vbDefaultButton2
Response = MsgBox("Do you want to continue?", Style, "MsgBox Demonstration")

If Response = vbYes Then
    ' User chose Yes — perform the action.
Else
    ' User chose No — back out.
End If
```

### 另请参阅

- [InputBox](/official/Reference/VBA/Interaction/InputBox)函数
- [VbMsgBoxStyle](/official/Reference/VBA/Constants/VbMsgBoxStyle)枚举
- [VbMsgBoxResult](/official/Reference/VBA/Constants/VbMsgBoxResult)枚举