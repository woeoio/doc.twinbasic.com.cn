---
title: RGB_B
parent: Information Module
permalink: /tB/Modules/Information/RGB_B
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5e26e9f9-fae8-4520-97fd-9eaf1a02020b'
  PropagateID: '5e26e9f9-fae8-4520-97fd-9eaf1a02020b'
  ReservedCode1: '97f78473-1549-46eb-9e99-fa30275b78a8'
  ReservedCode2: '97f78473-1549-46eb-9e99-fa30275b78a8'
---

# RGB_B

从给定的RGBA颜色值中返回蓝色分量（作为**Integer**）。

语法：**RGB_B(** *RGBA* **)**

*RGBA*
: *必需* **Long** RGBA颜色值，类似于[**RGB**](/official/Reference/VBA/Information/RGB)或[**RGBA**](/official/Reference/VBA/Information/RGBA)返回的值。

返回值为0--255范围内的蓝色分量。

### 示例

本示例从使用**RGB**构建的颜色中提取蓝色分量。

```vb
Dim MyColor As Long
Dim BlueComponent As Integer
MyColor = RGB(210, 45, 200)
BlueComponent = RGB_B(MyColor)        ' Returns 200.
```

### 另请参阅

- [RGB](/official/Reference/VBA/Information/RGB)、[RGBA](/official/Reference/VBA/Information/RGBA)函数
- [RGB_R](/official/Reference/VBA/Information/RGB_R)、[RGB_G](/official/Reference/VBA/Information/RGB_G)、[RGBA_A](/official/Reference/VBA/Information/RGBA_A)函数