---
title: StatusCode
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/StatusCode
---
# StatusCode

返回读取的当前状态，类型为**AsyncStatusCodeConstants**值。只读。

语法：*object*.**StatusCode**

*object*
: *必需* 求值为**AsyncProperty**对象的对象表达式。

该值标识读取当前处于哪个步骤——`vbAsyncStatusCodeFindingResource`、`vbAsyncStatusCodeConnecting`、`vbAsyncStatusCodeBeginDownloadData`、`vbAsyncStatusCodeEndDownloadData`等。`vbAsyncStatusCodeError` (0)表示读取失败；[**Status**](/official/Reference/VBRUN/AsyncProperty/Status)属性包含对应的人类可读描述。

### 示例

此示例在下载期间检查**StatusCode**，在读取失败时报告错误。

```vb
Private Sub UserControl_AsyncReadProgress(AsyncProp As AsyncProperty)
    If AsyncProp.StatusCode = vbAsyncStatusCodeError Then
        MsgBox "Download failed: " & AsyncProp.Status
    End If
End Sub
```

### 另见

- [Status](/official/Reference/VBRUN/AsyncProperty/Status) 属性
- [BytesRead](/official/Reference/VBRUN/AsyncProperty/BytesRead) 属性
- [BytesMax](/official/Reference/VBRUN/AsyncProperty/BytesMax) 属性