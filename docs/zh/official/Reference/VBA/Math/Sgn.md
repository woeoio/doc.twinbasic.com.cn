---
title: Sgn
parent: Math Module
permalink: /tB/Modules/Math/Sgn
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2b9cd19c-1cb0-43bd-9d84-9f85b56aa206'
  PropagateID: '2b9cd19c-1cb0-43bd-9d84-9f85b56aa206'
  ReservedCode1: 'a2b6e03f-9d88-491e-b3bf-8ab114264fbb'
  ReservedCode2: 'a2b6e03f-9d88-491e-b3bf-8ab114264fbb'
---

# Sgn

返回一个 **Variant** (**Integer**)，指示数字的符号。

语法：**Sgn(** *number* **)**

*number*
: *必需* 任何有效的数值表达式。

*number* 参数的符号决定 **Sgn** 函数的返回值：

| 如果 *number* 为    | **Sgn** 返回 |
|-------------------|-----------------|
| 大于零 | 1               |
| 等于零     | 0               |
| 小于零    | -1              |

### 示例

此示例使用 **Sgn** 函数确定数字的符号。

```vb
Dim MyVar1, MyVar2, MyVar3, MySign
MyVar1 = 12: MyVar2 = -2.4: MyVar3 = 0
MySign = Sgn(MyVar1)    ' Returns 1.
MySign = Sgn(MyVar2)    ' Returns -1.
MySign = Sgn(MyVar3)    ' Returns 0.
```

### 另请参阅

- [Abs](/official/Reference/VBA/Math/Abs) 函数