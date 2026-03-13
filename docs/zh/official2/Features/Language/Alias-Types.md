---
title: 别名类型
parent: 语言语法
nav_order: 0
permalink: /Features/Language/Alias-Types
---

# 别名类型

别名是用户定义类型、内置类型或接口的替代名称。这类似于 C/C++ 的 `typedef` 语句。然后可以在原始类型的位置使用这些别名，并将被视为使用了原始类型（不会产生类型不匹配）。

`[Public|Private] Alias 别名 As 原始名称`

### 示例

使用内置类型，或者如果您有这样的类型：

```vb
Public Type POINT
    x As Long
    y As Long
End Type
```

您可以创建别名：

```vb
Public Alias POINTAPI As POINT

Public Alias CBoolean As Byte

Public Alias KAFFINITY As LongPtr
```

与接口和 coclass 一样，这些必须放在 .twin 文件中，在 `Module` 和 `Class` 块之外。您可以为其他别名创建别名。可选的 `Public` 和 `Private` 修饰符确定别名是否导出到 ActiveX DLL 或控件的类型库。`Private` 别名将导致其使用被替换为原始类型。