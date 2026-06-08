---
title: "欢迎"
nav_order: 1
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6023a1a6-19e4-4871-8f53-24f173d1f251'
  PropagateID: '6023a1a6-19e4-4871-8f53-24f173d1f251'
  ReservedCode1: 'ed77c113-c8f4-4caa-8b6d-6d231e9409cb'
  ReservedCode2: 'ed77c113-c8f4-4caa-8b6d-6d231e9409cb'
---

# 欢迎使用twinBASIC

twinBASIC是一种新的BASIC语言和开发环境，致力于与VB6和VBA100%向后兼容，同时添加现代语言特性——泛型、原生[**Interface**](/official/Reference/Core/Interface)和[**CoClass**](/official/Reference/Core/CoClass)声明、属性和包系统。编译器和IDE正在积极开发中，目前处于Beta阶段；[常见问题](/official/Miscellaneous/FAQs)涵盖了项目状态、作者信息以及当前已实现和未实现的功能，下载位于主GitHub仓库的[Releases](https://github.com/twinbasic/twinbasic/releases)页面。

## twinBASIC新手？

从[常见问题](/official/Miscellaneous/FAQs)开始了解——什么是twinBASIC、当前进展、支持什么——然后阅读[特性概览](/official/Features/)了解twinBASIC在VBx基础上添加的所有内容。下方的[教程](#教程)部分提供分步指南；[Arrays](/official/Tutorials/Arrays)教程无需任何twinBASIC经验，是不错的入门读物。

## 从VBA或VB6转来？

大多数现有VB6/VBA代码无需修改即可编译。VBx兼容性之外的关键新增：新数据类型（[**LongLong**](/official/Features/Language/Data-Types#longlong)、[**LongPtr**](/official/Features/Language/Data-Types#longptr)、[**Decimal**](/official/Features/Language/Data-Types#decimal)）、原生[**Interface**](/official/Reference/Core/Interface)和[**CoClass**](/official/Reference/Core/CoClass)声明、用于继承的[**Implements Via**](/official/Features/Language/Inheritance#implements-via-for-basic-inheritance)和[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)、泛型、方法重载、类型推断和属性语法。[特性概览](/official/Features/)是完整的目录。

## 查找关键字、函数或运算符？

参考部分分为语言构造（编译器解析的内容）和运行时成员（内置包中提供的函数、属性、类型、类）：

- [**分类列表**](/official/Reference/Categories) —— 按用途分组的语句、过程和函数（编译器控制、声明、控制流、文件I/O……）
- [**语句**](/official/Reference/Statements) —— 所有语言语句的字母索引
- [**过程和函数**](/official/Reference/Procedures-and-Functions) —— 所有可调用运行时成员的字母索引
- [**运算符**](/official/Reference/Operators) —— 算术、比较、逻辑、位运算及twinBASIC新增运算符
- [**编译器常量**](/official/Reference/Compiler-Constants) —— 编译器识别的 `#If` 符号
- [**属性**](/official/Reference/Attributes) —— `[Documentation(...)]`、`[COMCreatable(...)]` 及其余属性语法
- [**控件**](/official/Reference/Controls) —— 标准UI控件（[**CheckBox**](/official/Reference/VB/CheckBox/)、[**TextBox**](/official/Reference/VB/TextBox/)、[**CommandButton**](/official/Reference/VB/CommandButton/)、……）按用途分组
- [**术语表**](/official/Reference/Glossary) —— 文档中使用的技术术语

## 内置包

*包*将相关代码组织在一个命名空间下，作为单个依赖项被项目引用。[包页面](/official/Reference/Packages)列出了每个内置包及其简要描述；下面的标题按用途对它们进行分组。

**默认包** —— 自动在每个项目中引用：

- [**VBA**](/official/Reference/VBA/) —— 标准运行时库（`MsgBox`、`CStr`、`Format`、`Mid`、……）以及[**Collection**](/official/Reference/VBA/Collection/)和[**Err**](/official/Reference/VBA/Information/Err)内置对象
- [**VBRUN**](/official/Reference/VBRUN/) —— 运行时类型（[**PropertyBag**](/official/Reference/VBRUN/PropertyBag/)、环境属性、结构化错误上下文、拖放）以及经典VB6窗体和控件使用的枚举
- [**VB**](/official/Reference/VB/) —— 标准控件（[**CheckBox**](/official/Reference/VB/CheckBox/)、[**TextBox**](/official/Reference/VB/TextBox/)、[**CommandButton**](/official/Reference/VB/CommandButton/)、……）和应用级单例（[**App**](/official/Reference/VB/App/)、[**Screen**](/official/Reference/VB/Screen/)、[**Clipboard**](/official/Reference/VB/Clipboard/)、[**Printer**](/official/Reference/VB/Printer/)、……）

**额外GUI** —— [**VB**](/official/Reference/VB/)包之外的控件：

- [**CustomControls**](/official/Reference/CustomControls/) —— 自绘 `Waynes...` 控件及用于创作新控件的DESIGNER框架
- [**WinNativeCommonCtls**](/official/Reference/WinNativeCommonCtls/) —— `MSCOMCTL.OCX` 的VB6兼容替代（[**DTPicker**](/official/Reference/WinNativeCommonCtls/DTPicker)、[**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/)、[**ListView**](/official/Reference/WinNativeCommonCtls/ListView/)、[**MonthView**](/official/Reference/WinNativeCommonCtls/MonthView)、[**ProgressBar**](/official/Reference/WinNativeCommonCtls/ProgressBar)、[**Slider**](/official/Reference/WinNativeCommonCtls/Slider)、[**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/)、[**UpDown**](/official/Reference/WinNativeCommonCtls/UpDown)）

**Web嵌入** —— 在窗体中托管浏览器引擎：

- [**WebView2**](/official/Reference/WebView2/) —— Microsoft Edge运行时
- [**CEF**](/official/Reference/CEF/) —— Chromium Embedded Framework（BETA），可选择三种Chromium运行时

**Windows集成** —— 操作系统功能的轻量封装：

- [**WinServicesLib**](/official/Reference/WinServicesLib/) —— 将twinBASIC EXE作为一个或多个Windows服务运行
- [**WinEventLogLib**](/official/Reference/WinEventLogLib/) —— 写入Windows事件日志条目，支持编译时消息表生成
- [**WinNamedPipesLib**](/official/Reference/WinNamedPipesLib/) —— 基于IOCP的异步命名管道服务器和客户端

**工具链**：

- [**Assert**](/official/Reference/Assert/) —— 单元测试断言函数，三个模块共享相同的十五成员API，但严格程度不同
- [**tbIDE**](/official/Reference/tbIDE/) —— twinBASIC IDE本身的加载项SDK

## 教程

- [**Arrays**](/official/Tutorials/Arrays) —— 固定数组和动态数组、`Dim`、`ReDim`、多维结构
- [**CustomControls**](/official/Tutorials/CustomControls/) —— 使用 `Waynes...` 框架构建自绘控件
- [**WebView2**](/official/Tutorials/WebView2/) —— 嵌入Edge运行时：托管本地资源、JavaScript互操作、驱动Monaco
- [**CEF**](/official/Tutorials/CEF/) —— 嵌入Chromium：构建浏览器外壳、托管本地资源、JavaScript互操作、驱动Monaco

## twinBASIC IDE

[**IDE部分**](/official/IDE/)记录了编辑器、项目资源管理器、调试面板（调用栈、监视、诊断、调试控制台）、[**tbForm**](/official/IDE/tbForm)和[**tbReport**](/official/IDE/tbReport)设计器以及各功能侧面板。要安装第三方加载项，参见[**Add Ins**](/official/IDE/AddIns/)；要自行开发加载项，[**tbIDE包**](/official/Reference/tbIDE/)是加载项SDK。

## 社区和外部资源

- GitHub上的[**twinBASIC wiki**](https://github.com/twinbasic/documentation/wiki)以社区贡献和对前沿特性的说明补充了本站文档。
- [**视频**](/official/Videos/) —— twinBASIC视频系列和[**Access DevCon**](/official/Videos/AccessDevCon)会议演讲。
- Mike Wolfe在[@nolongerset](https://nolongerset.com)的第三方指南：
  - [Create a Custom ActiveX Control with twinBASIC](https://nolongerset.com/create-activex-control-with-twinbasic/)
  - [Create a Tool Window in the VBIDE with twinBASIC](https://nolongerset.com/create-a-vbe-addin-with-twinbasic/)

## 贡献文档

本文档为开源项目。参见[**文档开发**](/official/Documentation/)了解构建和预览工作流以及贡献约定。

> AI生成