---
title: Abs
parent: Math Module
permalink: /tB/Modules/Math/Abs
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9c8ae17a-3d3f-4de9-96e1-659504e26377'
  PropagateID: '9c8ae17a-3d3f-4de9-96e1-659504e26377'
  ReservedCode1: 'bd5e5de0-4aea-4e99-bfdd-b42911b79cf8'
  ReservedCode2: 'bd5e5de0-4aea-4e99-bfdd-b42911b79cf8'
---

# Abs

返回与传入类型相同的值，指定数字的绝对值。

语法：**Abs(** *number* **)**

*number*
: *必需* 任何有效的数值表达式。如果 *number* 包含 **Null**，则返回 **Null**；如果是未初始化的变量，则返回零。

数字的绝对值是其无符号大小。例如，`Abs(-1)` 和 `Abs(1)` 都返回 `1`。

### 示例

此示例使用 **Abs** 函数计算数字的绝对值。

```vb
Dim MyNumber
MyNumber = Abs(50.3)    ' Returns 50.3.
MyNumber = Abs(-50.3)    ' Returns 50.3.
```

### 另请参阅

- [Sgn](/official/Reference/VBA/Math/Sgn) 函数