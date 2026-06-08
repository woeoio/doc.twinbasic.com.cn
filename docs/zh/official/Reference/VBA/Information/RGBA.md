---
title: RGBA
parent: Information Module
permalink: /tB/Modules/Information/RGBA
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f7264557-00e2-4607-bab0-4cafbd491943'
  PropagateID: 'f7264557-00e2-4607-bab0-4cafbd491943'
  ReservedCode1: '172f12e1-2962-4d3c-9893-a42dc3f45468'
  ReservedCode2: '172f12e1-2962-4d3c-9893-a42dc3f45468'
---

# RGBA

返回一个**Long**，表示RGBA颜色值，将红、绿、蓝和Alpha分量打包为单个32位值。

语法：**RGBA(** *red* **,** *green* **,** *blue* **,** *alpha* **)**

*red*
: *必需* 0--255范围内的数字，表示颜色的红色分量。

*green*
: *必需* 0--255范围内的数字，表示颜色的绿色分量。

*blue*
: *必需* 0--255范围内的数字，表示颜色的蓝色分量。

*alpha*
: *必需* 0--255范围内的数字，表示颜色的Alpha（不透明度）分量。**0**为完全透明；**255**为完全不透明。

**RGBA**在[**RGB**](/official/Reference/VBA/Information/RGB)基础上添加了Alpha通道，用于接受透明度的API。分量值可以用[**RGB_R**](/official/Reference/VBA/Information/RGB_R)、[**RGB_G**](/official/Reference/VBA/Information/RGB_G)、[**RGB_B**](/official/Reference/VBA/Information/RGB_B)和[**RGBA_A**](/official/Reference/VBA/Information/RGBA_A)读回。

### 示例

本示例使用**RGBA**构建半透明红色。

```vb
Dim TranslucentRed As Long
TranslucentRed = RGBA(255, 0, 0, 128)
```

### 另请参阅

- [RGB](/official/Reference/VBA/Information/RGB)函数
- [RGB_R](/official/Reference/VBA/Information/RGB_R)、[RGB_G](/official/Reference/VBA/Information/RGB_G)、[RGB_B](/official/Reference/VBA/Information/RGB_B)、[RGBA_A](/official/Reference/VBA/Information/RGBA_A)函数