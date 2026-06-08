---
title: Cos
parent: Math Module
permalink: /tB/Modules/Math/Cos
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '927b3383-bf7f-4400-a811-567edbb80251'
  PropagateID: '927b3383-bf7f-4400-a811-567edbb80251'
  ReservedCode1: '2f029ad2-6c55-4833-9190-1fdfc6dfe142'
  ReservedCode2: '2f029ad2-6c55-4833-9190-1fdfc6dfe142'
---

# Cos

返回一个 **Double**，指定角度的余弦值。

语法：**Cos(** *number* **)**

*number*
: *必需* **Double** 或任何表示弧度角的有效数值表达式。

**Cos** 函数取一个角度，返回直角三角形两边的比值。该比值是邻边长度除以斜边长度。结果范围为 -1 到 1。

要将角度转换为弧度，将角度乘以 pi/180。要将弧度转换为角度，将弧度乘以 180/pi。

### 示例

此示例使用 **Cos** 函数返回角度的余弦值。

```vb
Dim MyAngle, MySecant
MyAngle = 1.3    ' Define angle in radians.
MySecant = 1 / Cos(MyAngle)    ' Calculate secant.
```

### 另请参阅

- [Atn](/official/Reference/VBA/Math/Atn)、[Sin](/official/Reference/VBA/Math/Sin)、[Tan](/official/Reference/VBA/Math/Tan) 函数