---
title: "JavaScript互操作"
parent: WebView2
nav_order: 6
permalink: /Tutorials/WebView2/JavaScript-Interop
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8d72bbf1-c43c-4f1c-96da-84add91e99ae'
  PropagateID: '8d72bbf1-c43c-4f1c-96da-84add91e99ae'
  ReservedCode1: 'aa5640ae-d4ca-4b58-a39a-77478efd21ab'
  ReservedCode2: 'aa5640ae-d4ca-4b58-a39a-77478efd21ab'
---

# JavaScript互操作

[**WebView2**](/official/Reference/WebView2/WebView2/)控件在twinBASIC和页面中运行的JavaScript之间提供三座互补的桥：

1. **宿主对象** —— 将BASIC COM对象发布到页面，使JavaScript可以像调用任何其他JS对象一样调用其方法和读取其属性。
2. **消息** —— 在两个方向推送值（字符串、数字、数组……）并在另一侧监听。
3. **脚本调用** —— 从BASIC调用命名的JavaScript函数，并（可选）等待其返回值。

本教程涵盖所有三种，每个BASIC端旁边显示匹配的JavaScript端。工作代码来自*示例0——WebView2示例*（窗体*示例2*）。

## 桥1——宿主对象

[**AddObject**](/official/Reference/WebView2/WebView2/#addobject)将BASIC类实例发布到 `chrome.webview.hostObjects.<Name>`。定义一个带有公共方法或属性的小类：

```vb
Class MyCalculator
    Public Function MultiplyByTen(ByVal Value As Long) As Long
        Return Value * 10
    End Function
End Class
```

控件就绪后注册它：

```vb
Private Sub WebView_Ready() Handles WebView.Ready
    WebView.AddObject "myCalculator", New MyCalculator
End Sub
```

JavaScript现在可以调用它——但代理是异步的，因此调用必须在 `async` 函数内 `await`：

```js
async function testHostCalculator() {
    let value = Math.floor(Math.random() * 100000);
    let result = await chrome.webview.hostObjects.myCalculator.MultiplyByTen(value);
    alert(`BASIC said ${value} × 10 = ${result}`);
}
```

要从BASIC触发JS函数，调用[**ExecuteScript**](/official/Reference/WebView2/WebView2/#executescript)：

```vb
Private Sub btnTest_Click() Handles btnTest.Click
    WebView.ExecuteScript("testHostCalculator()")
End Sub
```

需要[**AreHostObjectsAllowed**](/official/Reference/WebView2/WebView2/#arehostobjectsallowed)（默认**True**）。参见[重入性](/official/Tutorials/WebView2/Re-entrancy)了解同步调用（默认）和**UseDeferredInvoke:=True**变体之间的权衡。

## 桥2——消息

消息是在两个方向传递的值。当你不希望提前定义方法签名时，用于通知和临时数据负载。

### BASIC → 页面

[**PostWebMessage**](/official/Reference/WebView2/WebView2/#postwebmessage)向页面发送值；页面通过 `window.chrome.webview` 上的 `message` 事件接收它：

```vb
WebView.PostWebMessage "Hello from twinBASIC!"
```

```js
window.chrome.webview.addEventListener('message', (e) => {
    alert("Host sent: " + e.data);
});
```

字符串以JavaScript字符串到达；其他所有类型在传输前进行JSON编码。如果你已经有序列化的JSON，[**PostWebMessageJSON**](/official/Reference/WebView2/WebView2/#postwebmessagejson)会原样发送。

### 页面 → BASIC

页面调用 `window.chrome.webview.postMessage(value)`；BASIC通过[**JsMessage**](/official/Reference/WebView2/WebView2/#jsmessage)事件接收它：

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

两个方向都需要[**IsWebMessageEnabled**](/official/Reference/WebView2/WebView2/#iswebmessageenabled)（默认**True**）。

## 桥3——脚本调用

当页面暴露命名的JS函数时，BASIC可以直接调用它们。有三种变体：

| 方法                                                                            | 返回值                                          | 使用场景                                                       |
|-----------------------------------------------------------------------------------|--------------------------------------------------|-------------------------------------------------------------------|
| [**JsRun**](/official/Reference/WebView2/WebView2/#jsrun)                           | **Variant**，同步                       | 你需要内联结果且JS很快。                   |
| [**JsRunAsync**](/official/Reference/WebView2/WebView2/#jsrunasync)                 | **LongLong**令牌；结果通过 `JsAsyncResult`   | JS可能需要一段时间，你不想阻塞UI。       |
| [**ExecuteScript**](/official/Reference/WebView2/WebView2/#executescript)           | 无（即发即弃）                        | 你只想触发某些操作——不需要返回值。      |

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

调用最多阻塞[**JsCallTimeOutSeconds**](/official/Reference/WebView2/WebView2/#jscalltimeoutseconds)（默认0——永远等待）。

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

[**JsRunAsync**](/official/Reference/WebView2/WebView2/#jsrunasync)的返回值是一个令牌；[**JsAsyncResult**](/official/Reference/WebView2/WebView2/#jsasyncresult)事件包含相同的令牌，因此单个处理程序可以解复用多个进行中的调用。

### ExecuteScript（即发即弃）

```vb
WebView.ExecuteScript "startTimer()"
```

无返回值，无事件。推动页面执行某些操作的最简单方式。

## 重入性

Edge运行时禁止宿主代码在宿主对象方法仍在执行时回调WebView2对象模型——重入会使浏览器进程死锁。控件通过BASIC消息循环延迟大多数事件来保护它们（[**UseDeferredEvents**](/official/Reference/WebView2/WebView2/#usedeferredevents)），但宿主对象方法调用默认是同步的。

完整讨论在[重入性教程](/official/Tutorials/WebView2/Re-entrancy)中；简短概述：

- **`AddObject(name, obj)`** —— 同步调用；页面可以读取返回值，但BASIC方法**绝不能**回调WebView2控件。
- **`AddObject(name, obj, UseDeferredInvoke:=True)`** —— 异步调用；BASIC方法可以自由调用任何WebView2成员，但页面无法读取返回值。

## 下一步

- [托管本地Web资源](/official/Tutorials/WebView2/Hosting-local-web-assets) —— 打包并提供与宿主通信的JavaScript。
- [从twinBASIC驱动Monaco](/official/Tutorials/WebView2/Driving-Monaco) —— 使用所有三座桥的完整案例研究。
- [重入性](/official/Tutorials/WebView2/Re-entrancy) —— **UseDeferredInvoke**背后的深入故事。
- [WebView2参考](/official/Reference/WebView2/WebView2/) —— 每个属性、方法和事件。