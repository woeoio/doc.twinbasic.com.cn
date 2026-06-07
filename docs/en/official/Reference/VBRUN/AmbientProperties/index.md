---
title: AmbientProperties
parent: VBRUN Package
nav_order: 19
permalink: /tB/Packages/VBRUN/AmbientProperties/
---

# AmbientProperties class

The **AmbientProperties** object exposes information about the environment in which a control is hosted. The container --- a form, a property page, the IDE designer surface --- populates this object with hints about its appearance, locale, and operating mode so that an embedded control can adapt itself to fit in. Every property is read-only: the container, not the control, decides what these values should be.

## Detecting design-time versus run-time

A control often needs to behave differently while it is being placed on a designer surface than when it is actually running inside an application. [**UserMode**](/en/official/Reference/VBRUN/AmbientProperties/UserMode) returns **False** in the IDE designer and **True** at run time, and [**UIDead**](/en/official/Reference/VBRUN/AmbientProperties/UIDead) becomes **True** while execution is paused under the debugger so that a control knows not to repaint or respond to input. [**ShowGrabHandles**](/en/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles) and [**ShowHatching**](/en/official/Reference/VBRUN/AmbientProperties/ShowHatching) tell a control whether the container would like it to draw the usual selection adornments while it is being edited.

```vb
Sub AdaptToHost(ByVal Host As AmbientProperties)
    If Host.UserMode Then
        ' Running in the host application — render normally.
    Else
        ' Embedded in a designer — show edit-time decorations instead.
    End If
End Sub
```

## Visual defaults from the container

The container suggests a default colour scheme and typeface so that embedded controls fit in with their surroundings. [**BackColor**](/en/official/Reference/VBRUN/AmbientProperties/BackColor) and [**ForeColor**](/en/official/Reference/VBRUN/AmbientProperties/ForeColor) supply the suggested background and foreground colours as **OLE_COLOR** values, [**Font**](/en/official/Reference/VBRUN/AmbientProperties/Font) returns the suggested **stdole.IFontDisp**, and [**Palette**](/en/official/Reference/VBRUN/AmbientProperties/Palette) returns a hint palette as an **stdole.IPictureDisp**. [**TextAlign**](/en/official/Reference/VBRUN/AmbientProperties/TextAlign) reports the container's preferred text alignment, and [**RightToLeft**](/en/official/Reference/VBRUN/AmbientProperties/RightToLeft) is **True** when the container is laid out for a right-to-left language.

## Layout and other UI hints

[**ScaleUnits**](/en/official/Reference/VBRUN/AmbientProperties/ScaleUnits) names the unit of measure the container uses to size itself --- for example `"Twip"` or `"Pixel"`. [**SupportsMnemonics**](/en/official/Reference/VBRUN/AmbientProperties/SupportsMnemonics) is **True** when the container will dispatch keyboard mnemonics --- the underlined letters following an `&` --- to its controls. [**DisplayAsDefault**](/en/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault) is **True** if the container is treating this control as its default control, so the control can paint itself with a heavier border. [**MessageReflect**](/en/official/Reference/VBRUN/AmbientProperties/MessageReflect) indicates whether the container reflects window messages addressed to the control back to the control's own message handler.

## Locale and identity

[**LocaleID**](/en/official/Reference/VBRUN/AmbientProperties/LocaleID) returns the Locale ID of the container, so a control can format text and numbers consistently with its host. [**DisplayName**](/en/official/Reference/VBRUN/AmbientProperties/DisplayName) returns the name the container has assigned to the control --- a useful string for error messages or property browsers.

## Members

- [BackColor](/en/official/Reference/VBRUN/AmbientProperties/BackColor) -- returns the container's suggested background colour
- [DisplayAsDefault](/en/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault) -- returns whether the container is treating this control as its default
- [DisplayName](/en/official/Reference/VBRUN/AmbientProperties/DisplayName) -- returns the name the container has assigned to the control
- [Font](/en/official/Reference/VBRUN/AmbientProperties/Font) -- returns the container's suggested font
- [ForeColor](/en/official/Reference/VBRUN/AmbientProperties/ForeColor) -- returns the container's suggested foreground colour
- [LocaleID](/en/official/Reference/VBRUN/AmbientProperties/LocaleID) -- returns the container's Locale ID
- [MessageReflect](/en/official/Reference/VBRUN/AmbientProperties/MessageReflect) -- returns whether the container reflects window messages back to the control
- [Palette](/en/official/Reference/VBRUN/AmbientProperties/Palette) -- returns the container's suggested colour palette
- [RightToLeft](/en/official/Reference/VBRUN/AmbientProperties/RightToLeft) -- returns whether the container is laid out right-to-left
- [ScaleUnits](/en/official/Reference/VBRUN/AmbientProperties/ScaleUnits) -- returns the unit of measure used by the container
- [ShowGrabHandles](/en/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles) -- returns whether the container wants the control to draw selection grab handles
- [ShowHatching](/en/official/Reference/VBRUN/AmbientProperties/ShowHatching) -- returns whether the container wants the control to draw a selection hatching pattern
- [SupportsMnemonics](/en/official/Reference/VBRUN/AmbientProperties/SupportsMnemonics) -- returns whether the container will dispatch keyboard mnemonics to controls
- [TextAlign](/en/official/Reference/VBRUN/AmbientProperties/TextAlign) -- returns the container's preferred text alignment
- [UIDead](/en/official/Reference/VBRUN/AmbientProperties/UIDead) -- returns whether the user interface is non-responsive (for example, paused in the debugger)
- [UserMode](/en/official/Reference/VBRUN/AmbientProperties/UserMode) -- returns **True** at run time and **False** when hosted in a designer
