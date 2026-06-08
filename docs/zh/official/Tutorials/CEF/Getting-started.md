---
title: "入门"
parent: CEF
nav_order: 1
permalink: /Tutorials/CEF/Getting-Started
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '151c7a1e-7d80-4b50-81b0-f0074d4ff749'
  PropagateID: '151c7a1e-7d80-4b50-81b0-f0074d4ff749'
  ReservedCode1: '040c85b9-f747-4af7-ad77-2070bdcc3a3c'
  ReservedCode2: '040c85b9-f747-4af7-ad77-2070bdcc3a3c'
---

# 入门

## 包要求

要创建使用CEF包的项目，请向项目添加正确的编译器包引用。该包提供三种版本——每个支持的Chromium版本一种——你只需选择一种：

| 引用                                                       | Chromium基线 | 支持的操作系统  |
|-----------------------------------------------------------------|-------------------|---------------|
| **twinBASIC - Chromium Embedded Framework Package v49**         | Chromium 49       | Windows XP+   |
| **twinBASIC - Chromium Embedded Framework Package v109**        | Chromium 109      | Windows 7+    |
| **twinBASIC - Chromium Embedded Framework Package v145**        | Chromium 145      | Windows 10+   |

除非你特别需要支持较旧的操作系统，否则请使用**v145**。包源代码针对所有三个版本编译——选择引用会设置 `CEF_VERSION` 编译器常量，该常量选择匹配的API。

通过**项目**→**引用**（Ctrl-T）→**TWINPACK PACKAGES**添加引用。勾选所需的CEF包，关闭对话框，并重启编译器。添加后，**CefBrowser**出现在窗体设计器工具箱中。

::: warning
较旧的Chromium版本不应用于浏览来自公共Internet的不受信任内容——它们带有未修补的安全漏洞。v49和v109仅适用于浏览器仅加载受信任的本地或内部内容的严格受控环境；对于一般Web浏览，请使用v145。
:::

## 下载运行时

与[**WebView2**](/official/Reference/WebView2/WebView2/)不同，CEF不依赖系统安装的运行时。Chromium二进制文件（`libcef.dll`及相关文件）作为单独下载提供，必须与应用程序一起安装——无论是在开发时还是部署时。

下载与CEF版本和应用程序位数匹配的运行时ZIP：

| 版本 | Win32                                                        | Win64                                                        |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| v49     | [cefRuntime49_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime49_win32.zip) | [cefRuntime49_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime49_win64.zip) |
| v109    | [cefRuntime109_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime109_win32.zip) | [cefRuntime109_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime109_win64.zip) |
| v145    | [cefRuntime145_win32.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime145_win32.zip) | [cefRuntime145_win64.zip](https://github.com/twinbasic/cef-runtimes/releases/download/v1.0.0/cefRuntime145_win64.zip) |

完整版本列表和发行说明见[CEF运行时发布](https://github.com/twinbasic/cef-runtimes/releases/)。

将ZIP解压到 `%LocalAppData%\twinBASIC_CEF_Runtime\`。ZIP内的版本标记文件夹——例如 `145_0_7632_160_Win64`——必须直接放在该路径下，包含 `libcef.dll` 及其同级文件：

```text
%LocalAppData%\twinBASIC_CEF_Runtime\145_0_7632_160_Win64\libcef.dll
%LocalAppData%\twinBASIC_CEF_Runtime\145_0_7632_160_Win64\chrome_elf.dll
%LocalAppData%\twinBASIC_CEF_Runtime\145_0_7632_160_Win64\…
```

启动时，[**CefBrowser**](/official/Reference/CEF/CefBrowser/)会自动搜索此默认位置。如果找不到 `libcef.dll`，[**Error**](/official/Reference/CEF/CefBrowser/#error)事件会报告搜索的确切路径。

要指向不同的文件夹——例如随安装程序提供的便携并行部署——在[**Create**](/official/Reference/CEF/CefBrowser/#create)事件期间分配[**EnvironmentOptions.BrowserExecutableFolder**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#browserexecutablefolder)：

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.BrowserExecutableFolder = _
        App.Path & "\cef145_win64"
End Sub
```

## 位数必须匹配

运行时位数必须与应用程序位数匹配——32位twinBASIC构建需要Win32运行时，64位构建需要Win64运行时。混用会导致 `libcef.dll` 加载失败，通过[**Error**](/official/Reference/CEF/CefBrowser/#error)事件报告。

## 在窗体上创建CefBrowser控件

包引用和运行时就位后，**CefBrowser**在窗体设计器工具箱中可用。像其他控件一样将其放到窗体上：

```vb
Private Sub Form_Load()
    CefBrowser1.Navigate "https://www.twinbasic.com"
End Sub
```

控件异步启动——第一个用户可见事件是[**Ready**](/official/Reference/CEF/CefBrowser/#ready)，在辅助浏览器进程启动且IPC连接后触发。在此之前，导航、脚本和大多数属性访问器会引发"CefBrowser控件未就绪"（运行时错误5）。

## CefBrowser控件属性

切换**属性**面板查看设计时可见属性：[**DocumentURL**](/official/Reference/CEF/CefBrowser/#documenturl)（控件在**Ready**触发后自动导航到的初始URL）、[**ZoomFactor**](/official/Reference/CEF/CefBrowser/#zoomfactor)、[**UserAgent**](/official/Reference/CEF/CefBrowser/#useragent)以及标准的矩形可停靠属性（大小、**Anchors**、**Dock**）。

完整参考参见[**CefBrowser**类参考](/official/Reference/CEF/CefBrowser/)；底层Chromium运行时支持的功能请查阅[Chromium Embedded Framework文档](https://bitbucket.org/chromiumembedded/cef/wiki/Home)。

## 示例

如果你更喜欢从示例开始，**示例1b——Chromium Embedded Framework示例**可在新建项目对话框中找到。它几乎逐功能镜像**示例1a——WebView2示例**，在CEF包尚未暴露WebView2等效功能的地方会指出差异。

## 下一步

- [自定义UserDataFolder](/official/Tutorials/CEF/Customize-the-UserDataFolder) —— 为Office加载项、信息亭或便携安装重新定位用户配置文件夹。
- [构建浏览器外壳](/official/Tutorials/CEF/Building-a-browser-shell) —— 后退/前进/刷新/缩放/PDF。
- [重入性](/official/Tutorials/CEF/Re-entrancy) —— 包保护你免受什么影响以及你仍需注意的一个地方。