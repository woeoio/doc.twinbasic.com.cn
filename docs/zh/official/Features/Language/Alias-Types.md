---
title: "类型别名"
parent: Language Syntax
nav_order: 0
permalink: /Features/Language/Alias-Types
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '645d4ee3-9571-4702-a15e-208d1c33bf73'
  PropagateID: '645d4ee3-9571-4702-a15e-208d1c33bf73'
  ReservedCode1: '23fdb143-5682-43db-92e1-61f59d0edb4c'
  ReservedCode2: '23fdb143-5682-43db-92e1-61f59d0edb4c'
---

# 类型别名

别名是用户定义类型、内置类型或接口的替代名称。这类似于 C/C++ 的 `typedef` 语句。这些可以用来替代原始类型，并被视为使用了原始类型（不会导致类型不匹配）。

`[Public|Private] Alias AltName As OrigName`

### 示例

对于内置类型，或者如果你有一个类型如：

```vb
Public Type POINT
    x As Long
    y As Long
End Type
```

你可以创建别名：

```vb
Public Alias POINTAPI As POINT

Public Alias CBoolean As Byte

Public Alias KAFFINITY As LongPtr
```

与接口和 CoClass 一样，这些必须放在 .twin 文件中，在 `Module` 和 `Class` 块之外。你可以创建其他别名的别名。可选的 `Public` 和 `Private` 修饰符决定别名是否导出到 ActiveX DLL 或控件的类型库中。`Private` 别名将导致使用它时被替换为原始类型。