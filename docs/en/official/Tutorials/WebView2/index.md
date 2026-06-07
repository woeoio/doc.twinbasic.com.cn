---
title: WebView2
parent: Tutorials
permalink: /Tutorials/WebView2/
---


# WebView2

The [**WebView2**](/en/official/Reference/WebView2/WebView2/) control hosts the Microsoft Edge browser engine inside a twinBASIC form --- navigate to web pages, run local web apps, exchange messages and method calls with JavaScript, intercept HTTP traffic, and print pages to PDF.

These tutorials demonstrate the most common patterns:

- [Getting started](/en/official/Tutorials/WebView2/Getting-started) -- adding the package references and dropping a control onto a form.
- [Customize the UserDataFolder](/en/official/Tutorials/WebView2/Customize-the-UserDataFolder) -- relocating the runtime's working folder for hosted scenarios (Office add-ins, kiosk installs).
- [Re-entrancy](/en/official/Tutorials/WebView2/Re-entrancy) -- what the control's deferred-event machinery does for you, and the one place you still have to think about it.
- [Building a browser shell](/en/official/Tutorials/WebView2/Building-a-browser-shell) -- address bar, back / forward / reload, zoom, PDF export --- turning the control into a working browser.
- [Hosting local web assets](/en/official/Tutorials/WebView2/Hosting-local-web-assets) -- serve HTML / JS / CSS from a project resource folder, without an HTTP server.
- [JavaScript interop](/en/official/Tutorials/WebView2/JavaScript-interop) -- the three bridges between BASIC and the page: host objects, messages, and scripted calls.
- [Driving Monaco from twinBASIC](/en/official/Tutorials/WebView2/Driving-Monaco) -- a case study combining everything above: embed Microsoft's Monaco editor next to a live HTML preview pane.

The complete sample code for the last four tutorials ships as *Sample 0 --- WebView2 Examples* in the New-Project dialog.

For the full set of members on the control itself, see the [**WebView2** class reference](/en/official/Reference/WebView2/WebView2/).
