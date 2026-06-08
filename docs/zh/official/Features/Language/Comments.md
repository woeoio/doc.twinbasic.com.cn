---
title: "注释语法"
parent: Language Syntax
nav_order: 17
permalink: /Features/Language/Comments
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c0029d48-6c03-452d-97cc-f0e22330837e'
  PropagateID: 'c0029d48-6c03-452d-97cc-f0e22330837e'
  ReservedCode1: '8efd582f-6fc6-492b-a37f-132ec53db66a'
  ReservedCode2: '8efd582f-6fc6-492b-a37f-132ec53db66a'
---

# 新注释语法

## 块注释和行内注释

你现在可以使用 `/* */` 语法。例如，`Sub Foo(bar As Long /* out */)` 或：

```c
/*
Everything here is
a comment until:
*/
```

### 示例

```vb
' Single-line comment using the apostrophe

Sub Greet(ByVal name As String /* in */)
    Debug.Print "Hello, " & name  ' inline comment
    /*
    This block comment
    spans multiple lines.
    */
End Sub
```