---
title: WaynesForm
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesForm/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3a41634f-9962-4019-9cf3-fe347ad9dade'
  PropagateID: '3a41634f-9962-4019-9cf3-fe347ad9dade'
  ReservedCode1: 'e436588d-dc28-4c2e-9cc1-58cae48a9edc'
  ReservedCode2: 'e436588d-dc28-4c2e-9cc1-58cae48a9edc'
---

# WaynesForm 类
承载包的自定义控件的顶级窗体类。**WaynesForm** 等同于 [**VB**](/official/Reference/VB/) 包中的 `Form`，但它不是承载控件覆盖在上面的 Win32 原生窗口，而是通过 [**CustomControls**](/official/Reference/CustomControls/) 框架绘制自身及其子控件的自绘表面。

在包当前版本中，使用设计器创建的每个窗体都硬编码使用 **WaynesForm** 作为其根类；其他基窗体类已计划但尚不支持。

窗体具有 [**Caption**](#caption)（显示在 Win32 标题栏中）、[**BackgroundFill**](#backgroundfill)（绘制在其整个客户区域）和 [**WindowsOptions**](#windowsoptions) 子对象控制周围的 Win32 框架——边框样式、窗口状态、任务栏可见性、最小化/最大化按钮等。调用 [**Show**](#show) 显示窗体；调用 [**Close**](#close) 关闭窗体。

```vb
Private Sub Form_Load()
    Me.Caption = "Welcome"
    Me.BackgroundFill.ColorPoints.SetSolidColor vbWhite
    With Me.WindowsOptions
        .StartUpPosition = tbStartUpCenterScreen
        .BorderStyle = tbFixedDialog
        .MaximizeButton = False
    End With
End Sub
```

[**BackgroundFill**](#backgroundfill) 是普通的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)，因此窗体可以显示渐变背景或纯色——包的 `HelloWorld` 示例窗体正是使用此功能给自己一个柔和的上到下渐变：

```vb
Private Sub Form_Load()
    Me.BackgroundFill.SetSimplePattern &HE5E5E5, &HF8F8F8, _
            Pattern:=tbGradientNorthToSouth
End Sub
```

## 模态显示

当前版本仅支持模态显示。使用 **vbModeless** 调用 [**Show**](#show) 会输出调试打印消息，否则无效——调用 **Show vbModal** 显示窗体。

## 属性

### BackgroundFill

绘制窗体整个客户区域的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。默认为纯浅灰色（[**WAYNESCOLOR_LIGHTGREY**](#) —— `&HD0D0D0`）。

### Caption

窗体 Win32 标题栏中显示的文本。**String**。

语法：*object*.**Caption** [ = *string* ]

### Controls

窗体上承载的所有控件的 [**CustomControlsCollection**](/official/Reference/CustomControls/Framework/CustomControlsCollection)。从窗体基类继承。只读——通过迭代或按索引/名称查找来访问单个控件。

### FormDesignerId

保存将此窗体实例与其设计器保存元数据关联的唯一 GUID 的 **String**。从窗体基类继承。应用程序代码通常不读写此属性——由框架填充。

### Height

窗体的高度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Left

窗体的左边位置（像素）——仅在 [**WindowsOptions.StartUpPosition**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#startupposition) 为 **tbStartUpManual** 时生效。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Name

窗体在项目中的名称。**String**。继承。

### Top

窗体的顶部位置（像素）——仅在 [**WindowsOptions.StartUpPosition**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#startupposition) 为 **tbStartUpManual** 时生效。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Width

窗体的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### WindowsOptions

控制 Win32 框架的 [**WindowsFormOptions**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions)——边框样式、窗口状态、任务栏可见性、最小化/最大化按钮、系统菜单。

## 方法

### Close

关闭窗体的底层窗口。

语法：*object*.**Close**

### Show

显示窗体。当前版本仅支持模态显示——使用 **vbModeless** 调用会输出调试消息，否则无效。

语法：*object*.**Show** [ *Modal* ]

*Modal*
: *可选* [**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants) 的成员。传 **vbModal** 用于支持的模态显示；**vbModeless** 目前无效。

### StartupShow

无条件显示窗体——由框架用于显示项目的启动窗体。应用程序代码可以调用它，但 [**Show**](#show) 是正常入口。

语法：*object*.**StartupShow**

## 事件

### Click

用户点击窗体背景时触发——即未被承载控件占据的区域。

语法：*object*\_**Click**( )