---
title: 类型推断
parent: 语言语法
nav_order: 9
permalink: /Features/Language/Type-Inference
---

# 类型推断

变量现在可以声明为`As Any`，它们的类型将被推断，类似于 C++ 的`auto`。

## 用法

`Dim x As Any = 5&`将导致 x 成为`Long`。

## 限制

这仅适用于`Dim`语句；参数不能是`As Any`，除非在 API 声明中。