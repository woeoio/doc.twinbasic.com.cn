---
title: Round
parent: Math Module
permalink: /tB/Modules/Math/Round
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '38a8baa9-f9d1-44ac-ba7f-89e0c0cef000'
  PropagateID: '38a8baa9-f9d1-44ac-ba7f-89e0c0cef000'
  ReservedCode1: 'fcd6cd54-a239-48cf-945a-09fc69f68ff9'
  ReservedCode2: 'fcd6cd54-a239-48cf-945a-09fc69f68ff9'
---

# Round

返回舍入到指定小数位数的数字。

语法：**Round(** *expression* [ **,** *numdecimalplaces* ] **)**

*expression*
: *必需* 要舍入的数值表达式。

*numdecimalplaces*
: *可选* 指示小数点右侧包含在舍入中的位数的数字。如果省略，**Round** 函数返回整数。

::: info
**Round** 使用银行家舍入法（四舍六入五成双）：当值恰好位于两个可能舍入结果的中间时，舍入到最接近的偶数数字。例如，`Round(0.5, 0)` 返回 `0`，`Round(1.5, 0)` 返回 `2`。
:::

### 示例

```vb
Debug.Print Round(0.12335, 4)    ' 0.1234
Debug.Print Round(0.12345, 4)    ' 0.1234
Debug.Print Round(0.12355, 4)    ' 0.1236
Debug.Print Round(0.12365, 4)    ' 0.1236
Debug.Print Round(0.00005, 4)    ' 0
```

### 另请参阅

- [Int](/official/Reference/VBA/Conversion/Int) 函数
- [Fix](/official/Reference/VBA/Conversion/Fix) 函数
- [CInt](/official/Reference/VBA/Conversion/CInt) 函数
- [CLng](/official/Reference/VBA/Conversion/CLng) 函数