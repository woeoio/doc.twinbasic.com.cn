---
title: WindowsFormOptions
parent: WaynesForm
permalink: /tB/Packages/CustomControls/WaynesForm/WindowsFormOptions
---

# WindowsFormOptions class
The Win32-frame settings of a [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) --- border style, initial window state, startup position, taskbar visibility, and the title-bar buttons. Exposed as [**WaynesForm.WindowsOptions**](/official/Reference/CustomControls/WaynesForm/#windowsoptions); a single instance per form, created automatically.

Most of the fields take effect *once*, when the form is first shown --- changing [**StartUpPosition**](#startupposition) or [**WindowState**](#windowstate) on a form that is already visible has no effect. The exception is the title-bar buttons; whether they have a visible effect depends on whether [**BorderStyle**](#borderstyle) is one of the styles that include those buttons in the first place.

The type itself is `Private Class` --- the instance is accessed only through the form's **WindowsOptions** property, and a variable typed as **WindowsFormOptions** cannot be declared from outside the package.

```vb
Private Sub Form_Load()
    With Me.WindowsOptions
        .StartUpPosition = tbStartUpCenterScreen
        .BorderStyle = tbFixedDialog
        .MaximizeButton = False
        .ShowInTaskbar = False
    End With
End Sub
```

## Properties

### BorderStyle

The Win32 frame style --- thin / thick border, resizable / fixed, normal / tool-window title bar. A member of [**BorderStyle**](/official/Reference/CustomControls/Enumerations/BorderStyle). Default: **tbFixedSizable**.

### ControlBox

Whether the form's title bar shows the system control box (the icon at the far left of the bar, with the **Move** / **Close** menu). **Boolean**. Default: **True**.

### MaximizeButton

Whether the title bar shows a **Maximize** button. **Boolean**. Default: **True**. Effective only when [**BorderStyle**](#borderstyle) is one of the resizable styles.

### MinimizeButton

Whether the title bar shows a **Minimize** button. **Boolean**. Default: **True**. Effective only when [**BorderStyle**](#borderstyle) is one of the styles that supports minimizing.

### ShowInTaskbar

Whether the form's window appears in the Windows taskbar. **Boolean**. Default: **True**.

### StartUpPosition

How the form's window is positioned when first shown. A member of [**StartupPosition**](/official/Reference/CustomControls/Enumerations/StartupPosition). Default: **tbStartUpWindowsDefault**.

### WindowState

The window state of the form when first shown --- normal, minimized, or maximized. A member of [**WindowState**](/official/Reference/CustomControls/Enumerations/WindowState). Default: **tbNormal**.

## Events

### OnChanged

Raised whenever any of the seven fields is assigned. The parent [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) listens for this event and (where applicable to a not-yet-shown form) re-applies the frame settings.
