---
title: 重载
parent: 语言语法
nav_order: 6
permalink: /Features/Language/Overloading
---

# 重载
twinBASIC 以两种方式支持重载：

## 按参数类型重载

以下子程序在模块/类/等中可以一起使用：

```vb
Sub foo(bar As Integer)
'...
End Sub

Sub foo(bar As Long)
'...
End Sub

Sub foo(bar As Double)
'...
End Sub
```

编译器将根据数据类型自动选择调用哪一个。

## 按参数数量重载

除了上述内容，您还可以添加以下内容：

```vb
Sub Foo(bar1 As Integer)
'...
End Sub

Sub Foo(bar1 As Integer, bar2 As Integer)
'...
End Sub
```

编译器将根据参数的数量和/或类型自动选择调用哪一个。