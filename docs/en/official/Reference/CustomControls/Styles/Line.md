---
title: Line
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Line
---

# Line class
A single stroke used to draw a grid line, divider, or resizer bar --- simpler than a full [**Border**](/en/official/Reference/CustomControls/Styles/Borders#border-class) (no blend-with-background flag, no surrounding **Elements** array). Accessed as [**WaynesGrid.VerticalLineOptions**](/en/official/Reference/CustomControls/WaynesGrid#verticallineoptions), [**HorizontalLineOptions**](/en/official/Reference/CustomControls/WaynesGrid#horizontallineoptions), and [**ResizerBar**](/en/official/Reference/CustomControls/WaynesGrid#resizerbar).

```vb
With WaynesGrid1.VerticalLineOptions
    .StrokeSize = 1
    .Fill.ColorPoints.SetSolidColor &HD0D0D0    ' pale grey
End With
```

## Properties

### Fill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that supplies the colour or gradient used to draw the line.

### StrokeSize

The stroke thickness in pixels. [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount). Default: 0 (the line is not drawn until a non-zero size is assigned).

## Events

### OnChanged

Raised when [**StrokeSize**](#strokesize) or [**Fill**](#fill) is assigned, or when the contained [**Fill**](#fill) raises its own **OnChanged**.
