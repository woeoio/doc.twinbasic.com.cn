---
title: Fill
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Fill
---

# Fill class
The colour or gradient that paints a region --- background of a control, body of a border, fill of a grid line, foreground of text. A **Fill** has two parts: a [**Pattern**](#pattern) that picks the gradient direction (or `tbPatternNone` for transparent), and a [**ColorPoints**](#colorpoints) collection of one or more colour stops that supply the actual colours.

A single solid colour is just a one-stop fill: call [**ColorPoints.SetSolidColor**](#setsolidcolor) with a `Long` colour, or [**SetSimplePattern**](#setsimplepattern) on the parent **Fill** for a two-colour gradient.

```vb
btnGo.NormalState.BackgroundFill.ColorPoints.SetSolidColor vbBlue
btnGo.HoverState.BackgroundFill.SetSimplePattern vbBlue, vbWhite, _
        Pattern:=tbGradientNorthToSouth
```

For three or more colour stops, build [**FillColorPoint**](#fillcolorpoint-class) instances and pass them to [**SetColorPoints**](#setcolorpoints). The stops accept fully-opaque ARGB literals (`&HFF` alpha in the high byte) --- see [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) for the encoding:

```vb
With pnlHeader.BackgroundFill
    .Pattern = tbGradientNorthToSouth
    .ColorPoints.SetColorPoints _
        New FillColorPoint(&HFFF3E58F, 0), _
        New FillColorPoint(&HFF99CCFF, 50), _
        New FillColorPoint(&HFF014C99, 100)
End With
```

## Properties

### ColorPoints

The [**FillColorPoints**](#fillcolorpoints-class) collection holding the gradient stops. Always present and pre-allocated; assigning new stops is done by calling methods on this object rather than replacing the collection.

### Pattern

How the colours in [**ColorPoints**](#colorpoints) are mapped across the region. A member of [**FillPattern**](/en/official/Reference/CustomControls/Enumerations/FillPattern). Default: **tbGradientNorthToSouth**. Use **tbPatternNone** to make the **Fill** transparent.

## Methods

### SetSimplePattern

Replaces the colour stops with a two-stop gradient between two solid colours, optionally adjusting the [**Granularity**](#granularity) and [**Pattern**](#pattern) at the same time. The colours are given as ordinary `Long` values (the `vb…` colour constants or a hex literal); the opaque alpha mask is OR-ed in automatically.

Syntax: *object*.**SetSimplePattern** *Value1RGB*, *Value2RGB* [, *Granularity* [, *Pattern* ] ]

*Value1RGB*
: *required* A **Long** RGB colour for the first gradient stop (position 0).

*Value2RGB*
: *required* A **Long** RGB colour for the second gradient stop (position 100).

*Granularity*
: *optional* The colour-table size assigned to [**Granularity**](#granularity). Default: 100.

*Pattern*
: *optional* A member of [**FillPattern**](/en/official/Reference/CustomControls/Enumerations/FillPattern). Default: **tbGradientNorthToSouth**.

### SetSimplePatternRGBA

Same as [**SetSimplePattern**](#setsimplepattern) but accepts raw 32-bit [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) values with their own alpha channels rather than three-byte RGB colours.

Syntax: *object*.**SetSimplePatternRGBA** *Value1RGBA*, *Value2RGBA* [, *Granularity* [, *Pattern* ] ]

*Value1RGBA*
: *required* A [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) (ABGR) value for the first gradient stop.

*Value2RGBA*
: *required* A [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) (ABGR) value for the second gradient stop.

*Granularity*
: *optional* The colour-table size assigned to [**Granularity**](#granularity). Default: 100.

*Pattern*
: *optional* A member of [**FillPattern**](/en/official/Reference/CustomControls/Enumerations/FillPattern). Default: **tbGradientNorthToSouth**.

## Events

### OnChanged

Raised whenever [**Pattern**](#pattern) is assigned or the [**ColorPoints**](#colorpoints) collection raises its own **OnChanged**.

## FillColorPoints class

The collection of [**FillColorPoint**](#fillcolorpoint-class) stops that define a [**Fill**](#)'s colour gradient. Accessed as [**Fill.ColorPoints**](#colorpoints). Internally an array of **FillColorPoint** plus a [**Granularity**](#granularity) integer.

### Granularity

The size of the generated colour table that interpolates the stops. Higher values give smoother gradients; a value of 2 produces a hard transition between just two colours regardless of how many stops the collection holds. **Long**. Default: 100.

### Values

The array of [**FillColorPoint**](#fillcolorpoint-class) gradient stops. Read-write, but in practice populated through the [**SetSolidColor**](#setsolidcolor), [**SetSolidColorRGBA**](#setsolidcolorrgba), [**SetColorPoints**](#setcolorpoints), or [**SetColorPointsArray**](#setcolorpointsarray) methods rather than by assigning the array directly.

### SetSolidColor

Replaces the stop array with a single fully-opaque stop. Takes a three-byte `Long` colour and OR-s in the opaque alpha mask.

Syntax: *object*.**SetSolidColor** *ValueRGB*

*ValueRGB*
: *required* A **Long** RGB colour.

### SetSolidColorRGBA

Replaces the stop array with a single stop whose alpha is taken from the supplied value rather than forced opaque.

Syntax: *object*.**SetSolidColorRGBA** *ValueRGBA*

*ValueRGBA*
: *required* A [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) (ABGR) value.

### SetColorPoints

Replaces the stop array with the supplied [**FillColorPoint**](#fillcolorpoint-class) values, in order.

Syntax: *object*.**SetColorPoints** *ColorPoint1* [, *ColorPoint2*, … ]

*ColorPoint1*, *ColorPoint2*, …
: *required* One or more [**FillColorPoint**](#fillcolorpoint-class) objects, passed as **Variant**s through a `ParamArray`.

### SetColorPointsArray

Replaces the stop array with the contents of an existing array of [**FillColorPoint**](#fillcolorpoint-class).

Syntax: *object*.**SetColorPointsArray** *ColorPoints* ( )

*ColorPoints*
: *required* An array of [**FillColorPoint**](#fillcolorpoint-class). Uninitialised or empty arrays leave the collection unchanged.

### OnChanged

Raised when the array of stops is reassigned or when any single stop raises its own **OnChanged**, or when [**Granularity**](#granularity) is assigned. The parent [**Fill**](#) listens for this event and re-raises its own.

## FillColorPoint class

A single gradient stop --- a colour together with the position (0--100 %) at which the colour applies along the gradient. Elements of the [**FillColorPoints.Values**](#values) array.

### Color

The stop's colour as a 32-bit ABGR value. [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA).

### PositionPercent

The stop's position along the gradient, as a percentage from 0 to 100. **Double**. A two-stop gradient typically has stops at 0 and 100; intermediate stops at 25 / 50 / 75 produce smooth multi-colour transitions.

### New

Constructs a [**FillColorPoint**](#fillcolorpoint-class). The parameterless overload sets neither field; the two-argument overload sets both.

Syntax: **New FillColorPoint** [ ( *ColorRGBA*, *PositionPercent* ) ]

*ColorRGBA*
: *optional* A [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) value to assign to [**Color**](#color).

*PositionPercent*
: *optional* A **Double** to assign to [**PositionPercent**](#positionpercent).

### OnChanged

Raised when either [**Color**](#color) or [**PositionPercent**](#positionpercent) is assigned. The parent [**FillColorPoints**](#fillcolorpoints-class) listens for this event.
