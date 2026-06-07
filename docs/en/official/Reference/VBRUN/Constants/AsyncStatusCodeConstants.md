---
title: AsyncStatusCodeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/AsyncStatusCodeConstants
---
# AsyncStatusCodeConstants

Status codes reported by [**AsyncProperty.StatusCode**](/en/official/Reference/VBRUN/AsyncProperty/StatusCode) during an **AsyncReadProgress** notification, identifying which step of the download is currently in progress.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbAsyncStatusCodeError** | 0 | An error has occurred during the read. |
| **vbAsyncStatusCodeFindingResource** | 1 | The runtime is locating the target server. |
| **vbAsyncStatusCodeConnecting** | 2 | A connection to the target server is being established. |
| **vbAsyncStatusCodeRedirecting** | 3 | The request is being redirected to a different URL. |
| **vbAsyncStatusCodeBeginDownloadData** | 4 | The download of the resource data is starting. |
| **vbAsyncStatusCodeDownloadingData** | 5 | The resource data is being received. |
| **vbAsyncStatusCodeEndDownloadData** | 6 | The resource data has finished downloading. |
| **vbAsyncStatusCodeUsingCachedCopy** | 10 | The resource is being served from the local cache rather than the network. |
| **vbAsyncStatusCodeSendingRequest** | 11 | The request is being sent to the server. |
| **vbAsyncStatusCodeMIMETypeAvailable** | 13 | The MIME type of the resource is now known. |
| **vbAsyncStatusCodeCacheFileNameAvailable** | 14 | The local cache filename for the resource is now known. |
| **vbAsyncStatusCodeBeginSyncOperation** | 15 | A synchronous portion of the operation is starting. |
| **vbAsyncStatusCodeEndSyncOperation** | 16 | A synchronous portion of the operation has finished. |
