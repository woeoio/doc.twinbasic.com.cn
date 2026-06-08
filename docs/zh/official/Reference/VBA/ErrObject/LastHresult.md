---
title: LastHresult
parent: ErrObject
permalink: /tB/Modules/ErrObject/LastHresult
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c7071909-7145-412b-b6f7-d903b0cf95ec'
  PropagateID: 'c7071909-7145-412b-b6f7-d903b0cf95ec'
  ReservedCode1: '8c5574dc-7f47-47f6-8e2d-b19f64658fe9'
  ReservedCode2: '8c5574dc-7f47-47f6-8e2d-b19f64658fe9'
---

# LastHresult

返回从 COM 对象方法调用返回的最后一个 **HRESULT**。只读。

语法：**Err**.**LastHresult**

**LastHresult** 允许检查 COM 对象方法调用的返回值，这些返回值不一定在运行时触发错误。负的 HRESULT 值对应于失败，会在 twinBASIC 内部引发运行时错误，然后可以通过 **Err** 对象捕获。正的 HRESULT 值表示成功或非失败状态，不会引发错误，因此不会中断正常程序流程。

要检查成功和非失败状态代码，请在对象方法调用之后立即读取 **LastHresult**；后续调用可能会覆盖其值。

### 示例

```vb
' Assume comObject exposes a method whose HRESULT contains status information.
Sub CheckHresult()
    comObject.SomeMethod
    Dim status As Long
    status = Err.LastHresult
    If status > 0 Then
        ' Handle a non-failure HRESULT (success with status).
    End If
End Sub
```

### 另请参阅

- [ReturnHResult](/official/Reference/VBA/ErrObject/ReturnHResult) 属性
- [LastDllError](/official/Reference/VBA/ErrObject/LastDllError) 属性
- [Number](/official/Reference/VBA/ErrObject/Number) 属性
- [Raise](/official/Reference/VBA/ErrObject/Raise) 方法