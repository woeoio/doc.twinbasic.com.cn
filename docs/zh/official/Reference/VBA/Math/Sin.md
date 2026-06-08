---
title: Sin
parent: Math Module
permalink: /tB/Modules/Math/Sin
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c88e3200-4bbb-41c3-bc71-1ea5c3b90002'
  PropagateID: 'c88e3200-4bbb-41c3-bc71-1ea5c3b90002'
  ReservedCode1: 'ad375a9c-ff6f-424d-a02c-6863d3c40ad8'
  ReservedCode2: 'ad375a9c-ff6f-424d-a02c-6863d3c40ad8'
---

# Sin

返回一个 **Double**，指定角度的正弦值。

语法：**Sin(** *number* **)**

*number*
: *必需* **Double** 或任何表示弧度角的有效数值表达式。

**Sin** 函数取一个角度，返回直角三角形两边的比值。该比值是对边长度除以斜边长度。结果范围为 -1 到 1。

要将角度转换为弧度，将角度乘以 pi/180。要将弧度转换为角度，将弧度乘以 180/pi。

### 示例

此示例使用 **Sin** 函数返回角度的正弦值。

```vb
Dim MyAngle, MyCosecant
MyAngle = 1.3    ' Define angle in radians.
MyCosecant = 1 / Sin(MyAngle)    ' Calculate cosecant.
```

### 另请参阅

- [Atn](/official/Reference/VBA/Math/Atn)、[Cos](/official/Reference/VBA/Math/Cos)、[Tan](/official/Reference/VBA/Math/Tan) 函数