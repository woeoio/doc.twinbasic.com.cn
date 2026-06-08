---
title: "JavaScript互操作"
parent: CEF
nav_order: 6
permalink: /Tutorials/CEF/JavaScript-Interop
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a39bdc33-ccb9-486f-aa67-d5a3facc6835'
  PropagateID: 'a39bdc33-ccb9-486f-aa67-d5a3facc6835'
  ReservedCode1: 'c9b1dd68-72be-4fa4-baf3-5c7eef2dede2'
  ReservedCode2: 'c9b1dd68-72be-4fa4-baf3-5c7eef2dede2'
---

# JavaScript互操作

[**CefBrowser**](/official/Reference/CEF/CefBrowser/)控件在twinBASIC和页面中运行的JavaScript之间提供两座互补的桥：

1. **消息** —— 在两个方向推送值（字符串、数字……）并在另一侧监听。
2. **脚本调用** —— 从BASIC调用命名的JavaScript函数，并（可选）等待其返回值。

::: info
[**WebView2**](/official/Reference/WebView2/WebView2/)还暴露了第三座桥——*宿主对象*，其中BASIC类发布到 `chrome.webview.hostObjects.<Name>` 供页面调用。CEF包尚未暴露等效功能——参见参考的[WebView2对等](/official/Reference/CEF/#webview2-parity)部分。
:::

本教程涵盖两座桥，每个BASIC端旁边显示匹配的JavaScript端。工作代码来自*示例1b——Chromium Embedded Framework示例*（窗体*示例2*）。

## 桥1——消息

消息是在两个方向传递的值。当你不希望提前定义方法签名时，用于通知和临时数据负载。

### BASIC → 页面

[**PostWebMessage**](/official/Reference/CEF/CefBrowser/#postwebmessage)向页面发送值；页面通过 `window.chrome.webview` 上的 `message` 事件接收它：

```vb
WebView.PostWebMessage "Hello from twinBASIC!"
```

```js
window.chrome.webview.addEventListener('message', (e) => {
    alert("Host sent: " + e.data);
});
```

字符串以JavaScript字符串到达；数值、**Boolean**、**Null**和**Empty**为页面进行JSON编码。对象和数组目前不支持。

如果在渲染器IPC连接之前调用[**PostWebMessage**](/official/Reference/CEF/CefBrowser/#postwebmessage)，调用会排队并在连接建立后分发——无需显式等待[**Ready**](/official/Reference/CEF/CefBrowser/#ready)。

### 页面 → BASIC

页面调用 `window.chrome.webview.postMessage(value)`；BASIC通过[**JsMessage**](/official/Reference/CEF/CefBrowser/#jsmessage)事件接收它：

```js
function sendHostAMessage() {
    window.chrome.webview.postMessage("This is a message from JavaScript.");
}
```

```vb
Private Sub WebView_JsMessage(ByVal Message As Variant) _
        Handles WebView.JsMessage
    Debug.Print "Page sent: "; Message
End Sub
```

两个半部形成请求/响应交换——页面发送查询字符串，BASIC处理它并返回结果：

```vb
Private Sub WebView_JsMessage(ByVal Message As Variant) _
        Handles WebView.JsMessage
    If Left$(Message, 6) = "QUERY:" Then
        WebView.PostWebMessage "ANSWER:" & LookupAnswer(Mid$(Message, 7))
    End If
End Sub
```

## 桥2——脚本调用

当页面暴露命名的JS函数时，BASIC可以直接调用它们。有三种变体：

| 方法                                                                            | 返回值                                          | 使用场景                                                       |
|-----------------------------------------------------------------------------------|--------------------------------------------------|-------------------------------------------------------------------|
| [**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)                              | **Variant**，同步                       | 你需要内联结果且JS是**纯的**（无回调）。 |
| [**JsRunAsync**](/official/Reference/CEF/CefBrowser/#jsrunasync)                    | 无；结果通过 `JsAsyncResult`              | JS可能需要一段时间，你不想阻塞UI。       |
| [**ExecuteScript**](/official/Reference/CEF/CefBrowser/#executescript)              | 无（即发即弃）                        | 你只想触发某些操作——不需要返回值。      |

### JsRun（同步）

给定一个页面端函数：

```js
function multiplyTheseNumbers(a, b) {
    return a * b;
}
```

BASIC可以调用它并在同一行读取结果：

```vb
Dim product As Long = WebView.JsRun("multiplyTheseNumbers", 5, 6)
Debug.Print product   ' 30
```

调用会阻塞BASIC线程，直到渲染器进程回复。

::: warning
如果JavaScript函数在调用期间回调到BASIC——例如通过 `window.chrome.webview.postMessage(...)`——结果是死锁。仅对纯函数使用[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)；不符合此条件时改用[**JsRunAsync**](/official/Reference/CEF/CefBrowser/#jsrunasync)。完整讨论参见[重入性教程](/official/Tutorials/CEF/Re-entrancy)。
:::

### JsRunAsync（异步）

```vb
Private Sub btnRun_Click() Handles btnRun.Click
    WebView.JsRunAsync "multiplyTheseNumbers", 5, 6
End Sub

Private Sub WebView_JsAsyncResult( _
        ByVal Result As Variant, Token As LongLong, ErrString As String) _
        Handles WebView.JsAsyncResult
    If LenB(ErrString) = 0 Then
        Debug.Print "Async result: "; Result
    Else
        Debug.Print "Async error: "; ErrString
    End If
End Sub
```

[**JsAsyncResult**](/official/Reference/CEF/CefBrowser/#jsasyncresult)事件包含*Token*参数，因此单个处理程序可以解复用多个进行中的调用。成功时*ErrString*为空。

在渲染器IPC连接之前进行的调用会排队并在连接建立后分发。

### ExecuteScript（即发即弃）

```vb
WebView.ExecuteScript "startTimer()"
```

无返回值，无事件。推动页面执行某些操作的最简单方式。

## 重入性

关于从BASIC调用同步JavaScript何时安全——以及不安全时该怎么做——的讨论在其自己的教程中。简短概述：

- **纯JS**（输入→输出，无涉及宿主的副作用）：[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)可行。
- **可能回发消息、等待宿主对象或以其他方式重入BASIC的JS**：使用[**JsRunAsync**](/official/Reference/CEF/CefBrowser/#jsrunasync)。

完整图景参见[重入性教程](/official/Tutorials/CEF/Re-entrancy)。

## 下一步

- [托管本地Web资源](/official/Tutorials/CEF/Hosting-local-web-assets) —— 打包并提供与宿主通信的JavaScript。
- [从twinBASIC驱动Monaco](/official/Tutorials/CEF/Driving-Monaco) —— 使用两座桥的完整案例研究。
- [重入性](/official/Tutorials/CEF/Re-entrancy) —— 同步与异步调用背后的深入故事。
- [CefBrowser参考](/official/Reference/CEF/CefBrowser/) —— 每个属性、方法和事件。