---
title: "包"
nav_order: 8
permalink: /tB/Packages/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c2981a3b-911e-46a9-af66-9c1ac7e59815'
  PropagateID: 'c2981a3b-911e-46a9-af66-9c1ac7e59815'
  ReservedCode1: '2ce905c5-a118-445e-a5cc-4c7067688e06'
  ReservedCode2: '2ce905c5-a118-445e-a5cc-4c7067688e06'
---

# 包

*包*将相关代码 --- 模块、类、控件和枚举 --- 组织在单一命名空间下，并作为单个依赖项从项目中引用。参见[功能 → 包](/official/Features/Packages/)了解包的构建和分发方式；以下页面记录twinBASIC自带的*内置*包。

## 默认包

这些包默认包含在所有项目中。

- [VB包](/official/Reference/VB/) -- 标准控件（**CheckBox**、**CommandButton**、**TextBox**等）、窗体以及应用级单例（**App**、**Screen**、**Clipboard**、**Printer**等）
- [VBA包](/official/Reference/VBA/) -- 标准运行时库 -- **MsgBox**、**CStr**、**Mid**、**Format**等按模块分组，加上**Collection**和**Err**内置类型以及twinBASIC的运行时表达式引擎
- [VBRUN包](/official/Reference/VBRUN/) -- 仅运行时类型 -- 环境属性、异步读取状态、结构化错误上下文、**PropertyBag**、剪贴板/拖放容器，以及经典VB6窗体和控件使用的枚举

## 内置包

这些包内置于twinBASIC中，始终可用（即使离线）。要使用它们，请在项目 → 引用 (Ctrl-T) → 可用包中添加。

- [Assert包](/official/Reference/Assert/) -- 单元测试断言函数 -- 三个模块（**Exact**、**Strict**、**Permissive**）共享相同的十五个成员API，比较严格程度不同
- [CustomControls包](/official/Reference/CustomControls/) -- 自绘`Waynes…`自定义控件（按钮、窗体、框架、网格、标签、滑块、文本框、定时器）、共享的`Styles/`绘制辅助工具，以及用于创作新自定义控件的DESIGNER框架（接口、回调对象、**Canvas**、**SerializeInfo**）
- [CEF包](/official/Reference/CEF/) -- 封装Chromium Embedded Framework的**CefBrowser**控件：跨平台浏览器嵌入，提供三种Chromium运行时选择（v49/v109/v145）；目前处于BETA阶段
- [WebView2包](/official/Reference/WebView2/) -- 封装Microsoft Edge运行时的**WebView2**控件，及其周围的包装对象（请求/响应/头/环境选项）和`wv2…`枚举
- [WinEventLogLib包](/official/Reference/WinEventLogLib/) -- 从twinBASIC写入Windows事件日志；通用**EventLog**(*Of EventIds, Categories*)类处理注册、注册表设置和每个事件的`ReportEventW`调用，*EventIds*和*Categories*的消息表资源在编译时合成到EXE中
- [WinNamedPipesLib包](/official/Reference/WinNamedPipesLib/) -- Windows命名管道作为twinBASIC对象，采用异步IOCP驱动I/O模型；宿主端的**NamedPipeServer** + **NamedPipeServerConnection**，客户端的**NamedPipeClientManager** + **NamedPipeClientConnection**，具有消息边界语义和基于cookie的关联模式
- [WinServicesLib包](/official/Reference/WinServicesLib/) -- 将twinBASIC EXE作为一个或多个Windows服务运行；**Services**单例协调配置、安装/卸载和SCM调度循环，用户实现的[**ITbService**](/official/Reference/WinServicesLib/ITbService)类通过[**ServiceCreator**](/official/Reference/WinServicesLib/ServiceCreator)`(Of T)`实例化
- [tbIDE包](/official/Reference/tbIDE/) -- twinBASIC IDE的**插件SDK**：每个插件是一个标准DLL，导出`tbCreateCompilerAddin`，返回实现[**AddIn**](/official/Reference/tbIDE/AddIn)契约的对象，从那里可以访问IDE的工具栏、工具窗口DOM、虚拟文件系统、调试控制台、当前项目（及其`Evaluate`调试控制台钩子）、键盘快捷键和主题 -- 全部通过IDE传入的[**Host**](/official/Reference/tbIDE/Host)对象访问
- [WinNativeCommonCtls包](/official/Reference/WinNativeCommonCtls/) -- VB6兼容的**Microsoft Common Controls 6.0**（`MSCOMCTL.OCX`）替代方案，基于Win32 ComCtl32控件构建：八个控件（[**DTPicker**](/official/Reference/WinNativeCommonCtls/DTPicker)、[**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/)、[**ListView**](/official/Reference/WinNativeCommonCtls/ListView/)、[**MonthView**](/official/Reference/WinNativeCommonCtls/MonthView)、[**ProgressBar**](/official/Reference/WinNativeCommonCtls/ProgressBar)、[**Slider**](/official/Reference/WinNativeCommonCtls/Slider)、[**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/)、[**UpDown**](/official/Reference/WinNativeCommonCtls/UpDown)），保留了原始成员名称，加上集合子对象（[**ListItems**](/official/Reference/WinNativeCommonCtls/ListView/ListItems)、[**ColumnHeaders**](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders)、[**Nodes**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes)、[**ListImages**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages)）和用户可见的枚举