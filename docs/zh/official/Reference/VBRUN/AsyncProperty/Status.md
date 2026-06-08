---
title: Status
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/Status
---
# Status

返回读取当前状态的人类可读描述，类型为**String**。只读。

语法：*object*.**Status**

*object*
: *必需* 求值为**AsyncProperty**对象的对象表达式。

该值是简短消息，如`"Finding resource"`、`"Connecting"`或`"Receiving response"`，适合在读取进行中时显示在状态栏或工具提示中。用于编程逻辑时，请改为检查[**StatusCode**](/official/Reference/VBRUN/AsyncProperty/StatusCode)——其值是稳定的，而**Status**为人类阅读设计，可能经过本地化。

### 示例

此示例在下载期间在标签中显示人类可读的状态字符串。

```vb
Private Sub UserControl_AsyncReadProgress(AsyncProp As AsyncProperty)
    lblStatus.Caption = AsyncProp.Status
End Sub
```

### 另见

- [StatusCode](/official/Reference/VBRUN/AsyncProperty/StatusCode) 属性
- [BytesRead](/official/Reference/VBRUN/AsyncProperty/BytesRead) 属性
- [BytesMax](/official/Reference/VBRUN/AsyncProperty/BytesMax) 属性