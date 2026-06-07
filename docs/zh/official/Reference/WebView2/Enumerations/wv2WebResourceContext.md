---
title: wv2WebResourceContext
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2WebResourceContext
---
# wv2WebResourceContext
The kind of HTTP request a filter should match when registered with [**AddWebResourceRequestedFilter**](/official/Reference/WebView2/WebView2/#addwebresourcerequestedfilter) (or removed with [**RemoveWebResourceRequestedFilter**](/official/Reference/WebView2/WebView2/#removewebresourcerequestedfilter)). Mirrors the `COREWEBVIEW2_WEB_RESOURCE_CONTEXT` enumeration.

| Constant | Value | Description |
|----------|-------|-------------|
| **wv2All** | 0 | Match every request, irrespective of kind. |
| **wv2Document** | 1 | Top-level HTML document. |
| **wv2Stylesheet** | 2 | CSS stylesheet. |
| **wv2Image** | 3 | Image resource. |
| **wv2Media** | 4 | Audio or video resource. |
| **wv2Font** | 5 | Web-font resource. |
| **wv2Script** | 6 | JavaScript file. |
| **wv2XMLHttpRequest** | 7 | `XMLHttpRequest` (XHR) call. |
| **wv2Fetch** | 8 | `fetch()` API call. |
| **wv2TextTrack** | 9 | Text track for `<video>` / `<audio>`. |
| **wv2EventSource** | 10 | Server-sent-events stream. |
| **wv2WebSocket** | 11 | WebSocket connection. |
| **wv2Manifest** | 12 | Web-app manifest. |
| **wv2SignedExchange** | 13 | Signed-HTTP-exchange resource. |
| **wv2Ping** | 14 | Hyperlink ping request. |
| **wv2CspViolationReport** | 15 | Content-Security-Policy violation report. |
| **wv2Other** | 16 | A request not covered by the other kinds. |
