---
title: Const
parent: 语句
permalink: /zh/tB/Core/Const
---

# Const

{: no_toc }

声明常量以代替字面量值使用。

语法：

> [ *属性* ]
> [ **Public** \| **Private** ] **Const** *常量名* [ **As** *类型* ] **=** *表达式*

*属性*
: *可选* 以下之一：
[Description](Attributes#description)

**Public**
: *可选* 在模块级别使用的关键字，用于声明对所有模块中所有过程可用的常量。不允许在过程中使用。

**Private**
: *可选* 在类或模块级别使用的关键字，用于声明仅对声明所在的类或模块可用的常量。不允许在过程中使用。

*常量名*

: 常量的名称；遵循标准变量命名约定。

*类型*

: *可选* 常量的数据类型；可以是Byte、Boolean、Integer、Long、Currency、Single、Double、Decimal（目前不支持）、Date、String或Variant。为每个声明的常量使用单独的**As** *类型*子句。

*表达式*

: 必需。字面量、其他常量或包含除**Is**外的所有算术或逻辑运算符的任何组合。

常量默认为私有。在过程中，常量始终为私有；无法更改其可见性。在标准模块中，可以使用**Public**关键字更改模块级常量的默认可见性。但在类模块中，常量只能是私有的，并且无法通过使用**Public**关键字更改其可见性。

要在同一行上组合多个常量声明，请用逗号分隔每个常量赋值。当以这种方式组合常量声明时，如果使用了**Public**或**Private**关键字，它适用于所有这些常量。

不能在分配给常量的表达式中使用变量、用户定义函数或内置Visual Basic函数（如**Chr**）。

> [!NOTE]
> 常量可以使您的程序自文档化且易于修改。与变量不同，常量不能在程序运行时被意外更改。

如果未通过使用**As** *类型*显式声明常量类型，则常量具有对*表达式*最合适的数据类型。

在**Sub**、**Function**或**Property**过程中声明的常量是该过程的局部常量。在过程外声明的常量在声明它的整个模块中定义。可以在可以使用表达式的任何地方使用常量。


### 示例

此示例使用**Const**语句声明常量以代替字面量值使用。**Public**常量在标准模块的General部分中声明，而不是在类模块中。**Private**常量在任何类型模块的General部分中声明。

```vb
' 常量默认为Private。
Const MyVar = 459

' 声明Public常量。
Public Const MyString = "HELP"

' 声明Private Integer常量。
Private Const MyInt As Integer = 5

' 在同一行声明多个常量。
Const MyStr = "Hello", MyDouble As Double = 3.4567
```