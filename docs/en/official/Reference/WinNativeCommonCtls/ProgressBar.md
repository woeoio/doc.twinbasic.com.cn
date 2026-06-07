---
title: ProgressBar
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/ProgressBar
---

# ProgressBar class
A **ProgressBar** is a horizontal or vertical bar that visually represents progress through a range. Three configurable axes shape the visual: [**Scrolling**](#scrolling) (segmented / smooth / marquee), [**State**](#state) (Normal / Error / Paused, which tints the bar to match the OS theme), and [**Orientation**](#orientation) (horizontal or vertical).

```vb
Private Sub StartTask()
    ProgressBar1.Min = 0
    ProgressBar1.Max = ItemCount
    ProgressBar1.Step = 1
    ProgressBar1.Value = 0
End Sub

Private Sub OnItemDone()
    ProgressBar1.StepIt   ' advances by Step (1 here) and fires Change
End Sub

Private Sub OnTaskFailed()
    ProgressBar1.State = PrbStateError
End Sub
```

For indeterminate progress (e.g. waiting on a server response with no length information), use the marquee variant:

```vb
ProgressBar1.Scrolling = PrbScrollingMarquee
ProgressBar1.MarqueeSpeed = 30       ' milliseconds per animation step
ProgressBar1.MarqueeAnimation = True ' start animating
```

The control inherits the non-focusable rect-dockable members from `BaseControlNotFocusable2` --- size, position, **Anchors**, **Dock**, **Appearance**, **MousePointer** / **MouseIcon**, **ToolTipText**, **DragMode** / **DragIcon**, **Drag**, **Refresh**, **ZOrder**, **CausesValidation**, **VisualStyles**, **hWnd**, **HelpContextID** / **WhatsThisHelpID**.

## Three axes of configuration

The visual is the cartesian product of three properties:

- **[Scrolling](#scrolling)** --- *Standard* (the default, animated segmented bar), *Smooth* (a continuous block --- combine with [**SmoothReverse**](#smoothreverse) to allow the bar to decrease), or *Marquee* (an indeterminate animated stripe; control with [**MarqueeAnimation**](#marqueeanimation) + [**MarqueeSpeed**](#marqueespeed)).
- **[State](#state)** --- *Normal* (theme-default color, typically green), *Error* (typically red), or *Paused* (typically yellow). The OS chooses the actual colors based on its current theme.
- **[Orientation](#orientation)** --- *Horizontal* or *Vertical*.

All three can be changed at run time; the underlying Win32 styles are re-applied without recreating the window.

## Range, value, and stepping

[**Min**](#min) and [**Max**](#max) bracket the range. [**Value**](#value) is the current position. [**Step**](#step) is the amount [**StepIt**](#stepit) advances the bar by, used to power the common loop pattern:

```vb
ProgressBar1.Min = 0
ProgressBar1.Max = Items.Count
ProgressBar1.Step = 1
For Each item In Items
    DoWork item
    ProgressBar1.StepIt
Next
```

Each [**StepIt**](#stepit) call increments [**Value**](#value) by [**Step**](#step) and fires the [**Change**](#change) event.

Properties
----------

### BackColor

The background color drawn behind the progress bar segments. **OLE_COLOR**. Default: **vbButtonFace**. Applied via `PBM_SETBKCOLOR`.

### BorderStyle

The control's border style. A [**ControlBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) member. Default: **vbNoBorder**.

### ForeColor

The color of the progress bar segments themselves. **OLE_COLOR**. Default: **vbHighlight**. Applied via `PBM_SETBARCOLOR`.

::: info
The OS visual styles theme typically overrides this value in standard rendering. To see the assigned **ForeColor** at run time, disable visual styles by setting [**VisualStyles**](/en/official/Reference/VB/CheckBox/#visualstyles) to **False**.
:::

### MarqueeAnimation

Whether the marquee animation is currently running. **Boolean**. Default: **False**. Only meaningful when [**Scrolling**](#scrolling) is **PrbScrollingMarquee**. Set to **True** to start, **False** to stop.

### MarqueeSpeed

The marquee animation update interval, in milliseconds. **Long**. Default: `80`.

### Max

The upper bound of the range. **Long**. Default: `100`. The combination of [**Min**](#min) and [**Max**](#max) is applied to the underlying control via `PBM_SETRANGE32`.

### Min

The lower bound of the range. **Long**. Default: `0`.

### Orientation

The progress bar's orientation. A member of [**PrbOrientation**](#prborientation). Default: **PrbOrientationHorizontal**.

### Scrolling

The visual style of progress. A member of [**PrbScrolling**](#prbscrolling). Default: **PrbScrollingStandard**.

### SmoothReverse

Whether a smooth progress bar can decrease (when [**Value**](#value) is set to a smaller number). **Boolean**. Default: **False**. Without this flag a smooth bar that has reached, say, 80% will not visibly decrease when [**Value**](#value) is reduced --- it simply snaps back. Only meaningful when [**Scrolling**](#scrolling) is **PrbScrollingSmooth**.

### State

The visual state of the bar. A member of [**PrbState**](#prbstate). Default: **PrbStateNormal**. The OS uses the value to tint the bar --- **PrbStateError** typically renders red, **PrbStatePaused** typically renders yellow, **PrbStateNormal** uses the theme-default progress color (typically green).

### Step

The amount [**StepIt**](#stepit) advances [**Value**](#value) by. **Long**. Default: `10`.

### Value

The current position in the range. **Long**. The default member. Reads and writes via `PBM_GETPOS` / `PBM_SETPOS`. Fires [**Change**](#change) when the value is changed past the control's initialization phase.

Methods
-------

### StepIt

Advances [**Value**](#value) by [**Step**](#step), wrapping to [**Min**](#min) once [**Max**](#max) is reached. Fires the [**Change**](#change) event.

Syntax: *object*.**StepIt**

Events
------

### Change

Raised when [**Value**](#value) has changed --- either through direct assignment, through [**StepIt**](#stepit), or by code adjusting [**Step**](#step) and re-applying.

Syntax: *object*\_**Change**( )

### Click, DblClick

Inherited mouse events.

### DragDrop, DragOver

Inherited drag-drop events.

### Initialize

Raised after the control's window has been created.

### MouseDown, MouseMove, MouseUp

Inherited mouse events.

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

Inherited OLE drag-and-drop events.

## PrbOrientation

Determines the orientation of the progress bar. Declared on the **ProgressBar** class.

| Member                          | Value | Description                                |
|---------------------------------|-------|--------------------------------------------|
| **PrbOrientationHorizontal** | 0 | Horizontal bar; progress flows left-to-right. |
| **PrbOrientationVertical** | 1 | Vertical bar; progress flows bottom-to-top. |

## PrbScrolling

Determines how the progress bar animates as the value changes. Declared on the **ProgressBar** class.

| Member                       | Value | Description                                                            |
|------------------------------|-------|------------------------------------------------------------------------|
| **PrbScrollingStandard** | 0 | Segmented bar with the classic discrete blocks animation. |
| **PrbScrollingSmooth** | 1 | Continuous block with no inter-segment gaps. Pair with [**SmoothReverse**](#smoothreverse) to allow the value to decrease visibly. |
| **PrbScrollingMarquee** | 2 | Indeterminate animated stripe. Control with [**MarqueeAnimation**](#marqueeanimation) and [**MarqueeSpeed**](#marqueespeed); the actual [**Value**](#value) is irrelevant. |

## PrbState

Determines the color theme of the progress bar. Declared on the **ProgressBar** class.

| Member                      | Value | Description                                                                       |
|-----------------------------|-------|-----------------------------------------------------------------------------------|
| **PrbStateNormal**   | 1 | Theme-default progress color (typically green). |
| **PrbStateError**     | 2 | Error state (typically red).                    |
| **PrbStatePaused**   | 3 | Paused state (typically yellow).                |

## See Also

- [Slider](/en/official/Reference/WinNativeCommonCtls/Slider) -- when the user needs to set a value within a range, not just see progress
- [ControlTypeConstants](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) -- where **vbProgressBar** lives
