---
title: "重入性"
parent: CEF
nav_order: 3
permalink: /Tutorials/CEF/Re-entrancy
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5b5e94c8-a36a-4beb-b1c7-a4c6fffc505e'
  PropagateID: '5b5e94c8-a36a-4beb-b1c7-a4c6fffc505e'
  ReservedCode1: 'e69c5875-4f37-4f4e-acba-b154e9916bc0'
  ReservedCode2: 'e69c5875-4f37-4f4e-acba-b154e9916bc0'
---

# 重入性

Chromium Embedded Framework在*独立进程*中运行浏览器和渲染器，BASIC和页面之间跨进程IPC。该模型与进程内API根本不同，它对宿主代码施加了特定的规则：当BASIC线程上正在执行CEF回调时，浏览器/渲染器进程正在等待其返回——在该等待期间回调到[**CefBrowser**](/official/Reference/CEF/CefBrowser/)控件可能导致死锁。

在大多数情况下你不需要考虑这些。控件通过投递消息将每个事件提升到BASIC消息循环，因此在响应CEF回调而运行的处理程序在你代码运行之前已经将控制权返回给浏览器进程。规则仍然适用的唯一地方是[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)——*同步*JavaScript桥。

## 控件如何保护你

当浏览器或渲染器进程引发需要出现在BASIC中的CEF回调时，控件：

1. 将回调的参数捕获到 `Type` 实例中。
2. 调用 `PostMessageW` 将自定义消息推送到主线程的消息队列。
3. 立即返回——浏览器进程解除阻塞。
4. 稍后，当窗体的消息循环接收到投递的消息时，控件在BASIC端引发事件。

处理程序在原始CEF回调*之外*运行。到它执行时，浏览器进程已继续进行；处理程序可以自由调用任何[**CefBrowser**](/official/Reference/CEF/CefBrowser/)方法或属性——[**Navigate**](/official/Reference/CEF/CefBrowser/#navigate)、[**ExecuteScript**](/official/Reference/CEF/CefBrowser/#executescript)、[**JsRunAsync**](/official/Reference/CEF/CefBrowser/#jsrunasync)，甚至另一个[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)——不会有任何重入问题。

这涵盖了控件当前引发的所有事件：

- [**Create**](/official/Reference/CEF/CefBrowser/#create)、[**Ready**](/official/Reference/CEF/CefBrowser/#ready)、[**Error**](/official/Reference/CEF/CefBrowser/#error)
- [**NavigationComplete**](/official/Reference/CEF/CefBrowser/#navigationcomplete)、[**SourceChanged**](/official/Reference/CEF/CefBrowser/#sourcechanged)、[**DocumentTitleChanged**](/official/Reference/CEF/CefBrowser/#documenttitlechanged)、[**DOMContentLoaded**](/official/Reference/CEF/CefBrowser/#domcontentloaded)
- [**PrintToPdfCompleted**](/official/Reference/CEF/CefBrowser/#printtopdfcompleted)、[**PrintToPdfFailed**](/official/Reference/CEF/CefBrowser/#printtopdffailed)
- [**JsAsyncResult**](/official/Reference/CEF/CefBrowser/#jsasyncresult)、[**JsMessage**](/official/Reference/CEF/CefBrowser/#jsmessage)

## NavigationStarting例外

[**NavigationStarting**](/official/Reference/CEF/CefBrowser/#navigationstarting)是*无法*完全延迟的唯一事件——其 `Cancel` 参数是**ByRef**的，因此BASIC处理程序必须在浏览器进程决定是否继续导航之前设置它。控件仍使用 `SendMessageW`（同步）而非 `PostMessageW` 来传递此事件，这意味着处理程序在浏览器进程阻塞等待回答时运行。

控件为一种特定情况添加了额外的安全网：如果渲染器IPC通道恰好在**NavigationStarting**触发时正忙于连接（这在较旧CEF版本的早期页面加载期间可能发生），直接的 `SendMessageW` 会死锁——BASIC在等待渲染器；渲染器在等待BASIC。控件检测到这种情况并使用中断式机制在UI线程上分发*仅* **NavigationStarting**处理程序，而无需等待渲染器IPC。

实际后果：**NavigationStarting**处理程序应保持工作最小——读取[**Uri**](/official/Reference/CEF/CefBrowser/#navigationstarting)，做出决定，设置或保留[**Cancel**](/official/Reference/CEF/CefBrowser/#navigationstarting)，返回。避免从处理程序内部进行任何类型的同步往返——包括[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)、[**MsgBox**](/official/Reference/VBA/Interaction/MsgBox)和文件对话框。

## JsRun——明确警告

[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)是同步JavaScript桥：

```vb
Dim product As Long = CefBrowser1.JsRun("multiplyTheseNumbers", 5, 6)
```

调用会阻塞BASIC线程，直到渲染器进程回复结果。在该阻塞期间，渲染器正在运行JavaScript；如果该JavaScript回调到BASIC——通过 `window.chrome.webview.postMessage(...)`，或通过到达BASIC线程的任何宿主对象调用——则没有可用线程来*接收*该调用。渲染器等待BASIC；BASIC等待渲染器。死锁。

控件的源代码在方法上直接包含此警告：

> **!!!WARNING!!!** 使用此同步函数时注意不要引入重入，否则可能导致UI冻结。

安全经验法则：

- 使用[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)处理**纯**JavaScript函数——接受输入、计算并返回值的函数。没有 `postMessage`，没有宿主对象调用，没有 `await` 任何涉及宿主的内容。
- 其他情况使用[**JsRunAsync**](/official/Reference/CEF/CefBrowser/#jsrunasync)——JavaScript端可能在调用期间需要与BASIC通信的任何地方。

```vb
' Safe — pure JavaScript: takes two numbers, returns one number.
Dim html As String = CefBrowser1.JsRun("renderMarkdownToHtml", source)

' Prefer JsRunAsync when the JS could call back into BASIC.
CefBrowser1.JsRunAsync "uploadAndReturnUrl", filePath
' ... result arrives later via JsAsyncResult event.
```

## 为什么此模型比WebView2的更简单

[**WebView2**](/official/Reference/WebView2/WebView2/)支持 `AddObject`——发布JavaScript可以直接调用的BASIC COM对象。该功能有自己的重入问题（[**UseDeferredInvoke**](/official/Reference/WebView2/WebView2/#addobject)），因为页面发起的宿主对象调用必须到达某个地方。

CEF的宿主对象等效功能尚未暴露——参见参考的[WebView2对等](/official/Reference/CEF/#webview2-parity)部分。CEF目前提供的唯一同步BASIC↔JavaScript边界是**JsRun**，因此整个重入问题简化为"不要从**JsRun**目标内部向BASIC发回消息"。

## 另见

- [JavaScript互操作](/official/Tutorials/CEF/JavaScript-interop) —— 在[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)、[**JsRunAsync**](/official/Reference/CEF/CefBrowser/#jsrunasync)和消息桥之间选择的实用模式。
- [CefBrowser参考](/official/Reference/CEF/CefBrowser/) —— 每个属性、方法和事件。
- [WebView2重入性教程](/official/Tutorials/WebView2/Re-entrancy) —— [**WebView2**](/official/Reference/WebView2/WebView2/)控件的并行情况，包括CEF尚未具有的**AddObject**权衡。