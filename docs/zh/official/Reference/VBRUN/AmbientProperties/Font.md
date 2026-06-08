---
title: Font
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/Font
---
# Font

返回容器希望其嵌入控件默认使用的字体，类型为**stdole.IFontDisp**。只读。

语法：*object*.**Font**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

未显式设置自身字体的控件应使用此字体显示文本，使其标题和标签与周围容器的排版匹配。返回的**IFontDisp**公开**Name**、**Size**、**Bold**、**Italic**和**Underline**等属性。

### 示例

此示例响应环境**Font**更改并将其应用于控件的标题字体。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "Font"
            Set UserControl.Font = Ambient.Font
    End Select
End Sub
```

### 另见

- [BackColor](/official/Reference/VBRUN/AmbientProperties/BackColor) 属性
- [ForeColor](/official/Reference/VBRUN/AmbientProperties/ForeColor) 属性
- [TextAlign](/official/Reference/VBRUN/AmbientProperties/TextAlign) 属性