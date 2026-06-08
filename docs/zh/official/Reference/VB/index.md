---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '520cc939-e532-4a61-a255-8efd7df5ffd7'
  PropagateID: '520cc939-e532-4a61-a255-8efd7df5ffd7'
  ReservedCode1: 'df6d65b5-bd63-4c64-a075-83939fa6bed7'
  ReservedCode2: 'df6d65b5-bd63-4c64-a075-83939fa6bed7'
---

---
title: VB Package
parent: Packages
nav_order: 1
permalink: /tB/Packages/VB/
---

# VB Package

这些类位于VB内置包中，提供标准控件集（CheckBox、CommandButton、ComboBox、Label、TextBox……）以及承载它们的窗体基础结构。

## 类

### 非控件

- [App](/official/Reference/VB/App/) -- 包装运行中应用程序的标识、版本元数据和进程级状态的单例
- [Clipboard](/official/Reference/VB/Clipboard/) -- 系统剪贴板包装单例，用于应用程序间复制粘贴
- [Global](/official/Reference/VB/Global/) -- 应用程序的应用对象——其成员（**App**、**Screen**、**Clipboard**、**Forms**……）无需限定即可访问的单例
- [Printer](/official/Reference/VB/Printer/) -- 围绕一台Windows打印设备的绘图表面包装器，将图形调用记录到后台打印作业中
- [Printers](/official/Reference/VB/Printers/) -- 系统上安装的每台打印机的只读集合
- [Screen](/official/Reference/VB/Screen/) -- 包装主显示器度量、字体列表、活动窗体和控件以及应用程序范围鼠标指针的单例

### 控件

- [CheckBox](/official/Reference/VB/CheckBox/) -- 带标题和可选键盘助记符的Win32原生两态或三态复选框
- [CheckMark](/official/Reference/VB/CheckMark/) -- 无标题或焦点的无窗口可缩放选中标记——以任意大小渲染的复选框
- [ComboBox](/official/Reference/VB/ComboBox/) -- 编辑字段与下拉项目列表组合的Win32原生控件
- [CommandButton](/official/Reference/VB/CommandButton/) -- 点击时触发操作的Win32原生按钮
- [Data](/official/Reference/VB/Data/) -- 打开DAO数据库并向其他控件公开绑定记录集的Win32原生控件
- [DirListBox](/official/Reference/VB/DirListBox/) -- 目录祖先和直接子目录列表的Win32原生控件
- [DriveListBox](/official/Reference/VB/DriveListBox/) -- 自动填充系统驱动器的Win32原生下拉组合框
- [FileListBox](/official/Reference/VB/FileListBox/) -- 目录中文件列表的Win32原生控件，可按模式和属性过滤
- [Form](/official/Reference/VB/Form/) -- 承载控件、菜单和绘图表面的顶级Win32窗口
- [Frame](/official/Reference/VB/Frame/) -- 分组控件并构成选项按钮组的带标题Win32原生容器
- [HScrollBar](/official/Reference/VB/HScrollBar/) -- Win32原生独立水平滚动条
- [Image](/official/Reference/VB/Image/) -- 无窗口轻量级图片显示——**PictureBox**的经济替代
- [Label](/official/Reference/VB/Label/) -- 用于显示只读文本和键盘助记符锚点的无窗口轻量级控件
- [Line](/official/Reference/VB/Line/) -- 在两个端点之间绘制单一直线段的无窗口轻量级控件
- [ListBox](/official/Reference/VB/ListBox/) -- 单选或多选的Win32原生垂直滚动项目列表
- [MDIForm](/official/Reference/VB/MDIForm/) -- 承载标记为MDI子级的**Form**实例的MDI客户区的顶级窗口
- [Menu](/official/Reference/VB/Menu/) -- Win32原生菜单中的单个项——顶级条目、子菜单条目或分隔符
- [MultiFrame](/official/Reference/VB/MultiFrame/) -- 以水平或垂直条带排列**Frame**控件的布局容器
- [OLE](/official/Reference/VB/OLE/) -- 承载链接或嵌入OLE Automation对象的容器（VB6兼容性存根——大部分未实现）
- [OptionButton](/official/Reference/VB/OptionButton/) -- 在其容器内互斥的Win32原生圆形选择器
- [PictureBox](/official/Reference/VB/PictureBox/) -- 结合图片显示、绘图表面和控件容器的Win32原生控件
- [PropertyPage](/official/Reference/VB/PropertyPage/) -- 支持COM属性页对话框单个选项卡的容器
- [QRCode](/official/Reference/VB/QRCode/) -- 根据其有效负载渲染QR码的无窗口轻量级控件
- [Report](/official/Reference/VB/Report/) -- 专用于渲染带状记录集报表打印预览的顶级窗口
- [Shape](/official/Reference/VB/Shape/) -- 绘制固定几何图元集合中一种的无窗口轻量级控件
- [TextBox](/official/Reference/VB/TextBox/) -- 用于单行或多行文本输入的Win32原生编辑控件
- [Timer](/official/Reference/VB/Timer/) -- 以可编程间隔引发**Timer**事件的非可视控件
- [UserControl](/official/Reference/VB/UserControl/) -- 设计可重用ActiveX控件的基类
- [VScrollBar](/official/Reference/VB/VScrollBar/) -- Win32原生独立垂直滚动条