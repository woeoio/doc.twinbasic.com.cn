---
title: ForeColor
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/ForeColor
---
# ForeColor

返回容器希望其嵌入控件默认使用的前景色，类型为**stdole.OLE_COLOR**。只读。

语法：*object*.**ForeColor**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

未显式设置自身前景色的控件应使用此颜色绘制文本和其他前景元素，使其在容器的[**BackColor**](/official/Reference/VBRUN/AmbientProperties/BackColor)上保持可读。该值为**OLE_COLOR**：RGB值、系统颜色引用或调色板索引引用。如需获取普通RGB值，可通过[**TranslateColor**](/official/Reference/VBA/Information/TranslateColor)转换。

### 示例

此示例响应环境**ForeColor**更改并将其应用于控件的文本颜色。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "ForeColor"
            UserControl.ForeColor = Ambient.ForeColor
    End Select
End Sub
```

### 另见

- [BackColor](/official/Reference/VBRUN/AmbientProperties/BackColor) 属性
- [Font](/official/Reference/VBRUN/AmbientProperties/Font) 属性
- [Palette](/official/Reference/VBRUN/AmbientProperties/Palette) 属性