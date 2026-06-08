---
title: MessageReflect
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/MessageReflect
---
# MessageReflect

返回容器是否将窗口消息反射回控件，类型为**Boolean**。只读。

语法：*object*.**MessageReflect**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

某些Windows通知消息——如**WM_COMMAND**、**WM_NOTIFY**和**WM_CTLCOLOR\***系列——默认传递给产生它们的控件的父窗口。当**MessageReflect**为**True**时，容器将这些通知作为**OCM_\***消息反射回控件自身的窗口过程，使控件可以自行处理；当为**False**时，容器处理它们，控件不会看到。

### 示例

此示例缓存环境**MessageReflect**标志，使控件知道是否需要处理反射消息。

```vb
Private mMessageReflect As Boolean

Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "MessageReflect"
            mMessageReflect = Ambient.MessageReflect
    End Select
End Sub
```

### 另见

- [SupportsMnemonics](/official/Reference/VBRUN/AmbientProperties/SupportsMnemonics) 属性
- [UserMode](/official/Reference/VBRUN/AmbientProperties/UserMode) 属性