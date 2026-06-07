---
title: Building a browser shell
parent: CEF
nav_order: 4
permalink: /Tutorials/CEF/Building-A-Browser-Shell
---


# Building a browser shell

A short worked tutorial: turn a [**CefBrowser**](/en/official/Reference/CEF/CefBrowser/) control into a working browser with an address bar, back / forward / reload buttons, zoom, and a few helpers (DevTools, PDF export).

The complete project ships as *Sample 1b --- Chromium Embedded Framework Examples* in the New-Project dialog (form *Example 1*). This tutorial describes its key pieces.

## The form

Drop a [**CefBrowser**](/en/official/Reference/CEF/CefBrowser/) control onto a Form and rename it `WebView`. Around it, add a `TextBox` named `AddressBar` plus six `CommandButton`s --- `btnBack`, `btnForward`, `btnRefresh`, `btnZoomIn`, `btnZoomOut`, `btnPDF`, `btnDevTools`.

## Navigating

The bare-bones navigation methods --- [**Navigate**](/en/official/Reference/CEF/CefBrowser/#navigate), [**GoBack**](/en/official/Reference/CEF/CefBrowser/#goback), [**GoForward**](/en/official/Reference/CEF/CefBrowser/#goforward), [**Reload**](/en/official/Reference/CEF/CefBrowser/#reload) --- are one-liners:

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

To make the back / forward buttons follow the actual history state, sync them against [**CanGoBack**](/en/official/Reference/CEF/CefBrowser/#cangoback) and [**CanGoForward**](/en/official/Reference/CEF/CefBrowser/#cangoforward) after every navigation:

```vb
Private Sub WebView_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long) _
        Handles WebView.NavigationComplete
    btnBack.Enabled = WebView.CanGoBack
    btnForward.Enabled = WebView.CanGoForward
End Sub
```

::: info
*IsSuccess* and *WebErrorStatus* are part of the event signature but currently return placeholder values (`True` and `0`) --- use [**DocumentURL**](/en/official/Reference/CEF/CefBrowser/#documenturl) to confirm where the browser actually landed.
:::

## The address bar

Pressing **Enter** in the address bar triggers a navigation. The reverse direction --- keeping the visible URL in sync with the page --- is the [**SourceChanged**](/en/official/Reference/CEF/CefBrowser/#sourcechanged) event, which fires whenever [**DocumentURL**](/en/official/Reference/CEF/CefBrowser/#documenturl) changes (including same-document `history.pushState` updates):

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

[**Navigate**](/en/official/Reference/CEF/CefBrowser/#navigate) requires a full URI with scheme --- `http://`, `https://`, `file://`, … Unlike [**WebView2**](/en/official/Reference/WebView2/WebView2/#navigate), no automatic `https://` prefix is added when the scheme is missing.

## Zoom

[**ZoomFactor**](/en/official/Reference/CEF/CefBrowser/#zoomfactor) is a **Double** --- `1.0` is 100%, `1.5` is 150%. The value reads as `0` until the browser has reached [**Ready**](/en/official/Reference/CEF/CefBrowser/#ready), so arithmetic that multiplies the current value silently starts from zero unless you clamp first:

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

The `On Error Resume Next` catches the "control not ready" error that fires when the button is clicked before [**Ready**](/en/official/Reference/CEF/CefBrowser/#ready) has fired.

## PDF export

[**PrintToPdf**](/en/official/Reference/CEF/CefBrowser/#printtopdf) saves the current document to disk asynchronously --- the result arrives as [**PrintToPdfCompleted**](/en/official/Reference/CEF/CefBrowser/#printtopdfcompleted) or [**PrintToPdfFailed**](/en/official/Reference/CEF/CefBrowser/#printtopdffailed):

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

The optional parameters that follow *outputPath* --- [**cefPrintOrientation**](/en/official/Reference/CEF/Enumerations/cefPrintOrientation), page size in microns, margins, header/footer toggles --- let the host override Chromium's defaults. See the [**PrintToPdf** reference](/en/official/Reference/CEF/CefBrowser/#printtopdf) for the full signature.

## DevTools

The Chromium DevTools window opens in its own top-level window:

```vb
Private Sub btnDevTools_Click() Handles btnDevTools.Click
    WebView.OpenDevToolsWindow()
End Sub
```

The CEF package does not currently expose **WebView2**'s **OpenTaskManagerWindow** equivalent --- see the [WebView2 parity](/en/official/Reference/CEF/#webview2-parity) section of the reference for the current gap list.

## Form-title sync

To make the host window's caption track the page's `<title>`, listen for [**DocumentTitleChanged**](/en/official/Reference/CEF/CefBrowser/#documenttitlechanged) and read [**DocumentTitle**](/en/official/Reference/CEF/CefBrowser/#documenttitle):

```vb
Private Sub WebView_DocumentTitleChanged() Handles WebView.DocumentTitleChanged
    Me.Caption = WebView.DocumentTitle
End Sub
```

## Where next

- [Hosting local web assets](/en/official/Tutorials/CEF/Hosting-local-web-assets) -- serve HTML / JS / CSS from a folder without an HTTP server.
- [JavaScript interop](/en/official/Tutorials/CEF/JavaScript-interop) -- pass values and method calls between BASIC and the page.
- [Re-entrancy](/en/official/Tutorials/CEF/Re-entrancy) -- the one thing to know about [**JsRun**](/en/official/Reference/CEF/CefBrowser/#jsrun) before you use it.
- [CefBrowser reference](/en/official/Reference/CEF/CefBrowser/) -- every property, method, and event.
