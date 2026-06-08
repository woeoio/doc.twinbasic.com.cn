---
title: 功能特性
nav_order: 6
permalink: /Features/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '33ca6959-250c-4002-9f39-d72ccdde5a31'
  PropagateID: '33ca6959-250c-4002-9f39-d72ccdde5a31'
  ReservedCode1: '42171562-0b47-496f-9467-21f784f738e4'
  ReservedCode2: '42171562-0b47-496f-9467-21f784f738e4'
---

# 功能特性

本节记录了 twinBASIC 相比 VBx 及更早的 BASIC 方言所提供的全部功能增强和特性。

twinBASIC 在保持与 VBx 语法向后兼容的同时提供这些新功能。大多数增强都是可选的，允许你在项目中逐步采用。

如需了解每项功能的详细文档，请导航到下方列出的具体分类。

## 分类

### [特性](/official/Features/Attributes-Intro)

特性允许你为窗体、模块、类、类型、枚举、声明和过程添加编译器指令和元数据标注。现在这些内容可以直接在代码编辑器中看到。

### [语言语法](/official/Features/Language/)

twinBASIC 引入了大量语言增强功能，包括：

- 新数据类型：**LongPtr**、**LongLong**、**Decimal**
- 原生 **Interface** 和 **CoClass** 定义
- 通过 **Implements Via** 和 **Inherits** 实现的 OOP 功能
- 泛型和方法重载
- 增强的运算符和字面量
- 类型推断和指针功能
- 带有方法和事件的 UDT 增强

### [项目配置](/official/Features/Project-Configuration/)

twinBASIC 提供多种项目类型和配置选项：

- 标准 DLL、控制台应用程序、服务和内核驱动
- 用于优化和安全的编译器选项
- 入口点覆盖和 IAT 放置
- ActiveX 项目的注册选项

### [标准库](/official/Features/Standard-Library/)

标准库的增强包括：

- 全面 Unicode 支持
- 支持多种编码的文件 I/O
- 新的内置函数和 App 对象属性
- 直接的 COM 错误处理访问
- 数组解构赋值

### [GUI 组件](/official/Features/GUI-Components/)

现代化的 GUI 组件，包括：

- 支持透明和 Alpha 混合的增强窗体
- 控件锚定和停靠
- 有窗口和无窗口控件
- 64 位支持和 DPI 感知
- 新控件（QR Code、Multiframe、CheckMark）

### [包管理](/official/Features/Packages/)

twinBASIC[^1] 拥有一个名为 TWINSERV 的集中式包仓库。用户可以发布公开和私有包。包的浏览、下载和发布无缝集成到 IDE 中。

包是可被其他 twinBASIC 项目引用的组件集合。它们以 TWINPACK 文件形式分发，包含该包中组件所需的一切。

[^1]: TWINBASIC LTD 向用户社区提供的服务。

### [高级功能](/official/Features/Advanced/)

高级编程能力：

- 通过直接 API 调用的多线程支持
- 使用 `Emit()` 直接插入汇编代码
- OBJ 和 LIB 文件的静态链接
- 增强的 API 声明（CDecl、可变参数、ByVal UDT）
- 参数化构造函数和类导出

### [编译器和 IDE 功能](/official/Features/Compiler-IDE/)

改进的开发体验：

- 编译器警告和严格模式
- 调试跟踪记录器和过期指针检测
- 用于直接运行 Sub 的 CodeLens
- 具有主题、代码折叠等功能的现代 IDE
- 用于代码共享的包服务器

### [Fusion](/official/Features/Fusion)

Fusion 使 64 位应用程序能够托管 32 位 ActiveX 控件（反之亦然），通过一个外部进程宿主可执行文件透明地桥接它们，使用基于 IPC 的通信。

### [64位编译](/official/Features/64bit)

twinBASIC 除了编译 32 位外，还能编译原生 64 位可执行文件，使用 **LongPtr** 数据类型和 **PtrSafe** 关键字来标记 API 声明。