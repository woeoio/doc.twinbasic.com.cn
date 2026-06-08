---
title: FillStyleConstantsEx
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/FillStyleConstantsEx
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0e168d7c-6f44-45ce-a06c-ef539c3145a0'
  PropagateID: '0e168d7c-6f44-45ce-a06c-ef539c3145a0'
  ReservedCode1: 'd523b53c-a0ee-409f-86e3-7306bbacee68'
  ReservedCode2: 'd523b53c-a0ee-409f-86e3-7306bbacee68'
---

# FillStyleConstantsEx

支持twinBASIC渐变填充（除[**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants)中的经典图案外）的控件的扩展填充图案值。该枚举标记为**\[MustBeQualified\]**，因此成员必须通过枚举名引用（`FillStyleConstantsEx.vbGradientNS`），以避免与[**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants)冲突。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbFSSolid** | 0 | 以**FillColor**纯色填充。 |
| **vbFSTransparent** | 1 | 不填充 --- 背景可见。 |
| **vbHorizontalLine** | 2 | 水平线。 |
| **vbVerticalLine** | 3 | 垂直线。 |
| **vbUpwardDiagonal** | 4 | 上斜对角线。 |
| **vbDownwardDiagonal** | 5 | 下斜对角线。 |
| **vbCross** | 6 | 十字交叉线。 |
| **vbDiagonalCross** | 7 | 对角交叉线。 |
| **vbGradientNS** | 8 | 垂直（南北）线性渐变。*(twinBASIC新增)* |
| **vbGradientWE** | 9 | 水平（东西）线性渐变。*(twinBASIC新增)* |