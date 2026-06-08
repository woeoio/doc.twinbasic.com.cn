---
title: "CustomControls 包"
parent: Packages
nav_order: 5
permalink: /tB/Packages/CustomControls/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '78582d7e-e5d9-4096-9322-9b62a751130d'
  PropagateID: '78582d7e-e5d9-4096-9322-9b62a751130d'
  ReservedCode1: 'fcf906d6-9285-4ea7-bc71-701c2b485310'
  ReservedCode2: 'fcf906d6-9285-4ea7-bc71-701c2b485310'
---

# CustomControls 包

**CustomControls** 内置包提供一组完全自绘控件——按钮、窗体、框架、网格、标签、滑块、文本框和定时器——以及它们所基于的框架。每个可见像素都由包自身渲染而非 Windows，因此外观在不同系统上完全一致，且完全通过少量样式对象（[**Fill**](/official/Reference/CustomControls/Styles/Fill)、[**Borders**](/official/Reference/CustomControls/Styles/Borders)、[**Corners**](/official/Reference/CustomControls/Styles/Corners)、[**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 等）进行配置，而非通过切换主题标志。

该包以两个配对组件的形式发布：一个 **CustomControls DESIGNER** 库——框架部分，源码侧项目 `CustomControls`——定义了渲染表面和每个自定义控件实现的接口；以及 **Custom Controls** 包——源码侧项目 `CustomControlsPackage`——提供八个具体的 `Waynes…` 控件。两者与 twinBASIC 同版本发布，始终一起发布；均为 MIT 许可。

除了提供即用控件外，该包同时也可作为编写新自定义控件的工作示例。`Waynes…` 类实现了与手写控件相同的 [**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl) 接口，使用相同的 [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext) 回调对象和 [**Canvas**](/official/Reference/CustomControls/Framework/Canvas) 绘图表面——参见 [Framework](/official/Reference/CustomControls/Framework/) 页面了解宿主侧契约。

```vb
Private Sub Form_Load()
    btnGo.Caption = "Continue"
    btnGo.NormalState.BackgroundFill.ColorPoints.SetSolidColor vbBlue
    btnGo.NormalState.Corners.SetAll tbCurve, 12
    txtName.Value = ""
End Sub

Private Sub btnGo_Click()
    MsgBox "Hello, " & txtName.Value
End Sub
```

## 控件

- [WaynesButton](/official/Reference/CustomControls/WaynesButton/) —— 自绘按钮，具有正常、悬停、焦点和按下等独立的视觉状态
- [WaynesForm](/official/Reference/CustomControls/WaynesForm/) —— 用于承载自定义控件的顶级窗体；暴露控制 Win32 框架的 **WindowsOptions** 子对象
- [WaynesFrame](/official/Reference/CustomControls/WaynesFrame) —— 矩形容器，以可配置背景填充其区域
- [WaynesGrid](/official/Reference/CustomControls/WaynesGrid/) —— 表格数据显示，具有列标题、行标题、悬停/选择状态和可调整列宽
- [WaynesLabel](/official/Reference/CustomControls/WaynesLabel) —— 静态文本显示，具有填充、文本渲染和标题
- [WaynesSlider](/official/Reference/CustomControls/WaynesSlider/) —— 水平或垂直值滑块，具有悬停/焦点状态和可拖动滑块
- [WaynesTextBox](/official/Reference/CustomControls/WaynesTextBox/) —— 单行可编辑文本字段，具有选择、插入符、代理对感知和内联文本装饰器
- [WaynesTimer](/official/Reference/CustomControls/WaynesTimer) —— 非可视定时器，以可编程间隔触发 **Timer** 事件

每个具体控件都实现了 [**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl) 并从内部基类继承少量布局和名称成员：

- 所有控件都暴露 **Name**、**Left**、**Top**、**Width**、**Height**、**Anchors**、**Dock** 和 **Visible**。
- 可以获取键盘焦点的控件（[**WaynesButton**](/official/Reference/CustomControls/WaynesButton/)、[**WaynesGrid**](/official/Reference/CustomControls/WaynesGrid/)、[**WaynesSlider**](/official/Reference/CustomControls/WaynesSlider/)、[**WaynesTextBox**](/official/Reference/CustomControls/WaynesTextBox/)）还暴露 **TabIndex** 和 **TabStop**。
- [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 则暴露窗体级成员：**FormDesignerId**、**Name**、位置/大小以及 **Controls** 集合。

这些成员列在每个控件自己的页面上；它们的定义相同，不会单独重复。

## 样式对象

每个控件的视觉风格由少量小型辅助类控制，通过 `Public WithEvents …` 属性自动实例化。它们可以任意嵌套——[**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 包含一个 [**Fill**](/official/Reference/CustomControls/Styles/Fill) 用于文本颜色，其中包含 `Granularity` 和 `FillColorPoint` 渐变 stops 数组；[**Border**](/official/Reference/CustomControls/Styles/Borders#border-class) 对象数组描述控件轮廓的绘制方式；等等。

- [Anchors](/official/Reference/CustomControls/Styles/Anchors) —— 容器调整大小时控件的哪些边附着到容器
- [Borders](/official/Reference/CustomControls/Styles/Borders) —— 绘制在控件周围的一个或多个边框笔触（包括单笔触 `Border` 子对象）
- [Corners](/official/Reference/CustomControls/Styles/Corners) —— 控件的四个角形状和半径（包括逐角 `Corner` 子对象）
- [Fill](/official/Reference/CustomControls/Styles/Fill) —— 绘制区域的颜色或渐变（包括 `FillColorPoint` / `FillColorPoints` 渐变 stop 子对象）
- [Line](/official/Reference/CustomControls/Styles/Line) —— 单条网格线或调整条笔触；比完整边框更细的形状
- [Padding](/official/Reference/CustomControls/Styles/Padding) —— [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 内文本的逐侧内边距
- [TextRendering](/official/Reference/CustomControls/Styles/TextRendering) —— 控件内绘制文本的字体、内边距、填充、轮廓、对齐和溢出（包括 `FontStyle` 子对象）

每个样式对象在设置其任意字段时都会触发 **OnChanged** 事件，承载它的控件在每次变更时请求重绘——在运行时赋值样式属性会立即触发重绘。

## 框架

用于编写新自定义控件或窗体，包的 **CustomControls DESIGNER** 部分提供：

- [ICustomControl](/official/Reference/CustomControls/Framework/ICustomControl) —— 每个自定义控件实现的接口：**Initialize**、**Destroy**、**Paint**
- [ICustomForm](/official/Reference/CustomControls/Framework/ICustomForm) —— 自定义窗体类的相应接口
- [CustomControlContext](/official/Reference/CustomControls/Framework/CustomControlContext) —— 传递给 **Initialize** 的回调对象；提供序列化器访问、重绘请求、定时器创建和焦点变更
- [CustomFormContext](/official/Reference/CustomControls/Framework/CustomFormContext) —— 扩展了 **CustomControlContext** 的 **Show** 和 **Close** 的窗体类控件回调
- [CustomControlTimer](/official/Reference/CustomControls/Framework/CustomControlTimer) —— 由 **CustomControlContext.CreateTimer** 返回的定时器；具有 **Interval**、**Enabled** 和 **OnTimer** 事件
- [CustomControlsCollection](/official/Reference/CustomControls/Framework/CustomControlsCollection) —— 窗体上的 **Controls** 集合
- [Canvas](/official/Reference/CustomControls/Framework/Canvas) —— 传递给 **Paint** 的绘图表面；向自定义控件输出像素的唯一方式
- [SerializeInfo](/official/Reference/CustomControls/Framework/SerializeInfo) —— 由 **CustomControlContext.GetSerializer** 返回的每实例序列化器；用于反序列化设计器设置的属性值和查询运行时模式

## 枚举

- [BorderStyle](/official/Reference/CustomControls/Enumerations/BorderStyle) —— 传递给 [**WindowsFormOptions.BorderStyle**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#borderstyle) 的窗体框架样式
- [ColorRGBA](/official/Reference/CustomControls/Enumerations/ColorRGBA) —— 32 位 ABGR 颜色值的 `Long` 兼容类型别名
- [CornerShape](/official/Reference/CustomControls/Enumerations/CornerShape) —— 控件单个角的形状：曲线、凹口或切角
- [Customtate](/official/Reference/CustomControls/Enumerations/Customtate) —— [**WindowState**](/official/Reference/CustomControls/Enumerations/WindowState) 的副本；保留
- [DockMode](/official/Reference/CustomControls/Enumerations/DockMode) —— 控件在其容器内的停靠方式
- [FillPattern](/official/Reference/CustomControls/Enumerations/FillPattern) —— [**Fill**](/official/Reference/CustomControls/Styles/Fill) 使用的渐变或填充模式
- [FontWeight](/official/Reference/CustomControls/Enumerations/FontWeight) —— 从 **tbThin** 到 **tbHeavy** 的字体粗细，映射 OpenType `wght` 刻度
- [PixelCount](/official/Reference/CustomControls/Enumerations/PixelCount) —— 以像素表示的测量值的 `Long` 兼容类型别名
- [PointSize](/official/Reference/CustomControls/Enumerations/PointSize) —— 以磅表示的字体大小的 `Long` 兼容类型别名
- [StartupPosition](/official/Reference/CustomControls/Enumerations/StartupPosition) —— 窗体首次显示时的初始位置
- [TextAlignment](/official/Reference/CustomControls/Enumerations/TextAlignment) —— [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 内文本的水平和垂直对齐
- [TextOverflowMode](/official/Reference/CustomControls/Enumerations/TextOverflowMode) —— 超出可用区域的文本如何截断
- [WindowState](/official/Reference/CustomControls/Enumerations/WindowState) —— 窗体的最小化/正常/最大化窗口状态