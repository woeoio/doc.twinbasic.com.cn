---
title: RasterOpConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/RasterOpConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd7ac7ad0-cf7d-409c-a59b-1d496f81e3a4'
  PropagateID: 'd7ac7ad0-cf7d-409c-a59b-1d496f81e3a4'
  ReservedCode1: 'e22381a8-6c1a-44a6-ae31-dca4fb76da75'
  ReservedCode2: 'e22381a8-6c1a-44a6-ae31-dca4fb76da75'
---

# RasterOpConstants

**PaintPicture**方法的*Op*参数的光栅操作代码，控制源位图如何与目标像素组合。数值为标准Windows GDI ROP代码。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbDstInvert** | &H550009 | 反转目标。 |
| **vbMergeCopy** | &HC000CA | 源与图案的与运算。 |
| **vbMergePaint** | &HBB0226 | 反转源与目标的或运算。 |
| **vbNotSrcCopy** | &H330008 | 将反转的源复制到目标。 |
| **vbNotSrcErase** | &H1100A6 | 反转源与目标或运算的结果。 |
| **vbPatCopy** | &HF00021 | 将图案复制到目标。 |
| **vbPatInvert** | &H5A0049 | 图案与目标的异或。 |
| **vbPatPaint** | &HFB0A09 | 图案与目标的或运算，再与反转源或运算。 |
| **vbSrcAnd** | &H8800C6 | 源与目标的与运算。 |
| **vbSrcCopy** | &HCC0020 | 将源复制到目标。 |
| **vbSrcErase** | &H440328 | 源与反转目标的与运算。 |
| **vbSrcInvert** | &H660046 | 源与目标的异或。 |
| **vbSrcPaint** | &HEE0086 | 源与目标的或运算。 |