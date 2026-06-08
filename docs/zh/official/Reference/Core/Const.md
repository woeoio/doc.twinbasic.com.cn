---
title: Const
parent: Statements
permalink: /tB/Core/Const
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4a65d922-5f9b-4d5c-bae5-207fc2f143ea'
  PropagateID: '4a65d922-5f9b-4d5c-bae5-207fc2f143ea'
  ReservedCode1: '17446474-2c9d-4d1f-bad3-b005931f6288'
  ReservedCode2: '17446474-2c9d-4d1f-bad3-b005931f6288'
---

# Const

声明常量以替代字面值使用。

语法：  

> [ *attributes* ]  
> [ **Public** \| **Private** ] **Const** *constname* [ **As** *type* ] **=** *expression*

*attributes*
: *可选* 以下一个或多个：  
[Description](/official/Reference/Attributes#description)

**Public**
: *可选* 在模块级别使用的关键字，用于声明对所有模块中所有过程可用的常量。不允许在过程中使用。

**Private**
: *可选* 在类或模块级别使用的关键字，用于声明仅在声明所在的类或模块内可用的常量。不允许在过程中使用。

*constname*

: *必填* 常量的名称；遵循标准变量命名约定。

*type*

: *可选* 常量的数据类型；可以是Byte、Boolean、Integer、Long、Currency、Single、Double、Decimal、Date、String或Variant。对每个声明的常量使用单独的 **As** *type* 子句。

*expression*

: *必填* 字面值、其他常量或包含除 **Is** 外的所有算术或逻辑运算符的任意组合。

常量默认为私有。在过程中，常量始终为私有；其可见性无法更改。在标准模块中，**Public** 关键字可以更改模块级常量的默认可见性。在类模块中，常量始终为私有；**Public** 关键字无效。

要在同一行合并多个常量声明，用逗号分隔每个常量赋值。以此方式合并常量声明时，如果使用 **Public** 或 **Private** 关键字，则适用于所有常量。

变量、用户自定义函数和内部Visual Basic函数（如 **Chr**）不能用于赋给常量的表达式中。

常量可以使程序自文档化且易于修改。与变量不同，常量在程序运行时不会被意外更改。

当未使用 **As** *type* 显式声明常量类型时，常量具有最适合 *expression* 的数据类型。

在 **Sub**、**Function** 或 **Property** 过程中声明的常量是该过程的局部常量。在过程外声明的常量定义于声明它的整个模块中。常量可以在允许使用表达式的任何地方使用。


### 示例

本示例使用 **Const** 语句声明常量以替代字面值使用。**Public** 常量在标准模块的通用部分中声明，而非类模块。**Private** 常量可以在任何类型模块的通用部分中声明。

```vb
' Constants are Private by default. 
Const MyVar = 459 
 
' Declare Public constant. 
Public Const MyString = "HELP" 
 
' Declare Private Integer constant. 
Private Const MyInt As Integer = 5 
 
' Declare multiple constants on same line. 
Const MyStr = "Hello", MyDouble As Double = 3.4567 
```