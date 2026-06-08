---
title: AsyncReadConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/AsyncReadConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5df6a620-d80e-400a-9d74-fe34d4fd98ea'
  PropagateID: '5df6a620-d80e-400a-9d74-fe34d4fd98ea'
  ReservedCode1: '85823009-b744-4c2f-b0d8-a69246b35f6e'
  ReservedCode2: '85823009-b744-4c2f-b0d8-a69246b35f6e'
---

# AsyncReadConstants

**UserControl.AsyncRead**的*AsyncReadOptions*参数的位标志，控制异步下载的缓存、同步和脱机行为。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbAsyncReadSynchronousDownload** | 1 | 调用在下载完成之前不返回。 |
| **vbAsyncReadOfflineOperation** | 8 | 如果资源未缓存，运行时不应连接网络。 |
| **vbAsyncReadForceUpdate** | &H10 | 绕过缓存副本，重新获取资源。 |
| **vbAsyncReadResynchronize** | &H200 | 仅在与服务器重新验证后才使用缓存副本。 |
| **vbAsyncReadGetFromCacheIfNetFail** | &H80000 | 如果网络请求失败，则回退到缓存副本（如有）。 |