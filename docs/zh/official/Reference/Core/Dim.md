---
title: Dim
parent: Statements
permalink: /tB/Core/Dim
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e5930af3-cc95-494b-b041-a62335aec71e'
  PropagateID: 'e5930af3-cc95-494b-b041-a62335aec71e'
  ReservedCode1: '2a567a57-421e-4318-beb9-0cb8a1feff83'
  ReservedCode2: '2a567a57-421e-4318-beb9-0cb8a1feff83'
---

# Dim

声明变量并分配存储空间。

语法：**Dim** [ **WithEvents** ] *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ] [ **=** *expression* ] [ **,** [ **WithEvents** ] *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ] [ **=** *expression* ] ] **. . .**

**WithEvents**

: *可选* 关键字，指定 *varname* 是用于响应ActiveX对象触发事件的对象变量。**WithEvents** 仅在类模块中有效。可以使用 **WithEvents** 声明任意数量的单独变量，但不能用 **WithEvents** 声明数组。**New** 不能与 **WithEvents** 组合使用。

*varname*

: 变量的名称；遵循标准变量命名约定。

*subscripts*

: *可选* 数组变量的维度；最多可声明60个多维维度。*subscripts* 参数使用以下语法：[ *lower* **To** ] *upper* [ , [ *lower* **To** ] *upper* ] **. . .**。当未在 *lower* 中显式指定时，数组的下界由 [**Option Base**](/official/Reference/Core/Option#Base) 语句控制。如果没有 **Option Base** 语句，下界为零。

**New**

: *可选* 关键字，启用对象的隐式创建。当使用 **New** 声明对象变量时，在首次引用时创建对象的新实例，因此不需要使用 **Set** 语句来分配对象引用。**New** 关键字不能用于声明任何内部数据类型的变量或依赖对象的实例，也不能与 **WithEvents** 一起使用。

*type*

: *可选*。变量的数据类型；可以是 **Byte**、**Boolean**、**Integer**、**Long**、**LongLong**、**LongPtr**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（变长字符串）、**String** *length*（定长字符串）、**Object**、**Variant**、用户自定义类型(UDT)、对象类型或 **Any**（twinBASIC；类型从 *expression* 推断——参见[类型推断](/official/Features/Language/Type-Inference)）。对每个声明的变量使用单独的 **As** *type* 子句。

*expression*

: *可选*。(twinBASIC) 声明时赋给变量的初始值。等效于紧接在 **Dim** 之后的单独赋值语句——`Dim i As Long = 1` 与 `Dim i As Long: i = 1` 相同。对于对象类型，`= New *type* ( *args* )` 构造一个实例（并可传递自定义构造函数参数）。当 *type* 为 **Any** 时，*expression* 是必需的并决定推断的类型。参见[内联变量初始化](/official/Features/Language/Inline-Initialization)。

在模块级别使用 **Dim** 声明的变量对该模块内所有过程可用。在过程级别，变量仅在该过程内可用。

在模块或过程级别使用 **Dim** 语句声明变量的数据类型。例如，以下语句声明一个 **Integer** 类型的变量。

```vb
Dim NumberOfEmployees As Integer 
```

也可以使用 **Dim** 语句声明变量的对象类型。以下声明一个工作表新实例的变量。

```vb
Dim X As New Worksheet 
```

如果声明对象变量时未使用 **New** 关键字，则必须在可以使用之前使用 **Set** 语句为引用该对象的变量分配现有对象。在分配对象之前，声明的对象变量具有特殊值 **Nothing**，表示它不引用任何特定对象实例。

带有空括号的 **Dim** 语句也声明动态数组。声明动态数组之后，在过程中使用 [**ReDim**](/official/Reference/Core/ReDim) 语句定义数组的维度和元素数。在 [**Private**](/official/Reference/Core/Private)、[**Public**](/official/Reference/Core/Public) 或 **Dim** 语句中显式指定了大小的数组变量重新声明维度会引发错误。

当未指定数据类型或对象类型，且模块中没有 [**Deftype**](/official/Reference/Core/Deftype) 语句时，变量默认为 **Variant**。变量初始化时，数值变量初始化为0，变长字符串初始化为零长度字符串("")，定长字符串用零填充。**Variant** 变量初始化为Empty。用户自定义类型变量的每个元素像单独变量一样初始化。

按照惯例，过程中的 **Dim** 语句放在过程的开头。

### 示例

本示例展示使用 **Dim** 语句声明变量。也展示了使用 **Dim** 语句声明数组。数组下标的默认下界为0，可以通过模块级别的 **Option Base** 语句覆盖。

```vb
' AnyValue and MyValue are declared as Variant by default with values 
' set to Empty. 
Dim AnyValue, MyValue 
 
' Explicitly declare a variable of type Integer. 
Dim Number As Integer 
 
' Multiple declarations on a single line. AnotherVar is of type Variant 
' because its type is omitted. 
Dim AnotherVar, Choice As Boolean, BirthDate As Date 
 
' DayArray is an array of Variants with 51 elements indexed, from 
' 0 thru 50, assuming Option Base is set to 0 (default) for 
' the current module. 
Dim DayArray(50) 
 
' Matrix is a two-dimensional array of integers. 
Dim Matrix(3, 4) As Integer 
 
' MyMatrix is a three-dimensional array of doubles with explicit 
' bounds. 
Dim MyMatrix(1 To 5, 4 To 9, 3 To 5) As Double 
 
' BirthDay is an array of dates with indexes from 1 to 10. 
Dim BirthDay(1 To 10) As Date 
 
' MyArray is a dynamic array of variants. 
Dim MyArray()
```