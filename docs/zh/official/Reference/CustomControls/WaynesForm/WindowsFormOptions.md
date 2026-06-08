---
title: WindowsFormOptions
parent: WaynesForm
permalink: /tB/Packages/CustomControls/WaynesForm/WindowsFormOptions
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1ff8ed97-555d-468a-9ba5-7743d4d3f3ed'
  PropagateID: '1ff8ed97-555d-468a-9ba5-7743d4d3f3ed'
  ReservedCode1: 'fcbb3794-bd5d-43a5-a4a1-e026b100c01b'
  ReservedCode2: 'fcbb3794-bd5d-43a5-a4a1-e026b100c01b'
---

# WindowsFormOptions 类
[**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 的 Win32 框架设置——边框样式、初始窗口状态、启动位置、任务栏可见性和标题栏按钮。作为 [**WaynesForm.WindowsOptions**](/official/Reference/CustomControls/WaynesForm/#windowsoptions) 暴露；每个窗体一个实例，自动创建。

大多数字段仅在窗体首次显示时生效*一次*——在已可见的窗体上更改 [**StartUpPosition**](#startupposition) 或 [**WindowState**](#windowstate) 无效。例外是标题栏按钮；它们是否有可见效果取决于 [**BorderStyle**](#borderstyle) 是否为包含这些按钮的样式。

该类型本身为 `Private Class`——实例只能通过窗体的 **WindowsOptions** 属性访问，无法在包外声明 **WindowsFormOptions** 类型的变量。

```vb
Private Sub Form_Load()
    With Me.WindowsOptions
        .StartUpPosition = tbStartUpCenterScreen
        .BorderStyle = tbFixedDialog
        .MaximizeButton = False
        .ShowInTaskbar = False
    End With
End Sub
```

## 属性

### BorderStyle

Win32 框架样式——细/粗边框、可调/固定大小、普通/工具窗口标题栏。[**BorderStyle**](/official/Reference/CustomControls/Enumerations/BorderStyle) 的成员。默认：**tbFixedSizable**。

### ControlBox

窗体标题栏是否显示系统控制框（标题栏最左侧的图标，带 **移动** / **关闭** 菜单）。**Boolean**。默认：**True**。

### MaximizeButton

标题栏是否显示**最大化**按钮。**Boolean**。默认：**True**。仅在 [**BorderStyle**](#borderstyle) 为可调大小样式时生效。

### MinimizeButton

标题栏是否显示**最小化**按钮。**Boolean**。默认：**True**。仅在 [**BorderStyle**](#borderstyle) 为支持最小化的样式时生效。

### ShowInTaskbar

窗体窗口是否出现在 Windows 任务栏中。**Boolean**。默认：**True**。

### StartUpPosition

窗体首次显示时的窗口定位方式。[**StartupPosition**](/official/Reference/CustomControls/Enumerations/StartupPosition) 的成员。默认：**tbStartUpWindowsDefault**。

### WindowState

窗体首次显示时的窗口状态——正常、最小化或最大化。[**WindowState**](/official/Reference/CustomControls/Enumerations/WindowState) 的成员。默认：**tbNormal**。

## 事件

### OnChanged

七个字段中任一个被赋值时触发。父 [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 监听此事件并在（适用于尚未显示的窗体时）重新应用框架设置。