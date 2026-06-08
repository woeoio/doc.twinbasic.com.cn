---
title: wv2WebResourceContext
parent: Enumerations
permalink: /tB/Packages/WebView2/Enumerations/wv2WebResourceContext
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b8b7a85c-e738-4349-a52a-a87bca7529e0'
  PropagateID: 'b8b7a85c-e738-4349-a52a-a87bca7529e0'
  ReservedCode1: 'cb8410e0-4286-42f5-a770-5d207010c78a'
  ReservedCode2: 'cb8410e0-4286-42f5-a770-5d207010c78a'
---

# wv2WebResourceContext
通过 [**AddWebResourceRequestedFilter**](/official/Reference/WebView2/WebView2/#addwebresourcerequestedfilter) 注册（或通过 [**RemoveWebResourceRequestedFilter**](/official/Reference/WebView2/WebView2/#removewebresourcerequestedfilter) 移除）时过滤器应匹配的 HTTP 请求类型。镜像 `COREWEBVIEW2_WEB_RESOURCE_CONTEXT` 枚举。

| 常量 | 值 | 描述 |
|------|-----|------|
| **wv2All** | 0 | 匹配每个请求，不论类型。 |
| **wv2Document** | 1 | 顶级 HTML 文档。 |
| **wv2Stylesheet** | 2 | CSS 样式表。 |
| **wv2Image** | 3 | 图片资源。 |
| **wv2Media** | 4 | 音频或视频资源。 |
| **wv2Font** | 5 | Web 字体资源。 |
| **wv2Script** | 6 | JavaScript 文件。 |
| **wv2XMLHttpRequest** | 7 | `XMLHttpRequest` (XHR) 调用。 |
| **wv2Fetch** | 8 | `fetch()` API 调用。 |
| **wv2TextTrack** | 9 | `<video>` / `<audio>` 的文本轨道。 |
| **wv2EventSource** | 10 | 服务器发送事件流。 |
| **wv2WebSocket** | 11 | WebSocket 连接。 |
| **wv2Manifest** | 12 | Web 应用清单。 |
| **wv2SignedExchange** | 13 | 签名 HTTP 交换资源。 |
| **wv2Ping** | 14 | 超链接 ping 请求。 |
| **wv2CspViolationReport** | 15 | 内容安全策略违规报告。 |
| **wv2Other** | 16 | 不属于其他类型的请求。 |