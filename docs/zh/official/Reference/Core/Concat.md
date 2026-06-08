---
title: "& 和 &="
parent: Operators
permalink: /tB/Core/Concat
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f795a811-a2d6-4ffc-ae03-a7487b47d68e'
  PropagateID: 'f795a811-a2d6-4ffc-ae03-a7487b47d68e'
  ReservedCode1: '488b3f9d-ad9e-4f16-ab57-f70cfe6e2cb7'
  ReservedCode2: '488b3f9d-ad9e-4f16-ab57-f70cfe6e2cb7'
---

# & 和 &= 运算符

用于强制连接两个字符串表达式。复合形式 **&=** 在一步中完成连接并赋值。

语法：
> *result* **=** *expression1* **&** *expression2*  
> *variable* **&=** *expression*       *(twinBASIC)*

*result*
: 任意 **String** 或 **Variant** 变量。

*variable*
: *(twinBASIC)* 任意 **String** 或 **Variant** 变量，或这些类型的可写属性。

*expression*, *expression1*, *expression2*
: 任意表达式。

如果 *expression* 不是字符串，则转换为 **String** 变体。如果两个 *expression* 都是字符串表达式，*result* 的数据类型为 **String**；否则 *result* 为 **String** 变体。

如果两个表达式都是 **Null**，*result* 为 **Null**。但是，如果只有一个 *expression* 为 **Null**，则该表达式在与另一个表达式连接时被视为零长度字符串（`""`）。任何为 **Empty** 的表达式也被视为零长度字符串。

连接字符串时优先使用 **&** 而非 [**+**](/official/Reference/Core/Plus)：**+** 也是加法运算符，因此其含义取决于操作数类型，可能在算术运算和连接之间静默切换。**&** 是明确的——它总是连接。

::: info
当 **&** 紧跟在变量名之后时（例如 `x&`），它会被解析为标识符上的 **Long** 类型后缀而非连接运算符。连接时务必在 **&** 前加空格：`Result = x & y`，而非 `Result = x& y`。
:::

### 复合赋值

`x &= y` 是twinBASIC中 `x = x & y` 的简写。*y* 在追加前转换为 **String**；如果两边都已是 **String**，结果仍为 **String**。**&=** 是语句而非表达式——它不产生值。

```vb
Dim Path As String = "C:\Users"
Path &= "\Public"               ' Path is now "C:\Users\Public".
Path &= "\Documents"            ' Path is now "C:\Users\Public\Documents".
```

### 示例

本示例使用 **&** 运算符强制连接字符串。

```vb
Dim MyStr
MyStr = "Hello" & " World"          ' Returns "Hello World".
MyStr = "Check " & 123 & " Check"   ' Returns "Check 123 Check".
```

### 另请参阅

- [**+** 运算符](/official/Reference/Core/Plus)
- [运算符](/official/Reference/Operators)