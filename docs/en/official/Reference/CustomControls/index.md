---
title: CustomControls Package
parent: Packages
nav_order: 5
permalink: /tB/Packages/CustomControls/
---

# CustomControls Package

The **CustomControls** built-in package supplies a set of fully owner-drawn controls --- buttons, a form, a frame, a grid, a label, a slider, a textbox, and a timer --- together with the framework on which they are built. Every visible pixel is rendered by the package itself rather than by Windows, so the look and feel is identical across systems and is configured entirely through a small vocabulary of style objects ([**Fill**](/en/official/Reference/CustomControls/Styles/Fill), [**Borders**](/en/official/Reference/CustomControls/Styles/Borders), [**Corners**](/en/official/Reference/CustomControls/Styles/Corners), [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering), …) rather than by toggling theme flags.

The package ships as two paired components: a **CustomControls DESIGNER** library --- the framework half, source-side project `CustomControls` --- that defines the rendering surface and the interface every custom control implements; and the **Custom Controls** package --- source-side project `CustomControlsPackage` --- that supplies the eight concrete `Waynes…` controls. The two are co-versioned with twinBASIC and always ship together; both are MIT-licensed.

Beyond providing ready-to-use controls, the package doubles as a worked example for authoring new custom controls. The `Waynes…` classes implement the same [**ICustomControl**](/en/official/Reference/CustomControls/Framework/ICustomControl) interface that a hand-written control would, against the same [**CustomControlContext**](/en/official/Reference/CustomControls/Framework/CustomControlContext) callback object and [**Canvas**](/en/official/Reference/CustomControls/Framework/Canvas) drawing surface --- see the [Framework](/en/official/Reference/CustomControls/Framework) page for the host-side contract.

```vb
Private Sub Form_Load()
    btnGo.Caption = "Continue"
    btnGo.NormalState.BackgroundFill.ColorPoints.SetSolidColor vbBlue
    btnGo.NormalState.Corners.SetAll tbCurve, 12
    txtName.Value = ""
End Sub

Private Sub btnGo_Click()
    MsgBox "Hello, " & txtName.Value
End Sub
```

## Controls

- [WaynesButton](/en/official/Reference/CustomControls/WaynesButton) -- owner-drawn push-button with separate visual states for normal, hover, focused, and pressed
- [WaynesForm](/en/official/Reference/CustomControls/WaynesForm) -- top-level form for hosting custom controls; exposes the **WindowsOptions** sub-object that controls the Win32 frame
- [WaynesFrame](/en/official/Reference/CustomControls/WaynesFrame) -- rectangular container that fills its area with a configurable background
- [WaynesGrid](/en/official/Reference/CustomControls/WaynesGrid) -- tabular data display with column headers, row headers, hover / selection states, and resizable columns
- [WaynesLabel](/en/official/Reference/CustomControls/WaynesLabel) -- static text display with fill, text rendering, and caption
- [WaynesSlider](/en/official/Reference/CustomControls/WaynesSlider) -- horizontal or vertical value slider with hover / focused states and a draggable block
- [WaynesTextBox](/en/official/Reference/CustomControls/WaynesTextBox) -- single-line editable text field with selection, caret, surrogate-pair awareness, and inline text decorators
- [WaynesTimer](/en/official/Reference/CustomControls/WaynesTimer) -- non-visual timer that raises a **Timer** event at a programmable interval

Every concrete control implements [**ICustomControl**](/en/official/Reference/CustomControls/Framework/ICustomControl) and inherits a small set of layout-and-name members from an internal base class:

- All controls expose **Name**, **Left**, **Top**, **Width**, **Height**, **Anchors**, **Dock**, and **Visible**.
- Controls that can take keyboard focus ([**WaynesButton**](/en/official/Reference/CustomControls/WaynesButton), [**WaynesGrid**](/en/official/Reference/CustomControls/WaynesGrid), [**WaynesSlider**](/en/official/Reference/CustomControls/WaynesSlider), [**WaynesTextBox**](/en/official/Reference/CustomControls/WaynesTextBox)) additionally expose **TabIndex** and **TabStop**.
- [**WaynesForm**](/en/official/Reference/CustomControls/WaynesForm) instead exposes form-level members: **FormDesignerId**, **Name**, position / size, and the **Controls** collection.

These members are listed on each control's own page; their definitions are identical and are not repeated separately.

## Style objects

The visual style of every control is controlled by a few small helper classes, instantiated automatically through `Public WithEvents …` properties. They are nested arbitrarily --- a [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering) contains a [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) for the text colour, which contains a `Granularity` and an array of `FillColorPoint` gradient stops; an array of [**Border**](/en/official/Reference/CustomControls/Styles/Borders#border-class) objects describes how the outline of a control is stroked; and so on.

- [Anchors](/en/official/Reference/CustomControls/Styles/Anchors) -- which sides of a control are attached to its container when the container is resized
- [Borders](/en/official/Reference/CustomControls/Styles/Borders) -- one or more border strokes drawn around a control (including the single-stroke `Border` sub-object)
- [Corners](/en/official/Reference/CustomControls/Styles/Corners) -- the four corner shapes and radii of a control (including the per-corner `Corner` sub-object)
- [Fill](/en/official/Reference/CustomControls/Styles/Fill) -- the colour or gradient that paints a region (including the `FillColorPoint` / `FillColorPoints` gradient-stop sub-objects)
- [Line](/en/official/Reference/CustomControls/Styles/Line) -- a single grid-line or resizer-bar stroke; thinner shape than a full border
- [Padding](/en/official/Reference/CustomControls/Styles/Padding) -- per-side padding around text inside a [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering)
- [TextRendering](/en/official/Reference/CustomControls/Styles/TextRendering) -- font, padding, fill, outlines, alignment, and overflow for the text drawn inside a control (including the `FontStyle` sub-object)

Every style object raises an **OnChanged** event whenever one of its fields is set, and the control that hosts it requests a repaint on each change --- assigning style values at runtime triggers an immediate redraw.

## Framework

For authoring new custom controls or forms, the **CustomControls DESIGNER** half of the package supplies:

- [ICustomControl](/en/official/Reference/CustomControls/Framework/ICustomControl) -- the interface every custom control implements: **Initialize**, **Destroy**, **Paint**
- [ICustomForm](/en/official/Reference/CustomControls/Framework/ICustomForm) -- the analogous interface for custom form classes
- [CustomControlContext](/en/official/Reference/CustomControls/Framework/CustomControlContext) -- callback object passed to **Initialize**; offers serializer access, repaint requests, timer creation, and focus changes
- [CustomFormContext](/en/official/Reference/CustomControls/Framework/CustomFormContext) -- a **CustomControlContext** extended with **Show** and **Close** for form-class controls
- [CustomControlTimer](/en/official/Reference/CustomControls/Framework/CustomControlTimer) -- the timer returned by **CustomControlContext.CreateTimer**; has **Interval**, **Enabled**, and an **OnTimer** event
- [CustomControlsCollection](/en/official/Reference/CustomControls/Framework/CustomControlsCollection) -- the **Controls** collection on a form
- [Canvas](/en/official/Reference/CustomControls/Framework/Canvas) -- the drawing surface passed to **Paint**; the only way to put pixels into a custom control
- [SerializeInfo](/en/official/Reference/CustomControls/Framework/SerializeInfo) -- the per-instance serializer returned by **CustomControlContext.GetSerializer**; used to deserialize designer-set property values and to query the runtime mode

## Enumerations

- [BorderStyle](/en/official/Reference/CustomControls/Enumerations/BorderStyle) -- window-frame style passed to [**WindowsFormOptions.BorderStyle**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#borderstyle)
- [ColorRGBA](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) -- `Long`-compatible type alias for 32-bit ABGR colour values
- [CornerShape](/en/official/Reference/CustomControls/Enumerations/CornerShape) -- how a single corner of a control is shaped: curve, notch, or cut-out
- [Customtate](/en/official/Reference/CustomControls/Enumerations/Customtate) -- duplicate of [**WindowState**](/en/official/Reference/CustomControls/Enumerations/WindowState); reserved
- [DockMode](/en/official/Reference/CustomControls/Enumerations/DockMode) -- how a control is docked inside its container
- [FillPattern](/en/official/Reference/CustomControls/Enumerations/FillPattern) -- the gradient or fill pattern used by a [**Fill**](/en/official/Reference/CustomControls/Styles/Fill)
- [FontWeight](/en/official/Reference/CustomControls/Enumerations/FontWeight) -- font weights from **tbThin** through **tbHeavy**, mirroring the OpenType `wght` scale
- [PixelCount](/en/official/Reference/CustomControls/Enumerations/PixelCount) -- `Long`-compatible type alias for measurements expressed in pixels
- [PointSize](/en/official/Reference/CustomControls/Enumerations/PointSize) -- `Long`-compatible type alias for font sizes expressed in points
- [StartupPosition](/en/official/Reference/CustomControls/Enumerations/StartupPosition) -- initial position of a form when it is first shown
- [TextAlignment](/en/official/Reference/CustomControls/Enumerations/TextAlignment) -- horizontal and vertical alignment of text within a [**TextRendering**](/en/official/Reference/CustomControls/Styles/TextRendering)
- [TextOverflowMode](/en/official/Reference/CustomControls/Enumerations/TextOverflowMode) -- how text longer than the available area is truncated
- [WindowState](/en/official/Reference/CustomControls/Enumerations/WindowState) -- the minimized / normal / maximized window state of a form
