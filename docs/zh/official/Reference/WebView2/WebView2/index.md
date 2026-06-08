---
title: WebView2
parent: WebView2 Package
permalink: /tB/Packages/WebView2/WebView2/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f614d137-5528-4809-8ecf-3acdfa5c4289'
  PropagateID: 'f614d137-5528-4809-8ecf-3acdfa5c4289'
  ReservedCode1: 'a37030da-2f56-4884-ad7f-6208bb5817a9'
  ReservedCode2: 'a37030da-2f56-4884-ad7f-6208bb5817a9'
---

# WebView2 类

**WebView2** 是承载 Microsoft Edge **WebView2** 运行时的 twinBASIC 控件 --- 将其拖放到[**Form**](/official/Reference/VB/Form/)上，运行中的 Edge 引擎会在其矩形区域内渲染 Web 内容。应用程序代码可以导航到 URL、运行 JavaScript、拦截 HTTP 请求、与页面共享 BASIC 对象、双向传递消息，以及将文档打印为 PDF。

该控件封装了底层 `ICoreWebView2*` COM 接口，并将其作为普通 BASIC 属性、方法和事件暴露。大部分工作在浏览器进程内异步完成 --- 控件在 WebView2 环境和控制器创建完成后触发[**Ready**](#ready)事件，在此之前调用大多数成员会引发*"WebView2 control is not ready"*（运行时错误 5）。

```vb
Private Sub Form_Load()
    WebView21.Navigate "https://www.twinbasic.com"
End Sub

Private Sub WebView21_Ready()
    Debug.Print "WebView2 ready: browser process " & WebView21.BrowserProcessId
End Sub

Private Sub WebView21_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long)
    If Not IsSuccess Then
        Debug.Print "Navigation failed: " & WebErrorStatus
    End If
End Sub
```

## 生命周期

WebView2 控件在构建与使用之间经历三个不同阶段，每个阶段由 Edge 运行时中的异步步骤触发：

| 事件                                | 何时触发                                                                                                              |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| [**Create**](#create)                | 容器窗口已存在之后，WebView2 环境构建之前。设置[**EnvironmentOptions**](#environmentoptions)的最后机会。 |
| [**Error**](#error)                  | 环境或控制器无法创建 --- 通常是因为缺少 WebView2 运行时。            |
| [**Ready**](#ready)                  | 环境、控制器和核心视图均已就绪。控件现在完全可用。                      |

在[**Ready**](#ready)之前调用导航、脚本或设置访问器会引发运行时错误 5，提示*"WebView2 control is not ready"*。当某项设置依赖较新版本的运行时接口时，同样的错误会以*"The executing version of WebView2 does not support the requested feature"*的形式出现 --- 请先查询对应的 `Supports…Features` 属性。

如果[**DocumentURL**](#documenturl)字段在[**Ready**](#ready)触发时具有非空值（设计时默认为 `https://www.twinbasic.com`），控件会自动导航到该 URL。

## 延迟事件

多个运行时回调 --- [**PermissionRequested**](#permissionrequested)、[**NavigationStarting**](#navigationstarting)、[**WebResourceRequested**](#webresourcerequested)、[**ScriptDialogOpening**](#scriptdialogopening)、[**DownloadStarting**](#downloadstarting) 和 [**NewWindowRequested**](#newwindowrequested) --- 在 Edge 侧是可重入的，意味着它们在 WebView2 线程上触发，同时期望宿主同步返回或持有*延迟*（deferral）直到做出决定。在同步处理程序内回调控件可能导致浏览器进程死锁。

当[**UseDeferredEvents**](#usedeferredevents)为 **True**（默认值）时，控件代表宿主获取运行时的延迟，将事件投递到 BASIC 消息循环，并在处理程序返回后完成延迟。因此，应用程序代码在这些事件中可以安全地调用任何其他 **WebView2** 方法。仅当需要同步语义且宿主已自行安排重入保护时，才将[**UseDeferredEvents**](#usedeferredevents)设为 **False**。

[**AcceleratorKeyPressed**](#acceleratorkeypressed)始终是同步的 --- 其运行时参数不暴露延迟。

## JavaScript 互操作

控件提供三类 BASIC ↔ JavaScript 桥接：

- **宿主对象共享** --- [**AddObject**](#addobject) 将 COM 对象以 `chrome.webview.hostObjects.<Name>` 的名称发布到 JavaScript。页面可以直接调用 BASIC 对象的方法和读/写属性。需要[**AreHostObjectsAllowed**](#arehostobjectsallowed)（默认 **True**）。当页面可能在 BASIC 操作期间回调时，传入 `UseDeferredInvoke:=True`；使用延迟调用时宿主无法向页面返回值。
- **消息传递** --- [**PostWebMessage**](#postwebmessage) 向页面发送值，页面通过 `window.chrome.webview.addEventListener('message', …)` 接收。页面使用 `window.chrome.webview.postMessage(…)` 回复，从而触发[**JsMessage**](#jsmessage)事件。需要[**IsWebMessageEnabled**](#iswebmessageenabled)（默认 **True**）。
- **执行脚本** --- [**JsRun**](#jsrun) 调用命名 JavaScript 函数并同步等待结果，[**JsRunAsync**](#jsrunasync) 异步调用并在结果到达时触发[**JsAsyncResult**](#jsasyncresult)，[**JsProp**](#jsprop) 求值如 `document.title` 的表达式，[**ExecuteScript**](#executescript) 即发即忘。

## 拦截请求

要重写、模拟或仅观察页面的 HTTP 流量，请使用[**AddWebResourceRequestedFilter**](#addwebresourcerequestedfilter)注册 URL 过滤器，并处理[**WebResourceRequested**](#webresourcerequested)事件。事件参数暴露[**WebView2Request**](/official/Reference/WebView2/WebView2Request)（只读元数据，可变请求体）和[**WebView2Response**](/official/Reference/WebView2/WebView2Response) --- 向响应对象分配 **StatusCode**、**ReasonPhrase**、**Headers** 和内容即可短路网络请求；保持不变则让运行时正常处理。

属性
----------

控件从 `BaseControlFocusableNoFont` 继承标准的大小、布局和焦点成员。大部分 WebView2 特定成员分为三类：映射到 Edge 运行时的设置、探测已加载运行时版本的能力标志，以及运行时只读状态。

### AdditionalAllowedFrameAncestors

当此控件承载页面时允许的额外 `Content-Security-Policy: frame-ancestors` 指令。**String**。默认：空。在下次导航时生效；仅在实现了 `ICoreWebView2NavigationStartingEventArgs2` 的运行时上有效。

### Anchors

控制父级 **Form** 调整大小时自动调整大小的容器边缘锚点。继承自 `BaseControlRectDockable`。

### AreBrowserAcceleratorKeysEnabled

Edge 内置的加速键是否激活 --- **F5** 刷新、**Ctrl+P** 打印、**Ctrl+F** 页内查找等。**Boolean**，默认 **True**。需要[**SupportsAcceleratorKeysFeatures**](#supportsacceleratorkeysfeatures)。

### AreDefaultContextMenusEnabled

是否显示 Edge 的右键上下文菜单。**Boolean**，默认 **True**。设为 **False** 并处理[**UserContextMenu**](#usercontextmenu)以绘制自定义菜单。

### AreDefaultScriptDialogsEnabled

Edge 是否为 `alert()`、`confirm()`、`prompt()` 和 `beforeunload` 确认框显示内置对话框。**Boolean**，默认 **True**。设为 **False** 并处理[**ScriptDialogOpening**](#scriptdialogopening)以提供自定义对话框。

### AreDevToolsEnabled

用户是否可以通过上下文菜单或键盘快捷键打开 DevTools 窗口。**Boolean**，默认 **True**。与[**OpenDevToolsWindow**](#opendevtoolswindow)无关，后者始终可用。

### AreHostObjectsAllowed

是否允许通过[**AddObject**](#addobject)将宿主 BASIC 对象暴露给页面。**Boolean**，默认 **True**。

### BackColor

在 WebView2 表面仍在加载和设计模式下时绘制的背景颜色。**OLE_COLOR**，默认 `&HA0BD95`（浅绿色）。页面渲染完成后，Edge 控制可见像素。

### BrowserProcessId

外部 `msedgewebview2.exe` 宿主进程的 Win32 进程 ID。**Long**。只读。[**Ready**](#ready)后可用。

### CanGoBack

浏览历史中当前文档之前是否有条目。**Boolean**。只读。[**Ready**](#ready)后可用。

### CanGoForward

浏览历史中当前文档之后是否有条目。**Boolean**。只读。[**Ready**](#ready)后可用。

### CausesValidation

焦点移入控件时是否触发前一个焦点控件的 **Validate** 事件。**Boolean**，默认 **True**。继承。

### Container

承载此控件的父级 **Form** / **Frame** / **PictureBox** / **UserControl**。继承。

### ControlType

始终为 **vbWebView2**（[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)）。只读。继承。

### DocumentTitle

当前文档的 `<title>` 文本。**String**。只读。每次页面更改标题时更新 --- 每次更新都会触发[**DocumentTitleChanged**](#documenttitlechanged)事件。

### DocumentURL

当前文档的 URL。**String**。读取时返回每次导航后的实时 URL；赋值等同于调用[**Navigate**](#navigate)。设计时默认为 `https://www.twinbasic.com`，用作[**Ready**](#ready)触发时的自动导航目标。

### DragIcon

从该控件手动拖动时用作鼠标光标的 **StdPicture**。继承。

### DragMode

拖放操作如何启动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants) 的成员：**vbManual**（0，默认 --- 从代码调用[**Drag**](#drag)）或 **vbAutomatic**（1）。继承。

### Enabled

控件是否接受用户输入。**Boolean**，默认 **True**。继承。

### EnvironmentOptions

配置 WebView2 环境的[**WebView2EnvironmentOptions**](/official/Reference/WebView2/WebView2/EnvironmentOptions)对象 --- 用户数据文件夹、可执行文件文件夹、区域设置、跟踪防护、单点登录和额外命令行参数。控件在初始化时自动创建一个；在[**Create**](#create)事件之前或期间对其字段赋值即可生效。

### Height

控件的高度。**Single**。继承。

### hWnd

承载 WebView2 表面的*容器*窗口的 Win32 窗口句柄 --- 不是 Edge 浏览器选项卡本身的 HWND，后者存在于单独的进程中。**LongPtr**。只读。覆盖继承的定义。

### Index

控件为数组一部分时的控件数组索引。**Long**。只读。继承。

### IsBuiltInErrorPageEnabled

是否显示 Edge 的默认错误页面（例如"嗯，无法访问此页面"）。**Boolean**，默认 **True**。

### IsDefaultDownloadDialogOpen

内置 Edge 下载管理器对话框当前是否可见。**Boolean**。只读。需要[**SupportsDownloadDialogFeatures**](#supportsdownloaddialogfeatures)。

### IsDocumentPlayingAudio

当前文档是否正在播放音频。**Boolean**。只读。需要[**SupportsAudioFeatures**](#supportsaudiofeatures)。

### IsGeneralAutoFillEnabled

Edge 是否提供保存和自动填充非密码表单值（地址、电话号码等）。**Boolean**，默认 **True**。需要[**SupportsAutoFillFeatures**](#supportsautofillfeatures)。

### IsMuted

文档的音频是否静音。**Boolean**，默认 **False**。需要[**SupportsAudioFeatures**](#supportsaudiofeatures)。

### IsPasswordAutoSaveEnabled

Edge 是否提供保存页面中输入的密码。**Boolean**，默认 **True**。需要[**SupportsAutoFillFeatures**](#supportsautofillfeatures)。

### IsPinchZoomEnabled

触摸硬件上的捏合手势是否更改缩放因子。**Boolean**，默认 **True**。需要[**SupportsPinchZoomFeatures**](#supportspinchzoomfeatures)。

### IsScriptEnabled

页面中是否运行 JavaScript。**Boolean**，默认 **True**。禁用后也会禁用控件上的所有 JavaScript 互操作功能。

### IsStatusBarEnabled

Edge 是否显示悬停链接的内置状态栏。**Boolean**，默认 **True**。

### IsSuspended

WebView2 处理管道是否已被[**Suspend**](#suspend)调用暂停。**Boolean**。只读。需要[**SupportsSuspendResumeFeatures**](#supportssuspendresumefeatures)。

### IsSwipeNavigationEnabled

触摸硬件上的水平滑动手势是否在历史记录中前进/后退。**Boolean**，默认 **True**。需要[**SupportsSwipeNavigationFeatures**](#supportsswipenavigationfeatures)。

### IsWebMessageEnabled

[**PostWebMessage**](#postwebmessage) 桥接和[**JsMessage**](#jsmessage)事件是否激活。**Boolean**，默认 **True**。

### IsZoomControlEnabled

用户是否可以通过 **Ctrl+** 鼠标滚轮或 **Ctrl+** 加/减号更改缩放因子。**Boolean**，默认 **True**。

### JsCallTimeOutSeconds

[**JsRun**](#jsrun) 和[**JsProp**](#jsprop) 在引发 `RPC_E_TIMEOUT` 之前等待同步 JavaScript 结果的时长。**Double** 秒；`0`（默认）无限等待。

### Left

控件在其容器内的水平位置。**Double**。继承。

### MouseIcon

当[**MousePointer**](#mousepointer)为 **vbCustom** 时用作鼠标光标的 **StdPicture**。继承。

### MousePointer

控件上的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants) 的成员。继承。

### Name

设计时名称。**String**。运行时只读。继承。

### SupportsAcceleratorKeysFeatures

已加载的 WebView2 运行时是否支持加速键设置 --- 即是否暴露 `ICoreWebView2Settings3`。**Boolean**。只读。

### SupportsAudioFeatures

已加载的运行时是否支持音频设置 --- 即是否暴露 `ICoreWebView2_8`。**Boolean**。只读。

### SupportsAutoFillFeatures

已加载的运行时是否支持自动填充设置 --- 即是否暴露 `ICoreWebView2Settings4`。**Boolean**。只读。

### SupportsDownloadDialogFeatures

已加载的运行时是否支持控制下载对话框 --- 即是否暴露 `ICoreWebView2_9`。**Boolean**。只读。

### SupportsFolderMappingFeatures

已加载的运行时是否支持虚拟主机名到文件夹的映射 --- 即是否暴露 `ICoreWebView2_5`。**Boolean**。只读。

### SupportsNavigateCustomFeatures

已加载的运行时是否支持[**NavigateCustom**](#navigatecustom)使用的自定义请求导航功能 --- 即是否暴露 `ICoreWebView2_2`。**Boolean**。只读。

### SupportsPdfFeatures

已加载的运行时是否支持[**PrintToPdf**](#printtopdf) --- 即是否暴露 `ICoreWebView2_7`。**Boolean**。只读。

### SupportsPinchZoomFeatures

已加载的运行时是否支持捏合缩放设置 --- 即是否暴露 `ICoreWebView2Settings5`。**Boolean**。只读。

### SupportsSuspendResumeFeatures

已加载的运行时是否支持[**Suspend**](#suspend) / [**Resume**](#resume) --- 即是否暴露 `ICoreWebView2_3`。**Boolean**。只读。

### SupportsSwipeNavigationFeatures

已加载的运行时是否支持滑动导航设置 --- 即是否暴露 `ICoreWebView2Settings6`。**Boolean**。只读。

### SupportsTaskManagerFeatures

已加载的运行时是否支持[**OpenTaskManagerWindow**](#opentaskmanagerwindow) --- 即是否暴露 `ICoreWebView2_6`。**Boolean**。只读。

### SupportsUserAgentFeatures

已加载的运行时是否支持[**UserAgent**](#useragent)设置 --- 即是否暴露 `ICoreWebView2Settings2`。**Boolean**。只读。

### TabIndex

控件在窗体 TAB 键导航顺序中的位置。**Long**。继承。

### TabStop

用户是否可以通过 **TAB** 键到达控件。**Boolean**，默认 **True**。继承。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式 **String**。继承。

### Top

控件在其容器内的垂直位置。**Double**。继承。

### UseDeferredEvents

可重入的运行时事件（[**PermissionRequested**](#permissionrequested)、[**NavigationStarting**](#navigationstarting)、[**WebResourceRequested**](#webresourcerequested)、[**ScriptDialogOpening**](#scriptdialogopening)、[**DownloadStarting**](#downloadstarting)、[**NewWindowRequested**](#newwindowrequested)）是否在触发前延迟到 BASIC 消息循环。**Boolean**，默认 **True**。参见[延迟事件](#deferred-events)。

### UserAgent

Edge 在每个 HTTP 请求中发送的 `User-Agent` 字符串。**String**。设置后在环境生命周期内持续有效。需要[**SupportsUserAgentFeatures**](#supportsuseragentfeatures)。

### Visible

控件是否可见。**Boolean**，默认 **True**。继承。

### Width

控件的宽度。**Single**。继承。

### ZoomFactor

当前缩放因子 --- `1.0` 为 100%，`1.5` 为 150%，以此类推。**Double**。设计时默认为 `0`，表示"不覆盖 Edge 的默认值 1.0"。

::: info
由于设计时默认值为 `0` 而非 `1.0`，对当前值进行乘法运算时会默认从零开始，除非宿主先将其调整为 `1`：

```vb
If WebView21.ZoomFactor = 0 Then WebView21.ZoomFactor = 1
WebView21.ZoomFactor *= 1.1   ' 首次点击 110%，第二次 121%，…
```
:::

方法
-------

### AddObject

将 BASIC COM 对象以 `chrome.webview.hostObjects.<ObjName>` 的名称暴露给页面。页面可以作为普通 JavaScript 对象读写其属性和调用其方法。

语法：*object*.**AddObject** *ObjName*, *Object* [, *UseDeferredInvoke* ]

*ObjName*
: *必需* 一个 **String** 名称，页面通过此名称引用对象。

*Object*
: *必需* 要发布的 **Object**。

*UseDeferredInvoke*
: *可选* 一个 **Boolean**，默认 **False**。为 **True** 时，来自页面的调用被延迟到 BASIC 消息循环 --- 可以安全地从内部重入 WebView2 控件，但页面无法读取返回值。当页面需要读取返回值时使用 **False**。

```vb
Private Sub WebView21_Ready()
    WebView21.AddObject "myCalculator", New MyCalculator
End Sub

Class MyCalculator
    Public Function MultiplyByTen(ByVal Value As Long) As Long
        Return Value * 10
    End Function
End Class
```

```js
async function callHostCalculator() {
    let result = await chrome.webview.hostObjects.myCalculator.MultiplyByTen(7);
    alert("BASIC returned: " + result);   //  -> 70
}
```

对宿主对象的调用在 JavaScript 侧是异步的，必须在 `async` 函数内 `await` --- 即使 *UseDeferredInvoke* 为 **False**。关于何时传入 **True**，参见[重入](/official/Tutorials/WebView2/Re-entrancy)教程。

### AddScriptToExecuteOnDocumentCreated

注册一段 JavaScript 代码，在 WebView2 导航到的每个新文档顶部自动运行。在*下一次*导航时生效 --- 不影响当前已加载的页面。

语法：*object*.**AddScriptToExecuteOnDocumentCreated** *jsCode*

*jsCode*
: *必需* 一个包含要注入的 JavaScript 代码的 **String**。

### AddWebResourceRequestedFilter

注册一个 URL 模式。URI 匹配该模式的请求将触发[**WebResourceRequested**](#webresourcerequested)事件，以便宿主观察或覆盖它们。

语法：*object*.**AddWebResourceRequestedFilter** *sFilter*, *FilterContext*

*sFilter*
: *必需* 一个 **String** URL 模式。`*` 和 `?` 为通配符。

*FilterContext*
: *必需* [**wv2WebResourceContext**](/official/Reference/WebView2/Enumerations/wv2WebResourceContext) 的成员，将匹配限制为特定资源类型。

### CallDevToolsProtocolMethod

向运行中的 Edge 实例发送 Chrome DevTools Protocol 消息。提供 *CustomEventId* 时，运行时的回复会以相同的 *CustomEventId* 和 JSON 响应触发[**DevToolsProtocolResponse**](#devtoolsprotocolresponse)事件。

语法：*object*.**CallDevToolsProtocolMethod** *MethodName*, *ParamsAsJson* [, *CustomEventId* ]

*MethodName*
: *必需* 一个 **String**，如 `"Emulation.setScriptExecutionDisabled"`。

*ParamsAsJson*
: *必需* 一个包含 JSON 编码参数对象的 **String**。

*CustomEventId*
: *可选* 一个在[**DevToolsProtocolResponse**](#devtoolsprotocolresponse)中回传的 **Variant**。省略时，回复被丢弃。

### ClearVirtualHostNameToFolderMapping

移除先前通过[**SetVirtualHostNameToFolderMapping**](#setvirtualhostnametofoldermapping)安装的虚拟主机名 → 本地文件夹映射。

语法：*object*.**ClearVirtualHostNameToFolderMapping** *hostName*

*hostName*
: *必需* 一个与传入 **SetVirtualHostNameToFolderMapping** 的主机名匹配的 **String**。

需要[**SupportsFolderMappingFeatures**](#supportsfoldermappingfeatures)。

### CloseDefaultDownloadDialog

隐藏内置的 Edge 下载管理器对话框。

语法：*object*.**CloseDefaultDownloadDialog**

需要[**SupportsDownloadDialogFeatures**](#supportsdownloaddialogfeatures)。

### Drag

开始、完成或取消手动拖放操作。继承。

语法：*object*.**Drag** [ *Action* ]

### ExecuteScript

在页面中求值 JavaScript，不等待完成，也不返回结果。需要返回值时请使用[**JsRun**](#jsrun)或[**JsRunAsync**](#jsrunasync)。

语法：*object*.**ExecuteScript** *jsCode*

*jsCode*
: *必需* 一个要在页面全局作用域中求值的 **String** JavaScript 代码。

### GoBack

在浏览历史中后退一个条目。当[**CanGoBack**](#cangoback)为 **False** 时静默无操作。

语法：*object*.**GoBack**

### GoForward

在浏览历史中前进一个条目。当[**CanGoForward**](#cangoforward)为 **False** 时静默无操作。

语法：*object*.**GoForward**

### JsProp

求值 JavaScript 表达式并同步返回结果 --- 便于读取属性如 `document.title`。等待结果最多[**JsCallTimeOutSeconds**](#jscalltimeoutseconds)秒。

语法：*object*.**JsProp** ( *PropName* ) **As Variant**

*PropName*
: *必需* 一个包含要求值表达式的 **String**。

返回从运行时返回的 JSON 解码的结果 --- **Boolean**、**Double**、**String**、**Null** 或 **Empty**（对应 `undefined`）。尚不支持对象和数组结果 --- 访问它们会引发运行时错误 5。

### JsRun

使用给定参数调用命名 JavaScript 函数并同步返回结果。等待结果最多[**JsCallTimeOutSeconds**](#jscalltimeoutseconds)秒。

语法：*object*.**JsRun** ( *FuncName*, [ *args* ] ) **As Variant**

*FuncName*
: *必需* 一个命名 JavaScript 函数的 **String** --- 如 `"document.querySelector"`。

*args*
: *可选* 任意数量的 **Variant** 参数。每个参数在传递给函数前进行 JSON 编码。支持 String、数值、**Boolean**、**Null** 和 **Empty**。

```vb
' 调用页面端函数 `multiplyTheseNumbers(a, b)` 并等待结果。
Dim product As Long = WebView21.JsRun("multiplyTheseNumbers", 5, 6)
Debug.Print product   ' 30
```

### JsRunAsync

异步调用命名 JavaScript 函数并立即返回一个令牌。结果到达时，[**JsAsyncResult**](#jsasyncresult)会以相同令牌触发。

语法：*object*.**JsRunAsync** ( *FuncName*, [ *args* ] ) **As LongLong**

*FuncName*
: *必需* 一个命名 JavaScript 函数的 **String**。

*args*
: *可选* 任意数量的 **Variant** 参数，JSON 编码方式与[**JsRun**](#jsrun)相同。

```vb
Private Sub btnRun_Click()
    WebView21.JsRunAsync "multiplyTheseNumbers", 5, 6
End Sub

Private Sub WebView21_JsAsyncResult( _
        ByVal Result As Variant, Token As LongLong, ErrString As String)
    If LenB(ErrString) = 0 Then
        Debug.Print "Async result: "; Result
    Else
        Debug.Print "Async error: "; ErrString
    End If
End Sub
```

### Move

在单次调用中重新定位和调整控件大小。继承。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

### MoveFocus

将键盘焦点转移到底层 WebView2 表面，使后续击键分派到页面中。与继承的[**SetFocus**](#setfocus)（聚焦宿主控件窗口）不同。

语法：*object*.**MoveFocus**

### Navigate

将 URL 加载到 WebView2 中。触发[**NavigationStarting**](#navigationstarting)，然后触发[**NavigationComplete**](#navigationcomplete)。如果 URI 没有协议前缀，会自动添加 `https://`。

语法：*object*.**Navigate** *uri*

*uri*
: *必需* 一个 **String** URI，如 `"https://www.twinbasic.com"` 或 `"file:///C:/page.html"`。

```vb
Private Sub AddressBar_KeyDown(KeyCode As Integer, Shift As Integer)
    If KeyCode = vbKeyReturn Then WebView21.Navigate AddressBar.Text
End Sub

Private Sub WebView21_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long)
    btnBack.Enabled = WebView21.CanGoBack
    btnForward.Enabled = WebView21.CanGoForward
End Sub
```

### NavigateCustom

使用任意 HTTP 方法、可选请求头和可选请求体导航 --- 适用于 POST 导航或预先附加授权头。触发[**NavigationStarting**](#navigationstarting)和[**NavigationComplete**](#navigationcomplete)。

语法：*object*.**NavigateCustom** *uri*, *method* [, *headers* [, *postData* [, *postDataAsUTF8* ] ] ]

*uri*
: *必需* 一个 **String** URI。与[**Navigate**](#navigate)一样，缺少协议前缀时自动补上 `https://`。

*method*
: *必需* 一个 **String** HTTP 方法 --- `"GET"`、`"POST"` 等。

*headers*
: *可选* 一个由 `vbCrLf` 分隔的 `Header: value` 行组成的 **String**。

*postData*
: *可选* 一个包含请求体的 **Variant** --- **String**（根据 *postDataAsUTF8* 编码）或 **Byte()** 数组（原样使用）。

*postDataAsUTF8*
: *可选* 一个 **Boolean**，默认 **True**。为 **True** 且 *postData* 为 **String** 时，字符串在发送前进行 UTF-8 编码。

需要[**SupportsNavigateCustomFeatures**](#supportsnavigatecustomfeatures)。

### NavigateToString

将 HTML 字符串直接加载到 WebView2 中，如同 HTTP 响应的正文 --- 适用于启动画面、生成的报告或关于页面。触发[**NavigationStarting**](#navigationstarting)和[**NavigationComplete**](#navigationcomplete)。

语法：*object*.**NavigateToString** *htmlContent*

*htmlContent*
: *必需* 一个包含 HTML 源代码的 **String**。

```vb
WebView21.NavigateToString "<h1>Hello, world!</h1>"
```

### OpenDefaultDownloadDialog

显示内置的 Edge 下载管理器对话框。

语法：*object*.**OpenDefaultDownloadDialog**

需要[**SupportsDownloadDialogFeatures**](#supportsdownloaddialogfeatures)。

### OpenDevToolsWindow

在单独的 Edge 窗口中打开页面的 DevTools 窗口。与[**AreDevToolsEnabled**](#aredevtoolsenabled)无关，后者仅控制用户发起的路径。

语法：*object*.**OpenDevToolsWindow**

### OpenTaskManagerWindow

打开 Edge 的浏览器任务管理器窗口，列出控件使用的渲染器进程。

语法：*object*.**OpenTaskManagerWindow**

需要[**SupportsTaskManagerFeatures**](#supportstaskmanagerfeatures)。

### PostWebMessage

向页面发送值。页面通过 `window.chrome.webview` 上的 `message` 事件接收。**String** 作为 JavaScript 字符串传递；其他类型在发送前进行 JSON 编码。

语法：*object*.**PostWebMessage** *Message*

*Message*
: *必需* 一个要发送的 **Variant** 值。

需要[**IsWebMessageEnabled**](#iswebmessageenabled)。

```vb
WebView21.PostWebMessage "Hello from twinBASIC!"

Private Sub WebView21_JsMessage(ByVal Message As Variant)
    Debug.Print "Reply from page: "; Message
End Sub
```

```js
window.chrome.webview.addEventListener('message', (e) => {
    alert("Host sent: " + e.data);
    window.chrome.webview.postMessage("Thanks, twinBASIC!");
});
```

### PostWebMessageJSON

向页面发送字面 JSON 字符串而不重新编码 --- 适用于调用方已有序列化 JSON 的情况。

语法：*object*.**PostWebMessageJSON** *jsonString*

*jsonString*
: *必需* 一个包含有效 JSON 的 **String**。

需要[**IsWebMessageEnabled**](#iswebmessageenabled)。

### PrintToPdf

将当前文档保存为 PDF 文件。工作异步完成 --- 结果通过[**PrintToPdfCompleted**](#printtopdfcompleted)或[**PrintToPdfFailed**](#printtopdffailed)到达。需要[**SupportsPdfFeatures**](#supportspdffeatures)。

语法：*object*.**PrintToPdf** *outputPath* [, *Orientation* [, *ScaleFactor* [, *PageWidth* [, *PageHeight* [, *MarginTop* [, *MarginBottom* [, *MarginLeft* [, *MarginRight* [, *ShouldPrintBackgrounds* [, *ShouldPrintSelectionOnly* [, *ShouldPrintHeaderAndFooter* [, *HeaderTitle* [, *FooterUri* ] ] ] ] ] ] ] ] ] ] ] ] ]

*outputPath*
: *必需* 一个要写入的 PDF 文件的绝对路径 **String**。

*Orientation*
: *可选* [**wv2PrintOrientation**](/official/Reference/WebView2/Enumerations/wv2PrintOrientation) 的成员。默认 **wv2PrintPortrait**。

*ScaleFactor*、*PageWidth*、*PageHeight*、*MarginTop*、*MarginBottom*、*MarginLeft*、*MarginRight*
: *可选* 描述页面布局的 **Double**。省略任何参数以使用运行时默认值。

*ShouldPrintBackgrounds*
: *可选* 一个 **Boolean**，默认 **False**。

*ShouldPrintSelectionOnly*
: *可选* 一个 **Boolean**，默认 **False**。

*ShouldPrintHeaderAndFooter*
: *可选* 一个 **Boolean**，默认 **True**。

*HeaderTitle*、*FooterUri*
: *可选* 覆盖默认页眉标题和页脚 URI 的 **String**。

```vb
Private Sub btnSave_Click()
    WebView21.PrintToPdf Environ$("USERPROFILE") & "\Documents\page.pdf"
End Sub

Private Sub WebView21_PrintToPdfCompleted()
    MsgBox "PDF saved.", vbInformation
End Sub
```

### Reload

重新加载当前文档 --- 等同于按下 **F5**。

语法：*object*.**Reload**

### RemoveObject

移除先前通过[**AddObject**](#addobject)发布的宿主对象。

语法：*object*.**RemoveObject** *ObjName*

*ObjName*
: *必需* 一个与传入 **AddObject** 的名称匹配的 **String**。

### RemoveWebResourceRequestedFilter

移除先前通过[**AddWebResourceRequestedFilter**](#addwebresourcerequestedfilter)注册的 URL 过滤器。传入注册时使用的相同 *sFilter* 和 *FilterContext* 值。

语法：*object*.**RemoveWebResourceRequestedFilter** *sFilter*, *FilterContext*

*sFilter*
: *必需* 一个 **String** URL 模式。

*FilterContext*
: *必需* [**wv2WebResourceContext**](/official/Reference/WebView2/Enumerations/wv2WebResourceContext) 的成员。

### Resume

恢复先前暂停的 WebView2 管道。不触发事件 --- 之后读取[**IsSuspended**](#issuspended)以确认。

语法：*object*.**Resume**

需要[**SupportsSuspendResumeFeatures**](#supportssuspendresumefeatures)。

### SetFocus

将输入焦点移至宿主控件。继承。要聚焦*页面*表面使击键到达 JavaScript，请改用[**MoveFocus**](#movefocus)。

语法：*object*.**SetFocus**

### SetVirtualHostNameToFolderMapping

将虚拟主机名映射到本地文件夹，使页面可以通过 HTTPS URL 引用本地文件 --- 例如 `https://app.local/index.html` 解析为 `C:\MyApp\html\index.html`。适用于在无需搭建 HTTP 服务器的情况下承载本地资源。

语法：*object*.**SetVirtualHostNameToFolderMapping** *hostName*, *folderPath* [, *accessKind* ]

*hostName*
: *必需* 一个 **String** 虚拟主机名。

*folderPath*
: *必需* 一个 **String** 本地文件夹路径。

*accessKind*
: *可选* [**wv2HostResourceAccessKind**](/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind) 的成员。默认 **wv2ResourceAllow**。

::: info
慎重选择 *hostName* --- 某些可 DNS 解析的主机名会导致 2 秒的解析延迟，然后本地覆盖才会生效。参见[WebView2Feedback#2381](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2381)。
:::

需要[**SupportsFolderMappingFeatures**](#supportsfoldermappingfeatures)。

```vb
Private Sub WebView21_Ready()
    Dim folderPath As String = Environ$("USERPROFILE") & "\Documents\MyApp"
    WebView21.SetVirtualHostNameToFolderMapping _
        "myapp.example", folderPath & "\", wv2ResourceAllow
    WebView21.Navigate "https://myapp.example/index.html"
End Sub
```

关于通过项目的 `Resources` 文件夹打包资源的匹配模式，参见[承载本地 Web 资源](/official/Tutorials/WebView2/Hosting-local-web-assets)教程。

### Suspend

暂停 WebView2 管道，使浏览器进程可以释放内存 --- 适用于应用程序式的选项卡管理。之后读取[**IsSuspended**](#issuspended)以确认；运行时在暂停期间隐藏控件。

语法：*object*.**Suspend**

需要[**SupportsSuspendResumeFeatures**](#supportssuspendresumefeatures)。

### ZOrder

将控件置于同级堆栈的前面或后面。继承。

语法：*object*.**ZOrder** [ *Position* ]

事件
------

### AcceleratorKeyPressed

当 Edge 检测到加速键击键时触发 --- 例如 **F1**、**Alt+**、**Ctrl+**。将 *IsHandled* 设为 **True** 以消费击键，使 Edge 不对其执行操作。始终同步：无法延迟。

语法：*object*\_**AcceleratorKeyPressed**( *KeyState* **As** [**wv2KeyEventKind**](/official/Reference/WebView2/Enumerations/wv2KeyEventKind), *IsExtendedKey* **As Boolean**, *WasKeyDown* **As Boolean**, *IsKeyReleased* **As Boolean**, *IsMenuKeyDown* **As Boolean**, *RepeatCount* **As Long**, *ScanCode* **As Long**, *IsHandled* **As Boolean** )

这些标志是 Win32 `WM_KEYDOWN` / `WM_KEYUP` *lParam* 的内容 --- 详见[**COREWEBVIEW2_PHYSICAL_KEY_STATUS**](/official/Reference/WebView2/Types/COREWEBVIEW2_PHYSICAL_KEY_STATUS)。

### Create

在容器窗口已存在但 WebView2 环境尚未构建之后触发。宿主填充[**EnvironmentOptions**](#environmentoptions)的最后机会。

语法：*object*\_**Create**( )

### DevToolsProtocolResponse

当先前发送的[**CallDevToolsProtocolMethod**](#calldevtoolsprotocolmethod)调用返回时触发。包含调用时提供的 *CustomEventId* 和 JSON 编码的响应。

语法：*object*\_**DevToolsProtocolResponse**( *CustomEventId* **As Variant**, *JsonResponse* **As String** )

### DocumentTitleChanged

当文档更改标题时触发 --- 通常在导航之后，也在客户端 JavaScript 写入 `document.title` 时。读取[**DocumentTitle**](#documenttitle)获取新值。

语法：*object*\_**DocumentTitleChanged**( )

### DOMContentLoaded

当页面到达 `DOMContentLoaded` 生命周期事件时触发 --- DOM 树已构建，JavaScript 可以安全遍历，但外部资源可能仍在加载。

语法：*object*\_**DOMContentLoaded**( )

### DownloadStarting

当用户（或页面）开始文件下载时触发。将 *Cancel* 设为 **True** 以取消下载；将 *Handled* 设为 **True** 以取消运行时的默认下载 UI，当应用程序打算自行管理进度时。修改 *ResultFilePath* 以将下载重定向到其他路径。可以延迟 --- 参见[延迟事件](#deferred-events)。

语法：*object*\_**DownloadStarting**( *ResultFilePath* **As String**, *Cancel* **As Boolean**, *Handled* **As Boolean** )

### Error

当 WebView2 环境或控制器初始化失败时触发 --- 最常见的原因是 Edge WebView2 运行时未安装、用户数据文件夹不可写，或固定版本文件夹路径不正确。

语法：*object*\_**Error**( *code* **As Long**, *msg* **As String** )

::: info
代码 `&H80070002`（`ERROR_FILE_NOT_FOUND`）是 WebView2 Evergreen 运行时未安装的典型信号 --- 提示用户安装的适当时机。
:::

```vb
Private Sub WebView21_Error(ByVal code As Long, ByVal msg As String)
    Const ERROR_FILE_NOT_FOUND As Long = &H80070002
    If code = ERROR_FILE_NOT_FOUND Then
        MsgBox "The WebView2 (Evergreen) runtime is not installed on this machine.", _
               vbExclamation, "WebView2"
    Else
        MsgBox "WebView2 error " & Hex$(code) & ": " & msg, _
               vbExclamation, "WebView2"
    End If
End Sub
```

### JsAsyncResult

当先前的[**JsRunAsync**](#jsrunasync)调用返回时触发。*Token* 是 **JsRunAsync** 返回的值，处理程序可借此将回复与调用配对；*ErrString* 为运行时错误描述，成功时为空字符串。

语法：*object*\_**JsAsyncResult**( *Result* **As Variant**, *Token* **As LongLong**, *ErrString* **As String** )

### JsMessage

当页面上的 JavaScript 调用 `window.chrome.webview.postMessage(value)` 时触发。需要[**IsWebMessageEnabled**](#iswebmessageenabled)。

语法：*object*\_**JsMessage**( *Message* **As Variant** )

### NavigationComplete

当导航完成时触发 --- 无论成功与否。先检查 *IsSuccess*；如果为 **False**，*WebErrorStatus* 为[**wv2ErrorStatus**](/official/Reference/WebView2/Enumerations/wv2ErrorStatus)的成员。

语法：*object*\_**NavigationComplete**( *IsSuccess* **As Boolean**, *WebErrorStatus* **As Long** )

### NavigationStarting

每次导航开始之前触发。将 *Cancel* 设为 **True** 以阻止导航；修改 *RequestHeaders* 以更改运行时即将发送的 HTTP 请求。可以延迟 --- 参见[延迟事件](#deferred-events)。

语法：*object*\_**NavigationStarting**( *Uri* **As String**, *IsUserInitiated* **As Boolean**, *IsRedirected* **As Boolean**, *RequestHeaders* **As** [**WebView2RequestHeaders**](/official/Reference/WebView2/WebView2RequestHeaders), *Cancel* **As Boolean** )

```vb
' 阻止任何导航到我们自己的虚拟主机之外的 URL。
Private Sub WebView21_NavigationStarting( _
        ByVal Uri As String, ByVal IsUserInitiated As Boolean, _
        ByVal IsRedirected As Boolean, _
        ByVal RequestHeaders As WebView2RequestHeaders, _
        Cancel As Boolean)
    If Not (Uri Like "https://myapp.example/*" Or Uri = "about:blank") Then
        MsgBox "External link blocked: " & Uri
        Cancel = True
    End If
End Sub
```

### NewWindowRequested

当页面尝试打开新窗口时触发 --- 通过 `window.open(…)`、`target="_blank"`、**Ctrl+** 点击等。将 *IsHandled* 设为 **True** 以取消默认行为（打开新的 Edge 窗口），使应用程序可以自行承载新内容。窗口功能参数描述了页面的请求。可以延迟 --- 参见[延迟事件](#deferred-events)。

语法：*object*\_**NewWindowRequested**( *IsUserInitiated* **As Boolean**, *IsHandled* **As Boolean**, *Uri* **As String**, *HasPosition* **As Long**, *HasSize* **As Long**, *Left* **As Long**, *Top* **As Long**, *Width* **As Long**, *Height* **As Long**, *ShouldDisplayMenuBar* **As Long**, *ShouldDisplayStatus* **As Long**, *ShouldDisplayToolbar* **As Long**, *ShouldDisplayScrollBars* **As Long** )

### PermissionRequested

当页面请求使用设备或浏览器功能权限时触发 --- 摄像头、麦克风、地理位置、通知、剪贴板。将 *State* 赋值为[**wv2StateAllow**](/official/Reference/WebView2/Enumerations/wv2PermissionState#wv2StateAllow)（允许）或[**wv2StateDeny**](/official/Reference/WebView2/Enumerations/wv2PermissionState#wv2StateDeny)（拒绝）；保持 **wv2StateDefault** 让 Edge 提示用户。可以延迟 --- 参见[延迟事件](#deferred-events)。

语法：*object*\_**PermissionRequested**( *IsUserInitiated* **As Boolean**, *State* **As** [**wv2PermissionState**](/official/Reference/WebView2/Enumerations/wv2PermissionState), *Uri* **As String**, *PermissionKind* **As** [**wv2PermissionKind**](/official/Reference/WebView2/Enumerations/wv2PermissionKind) )

### PrintToPdfCompleted

当[**PrintToPdf**](#printtopdf)成功完成时触发。

语法：*object*\_**PrintToPdfCompleted**( )

### PrintToPdfFailed

当[**PrintToPdf**](#printtopdf)失败时触发 --- 例如输出路径不可写。

语法：*object*\_**PrintToPdfFailed**( )

### ProcessFailed

当 WebView2 的某个外部进程（浏览器、渲染器、GPU 等）意外退出时触发。检查 *Kind* --- 一个[**wv2ProcessFailedKind**](/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) --- 以确定是哪个进程。

语法：*object*\_**ProcessFailed**( *Kind* **As** [**wv2ProcessFailedKind**](/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) )

### Ready

当 WebView2 环境、控制器和核心视图均已就绪时触发一次。在此之前，大多数属性和方法会引发*"WebView2 control is not ready"*。

语法：*object*\_**Ready**( )

### ScriptDialogOpening

当页面尝试打开脚本对话框时触发 --- `alert()`、`confirm()`、`prompt()` 或 `beforeunload`。仅在[**AreDefaultScriptDialogsEnabled**](#aredefaultscriptdialogsenabled)为 **False** 时触发。将 *Accept* 设为 **True** 以接受对话框（相当于 JavaScript 侧点击*确定*）；对于提示框，更新 *ResultText* 为要返回的文本。可以延迟 --- 参见[延迟事件](#deferred-events)。

语法：*object*\_**ScriptDialogOpening**( *ScriptDialogKind* **As** [**wv2ScriptDialogKind**](/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind), *Accept* **As Boolean**, *ResultText* **As String**, *URI* **As String**, *Message* **As String**, *DefaultText* **As String** )

### SourceChanged

当[**DocumentURL**](#documenturl)更改时触发 --- 通常在导航之后，也在客户端脚本调用 `history.pushState(…)` 时。*IsNewDocument* 区分真正的导航（**True**）和同文档 URL 更改（**False**）。

语法：*object*\_**SourceChanged**( *IsNewDocument* **As Boolean** )

### SuspendCompleted

当[**Suspend**](#suspend)请求成功完成时触发。

语法：*object*\_**SuspendCompleted**( )

### SuspendFailed

当[**Suspend**](#suspend)请求失败时触发 --- 通常是因为页面仍在进行运行时无法暂停的操作。

语法：*object*\_**SuspendFailed**( )

### UserContextMenu

当用户在控件内右键点击且[**AreDefaultContextMenusEnabled**](#aredefaultcontextmenusenabled)为 **False** 时触发，以便应用程序显示自己的上下文菜单。

语法：*object*\_**UserContextMenu**( *X* **As Single**, *Y* **As Single** )

### WebResourceRequested

当待处理的 HTTP 请求匹配先前通过[**AddWebResourceRequestedFilter**](#addwebresourcerequestedfilter)注册的过滤器时触发。修改 *Response* 以模拟或覆盖回复；保持不变则让运行时正常获取。可以延迟 --- 参见[延迟事件](#deferred-events)。

语法：*object*\_**WebResourceRequested**( *Request* **As** [**WebView2Request**](/official/Reference/WebView2/WebView2Request), *Response* **As** [**WebView2Response**](/official/Reference/WebView2/WebView2Response) )

## 另见

- [WebView2EnvironmentOptions](/official/Reference/WebView2/WebView2/EnvironmentOptions) --- 通过[**EnvironmentOptions**](#environmentoptions)访问的预创建环境配置
- [WebView2 教程](/official/Tutorials/WebView2/) --- 安装、重入和 `UserDataFolder` 实践示例
- [vbWebView2](/official/Reference/VBRUN/Constants/ControlTypeConstants#vbWebView2) --- [**ControlType**](#controltype)返回的 **ControlTypeConstants** 条目