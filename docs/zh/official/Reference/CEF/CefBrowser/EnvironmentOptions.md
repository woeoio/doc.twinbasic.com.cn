---
title: EnvironmentOptions
parent: CefBrowser
permalink: /tB/Packages/CEF/CefBrowser/EnvironmentOptions
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '88a4aa64-fcd3-4537-b5c5-0e36777070d4'
  PropagateID: '88a4aa64-fcd3-4537-b5c5-0e36777070d4'
  ReservedCode1: '5da7f0b4-8112-4d37-86bb-7fe30944f86c'
  ReservedCode2: '5da7f0b4-8112-4d37-86bb-7fe30944f86c'
---

# CefEnvironmentOptions 类

CEF环境的预创建配置——运行时文件夹、用户数据文件夹和可选的调试日志目标。在每个 [**CefBrowser**](/official/Reference/CEF/CefBrowser/) 控件上可作为其 **EnvironmentOptions** 属性使用；控件在触发 [**Create**](/official/Reference/CEF/CefBrowser/#create) 事件之前自动实例化一个。

以下字段仅在CEF运行时启动期间生效——即在控件的 [**Create**](/official/Reference/CEF/CefBrowser/#create) 事件*之前或期间*。在该时间点之后赋值对运行中的环境没有影响。

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.UserDataFolder = _
        Environ$("APPDATA") & "\MyApp\CEF\"
    CefBrowser1.EnvironmentOptions.LogFilePath = _
        Environ$("APPDATA") & "\MyApp\CEF\debug.log"
    CefBrowser1.EnvironmentOptions.LogSeverity = CefLogWarning
End Sub
```

该类型本身是 `Private Class`——实例只能通过控件的 **EnvironmentOptions** 属性访问，无法从包外部声明类型为 **CefEnvironmentOptions** 的变量。

## 属性

### BrowserExecutableFolder

包含 `libcef.dll` 及其伴随运行时文件的文件夹路径。**String**。默认：空（运行时从 `%LocalAppData%\twinBASIC_CEF_Runtime\<version-stamped-folder>` 加载——参见[安装运行时文件](/official/Reference/CEF/#installing-runtime-files)）。

设置此项以指向便携式并排部署，例如应用程序可执行文件旁边的CEF文件夹：

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.BrowserExecutableFolder = _
        App.Path & "\cef145_win64"
End Sub
```

如果在配置的（或默认的）位置未找到 `libcef.dll`，[**Error**](/official/Reference/CEF/CefBrowser/#error) 事件将触发并附带所搜索的确切路径。

### LogFilePath

CEF将追加其调试日志的可写入文件路径。**String**。默认：空（无论 [**LogSeverity**](#logseverity) 如何设置，都不写入日志文件）。

与 [**LogSeverity**](#logseverity) 配合使用——等于或高于所选严重级别的消息写入此文件。日志在多次运行之间追加；根据需要轮换或删除文件。

### LogSeverity

CEF将消息记录到由 [**LogFilePath**](#logfilepath) 命名的日志文件的最低严重级别。[**CefLogSeverity**](/official/Reference/CEF/Enumerations/CefLogSeverity)。默认：**CefLogDisable**（日志记录关闭）。

在排查运行时问题时设置为 **CefLogWarning** 或 **CefLogError**，正常使用时设置回 **CefLogDisable**。

### UserDataFolder

CEF用于用户配置文件的文件夹路径——缓存、Cookie、历史记录、本地存储等。**String**。默认：空（运行时在 `%LocalAppData%\twinBASIC_CEF\<ProjectName>\` 下选择一个文件夹）。

当默认位置可能位于只读位置，或同一应用程序的多个部署必须保持其配置文件独立时，设置一个可写入的、特定于应用程序的路径。同一文件夹不能同时被两个CEF进程打开——如果已被锁定，[**Error**](/official/Reference/CEF/CefBrowser/#error) 事件将触发，消息为 *"CEF cache path already locked by another process"*。

### 另见

- [CefBrowser 控件类](/official/Reference/CEF/CefBrowser/)
- [Create 事件](/official/Reference/CEF/CefBrowser/#create)
- [安装运行时文件](/official/Reference/CEF/#installing-runtime-files)
- [覆盖运行时位置](/official/Reference/CEF/#overriding-the-runtime-location)
- [WebView2EnvironmentOptions](/official/Reference/WebView2/WebView2/EnvironmentOptions) -- WebView2的对应项