---
title: Oct
parent: Conversion Module
permalink: /tB/Modules/Conversion/Oct
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '513b6a86-b598-4b94-bbbe-4ce50b68d108'
  PropagateID: '513b6a86-b598-4b94-bbbe-4ce50b68d108'
  ReservedCode1: 'a4ecd738-d5fc-4e9c-92a7-013f6c9f86c2'
  ReservedCode2: 'a4ecd738-d5fc-4e9c-92a7-013f6c9f86c2'
---

# Oct, Oct$

返回表示数字八进制值的字符串。

语法：

- **Oct$(** *number* **)**
- **Oct(** *number* **)**

*number*
: *必需* 任何有效的数值或字符串表达式。如果 *number* 不是整数，则在求值前四舍五入到最接近的整数。

`$` 后缀形式返回 **String**；无后缀形式返回 **Variant** (**String**)。

| 如果 *number* 为 | Oct 返回 |
|------------------|----------|
| **Null** | **Null**（仅限无后缀形式） |
| **Empty** | 零（`"0"`） |
| 任何其他数字 | 最多 11 个八进制字符 |

八进制数可以通过在适当范围内的数字前加 `&O` 来直接表示。例如，`&O10` 是十进制 8 的八进制表示法。

### 示例

此示例使用 **Oct** 函数返回数字的八进制值。

```vb
Dim MyOct
MyOct = Oct(4)      ' Returns "4".
MyOct = Oct(8)      ' Returns "10".
MyOct = Oct(459)    ' Returns "713".
```

### 另请参阅

- [Hex](/official/Reference/VBA/Conversion/Hex)、[Str](/official/Reference/VBA/Conversion/Str) 函数