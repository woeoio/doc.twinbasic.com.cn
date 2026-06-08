---
title: Atn
parent: Math Module
permalink: /tB/Modules/Math/Atn
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1e168d18-ae7a-4193-b7b4-caebfc6932a6'
  PropagateID: '1e168d18-ae7a-4193-b7b4-caebfc6932a6'
  ReservedCode1: '81e9b273-aa25-4331-adae-55f451e798e5'
  ReservedCode2: '81e9b273-aa25-4331-adae-55f451e798e5'
---

# Atn

返回一个 **Double**，指定数字的反正切值。

语法：**Atn(** *number* **)**

*number*
: *必需* **Double** 或任何有效的数值表达式。

**Atn** 函数取直角三角形两边的比值（*number*），返回对应的弧度角。该比值是对边长度除以邻边长度。

结果范围为 -pi/2 到 pi/2 弧度。要将角度转换为弧度，将角度乘以 pi/180。要将弧度转换为角度，将弧度乘以 180/pi。

::: info
**Atn** 是 [**Tan**](/official/Reference/VBA/Math/Tan) 的反三角函数，后者以角度为参数返回直角三角形两边的比值。不要将 **Atn** 与余切混淆，余切是正切的简单倒数（1/正切）。
:::

### 示例

此示例使用 **Atn** 推导 pi 的近似值。

```vb
Const Pi As Double = Atn(1) * 4    ' pi ≈ 3.14159265358979
Debug.Print Pi
Debug.Print Pi / 180               ' one degree in radians ≈ 0.0174532925199433
```

### 另请参阅

- [Cos](/official/Reference/VBA/Math/Cos)、[Sin](/official/Reference/VBA/Math/Sin)、[Tan](/official/Reference/VBA/Math/Tan) 函数