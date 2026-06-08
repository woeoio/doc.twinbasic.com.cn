---
title: "重载"
parent: Language Syntax
nav_order: 6
permalink: /Features/Language/Overloading
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9b3f4a55-bbda-477f-8912-760b1b757394'
  PropagateID: '9b3f4a55-bbda-477f-8912-760b1b757394'
  ReservedCode1: '99b0af21-5f9c-4bba-ba6f-b7fcb25234d7'
  ReservedCode2: '99b0af21-5f9c-4bba-ba6f-b7fcb25234d7'
---

# 重载

twinBASIC 支持两种方式的重载：

## 按参数类型重载

以下 Sub 可以同时存在于模块/类等中：

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

编译器会根据数据类型自动选择调用哪一个。

## 按参数数量重载

除了上述方式外，你还可以添加以下内容：

```vb
Sub Foo(bar1 As Integer)
'...
End Sub

Sub Foo(bar1 As Integer, bar2 As Integer)
'...
End Sub
```

编译器会根据参数的数量和/或类型自动选择调用哪一个。