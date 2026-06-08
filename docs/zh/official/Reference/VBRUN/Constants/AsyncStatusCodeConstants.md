---
title: AsyncStatusCodeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/AsyncStatusCodeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '18e71ea6-d91f-4da9-b52d-6d302f348a79'
  PropagateID: '18e71ea6-d91f-4da9-b52d-6d302f348a79'
  ReservedCode1: '107202da-4d4d-47ba-bdf3-06f914b62171'
  ReservedCode2: '107202da-4d4d-47ba-bdf3-06f914b62171'
---

# AsyncStatusCodeConstants

**AsyncReadProgress**通知期间由[**AsyncProperty.StatusCode**](/official/Reference/VBRUN/AsyncProperty/StatusCode)报告的状态代码，标识下载当前正在进行的步骤。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbAsyncStatusCodeError** | 0 | 读取期间发生错误。 |
| **vbAsyncStatusCodeFindingResource** | 1 | 运行时正在定位目标服务器。 |
| **vbAsyncStatusCodeConnecting** | 2 | 正在建立与目标服务器的连接。 |
| **vbAsyncStatusCodeRedirecting** | 3 | 请求正在重定向到不同的URL。 |
| **vbAsyncStatusCodeBeginDownloadData** | 4 | 资源数据下载即将开始。 |
| **vbAsyncStatusCodeDownloadingData** | 5 | 正在接收资源数据。 |
| **vbAsyncStatusCodeEndDownloadData** | 6 | 资源数据下载已完成。 |
| **vbAsyncStatusCodeUsingCachedCopy** | 10 | 正从本地缓存而非网络提供资源。 |
| **vbAsyncStatusCodeSendingRequest** | 11 | 请求正在发送到服务器。 |
| **vbAsyncStatusCodeMIMETypeAvailable** | 13 | 资源的MIME类型现在已知。 |
| **vbAsyncStatusCodeCacheFileNameAvailable** | 14 | 资源的本地缓存文件名现在已知。 |
| **vbAsyncStatusCodeBeginSyncOperation** | 15 | 操作的同步部分即将开始。 |
| **vbAsyncStatusCodeEndSyncOperation** | 16 | 操作的同步部分已完成。 |