---
title: "构建浏览器外壳"
parent: WebView2
nav_order: 4
permalink: /Tutorials/WebView2/Building-A-Browser-Shell
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '74fbde5b-6148-4c40-83f7-9a94dcd2faf8'
  PropagateID: '74fbde5b-6148-4c40-83f7-9a94dcd2faf8'
  ReservedCode1: '1d122fe0-1379-4b75-965a-e77ae5ec62fa'
  ReservedCode2: '1d122fe0-1379-4b75-965a-e77ae5ec62fa'
---

# 构建浏览器外壳

一个简短的工作教程：将[**WebView2**](/official/Reference/WebView2/WebView2/)控件变成一个可工作的浏览器，带有地址栏、后退/前进/刷新按钮、缩放以及一些辅助工具（DevTools、任务管理器、PDF导出）。

完整项目以*示例0——WebView2示例*的形式在新项目对话框中提供（窗体*示例1*）。本教程描述其关键部分。

## 窗体

将一个[**WebView2**](/official/Reference/WebView2/WebView2/)控件放置到窗体上并重命名为 `WebView`。在其周围添加一个名为 `AddressBar` 的 `TextBox` 以及七个 `CommandButton`——`btnBack`、`btnForward`、`btnRefresh`、`btnZoomIn`、`btnZoomOut`、`btnPDF`、`btnDevTools`、`btnTaskMgr`。

## 导航

最基本的导航方法——[**Navigate**](/official/Reference/WebView2/WebView2/#navigate)、[**GoBack**](/official/Reference/WebView2/WebView2/#goback)、[**GoForward**](/official/Reference/WebView2/WebView2/#goforward)、[**Reload**](/official/Reference/WebView2/WebView2/#reload)——都是单行代码：

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

要使后退/前进按钮跟随实际的浏览历史状态，在每次导航后根据[**CanGoBack**](/official/Reference/WebView2/WebView2/#cangoback)和[**CanGoForward**](/official/Reference/WebView2/WebView2/#cangoforward)同步它们：

```vb
Private Sub WebView_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long) _
        Handles WebView.NavigationComplete
    btnBack.Enabled = WebView.CanGoBack
    btnForward.Enabled = WebView.CanGoForward
End Sub
```

## 地址栏

在地址栏中按**Enter**触发导航。反向——保持可见URL与页面同步——是[**SourceChanged**](/official/Reference/WebView2/WebView2/#sourcechanged)事件，每当[**DocumentURL**](/official/Reference/WebView2/WebView2/#documenturl)更改时触发（包括同文档的 `history.pushState` 更新）：

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

[**Navigate**](/official/Reference/WebView2/WebView2/#navigate)接受任何URI字符串；如果缺少方案前缀，会自动添加 `https://`。

## 缩放

[**ZoomFactor**](/official/Reference/WebView2/WebView2/#zoomfactor)是一个**Double**——`1.0`为100%，`1.5`为150%。设计时默认值为 `0`，表示"不覆盖Edge的默认值1.0"——因此从冷启动乘以 `1.1` 得到 `0`，而不是 `1.1`。缩放前先钳制到 `1`：

```vb
Private Sub btnZoomIn_Click() Handles btnZoomIn.Click
    If WebView.ZoomFactor = 0 Then WebView.ZoomFactor = 1
    WebView.ZoomFactor *= 1.1
End Sub

Private Sub btnZoomOut_Click() Handles btnZoomOut.Click
    If WebView.ZoomFactor = 0 Then WebView.ZoomFactor = 1
    WebView.ZoomFactor /= 1.1
End Sub
```

## PDF导出

[**PrintToPdf**](/official/Reference/WebView2/WebView2/#printtopdf)异步将当前文档保存到磁盘——结果以[**PrintToPdfCompleted**](/official/Reference/WebView2/WebView2/#printtopdfcompleted)或[**PrintToPdfFailed**](/official/Reference/WebView2/WebView2/#printtopdffailed)事件到达：

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

## DevTools和任务管理器

两个窗口都是一次性调用——调用匹配方法，Edge在其自己的进程中打开窗口：

```vb
Private Sub btnDevTools_Click() Handles btnDevTools.Click
    WebView.OpenDevToolsWindow()
End Sub

Private Sub btnTaskMgr_Click() Handles btnTaskMgr.Click
    WebView.OpenTaskManagerWindow()
End Sub
```

[**OpenDevToolsWindow**](/official/Reference/WebView2/WebView2/#opendevtoolswindow)即使在[**AreDevToolsEnabled**](/official/Reference/WebView2/WebView2/#aredevtoolsenabled)为**False**时也能工作（该设置仅禁用用户发起的路径——键盘快捷键和上下文菜单）。

## 窗体标题同步

要使宿主窗口的标题跟踪页面的 `<title>`，监听[**DocumentTitleChanged**](/official/Reference/WebView2/WebView2/#documenttitlechanged)并读取[**DocumentTitle**](/official/Reference/WebView2/WebView2/#documenttitle)：

```vb
Private Sub WebView_DocumentTitleChanged() Handles WebView.DocumentTitleChanged
    Me.Caption = WebView.DocumentTitle
End Sub
```

## 下一步

- [托管本地Web资源](/official/Tutorials/WebView2/Hosting-local-web-assets) —— 无需HTTP服务器即可从文件夹提供HTML/JS/CSS。
- [JavaScript互操作](/official/Tutorials/WebView2/JavaScript-interop) —— 在BASIC和页面之间传递值和方法调用。
- [WebView2参考](/official/Reference/WebView2/WebView2/) —— 每个属性、方法和事件。