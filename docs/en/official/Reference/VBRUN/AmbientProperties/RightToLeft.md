---
title: RightToLeft
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/RightToLeft
---
# RightToLeft

Returns whether the container is laid out for a right-to-left language, as a **Boolean**. Read-only.

Syntax: *object*.**RightToLeft**

*object*
: *required* An object expression that evaluates to an **AmbientProperties** object.

The property is **True** when the host is rendering its UI for a right-to-left language such as Arabic or Hebrew, and **False** for left-to-right languages. A control that displays text or directional adornments (scrollbars, tree expanders, alignment defaults) should mirror its layout when this is **True** so that it reads naturally inside an RTL container.

### Example

This example responds to a **RightToLeft** change and triggers a repaint to mirror the layout.

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "RightToLeft"
            UserControl.Refresh    ' repaint with mirrored layout for RTL languages
    End Select
End Sub
```

### See Also

- [LocaleID](/en/official/Reference/VBRUN/AmbientProperties/LocaleID) property
- [TextAlign](/en/official/Reference/VBRUN/AmbientProperties/TextAlign) property
