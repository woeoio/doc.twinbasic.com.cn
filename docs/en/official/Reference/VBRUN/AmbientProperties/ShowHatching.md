---
title: ShowHatching
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/ShowHatching
---
# ShowHatching

Returns whether the container would like the control to draw a selection hatching pattern, as a **Boolean**. Read-only.

Syntax: *object*.**ShowHatching**

*object*
: *required* An object expression that evaluates to an **AmbientProperties** object.

Selection hatching is the diagonal cross-hatch the IDE draws over an inactive embedded object to make clear it is selected but not yet activated for editing. A control that paints its own selection feedback should overlay a hatching pattern when this property is **True**. As with [**ShowGrabHandles**](/en/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles), the property is generally only meaningful while [**UserMode**](/en/official/Reference/VBRUN/AmbientProperties/UserMode) is **False**.

### Example

This example responds to a **ShowHatching** change and repaints the control to show or hide the selection overlay.

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "ShowHatching"
            UserControl.Refresh    ' repaint to show or hide the hatching overlay
    End Select
End Sub
```

### See Also

- [ShowGrabHandles](/en/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles) property
- [UserMode](/en/official/Reference/VBRUN/AmbientProperties/UserMode) property
- [DisplayAsDefault](/en/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault) property
