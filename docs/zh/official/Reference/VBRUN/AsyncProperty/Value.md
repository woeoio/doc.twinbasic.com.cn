---
title: Value
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/Value
---
# Value

返回异步读取的结果，类型为**Variant**。只读。

语法：*object*.**Value**

*object*
: *必需* 求值为**AsyncProperty**对象的对象表达式。

**Value**仅在**AsyncReadComplete**事件中有意义——在进度通知期间读取尚未完成。**Value**的具体子类型由[**AsyncType**](/official/Reference/VBRUN/AsyncProperty/AsyncType)决定：

- `vbAsyncTypePicture` —— **stdole.IPictureDisp**，可赋给**Picture**属性。
- `vbAsyncTypeFile` —— **String**，保存包含下载数据的临时文件路径。
- `vbAsyncTypeByteArray` —— **Byte**数组（`Byte()`），保存原始字节。

### 示例

此示例在完成事件中读取**Value**并将结果赋给控件的**Picture**属性。

```vb
Private Sub UserControl_AsyncReadComplete(AsyncProp As AsyncProperty)
    If AsyncProp.PropertyName = "Picture" Then
        Set UserControl.Picture = AsyncProp.Value    ' Value是IPictureDisp
    End If
End Sub
```

### 另见

- [AsyncType](/official/Reference/VBRUN/AsyncProperty/AsyncType) 属性
- [PropertyName](/official/Reference/VBRUN/AsyncProperty/PropertyName) 属性
- [Target](/official/Reference/VBRUN/AsyncProperty/Target) 属性