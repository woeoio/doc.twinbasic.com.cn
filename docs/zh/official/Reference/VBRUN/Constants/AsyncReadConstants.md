---
title: AsyncReadConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/AsyncReadConstants
---
# AsyncReadConstants

Bit flags for the *AsyncReadOptions* argument of **UserControl.AsyncRead**, controlling caching, synchronisation, and offline behaviour for an asynchronous download.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbAsyncReadSynchronousDownload** | 1 | The call does not return until the download has finished. |
| **vbAsyncReadOfflineOperation** | 8 | The runtime should not contact the network if the resource is not already cached. |
| **vbAsyncReadForceUpdate** | &H10 | The cached copy is bypassed and the resource is fetched fresh. |
| **vbAsyncReadResynchronize** | &H200 | The cached copy is used only after revalidating it against the server. |
| **vbAsyncReadGetFromCacheIfNetFail** | &H80000 | If the network request fails, fall back to the cached copy if any. |
