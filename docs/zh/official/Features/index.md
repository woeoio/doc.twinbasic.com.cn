---
title: 功能
nav_order: 6
permalink: /Features/
has_toc: false
---

# 功能

本节记录了 twinBASIC 相对于 VBx 和早期 BASIC 方言带来的所有功能和增强功能。
twinBASIC 在提供这些强大的新功能的同时保持与 VBx 语法的向后兼容性。大多数增强功能是选择加入的，允许您逐步在项目中采用它们。

有关每个功能的详细文档，请导航到下面列出的特定类别。

## 类别

### [属性](Attributes-Intro)

属性允许您使用编译器指令和元数据注解窗体、模块、类、类型、枚举、声明和过程。这些现在在代码编辑器中直接可见。

### [语言语法](Language/)

twinBASIC 引入了众多语言增强功能，包括：

- 新数据类型：**LongPtr**、**LongLong**、**Decimal**，
- 原生 **Interface** 和 **CoClass** 定义，
- 带有 **Implements Via** 和 **Inherits** 的 OOP 功能，
- 泛型和方法重载，
- 增强的操作符和字面量，
- 类型推断和指针功能，
- 带有方法和事件的 UDT 增强功能。

### [项目配置](Project-Configuration/)

twinBASIC 提供各种项目类型和配置选项：

- 标准 DLL、控制台应用程序、服务和内核驱动程序
- 优化和安全性的编译器选项
- 入口点覆盖和 IAT 放置
- ActiveX 项目的注册选项

### [标准库](Standard-Library)

标准库的增强功能包括：

- 全面的 Unicode 支持
- 具有多种编码选项的文件 I/O
- 新的内置函数和 App 对象属性
- 直接的 COM 错误处理访问
- 数组的结构化赋值

### [GUI 组件](GUI-Components/)

现代化的 GUI 组件具有以下特点：

- 具有透明度和 alpha 混合的增强窗体
- 控件锚定和停靠
- 有窗口和无窗口控件
- 64 位支持和 DPI 感知
- 新控件（二维码、多帧、复选标记）

### [包](Packages/)

包是可以从另一个 twinBASIC 项目引用的组件集合。它们以 TWINPACK 文件分发，包含该包中组件所需的一切。

### [高级功能](Advanced/)

高级编程功能：

- 通过直接 API 调用的多线程支持
- 使用 `Emit()` 的直接汇编插入
- OBJ 和 LIB 文件的静态链接
- 增强的 API 声明（CDecl、可变参数、ByVal UDT）
- 参数化构造函数和类导出

### [编译器和 IDE 功能](Compiler-IDE/)

改进的开发体验：

- 编译器警告和严格模式
- 调试跟踪日志记录器和陈旧指针检测
- 用于直接运行子程序的 CodeLens
- 具有主题、代码折叠等功能的现代 IDE
- 用于代码共享的包服务器

### [64 位编译](64bit)
twinBASIC 除了可以编译 32 位可执行文件外，还可以编译原生 64 位可执行文件，对 API 声明使用 **LongPtr** 数据类型和 **PtrSafe** 关键字。