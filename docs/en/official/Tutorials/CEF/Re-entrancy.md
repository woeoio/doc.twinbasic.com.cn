---
title: Re-entrancy
parent: CEF
nav_order: 3
permalink: /Tutorials/CEF/Re-entrancy
---


# Re-entrancy

The Chromium Embedded Framework runs the browser and renderer in *separate processes*, with cross-process IPC sitting between BASIC and the page. That model is fundamentally different from an in-process API, and it forces a particular discipline on host code: while a CEF callback is executing on the BASIC thread, the browser / renderer process is waiting for it to return --- and calling *back* into the [**CefBrowser**](/en/official/Reference/CEF/CefBrowser/) control during that wait can deadlock.

For the most part you don't have to think about any of this. The control raises every event onto the BASIC message loop via a posted message, so a handler that runs in response to a CEF callback has already returned control to the browser process by the time your code runs. The one place the rule still applies is [**JsRun**](/en/official/Reference/CEF/CefBrowser/#jsrun) --- the *synchronous* JavaScript bridge.

## How the control protects you

When the browser or renderer process raises a CEF callback that needs to appear in BASIC, the control:

1. Captures the callback's arguments into a `Type` instance.
2. Calls `PostMessageW` to push a custom message onto the main thread's message queue.
3. Returns immediately --- the browser process is unblocked.
4. Later, when the form's message loop receives the posted message, the control raises the event on the BASIC side.

The handler runs *outside* the original CEF callback. By the time it executes, the browser process has moved on; the handler is free to call any [**CefBrowser**](/en/official/Reference/CEF/CefBrowser/) method or property --- [**Navigate**](/en/official/Reference/CEF/CefBrowser/#navigate), [**ExecuteScript**](/en/official/Reference/CEF/CefBrowser/#executescript), [**JsRunAsync**](/en/official/Reference/CEF/CefBrowser/#jsrunasync), even another [**JsRun**](/en/official/Reference/CEF/CefBrowser/#jsrun) --- without any re-entrancy concern.

This covers every event the control raises today:

- [**Create**](/en/official/Reference/CEF/CefBrowser/#create), [**Ready**](/en/official/Reference/CEF/CefBrowser/#ready), [**Error**](/en/official/Reference/CEF/CefBrowser/#error)
- [**NavigationComplete**](/en/official/Reference/CEF/CefBrowser/#navigationcomplete), [**SourceChanged**](/en/official/Reference/CEF/CefBrowser/#sourcechanged), [**DocumentTitleChanged**](/en/official/Reference/CEF/CefBrowser/#documenttitlechanged), [**DOMContentLoaded**](/en/official/Reference/CEF/CefBrowser/#domcontentloaded)
- [**PrintToPdfCompleted**](/en/official/Reference/CEF/CefBrowser/#printtopdfcompleted), [**PrintToPdfFailed**](/en/official/Reference/CEF/CefBrowser/#printtopdffailed)
- [**JsAsyncResult**](/en/official/Reference/CEF/CefBrowser/#jsasyncresult), [**JsMessage**](/en/official/Reference/CEF/CefBrowser/#jsmessage)

## The NavigationStarting exception

[**NavigationStarting**](/en/official/Reference/CEF/CefBrowser/#navigationstarting) is the one event that *cannot* be fully deferred --- its `Cancel` parameter is **ByRef**, so the BASIC handler has to set it *before* the browser process can decide whether to proceed with the navigation. The control still uses `SendMessageW` (synchronous) rather than `PostMessageW` to deliver this event, which means the handler runs while the browser process is blocked waiting for the answer.

The control adds an extra safety net for one specific case: if the renderer-IPC channel happens to be busy connecting at the same moment **NavigationStarting** fires (which can happen in older CEF versions during early page loads), a straight `SendMessageW` would deadlock --- BASIC is waiting on the renderer; the renderer is waiting on BASIC. The control detects the situation and uses an interrupt-style mechanism to dispatch *just* the **NavigationStarting** handler on the UI thread without waiting for the renderer IPC.

The practical consequence: **NavigationStarting** handlers should keep their work small --- read [**Uri**](/en/official/Reference/CEF/CefBrowser/#navigationstarting), make a decision, set or leave [**Cancel**](/en/official/Reference/CEF/CefBrowser/#navigationstarting), return. Avoid synchronous round-trips of any kind from inside the handler --- including [**JsRun**](/en/official/Reference/CEF/CefBrowser/#jsrun), [**MsgBox**](/en/official/Reference/VBA/Interaction/MsgBox), and file dialogs.

## JsRun --- the explicit warning

[**JsRun**](/en/official/Reference/CEF/CefBrowser/#jsrun) is the synchronous JavaScript bridge:

```vb
Dim product As Long = CefBrowser1.JsRun("multiplyTheseNumbers", 5, 6)
```

The call blocks the BASIC thread until the renderer process replies with the result. During that block, the renderer is running JavaScript; if that JavaScript calls back into BASIC --- via `window.chrome.webview.postMessage(...)`, or via any host-object call that arrives on the BASIC thread --- there is no thread available to *receive* the call. The renderer waits on BASIC; BASIC waits on the renderer. Deadlock.

The control's source includes this warning directly on the method:

> **!!!WARNING!!!** be careful not to introduce re-entrancy when using this synchronous function, otherwise UI freezes can occur.

The safe rule of thumb:

- Use [**JsRun**](/en/official/Reference/CEF/CefBrowser/#jsrun) for **pure** JavaScript functions --- ones that take inputs, compute, and return a value. No `postMessage`, no host-object calls, no `await` of anything that touches the host.
- Use [**JsRunAsync**](/en/official/Reference/CEF/CefBrowser/#jsrunasync) for anything else --- anywhere the JavaScript side might end up wanting to talk to BASIC during the call.

```vb
' Safe — pure JavaScript: takes two numbers, returns one number.
Dim html As String = CefBrowser1.JsRun("renderMarkdownToHtml", source)

' Prefer JsRunAsync when the JS could call back into BASIC.
CefBrowser1.JsRunAsync "uploadAndReturnUrl", filePath
' ... result arrives later via JsAsyncResult event.
```

## Why the model is simpler than WebView2's

[**WebView2**](/en/official/Reference/WebView2/WebView2/) supports `AddObject` --- publishing a BASIC COM object that JavaScript can call directly. That feature has its own re-entrancy story ([**UseDeferredInvoke**](/en/official/Reference/WebView2/WebView2/#addobject)) because page-initiated host-object calls must end up somewhere.

CEF's host-object equivalent isn't exposed yet --- see the [WebView2 parity](/en/official/Reference/CEF/#webview2-parity) section of the reference. The only synchronous BASIC ↔ JavaScript boundary CEF currently offers is **JsRun**, so the entire re-entrancy story reduces to *"don't post messages back to BASIC from inside a **JsRun** target"*.

## See also

- [JavaScript interop](/en/official/Tutorials/CEF/JavaScript-interop) -- practical patterns for choosing between [**JsRun**](/en/official/Reference/CEF/CefBrowser/#jsrun), [**JsRunAsync**](/en/official/Reference/CEF/CefBrowser/#jsrunasync), and the message bridge.
- [CefBrowser reference](/en/official/Reference/CEF/CefBrowser/) -- every property, method, and event.
- [WebView2 Re-entrancy tutorial](/en/official/Tutorials/WebView2/Re-entrancy) -- the parallel story for the [**WebView2**](/en/official/Reference/WebView2/WebView2/) control, including the **AddObject** trade-off CEF doesn't yet have.
