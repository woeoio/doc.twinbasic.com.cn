---
title: 返回语法
parent: 语言语法
nav_order: 13
permalink: /Features/Language/Return
---

# 返回语法

您现在可以将赋值返回值和退出过程合并为单个语句，就像许多其他语言允许的那样。这是通过`Return`关键字实现的：

```vb
Private Function Foo() As Long
    Dim i As Long = 1
    If i Then
        Return i
    End If
End Function
```

这等同于：

```vb
Private Function Foo() As Long
    Dim i As Long = 1
    If i Then
        Foo = i
        Exit Function
    End If
End Function
```

`Return`也可以用于返回对象。目前它仅在指定值且在函数内时有效；您不能在子程序中不带任何内容使用`Return`。

`Return`可以用于函数过程、函数方法过程和属性获取器过程。