---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b73ad82c-4ed6-4860-a093-602fa7aa4925'
  PropagateID: 'b73ad82c-4ed6-4860-a093-602fa7aa4925'
  ReservedCode1: '9a68cc06-8192-44e1-80d7-4228ab09be67'
  ReservedCode2: '9a68cc06-8192-44e1-80d7-4228ab09be67'
---

---
title: TextAlign
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/TextAlign
---
# TextAlign

返回容器首选的文本对齐方式，类型为**Integer**。只读。

语法：*object*.**TextAlign**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

显示文本且未显式设置自身对齐方式的控件应按此提示对齐文本。该值遵循标准OLE控件对齐枚举：

| 值 | 含义 |
|-------|--------------------------------------------------------|
| 0     | 常规——数值右对齐，文本左对齐 |
| 1     | 左对齐                                           |
| 2     | 居中                                                |
| 3     | 右对齐                                           |
| 4     | 填充                                                   |

### 示例

此示例响应**TextAlign**更改，以更新后的对齐方式重绘控件。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "TextAlign"
            UserControl.Refresh    ' 以更新后的文本对齐方式重绘
    End Select
End Sub
```

### 另见

- [Font](/official/Reference/VBRUN/AmbientProperties/Font) 属性
- [RightToLeft](/official/Reference/VBRUN/AmbientProperties/RightToLeft) 属性
- [ScaleUnits](/official/Reference/VBRUN/AmbientProperties/ScaleUnits) 属性