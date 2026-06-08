---
title: ReturnHResult
parent: ErrObject
permalink: /tB/Modules/ErrObject/ReturnHResult
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1528d9a3-f5f5-4c49-8e84-26eb16104dd9'
  PropagateID: '1528d9a3-f5f5-4c49-8e84-26eb16104dd9'
  ReservedCode1: '34b8255e-4e00-4656-b7fa-e00439053590'
  ReservedCode2: '34b8255e-4e00-4656-b7fa-e00439053590'
---

# ReturnHResult

设置当前对象方法正常退出时要返回的 **HRESULT**。只写。

语法：**Err**.**ReturnHResult** **=** *value*

*value*
: 包含要返回的原始 HRESULT 的 **Long**。正值表示非失败结果。

**ReturnHResult** 提供了一种在退出对象方法时显式设置 HRESULT 的机制。这对于返回标准 `S_OK` 成功代码无法传达的非失败（正值）HRESULT 特别有用，这些 HRESULT 指示成功或状态信息。[**Raise**](/official/Reference/VBA/ErrObject/Raise) 用于生成失败 HRESULT（负值），而 **ReturnHResult** 允许设置特定的非失败结果。

调用过程随后可以使用 [**LastHresult**](/official/Reference/VBA/ErrObject/LastHresult) 读取从方法返回的正值 HRESULT。仅在需要时设置 **ReturnHResult**，通常就在方法退出点之前，以确保返回的 HRESULT 是预期的。

### 示例

此示例演示在 COM 对象内成功完成方法后设置非失败 HRESULT。

```vb
Function MyMethod() As Variant
    ' ... perform method actions here ...

    ' Indicate success with a specific non-failure HRESULT.
    Err.ReturnHResult = 123
End Function
```

方法完成后，调用者可以读取 **Err.LastHresult** 来检索此特定的 HRESULT 值。

### 另请参阅

- [LastHresult](/official/Reference/VBA/ErrObject/LastHresult) 属性
- [Number](/official/Reference/VBA/ErrObject/Number) 属性
- [Description](/official/Reference/VBA/ErrObject/Description) 属性
- [Raise](/official/Reference/VBA/ErrObject/Raise) 方法