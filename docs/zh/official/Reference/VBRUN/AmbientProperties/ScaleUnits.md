---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd05702b1-4cd3-4067-a979-adf7b1aff51a'
  PropagateID: 'd05702b1-4cd3-4067-a979-adf7b1aff51a'
  ReservedCode1: 'b0d15769-ad23-4c59-b9bf-786a1782af3c'
  ReservedCode2: 'b0d15769-ad23-4c59-b9bf-786a1782af3c'
---

---
title: ScaleUnits
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/ScaleUnits
---
# ScaleUnits

返回容器用于自身尺寸的度量单位的本地化名称，类型为**String**。只读。

语法：*object*.**ScaleUnits**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

常见值包括`"Twip"`、`"Pixel"`、`"Inch"`、`"Centimeter"`、`"Millimeter"`、`"Point"`和`"Character"`，但容器可自由返回任何字符串并针对当前语言进行本地化。此值为显示用途的提示——例如在状态栏或属性表中——而非应被解析的固定枚举。

### 示例

此示例响应**ScaleUnits**更改并更新控件属性表中的标签。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "ScaleUnits"
            lblUnits.Caption = Ambient.ScaleUnits
    End Select
End Sub
```

### 另见

- [LocaleID](/official/Reference/VBRUN/AmbientProperties/LocaleID) 属性
- [TextAlign](/official/Reference/VBRUN/AmbientProperties/TextAlign) 属性