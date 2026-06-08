---
title: wv2ProcessFailedKind
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2ProcessFailedKind
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '71b8c34c-4c46-4fa6-9ad9-34cd8162b2c6'
  PropagateID: '71b8c34c-4c46-4fa6-9ad9-34cd8162b2c6'
  ReservedCode1: '8b16342a-8049-49ee-9bd5-4f94d105b1f1'
  ReservedCode2: '8b16342a-8049-49ee-9bd5-4f94d105b1f1'
---

# wv2ProcessFailedKind
标识哪个外部 WebView2 进程失败。作为 [**ProcessFailed**](/official/Reference/WebView2/WebView2/#processfailed) 事件的 `Kind` 参数传递。镜像 `COREWEBVIEW2_PROCESS_FAILED_KIND` 枚举。

| 常量 | 值 | 描述 |
|------|-----|------|
| **wv2BrowserProcessExited** | 0 | 主浏览器进程意外退出——控件无法恢复。 |
| **wv2RenderProcessExited** | 1 | 渲染器进程意外退出。 |
| **wv2RenderProcessUnresponsive** | 2 | 渲染器进程挂起。 |
| **wv2FrameRenderProcessExited** | 3 | 某个 iframe 的渲染器进程退出。 |
| **wv2UtilityProcessExited** | 4 | 实用程序进程退出。 |
| **wv2SandboxHelperProcessExited** | 5 | 沙盒辅助进程退出。 |
| **wv2GpuProcessExited** | 6 | GPU 进程退出。 |
| **wv2PpapiPluginProcessExited** | 7 | PPAPI 插件进程退出。 |
| **wv2PpapiBrokerProcessExited** | 8 | PPAPI 代理进程退出。 |
| **wv2UnknownProcessExited** | 9 | 未识别的 WebView2 进程退出。 |