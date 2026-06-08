---
title: "类型推断"
parent: Language Syntax
nav_order: 9
permalink: /Features/Language/Type-Inference
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4e61c145-e6e6-4d85-9db7-0dff43d6f65d'
  PropagateID: '4e61c145-e6e6-4d85-9db7-0dff43d6f65d'
  ReservedCode1: '59d2ee81-ad32-4472-9029-54eeb0ff2bc3'
  ReservedCode2: '59d2ee81-ad32-4472-9029-54eeb0ff2bc3'
---

# 类型推断

变量现在可以声明为 `As Any`，其类型将被推断，类似于 C++ 的 `auto`。

## 用法

`Dim x As Any = 5&` 将导致 x 为 `Long`。

```vb
Dim x As Any = 5&       ' x is inferred as Long
Dim s As Any = "hello"  ' s is inferred as String
Dim b As Any = True     ' b is inferred as Boolean
```

## 限制

这仅适用于 `Dim` 语句；参数不能为 `As Any`，API 声明除外。