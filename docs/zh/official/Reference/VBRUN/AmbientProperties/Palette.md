---
title: Palette
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/Palette
---
# Palette

返回容器希望其嵌入控件使用的调色板，类型为**stdole.IPictureDisp**。只读。

语法：*object*.**Palette**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

返回的对象是附带了调色板的图片，该调色板标识宿主期望可用的颜色。在调色板管理的显示器上渲染的控件应使用这些颜色，以避免窗口获得焦点时出现不希望的调色板闪烁。在现代真彩色显示器上，调色板很少有意义，大多数控件可以忽略它。

### 示例

此示例响应环境**Palette**更改，触发重绘。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "Palette"
            UserControl.Refresh    ' 使用更新的调色板重绘
    End Select
End Sub
```

### 另见

- [BackColor](/official/Reference/VBRUN/AmbientProperties/BackColor) 属性
- [ForeColor](/official/Reference/VBRUN/AmbientProperties/ForeColor) 属性