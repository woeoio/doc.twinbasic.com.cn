---
title: 内联变量初始化
parent: 语言语法
nav_order: 14
permalink: /Features/Language/Inline-Initialization
---

# 内联变量初始化

您现在可以内联设置变量的初始值，而无需使用行继续字符。

## 示例

```vb
Dim i As Long = 1
Dim foo As Boolean = bar()
Dim arr As Variant = Array(1, 2, 3)
Dim strArr(2) As String = Array("a", "b", "c")
Dim cMC As cMyClass = New cMyClass(customConstructorArgs)
```

## For 的内联变量声明

您现在不再需要为计数器变量单独使用`Dim`语句：

```vb
For i As Long = 0 To 10
    '...
Next
```

现在是有效的语法。您可以使用任何类型，而不仅仅是`Long`。