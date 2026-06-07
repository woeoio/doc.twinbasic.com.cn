---
title: Styles
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/Styles/
---

# Styles

The shared appearance helper classes used by the [**CustomControls**](/en/official/Reference/CustomControls/) package's concrete `Waynes…` controls. Each is a small container of related visual settings --- a [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) is a colour or gradient, a [**Borders**](/en/official/Reference/CustomControls/Styles/Borders) is an array of border strokes, a [**Corners**](/en/official/Reference/CustomControls/Styles/Corners) is the shape and radius of each corner, and so on. Controls compose them through `Public WithEvents …` properties: a [**WaynesButton**](/en/official/Reference/CustomControls/WaynesButton/) holds four [**WaynesButtonState**](/en/official/Reference/CustomControls/WaynesButton/WaynesButtonState) sub-objects (Normal / Hover / Focused / Pressed), each of which has its own [**BackgroundFill**](/en/official/Reference/CustomControls/WaynesButton/WaynesButtonState#backgroundfill), [**Borders**](/en/official/Reference/CustomControls/WaynesButton/WaynesButtonState#borders), [**Corners**](/en/official/Reference/CustomControls/WaynesButton/WaynesButtonState#corners), and [**TextRendering**](/en/official/Reference/CustomControls/WaynesButton/WaynesButtonState#textrendering).

Every style object raises an **OnChanged** event whenever any of its public fields is assigned. The hosting control listens for that event on each of its sub-objects and asks the framework to repaint, so style changes made at runtime are reflected immediately.

| Class | Role |
|-------|------|
| [Anchors](/en/official/Reference/CustomControls/Styles/Anchors) | which sides of a control are attached to the container when it resizes |
| [Borders](/en/official/Reference/CustomControls/Styles/Borders) | an array of border strokes drawn around a region; contains the per-stroke `Border` sub-object |
| [Corners](/en/official/Reference/CustomControls/Styles/Corners) | the four corner shapes / radii of a region; contains the per-corner `Corner` sub-object |
| [Fill](/en/official/Reference/CustomControls/Styles/Fill) | the colour or gradient that paints a region; contains the `FillColorPoint` and `FillColorPoints` sub-objects that hold the gradient stops |
| [Line](/en/official/Reference/CustomControls/Styles/Line) | a single grid- or resizer-line stroke; a thinner shape than a full border |
| [Padding](/en/official/Reference/CustomControls/Styles/Padding) | per-side padding around text inside a [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering) |
| [TextRendering](/en/official/Reference/CustomControls/Styles/TextRendering) | font, padding, fill, outlines, alignment, and overflow for text; contains the `FontStyle` sub-object that holds the font metrics |

The style classes are declared `Private Class` in the **CustomControlsPackage** source --- they cannot be created with `New` from outside the package, and a variable cannot be typed as e.g. `Dim x As Fill` from a referencing project. Application code accesses every style object exclusively through the property chain that hangs off a concrete control.
