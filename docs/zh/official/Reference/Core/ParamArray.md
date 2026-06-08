---
title: ParamArray
parent: Statements
permalink: /tB/Core/ParamArray
---
# ParamArray

在[**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function)或[**Property**](/official/Reference/Core/Property)过程的参数列表中使用，指示最后一个参数是开放式参数列表。**ParamArray**关键字允许过程在调用点接受任意数量的参数。

语法：
> [ **Public** \| **Private** \| **Friend** ] [ **Static** ] **Sub** \| **Function** \| **Property Get** \| **Property Let** \| **Property Set** *name* **(** [ *arglist*, ] **ParamArray** *varname*[ **()** ] [ **As** *type* ] **)**

*varname*
: 表示**ParamArray**的变量名称；遵循标准变量命名约定。

*type*
: *可选* 必须为**Variant**（显式指定或默认）。在调用点提供的每个参数可以是不同的数据类型，因此**ParamArray**必须始终是**Variant**元素的数组。

**ParamArray**必须是**Sub**、**Function**或**Property Get**过程参数列表中的最后一个参数。在**Property Let**或**Property Set**过程中，它必须在*value*/*reference*参数之前，因此不能是唯一的参数。

**ParamArray**不能与同一参数上的**Optional**、**ByVal**或**ByRef**组合——提供给**ParamArray**的参数始终以引用方式作为**Variant**数组的元素传递。

当调用过程时，调用中提供的每个参数成为**Variant**数组的对应元素。如果没有为**ParamArray**位置提供参数，则数组为空。

::: info
定义了**ParamArray**参数的过程不能使用命名参数语法调用。此类过程的所有参数必须是位置参数。要在调用点省略**ParamArray**位置中的个别元素，请在逗号之间留空。
:::

### 示例

本示例定义了一个使用**ParamArray**对任意数量数值参数求和的函数。

```vb
Function CalcSum(ParamArray Args() As Variant) As Double
    Dim Total As Double, i As Long
    For i = LBound(Args) To UBound(Args)
        Total = Total + CDbl(Args(i))
    Next i
    CalcSum = Total
End Function

' Calls of varying arity:
Debug.Print CalcSum()              ' 0
Debug.Print CalcSum(1)             ' 1
Debug.Print CalcSum(1, 2, 3, 4)    ' 10
Debug.Print CalcSum(1.5, 2.5, 3#)  ' 7
```

**ParamArray**可以跟在普通的位置参数之后；只有固定前导列表之后的参数参与可变参数尾部。

```vb
Function Concat(ByVal Separator As String, ParamArray Parts() As Variant) As String
    Dim i As Long, s As String
    For i = LBound(Parts) To UBound(Parts)
        If i > LBound(Parts) Then s = s & Separator
        s = s & CStr(Parts(i))
    Next i
    Concat = s
End Function

Debug.Print Concat(", ", "one", "two", "three")  ' "one, two, three"
```

### 另请参阅

- [**Sub** 语句](/official/Reference/Core/Sub)
- [**Function** 语句](/official/Reference/Core/Function)
- [**Property** 语句](/official/Reference/Core/Property)
- [**Call** 语句](/official/Reference/Core/Call)