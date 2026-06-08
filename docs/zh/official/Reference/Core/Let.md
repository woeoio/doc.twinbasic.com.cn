---
title: Let
parent: Statements
permalink: /tB/Core/Let
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0ebd5dd3-ef5a-44ce-ba1b-9e05d60a0d3b'
  PropagateID: '0ebd5dd3-ef5a-44ce-ba1b-9e05d60a0d3b'
  ReservedCode1: '873dbd6a-8eaf-4340-a23b-a80f5f3d5467'
  ReservedCode2: '873dbd6a-8eaf-4340-a23b-a80f5f3d5467'
---

# Let

将表达式的值赋给变量或属性。

语法：
> [ **Let** ] *varname* **=** *expression*

**Let**
: *可选* 显式使用 **Let** 关键字是风格问题；通常省略。

*varname*
: 变量或属性的名称；遵循标准变量命名约定。

*expression*
: 赋给变量或属性的值。

值表达式只有在与变量数据类型兼容时才能赋给变量或属性。字符串表达式不能赋给数值变量，数值表达式不能赋给字符串变量。此类赋值在编译时引发错误。

**Variant** 变量可以赋给字符串或数值表达式。但反过来并不总是成立。除 **Null** 外的任何 **Variant** 都可以赋给字符串变量，但只有值可以解释为数字的 **Variant** 才能赋给数值变量。使用 **IsNumeric** 函数确定 **Variant** 是否可以转换为数字。

将一种数值类型的表达式赋给不同数值类型的变量时，表达式的值被强制转换为结果变量的数值类型。

**Let** 语句只能在两个变量为相同用户自定义类型时用于将一个记录变量赋给另一个。使用 **LSet** 语句赋值不同用户自定义类型的记录变量。使用 [**Set**](/official/Reference/Core/Set) 语句将对象引用赋给变量。

### 示例

本示例使用显式 **Let** 语句将表达式的值赋给变量。

```vb
Dim MyStr, MyInt
' The following variable assignments use the Let statement.
Let MyStr = "Hello World"
Let MyInt = 5
```

以下是不使用 **Let** 语句的相同赋值。

```vb
Dim MyStr, MyInt
MyStr = "Hello World"
MyInt = 5
```

### 另请参阅

- [**Set** 语句](/official/Reference/Core/Set)
- [**LSet** 语句](/official/Reference/Core/LSet)
- [**Property** 语句](/official/Reference/Core/Property)