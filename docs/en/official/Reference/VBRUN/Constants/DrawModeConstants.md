---
title: DrawModeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/DrawModeConstants
---
# DrawModeConstants

GDI raster-operation values for the **DrawMode** property, controlling how the pen colour is combined with the existing pixels when drawing with **PSet**, **Line**, **Circle**, and similar methods.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbBlackness** | 1 | Output is black. |
| **vbNotMergePen** | 2 | Inverse of **vbMergePen**. |
| **vbMaskNotPen** | 3 | Combination of the colours common to the background and the inverse of the pen. |
| **vbNotCopyPen** | 4 | Inverse of **vbCopyPen**. |
| **vbMaskPenNot** | 5 | Combination of the pen and the inverse of the screen. |
| **vbInvert** | 6 | Inverse of the existing screen colour. |
| **vbXorPen** | 7 | XOR of the pen and the screen. |
| **vbNotMaskPen** | 8 | Inverse of **vbMaskPen**. |
| **vbMaskPen** | 9 | Combination of the colours common to both the pen and the screen. |
| **vbNotXorPen** | 10 | Inverse of **vbXorPen**. |
| **vbNop** | 11 | No drawing --- the screen is left unchanged. |
| **vbMergeNotPen** | 12 | Combination of the screen and the inverse of the pen. |
| **vbCopyPen** | 13 | Output is the pen colour (the default). |
| **vbMergePenNot** | 14 | Combination of the pen and the inverse of the screen. |
| **vbMergePen** | 15 | Combination of the pen colour and the screen colour. |
| **vbWhiteness** | 16 | Output is white. |
