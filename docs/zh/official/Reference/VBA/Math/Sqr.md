---
title: Sqr
parent: Math Module
permalink: /tB/Modules/Math/Sqr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b5e210d8-c0ad-4328-9455-cb3f038bd5c6'
  PropagateID: 'b5e210d8-c0ad-4328-9455-cb3f038bd5c6'
  ReservedCode1: '78328c64-ab99-449d-a4f3-f068ff4aad0a'
  ReservedCode2: '78328c64-ab99-449d-a4f3-f068ff4aad0a'
---

# Sqr

返回一个 **Double**，指定数字的平方根。

语法：**Sqr(** *number* **)**

*number*
: *必需* **Double** 或任何大于或等于零的有效数值表达式。

### 示例

此示例使用 **Sqr** 函数计算数字的平方根。

```vb
Dim MySqr
MySqr = Sqr(4)     ' Returns 2.
MySqr = Sqr(23)    ' Returns 4.79583152331272.
MySqr = Sqr(0)     ' Returns 0.
MySqr = Sqr(-4)    ' Generates a run-time error.
```

### 另请参阅

- [Exp](/official/Reference/VBA/Math/Exp) 函数
- [Log](/official/Reference/VBA/Math/Log) 函数