---
title: RasterOpConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/RasterOpConstants
---
# RasterOpConstants

Raster-operation codes for the *Op* argument of the **PaintPicture** method, controlling how the source bitmap is combined with the destination pixels. The numeric values are the standard Windows GDI ROP codes.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbDstInvert** | &H550009 | Inverts the destination. |
| **vbMergeCopy** | &HC000CA | AND of source and pattern. |
| **vbMergePaint** | &HBB0226 | OR of inverted source and destination. |
| **vbNotSrcCopy** | &H330008 | Copies the inverted source to the destination. |
| **vbNotSrcErase** | &H1100A6 | Inverts the result of OR-ing source and destination. |
| **vbPatCopy** | &HF00021 | Copies the pattern to the destination. |
| **vbPatInvert** | &H5A0049 | XOR of pattern and destination. |
| **vbPatPaint** | &HFB0A09 | OR of pattern and destination, then OR with inverted source. |
| **vbSrcAnd** | &H8800C6 | AND of source and destination. |
| **vbSrcCopy** | &HCC0020 | Copies the source to the destination. |
| **vbSrcErase** | &H440328 | AND of source and inverted destination. |
| **vbSrcInvert** | &H660046 | XOR of source and destination. |
| **vbSrcPaint** | &HEE0086 | OR of source and destination. |
