---
title: RGB
parent: Information Module
permalink: /tB/Modules/Information/RGB
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '00805f95-532a-4e51-9c54-1e6a8323ec55'
  PropagateID: '00805f95-532a-4e51-9c54-1e6a8323ec55'
  ReservedCode1: '65fe9dbb-ae53-44ca-ab15-6a624e112f71'
  ReservedCode2: '65fe9dbb-ae53-44ca-ab15-6a624e112f71'
---

# RGB

返回一个**Long**，表示RGB颜色值。

语法：**RGB(** *red* **,** *green* **,** *blue* **)**

*red*
: *必需* 0--255范围内的数字，表示颜色的红色分量。

*green*
: *必需* 0--255范围内的数字，表示颜色的绿色分量。

*blue*
: *必需* 0--255范围内的数字，表示颜色的蓝色分量。

接受颜色规范的应用程序方法和属性期望一个表示RGB颜色值的数字：产生特定色调的红、绿、蓝相对强度。任何超过255的参数值都被视为255。

下表列出了一些标准颜色及其包含的红、绿、蓝值：

| 颜色 | 红 | 绿 | 蓝 |
|------|-----|-------|------|
| 黑色 | 0 | 0 | 0 |
| 蓝色 | 0 | 0 | 255 |
| 绿色 | 0 | 255 | 0 |
| 青色 | 0 | 255 | 255 |
| 红色 | 255 | 0 | 0 |
| 品红色 | 255 | 0 | 255 |
| 黄色 | 255 | 255 | 0 |
| 白色 | 255 | 255 | 255 |

### 示例

本示例使用**RGB**构造多个颜色值。

```vb
Dim Red As Long, RGBValue As Long, I As Long
Red = RGB(255, 0, 0)                  ' Pure red.
I = 75
RGBValue = RGB(I, 64 + I, 128 + I)    ' Same as RGB(75, 139, 203).
```

### 另请参阅

- [RGBA](/official/Reference/VBA/Information/RGBA)函数
- [RGB_R](/official/Reference/VBA/Information/RGB_R)、[RGB_G](/official/Reference/VBA/Information/RGB_G)、[RGB_B](/official/Reference/VBA/Information/RGB_B)函数
- [QBColor](/official/Reference/VBA/Information/QBColor)、[TranslateColor](/official/Reference/VBA/Information/TranslateColor)函数