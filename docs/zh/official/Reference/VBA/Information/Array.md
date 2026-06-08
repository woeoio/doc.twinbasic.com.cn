---
title: Array
parent: Information Module
permalink: /tB/Modules/Information/Array
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e561cae3-e4d4-46d2-8939-49763e413bd7'
  PropagateID: 'e561cae3-e4d4-46d2-8939-49763e413bd7'
  ReservedCode1: '9d875e03-c360-46a4-b47f-e4180cd4062d'
  ReservedCode2: '9d875e03-c360-46a4-b47f-e4180cd4062d'
---

# Array

返回一个包含由逗号分隔值列表构建的数组的**Variant**，或者——在赋值左侧使用时——将右侧的数组解构到提供的变量中。

语法：
- *result* **= Array(** [ *ArgList* ] **)** — 数组创建。
- **Array(** *Var1*, *Var2*, ... **) =** *RhsArray* — 解构赋值。

*ArgList*
: *可选* 逗号分隔的值列表，分配给新数组的元素。如果未提供参数，则返回空数组。

*Var1*, *Var2*, ...
: *必需*（解构形式）接收*RhsArray*连续元素的变量。传入`_`可跳过元素。

*RhsArray*
: *必需*（解构形式）一个数组；非数组值会产生错误。

使用**Array**创建的数组的下界由组件范围的**Option Base**语句确定，默认为`0`。

```vb
Option Base 1
Dim a As Variant
a = Array(10, 20, 30)
Debug.Print a(1)             ' 10
```

解构形式按顺序将数组解包到命名变量中，从数组的下界开始。参数列表可以混合变量和`_`占位符以跳过元素：

```vb
Dim x As Variant, y As Variant, z As Variant
Array(x, y, z) = Array("one", "two", "three")
' x = "one", y = "two", z = "three"

Dim a As Variant, b As Variant
Array(a, _, b) = Array(1, 2, 3)
' a = 1, b = 3 — the second element is discarded
```

::: info
未声明为数组的**Variant**仍可包含数组，**Variant**数组可以保存除定长字符串和用户自定义类型之外的任何类型的值。虽然包含数组的**Variant**与**Variant**元素数组在概念上不同，但两者的索引方式相同。
:::

### 示例

本示例使用**Array**函数返回一个包含数组的**Variant**。

```vb
Dim MyWeek As Variant
Dim MyDay As Variant
MyWeek = Array("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
MyDay = MyWeek(2)        ' MyDay contains "Wed" with default Option Base 0,
                         ' or "Tue" under Option Base 1.
```

### 另请参阅

- [Option](/official/Reference/Core/Option)语句
- [LBound](/official/Reference/VBA/Information/LBound)、[UBound](/official/Reference/VBA/Information/UBound)函数