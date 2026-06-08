---
title: RGBA_A
parent: Information Module
permalink: /tB/Modules/Information/RGBA_A
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '66c88772-a09c-4ff7-9417-08dfc451deab'
  PropagateID: '66c88772-a09c-4ff7-9417-08dfc451deab'
  ReservedCode1: 'a0323c87-ea51-4c70-914e-426937d74ddd'
  ReservedCode2: 'a0323c87-ea51-4c70-914e-426937d74ddd'
---

# RGBA_A

从给定的RGBA颜色值中返回Alpha分量（作为**Integer**）。

语法：**RGBA_A(** *RGBA* **)**

*RGBA*
: *必需* **Long** RGBA颜色值，类似于[**RGBA**](/official/Reference/VBA/Information/RGBA)返回的值。

返回值为0--255范围内的Alpha（不透明度）分量：**0**为完全透明，**255**为完全不透明。

### 示例

本示例从使用**RGBA**构建的颜色中提取Alpha分量。

```vb
Dim MyColor As Long
Dim AlphaComponent As Integer
MyColor = RGBA(255, 0, 0, 128)
AlphaComponent = RGBA_A(MyColor)      ' Returns 128.
```

### 另请参阅

- [RGBA](/official/Reference/VBA/Information/RGBA)、[RGB](/official/Reference/VBA/Information/RGB)函数
- [RGB_R](/official/Reference/VBA/Information/RGB_R)、[RGB_G](/official/Reference/VBA/Information/RGB_G)、[RGB_B](/official/Reference/VBA/Information/RGB_B)函数