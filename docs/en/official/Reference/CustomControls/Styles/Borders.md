---
title: Borders
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Borders
---

# Borders class
The collection of border strokes drawn around a region. Each stroke is an independent [**Border**](#border-class) sub-object with its own thickness, fill, and blending behaviour, layered in source order. A single thin black outline is a one-element collection --- easiest constructed by calling [**SetSimpleBorder**](#setsimpleborder).

Accessed as `<state>.Borders`, [**CellRenderingOptions.Borders**](/en/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions#borders), and the slider's `<sliderState>.BackgroundBorders` / `BlockBorders`. The array of [**Border**](#border-class) sub-objects on a [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering)'s **Outlines** member uses the same element type.

```vb
btnGo.NormalState.Borders.SetSimpleBorder StrokeSize:=1, ColorRGB:=vbBlack
```

Layered borders --- multiple [**Border**](#border-class) instances stroked in order --- are assigned to the [**Elements**](#elements) array directly. Each element can have its own [**StrokeSize**](#strokesize) and its own [**Fill**](/en/official/Reference/CustomControls/Styles/Fill), so a thin black outline can sit on top of a wide coloured band, or three bands of different colours can stack into a "shadow":

```vb
Dim elems(0 To 2) As Border
Set elems(0) = New Border
elems(0).StrokeSize = 4
elems(0).Fill.ColorPoints.SetSolidColor vbBlack
Set elems(1) = New Border
elems(1).StrokeSize = 7
elems(1).Fill.ColorPoints.SetSolidColor &H99CCFF       ' light blue band
Set elems(2) = New Border
elems(2).StrokeSize = 4
elems(2).Fill.ColorPoints.SetSolidColor &H4D7AB4       ' deeper blue
btnGo.NormalState.Borders.Elements = elems
```

A single [**Border**](#border-class) can also display a gradient instead of a solid colour --- assign a multi-stop [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) to its [**Fill**](#fill) member. Set [**BlendWithBackgroundFill**](#blendwithbackgroundfill) to **True** on a translucent border to make it tint with the control's own **BackgroundFill** rather than with whatever lies under the control.

## Properties

### Elements

The array of [**Border**](#border-class) sub-objects, drawn in order from index 0 outward. Read-write but in practice populated through [**SetSimpleBorder**](#setsimpleborder) or [**SetSimpleBorderRGBA**](#setsimpleborderrgba).

## Methods

### SetSimpleBorder

Replaces the [**Elements**](#elements) array with a single border stroke of the given thickness and fully-opaque colour.

Syntax: *object*.**SetSimpleBorder** *StrokeSize*, *ColorRGB*

*StrokeSize*
: *required* A **Long** giving the stroke thickness in pixels.

*ColorRGB*
: *required* A **Long** RGB colour for the stroke fill.

### SetSimpleBorderRGBA

Replaces the [**Elements**](#elements) array with a single border stroke whose alpha is taken from the supplied [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) rather than forced opaque. Useful for transparent borders that are present only as visual padding (the slider uses a fully transparent border on the **BlockBorders** to indent the block inside the background).

Syntax: *object*.**SetSimpleBorderRGBA** *StrokeSize*, *ColorRGBA*

*StrokeSize*
: *required* A **Long** giving the stroke thickness in pixels.

*ColorRGBA*
: *required* A [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) value for the stroke fill.

## Events

### OnChanged

Raised when the [**Elements**](#elements) array is reassigned, or when any single [**Border**](#border-class) element raises its own **OnChanged**.

## Border class

A single border stroke. Elements of [**Borders.Elements**](#elements), and also of [**TextRendering.Outlines**](/en/official/Reference/CustomControls/Styles/TextRendering#outlines).

### BlendWithBackgroundFill

When **True**, the border's colour alpha-blends with the control's **BackgroundFill** rather than with whatever is painted underneath the control. Lets a translucent border colour use the background tint instead of the form's. **Boolean**. Default: **False**.

### Fill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that supplies the colour or gradient used to stroke the border. Newly-constructed [**Border**](#border-class) objects pre-set this to a solid black fill.

### StrokeSize

The stroke thickness in pixels. [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount). Default: 1.

### New

Constructs a [**Border**](#border-class) with a default solid-black [**Fill**](#fill).

Syntax: **New Border**

### OnChanged

Raised when [**StrokeSize**](#strokesize), [**Fill**](#fill), or [**BlendWithBackgroundFill**](#blendwithbackgroundfill) is assigned, or when the contained [**Fill**](#fill) raises its own **OnChanged**.
