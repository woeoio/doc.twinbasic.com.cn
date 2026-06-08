---
title: RGB_R
parent: Information Module
permalink: /tB/Modules/Information/RGB_R
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b38bf54a-3e64-4053-8b2d-7aa28cd67c07'
  PropagateID: 'b38bf54a-3e64-4053-8b2d-7aa28cd67c07'
  ReservedCode1: 'ce4c6b09-fc00-4218-8554-e9dc70ba869c'
  ReservedCode2: 'ce4c6b09-fc00-4218-8554-e9dc70ba869c'
---

# RGB_R

从给定的RGBA颜色值中返回红色分量（作为**Integer**）。

语法：**RGB_R(** *RGBA* **)**

*RGBA*
: *必需* **Long** RGBA颜色值，类似于[**RGB**](/official/Reference/VBA/Information/RGB)或[**RGBA**](/official/Reference/VBA/Information/RGBA)返回的值。

返回值为0--255范围内的红色分量。

### 示例

本示例从使用**RGB**构建的颜色中提取红色分量。

```vb
Dim MyColor As Long
Dim RedComponent As Integer
MyColor = RGB(255, 100, 150)
RedComponent = RGB_R(MyColor)         ' Returns 255.
```

### 另请参阅

- [RGB](/official/Reference/VBA/Information/RGB)、[RGBA](/official/Reference/VBA/Information/RGBA)函数
- [RGB_G](/official/Reference/VBA/Information/RGB_G)、[RGB_B](/official/Reference/VBA/Information/RGB_B)、[RGBA_A](/official/Reference/VBA/Information/RGBA_A)函数