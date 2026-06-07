---
title: StatusCode
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/StatusCode
---
# StatusCode

Returns the current state of the read, as an **AsyncStatusCodeConstants** value. Read-only.

Syntax: *object*.**StatusCode**

*object*
: *required* An object expression that evaluates to an **AsyncProperty** object.

The value identifies the step the read is currently on --- `vbAsyncStatusCodeFindingResource`, `vbAsyncStatusCodeConnecting`, `vbAsyncStatusCodeBeginDownloadData`, `vbAsyncStatusCodeEndDownloadData`, and so on. `vbAsyncStatusCodeError` (0) indicates that the read failed; the [**Status**](/en/official/Reference/VBRUN/AsyncProperty/Status) property contains the matching human-readable description.

### Example

This example checks **StatusCode** during a download and reports an error when the read fails.

```vb
Private Sub UserControl_AsyncReadProgress(AsyncProp As AsyncProperty)
    If AsyncProp.StatusCode = vbAsyncStatusCodeError Then
        MsgBox "Download failed: " & AsyncProp.Status
    End If
End Sub
```

### See Also

- [Status](/en/official/Reference/VBRUN/AsyncProperty/Status) property
- [BytesRead](/en/official/Reference/VBRUN/AsyncProperty/BytesRead) property
- [BytesMax](/en/official/Reference/VBRUN/AsyncProperty/BytesMax) property
