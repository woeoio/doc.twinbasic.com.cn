---
title: WaynesSliderState
parent: WaynesSlider
permalink: /tB/Packages/CustomControls/WaynesSlider/WaynesSliderState
---

# WaynesSliderState class
A bundle of the style objects that describe a single visual state of a [**WaynesSlider**](/en/official/Reference/CustomControls/WaynesSlider). Each slider holds three parallel instances ([**NormalState**](/en/official/Reference/CustomControls/WaynesSlider#normalstate), [**HoverState**](/en/official/Reference/CustomControls/WaynesSlider#hoverstate), [**FocusedState**](/en/official/Reference/CustomControls/WaynesSlider#focusedstate)); the slider picks one at each repaint depending on the mouse / focus state.

The state has two halves --- the *background* (the full track behind the block) and the *block* (the draggable rectangle that indicates [**Value**](/en/official/Reference/CustomControls/WaynesSlider#value)). Each half has its own [**Fill**](/en/official/Reference/CustomControls/Styles/Fill), [**Borders**](/en/official/Reference/CustomControls/Styles/Borders), and [**Corners**](/en/official/Reference/CustomControls/Styles/Corners). A [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering) on the state controls how the optional [**DisplayFormat**](/en/official/Reference/CustomControls/WaynesSlider#displayformat) text is drawn on the block.

[**InitializeDefaultValues**](#initializedefaultvalues) pre-sets the block to a solid mid-blue ([**WAYNESCOLOR_BLUE**](#) --- `&HAC7220`) fill, a 2-pixel black background border, and a transparent block border that acts as inner padding inside the background.

The type itself is `Public Class` but cannot be instantiated from outside the package --- instances are accessed only through the slider's **NormalState** / **HoverState** / **FocusedState** properties.

## Properties

### BackgroundBorders

The [**Borders**](/en/official/Reference/CustomControls/Styles/Borders) drawn around the background track.

### BackgroundCorners

The [**Corners**](/en/official/Reference/CustomControls/Styles/Corners) that controls the per-corner shape and radius of the background track.

### BackgroundFill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that paints the background track.

### BlockBorders

The [**Borders**](/en/official/Reference/CustomControls/Styles/Borders) drawn around the block.

### BlockCorners

The [**Corners**](/en/official/Reference/CustomControls/Styles/Corners) that controls the per-corner shape and radius of the block.

### BlockFill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that paints the block.

### BlockWidth

The width of the block, in pixels. [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount). Default: 100. When [**Direction**](/en/official/Reference/CustomControls/WaynesSlider#direction) is **Vertical**, this is the *height* of the block rather than its width; the block's other dimension takes the full available extent of the slider.

### TextRendering

The [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering) that controls how the optional [**DisplayFormat**](/en/official/Reference/CustomControls/WaynesSlider#displayformat) text is rendered on the block.

## Methods

### InitializeDefaultValues

Resets the state object to the package's defaults --- a solid mid-blue block fill, a 2-pixel black background border, and a transparent block border. Called automatically the first time the parent slider is initialized, if no serialized data was loaded.

Syntax: *object*.**InitializeDefaultValues**

## Events

### OnChanged

Raised whenever any of the contained style objects raises its own **OnChanged**, or when [**BlockWidth**](#blockwidth) is assigned. The parent [**WaynesSlider**](/en/official/Reference/CustomControls/WaynesSlider) listens for this and requests a repaint.
