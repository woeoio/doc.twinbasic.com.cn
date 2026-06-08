---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '478bb500-3cd6-4dd8-b609-996b27fac24c'
  PropagateID: '478bb500-3cd6-4dd8-b609-996b27fac24c'
  ReservedCode1: 'b445d39e-9b87-4937-8b04-b61f1bef801e'
  ReservedCode2: 'b445d39e-9b87-4937-8b04-b61f1bef801e'
---

---
title: UserMode
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/UserMode
---
# UserMode

返回控件是在应用程序中运行（**True**）还是正在设计器中编辑（**False**），类型为**Boolean**。只读。

语法：*object*.**UserMode**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

这是最常检查的环境属性。控件在执行仅运行时有意义的操作前应检查**UserMode**——连接数据库、启动计时器、动画化自身外观——因为在设计时，宿主在布局表面上显示控件的静态表示。当**UserMode**为**False**时，控件还应按要求绘制选择装饰，如[**ShowGrabHandles**](/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles)和[**ShowHatching**](/official/Reference/VBRUN/AmbientProperties/ShowHatching)。

### 示例

此示例响应**UserMode**更改，仅在运行时启用动画计时器。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "UserMode"
            tmrAnimate.Enabled = Ambient.UserMode    ' 仅在用户模式下运行计时器
    End Select
End Sub
```

### 另见

- [UIDead](/official/Reference/VBRUN/AmbientProperties/UIDead) 属性
- [ShowGrabHandles](/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles) 属性
- [ShowHatching](/official/Reference/VBRUN/AmbientProperties/ShowHatching) 属性
- [DisplayAsDefault](/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault) 属性