---
title: TextAlignment
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/TextAlignment
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'db029a52-b0bc-4327-be6d-f40f90cc53aa'
  PropagateID: 'db029a52-b0bc-4327-be6d-f40f90cc53aa'
  ReservedCode1: '56315a52-8df2-4ce2-8fe8-880c967f28c7'
  ReservedCode2: '56315a52-8df2-4ce2-8fe8-880c967f28c7'
---

# TextAlignment
在控件边界矩形内绘制文本的水平和垂直对齐。由 [**TextRendering.Alignment**](/official/Reference/CustomControls/Styles/TextRendering#alignment) 使用；每个成员组合三种垂直位置（上、中、下）之一与三种水平位置（左、中、右）之一。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbAlignTopLeft** | 0 | 上边缘，左对齐。 |
| **tbAlignTopCenter** | 1 | 上边缘，水平居中。 |
| **tbAlignTopRight** | 2 | 上边缘，右对齐。 |
| **tbAlignMiddleLeft** | 3 | 垂直居中，左对齐。 |
| **tbAlignMiddleCenter** | 4 | 垂直居中，水平居中。新构造的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 对象的默认值。 |
| **tbAlignMiddleRight** | 5 | 垂直居中，右对齐。 |
| **tbAlignBottomLeft** | 6 | 下边缘，左对齐。 |
| **tbAlignBottomCenter** | 7 | 下边缘，水平居中。 |
| **tbAlignBottomRight** | 8 | 下边缘，右对齐。 |

[**TextRendering.Padding**](/official/Reference/CustomControls/Styles/TextRendering#padding) 在文本周围添加的内边距先应用；对齐然后在内边距区域内定位文本。