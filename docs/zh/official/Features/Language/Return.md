---
title: "Return 语法"
parent: Language Syntax
nav_order: 13
permalink: /Features/Language/Return
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ae655afd-5128-492b-8cc2-5dfef6599c4d'
  PropagateID: 'ae655afd-5128-492b-8cc2-5dfef6599c4d'
  ReservedCode1: '540e9cc4-b3dc-4895-a9d0-18ed0d951c5e'
  ReservedCode2: '540e9cc4-b3dc-4895-a9d0-18ed0d951c5e'
---

# Return 语法

你现在可以将赋值返回值和退出过程合并为一条语句，就像许多其他语言允许的那样。这通过 `Return` 关键字实现：

```vb
Private Function Foo() As Long
    Dim i As Long = 1
    If i Then
        Return i
    End If
End Function
```

这等价于：

```vb
Private Function Foo() As Long
    Dim i As Long = 1
    If i Then
        Foo = i
        Exit Function
    End If
End Function
```

`Return` 也可以用于返回对象。目前仅在指定了值且在函数中使用时有效；你不能在 Sub 中使用不带任何内容的 `Return`。

`Return` 可用于函数过程、函数方法过程和属性获取过程。