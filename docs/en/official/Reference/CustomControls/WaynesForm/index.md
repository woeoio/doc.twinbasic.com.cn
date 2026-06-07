---
title: WaynesForm
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesForm/
---

# WaynesForm class
The top-level form class that hosts the package's custom controls. A **WaynesForm** is the equivalent of a `Form` from the [**VB**](/en/official/Reference/VB) package, but instead of being a Win32 native window with controls overlaid on top, it is an owner-drawn surface that paints itself and its child controls through the [**CustomControls**](/en/official/Reference/CustomControls) framework.

Within the current release of the package every form created with the designer is hard-coded to use **WaynesForm** as its root class; other base form classes are planned but not yet supported.

A form has a [**Caption**](#caption) (shown in the Win32 title bar), a [**BackgroundFill**](#backgroundfill) (painted across its entire client area), and a [**WindowsOptions**](#windowsoptions) sub-object that controls the surrounding Win32 frame --- border style, window state, taskbar visibility, minimize / maximize buttons, and so on. Call [**Show**](#show) to display the form; call [**Close**](#close) to close it.

```vb
Private Sub Form_Load()
    Me.Caption = "Welcome"
    Me.BackgroundFill.ColorPoints.SetSolidColor vbWhite
    With Me.WindowsOptions
        .StartUpPosition = tbStartUpCenterScreen
        .BorderStyle = tbFixedDialog
        .MaximizeButton = False
    End With
End Sub
```

[**BackgroundFill**](#backgroundfill) is an ordinary [**Fill**](/en/official/Reference/CustomControls/Styles/Fill), so the form can display a gradient backdrop or a solid colour --- this is what the package's `HelloWorld` sample form uses to give itself a soft top-to-bottom wash:

```vb
Private Sub Form_Load()
    Me.BackgroundFill.SetSimplePattern &HE5E5E5, &HF8F8F8, _
            Pattern:=tbGradientNorthToSouth
End Sub
```

## Modal display

The current release supports modal display only. Calling [**Show**](#show) with **vbModeless** writes a debug-print message and otherwise does nothing --- call **Show vbModal** to display the form.

## Properties

### BackgroundFill

The [**Fill**](/en/official/Reference/CustomControls/Styles/Fill) that paints the form's entire client area. Defaults to a solid light-grey ([**WAYNESCOLOR_LIGHTGREY**](#) --- `&HD0D0D0`).

### Caption

The text shown in the Win32 title bar of the form. **String**.

Syntax: *object*.**Caption** [ = *string* ]

### Controls

The [**CustomControlsCollection**](/en/official/Reference/CustomControls/Framework/CustomControlsCollection) of every control hosted on the form. Inherited from the form base. Read-only --- iterate or look up by index / name to access individual controls.

### FormDesignerId

A **String** holding the unique GUID that associates this form instance with its designer-saved metadata. Inherited from the form base. Application code does not normally read or write this --- the framework populates it.

### Height

The form's height in pixels. [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Left

The form's left position in pixels --- honoured only when [**WindowsOptions.StartUpPosition**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#startupposition) is **tbStartUpManual**. [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Name

The form's name within the project. **String**. Inherited.

### Top

The form's top position in pixels --- honoured only when [**WindowsOptions.StartUpPosition**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#startupposition) is **tbStartUpManual**. [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### Width

The form's width in pixels. [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount). Inherited.

### WindowsOptions

The [**WindowsFormOptions**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions) that controls the Win32 frame --- border style, window state, taskbar visibility, minimize / maximize buttons, system menu.

## Methods

### Close

Closes the form's underlying window.

Syntax: *object*.**Close**

### Show

Shows the form. The current release supports modal display only --- calling with **vbModeless** writes a debug message and otherwise does nothing.

Syntax: *object*.**Show** [ *Modal* ]

*Modal*
: *optional* A member of [**FormShowConstants**](/en/official/Reference/VBRUN/Constants/FormShowConstants). Pass **vbModal** for the supported modal display; **vbModeless** is currently a no-op.

### StartupShow

Shows the form unconditionally --- used by the framework to display the project's startup form. Application code can call it but [**Show**](#show) is the normal entry point.

Syntax: *object*.**StartupShow**

## Events

### Click

Raised when the user clicks on the form's background --- i.e. on a region not occupied by a hosted control.

Syntax: *object*\_**Click**( )
