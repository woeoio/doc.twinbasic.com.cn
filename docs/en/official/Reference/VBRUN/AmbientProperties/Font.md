---
title: Font
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/Font
---
# Font

Returns the font the container would like its embedded controls to use by default, as an **stdole.IFontDisp**. Read-only.

Syntax: *object*.**Font**

*object*
: *required* An object expression that evaluates to an **AmbientProperties** object.

A control that does not have its own font explicitly set should display text using this font, so that its captions and labels match the typography of the surrounding container. The returned **IFontDisp** exposes properties such as **Name**, **Size**, **Bold**, **Italic**, and **Underline**.

### Example

This example responds to an ambient **Font** change and applies it to the control's caption font.

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "Font"
            Set UserControl.Font = Ambient.Font
    End Select
End Sub
```

### See Also

- [BackColor](/en/official/Reference/VBRUN/AmbientProperties/BackColor) property
- [ForeColor](/en/official/Reference/VBRUN/AmbientProperties/ForeColor) property
- [TextAlign](/en/official/Reference/VBRUN/AmbientProperties/TextAlign) property
