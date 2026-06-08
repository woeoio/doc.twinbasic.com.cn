---
title: "运算符"
parent: Language Syntax
nav_order: 7
permalink: /Features/Language/Operators
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '434ad294-bf2a-4bf0-b47f-07409a2ef9da'
  PropagateID: '434ad294-bf2a-4bf0-b47f-07409a2ef9da'
  ReservedCode1: 'eda610c8-2134-4b66-9161-9069d85014d8'
  ReservedCode2: 'eda610c8-2134-4b66-9161-9069d85014d8'
---

# 新运算符

twinBASIC 引入了几个新运算符来增强语言能力。每个运算符的参考页面位于 [参考 → 运算符](/official/Reference/Operators)。

## 位移运算符

[`<<`](/official/Reference/Core/LeftShift) 和 [`>>`](/official/Reference/Core/RightShift) 对数值变量执行左移和右移操作。注意超出可用大小的位移结果为 0，而不是回绕。

## 短路条件运算符

### OrElse 和 AndAlso

使用常规的 [`Or`](/official/Reference/Core/Or) 和 [`And`](/official/Reference/Core/And) 语句时，两边都会被计算，即使并非必要。使用短路运算符时，如果条件已由第一边确定，另一边不会被计算。因此如果你有
`If Condition1 `[`OrElse`](/official/Reference/Core/OrElse)` Condition2 Then`，如果 `Condition1` 为 `True`，则 `Condition2` 不会被计算，由它调用的任何代码也不会运行。配套的合取运算符是 [`AndAlso`](/official/Reference/Core/AndAlso)。

### If() 运算符

短路 [`If()`](/official/Reference/Core/If) 运算符，语法与传统 [`IIf`](/official/Reference/Core/IIf) 相同。这还有一个额外好处：如果变量是相同类型，不会将它们转换为 `Variant`；即 `If(condition, Long, Long)` 中的 `Long` 变量永远不会变成 `Variant`。

## 赋值运算符

`+= -= /= \= *= ^= &= <<= >>=`

这些等价于 `var = var (operand) (var2)`。因此 `i += 1` 等价于 `i = i + 1`。参见 [参考 → 运算符 → 复合赋值](/official/Reference/Operators#compound-assignment) 获取每个运算符的详细信息。

## IsNot 运算符

用于测试对象等价性的 [`Is`](/official/Reference/Core/Is) 运算符的逻辑反义。例如，你不再需要写 `If (object Is Nothing) = False`，现在可以写 `If object `[`IsNot`](/official/Reference/Core/IsNot)` Nothing Then`。

## 示例

```vb
Dim n As Long = &HFF
Dim shifted As Long = n << 4   ' result: &HFF0

n += 1                         ' compound assignment: n = &H100
n <<= 2                        ' left-shift assignment: n = &H400

Dim obj As Object = Nothing
If obj IsNot Nothing Then Debug.Print obj

Dim x As Long = -5
Debug.Print If(x >= 0, x, -x) ' short-circuit If(): prints 5
```