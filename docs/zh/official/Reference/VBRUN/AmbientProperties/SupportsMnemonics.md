---
title: SupportsMnemonics
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/SupportsMnemonics
---
# SupportsMnemonics

返回容器是否将键盘助记符分派给嵌入控件，类型为**Boolean**。只读。

语法：*object*.**SupportsMnemonics**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

助记符是标题中如`&File`里带下划线的字母——它为用户提供通过**Alt+F**调用控件的方式。当**SupportsMnemonics**为**True**时，容器将助记符按键转发给控件；控件在显示标题时应为助记字母添加下划线。当属性为**False**时，宿主不会转发助记符，控件应显示不带下划线的标题。

### 示例

此示例响应**SupportsMnemonics**更改，触发重绘以更新标题下划线。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "SupportsMnemonics"
            UserControl.Refresh    ' 重绘以添加或隐藏助记字符下划线
    End Select
End Sub
```

### 另见

- [DisplayAsDefault](/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault) 属性
- [MessageReflect](/official/Reference/VBRUN/AmbientProperties/MessageReflect) 属性