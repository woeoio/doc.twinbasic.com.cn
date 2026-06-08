---
title: CBool
parent: Conversion Module
permalink: /tB/Modules/Conversion/CBool
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cfd79e2c-bfcb-4437-89fb-3cef63564be9'
  PropagateID: 'cfd79e2c-bfcb-4437-89fb-3cef63564be9'
  ReservedCode1: 'f0df22d4-11b7-4baf-99c3-5e0555191bc7'
  ReservedCode2: 'f0df22d4-11b7-4baf-99c3-5e0555191bc7'
---

# CBool

将表达式强制转换为 **Boolean**。

语法：**CBool(** *expression* **)**

*expression*
: *必需* 任何有效的字符串或数值表达式。

返回类型为 **Boolean**。如果 *expression* 的计算结果为非零值，**CBool** 返回 **True**；否则返回 **False**。

如果 *expression* 不能被解释为数值，将发生运行时错误。

数据类型转换函数通过表明某个运算的结果应以特定数据类型而非默认数据类型来表达，从而为代码提供文档说明。

### 示例

此示例使用 **CBool** 函数将表达式转换为 **Boolean**。

```vb
Dim A, B, Check
A = 5: B = 5             ' Initialize variables.
Check = CBool(A = B)     ' Check contains True.

A = 0                    ' Define variable.
Check = CBool(A)         ' Check contains False.
```

### 另请参阅

- [CByte](/official/Reference/VBA/Conversion/CByte)、[CInt](/official/Reference/VBA/Conversion/CInt)、[CLng](/official/Reference/VBA/Conversion/CLng)、[CDbl](/official/Reference/VBA/Conversion/CDbl)、[CSng](/official/Reference/VBA/Conversion/CSng)、[CStr](/official/Reference/VBA/Conversion/CStr)、[CVar](/official/Reference/VBA/Conversion/CVar) 函数