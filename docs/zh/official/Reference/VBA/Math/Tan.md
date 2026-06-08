---
title: Tan
parent: Math Module
permalink: /tB/Modules/Math/Tan
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c89c7616-d719-418f-a9ac-c65c402d7bbf'
  PropagateID: 'c89c7616-d719-418f-a9ac-c65c402d7bbf'
  ReservedCode1: 'd7dcb332-5d94-486c-a6ef-b9c9024cdf98'
  ReservedCode2: 'd7dcb332-5d94-486c-a6ef-b9c9024cdf98'
---

# Tan

返回一个 **Double**，指定角度的正切值。

语法：**Tan(** *number* **)**

*number*
: *必需* **Double** 或任何表示弧度角的有效数值表达式。

**Tan** 取一个角度，返回直角三角形两边的比值。该比值是对边长度除以邻边长度。

要将角度转换为弧度，将角度乘以 pi/180。要将弧度转换为角度，将弧度乘以 180/pi。

### 示例

此示例使用 **Tan** 函数返回角度的正切值。

```vb
Dim MyAngle, MyCotangent
MyAngle = 1.3    ' Define angle in radians.
MyCotangent = 1 / Tan(MyAngle)    ' Calculate cotangent.
```

### 另请参阅

- [Atn](/official/Reference/VBA/Math/Atn)、[Cos](/official/Reference/VBA/Math/Cos)、[Sin](/official/Reference/VBA/Math/Sin) 函数