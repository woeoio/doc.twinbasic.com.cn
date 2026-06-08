---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6e9fee87-27a6-47c9-a2be-1a5f4e83ec40'
  PropagateID: '6e9fee87-27a6-47c9-a2be-1a5f4e83ec40'
  ReservedCode1: '5b1454fb-79a4-417a-a7dc-e1522244f7c4'
  ReservedCode2: '5b1454fb-79a4-417a-a7dc-e1522244f7c4'
---

---
title: Screen
parent: VB Package
permalink: /tB/Packages/VB/Screen/
---

# Screen 类

**Screen**类包装用户的主显示器——其尺寸和缇到像素比率、已安装字体列表、当前活动的[**Form**](/official/Reference/VB/Form/)以及该窗体上当前拥有焦点的控件、以及应用程序范围的鼠标指针覆盖。它是单例：每个进程恰好有一个**Screen**实例，由运行时拥有，通过[**Global**](/official/Reference/VB/Global/)应用对象的[**Screen**](/official/Reference/VB/Global/#screen)属性公开。代码无需限定即可访问：

```vb
' 在主显示器上居中窗体
Me.Left = (Screen.Width  - Me.Width)  \ 2
Me.Top  = (Screen.Height - Me.Height) \ 2

' 在长时间任务期间在整个应用程序上显示沙漏光标
Screen.MousePointer = vbHourglass
LongRunningWork
Screen.MousePointer = vbDefault
```


## 尺寸和DPI

[**Width**](#width)和[**Height**](#height)以缇报告主显示器的尺寸——窗体和控件默认使用的同一单位。转换因子也可获取：

- [**TwipsPerPixelX**](#twipsperpixelx)——主显示器每个水平像素的缇数。
- [**TwipsPerPixelY**](#twipsperpixely)——每个垂直像素的缇数。

在96-DPI显示器上，两者均为`15`（每逻辑英寸1440缇÷每英寸96像素）；在144-DPI显示器上为`10`。当与Win32 API互操作需要强制在像素和窗体侧坐标系统之间转换时使用。

::: info
twinBASIC的**Screen**仅描述*主*显示器。对于多显示器配置中的逐显示器信息，请回退到Win32 `EnumDisplayMonitors` / `GetMonitorInfo` API。
:::

## 活动窗体和活动控件

[**ActiveForm**](#activeform)返回应用程序中当前为前台窗体的[**Form**](/official/Reference/VB/Form/)实例；[**ActiveControl**](#activecontrol)返回该窗体中当前拥有焦点的控件。如果应用程序中没有活动窗体，两者均返回**Nothing**。

最常见的模式是从全局处理器访问活动窗体——例如，[**MDIForm**](/official/Reference/VB/MDIForm/)上对任何在前面的MDI子级进行操作的工具栏按钮：

```vb
Private Sub tbrEdit_ButtonClick(ByVal Button As MSComctlLib.Button)
    Dim f As Form
    Set f = Screen.ActiveForm
    If f Is Nothing Then Exit Sub
    Select Case Button.Key
        Case "Cut":   f.ActiveControl.SelText = ""
        Case "Copy":  Clipboard.SetText f.ActiveControl.SelText
        ...
    End Select
End Sub
```

## 字体

[**FontCount**](#fontcount)是操作系统为当前显示上下文报告的字体数量；[**Fonts**](#fonts)(*Index*)返回*Index*处字体的名称——`0`到`FontCount - 1`。它们一起使应用程序无需通过Win32 `EnumFontFamilies` API即可构建字体选择器。

```vb
Dim i As Integer
For i = 0 To Screen.FontCount - 1
    cboFonts.AddItem Screen.Fonts(i)
Next
```

## 鼠标指针覆盖

[**MousePointer**](#mousepointer)是应用程序范围的光标覆盖。将其设置为**vbDefault**以外的值会将所选光标强制应用于应用程序的每个窗口，忽略每个控件各自的[**MousePointer**](/official/Reference/VB/CheckBox/#mousepointer)设置——典型用途是在同步操作运行期间显示沙漏。操作完成后将其设置回**vbDefault**。

[**MouseIcon**](#mouseicon)提供当[**MousePointer**](#mousepointer)为**vbCustom**时使用的自定义**StdPicture**。

## 属性

### ActiveControl

[**ActiveForm**](#activeform)上当前拥有输入焦点的控件，作为[**Control**](/official/Reference/VB/CheckBox/)引用，如果没有活动窗体则为**Nothing**。只读。

### ActiveForm

应用程序中当前为前台窗体的[**Form**](/official/Reference/VB/Form/)，如果没有活动窗体则为**Nothing**。只读。

### FontCount

操作系统报告为当前显示上下文可用的字体数量。**Integer**，只读。

### Fonts

给定从0开始的索引处的字体名称，按操作系统报告的顺序。**String**，只读。

语法：*object*.**Fonts**( *Index* )

*Index*
: *必需* 范围为`0`到[**FontCount**](#fontcount) `- 1`的**Integer**。超出范围的索引返回空字符串。

### Height

主显示器的高度，以缇为单位。**Single**，只读。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**时使用的自定义光标图片，类型为**StdPicture**。可读可写（`Let`），可通过引用赋值（`Set`）。

### MousePointer

应用程序范围的鼠标指针覆盖，作为[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。**Integer**，可读可写。

将**MousePointer**设置为**vbDefault** (0)以外的值会将所选光标强制应用于应用程序的每个窗口，忽略每个控件的覆盖。典型用途是在同步长时间操作期间显示**vbHourglass**；操作完成后设置回**vbDefault**。

### TwipsPerPixelX

主显示器每个水平像素的缇数，类型为**Single**。有效值为`1440 / dpi_x`。通过无参数函数调用返回。

语法：*object*.**TwipsPerPixelX**( )

### TwipsPerPixelY

主显示器每个垂直像素的缇数，类型为**Single**。有效值为`1440 / dpi_y`。通过无参数函数调用返回。

语法：*object*.**TwipsPerPixelY**( )

### Width

主显示器的宽度，以缇为单位。**Single**，只读。