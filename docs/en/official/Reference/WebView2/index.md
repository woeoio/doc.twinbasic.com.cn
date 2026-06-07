---
title: WebView2 Package
parent: Packages
nav_order: 7
permalink: /tB/Packages/WebView2/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '542788de-f9ef-466a-81a5-5c013a6a9103'
  PropagateID: '542788de-f9ef-466a-81a5-5c013a6a9103'
  ReservedCode1: 'cd6e0d69-158d-4f2e-a0eb-cbfd41ae8b0b'
  ReservedCode2: 'cd6e0d69-158d-4f2e-a0eb-cbfd41ae8b0b'
---

# WebView2 Package

The **WebView2Package** wraps the Microsoft Edge WebView2 runtime and exposes it as an ordinary twinBASIC control. Drop a [**WebView2**](/en/official/Reference/WebView2/WebView2) onto a form and the running Edge engine renders web content inside it --- navigate to URLs, run JavaScript, intercept HTTP requests, post messages between BASIC and JavaScript, and print pages to PDF.

The package is a built-in package shipped with twinBASIC. See the [WebView2 tutorials](/en/official/Tutorials/WebView2) for how to reference it in a project, and worked samples.

Beyond the control itself, the package exposes a small set of wrapper objects that appear inside the control's event arguments --- the request / response pair on **WebResourceRequested**, the request-header collection on **NavigationStarting**, the environment-options object configured before **Create** --- together with the `wv2…` enumerations used to spell out option values.

## Classes

- [WebView2](/en/official/Reference/WebView2/WebView2) -- the control: navigation, scripting, settings, deferral-aware events, and PDF / suspend / download / task-manager features controlled by the underlying Edge runtime
- [WebView2EnvironmentOptions](/en/official/Reference/WebView2/WebView2/EnvironmentOptions) -- pre-creation configuration for the WebView2 environment (user-data folder, executable folder, locale, tracking-prevention, …); reached via the control's **EnvironmentOptions** property
- [WebView2Header](/en/official/Reference/WebView2/WebView2Header) -- one HTTP header (Name / Value); the element type yielded by header iteration
- [WebView2HeadersCollection](/en/official/Reference/WebView2/WebView2HeadersCollection) -- enumerable wrapper used by `For Each` over request / response headers
- [WebView2Request](/en/official/Reference/WebView2/WebView2Request) -- the request side of a **WebResourceRequested** event -- **Method**, **Uri**, **Headers**, and the request body as bytes or UTF-8 text
- [WebView2RequestHeaders](/en/official/Reference/WebView2/WebView2RequestHeaders) -- mutable request-header collection passed to **NavigationStarting** and reached via **WebView2Request.Headers**
- [WebView2Response](/en/official/Reference/WebView2/WebView2Response) -- the response side of a **WebResourceRequested** event -- **StatusCode**, **ReasonPhrase**, **Headers**, and the body as bytes or UTF-8 text
- [WebView2ResponseHeaders](/en/official/Reference/WebView2/WebView2ResponseHeaders) -- mutable response-header collection reached via **WebView2Response.Headers**

## Enumerations

- [wv2DefaultDownloadCornerAlign](/en/official/Reference/WebView2/Enumerations/wv2DefaultDownloadCornerAlign) -- anchors the built-in download-progress dialog to one corner of the control
- [wv2ErrorStatus](/en/official/Reference/WebView2/Enumerations/wv2ErrorStatus) -- reason a navigation failed; reported by **NavigationComplete**
- [wv2HostResourceAccessKind](/en/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind) -- access policy for a virtual hostname registered with **SetVirtualHostNameToFolderMapping**
- [wv2KeyEventKind](/en/official/Reference/WebView2/Enumerations/wv2KeyEventKind) -- the kind of accelerator-key keyboard message in **AcceleratorKeyPressed**
- [wv2PermissionKind](/en/official/Reference/WebView2/Enumerations/wv2PermissionKind) -- device or browser capability a page is asking permission to use; passed by **PermissionRequested**
- [wv2PermissionState](/en/official/Reference/WebView2/Enumerations/wv2PermissionState) -- the host's decision (grant / deny / default) on a **PermissionRequested** event
- [wv2PrintOrientation](/en/official/Reference/WebView2/Enumerations/wv2PrintOrientation) -- page orientation passed to **PrintToPdf**
- [wv2ProcessFailedKind](/en/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) -- which of the external WebView2 processes failed; reported by **ProcessFailed**
- [wv2ScriptDialogKind](/en/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind) -- which JavaScript-dialog primitive is opening; passed by **ScriptDialogOpening**
- [wv2WebResourceContext](/en/official/Reference/WebView2/Enumerations/wv2WebResourceContext) -- kind of HTTP request a filter registered with **AddWebResourceRequestedFilter** should match

## Types

- [COREWEBVIEW2_PHYSICAL_KEY_STATUS](/en/official/Reference/WebView2/Types/COREWEBVIEW2_PHYSICAL_KEY_STATUS) -- decoded `WM_KEYDOWN` / `WM_KEYUP` `lParam` bit-fields; delivered via the **AcceleratorKeyPressed** event

## Tutorials

- [Getting started](/en/official/Tutorials/WebView2/Getting-started) -- adding the package references and dropping a control onto a form
- [Customize the UserDataFolder](/en/official/Tutorials/WebView2/Customize-the-UserDataFolder) -- relocating the runtime's working folder for hosted scenarios (Office add-ins, kiosk installs)
- [Re-entrancy](/en/official/Tutorials/WebView2/Re-entrancy) -- what the control's deferred-event machinery handles automatically, and the **AddObject** synchronous-vs-deferred trade-off
- [Building a browser shell](/en/official/Tutorials/WebView2/Building-a-browser-shell) -- address bar, back / forward / reload, zoom, PDF export
- [Hosting local web assets](/en/official/Tutorials/WebView2/Hosting-local-web-assets) -- serve HTML / JS / CSS from a project resource folder, without an HTTP server
- [JavaScript interop](/en/official/Tutorials/WebView2/JavaScript-interop) -- the three bridges between BASIC and the page: host objects, messages, and scripted calls
- [Driving Monaco from twinBASIC](/en/official/Tutorials/WebView2/Driving-Monaco) -- case study combining everything above

> AI生成