---
title: Dim
parent: 语句
permalink: /zh/tB/Core/Dim
---

# Dim
{: no_toc }

声明变量并分配存储空间。

语法：**Dim** [ **WithEvents** ] *变量名* [ **(** [ *下标* ] **)** ] [ **As** [ **New** ] *类型* ] [ **,** [ **WithEvents** ] *变量名* [ **(** [ *下标* ] **)** ] [ **As** [ **New** ] *类型* ]] **. . .**

**WithEvents**

: *可选* 指定*变量名*是用于响应ActiveX对象触发的事件的对象变量的关键字。**WithEvents**仅在类模块中有效。您可以使用**WithEvents**声明任意多个单独的变量，但不能使用**WithEvents**创建数组。不能将**New**与**WithEvents**一起使用。

*变量名*

:  变量的名称；遵循标准变量命名约定。

*下标*

: *可选* 数组变量的维度；最多可以声明60个多维。*下标*参数使用以下语法：[ *下界* **To** ] *上界* [ , [ *下界* **To** ] *上界* ] **. . .**。当在*下界*中未明确说明时，数组的下界由[**Option Base**](Option#Base)语句控制。如果没有**Option Base**语句，则下界为零。

**New**

: *可选* 启用对象隐式创建的关键字。如果在声明对象变量时使用**New**，则在首次引用该对象时创建对象的新实例，因此不必使用**Set**语句来分配对象引用。**New**关键字不能用于声明任何内置数据类型的变量或声明依赖对象的实例，并且不能与**WithEvents**一起使用。

*类型*

: *可选*。变量的数据类型；可以是Byte、Boolean、Integer、Long、Currency、Single、Double、Decimal（目前不支持）、Date、String（用于变长字符串）、**String** *长度*（用于固定长度字符串）、Object、Variant、用户定义类型（UDT）或对象类型。为您声明的每个变量使用单独的**As** *类型*子句。

在模块级别用**Dim**声明的变量对模块内的所有过程可用。在过程级别，变量仅在过程内可用。

在模块或过程级别使用**Dim**语句声明变量的数据类型。例如，以下语句将变量声明为**Integer**。

```vb
Dim NumberOfEmployees As Integer
```

还可以使用**Dim**语句声明变量的对象类型。以下声明了工作表新实例的变量。

```vb
Dim X As New Worksheet
```

如果在声明对象变量时未使用**New**关键字，则必须使用**Set**语句将现有对象分配给引用该对象的变量，然后才能使用它。在分配对象之前，声明的对象变量具有特殊值**Nothing**，这表示它不引用对象的任何特定实例。

还可以使用带空括号的**Dim**语句声明动态数组。声明动态数组后，在过程中使用[**ReDim**](ReDim)语句定义数组中的维数和元素数量。如果尝试重新声明在[**Private**](Private)、[**Public**](Public)或**Dim**语句中显式指定大小的数组变量的维度，则会发生错误。

如果未指定数据类型或对象类型，并且模块中没有[**Deftype**](Deftype)语句，则变量默认为**Variant**。初始化变量时，数值变量初始化为0，变长字符串变量初始化为零长度字符串（""），固定长度字符串填充零。**Variant**变量初始化为Empty。用户定义类型变量的每个元素都初始化为单独的变量。

> [!NOTE]
>
> 在过程中使用**Dim**语句时，通常将**Dim**语句放在过程的开头。

### 示例

此示例显示用于声明变量的**Dim**语句。它还显示用于声明数组的**Dim**语句。数组下标的默认下界为0，可以通过在模块级别使用**Option Base**语句来覆盖。

```vb
' AnyValue和MyValue默认声明为Variant，值
' 设置为Empty。
Dim AnyValue, MyValue

' 显式声明Integer类型的变量。
Dim Number As Integer

' 单行上的多个声明。AnotherVar是Variant类型
' 因为其类型被省略。
Dim AnotherVar, Choice As Boolean, BirthDate As Date

' DayArray是包含51个元素的Variant数组，索引从
' 0到50，假设当前模块的Option Base设置为0（默认）。
Dim DayArray(50)

' Matrix是整数的二维数组。
Dim Matrix(3, 4)As Integer

' MyMatrix是双精度的三维数组，具有显式
' 边界。
Dim MyMatrix(1 To 5, 4 To 9, 3 To 5)As Double

' BirthDay是日期数组，索引从1到10。
Dim BirthDay(1 To 10)As Date

' MyArray是Variant的动态数组。
Dim MyArray()
```