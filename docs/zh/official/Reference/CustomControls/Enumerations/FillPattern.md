---
title: FillPattern
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/FillPattern
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4698bf4e-361d-437d-8942-13f1a2962a5c'
  PropagateID: '4698bf4e-361d-437d-8942-13f1a2962a5c'
  ReservedCode1: 'bf1bb0b1-5cde-4aa0-9142-f85211249ad7'
  ReservedCode2: 'bf1bb0b1-5cde-4aa0-9142-f85211249ad7'
---

# FillPattern
标识 [**Fill**](/official/Reference/CustomControls/Styles/Fill) 持有的颜色表如何跨被绘制区域应用。相同的颜色 stops 根据模式产生非常不同的结果——双 stop 的北到南渐变绘制上到下过渡，而相同 stops 的角渐变从一个角向外绘制。由 [**Fill.Pattern**](/official/Reference/CustomControls/Styles/Fill#pattern) 使用。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbPatternNone** | 0 | 无填充——区域保持透明。 |
| **tbGradientNorthToSouth** | 1 | 从上边缘到下边缘的线性渐变。 |
| **tbGradientSouthToNorth** | 2 | 从下边缘到上边缘的线性渐变。 |
| **tbGradientWestToEast** | 3 | 从左边缘跨到右边缘的线性渐变。 |
| **tbGradientEastToWest** | 4 | 从右边缘跨到左边缘的线性渐变。 |
| **tbGradientNorthWestToSouthEast** | 5 | 从左上角到右下角的线性对角渐变。 |
| **tbGradientNorthWestToSouthEastAlt** | 6 | 替代对角：与 **tbGradientNorthWestToSouthEast** 同轴但 stops 关于中心镜像。 |
| **tbGradientNorthEastToSouthWest** | 7 | 从右上角到左下角的线性对角渐变。 |
| **tbGradientNorthEastToSouthWestAlt** | 8 | 替代对角：与 **tbGradientNorthEastToSouthWest** 同轴但镜像。 |
| **tbGradientSouthWestToNorthEast** | 9 | 从左下角到右上角的线性对角渐变。 |
| **tbGradientSouthWestToNorthEastAlt** | 10 | 替代对角：与 **tbGradientSouthWestToNorthEast** 同轴但镜像。 |
| **tbGradientSouthEastToNorthWest** | 11 | 从右下角到左上角的线性对角渐变。 |
| **tbGradientSouthEastToNorthWestAlt** | 12 | 替代对角：与 **tbGradientSouthEastToNorthWest** 同轴但镜像。 |
| **tbGradientCornerTopLeft** | 13 | 从左上角向外辐射的径向风格渐变。 |
| **tbGradientCornerTopRight** | 14 | 从右上角向外辐射的径向风格渐变。 |
| **tbGradientCornerBottomLeft** | 15 | 从左下角向外辐射的径向风格渐变。 |
| **tbGradientCornerBottomRight** | 16 | 从右下角向外辐射的径向风格渐变。 |
| **tbGradientCornerTopLeftAlt** | 17 | 替代左上角渐变，stops 镜像。 |
| **tbGradientCornerTopRightAlt** | 18 | 替代右上角渐变，stops 镜像。 |
| **tbGradientCornerBottomLeftAlt** | 19 | 替代左下角渐变，stops 镜像。 |
| **tbGradientCornerBottomRightAlt** | 20 | 替代右下角渐变，stops 镜像。 |

颜色表来自 [**Fill.ColorPoints**](/official/Reference/CustomControls/Styles/Fill#colorpoints) 内的 [**FillColorPoint**](/official/Reference/CustomControls/Styles/Fill#fillcolorpoint-class) 值数组，插值到配置的 [**Granularity**](/official/Reference/CustomControls/Styles/Fill#granularity)。

相同双 stop 对用三种不同模式绘制产生三种截然不同的结果：

```vb
' Top fades to bottom
pnlOne.BackgroundFill.SetSimplePattern vbWhite, &H99CCFF, _
        Pattern:=tbGradientNorthToSouth

' Left fades to right
pnlTwo.BackgroundFill.SetSimplePattern vbWhite, &H99CCFF, _
        Pattern:=tbGradientWestToEast

' Emanates from the top-left corner
pnlThree.BackgroundFill.SetSimplePattern vbWhite, &H99CCFF, _
        Pattern:=tbGradientCornerTopLeft
```

**tbPatternNone** 产生无渐变的平坦区域——`Fill` 变为完全透明，控件后面的区域可见。