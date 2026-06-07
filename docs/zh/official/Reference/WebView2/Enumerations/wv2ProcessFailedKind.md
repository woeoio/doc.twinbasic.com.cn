---
title: wv2ProcessFailedKind
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2ProcessFailedKind
---
# wv2ProcessFailedKind
Identifies which of the external WebView2 processes failed. Passed as the `Kind` argument of the [**ProcessFailed**](/official/Reference/WebView2/WebView2/#processfailed) event. Mirrors the `COREWEBVIEW2_PROCESS_FAILED_KIND` enumeration.

| Constant | Value | Description |
|----------|-------|-------------|
| **wv2BrowserProcessExited** | 0 | The main browser process exited unexpectedly --- the control cannot be recovered. |
| **wv2RenderProcessExited** | 1 | The renderer process exited unexpectedly. |
| **wv2RenderProcessUnresponsive** | 2 | The renderer process is hung. |
| **wv2FrameRenderProcessExited** | 3 | A renderer process for one of the iframes exited. |
| **wv2UtilityProcessExited** | 4 | A utility process exited. |
| **wv2SandboxHelperProcessExited** | 5 | The sandbox helper process exited. |
| **wv2GpuProcessExited** | 6 | The GPU process exited. |
| **wv2PpapiPluginProcessExited** | 7 | A PPAPI plug-in process exited. |
| **wv2PpapiBrokerProcessExited** | 8 | The PPAPI broker process exited. |
| **wv2UnknownProcessExited** | 9 | An unidentified WebView2 process exited. |
