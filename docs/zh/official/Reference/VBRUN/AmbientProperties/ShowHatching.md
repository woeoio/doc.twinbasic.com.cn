---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '01bb83e3-ceca-498d-a0d0-9ce6f3c1d946'
  PropagateID: '01bb83e3-ceca-498d-a0d0-9ce6f3c1d946'
  ReservedCode1: '4c78b6d5-1c8b-4fe2-9303-dd995d17fde9'
  ReservedCode2: '4c78b6d5-1c8b-4fe2-9303-dd995d17fde9'
---

---
title: ShowHatching
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/ShowHatching
---
# ShowHatching

返回容器是否希望控件绘制选择阴影图案，类型为**Boolean**。只读。

语法：*object*.**ShowHatching**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

选择阴影是IDE在非活动嵌入对象上绘制的对角交叉阴影，以明确表示它已被选中但尚未激活编辑。绘制自身选择反馈的控件应在此属性为**True**时叠加阴影图案。与[**ShowGrabHandles**](/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles)一样，此属性通常仅在[**UserMode**](/official/Reference/VBRUN/AmbientProperties/UserMode)为**False**时有意义。

### 示例

此示例响应**ShowHatching**更改并重绘控件以显示或隐藏选择覆盖层。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "ShowHatching"
            UserControl.Refresh    ' 重绘以显示或隐藏阴影覆盖层
    End Select
End Sub
```

### 另见

- [ShowGrabHandles](/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles) 属性
- [UserMode](/official/Reference/VBRUN/AmbientProperties/UserMode) 属性
- [DisplayAsDefault](/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault) 属性