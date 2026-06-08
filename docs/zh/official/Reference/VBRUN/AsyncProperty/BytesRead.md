---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd58f5b48-a519-4454-9cc8-9b14324344b3'
  PropagateID: 'd58f5b48-a519-4454-9cc8-9b14324344b3'
  ReservedCode1: '007590cd-6061-4e93-aae6-debeb3866cbb'
  ReservedCode2: '007590cd-6061-4e93-aae6-debeb3866cbb'
---

---
title: BytesRead
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/BytesRead
---
# BytesRead

返回目前已读取的字节数，类型为**Long**。只读。

语法：*object*.**BytesRead**

*object*
: *必需* 求值为**AsyncProperty**对象的对象表达式。

该值在连续的**AsyncReadProgress**通知中累积，到**AsyncReadComplete**触发时达到最终总数。当[**BytesMax**](/official/Reference/VBRUN/AsyncProperty/BytesMax)非零时，比率`BytesRead / BytesMax`给出已完成读取的比例。

### 示例

此示例使用**BytesRead**和**BytesMax**记录当前下载进度。

```vb
Private Sub UserControl_AsyncReadProgress(AsyncProp As AsyncProperty)
    If AsyncProp.PropertyName = "Picture" Then
        Debug.Print AsyncProp.BytesRead & " / " & AsyncProp.BytesMax
    End If
End Sub
```

### 另见

- [BytesMax](/official/Reference/VBRUN/AsyncProperty/BytesMax) 属性
- [Status](/official/Reference/VBRUN/AsyncProperty/Status) 属性
- [StatusCode](/official/Reference/VBRUN/AsyncProperty/StatusCode) 属性