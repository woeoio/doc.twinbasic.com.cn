---
title: BytesMax
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/BytesMax
---
# BytesMax

返回读取的预期总字节数，类型为**Long**。只读。

语法：*object*.**BytesMax**

*object*
: *必需* 求值为**AsyncProperty**对象的对象表达式。

与[**BytesRead**](/official/Reference/VBRUN/AsyncProperty/BytesRead)一起使用，在**AsyncReadProgress**事件期间更新进度指示器。当服务器未公布内容长度时——例如HTTP分块传输——**BytesMax**可能为零，此时直到读取完成才知道总大小，无法显示确定性进度条。

### 示例

此示例在总大小已知时以比率形式显示进度。

```vb
Private Sub UserControl_AsyncReadProgress(AsyncProp As AsyncProperty)
    If AsyncProp.BytesMax > 0 Then
        Dim pct As Long
        pct = CLng(AsyncProp.BytesRead * 100 \ AsyncProp.BytesMax)
        ProgressBar1.Value = pct
    End If
End Sub
```

### 另见

- [BytesRead](/official/Reference/VBRUN/AsyncProperty/BytesRead) 属性
- [Status](/official/Reference/VBRUN/AsyncProperty/Status) 属性
- [StatusCode](/official/Reference/VBRUN/AsyncProperty/StatusCode) 属性