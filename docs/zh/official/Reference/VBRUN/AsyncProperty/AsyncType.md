---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9681b5d4-549b-4df0-8cea-6d926e76a881'
  PropagateID: '9681b5d4-549b-4df0-8cea-6d926e76a881'
  ReservedCode1: 'c02ab705-92dc-4808-bfe2-1c00ce31036e'
  ReservedCode2: 'c02ab705-92dc-4808-bfe2-1c00ce31036e'
---

---
title: AsyncType
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/AsyncType
---
# AsyncType

返回正在读取的数据类型，类型为**AsyncTypeConstants**值。只读。

语法：*object*.**AsyncType**

*object*
: *必需* 求值为**AsyncProperty**对象的对象表达式。

该值反映启动读取时传递给**UserControl.AsyncRead**的*AsyncType*参数。它还决定读取完成后[**Value**](/official/Reference/VBRUN/AsyncProperty/Value)的子类型：

- `vbAsyncTypePicture` (0) —— 数据以**stdole.IPictureDisp**形式传递。
- `vbAsyncTypeFile` (1) —— 数据保存到临时文件；**Value**以**String**形式保存其路径。
- `vbAsyncTypeByteArray` (2) —— 数据以**Byte**数组形式传递。

### 示例

此示例在完成事件中检查**AsyncType**并将结果赋给相应属性。

```vb
Private Sub UserControl_AsyncReadComplete(AsyncProp As AsyncProperty)
    If AsyncProp.PropertyName = "Picture" Then
        If AsyncProp.AsyncType = vbAsyncTypePicture Then
            Set UserControl.Picture = AsyncProp.Value
        End If
    End If
End Sub
```

### 另见

- [Value](/official/Reference/VBRUN/AsyncProperty/Value) 属性
- [PropertyName](/official/Reference/VBRUN/AsyncProperty/PropertyName) 属性
- [Target](/official/Reference/VBRUN/AsyncProperty/Target) 属性