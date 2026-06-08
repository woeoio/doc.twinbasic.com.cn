---
title: "控件"
parent: Reference Section
nav_order: 7
permalink: /tB/Controls
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3139915f-0f8d-483f-a62d-0066969a10a2'
  PropagateID: '3139915f-0f8d-483f-a62d-0066969a10a2'
  ReservedCode1: '7b6a4824-733b-4801-a278-efa516a9ebfb'
  ReservedCode2: '7b6a4824-733b-4801-a278-efa516a9ebfb'
---

# 控件

twinBASIC附带的标准UI控件类位于**VB**内置包中 --- 参见[VB包](/official/Reference/VB/)的包主页。以下控件按用途分组；每个条目链接到对应类的参考页。

## 窗体和宿主类

这些类是*容器*而非严格意义上的控件 --- 它们承载其他控件，并支撑IDE中的窗体/控件设计器。

- [Form](/official/Reference/VB/Form/) -- 承载控件、菜单和绘图表面的顶级窗口。
- [MDIForm](/official/Reference/VB/MDIForm/) -- 顶级MDI父窗口，在凹陷的客户区内承载MDI子[Form](/official/Reference/VB/Form/)实例。
- [UserControl](/official/Reference/VB/UserControl/) -- 用于在twinBASIC中设计可重用ActiveX控件的基类。
- [PropertyPage](/official/Reference/VB/PropertyPage/) -- 支撑COM属性页对话框单个标签页的容器（ActiveX控件属性浏览器上的**(Custom)**弹出页）。
- [Report](/official/Reference/VB/Report/) -- 专用于带状报表布局、打印预览和打印的顶级窗口。

## 按钮和切换

- [CommandButton](/official/Reference/VB/CommandButton/) -- 用于触发操作的按钮。
- [CheckBox](/official/Reference/VB/CheckBox/) -- 两态或三态复选框，带可选文本标题。
- [CheckMark](/official/Reference/VB/CheckMark/) -- 无窗口复选标记，自动缩放填充其矩形区域；无标题，无焦点。
- [OptionButton](/official/Reference/VB/OptionButton/) -- 单选按钮；共享同一容器的单选按钮构成互斥组。

## 文本和值输入

- [TextBox](/official/Reference/VB/TextBox/) -- 单行或多行编辑控件，可选密码掩码和仅数字输入。
- [ComboBox](/official/Reference/VB/ComboBox/) -- 编辑字段与下拉列表组合的控件。
- [ListBox](/official/Reference/VB/ListBox/) -- 垂直滚动的项目列表，可选多列和多选。
- [HScrollBar](/official/Reference/VB/HScrollBar/) -- 独立的水平滚动条。
- [VScrollBar](/official/Reference/VB/VScrollBar/) -- 独立的垂直滚动条。

## 文件系统浏览

这三个控件通常连接在一起以构建完整的文件选择器。

- DriveListBox --- 驱动器选择器。*尚未文档化。*
- [DirListBox](/official/Reference/VB/DirListBox/) -- 单路径目录树选择器。
- [FileListBox](/official/Reference/VB/FileListBox/) -- 单目录文件列表，可按通配符和文件属性开关进行筛选。

## 容器

- [Frame](/official/Reference/VB/Frame/) -- 带标题的容器，用于分组相关控件并限定[OptionButton](/official/Reference/VB/OptionButton/)组的范围。
- [MultiFrame](/official/Reference/VB/MultiFrame/) -- 布局容器，将一组[Frame](/official/Reference/VB/Frame/)控件排列成水平或垂直条带。
- [PictureBox](/official/Reference/VB/PictureBox/) -- Win32原生控件，结合了图片显示、绘图表面和子控件容器功能。

## 仅显示

- [Label](/official/Reference/VB/Label/) -- 无窗口轻量级只读文本显示，用于标题、状态文本和键盘助记符。
- [Image](/official/Reference/VB/Image/) -- 无窗口轻量级图片显示；是[PictureBox](/official/Reference/VB/PictureBox/)的小巧高效替代方案。
- [Line](/official/Reference/VB/Line/) -- 无窗口的两个端点之间的直线。
- [Shape](/official/Reference/VB/Shape/) -- 无窗口几何图元（矩形、椭圆、圆形、星形、箭头等），可配置边框、填充和旋转。
- [QRCode](/official/Reference/VB/QRCode/) -- 无窗口QR码渲染器，从文本或字节数组填充内容。

## 菜单

- [Menu](/official/Reference/VB/Menu/) -- Win32原生菜单中的项 --- [Form](/official/Reference/VB/Form/)或[MDIForm](/official/Reference/VB/MDIForm/)菜单栏上的顶级条目、下拉条目或分隔符。

## 数据和外部内容

- [Data](/official/Reference/VB/Data/) -- Win32原生控件，打开DAO记录集并为绑定控件提供记录导航按钮。
- [OLE](/official/Reference/VB/OLE/) -- 承载链接或嵌入的OLE Automation对象（Word文档、Excel工作表等）的OLE容器。
- [Timer](/official/Reference/VB/Timer/) -- 非可视化控件，按可编程间隔引发周期性事件。