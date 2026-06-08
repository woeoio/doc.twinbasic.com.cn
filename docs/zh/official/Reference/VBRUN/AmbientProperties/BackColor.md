---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '26d5242c-89dd-4025-b482-67fc10882eff'
  PropagateID: '26d5242c-89dd-4025-b482-67fc10882eff'
  ReservedCode1: 'bf571b76-e2c6-447b-bb48-8facaef3fd43'
  ReservedCode2: 'bf571b76-e2c6-447b-bb48-8facaef3fd43'
---

---
title: BackColor
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/BackColor
---
# BackColor

返回容器希望其嵌入控件默认使用的背景色，类型为**stdole.OLE_COLOR**。只读。

语法：*object*.**BackColor**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

未显式设置自身背景色的控件应使用此颜色绘制其背景，以与周围容器融合。该值为**OLE_COLOR**：RGB值、系统颜色引用或调色板索引引用。如需获取普通RGB值，可通过[**TranslateColor**](/official/Reference/VBA/Information/TranslateColor)转换。

### 示例

此示例响应环境**BackColor**更改并将其应用于控件背景。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "BackColor"
            UserControl.BackColor = Ambient.BackColor
    End Select
End Sub
```

### 另见

- [ForeColor](/official/Reference/VBRUN/AmbientProperties/ForeColor) 属性
- [Font](/official/Reference/VBRUN/AmbientProperties/Font) 属性
- [Palette](/official/Reference/VBRUN/AmbientProperties/Palette) 属性