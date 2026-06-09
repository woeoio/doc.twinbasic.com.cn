---
title: VBCCR 开发手册
description: VBCCR 开发手册 - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd06df47d-14ba-41c0-9dba-fb23fa051d40'
  PropagateID: 'd06df47d-14ba-41c0-9dba-fb23fa051d40'
  ReservedCode1: '71f96b84-fb18-49c2-99b5-2a4ceda09648'
  ReservedCode2: '71f96b84-fb18-49c2-99b5-2a4ceda09648'
---

# VBCCR 开发手册

VBCCR（VB Common Controls Replacement）是 Visual Basic 6 中 Microsoft 通用控件 (MSComCtl) 的全面替代库，由 [Kr00l](https://github.com/Kr00l/VBCCR) 开发维护。在保持与原始控件兼容的同时，提供增强的功能、改进的视觉外观，以及**完整的 Unicode 支持**。

**核心优势：解决了原生 VB6 窗体控件上显示 Unicode 字符的乱码问题。**

本文档基于 VBCCR 1.8 源码编写，所有接口信息均来自实际代码，确保准确性。

## 快速入门

1. 从 [GitHub 仓库](https://github.com/Kr00l/VBCCR) 下载 VBCCR 库
2. 在系统中注册 OCX 文件：`regsvr32 VBCCR18.OCX`
3. 在 VB6 项目中添加对 VBCCR 控件的引用
4. 在窗体中使用增强控件

## 包含的控件

### 按钮类 (buttons)

| 控件 | 类名 | 说明 |
|------|------|------|
| [CheckBoxW](./buttons/checkboxw) | CheckBoxW | Unicode 复选框控件 |
| [CommandButtonW](./buttons/commandbuttonw) | CommandButtonW | Unicode 命令按钮控件 |
| [CommandLink](./buttons/commandlink) | CommandLink | 命令链接控件 |
| [OptionButtonW](./buttons/optionbuttonw) | OptionButtonW | Unicode 选项按钮控件 |

### 文本标签类 (text)

| 控件 | 类名 | 说明 |
|------|------|------|
| [TextBoxW](./text/textboxw) | TextBoxW | Unicode 文本框控件 |
| [RichTextBox](./text/richtextbox) | RichTextBox | 富文本框控件 |
| [SpinBox](./text/spinbox) | SpinBox | 数字调节框控件 |
| [LabelW](./text/labelw) | LabelW | Unicode 标签控件 |
| [WindowedLabel](./text/windowedlabel) | WindowedLabel | 窗口化标签控件 |
| [LinkLabel](./text/linklabel) | LinkLabel | 链接标签控件 |
| [HotKey](./text/hotkey) | HotKey | 热键控件 |

### 列表选择类 (lists)

| 控件 | 类名 | 说明 |
|------|------|------|
| [ComboBoxW](./lists/comboboxw) | ComboBoxW | Unicode 组合框控件 |
| [ListBoxW](./lists/listboxw) | ListBoxW | Unicode 列表框控件 |
| [FontCombo](./lists/fontcombo) | FontCombo | 字体选择组合框控件 |
| [ImageCombo](./lists/imagecombo) | ImageCombo | 图像组合框控件 |
| [IPAddress](./lists/ipaddress) | IPAddress | IP 地址控件 |
| [VirtualCombo](./lists/virtualcombo) | VirtualCombo | 虚拟组合框控件 |
| [VListBox](./lists/vlistbox) | VListBox | 虚拟列表框控件 |

### 视图类 (views)

| 控件 | 类名 | 说明 |
|------|------|------|
| [ListView](./views/listview) | ListView | 列表视图控件 |
| [TreeView](./views/treeview) | TreeView | 树形视图控件 |
| [TabStrip](./views/tabstrip) | TabStrip | 选项卡控件 |

### 工具条/状态栏类 (bars)

| 控件 | 类名 | 说明 |
|------|------|------|
| [ToolBar](./bars/toolbar) | ToolBar | 工具栏控件 |
| [StatusBar](./bars/statusbar) | StatusBar | 状态栏控件 |
| [CoolBar](./bars/coolbar) | CoolBar | 可停靠工具条控件 |
| [Pager](./bars/pager) | Pager | 分页控件 |

### 滑块/进度/调节类 (ranges)

| 控件 | 类名 | 说明 |
|------|------|------|
| [Slider](./ranges/slider) | Slider | 滑块控件 |
| [ProgressBar](./ranges/progressbar) | ProgressBar | 进度条控件 |
| [UpDown](./ranges/updown) | UpDown | 上下调节控件 |
| [Animation](./ranges/animation) | Animation | 动画播放控件 |

### 日期时间类 (datetime)

| 控件 | 类名 | 说明 |
|------|------|------|
| [DTPicker](./datetime/dtpicker) | DTPicker | 日期时间选择器控件 |
| [MonthView](./datetime/monthview) | MonthView | 月历视图控件 |

### 对话框/系统/容器/多媒体类 (system)

| 控件 | 类名 | 说明 |
|------|------|------|
| [CommonDialog](./system/commondialog) | CommonDialog | 通用对话框类 |
| [SysInfo](./system/sysinfo) | SysInfo | 系统信息控件 |
| [ImageList](./system/imagelist) | ImageList | 图像列表控件 |
| [FrameW](./system/framew) | FrameW | Unicode 框架控件 |
| [MCIWnd](./system/mciwnd) | MCIWnd | 多媒体控件 |

## 公共辅助模块

VBCCR 还提供以下公共辅助模块，供所有控件共享使用：

| 模块 | 文件 | 说明 |
|------|------|------|
| Common | Common.bas | 通用工具函数（MsgBox、SendKeys Unicode 版本，剪贴板操作，DPI 辅助，图片处理等） |
| VisualStyles | VisualStyles.bas | 视觉样式管理（ActivateVisualStyles、RemoveVisualStyles、GetComCtlVersion） |
| ISubclass | ISubclass.cls | 子类化接口 |
| ComCtlsBase | ComCtlsBase.bas | 控件基础模块 |
| VTableHandle | VTableHandle.bas | VTable 处理模块 |

## 通用枚举

以下枚举在多个控件中共享使用：

### CCAppearanceConstants
| 常量 | 值 | 说明 |
|------|-----|------|
| cc2D | 0 | 平面外观 |
| cc3D | 1 | 三维外观 |

### CCLeftRightAlignmentConstants
| 常量 | 值 | 说明 |
|------|-----|------|
| ccLeft | 0 | 左对齐 |
| ccRight | 1 | 右对齐 |

### CCVerticalAlignmentConstants
| 常量 | 值 | 说明 |
|------|-----|------|
| ccTop | 0 | 顶部对齐 |
| ccBottom | 1 | 底部对齐 |
| ccVCenter | 2 | 垂直居中 |

### CCMousePointerConstants
| 常量 | 值 |
|------|-----|
| ccDefault | 0 |
| ccArrow | 1 |
| ccCrosshair | 2 |
| ccIBeam | 3 |
| ccIcon | 4 |
| ccSize | 5 |
| ccSizeNESW | 6 |
| ccSizeNS | 7 |
| ccSizeNWSE | 8 |
| ccSizeWE | 9 |
| ccUpArrow | 10 |
| ccHourglass | 11 |
| ccNoDrop | 12 |
| ccArrowHourglass | 13 |
| ccArrowQuestion | 14 |
| ccSizeAll | 15 |
| ccCustom | 99 |

### CCRightToLeftModeConstants
| 常量 | 值 | 说明 |
|------|-----|------|
| ccRtlModeNo | 0 | 无 RTL |
| ccRtlModeStandard | 1 | 标准 RTL |
| ccRtlModeV2 | 2 | V2 模式 RTL |

### CCIMEModeConstants
| 常量 | 值 |
|------|-----|
| ccIMENoControl | 0 |
| ccIMEOn | 1 |
| ccIMEOff | 2 |
| ccIMEDisable | 3 |
| ccIMEHiragana | 4 |
| ccIMEKatakanaDbl | 5 |
| ccIMEKatakanaSng | 6 |
| ccIMEAlphaDbl | 7 |
| ccIMEAlphaSng | 8 |
| ccIMEHangulDbl | 9 |
| ccIMEHangulSng | 10 |

### OLEDropModeConstants
| 常量 | 值 |
|------|-----|
| ccOLEDropNone | 0 |
| ccOLEDropManual | 1 |

## 作者原文档

VBCCR 作者 Kr00l 编写的官方文档（中文翻译），涵盖 StdEXE/OCX 版本使用指南、OCX2StdEXE 工具说明、编译选项及版本历史等：

[阅读作者原文档](./author)

## 附加资源

- [VBCCR GitHub 仓库](https://github.com/Kr00l/VBCCR)
- [VBForums 讨论帖](https://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls)