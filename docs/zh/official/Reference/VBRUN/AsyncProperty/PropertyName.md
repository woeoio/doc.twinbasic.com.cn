---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9f058fc5-7623-443c-afa7-9bda6094fd6f'
  PropagateID: '9f058fc5-7623-443c-afa7-9bda6094fd6f'
  ReservedCode1: '53e3e2a4-9301-4424-8d08-0414db4c5bd6'
  ReservedCode2: '53e3e2a4-9301-4424-8d08-0414db4c5bd6'
---

---
title: PropertyName
parent: AsyncProperty
permalink: /tB/Packages/VBRUN/AsyncProperty/PropertyName
---
# PropertyName

返回执行读取的属性名称，类型为**String**。只读。

语法：*object*.**PropertyName**

*object*
: *必需* 求值为**AsyncProperty**对象的对象表达式。

该值是启动读取时传递给**UserControl.AsyncRead**的*PropertyName*参数。用户控件可能同时有多个挂起的读取，因此事件处理器通常在**Select Case**中使用**PropertyName**来决定读取完成时如何处理[**Value**](/official/Reference/VBRUN/AsyncProperty/Value)——例如将结果赋给控件的哪个属性。

### 示例

此示例使用**PropertyName**将完成的读取路由到正确的属性。

```vb
Private Sub UserControl_AsyncReadComplete(AsyncProp As AsyncProperty)
    Select Case AsyncProp.PropertyName
        Case "Picture"
            Set UserControl.Picture = AsyncProp.Value
        Case "Data"
            mData = AsyncProp.Value
    End Select
End Sub
```

### 另见

- [Target](/official/Reference/VBRUN/AsyncProperty/Target) 属性
- [Value](/official/Reference/VBRUN/AsyncProperty/Value) 属性
- [AsyncType](/official/Reference/VBRUN/AsyncProperty/AsyncType) 属性