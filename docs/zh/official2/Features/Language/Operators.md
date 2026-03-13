---
title: 操作符
parent: 语言语法
nav_order: 7
permalink: /Features/Language/Operators
---

# 新操作符
twinBASIC 引入了几个新操作符来增强语言功能。

## 位移操作符

`<<` 和 `>>` 对数值变量执行左移和右移操作。请注意，超出可用大小的移位结果为 0，而不是回绕。

## 短路条件操作符

### OrElse 和 AndAlso

使用常规的`Or`和`And`语句时，即使不必要，双方都会被评估。使用短路操作符时，如果条件由第一方解决，则不会评估另一方。因此，如果您有：
`If Condition1 OrElse Condition2 Then`，如果 Condition1 为`True`，则不会评估`Condition2`，并且不会运行由其调用的任何代码。

### If() 操作符

具有与传统`IIf`相同语法的短路`If()`操作符。这还有一个额外好处，如果变量是相同类型，则不会将其转换为`Variant`；即`If(条件, Long, Long)`中的`Long`变量永远不会变成`Variant`。

## 赋值操作符

`+= -= /= *= ^= &= <<= >>=`

这些等同于`变量 = 变量 (操作符) (变量2)`。因此`i += 1`等同于`i = i + 1`。

## IsNot 操作符

用于测试对象等价性的*Is*操作符的逻辑相反。例如，您可以写`If object IsNot Nothing Then`，而不是`If (object Is Nothing) = False`。