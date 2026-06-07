---
title: TextAlignment
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/TextAlignment
---
# TextAlignment
Horizontal and vertical alignment of text drawn inside a control's bounding rectangle. Used by [**TextRendering.Alignment**](/en/official/Reference/CustomControls/Styles/TextRendering#alignment); each member combines one of three vertical positions (top, middle, bottom) with one of three horizontal positions (left, centre, right).

| Constant | Value | Description |
|----------|-------|-------------|
| **tbAlignTopLeft** | 0 | Top edge, left-aligned. |
| **tbAlignTopCenter** | 1 | Top edge, horizontally centred. |
| **tbAlignTopRight** | 2 | Top edge, right-aligned. |
| **tbAlignMiddleLeft** | 3 | Vertically centred, left-aligned. |
| **tbAlignMiddleCenter** | 4 | Vertically centred, horizontally centred. The default for newly-constructed [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering) objects. |
| **tbAlignMiddleRight** | 5 | Vertically centred, right-aligned. |
| **tbAlignBottomLeft** | 6 | Bottom edge, left-aligned. |
| **tbAlignBottomCenter** | 7 | Bottom edge, horizontally centred. |
| **tbAlignBottomRight** | 8 | Bottom edge, right-aligned. |

The padding added around the text by [**TextRendering.Padding**](/en/official/Reference/CustomControls/Styles/TextRendering#padding) is applied first; the alignment then positions the text inside the padded region.
