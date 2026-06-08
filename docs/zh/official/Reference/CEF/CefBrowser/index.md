---
title: CefBrowser
parent: "CEF 包"
permalink: /tB/Packages/CEF/CefBrowser/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cd2b19c2-5328-4b33-ada1-92768109cac3'
  PropagateID: 'cd2b19c2-5328-4b33-ada1-92768109cac3'
  ReservedCode1: 'c06f428e-9e93-4831-8ba3-a6ba52890e15'
  ReservedCode2: 'c06f428e-9e93-4831-8ba3-a6ba52890e15'
---

# CefBrowser 类

**CefBrowser** 是一个托管 Chromium Embedded Framework 的 twinBASIC 控件——将一个拖放到 [**Form**](/official/Reference/VB/Form/) 上，Chromium 即可在其矩形内渲染Web内容。应用程序代码可以导航到URL、运行JavaScript、与已加载的页面交换消息、注册虚拟主机文件夹，以及将文档打印为PDF。

该控件在会话中首次使用时会生成一个单独的浏览器进程，并通过IPC通道与其通信；在 [**Ready**](#ready) 事件触发之前调用许多属性和方法会引发 *"CefBrowser control is not ready"*（运行时错误5）。

```vb
Private Sub Form_Load()
    CefBrowser1.Navigate "https://www.twinbasic.com"
End Sub

Private Sub CefBrowser1_Ready()
    Debug.Print "CEF ready: runtime v" & CefBrowser1.CefMajorVersion
End Sub

Private Sub CefBrowser1_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long)
    Debug.Print "Navigated to: " & CefBrowser1.DocumentURL
End Sub
```

该控件从 `BaseControlRectDockable` 继承了矩形可停靠成员（大小、布局、**Anchors**、**Dock**）。它*不*继承可聚焦层，因此 [**WebView2**](/official/Reference/WebView2/WebView2/) 上可用的键盘/鼠标/焦点事件不属于其API——一旦Chromium获得焦点，按键就直接进入页面。


## 生命周期

**CefBrowser** 控件经历三个不同的阶段，每个阶段由CEF运行时中的异步步骤触发：

| 事件                          | 何时触发                                                                                                              |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| [**Create**](#create)          | 容器窗口已创建之后，CEF运行时启动之前。设置 [**EnvironmentOptions**](#environmentoptions) 的最后机会。 |
| [**Error**](#error)            | 运行时无法启动——通常是因为 `libcef.dll` 缺失或用户数据文件夹被锁定。 |
| [**Ready**](#ready)            | 浏览器进程已运行且IPC已连接。控件现在完全可用。                            |

在 [**Ready**](#ready) 之前调用导航、脚本或设置访问器会引发运行时错误5，消息为 *"CefBrowser control is not ready."*。一旦 **Ready** 触发，如果 [**DocumentURL**](#documenturl) 字段有非空值（设计时默认为 `https://www.twinbasic.com`），控件会自动导航到该地址。

进程中第一个初始化的 **CefBrowser** 启动共享的浏览器辅助可执行文件；后续的 **CefBrowser** 实例共享该辅助程序。关闭最后一个 **CefBrowser** 不会终止辅助程序——它会在宿主进程的整个生命周期内驻留，以便将来的控件可以附加到它而无需重新启动。

## 延迟启动

默认情况下，控件在窗体加载后立即启动浏览器辅助程序（在宿主窗口上设置 `WS_VISIBLE` 样式，第一次调整大小事件触发辅助程序）。在窗体加载之前将 [**CreateInitialized**](#createinitialized) 设置为 **False**，然后在浏览器应启动时调用 [**Initialize**](#initialize)——这在多个 **CefBrowser** 控件位于选项卡上且应将启动辅助程序的开销推迟到选项卡显示时很有用。

## JavaScript互操作

控件提供三个系列的BASIC ↔ JavaScript桥接：

- **发布消息**——[**PostWebMessage**](#postwebmessage) 向页面发送值，通过 `window.chrome.webview.addEventListener('message', …)` 到达。页面通过 `window.chrome.webview.postMessage(…)` 回复，触发 [**JsMessage**](#jsmessage) 事件。
- **执行脚本**——[**JsRun**](#jsrun) 调用命名的JavaScript函数并等待结果，[**JsRunAsync**](#jsrunasync) 调用一个并在结果到达时触发 [**JsAsyncResult**](#jsasyncresult)，[**ExecuteScript**](#executescript) 即发即忘地执行代码片段而不等待结果。

同步的 [**JsRun**](#jsrun) 会阻塞BASIC线程直到渲染器回复——这意味着页面的重入（在调用期间发回BASIC的JavaScript处理程序）可能导致UI冻结。只要调用不是简单的，请使用 [**JsRunAsync**](#jsrunasync)。

## 映射虚拟主机名

[**SetVirtualHostNameToFolderMapping**](#setvirtualhostnametofoldermapping) 安装一个虚拟主机名，该主机名从本地文件夹提供文件——因此页面可以 `fetch('https://my.app/index.html')` 而不是 `file:///...`（避免 `file://` 来源的CORS限制）。[**ClearVirtualHostNameToFolderMapping**](#clearvirtualhostnametofoldermapping) 移除映射。

属性
----------

该控件从 `BaseControlRectDockable` 继承标准的矩形可停靠成员——大小、位置、**Anchors**、**Dock**、**Container**、设计时的 **Name** / **Index** / **Tag**。

### Anchors

控制父 **Form** 调整大小时自动调整大小的容器边缘锚点。从 `BaseControlRectDockable` 继承。

### CanGoBack

浏览历史中当前文档之后是否有条目。**Boolean**。只读。在 [**Ready**](#ready) 后可用。

### CanGoForward

浏览历史中当前文档之前是否有条目。**Boolean**。只读。在 [**Ready**](#ready) 后可用。

### CefMajorVersion

编译时选择的CEF运行时主版本号（`49`、`109` 或 `145`）。**Long**。只读。从编译器包引用上的 `CEF_VERSION` 条件编译参数解析——参见[支持的运行时](/official/Reference/CEF/#supported-runtimes)。

### Container

承载此控件的父 **Form** / **Frame** / **PictureBox** / **UserControl**。**Object**。继承。

### ControlType

始终为 **vbCefBrowser**（[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)）。只读。继承。

### CreateInitialized

窗体首次布局控件时是否自动启动浏览器辅助程序。**Boolean**。默认：**True**。在代码中（或在属性表中）设置为 **False** 以推迟启动，直到调用 [**Initialize**](#initialize)。

### DocumentTitle

当前文档的 `<title>` 文本。**String**。只读。每次页面更改标题时更新——[**DocumentTitleChanged**](#documenttitlechanged) 事件在每次更新时触发。

### DocumentURL

当前文档的URL。**String**。读取时在每次导航后返回实时URL；赋值等效于调用 [**Navigate**](#navigate)。设计时默认为 `https://www.twinbasic.com`，作为 [**Ready**](#ready) 触发后的自动导航目标。

### Dock

控件如何停靠到其容器。[**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants) 的成员。继承。

### EnvironmentOptions

配置运行时的 [**CefEnvironmentOptions**](/official/Reference/CEF/CefBrowser/EnvironmentOptions) 对象——可执行文件夹、用户数据文件夹、日志文件、日志严重级别。控件在初始化时自动创建一个；在 [**Create**](#create) 事件之前或期间赋值给其字段才能生效。

### Height

控件的高度。**Single**。继承。

### hWnd

承载CEF表面的*容器*窗口的Win32窗口句柄——不是Chromium浏览器选项卡本身的HWND，后者位于单独的进程中。**LongPtr**。只读。

### Index

控件是数组一部分时的控件数组索引。**Long**。只读。继承。

### Left

控件在其容器内的x位置。**Single**。继承。

### Name

控件的设计时名称。**String**。运行时只读。继承。

### Parent

承载此控件的 **Form**（或其他容器）。**Object**。只读。

### Tag

存储在控件上的用户定义字符串。**String**。继承。

### Top

控件在其容器内的y位置。**Single**。继承。

### UserAgent

Chromium 在HTTP请求中发送的 `User-Agent` 字符串。**String**。读/写。设计时默认为空，此时Chromium使用其内置的user-agent字符串。运行时赋值立即生效。

### Visible

控件是否可见。**Boolean**，默认 **True**。

### Width

控件的宽度。**Single**。继承。

### ZoomFactor

整体页面缩放因子，其中 `1.0` 为100%。**Double**。默认：`1.0`（设计时默认；在浏览器 [**Ready**](#ready) 之前读取为 `0.0`）。

::: info
由于该值在浏览器就绪之前读取为 `0.0`，如果不先将宿主值钳位到 `1`，乘以当前值的算术运算会静默从零开始：

```vb
If CefBrowser1.ZoomFactor = 0 Then CefBrowser1.ZoomFactor = 1
CefBrowser1.ZoomFactor *= 1.1   ' 首次点击110%，第二次121%，…
```
:::

方法
-------

### ClearVirtualHostNameToFolderMapping

移除之前由 [**SetVirtualHostNameToFolderMapping**](#setvirtualhostnametofoldermapping) 安装的虚拟主机名→本地文件夹映射。

语法：*对象*.**ClearVirtualHostNameToFolderMapping** *hostName*

*hostName*
: *必需* 与传递给 **SetVirtualHostNameToFolderMapping** 的主机名匹配的 **String**。

### ExecuteScript

在页面中评估JavaScript，不等待其完成也不返回其结果。当需要返回值时使用 [**JsRun**](#jsrun) 或 [**JsRunAsync**](#jsrunasync)。

语法：*对象*.**ExecuteScript** *jsCode*

*jsCode*
: *必需* 要在页面全局作用域中评估的JavaScript **String**。

### GoBack

在浏览历史中后退一个条目。当 [**CanGoBack**](#cangoback) 为 **False** 时静默无操作。

语法：*对象*.**GoBack**

### GoForward

在浏览历史中前进一个条目。当 [**CanGoForward**](#cangoforward) 为 **False** 时静默无操作。

语法：*对象*.**GoForward**

### Initialize

显式启动浏览器辅助程序进程。仅当 [**CreateInitialized**](#createinitialized) 为 **False** 时需要；否则辅助程序在第一次窗体布局时自动启动。

语法：*对象*.**Initialize**

辅助程序已运行后的第二次调用为无操作。

### JsRun

以给定参数调用命名的JavaScript函数并同步返回结果。阻塞BASIC线程直到渲染器回复。

语法：*对象*.**JsRun** ( *FuncName*, [ *args* ] ) **As Variant**

*FuncName*
: *必需* 命名JavaScript函数的 **String**——例如 `"document.querySelector"`。

*args*
: *可选* 任意数量的 **Variant** 参数。每个参数在传递给函数之前进行JSON编码。

```vb
' 调用页面端函数 `multiplyTheseNumbers(a, b)` 并等待结果。
Dim product As Long = CefBrowser1.JsRun("multiplyTheseNumbers", 5, 6)
Debug.Print product   ' 30
```

::: warning
页面端处理程序在调用期间发回BASIC可能导致UI死锁。对于非简单调用，优先使用 [**JsRunAsync**](#jsrunasync)。完整讨论请参阅[重入性教程](/official/Tutorials/CEF/Re-entrancy)。
:::

### JsRunAsync

异步调用命名的JavaScript函数并立即返回。当结果到达时，[**JsAsyncResult**](#jsasyncresult) 触发并附带结果和错误字符串。

语法：*对象*.**JsRunAsync** *FuncName*, [ *args* ]

*FuncName*
: *必需* 命名JavaScript函数的 **String**。

*args*
: *可选* 任意数量的 **Variant** 参数，按 [**JsRun**](#jsrun) 方式进行JSON编码。

```vb
Private Sub btnRun_Click()
    CefBrowser1.JsRunAsync "multiplyTheseNumbers", 5, 6
End Sub

Private Sub CefBrowser1_JsAsyncResult( _
        ByVal Result As Variant, Token As LongLong, ErrString As String)
    If LenB(ErrString) = 0 Then
        Debug.Print "Async result: "; Result
    Else
        Debug.Print "Async error: "; ErrString
    End If
End Sub
```

如果在渲染器IPC连接之前调用 **JsRunAsync**，调用将被排队并在连接建立后分发。

### Move

在单次调用中重新定位和调整控件大小。继承。

语法：*对象*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

### Navigate

将URL加载到浏览器中。触发 [**NavigationStarting**](#navigationstarting) 然后触发 [**NavigationComplete**](#navigationcomplete)。URI必须包含协议前缀（`http://`、`https://`、`file://`、…）——没有自动前缀插入。

语法：*对象*.**Navigate** *uri*

*uri*
: *必需* 包含要加载的完整URI的 **String**。

### NavigateToString

将给定的HTML字符串加载为从 `about:blank` 提供的内容。文档完全加载时触发 [**NavigationComplete**](#navigationcomplete)。

语法：*对象*.**NavigateToString** *html*

*html*
: *必需* 包含完整HTML文档的 **String**。

### OpenDevToolsWindow

在单独的顶级窗口中打开当前已加载页面的Chromium DevTools窗口。

语法：*对象*.**OpenDevToolsWindow**

### PostWebMessage

向页面发送值；通过 `window.chrome.webview.addEventListener('message', …)` 到达。页面可以通过 `window.chrome.webview.postMessage(…)` 回复，触发 [**JsMessage**](#jsmessage) 事件。

语法：*对象*.**PostWebMessage** *Message*

*Message*
: *必需* 包含要发送的值的 **Variant**。字符串、数字、**Boolean**、**Null** 和 **Empty** 会被JSON编码后发送给页面；对象和数组目前不支持。

如果在渲染器IPC连接之前调用 **PostWebMessage**，调用将被排队并在连接建立后分发。

### PrintToPdf

将当前文档写入PDF文件。成功时触发 [**PrintToPdfCompleted**](#printtopdfcompleted)，失败时触发 [**PrintToPdfFailed**](#printtopdffailed)。

语法：*对象*.**PrintToPdf** *outputPath* [, *Orientation* [, *ScaleFactor* [, *PageWidth* [, *PageHeight* [, *MarginTop* [, *MarginBottom* [, *MarginLeft* [, *MarginRight* [, *ShouldPrintBackgrounds* [, *ShouldPrintSelectionOnly* [, *ShouldPrintHeaderAndFooter* [, *HeaderTitle* [, *FooterUri* ] ] ] ] ] ] ] ] ] ] ] ] ]

*outputPath*
: *必需* 包含目标路径的 **String**。必须是可写入的绝对文件路径。已有文件将被覆盖。

*Orientation*
: *可选* [**cefPrintOrientation**](/official/Reference/CEF/Enumerations/cefPrintOrientation) 的成员。默认：**cefPrintPortrait**。

*ScaleFactor*
: *可选* 包含打印缩放因子的 **Variant**（例如 `1.0` 为100%）。省略时使用CEF运行时的默认值。

*PageWidth*
: *可选* 包含以微米为单位的页面宽度的 **Variant**。省略时使用CEF运行时的默认值。

*PageHeight*
: *可选* 包含以微米为单位的页面高度的 **Variant**。省略时使用CEF运行时的默认值。

*MarginTop* / *MarginBottom* / *MarginLeft* / *MarginRight*
: *可选* 以微米为单位的页边距 **Variant** 值。省略时使用运行时的默认值。

*ShouldPrintBackgrounds*
: *可选* 控制输出中是否包含CSS背景颜色和图像的 **Boolean**。默认：**False**。

*ShouldPrintSelectionOnly*
: *可选* 将输出限制为当前选区的 **Boolean**。默认：**False**。

*ShouldPrintHeaderAndFooter*
: *可选* 控制是否渲染页面页眉（标题）和页脚（URL）的 **Boolean**。默认：**True**。

*HeaderTitle*
: *可选* **Variant** **String**。提供时覆盖页眉中的文档标题。否则使用文档的 `<title>`。

*FooterUri*
: *可选* **Variant** **String**。提供时覆盖页脚中打印的URL。否则使用实时文档URL。

```vb
Private Sub btnPDF_Click()
    Dim outputPath As String
    outputPath = Environ$("USERPROFILE") & "\Documents\cefDemo.pdf"
    CefBrowser1.PrintToPdf outputPath
End Sub

Private Sub CefBrowser1_PrintToPdfCompleted()
    MsgBox "PDF saved.", vbInformation
End Sub
```

### Reload

重新加载当前文档，等效于在浏览器中按 **F5**。

语法：*对象*.**Reload**

### SetVirtualHostNameToFolderMapping

安装一个从本地文件夹提供文件的虚拟主机名，以便页面可以通过 `https://` 来源而非 `file://` 引用本地内容。

语法：*对象*.**SetVirtualHostNameToFolderMapping** *hostName*, *folderPath*

*hostName*
: *必需* 包含要安装的主机名的 **String**（例如 `"my.app"`）。

*folderPath*
: *必需* 包含应在该主机名下提供内容的文件夹绝对路径的 **String**。必须以尾部路径分隔符结尾。

```vb
Private Sub CefBrowser1_Ready()
    CefBrowser1.SetVirtualHostNameToFolderMapping _
        "my.app", App.Path & "\web\"
    CefBrowser1.Navigate "https://my.app/index.html"
End Sub
```

事件
------

### Create

在容器窗口已创建但CEF运行时尚未启动之后触发。宿主填充 [**EnvironmentOptions**](#environmentoptions) 的最后机会。

语法：*对象*\_**Create**( )

### DocumentTitleChanged

当文档更改其标题时触发——通常在导航之后，但也可能在客户端JavaScript写入 `document.title` 时触发。读取 [**DocumentTitle**](#documenttitle) 获取新值。

语法：*对象*\_**DocumentTitleChanged**( )

### DOMContentLoaded

当页面达到 `DOMContentLoaded` 生命周期事件时触发——DOM树已构建，JavaScript可以安全地遍历它，但外部资源可能仍在加载。

语法：*对象*\_**DOMContentLoaded**( )

### Error

当CEF运行时启动失败时触发——最常见的原因是 `libcef.dll` 在配置的位置未找到，或用户数据文件夹被另一个进程锁定。

语法：*对象*\_**Error**( *code* **As Long**, *msg* **As String** )

```vb
Private Sub CefBrowser1_Error(ByVal code As Long, ByVal msg As String)
    MsgBox "CEF error " & Hex$(code) & ": " & msg, vbExclamation, "CEF"
End Sub
```

### JsAsyncResult

当之前的 [**JsRunAsync**](#jsrunasync) 调用返回时触发。*ErrString* 是任何运行时错误的描述，成功时为空字符串。

语法：*对象*\_**JsAsyncResult**( *Result* **As Variant**, *Token* **As LongLong**, *ErrString* **As String** )

### JsMessage

当页面上的JavaScript调用 `window.chrome.webview.postMessage(value)` 时触发。

语法：*对象*\_**JsMessage**( *Message* **As Variant** )

```vb
Private Sub CefBrowser1_JsMessage(ByVal Message As Variant)
    Debug.Print "From page: "; Message
    CefBrowser1.PostWebMessage "Hello from BASIC"
End Sub
```

### NavigationComplete

当由 [**Navigate**](#navigate)、[**NavigateToString**](#navigatetostring) 或页面中的用户交互发起的导航完成时触发。

语法：*对象*\_**NavigationComplete**( *IsSuccess* **As Boolean**, *WebErrorStatus* **As Long** )

::: info
*IsSuccess* 和 *WebErrorStatus* 是事件签名的一部分，但目前返回占位值（`True` 和 `0`）——填充它们的底层CEF回调尚未连接。使用文档状态（[**DocumentURL**](#documenturl)、[**CanGoBack**](#cangoback)）来确定结果。
:::

### NavigationStarting

在导航开始之前触发。将 *Cancel* 设置为 **True** 以中止导航；保持 **False** 让其继续。

语法：*对象*\_**NavigationStarting**( *Uri* **As String**, *IsUserInitiated* **As Boolean**, *IsRedirected* **As Boolean**, *RequestHeaders* **As Object**, *Cancel* **As Boolean** )

*Uri*
: 目标URI。

*IsUserInitiated*
: 当导航由用户手势触发时（点击、在地址栏按 **Enter**）为 **True**；脚本发起时为 **False**。

*IsRedirected*
: 当此导航是来自之前导航的服务器端重定向时为 **True**。

*RequestHeaders*
: **Object**。目前类型为 **Object**（底层 `CefRequestHeaders` 集合是为将来使用预留的占位符）。

*Cancel*
: 设置为 **True** 以中止导航。

```vb
Private Sub CefBrowser1_NavigationStarting( _
        ByVal Uri As String, ByVal IsUserInitiated As Boolean, _
        ByVal IsRedirected As Boolean, ByVal RequestHeaders As Object, _
        Cancel As Boolean)
    If InStr(Uri, "ads.example.com") > 0 Then Cancel = True
End Sub
```

### PrintToPdfCompleted

当之前的 [**PrintToPdf**](#printtopdf) 调用完成写入PDF时触发。

语法：*对象*\_**PrintToPdfCompleted**( )

### PrintToPdfFailed

当之前的 [**PrintToPdf**](#printtopdf) 调用失败时触发——例如因为输出路径不可写入。

语法：*对象*\_**PrintToPdfFailed**( )

### Ready

在浏览器辅助程序进程已启动、其IPC通道已连接且控件已准备好接受导航和脚本命令之后触发。如果 [**DocumentURL**](#documenturl) 在 **Ready** 触发时有非空值（设计时默认为 `https://www.twinbasic.com`），控件会自动导航到该地址。

语法：*对象*\_**Ready**( )

### SourceChanged

当 [**DocumentURL**](#documenturl) 已更新时触发——通常在导航之后。用于使地址栏控件与浏览器保持同步。

语法：*对象*\_**SourceChanged**( *IsNewDocument* **As Boolean** )

*IsNewDocument*
: 当更改反映新文档加载（而非同一文档片段 / `history.pushState` 更新）时为 **True**。

```vb
Private Sub CefBrowser1_SourceChanged(ByVal IsNewDocument As Boolean)
    AddressBar.Text = CefBrowser1.DocumentURL
End Sub
```

## 另见

- [CefEnvironmentOptions](/official/Reference/CEF/CefBrowser/EnvironmentOptions) -- 通过 [**EnvironmentOptions**](#environmentoptions) 暴露的预创建配置
- [CefLogSeverity](/official/Reference/CEF/Enumerations/CefLogSeverity) -- CEF调试日志的详细级别阈值
- [cefPrintOrientation](/official/Reference/CEF/Enumerations/cefPrintOrientation) -- 传递给 [**PrintToPdf**](#printtopdf) 的页面方向
- [WebView2](/official/Reference/WebView2/WebView2/) -- 具有更大功能集的WebView2运行时对应项
- [WebView2 对等性](/official/Reference/CEF/#webview2-parity) -- **WebView2** 上可用但尚未在 **CefBrowser** 上暴露的功能
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) -- **vbCefBrowser** 所在位置