---
title: CornerShape
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/CornerShape
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '67e05ee9-d09a-4ae4-be95-f35ff8d15c1a'
  PropagateID: '67e05ee9-d09a-4ae4-be95-f35ff8d15c1a'
  ReservedCode1: 'fb791ce4-eaa2-4fbc-8466-424a11aa2e58'
  ReservedCode2: 'fb791ce4-eaa2-4fbc-8466-424a11aa2e58'
---

# CornerShape
决定控件单个角的形状。由 [**Corner.Shape**](/official/Reference/CustomControls/Styles/Corners#shape) 使用，对暴露 [**Corners**](/official/Reference/CustomControls/Styles/Corners) 样式对象的任何控件的四个角独立设置。半径数值由 [**Corner.Radius**](/official/Reference/CustomControls/Styles/Corners#radius) 单独提供。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbCurve** | 0 | 四分之一圆圆角；半径给出曲线。 |
| **tbNotched** | 1 | 对角凹口；半径给出切割深度。 |
| **tbCutOut** | 2 | 反向圆角——角区域从控件中*挖空*。 |

[**Corners.SetAll**](/official/Reference/CustomControls/Styles/Corners#setall) 一次性将一种形状应用到每个角；单独设置 [**TopLeft**](/official/Reference/CustomControls/Styles/Corners#topleft) / [**TopRight**](/official/Reference/CustomControls/Styles/Corners#topright) / [**BottomLeft**](/official/Reference/CustomControls/Styles/Corners#bottomleft) / [**BottomRight**](/official/Reference/CustomControls/Styles/Corners#bottomright) 可以混合形状：

```vb
With btnDemo.NormalState.Corners
    .TopLeft.Shape = tbCurve     : .TopLeft.Radius = 16     ' rounded
    .TopRight.Shape = tbNotched  : .TopRight.Radius = 16    ' diagonal cut
    .BottomLeft.Shape = tbCutOut : .BottomLeft.Radius = 16  ' carved-out
    .BottomRight.Shape = tbCurve : .BottomRight.Radius = 0  ' sharp 90°
End With
```

[**Radius**](/official/Reference/CustomControls/Styles/Corners#radius) 为 0 时无论 [**Shape**](/official/Reference/CustomControls/Styles/Corners#shape) 如何都产生直角 90° 角；半径大于等于控件较小维度的一半时 [**tbCurve**](#tbCurve) 角变成触及中线的四分之一圆，这是包的 `Circle` 示例按钮将矩形控件渲染为完整圆形的技术。