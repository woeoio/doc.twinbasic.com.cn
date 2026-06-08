---
title: CCur
parent: Conversion Module
permalink: /tB/Modules/Conversion/CCur
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd4fda6e0-2fbc-4326-83ca-11b5bfa7e545'
  PropagateID: 'd4fda6e0-2fbc-4326-83ca-11b5bfa7e545'
  ReservedCode1: 'e367697b-2b2e-487b-9734-533258635eb2'
  ReservedCode2: 'e367697b-2b2e-487b-9734-533258635eb2'
---

# CCur

将表达式强制转换为 **Currency**。

语法：**CCur(** *expression* **)**

*expression*
: *必需* 范围在 `-922,337,203,685,477.5808` 到 `922,337,203,685,477.5807` 之间的任何有效字符串或数值表达式。

返回类型为 **Currency**。如果 *expression* 超出该范围，将发生运行时错误。

**CCur** 在通常会发生单精度、双精度或整数运算的情况下强制进行货币运算。

**CCur** 是替代 **Val** 进行数据类型转换的区域感知方案。**CCur** 根据系统的区域设置正确识别不同的小数分隔符、千位分隔符和各种货币选项。

### 示例

此示例使用 **CCur** 函数将表达式转换为 **Currency**。

```vb
Dim MyDouble, MyCurr
MyDouble = 543.214588                    ' MyDouble is a Double.
MyCurr = CCur(MyDouble * 2)              ' Convert result of MyDouble * 2
                                          ' (1086.429176) to a
                                          ' Currency (1086.4292).
```

### 另请参阅

- [CBool](/official/Reference/VBA/Conversion/CBool)、[CByte](/official/Reference/VBA/Conversion/CByte)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CDec](/official/Reference/VBA/Conversion/CDec)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数