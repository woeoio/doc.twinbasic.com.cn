---
title: "WinNativeCommonCtls 包"
parent: Packages
nav_order: 12
permalink: /tB/Packages/WinNativeCommonCtls/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5eee7142-d31c-4024-a0dc-1eb5f3ac4023'
  PropagateID: '5eee7142-d31c-4024-a0dc-1eb5f3ac4023'
  ReservedCode1: '95af548d-2416-460d-8bca-790f3efa0731'
  ReservedCode2: '95af548d-2416-460d-8bca-790f3efa0731'
---

# WinNativeCommonCtls 包

**WinNativeCommonCtls** 内置包是 **Microsoft Common Controls 6.0**（旧版 `MSCOMCTL.OCX`）的VB6兼容替代品，基于 `COMCTL32.DLL` 和 `MSFTEDIT.DLL` 中的Win32 ComCtl32控件重新实现。它提供八个控件，尽可能镜像MSCOMCTL的成员名称，使用VB6开发者熟悉的相同属性/方法/事件拼写。

该包是twinBASIC附带的内置包。通过 Project → References（**Ctrl-T**）→ Available Packages 添加。

## 为什么需要此包

依赖 `MSCOMCTL.OCX` 的VB6项目无法在现代环境中直接运行 --- 该OCX未签名、需要管理员权限逐机注册、附带已知安全公告，且在非Windows主机上完全不可用。**WinNativeCommonCtls** 消除了这一依赖：将 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/)、[**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/)、[**ProgressBar**](/official/Reference/WinNativeCommonCtls/ProgressBar)、[**Slider**](/official/Reference/WinNativeCommonCtls/Slider)、[**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/)、[**DTPicker**](/official/Reference/WinNativeCommonCtls/DTPicker)、[**MonthView**](/official/Reference/WinNativeCommonCtls/MonthView) 或 [**UpDown**](/official/Reference/WinNativeCommonCtls/UpDown) 拖放到 [**Form**](/official/Reference/VB/Form/) 上，twinBASIC直接创建底层Win32 ComCtl32控件，无需OCX。

控件名称、属性名称、事件签名以及 `vb…` / `tvw…` / `lvw…` / `sld…` / `Prb…` 成员命名约定均与原始 `MSCOMCTL.OCX` API匹配，因此使用原始控件的VB6代码在添加包引用后通常无需修改即可编译运行。

## 控件

八个控件，每个都是叶类，继承自声明完整API的 `<Name>BaseCtl`：

- [DTPicker](/official/Reference/WinNativeCommonCtls/DTPicker) --- 日期/时间选择器：下拉日历、单日期 [**Value**](/official/Reference/WinNativeCommonCtls/DTPicker#value)、自定义格式字符串、可选微调按钮和复选框变体
- [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/) --- 离屏图像集合，通过 [**Icons**](/official/Reference/WinNativeCommonCtls/ListView/#icons) / [**SmallIcons**](/official/Reference/WinNativeCommonCtls/ListView/#smallicons) / [**ImageList**](/official/Reference/WinNativeCommonCtls/TreeView/#imagelist) 属性为 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 和 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 提供图标；运行时不可见
- [ListView](/official/Reference/WinNativeCommonCtls/ListView/) --- 多列列表，支持四种 [**View**](/official/Reference/WinNativeCommonCtls/ListView/#view) 模式（Icon / SmallIcon / List / Report）、标签编辑、复选框、列头图标和逐项状态
- [MonthView](/official/Reference/WinNativeCommonCtls/MonthView) --- 全月日历网格，支持多月布局（[**MonthColumns**](/official/Reference/WinNativeCommonCtls/MonthView#monthcolumns) × [**MonthRows**](/official/Reference/WinNativeCommonCtls/MonthView#monthrows)）、多日选择、粗体日期回调高亮、周数和今日指示器
- [ProgressBar](/official/Reference/WinNativeCommonCtls/ProgressBar) --- 标准/平滑/跑马灯进度指示器，支持三种视觉状态（Normal / Error / Paused），水平或垂直方向
- [Slider](/official/Reference/WinNativeCommonCtls/Slider) --- 带刻度标记的轨道条/滑块，可选选择范围、垂直或水平方向，以及带浮动提示的可拖动滑块
- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) --- [**Node**](/official/Reference/WinNativeCommonCtls/TreeView/Node) 对象的层次树，支持排序、标签编辑、复选框、图像列表和逐节点粗体/颜色覆盖
- [UpDown](/official/Reference/WinNativeCommonCtls/UpDown) --- 带上/下箭头的微调控件：纯 [**Min**](/official/Reference/WinNativeCommonCtls/UpDown#min) / [**Max**](/official/Reference/WinNativeCommonCtls/UpDown#max) / [**Value**](/official/Reference/WinNativeCommonCtls/UpDown#value) / [**Increment**](/official/Reference/WinNativeCommonCtls/UpDown#increment)（无自动伙伴）

[**ListView**](/official/Reference/WinNativeCommonCtls/ListView/)、[**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 和 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 包含集合子对象 --- 参见文件夹索引页获取完整层次结构。

## 枚举

跨多个控件共享的模块级枚举位于 [**Enumerations**](/official/Reference/WinNativeCommonCtls/Enumerations/) 下；每个控件嵌套的枚举（`ListViewConstants`、`PrbState`、`TickStyleConstants` 等）在声明它们的控件页面上进行文档说明。

- [Enumerations](/official/Reference/WinNativeCommonCtls/Enumerations/) --- 共享模块中声明的十个面向用户的枚举

## 跨控件成员

每个控件都从 `BaseControl` / `BaseControlRect` / `BaseControlRectDockable` / `BaseControlFocusable`（或 `BaseControlNotFocusable`，当控件无法获取焦点时）继承标准VB包成员。继承成员包括：

- **定位和布局** --- **Name**、**Left**、**Top**、**Width**、**Height**、**Anchors**、**Dock**、**Visible**、**Enabled**、**Move**、**Refresh**、**ZOrder**、**Container**、**Parent**、**Index**、**Tag**、**hWnd**
- **外观** --- **BackColor** / **ForeColor** / **Font**（可聚焦控件）、**Appearance**、**VisualStyles**、**MousePointer** / **MouseIcon**
- **工具提示、拖放、验证** --- **ToolTipText**、**DragMode** / **DragIcon**、**Drag**、**CausesValidation**、**Validate** 事件
- **焦点**（仅可聚焦控件）--- **SetFocus**、**TabIndex**、**TabStop**、**GotFocus** / **LostFocus** 事件
- **帮助集成** --- **HelpContextID**、**WhatsThisHelpID**
- **OLE 拖放** --- **OLEDropMode**、**OLEDrag** 方法，以及 **OLEStartDrag** / **OLEGiveFeedback** / **OLESetData** / **OLEDragOver** / **OLEDragDrop** / **OLECompleteDrag** 事件。参见 [**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)
- **透明度** --- **Opacity**（`Double`，0--100，百分比）和 **TransparencyKey**（`OLE_COLOR`，`-1` 禁用）。两者都需要Windows 8（目标OS 6.2+）用于子控件；在较旧OS版本上静默无操作

每个控件的参考页列出了控件特定成员 --- 自有属性、方法、事件和嵌套枚举 --- 不再每次重新枚举整个继承基类。

## 控件类型常量

每个控件对应 [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) 中的一个 `vb…` 值：

| 常量            | 值 | 控件                            |
|---------------------|-------|------------------------------------|
| **vbProgressBar**   | 21    | [ProgressBar](/official/Reference/WinNativeCommonCtls/ProgressBar)         |
| **vbTreeView**      | 22    | [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/)              |
| **vbSlider**        | 26    | [Slider](/official/Reference/WinNativeCommonCtls/Slider)                   |
| **vbUpDown**        | 27    | [UpDown](/official/Reference/WinNativeCommonCtls/UpDown)                   |
| **vbDTPicker**      | 28    | [DTPicker](/official/Reference/WinNativeCommonCtls/DTPicker)               |
| **vbMonthView**     | 29    | [MonthView](/official/Reference/WinNativeCommonCtls/MonthView)             |
| **vbListView**      | 30    | [ListView](/official/Reference/WinNativeCommonCtls/ListView/)              |
| **vbImageList**     | 31    | [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/)            |

每个控件的 **ControlType** 属性在运行时返回其常量，允许通过窗体 **Controls** 集合的通用 `For Each` 循环来区分控件。

## 另见

- [VB 包](/official/Reference/VB/) --- 标准控件集：**CheckBox**、**CommandButton**、**TextBox**、**Frame**、**Form** 等
- [CustomControls 包](/official/Reference/CustomControls/) --- 当Win32 API不够用时，自绘 `Waynes…` 自定义控件
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- 每个控件的 **ControlType** 属性使用的 `vb…` 区分常量
- [OLEDropConstants](/official/Reference/VBRUN/Constants/OLEDropConstants) --- 此包中每个控件共享的 **OLEDropMode** 值