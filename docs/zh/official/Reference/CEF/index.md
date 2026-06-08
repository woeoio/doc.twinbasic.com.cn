---
title: "CEF 包"
parent: Packages
nav_order: 6
permalink: /tB/Packages/CEF/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '55661cc8-a78f-458f-8063-4ca4519e94f6'
  PropagateID: '55661cc8-a78f-458f-8063-4ca4519e94f6'
  ReservedCode1: '02d3bdac-fcc3-4572-8761-77ff1e6549bd'
  ReservedCode2: '02d3bdac-fcc3-4572-8761-77ff1e6549bd'
---

# CEF 包

**cefPackage** 封装了 [Chromium Embedded Framework](https://chromiumembedded.github.io/cef/) 并将其作为普通的 twinBASIC 控件暴露。将 [**CefBrowser**](/official/Reference/CEF/CefBrowser/) 拖放到窗体上，Chromium 浏览器即可在其内部渲染Web内容——导航到URL、运行JavaScript、将页面打印为PDF，以及与已加载的页面交换消息。

该包是随 twinBASIC 一起发布的内置包，但 CEF 运行时本身是*单独*分发的——应用程序必须将匹配的运行时ZIP与可执行文件一起发布。参见下方的[运行时文件](#runtime-files)。

::: important
CEF 包目前处于 **BETA** 阶段。[**WebView2**](/official/Reference/WebView2/) 上可用的若干功能尚未暴露；参见下方的 [WebView2 对等性](#webview2-parity)。
:::


## 为什么选择 CEF 而不是 WebView2？

CEF 和 [**WebView2**](/official/Reference/WebView2/) 都将基于Chromium的浏览器封装在 twinBASIC 控件中。CEF 对某些应用具有更重要的优势：

- **跨平台就绪。** CEF 可在 Windows、Linux 和 macOS 上运行。[**WebView2**](/official/Reference/WebView2/) 仅限 Windows。
- **完全控制运行时栈。** 应用程序以特定的 Chromium 构建为目标，并将其与软件一起分发。应用程序控制之外不会有自动运行时更新，因此行为在不同部署之间保持一致。
- **更深入的运行时集成。** CEF 允许在渲染器/JavaScript进程内托管 twinBASIC 代码——这是更受限的 WebView2 对象模型无法做到的。

当仅面向现代 Windows 且可接受系统安装的 Edge 运行时时，[**WebView2**](/official/Reference/WebView2/) 是正确的选择；当需要控制 Chromium 版本或跨平台就绪性时，**CEF** 更为可取。

## 支持的运行时

支持三个 CEF 版本，每个版本有不同的 Chromium 基线和不同的操作系统覆盖范围：

| 运行时版本 | 支持的操作系统 | 备注                                                          |
|-----------------|---------------|----------------------------------------------------------------|
| **v49**         | Windows XP+   | 最后一个支持 Windows XP 的 Chromium 版本。                |
| **v109**        | Windows 7+    | 最后一个支持 Windows 7 的 Chromium 版本。                 |
| **v145**        | Windows 10+   | 推荐的现代运行时。                                    |

::: warning
较旧的 Chromium 版本通常不应用于不受限制的互联网浏览——它们存在未修补的安全漏洞。但对于浏览器仅加载受信任的本地或内部内容的严格受控环境，它们仍然适用。
:::

用户在两个必须一致的位置选择运行时：

- **编译时**——通过向项目添加匹配的 `[COMPILER PACKAGE] twinBASIC - Chromium Embedded Framework Package v<N>` 引用。这设置了包自身源代码编译时使用的 `CEF_VERSION` 条件编译常量（49、109 或 145）。[**CefBrowser.CefMajorVersion**](/official/Reference/CEF/CefBrowser/#cefmajorversion) 在运行时返回此值。
- **部署时**——通过发布匹配的运行时ZIP，解压到[发现文件夹](#installing-runtime-files)或通过 [**EnvironmentOptions.BrowserExecutableFolder**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#browserexecutablefolder) 指定。

运行时的位数必须与应用程序的位数匹配——32位应用程序需要32位运行时ZIP，64位应用程序需要64位ZIP。

## 运行时文件

运行时与包分开发布。下载与 CEF 版本和应用程序位数都匹配的ZIP：

| 版本 | Win32                                                        | Win64                                                        |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| v49     | [cefRuntime49_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime49_win32.zip) | [cefRuntime49_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime49_win64.zip) |
| v109    | [cefRuntime109_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime109_win32.zip) | [cefRuntime109_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime109_win64.zip) |
| v145    | [cefRuntime145_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime145_win32.zip) | [cefRuntime145_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime145_win64.zip) |

另请参阅 [CEF Runtime Releases](https://github.com/twinbasic/cef-runtimes/releases/) 获取最新版本。

### 安装运行时文件


将ZIP解压到：

```text
%LocalAppData%\twinBASIC_CEF_Runtime\
```

例如，v145 Win64 运行时最终位于：

```text
%LocalAppData%\twinBASIC_CEF_Runtime\145_0_7632_160_Win64\
```

带版本戳的文件夹必须包含 `libcef.dll` 及其同级运行时文件。

启动时，[**CefBrowser**](/official/Reference/CEF/CefBrowser/) 在此默认位置搜索运行时。如果找不到 `libcef.dll`，[**Error**](/official/Reference/CEF/CefBrowser/#error) 事件将触发，并附带所搜索的确切路径。

### 覆盖运行时位置

可以通过在 [**Create**](/official/Reference/CEF/CefBrowser/#create) 事件之前或期间赋值 [**EnvironmentOptions.BrowserExecutableFolder**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#browserexecutablefolder) 来选择不同的文件夹——例如便携式并排部署：

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.BrowserExecutableFolder = _
        "D:\MyApp\CEF\145_0_7632_160_Win64"
End Sub
```

该文件夹必须包含 `libcef.dll`。

## WebView2 对等性

以下 [**WebView2**](/official/Reference/WebView2/) 功能尚未在 **CefBrowser** 上暴露，且没有已记录的对应项：

- 方法：**OpenTaskManagerWindow**、**AddObject**（用于JavaScript的宿主对象发布）、**AddWebResourceRequestedFilter** 及周围的请求拦截机制。
- 事件：**AcceleratorKeyPressed**、**PermissionRequested**、**WebResourceRequested**、**ProcessFailed**、**ScriptDialogOpening**、**UserContextMenu**、**SuspendCompleted**、**SuspendFailed**、**DownloadStarting**、**NewWindowRequested**。

[**NavigationComplete**](/official/Reference/CEF/CefBrowser/#navigationcomplete) 事件在其签名中有 **IsSuccess** 和 **WebErrorStatus** 参数，但目前返回占位值（`True` 和 `0`）——填充它们的底层 CEF 回调尚未连接。

API 将继续增长；此列表是当前测试版的快照，而非长期限制。

## 类

- [CefBrowser](/official/Reference/CEF/CefBrowser/) -- 控件：导航、脚本、虚拟主机映射、PDF打印和由匹配的CEF运行时控制的生命周期事件
- [CefEnvironmentOptions](/official/Reference/CEF/CefBrowser/EnvironmentOptions) -- CEF环境的预创建配置（可执行文件夹、用户数据文件夹、日志文件、日志严重级别）；通过控件的 **EnvironmentOptions** 属性访问

## 枚举

- [CefLogSeverity](/official/Reference/CEF/Enumerations/CefLogSeverity) -- CEF调试日志的详细级别阈值；由 [**EnvironmentOptions.LogSeverity**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#logseverity) 使用
- [cefPrintOrientation](/official/Reference/CEF/Enumerations/cefPrintOrientation) -- 传递给 [**PrintToPdf**](/official/Reference/CEF/CefBrowser/#printtopdf) 的页面方向

## 教程

- [入门指南](/official/Tutorials/CEF/Getting-started) -- 包引用、运行时下载、安装路径
- [自定义 UserDataFolder](/official/Tutorials/CEF/Customize-the-UserDataFolder) -- 重定位运行时的工作文件夹
- [重入性](/official/Tutorials/CEF/Re-entrancy) -- 延迟事件模型和仍需注意的唯一位置（[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)）
- [构建浏览器外壳](/official/Tutorials/CEF/Building-a-browser-shell) -- 后退/前进/刷新/缩放/PDF
- [托管本地Web资源](/official/Tutorials/CEF/Hosting-local-web-assets) -- 虚拟主机文件夹映射
- [JavaScript互操作](/official/Tutorials/CEF/JavaScript-interop) -- BASIC与页面之间的消息和脚本调用
- [用twinBASIC驱动Monaco](/official/Tutorials/CEF/Driving-Monaco) -- 综合以上所有内容的案例研究