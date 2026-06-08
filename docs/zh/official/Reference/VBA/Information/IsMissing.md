---
title: IsMissing
parent: Information Module
permalink: /tB/Modules/Information/IsMissing
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '111d270b-915e-43b5-85e8-00ae2504572e'
  PropagateID: '111d270b-915e-43b5-85e8-00ae2504572e'
  ReservedCode1: '1a9f6767-4a59-4ce8-b0fd-1875f237d493'
  ReservedCode2: '1a9f6767-4a59-4ce8-b0fd-1875f237d493'
---

# IsMissing

返回一个**Boolean**，指示是否已将可选**Variant**参数传递给过程。

语法：**IsMissing(** *argname* **)**

*argname*
: *必需* 可选**Variant**过程参数的名称。

如果未为指定参数提供值，**IsMissing**返回**True**；否则返回**False**。在代码的其他位置使用缺失的参数可能会引发运行时错误。

如果对**ParamArray**参数使用**IsMissing**，它始终返回**False**。要检测空的**ParamArray**，请测试数组的上界是否小于其下界。

**IsMissing**不适用于**Integer**或**Double**等简单数据类型：与**Variant**不同，它们没有"缺失"标志的机制。对于有类型的可选参数，请指定默认值——如果省略参数，它将采用该默认值。在许多情况下，默认值形式完全消除了单独的**IsMissing**检查的需要。

```vb
Sub MySub(Optional ByVal MyVar As String = "specialvalue")
    If MyVar = "specialvalue" Then
        ' MyVar was omitted.
    End If
End Sub
```

### 示例

本示例使用**IsMissing**检查是否已将可选参数传递给用户自定义过程。

```vb
Dim ReturnValue As Variant
ReturnValue = ReturnTwice()           ' Returns Null.
ReturnValue = ReturnTwice(2)          ' Returns 4.

Function ReturnTwice(Optional A As Variant) As Variant
    If IsMissing(A) Then
        ReturnTwice = Null            ' Argument missing — return Null.
    Else
        ReturnTwice = A * 2           ' Otherwise return twice the value.
    End If
End Function
```

### 另请参阅

- [IsNull](/official/Reference/VBA/Information/IsNull)、[IsEmpty](/official/Reference/VBA/Information/IsEmpty)函数