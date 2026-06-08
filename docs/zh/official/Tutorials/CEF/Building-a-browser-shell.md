---
title: "构建浏览器外壳"
parent: CEF
nav_order: 4
permalink: /Tutorials/CEF/Building-A-Browser-Shell
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e3a0e7bd-64db-4d1d-bc95-b8443c1d3368'
  PropagateID: 'e3a0e7bd-64db-4d1d-bc95-b8443c1d3368'
  ReservedCode1: 'e13ca694-1e45-436e-9be1-ff301addb9d4'
  ReservedCode2: 'e13ca694-1e45-436e-9be1-ff301addb9d4'
---

# 构建浏览器外壳

一个简短的工作教程：将[**CefBrowser**](/official/Reference/CEF/CefBrowser/)控件变成一个可工作的浏览器，带有地址栏、后退/前进/刷新按钮、缩放以及一些辅助工具（DevTools、PDF导出）。

完整项目以*示例1b——Chromium Embedded Framework示例*的形式在新项目对话框中提供（窗体*示例1*）。本教程描述其关键部分。

## 窗体

将一个[**CefBrowser**](/official/Reference/CEF/CefBrowser/)控件放置到窗体上并重命名为 `WebView`。在其周围添加一个名为 `AddressBar` 的 `TextBox` 以及六个 `CommandButton`——`btnBack`、`btnForward`、`btnRefresh`、`btnZoomIn`、`btnZoomOut`、`btnPDF`、`btnDevTools`。

## 导航

最基本的导航方法——[**Navigate**](/official/Reference/CEF/CefBrowser/#navigate)、[**GoBack**](/official/Reference/CEF/CefBrowser/#goback)、[**GoForward**](/official/Reference/CEF/CefBrowser/#goforward)、[**Reload**](/official/Reference/CEF/CefBrowser/#reload)——都是单行代码：

```vb
Private Sub btnBack_Click() Handles btnBack.Click
    WebView.GoBack()
End Sub

Private Sub btnForward_Click() Handles btnForward.Click
    WebView.GoForward()
End Sub

Private Sub btnRefresh_Click() Handles btnRefresh.Click
    WebView.Reload()
End Sub
```

要使后退/前进按钮跟随实际的浏览历史状态，在每次导航后根据[**CanGoBack**](/official/Reference/CEF/CefBrowser/#cangoback)和[**CanGoForward**](/official/Reference/CEF/CefBrowser/#cangoforward)同步它们：

```vb
Private Sub WebView_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long) _
        Handles WebView.NavigationComplete
    btnBack.Enabled = WebView.CanGoBack
    btnForward.Enabled = WebView.CanGoForward
End Sub
```

::: info
*IsSuccess*和*WebErrorStatus*是事件签名的一部分，但目前返回占位值（`True`和`0`）——使用[**DocumentURL**](/official/Reference/CEF/CefBrowser/#documenturl)确认浏览器实际到达的位置。
:::

## 地址栏

在地址栏中按**Enter**触发导航。反向——保持可见URL与页面同步——是[**SourceChanged**](/official/Reference/CEF/CefBrowser/#sourcechanged)事件，每当[**DocumentURL**](/official/Reference/CEF/CefBrowser/#documenturl)更改时触发（包括同文档的 `history.pushState` 更新）：

```vb
Private Sub AddressBar_KeyDown(KeyCode As Integer, Shift As Integer) _
        Handles AddressBar.KeyDown
    If KeyCode = vbKeyReturn Then WebView.Navigate AddressBar.Text
End Sub

Private Sub WebView_SourceChanged(ByVal IsNewDocument As Boolean) _
        Handles WebView.SourceChanged
    AddressBar.Text = WebView.DocumentURL
End Sub
```

[**Navigate**](/official/Reference/CEF/CefBrowser/#navigate)需要带方案的完整URI——`http://`、`https://`、`file://`、……与[**WebView2**](/official/Reference/WebView2/WebView2/#navigate)不同，方案缺失时不会自动添加 `https://` 前缀。

## 缩放

[**ZoomFactor**](/official/Reference/CEF/CefBrowser/#zoomfactor)是一个**Double**——`1.0`为100%，`1.5`为150%。在浏览器达到[**Ready**](/official/Reference/CEF/CefBrowser/#ready)之前，该值读取为 `0`，因此乘以当前值的算术运算会悄悄从零开始，除非你先钳制：

```vb
Private Sub btnZoomIn_Click() Handles btnZoomIn.Click
    If WebView.ZoomFactor = 0 Then WebView.ZoomFactor = 1
    On Error Resume Next
    WebView.ZoomFactor *= 1.1
End Sub

Private Sub btnZoomOut_Click() Handles btnZoomOut.Click
    If WebView.ZoomFactor = 0 Then WebView.ZoomFactor = 1
    On Error Resume Next
    WebView.ZoomFactor /= 1.1
End Sub
```

`On Error Resume Next` 捕获在[**Ready**](/official/Reference/CEF/CefBrowser/#ready)触发前点击按钮时引发的"控件未就绪"错误。

## PDF导出

[**PrintToPdf**](/official/Reference/CEF/CefBrowser/#printtopdf)异步将当前文档保存到磁盘——结果以[**PrintToPdfCompleted**](/official/Reference/CEF/CefBrowser/#printtopdfcompleted)或[**PrintToPdfFailed**](/official/Reference/CEF/CefBrowser/#printtopdffailed)事件到达：

```vb
Private Sub btnPDF_Click() Handles btnPDF.Click
    Dim outputPath As String = _
        Environ$("USERPROFILE") & "\Documents\page.pdf"
    WebView.PrintToPdf(outputPath)
End Sub

Private Sub WebView_PrintToPdfCompleted() Handles WebView.PrintToPdfCompleted
    MsgBox "PDF saved.", vbInformation
End Sub
```

*outputPath*后面的可选参数——[**cefPrintOrientation**](/official/Reference/CEF/Enumerations/cefPrintOrientation)、以微米为单位的页面大小、边距、页眉/页脚切换——允许宿主覆盖Chromium的默认值。完整签名参见[**PrintToPdf**参考](/official/Reference/CEF/CefBrowser/#printtopdf)。

## DevTools

Chromium DevTools窗口在其自己的顶层窗口中打开：

```vb
Private Sub btnDevTools_Click() Handles btnDevTools.Click
    WebView.OpenDevToolsWindow()
End Sub
```

CEF包目前未暴露**WebView2**的**OpenTaskManagerWindow**等效功能——参见参考的[WebView2对等](/official/Reference/CEF/#webview2-parity)部分了解当前差距列表。

## 窗体标题同步

要使宿主窗口的标题跟踪页面的 `<title>`，监听[**DocumentTitleChanged**](/official/Reference/CEF/CefBrowser/#documenttitlechanged)并读取[**DocumentTitle**](/official/Reference/CEF/CefBrowser/#documenttitle)：

```vb
Private Sub WebView_DocumentTitleChanged() Handles WebView.DocumentTitleChanged
    Me.Caption = WebView.DocumentTitle
End Sub
```

## 下一步

- [托管本地Web资源](/official/Tutorials/CEF/Hosting-local-web-assets) —— 无需HTTP服务器即可从文件夹提供HTML/JS/CSS。
- [JavaScript互操作](/official/Tutorials/CEF/JavaScript-interop) —— 在BASIC和页面之间传递值和方法调用。
- [重入性](/official/Tutorials/CEF/Re-entrancy) —— 使用[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)前需要了解的一件事。
- [CefBrowser参考](/official/Reference/CEF/CefBrowser/) —— 每个属性、方法和事件。