---
title: OrElse
parent: Operators
permalink: /tB/Core/OrElse
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a4a1707b-df3c-4d81-9965-d28aa4711da2'
  PropagateID: 'a4a1707b-df3c-4d81-9965-d28aa4711da2'
  ReservedCode1: 'f3158829-d468-4dbc-9b12-17fda35244e9'
  ReservedCode2: 'f3158829-d468-4dbc-9b12-17fda35244e9'
---

# OrElse 运算符

对两个**Boolean**表达式执行短路逻辑析取。如果左操作数的计算结果为**True**，则不计算右操作数。

::: info
**OrElse**是twinBASIC扩展。经典的[**Or**](/official/Reference/Core/Or)运算符总是计算两个操作数并返回按位结果；**OrElse**仅在需要时计算右操作数，且始终返回**Boolean**。
:::

语法：
> *result* **=** *expression1* **OrElse** *expression2*

*result*
: **Boolean**变量。

*expression1*, *expression2*
: 计算结果为**Boolean**（或可强制转换为**Boolean**）的任意表达式。

如果*expression1*为**True**，则*result*为**True**且不计算*expression2*。否则计算*expression2*，其**Boolean**值成为*result*。

这是标准的"短路OR"。当*expression2*计算开销大，或当*expression1*已经为**True**时*expression2*会失败或产生不需要的副作用时，此运算符非常有用。

### 示例

当较简单的测试已经证明条件时，跳过开销大的查找：

```vb
If IsCached(key) OrElse FetchFromDisk(key) Then
    ' FetchFromDisk is only called when IsCached returned False.
    Process key
End If
```

与使用**Or**的等效代码比较，后者即使缓存查找已成功也会始终调用`FetchFromDisk`：

```vb
' Inefficient - FetchFromDisk runs even when IsCached returned True.
If IsCached(key) Or FetchFromDisk(key) Then
    Process key
End If
```

### 另请参阅

- [**AndAlso** 运算符](/official/Reference/Core/AndAlso)
- [**Or** 运算符](/official/Reference/Core/Or)
- [运算符](/official/Reference/Operators)