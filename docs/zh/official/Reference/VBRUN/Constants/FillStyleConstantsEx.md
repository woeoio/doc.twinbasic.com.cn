---
title: FillStyleConstantsEx
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/FillStyleConstantsEx
---
# FillStyleConstantsEx

Extended fill-pattern values for controls that support twinBASIC's gradient fills in addition to the classic patterns from [**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants). The enumeration is tagged **\[MustBeQualified\]**, so members must be referenced through the enum name (`FillStyleConstantsEx.vbGradientNS`) to avoid clashing with [**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants).

| Constant | Value | Description |
|----------|-------|-------------|
| **vbFSSolid** | 0 | Solid fill in **FillColor**. |
| **vbFSTransparent** | 1 | No fill --- the background shows through. |
| **vbHorizontalLine** | 2 | Horizontal lines. |
| **vbVerticalLine** | 3 | Vertical lines. |
| **vbUpwardDiagonal** | 4 | Upward-sloping diagonal lines. |
| **vbDownwardDiagonal** | 5 | Downward-sloping diagonal lines. |
| **vbCross** | 6 | Crossed horizontal and vertical lines. |
| **vbDiagonalCross** | 7 | Crossed diagonal lines. |
| **vbGradientNS** | 8 | Vertical (north--south) linear gradient. *(twinBASIC addition.)* |
| **vbGradientWE** | 9 | Horizontal (west--east) linear gradient. *(twinBASIC addition.)* |
