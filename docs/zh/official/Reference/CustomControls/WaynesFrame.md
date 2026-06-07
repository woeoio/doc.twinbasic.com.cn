---
title: WaynesFrame
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesFrame
---

# WaynesFrame class
A rectangular container control whose entire area is painted with a configurable [**BackgroundFill**](#backgroundfill). Used to group other controls on a [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/), with the same layout / sizing members as any other custom control.

The default fill is a solid mid-grey ([**WAYNESCOLOR_GREY**](#) --- `&H808080`); change it by accessing the **Fill.ColorPoints** collection.

```vb
Private Sub Form_Load()
    Frame1.BackgroundFill.ColorPoints.SetSolidColor vbWhite
End Sub
```

Frames work well as containers for [**Dock**](/official/Reference/CustomControls/Enumerations/DockMode)-positioned children. Set the frame's own **Dock** to **tbDockFill** so it claims the form's body, then dock its children to **tbDockTop** / **tbDockLeft** / **tbDockFill** / etc. --- the docking calculation traverses the container tree, so children dock to the frame's client area rather than to the form. The order in which the children are added still determines which edges they claim first.

## Properties

### Anchors

Which sides of the control are attached to its container during resize. [**Anchors**](/official/Reference/CustomControls/Styles/Anchors). Inherited.

### BackgroundFill

The [**Fill**](/official/Reference/CustomControls/Styles/Fill) that paints the frame's entire client area.

### Dock

How the control is docked inside its container. A member of [**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode). Inherited. Default: **tbDockNone**.

### Height

The control's height in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Left

The horizontal offset of the control's left edge from its container, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Name

The unique design-time name of the control on its parent form. **String**. Inherited.

### Top

The vertical offset of the control's top edge from its container, in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Visible

Whether the control is currently displayed. **Boolean**. Inherited. Default: **True**.

### Width

The control's width in pixels. [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.
