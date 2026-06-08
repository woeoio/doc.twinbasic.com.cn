---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9871cf2e-ebdd-4e8f-b6e4-0cb45c4e47cc'
  PropagateID: '9871cf2e-ebdd-4e8f-b6e4-0cb45c4e47cc'
  ReservedCode1: '0863bf72-a900-422a-890e-af154f6c8e8b'
  ReservedCode2: '0863bf72-a900-422a-890e-af154f6c8e8b'
---

---
title: ShowGrabHandles
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/ShowGrabHandles
---
# ShowGrabHandles

返回容器是否希望控件绘制选择抓取手柄，类型为**Boolean**。只读。

语法：*object*.**ShowGrabHandles**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

抓取手柄是在设计器表面上选中控件的角和边缘绘制的小方块。简单控件可以将抓取手柄留给宿主并忽略此属性；绘制自身选择反馈的控件（例如因为控件占据其整个客户区）应在**ShowGrabHandles**为**True**时绘制它们。此属性通常仅在[**UserMode**](/official/Reference/VBRUN/AmbientProperties/UserMode)为**False**时有意义。

### 示例

此示例响应**ShowGrabHandles**更改并重绘控件以显示或隐藏手柄。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "ShowGrabHandles"
            UserControl.Refresh    ' 重绘以显示或隐藏选择抓取手柄
    End Select
End Sub
```

### 另见

- [ShowHatching](/official/Reference/VBRUN/AmbientProperties/ShowHatching) 属性
- [UserMode](/official/Reference/VBRUN/AmbientProperties/UserMode) 属性
- [DisplayAsDefault](/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault) 属性