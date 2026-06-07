---
title: TextRendering
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/TextRendering
---

# TextRendering class
Aggregates everything needed to draw a piece of text inside a control: the font, the padding, the fill that supplies the text colour, an optional array of outlines, the alignment within the available area, and the overflow behaviour. Accessed as `<state>.TextRendering`, [**WaynesLabel.TextRendering**](/official/Reference/CustomControls/WaynesLabel#textrendering), and [**CellRenderingOptions.TextRendering**](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions#textrendering).

A newly-constructed **TextRendering** pre-sets its [**Fill**](#fill) to solid black so that text is immediately visible.

```vb
With lblTitle.TextRendering
    .Font.Size = 18
    .Font.Weight = tbBold
    .Alignment = tbAlignMiddleCenter
    .Fill.ColorPoints.SetSolidColor vbWhite
End With
```

[**Fill**](#fill) can hold a gradient just as well as a solid colour, so glyphs themselves can be painted with a top-to-bottom or corner-to-corner colour transition. [**Outlines**](#outlines) is an array of [**Border**](/official/Reference/CustomControls/Styles/Borders#border-class) elements stroked around the glyphs --- a single thin black outline gives a "stickered" look; layering several outlines with different [**StrokeSize**](/official/Reference/CustomControls/Styles/Borders#strokesize) values produces a glow or drop-shadow:

```vb
With lblBanner.TextRendering
    .Font.Size = 32
    .Font.Weight = tbBold
    .Alignment = tbAlignMiddleCenter
    .Fill.SetSimplePattern vbWhite, &HCCCCFF, _
            Pattern:=tbGradientNorthToSouth
    Dim outline(0 To 0) As Border
    Set outline(0) = New Border
    outline(0).StrokeSize = 2
    outline(0).Fill.ColorPoints.SetSolidColor vbBlack
    .Outlines = outline
End With
```

Setting [**OverflowMode**](#overflowmode) to **tbShrinkToFit** scales the glyphs down rather than truncating with an ellipsis when the text is too long for the available width --- useful on fixed-width labels whose caption is set at runtime from data of unpredictable length.

## Properties

### Alignment

How the text is positioned horizontally and vertically within the available area (after [**Padding**](#padding) is applied). A member of [**TextAlignment**](/official/Reference/CustomControls/Enumerations/TextAlignment). Default: **tbAlignMiddleCenter**.

### Fill

The [**Fill**](/official/Reference/CustomControls/Styles/Fill) that supplies the text colour or gradient. Pre-set to a solid black fill on construction.

### Font

The [**FontStyle**](#fontstyle-class) sub-object that gives the font size, weight, italic / underline / strikeout flags.

### OverflowMode

How text longer than the available width is truncated. A member of [**TextOverflowMode**](/official/Reference/CustomControls/Enumerations/TextOverflowMode). Default: **tbAppendEllipsis**.

### Outlines

An array of [**Border**](/official/Reference/CustomControls/Styles/Borders#border-class) elements describing one or more outlines that are stroked around the rendered glyphs. Read-write; an uninitialised array means no outline.

### Padding

The [**Padding**](/official/Reference/CustomControls/Styles/Padding) sub-object holding per-side padding inserted around the text inside its bounding rectangle. The [**Alignment**](#alignment) is applied to the padded region.

## Events

### OnChanged

Raised when [**Alignment**](#alignment) or [**OverflowMode**](#overflowmode) is assigned, when [**Outlines**](#outlines) is replaced or any of its elements raises **OnChanged**, or when [**Font**](#font), [**Padding**](#padding), or [**Fill**](#fill) raise their own **OnChanged**.

## FontStyle class

The font metrics that control how [**TextRendering**](#) lays out text. Accessed as [**TextRendering.Font**](#font).

### Italic

When **True**, glyphs are rendered with italic styling. **Boolean**. Default: **False**.

### Size

The font size in typographic points. [**PointSize**](/official/Reference/CustomControls/Enumerations/PointSize). Default: 12.

### Strikeout

When **True**, a horizontal line is drawn through the middle of each glyph. **Boolean**. Default: **False**.

### Underline

When **True**, an underline is drawn beneath each glyph. **Boolean**. Default: **False**.

### Weight

The font weight on the OpenType `wght` scale. A member of [**FontWeight**](/official/Reference/CustomControls/Enumerations/FontWeight). Default: **tbNormal**.

### OnChanged

Raised when any of the five font-style fields is assigned. The parent [**TextRendering**](#) listens for this event and re-raises its own.
