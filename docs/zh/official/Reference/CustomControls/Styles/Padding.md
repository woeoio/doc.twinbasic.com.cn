---
title: Padding
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Padding
---

# Padding class
Per-side padding, in pixels, applied around the text inside a [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering). Accessed as [**TextRendering.Padding**](/official/Reference/CustomControls/Styles/TextRendering#padding). The padded region is what the text [**Alignment**](/official/Reference/CustomControls/Styles/TextRendering#alignment) is applied to --- adding 5 pixels of left padding moves left-aligned text 5 pixels to the right, and shrinks the available area by 5 pixels at the left edge.

```vb
With txtNotes.NormalState.TextRendering.Padding
    .Left = 5
    .Right = 5
End With
```

## Properties

### Bottom

Padding inserted at the bottom edge, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Default: 0.

### Left

Padding inserted at the left edge, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Default: 0.

### Right

Padding inserted at the right edge, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Default: 0.

### Top

Padding inserted at the top edge, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Default: 0.

## Events

### OnChanged

Raised whenever any of the four padding values is assigned. The containing [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) re-raises its own **OnChanged** in response, which in turn triggers a repaint on the hosting control.
