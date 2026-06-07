---
title: WaynesTextBoxState
parent: WaynesTextBox
permalink: /tB/Packages/CustomControls/WaynesTextBox/WaynesTextBoxState
---

# WaynesTextBoxState class
A bundle of the style objects that describe a single visual state of a [**WaynesTextBox**](/en/official/Reference/CustomControls/WaynesTextBox/). Each textbox holds three parallel instances ([**NormalState**](/en/official/Reference/CustomControls/WaynesTextBox/#normalstate), [**HoverState**](/en/official/Reference/CustomControls/WaynesTextBox/#hoverstate), [**FocusedState**](/en/official/Reference/CustomControls/WaynesTextBox/#focusedstate)); the textbox picks one at each repaint depending on the focus / hover state.

In addition to the usual background / borders / corners / text-rendering quartet, a **WaynesTextBoxState** adds selection-highlight colours, a caret colour and width, and three decorator fills used for the *ERROR* / *WARNING* / *INFO* literal-substring decorations the textbox draws automatically.

[**InitializeDefaultValues**](#initializedefaultvalues) and [**InitializeDefaultValues_Focused**](#initializedefaultvalues_focused) populate the state with reasonable defaults --- the focused variant uses a different selection background and caret colour.

The type itself is `Public Class` but is `[COMCreatable(False)]` --- instances are accessed only through the textbox's **NormalState** / **HoverState** / **FocusedState** properties.

## Properties

### BackgroundFill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that paints the textbox background. Defaults to solid white.

### Borders

The [**Borders**](/en/official/Reference/CustomControls/Styles/Borders) drawn around the textbox. Defaults to a 1-pixel black border.

### CaretFill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that paints the caret. Defaults to solid black in the normal state, orange in the focused state.

### CaretWidth

The width of the caret, in pixels. **Long**. Default: 1.

### Corners

The [**Corners**](/en/official/Reference/CustomControls/Styles/Corners) that controls the per-corner shape and radius. Defaults to **tbCurve** with a radius of 5.

### DecorationERROR

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) used to draw the inline squiggle decoration when the substring `ERROR` is detected in [**Value**](/en/official/Reference/CustomControls/WaynesTextBox/#value). Defaults to solid red.

### DecorationINFO

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) used to draw the inline background-highlight decoration when the substring `INFO` is detected in [**Value**](/en/official/Reference/CustomControls/WaynesTextBox/#value). Defaults to a light blue.

### DecorationWARNING

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) used to draw the inline 2-pixel straight-underline decoration when the substring `WARNING` is detected in [**Value**](/en/official/Reference/CustomControls/WaynesTextBox/#value). Defaults to a dark blue.

### SelectedBackgroundFill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that paints behind selected text. Defaults to mid-grey in the normal state, blue in the focused state.

### SelectedTextFill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that paints the selected glyphs themselves. Defaults to solid white.

### TextRendering

The [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering) that controls how [**Value**](/en/official/Reference/CustomControls/WaynesTextBox/#value) is drawn. Defaults to left-aligned with 5-pixel left / right padding and **tbDisallowPartialChars** overflow.

## Methods

### InitializeDefaultValues

Populates every field with the package defaults --- used by [**NormalState**](/en/official/Reference/CustomControls/WaynesTextBox/#normalstate) and [**HoverState**](/en/official/Reference/CustomControls/WaynesTextBox/#hoverstate).

Syntax: *object*.**InitializeDefaultValues**

### InitializeDefaultValues_Focused

Calls [**InitializeDefaultValues**](#initializedefaultvalues) first, then overrides [**SelectedBackgroundFill**](#selectedbackgroundfill) and [**CaretFill**](#caretfill) with focus-specific colours.

Syntax: *object*.**InitializeDefaultValues_Focused**

## Events

### OnChanged

Raised whenever any of the contained style objects raises its own **OnChanged**, or when [**CaretWidth**](#caretwidth) is assigned. The parent [**WaynesTextBox**](/en/official/Reference/CustomControls/WaynesTextBox/) listens for this and requests a repaint.
