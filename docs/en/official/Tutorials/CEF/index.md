---
title: CEF
parent: Tutorials
permalink: /Tutorials/CEF/
---

# CEF

The [**CefBrowser**](/en/official/Reference/CEF/CefBrowser/) control hosts a Chromium browser inside a twinBASIC form --- navigate to web pages, run local web apps, exchange messages and method calls with JavaScript, and print pages to PDF. Unlike [**WebView2**](/en/official/Tutorials/WebView2/), the Chromium runtime ships _alongside_ the application rather than being a system component, so the browser version is under the developer's control and the same package works on machines without Edge installed.

These tutorials demonstrate the most common patterns:

- [Getting started](/en/official/Tutorials/CEF/Getting-started) -- adding the package reference, downloading the matching CEF runtime, and dropping a control onto a form.
- [Customize the UserDataFolder](/en/official/Tutorials/CEF/Customize-the-UserDataFolder) -- relocating the runtime's working folder for hosted scenarios (Office add-ins, kiosk installs, portable deployments).
- [Re-entrancy](/en/official/Tutorials/CEF/Re-entrancy) -- what the control's deferred-event machinery does for you, and the one place ([**JsRun**](/en/official/Reference/CEF/CefBrowser/#jsrun)) where you still have to think about it.
- [Building a browser shell](/en/official/Tutorials/CEF/Building-a-browser-shell) -- address bar, back / forward / reload, zoom, PDF export --- turning the control into a working browser.
- [Hosting local web assets](/en/official/Tutorials/CEF/Hosting-local-web-assets) -- serve HTML / JS / CSS from a project resource folder, without an HTTP server.
- [JavaScript interop](/en/official/Tutorials/CEF/JavaScript-interop) -- the two bridges between BASIC and the page: messages and scripted calls.
- [Driving Monaco from twinBASIC](/en/official/Tutorials/CEF/Driving-Monaco) -- a case study combining everything above: embed Microsoft's Monaco editor next to a live HTML preview pane.

The complete sample code for the last four tutorials ships as _Sample 1b --- Chromium Embedded Framework Examples_ in the New-Project dialog, mirroring _Sample 1a --- WebView2 Examples_ almost feature-for-feature.

::: warning
The CEF package is currently in **BETA**. Several features available on [**WebView2**](/en/official/Reference/WebView2/WebView2/) are not yet exposed --- see the [WebView2 parity](/en/official/Reference/CEF/#webview2-parity) section of the reference for the current gap list.
:::

For the full set of members on the control itself, see the [**CefBrowser** class reference](/en/official/Reference/CEF/CefBrowser/).
