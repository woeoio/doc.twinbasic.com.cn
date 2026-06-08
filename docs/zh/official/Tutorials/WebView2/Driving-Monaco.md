---
title: "从twinBASIC驱动Monaco"
parent: WebView2
nav_order: 7
permalink: /Tutorials/WebView2/Driving-Monaco
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '45aceca3-93b5-46dc-a133-4abfb0211bd1'
  PropagateID: '45aceca3-93b5-46dc-a133-4abfb0211bd1'
  ReservedCode1: '2451c2ff-bcda-4848-bb7b-a9eab3d240c9'
  ReservedCode2: '2451c2ff-bcda-4848-bb7b-a9eab3d240c9'
---

# 从twinBASIC驱动Monaco

结合前面教程所有内容的案例研究：一个包含**两个**[**WebView2**](/official/Reference/WebView2/WebView2/)控件的窗体——左侧是Microsoft Monaco编辑器，右侧是实时HTML预览。用户输入时，Monaco将编辑的源代码发送给twinBASIC，后者将其镜像到预览面板。

完整项目以*示例0——WebView2示例*的形式在新项目对话框中提供（窗体*示例3*）。

## 架构

![](Images/MonacoArchitecture.svg)

编辑器作为本地Web应用在虚拟主机名下运行；预览面板通过[**NavigateToString**](/official/Reference/WebView2/WebView2/#navigatetostring)接收原始HTML。

## 设置编辑器资源

Monaco编辑器是一个约2MB的JavaScript、CSS和字体文件集合。将它们放入项目的 `Resources` 子文件夹——命名为 `MONACO_DEMO`——连同 `index.html`和一个小的引导 `script.js`。[托管本地Web资源](/official/Tutorials/WebView2/Hosting-local-web-assets)教程描述了布局。

页面本身是一个 `<div id='container'>` 加上监听宿主*初始内容*消息的引导脚本：

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="/vs/loader.js"></script>
        <script src="/script.js"></script>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <div id="container"></div>
    </body>
</html>
```

```js
window.chrome.webview.addEventListener('message', (event) => {
    let initialHTML = event.data;

    require.config({ paths: { 'vs': 'https://monaco.example/vs' } });
    require(["vs/editor/editor.main"], () => {
        let editor = monaco.editor.create(document.getElementById('container'), {
            value: initialHTML,
            language: 'html',
            theme: 'vs-dark',
            minimap: { enabled: false }
        });

        editor.onDidChangeModelContent(() => {
            // Inform the host of every edit.
            window.chrome.webview.postMessage(editor.getValue());
        });
    });
});
```

## BASIC端

在窗体上放置两个 `WebView2` 控件——`WebView`（编辑器）和 `WebViewPreview`（渲染器）。`Ready` 处理程序部署资源、注册虚拟主机并导航：

```vb
Private localPath As String

Private Sub WebView_Ready() Handles WebView.Ready
    localPath = Environ$("USERPROFILE") & "\Documents\tbMonacoDemo"
    CopyResourcesFolderContentsToLocalPath "MONACO_DEMO", localPath

    WebView.SetVirtualHostNameToFolderMapping _
        "monaco.example", localPath & "\", wv2ResourceAllow
    WebView.Navigate "https://monaco.example/index.html"
End Sub
```

（`CopyResourcesFolderContentsToLocalPath` 是[托管本地Web资源](/official/Tutorials/WebView2/Hosting-local-web-assets)中的辅助过程。）

## 推送初始内容

Monaco加载完成后，引导脚本监听包含用于填充编辑器的HTML的 `message` 事件。在编辑器的[**NavigationComplete**](/official/Reference/WebView2/WebView2/#navigationcomplete)后发送该消息：

```vb
Private Sub WebView_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long) _
        Handles WebView.NavigationComplete

    Dim initialHTML As String = _
        StrConv(LoadResData("initial-editor-html.html", "MONACO_DEMO"), vbFromUTF8)

    WebView.PostWebMessage(initialHTML)
    WebViewPreview.NavigateToString(initialHTML)
End Sub
```

[**LoadResData**](/official/Reference/VB/Global/#loadresdata)返回资源字节；`StrConv(..., vbFromUTF8)` 解码它们。[**PostWebMessage**](/official/Reference/WebView2/WebView2/#postwebmessage)将字符串传递给Monaco的 `message` 监听器；[**NavigateToString**](/official/Reference/WebView2/WebView2/#navigatetostring)用相同文本渲染HTML来填充预览面板。

## 实时预览

Monaco中的每次按键触发其 `onDidChangeModelContent` 回调，该回调将新内容 `postMessage` 回BASIC。这以[**JsMessage**](/official/Reference/WebView2/WebView2/#jsmessage)事件到达——直接送入预览：

```vb
Private Sub WebView_JsMessage(ByVal Message As Variant) Handles WebView.JsMessage
    WebViewPreview.NavigateToString(Message)
End Sub
```

就是这样——预览面板在每次编辑时重新渲染。

## 检测缺失的Edge运行时

相当一部分用户将在未安装WebView2 Evergreen运行时的机器上运行应用程序。[**Error**](/official/Reference/WebView2/WebView2/#error)事件将此情况报告为Win32错误代码 `&H80070002`（`ERROR_FILE_NOT_FOUND`）：

```vb
Private Sub WebView_Error(ByVal code As Long, ByVal msg As String) _
        Handles WebView.Error
    Const ERROR_FILE_NOT_FOUND As Long = &H80070002
    If code = ERROR_FILE_NOT_FOUND Then
        MsgBox "Failed to initialize the WebView2 control." & vbCrLf & _
               "Please install the WebView2 (Evergreen) runtime.", _
               vbExclamation, "WebView2"
    Else
        MsgBox "WebView2 error " & Hex$(code) & ": " & msg, _
               vbExclamation, "WebView2"
    End If
End Sub
```

即使在单WebView应用中也值得处理此情况——你在此显示的消息是"什么都没发生"和"哦，我需要安装什么"之间的区别。

## 下一步

- [托管本地Web资源](/official/Tutorials/WebView2/Hosting-local-web-assets) —— 本教程基于的 `CopyResourcesFolderContentsToLocalPath` 辅助过程和虚拟主机模式。
- [JavaScript互操作](/official/Tutorials/WebView2/JavaScript-interop) —— BASIC和JavaScript之间的三座桥。
- [WebView2参考](/official/Reference/WebView2/WebView2/) —— 每个属性、方法和事件。