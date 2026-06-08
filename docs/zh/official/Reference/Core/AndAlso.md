---
title: AndAlso
parent: Operators
permalink: /tB/Core/AndAlso
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'caa6db13-937f-4af2-b8d3-f93bc955bfd1'
  PropagateID: 'caa6db13-937f-4af2-b8d3-f93bc955bfd1'
  ReservedCode1: '87ca1fee-cdc0-4e32-bc54-963df2c0b594'
  ReservedCode2: '87ca1fee-cdc0-4e32-bc54-963df2c0b594'
---

# AndAlso 运算符

对两个 **Boolean** 表达式执行短路逻辑合取运算。如果左操作数求值为 **False**，则不再对右操作数求值。

::: info
**AndAlso** 是twinBASIC扩展。经典 [**And**](/official/Reference/Core/And) 运算符总是对两个操作数求值并返回按位结果；**AndAlso** 仅在需要时才对右操作数求值，且始终返回 **Boolean**。
:::

语法：
> *result* **=** *expression1* **AndAlso** *expression2*

*result*
: **Boolean** 变量。

*expression1*, *expression2*
: 任何求值为 **Boolean**（或可强制转换为 **Boolean**）的表达式。

如果 *expression1* 为 **False**，则 *result* 为 **False**，且不再求值 *expression2*。否则对 *expression2* 求值，其 **Boolean** 值即为 *result*。

这是标准的"短路AND"。当 *expression2* 依赖于 *expression1* 成功时非常有用——例如，空值检查保护属性访问。

### 示例

通过先验证对象引用来保护属性访问：

```vb
If obj IsNot Nothing AndAlso obj.IsReady Then
    ' Safe to call - obj.IsReady is only evaluated when obj is non-Nothing.
    obj.DoWork
End If
```

与使用 **And** 的等价代码对比，当 `obj` 为 **Nothing** 时会崩溃，因为两个操作数总是被求值：

```vb
' WRONG - obj.IsReady is evaluated even when obj is Nothing.
If obj IsNot Nothing And obj.IsReady Then
    obj.DoWork
End If
```

### 另请参阅

- [**OrElse** 运算符](/official/Reference/Core/OrElse)
- [**And** 运算符](/official/Reference/Core/And)
- [运算符](/official/Reference/Operators)