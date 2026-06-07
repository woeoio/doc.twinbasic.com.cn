---
title: WaynesTimer
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesTimer
---

# WaynesTimer class
A non-visual timer control. Wraps an internal [**CustomControlTimer**](/official/Reference/CustomControls/Framework/CustomControlTimer) and exposes its [**Interval**](#interval) / [**Enabled**](#enabled) as designer-visible properties --- drop a **WaynesTimer** onto a [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) at design time, set the interval, and handle the [**Timer**](#timer) event to run code on a repeating schedule.

At design time the control paints a 🕑 clock-face glyph centred in its rectangle, on a pale grey background, scaled to fit the control. At run time the control is invisible --- its visible **Width** and **Height** are clamped to 32×32 on initialize but the control itself draws nothing.

```vb
Private Sub Form_Load()
    Timer1.Interval = 1000
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    lblClock.Caption = Format$(Now(), "hh:nn:ss")
End Sub
```

## Properties

### Anchors

Which sides of the control are attached to its container during resize. [**Anchors**](/official/Reference/CustomControls/Styles/Anchors). Inherited. (Has no visual effect at run time since the control draws nothing then.)

### Dock

How the control is docked inside its container. A member of [**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode). Inherited.

### Enabled

Whether the timer is currently running. Setting to **True** starts it; setting to **False** stops it. **Boolean**.

Syntax: *object*.**Enabled** [ = *value* ]

### Height

The control's height in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited. Forced to 32 on initialize.

### Interval

The number of milliseconds between successive [**Timer**](#timer) events. **Long**. A value of 0 means the timer never fires.

Syntax: *object*.**Interval** [ = *value* ]

Changing **Interval** while the timer is enabled takes effect on the next tick.

### Left

The horizontal offset of the control's left edge from its container, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Name

The unique design-time name of the control on its parent form. **String**. Inherited.

### Top

The vertical offset of the control's top edge from its container, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Visible

Whether the control is currently displayed. **Boolean**. Inherited. (Has no visual effect at run time.)

### Width

The control's width in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited. Forced to 32 on initialize.

## Events

### Timer

Raised every [**Interval**](#interval) milliseconds while [**Enabled**](#enabled) is **True**.

Syntax: *object*\_**Timer**( )
