---
title: Mod
parent: Operators
permalink: /tB/Core/Mod
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0e2921b4-b184-44b6-873b-8b35875de905'
  PropagateID: '0e2921b4-b184-44b6-873b-8b35875de905'
  ReservedCode1: 'faa24356-bedd-432e-8f2f-9d092db5734e'
  ReservedCode2: 'faa24356-bedd-432e-8f2f-9d092db5734e'
---

# Mod 运算符

用于将两个数相除并仅返回余数。

语法：
> *result* **=** *number1* **Mod** *number2*

*result*
: 任意数值变量。

*number1*, *number2*
: 任意数值表达式。

取模（或余数）运算符将 *number1* 除以 *number2*（将浮点数舍入为整数）并仅返回余数作为 *result*。例如，在以下表达式中，A（*result*）等于5：

```vb
A = 19 Mod 6.7
```

通常，*result* 的数据类型为 **Byte**、**Byte** 变体、**Integer**、**Integer** 变体、**Long** 或包含 **Long** 的 **Variant**，无论 *result* 是否为整数。任何小数部分被截断。

但如果任一操作数为 **Null**，则 *result* 为 **Null**。任何为 **Empty** 的操作数被视为0。

### 示例

本示例使用 **Mod** 运算符将两个数相除并仅返回余数。如果任一数为浮点数，先舍入为整数。

```vb
Dim MyResult
MyResult = 10 Mod 5     ' Returns 0.
MyResult = 10 Mod 3     ' Returns 1.
MyResult = 12 Mod 4.3   ' Returns 0.
MyResult = 12.6 Mod 5   ' Returns 3.
```

### 另请参阅

- [**\\** 运算符](/official/Reference/Core/IntegerDivide)
- [**/** 运算符](/official/Reference/Core/Divide)
- [运算符](/official/Reference/Operators)