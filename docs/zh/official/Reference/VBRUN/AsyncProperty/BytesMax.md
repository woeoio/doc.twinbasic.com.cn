---
title: BytesMax
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/BytesMax
---
# BytesMax

Returns the total number of bytes expected for the read, as a **Long**. Read-only.

Syntax: *object*.**BytesMax**

*object*
: *required* An object expression that evaluates to an **AsyncProperty** object.

Used together with [**BytesRead**](/official/Reference/VBRUN/AsyncProperty/BytesRead) to update a progress indicator during an **AsyncReadProgress** event. **BytesMax** can be zero when the server has not advertised a content length --- for example with an HTTP chunked transfer --- in which case the total size is not known until the read completes and a determinate progress bar cannot be shown.

### Example

This example shows progress as a ratio when the total size is known.

```vb
Private Sub UserControl_AsyncReadProgress(AsyncProp As AsyncProperty)
    If AsyncProp.BytesMax > 0 Then
        Dim pct As Long
        pct = CLng(AsyncProp.BytesRead * 100 \ AsyncProp.BytesMax)
        ProgressBar1.Value = pct
    End If
End Sub
```

### See Also

- [BytesRead](/official/Reference/VBRUN/AsyncProperty/BytesRead) property
- [Status](/official/Reference/VBRUN/AsyncProperty/Status) property
- [StatusCode](/official/Reference/VBRUN/AsyncProperty/StatusCode) property
