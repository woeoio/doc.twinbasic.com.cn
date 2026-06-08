---
title: RGB_G
parent: Information Module
permalink: /tB/Modules/Information/RGB_G
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0b34f193-57ce-4561-963b-8e9ca4ba6d0c'
  PropagateID: '0b34f193-57ce-4561-963b-8e9ca4ba6d0c'
  ReservedCode1: '6b600d03-84a8-43c2-97a0-f7e3907498e7'
  ReservedCode2: '6b600d03-84a8-43c2-97a0-f7e3907498e7'
---

# RGB_G

从给定的RGBA颜色值中返回绿色分量（作为**Integer**）。

语法：**RGB_G(** *RGBA* **)**

*RGBA*
: *必需* **Long** RGBA颜色值，类似于[**RGB**](/official/Reference/VBA/Information/RGB)或[**RGBA**](/official/Reference/VBA/Information/RGBA)返回的值。

返回值为0--255范围内的绿色分量。

### 示例

本示例从使用**RGB**构建的颜色中提取绿色分量。

```vb
Dim MyColor As Long
Dim GreenComponent As Integer
MyColor = RGB(75, 125, 255)
GreenComponent = RGB_G(MyColor)       ' Returns 125.
```

### 另请参阅

- [RGB](/official/Reference/VBA/Information/RGB)、[RGBA](/official/Reference/VBA/Information/RGBA)函数
- [RGB_R](/official/Reference/VBA/Information/RGB_R)、[RGB_B](/official/Reference/VBA/Information/RGB_B)、[RGBA_A](/official/Reference/VBA/Information/RGBA_A)函数