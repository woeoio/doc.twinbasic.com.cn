---
title: DisplayAsDefault
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/DisplayAsDefault
---
# DisplayAsDefault

返回容器是否将此控件视为其默认控件，类型为**Boolean**。只读。

语法：*object*.**DisplayAsDefault**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

窗体上的默认控件是用户按下**Enter**键而未先将焦点给予其他控件时激活的控件——通常是命令按钮。希望宣传其默认按钮状态的控件应在**DisplayAsDefault**为**True**时以更粗的边框或其他区分性视觉效果绘制自身。

### 示例

此示例响应**DisplayAsDefault**更改并触发重绘以更新按钮边框。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "DisplayAsDefault"
            UserControl.Refresh    ' 重绘以显示或移除默认按钮边框
    End Select
End Sub
```

### 另见

- [ShowGrabHandles](/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles) 属性
- [ShowHatching](/official/Reference/VBRUN/AmbientProperties/ShowHatching) 属性
- [SupportsMnemonics](/official/Reference/VBRUN/AmbientProperties/SupportsMnemonics) 属性