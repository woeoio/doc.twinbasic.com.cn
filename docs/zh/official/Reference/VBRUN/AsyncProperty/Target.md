---
title: Target
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/Target
---
# Target

返回正在读取的URL或文件路径，类型为**String**。只读。

语法：*object*.**Target**

*object*
: *必需* 求值为**AsyncProperty**对象的对象表达式。

该值是启动读取时传递给**UserControl.AsyncRead**的*Target*参数——通常是绝对或相对URL，但也接受本地文件路径。它是获取数据的位置，在该读取的每个**AsyncReadProgress**通知和最终的**AsyncReadComplete**事件中保持不变。

### 示例

此示例记录每个挂起读取正在获取的URL。

```vb
Private Sub UserControl_AsyncReadProgress(AsyncProp As AsyncProperty)
    Debug.Print "Fetching " & AsyncProp.PropertyName & " from: " & AsyncProp.Target
End Sub
```

### 另见

- [PropertyName](/official/Reference/VBRUN/AsyncProperty/PropertyName) 属性
- [Value](/official/Reference/VBRUN/AsyncProperty/Value) 属性
- [AsyncType](/official/Reference/VBRUN/AsyncProperty/AsyncType) 属性