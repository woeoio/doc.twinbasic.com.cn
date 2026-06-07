---
title: WaynesButtonState
parent: WaynesButton
permalink: /tB/Packages/CustomControls/WaynesButton/WaynesButtonState
---

# WaynesButtonState class
A bundle of the four style objects that describe a single visual state of a [**WaynesButton**](/en/official/Reference/CustomControls/WaynesButton/) --- its corners, background fill, borders, and text rendering. Each button has four parallel instances accessed as [**NormalState**](/en/official/Reference/CustomControls/WaynesButton/#normalstate), [**HoverState**](/en/official/Reference/CustomControls/WaynesButton/#hoverstate), [**FocusedState**](/en/official/Reference/CustomControls/WaynesButton/#focusedstate), and [**PressedState**](/en/official/Reference/CustomControls/WaynesButton/#pressedstate); the button picks one at each repaint depending on the mouse / focus state.

Newly-constructed **WaynesButtonState** objects pre-set their **BackgroundFill** to a solid mid-blue and all four corners to a 15-pixel curve. Override per-state to give the button a different look in each state.

The type itself is `Private Class` --- instances are accessed only through the **WaynesButton.…State** properties, and a variable typed as **WaynesButtonState** cannot be declared from outside the package.

```vb
With btnGo.NormalState
    .BackgroundFill.ColorPoints.SetSolidColor vbBlue
    .TextRendering.Fill.ColorPoints.SetSolidColor vbWhite
End With

With btnGo.HoverState
    .BackgroundFill.SetSimplePattern vbBlue, &HE0E0FF, _
            Pattern:=tbGradientNorthToSouth
    .Borders.SetSimpleBorder StrokeSize:=2, ColorRGB:=vbBlue
End With
```

## Properties

### BackgroundFill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that paints the button's background.

### Borders

The [**Borders**](/en/official/Reference/CustomControls/Styles/Borders) that draws the button's border strokes.

### Corners

The [**Corners**](/en/official/Reference/CustomControls/Styles/Corners) that controls the per-corner shape and radius.

### TextRendering

The [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering) that controls how the button's [**Caption**](/en/official/Reference/CustomControls/WaynesButton/#caption) is drawn.

## Methods

### InitializeDefaults

Resets the state object to the package's defaults --- solid mid-blue **BackgroundFill** and 15-pixel curved corners. Called automatically the first time the parent button is initialized, if no serialized data was loaded.

Syntax: *object*.**InitializeDefaults**

## Events

### OnChanged

Raised whenever any of the four contained style objects raises its own **OnChanged**. The parent [**WaynesButton**](/en/official/Reference/CustomControls/WaynesButton/) listens for this and requests a repaint.
