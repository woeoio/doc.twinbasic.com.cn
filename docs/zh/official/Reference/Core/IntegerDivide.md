---
title: "\\, \\="
parent: Operators
permalink: /tB/Core/IntegerDivide
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a2ccea37-fbba-4d4b-a052-62055a173ee3'
  PropagateID: 'a2ccea37-fbba-4d4b-a052-62055a173ee3'
  ReservedCode1: '15aa4419-bd71-4fd9-84b9-7804a27fd353'
  ReservedCode2: '15aa4419-bd71-4fd9-84b9-7804a27fd353'
---

# \ 和 \= 运算符

用于将两个数相除并返回整数结果。复合形式 **\\=** 在一步中完成相除并赋值。

语法：
> *result* **=** *number1* **\\** *number2*  
> *variable* **\\=** *number*       *(twinBASIC)*

*result*
: 任意数值变量。

*variable*
: *(twinBASIC)* 任意数值变量或可写属性。

*number*, *number1*, *number2*
: 任意数值表达式。

执行除法之前，数值表达式被舍入为 **Byte**、**Integer**、**Long** 或 **LongLong** 表达式。

通常，*result* 的数据类型为 **Byte**、**Byte** 变体、**Integer**、**Integer** 变体、**Long**、**Long** 变体或 **LongLong**，无论 *result* 是否为整数。

任何小数部分被截断。但如果任一表达式为 **Null**，则 *result* 为 **Null**。任何为 **Empty** 的表达式被视为0。

除以零会引发运行时错误。

### 复合赋值

`x \= y` 是twinBASIC中 `x = x \ y` 的简写。左侧仅求值一次并按上述方式舍入为整数类型。**\\=** 是语句而非表达式——它不产生值。

```vb
Dim Value As Long = 100
Value \= 4                      ' Value is now 25.
Value \= 7                      ' Value is now 3 (truncating).
```

### 示例

本示例使用 **\\** 运算符执行整数除法。

```vb
Dim MyValue
MyValue = 11 \ 4                ' Returns 2.
MyValue = 9 \ 3                 ' Returns 3.
MyValue = 100 \ 3               ' Returns 33.
```

### 另请参阅

- [**/** 运算符](/official/Reference/Core/Divide)
- [**Mod** 运算符](/official/Reference/Core/Mod)
- [运算符](/official/Reference/Operators)