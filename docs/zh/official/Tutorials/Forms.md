---
title: "窗体基础"
parent: Tutorials
permalink: /Tutorials/Forms
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '50637065-6dac-4310-8138-6f9cb4504abf'
  PropagateID: '50637065-6dac-4310-8138-6f9cb4504abf'
  ReservedCode1: '621027ab-e4cb-410c-b229-aed0ffb63dae'
  ReservedCode2: '621027ab-e4cb-410c-b229-aed0ffb63dae'
---

# 窗体基础

本教程构建一个小型温度转换器应用程序。完成后你将知道如何向窗体添加标准控件、在设计时和运行时设置其属性、编写事件处理程序以及验证用户输入。


## 你将构建什么

一个带有一个窗体的标准EXE。用户输入温度值，选择转换方向（摄氏转华氏或华氏转摄氏），点击按钮，查看结果。完成的窗体大致如下：

<!-- screenshot: completed temperature converter form showing txtInput, fraDirection frame with two OptionButtons, cmdConvert button, and lblResult label -->

这个示例足够小，不到十分钟就能完成，但它涉及了几乎所有VB6兼容程序中都会出现的控件和模式。

## 步骤1：创建项目

打开twinBASIC，选择**文件 → 新建项目 → 标准EXE**。IDE会创建一个新项目，其中包含一个已在设计器中打开的窗体 `Form1`。

<!-- screenshot: New Project dialog with Standard EXE selected -->

## 步骤2：添加和排列控件

左侧的工具箱面板列出了当前项目中可用的控件。你需要四种控件类型：**Label**、**TextBox**、**Frame**（用于分组OptionButton）、**OptionButton**、**CommandButton**和第二个用于输出的**Label**。如果工具箱不可见，通过**视图 → 工具箱**打开它。

双击工具箱中的控件将其放置到窗体上，或在工具箱中单击一次然后在窗体上拖动矩形来放置和调整大小。

按顺序添加以下控件：

| 控件 | 名称 | 标题/文本 | 用途 |
|---------|------|----------------|---------|
| Label | `lblInputPrompt` | `Temperature:` | 输入字段的提示 |
| TextBox | `txtInput` | *(空白)* | 用户在此输入温度值 |
| Frame | `fraDirection` | `Convert` | 分组两个OptionButton |
| OptionButton | `optCtoF` | `Celsius → Fahrenheit` | 方向选择器 |
| OptionButton | `optFtoC` | `Fahrenheit → Celsius` | 方向选择器 |
| CommandButton | `cmdConvert` | `Convert` | 触发计算 |
| Label | `lblResult` | *(空白)* | 显示结果 |

要重命名控件，选中它并在右侧的属性窗口中更改**Name**属性。通过设置**Caption**属性（用于标签、框架、选项按钮和命令按钮）或**Text**属性（用于文本框）来更改显示文本。

::: info
将两个OptionButton放在Frame内部，方法是拖动它们到框架上而不是直接到窗体上。Frame内的控件形成互斥组——选择一个会自动取消选择其他。
:::

### 在设计时设置属性

选中 `optCtoF` 并在属性窗口中将其**Value**属性设为 `True`。这使其成为窗体打开时的默认选择。

选中 `lblResult` 并设置其**Font**属性。点击Font值旁边的 `...` 按钮打开字体对话框。选择一个使结果易于阅读的大小，如12磅。

<!-- screenshot: Properties window showing lblResult selected with Font property highlighted -->

## 步骤3：编写事件处理程序

在设计器中双击 `cmdConvert` 按钮。IDE切换到代码编辑器并为按钮的Click事件创建一个框架：

```vb
Private Sub cmdConvert_Click()

End Sub
```

按以下内容填充：

```vb
Private Sub cmdConvert_Click()
    If Not IsNumeric(txtInput.Text) Then
        lblResult.Caption = "Please enter a number."
        Exit Sub
    End If

    Dim value As Double
    value = CDbl(txtInput.Text)

    Dim result As Double
    Dim unit As String

    If optCtoF.Value Then
        result = value * 9 / 5 + 32
        unit = "°F"
    Else
        result = (value - 32) * 5 / 9
        unit = "°C"
    End If

    lblResult.Caption = Format(result, "0.00") & " " & unit
End Sub
```

处理程序：

1. 在转换前检查输入是否为数字。[**IsNumeric**](/official/Reference/VBA/Information/IsNumeric)对空字符串、字母或除小数点和前导负号外的标点符号返回 `False`。
2. 读取 `optCtoF.Value` 来确定方向。因为两个OptionButton在同一个Frame中，它们中恰好有一个始终为 `True`。
3. 调用[**Format**](/official/Reference/VBA/Strings/Format)将结果四舍五入到两位小数。

## 步骤4：运行应用程序

按**F5**（或**运行 → 启动**）。窗体出现。在文本框中输入 `100`，确保选中了 `Celsius → Fahrenheit`，然后点击**Convert**。标签应显示 `212.00 °F`。

试试切换到 `Fahrenheit → Celsius` 并转换 `32`——结果应为 `0.00 °C`。

关闭窗体以停止应用程序并返回IDE。

## 在运行时设置属性

设计时属性方便但有限。你可以随时从代码中读写大多数控件属性。添加一个 `Form_Load` 处理程序来设置窗体的标题栏文本并给 `lblResult` 一个初始标题：

```vb
Private Sub Form_Load()
    Me.Caption = "Temperature Converter"
    lblResult.Caption = "Enter a value and click Convert."
    optCtoF.Value = True    ' ensure the default is set in code too
End Sub
```

`Me` 引用当前窗体——等同于在窗体自身模块内编写 `Form1`。

## 处理KeyPress事件

当用户在文本框中按**Enter**键时触发转换通常很方便，无需点击按钮。在设计器中双击 `txtInput` 打开代码编辑器，然后从右上角的事件下拉框中选择 `KeyPress`：

```vb
Private Sub txtInput_KeyPress(KeyAscii As Integer)
    If KeyAscii = vbKeyReturn Then
        KeyAscii = 0          ' suppress the beep
        cmdConvert_Click      ' reuse the button's handler
    End If
End Sub
```

[**vbKeyReturn**](/official/Reference/VBRUN/Constants/KeyCodeConstants)是Enter键的常量（ASCII 13）。将 `KeyAscii` 设为 `0` 告诉控件不再处理该按键——没有这行代码，在TextBox中按Enter会在大多数系统上发出蜂鸣声。

## 关于锚定和停靠的说明

上面添加的控件使用绝对位置。如果用户调整窗体大小，控件会停留在你放置的位置，布局可能看起来不协调。twinBASIC支持**锚定**（控件与一个或多个窗体边缘保持固定距离）和**停靠**（控件填充边缘或整个客户区）。

这些行为通过VB包控件上的**Anchor**和**Dock**属性设置。完整说明见[特性 → 锚定和停靠](/official/Features/GUI-Components/Anchoring-Docking)。

## 下一步

- **Windows API** —— 调用Win32函数读取系统信息和驱动平台功能：[调用Windows API](/official/Tutorials/Windows-API)
- **自定义控件** —— 带渐变填充和逐像素绘制的自绘控件：[CustomControls教程](/official/Tutorials/CustomControls/)
- **WebView2** —— 在窗体中嵌入Microsoft Edge浏览器引擎：[WebView2教程](/official/Tutorials/WebView2/)