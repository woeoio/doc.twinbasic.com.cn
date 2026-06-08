---
title: WaynesTextBox
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesTextBox/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '691a0abd-4f99-46cf-b3eb-3570170163f0'
  PropagateID: '691a0abd-4f99-46cf-b3eb-3570170163f0'
  ReservedCode1: '78aaa056-4293-4915-8bcf-b0c49c8e619e'
  ReservedCode2: '78aaa056-4293-4915-8bcf-b0c49c8e619e'
---

# WaynesTextBox 类
单行可编辑文本字段。用户可以输入文本、用鼠标或 Shift+光标键选择文字、用 **Ctrl+Left** / **Ctrl+Right** 逐词跳转、双击选词，以及用标准 Windows 快捷键复制/剪切/粘贴/全选。控件在可配置背景之上绘制自己的插入符、选择高亮和内联文本装饰器（*ERROR* 的波浪线、*WARNING* 的下划线、*INFO* 的背景高亮）。

控件绘制三种视觉状态（[**NormalState**](#normalstate)、[**HoverState**](#hoverstate)、[**FocusedState**](#focusedstate)），由并行的 [**WaynesTextBoxState**](/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState) 子对象控制，每个子对象有独立的背景填充、边框、角、文本渲染、选择颜色、插入符颜色和装饰器颜色。

当前文本保存在 [**Value**](#value) 中。代理对字符由光标/选择逻辑正确处理——插入符不会出现在代理对的高半部分和低半部分之间。

```vb
Private Sub Form_Load()
    txtName.Value = ""
    txtName.NormalState.TextRendering.Padding.Left = 6
    txtName.NormalState.TextRendering.Padding.Right = 6
End Sub
```

三种状态独立样式——常见模式是给焦点状态更粗的强调色边框和更亮的填充，使活动字段从同辈中突出：

```vb
Private Sub Form_Load()
    With txtName.NormalState
        .BackgroundFill.ColorPoints.SetSolidColor vbWhite
        .Borders.SetSimpleBorder StrokeSize:=1, ColorRGB:=&HC0C0C0
        .Corners.SetAll tbCurve, 4
        .TextRendering.Padding.Left = 6
        .TextRendering.Padding.Right = 6
    End With

    With txtName.FocusedState
        .BackgroundFill.ColorPoints.SetSolidColor vbWhite
        .Borders.SetSimpleBorder StrokeSize:=2, ColorRGB:=&HC07014  ' accent blue
        .Corners.SetAll tbCurve, 4
        .TextRendering.Padding.Left = 6
        .TextRendering.Padding.Right = 6
    End With
End Sub
```

## 内联文本装饰器

用户输入时，控件自动标记 [**Value**](#value) 中三个字面字符串的出现：

- `ERROR` —— 红色波浪下划线（颜色来自 [**WaynesTextBoxState.DecorationERROR**](/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState#decorationerror)）。
- `WARNING` —— 深蓝色 2 像素直线下划线（来自 [**DecorationWARNING**](/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState#decorationwarning)）。
- `INFO` —— 浅蓝色背景高亮（来自 [**DecorationINFO**](/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState#decorationinfo)）。

颜色可按视觉状态配置。子字符串本身在当前版本中控件的绘制逻辑中硬编码。

## 属性

### Anchors

调整大小时控件的哪些边附着到其容器。[**Anchors**](/official/Reference/CustomControls/Styles/Anchors)。继承。

### Dock

控件在其容器内的停靠方式。[**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) 的成员。继承。

### FocusedState

控件具有键盘焦点时使用的 [**WaynesTextBoxState**](/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState)。预设焦点特定默认值——橙色插入符、蓝色选择背景。

### Height

控件的高度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### HoverState

鼠标悬停在文本框上但未获得焦点时使用的 [**WaynesTextBoxState**](/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState)。

### Left

控件左边缘距其容器的水平偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Name

控件在其父窗体上的唯一设计时名称。**String**。继承。

### NormalState

文本框空闲时——未焦点且未悬停——使用的 [**WaynesTextBoxState**](/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState)。

### TabIndex

控件在窗体 TAB 键导航顺序中的位置。**Long**。继承。

### TabStop

用户是否可以通过按 **TAB** 到达控件。**Boolean**。继承。默认：**True**。

### Top

控件上边缘距其容器的垂直偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Value

字段中的当前文本。**String**。默认：`"Textbox"`。

语法：*object*.**Value** [ = *string* ]

### Visible

控件当前是否显示。**Boolean**。继承。默认：**True**。

### Width

控件的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。