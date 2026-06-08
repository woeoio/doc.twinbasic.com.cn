---
title: Hex
parent: Conversion Module
permalink: /tB/Modules/Conversion/Hex
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6233ec02-231f-4a6d-8d34-949dc613f30c'
  PropagateID: '6233ec02-231f-4a6d-8d34-949dc613f30c'
  ReservedCode1: 'd51bb007-4c28-480b-99df-9cc29aaaa1c4'
  ReservedCode2: 'd51bb007-4c28-480b-99df-9cc29aaaa1c4'
---

# Hex, Hex$

返回表示数字十六进制值的字符串。

语法：

- **Hex$(** *number* **)**
- **Hex(** *number* **)**

*number*
: *必需* 任何有效的数值或字符串表达式。如果 *number* 不是整数，则在求值前四舍五入到最接近的整数。

`$` 后缀形式返回 **String**；无后缀形式返回 **Variant** (**String**)。

| 如果 *number* 为 | Hex 返回 |
|------------------|----------|
| -2,147,483,648 到 2,147,483,647 | 最多八个十六进制字符 |
| **Null** | **Null**（仅限无后缀形式） |
| **Empty** | 零（`"0"`） |

**Hex** 的逆操作：在十六进制值前加 **&H**。例如，`Hex(255)` 返回字符串 `"FF"`，而 `&HFF` 返回数字 255。

### 示例

此示例使用 **Hex** 函数返回数字的十六进制值。

```vb
Dim MyHex
MyHex = Hex(5)      ' Returns "5".
MyHex = Hex(10)     ' Returns "A".
MyHex = Hex(459)    ' Returns "1CB".
```

### 另请参阅

- [Oct](/official/Reference/VBA/Conversion/Oct)、[Str](/official/Reference/VBA/Conversion/Str) 函数