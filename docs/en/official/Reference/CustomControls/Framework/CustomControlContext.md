---
title: CustomControlContext
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/CustomControlContext
---

# CustomControlContext class
The callback object passed to a custom control's [**Initialize**](/en/official/Reference/CustomControls/Framework/ICustomControl#initialize). Holds the connection back into the framework --- used to deserialize designer-set property values, request repaints, create timers, and move the keyboard focus between elements the control has drawn.

Custom controls store the **CustomControlContext** in a private field (typically called **ControlContext**) so that they can call back into the framework at any point after **Initialize** has returned. The form-class counterpart [**CustomFormContext**](/en/official/Reference/CustomControls/Framework/CustomFormContext) extends this with **Show** and **Close**.

```vb
Private Sub OnInitialize(ByVal Ctx As CustomControls.CustomControlContext) _
        Implements CustomControls.ICustomControl.Initialize

    ' Load any serialized property values
    If Not Ctx.GetSerializer.RuntimeUISrzDeserialize(Me, False) Then
        InitializeDefaultValues
    End If

    ' Remember the context for later
    Set Me.ControlContext = Ctx
End Sub
```

## Methods

### ChangeFocusedElement

Asks the framework to move the keyboard focus to a particular `ElementTabIndex` value, as if the user had pressed **TAB** until reaching that point. Used by [**WaynesGrid**](/en/official/Reference/CustomControls/WaynesGrid) when a cell is selected programmatically --- the grid changes its **SelectedCellX** / **SelectedCellY** and then calls this method so that the form-level focus tracking matches.

Syntax: *object*.**ChangeFocusedElement** *ElementTabIndex*

*ElementTabIndex*
: *required* A **Long** matching the **ElementTabIndex** of an element that was added to the canvas in the most recent paint pass.

### CreateTimer

Returns a new [**CustomControlTimer**](/en/official/Reference/CustomControls/Framework/CustomControlTimer) bound to this control's lifetime. The timer is **Disabled** on creation; the caller sets [**Interval**](/en/official/Reference/CustomControls/Framework/CustomControlTimer#interval), subscribes to the timer's **OnTimer** event, and sets [**Enabled**](/en/official/Reference/CustomControls/Framework/CustomControlTimer#enabled) to **True** to start it.

Syntax: *object*.**CreateTimer** ( ) **As stdole.IUnknown**

The framework returns the timer typed as **stdole.IUnknown**; cast with `CType(Of CustomControlTimer)(…)` to get a strongly-typed reference. [**WaynesTimer**](/en/official/Reference/CustomControls/WaynesTimer) and [**WaynesSlider**](/en/official/Reference/CustomControls/WaynesSlider) both use this pattern.

### GetSerializer

Returns the [**SerializeInfo**](/en/official/Reference/CustomControls/Framework/SerializeInfo) handle for this control instance. The serializer exposes the deserialization entry point and the run-time / design-time mode flags.

Syntax: *object*.**GetSerializer** ( ) **As SerializeInfo**

### Repaint

Tells the framework that the control's appearance has changed and that the canvas should be repainted at the next opportunity. The framework eventually calls back into [**ICustomControl.Paint**](/en/official/Reference/CustomControls/Framework/ICustomControl#paint); calling **Repaint** multiple times in quick succession produces at most one paint.

Syntax: *object*.**Repaint** ( )

Every concrete `Waynes…` control hooks the **OnChanged** events on its state and style sub-objects, and calls **Repaint** from the handler --- so a runtime assignment like `btn.NormalState.BackgroundFill.ColorPoints.SetSolidColor vbBlue` triggers an automatic redraw.
