---
title: DrawModeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/DrawModeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '27255747-f068-4c53-bd41-3ed3fda0d8f8'
  PropagateID: '27255747-f068-4c53-bd41-3ed3fda0d8f8'
  ReservedCode1: '45cac769-0379-4859-a628-09f9ecf51dad'
  ReservedCode2: '45cac769-0379-4859-a628-09f9ecf51dad'
---

# DrawModeConstants

**DrawMode**属性的GDI光栅操作值，控制使用**PSet**、**Line**、**Circle**和类似方法绘图时画笔颜色如何与现有像素组合。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbBlackness** | 1 | 输出为黑色。 |
| **vbNotMergePen** | 2 | **vbMergePen**的反转。 |
| **vbMaskNotPen** | 3 | 背景与画笔反转的共有颜色组合。 |
| **vbNotCopyPen** | 4 | **vbCopyPen**的反转。 |
| **vbMaskPenNot** | 5 | 画笔与屏幕反转的组合。 |
| **vbInvert** | 6 | 现有屏幕颜色的反转。 |
| **vbXorPen** | 7 | 画笔与屏幕的异或。 |
| **vbNotMaskPen** | 8 | **vbMaskPen**的反转。 |
| **vbMaskPen** | 9 | 画笔与屏幕共有颜色的组合。 |
| **vbNotXorPen** | 10 | **vbXorPen**的反转。 |
| **vbNop** | 11 | 不绘图 --- 屏幕保持不变。 |
| **vbMergeNotPen** | 12 | 屏幕与画笔反转的组合。 |
| **vbCopyPen** | 13 | 输出为画笔颜色（默认）。 |
| **vbMergePenNot** | 14 | 画笔与屏幕反转的组合。 |
| **vbMergePen** | 15 | 画笔颜色与屏幕颜色的组合。 |
| **vbWhiteness** | 16 | 输出为白色。 |