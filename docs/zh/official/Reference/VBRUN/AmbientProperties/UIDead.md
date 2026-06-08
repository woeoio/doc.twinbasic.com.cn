---
title: UIDead
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/UIDead
---
# UIDead

返回用户界面当前是否无响应，类型为**Boolean**。只读。

语法：*object*.**UIDead**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

当应用程序处于无法有意义地响应用户输入的状态时，宿主将**UIDead**设置为**True**——最常见的是执行在调试器内暂停时，也包括长时间模态操作期间。当**UIDead**为**True**时，控件应抑制动画、悬停效果和通常处理的任何输入，因为宿主的主线程无法提供有用的后续响应。

### 示例

此示例响应**UIDead**更改，在宿主无响应时暂停动画。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "UIDead"
            If Ambient.UIDead Then
                tmrAnimate.Enabled = False
            End If
    End Select
End Sub
```

### 另见

- [UserMode](/official/Reference/VBRUN/AmbientProperties/UserMode) 属性