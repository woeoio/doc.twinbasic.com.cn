---
title: Building a browser shell
parent: CEF
nav_order: 4
permalink: /Tutorials/CEF/Building-A-Browser-Shell
---


# Building a browser shell

A short worked tutorial: turn a [**CefBrowser**](/official/Reference/CEF/CefBrowser/) control into a working browser with an address bar, back / forward / reload buttons, zoom, and a few helpers (DevTools, PDF export).

The complete project ships as *Sample 1b --- Chromium Embedded Framework Examples* in the New-Project dialog (form *Example 1*). This tutorial describes its key pieces.

## The form

Drop a [**CefBrowser**](/official/Reference/CEF/CefBrowser/) control onto a Form and rename it `WebView`. Around it, add a `TextBox` named `AddressBar` plus six `CommandButton`s --- `btnBack`, `btnForward`, `btnRefresh`, `btnZoomIn`, `btnZoomOut`, `btnPDF`, `btnDevTools`.

## Navigating

The bare-bones navigation methods --- [**Navigate**](/official/Reference/CEF/CefBrowser/#navigate), [**GoBack**](/official/Reference/CEF/CefBrowser/#goback), [**GoForward**](/official/Reference/CEF/CefBrowser/#goforward), [**Reload**](/official/Reference/CEF/CefBrowser/#reload) --- are one-liners:

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

To make the back / forward buttons follow the actual history state, sync them against [**CanGoBack**](/official/Reference/CEF/CefBrowser/#cangoback) and [**CanGoForward**](/official/Reference/CEF/CefBrowser/#cangoforward) after every navigation:

```vb
Private Sub WebView_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long) _
        Handles WebView.NavigationComplete
    btnBack.Enabled = WebView.CanGoBack
    btnForward.Enabled = WebView.CanGoForward
End Sub
```

::: info
*IsSuccess* and *WebErrorStatus* are part of the event signature but currently return placeholder values (`True` and `0`) --- use [**DocumentURL**](/official/Reference/CEF/CefBrowser/#documenturl) to confirm where the browser actually landed.
:::

## The address bar

Pressing **Enter** in the address bar triggers a navigation. The reverse direction --- keeping the visible URL in sync with the page --- is the [**SourceChanged**](/official/Reference/CEF/CefBrowser/#sourcechanged) event, which fires whenever [**DocumentURL**](/official/Reference/CEF/CefBrowser/#documenturl) changes (including same-document `history.pushState` updates):

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

[**Navigate**](/official/Reference/CEF/CefBrowser/#navigate) requires a full URI with scheme --- `http://`, `https://`, `file://`, … Unlike [**WebView2**](/official/Reference/WebView2/WebView2/#navigate), no automatic `https://` prefix is added when the scheme is missing.

## Zoom

[**ZoomFactor**](/official/Reference/CEF/CefBrowser/#zoomfactor) is a **Double** --- `1.0` is 100%, `1.5` is 150%. The value reads as `0` until the browser has reached [**Ready**](/official/Reference/CEF/CefBrowser/#ready), so arithmetic that multiplies the current value silently starts from zero unless you clamp first:

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

The `On Error Resume Next` catches the "control not ready" error that fires when the button is clicked before [**Ready**](/official/Reference/CEF/CefBrowser/#ready) has fired.

## PDF export

[**PrintToPdf**](/official/Reference/CEF/CefBrowser/#printtopdf) saves the current document to disk asynchronously --- the result arrives as [**PrintToPdfCompleted**](/official/Reference/CEF/CefBrowser/#printtopdfcompleted) or [**PrintToPdfFailed**](/official/Reference/CEF/CefBrowser/#printtopdffailed):

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

The optional parameters that follow *outputPath* --- [**cefPrintOrientation**](/official/Reference/CEF/Enumerations/cefPrintOrientation), page size in microns, margins, header/footer toggles --- let the host override Chromium's defaults. See the [**PrintToPdf** reference](/official/Reference/CEF/CefBrowser/#printtopdf) for the full signature.

## DevTools

The Chromium DevTools window opens in its own top-level window:

```vb
Private Sub btnDevTools_Click() Handles btnDevTools.Click
    WebView.OpenDevToolsWindow()
End Sub
```

The CEF package does not currently expose **WebView2**'s **OpenTaskManagerWindow** equivalent --- see the [WebView2 parity](/official/Reference/CEF/#webview2-parity) section of the reference for the current gap list.

## Form-title sync

To make the host window's caption track the page's `<title>`, listen for [**DocumentTitleChanged**](/official/Reference/CEF/CefBrowser/#documenttitlechanged) and read [**DocumentTitle**](/official/Reference/CEF/CefBrowser/#documenttitle):

```vb
Private Sub WebView_DocumentTitleChanged() Handles WebView.DocumentTitleChanged
    Me.Caption = WebView.DocumentTitle
End Sub
```

## Where next

- [Hosting local web assets](/official/Tutorials/CEF/Hosting-local-web-assets) -- serve HTML / JS / CSS from a folder without an HTTP server.
- [JavaScript interop](/official/Tutorials/CEF/JavaScript-interop) -- pass values and method calls between BASIC and the page.
- [Re-entrancy](/official/Tutorials/CEF/Re-entrancy) -- the one thing to know about [**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun) before you use it.
- [CefBrowser reference](/official/Reference/CEF/CefBrowser/) -- every property, method, and event.
