---
title: Public
parent: Statements
permalink: /tB/Core/Public
---
# Public

在模块级用于声明公共变量并分配存储空间。

语法：
> **Public** [ **WithEvents** ] *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ] [ **,** [ **WithEvents** ] *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ]] **. . .**

**WithEvents**
: *可选* 指定*varname*是用于响应ActiveX对象触发事件的对象变量的关键字。**WithEvents**仅在类模块中有效。可以使用**WithEvents**声明任意数量的单独变量，但不能使用**WithEvents**声明数组，也不能将**New**与**WithEvents**组合使用。

*varname*
: 变量名称；遵循标准命名约定。

*subscripts*
: *可选* 数组变量的维度；最多可声明60个多维。*subscripts*参数使用以下语法：[ *lower* **To** ] *upper* [ , [ *lower* **To** ] *upper* ] **. . .**。当*lower*未显式指定时，数组的下界由[**Option Base**](/official/Reference/Core/Option#Base)语句控制。如果没有**Option Base**语句，下界为零。

**New**
: *可选* 启用隐式对象创建的关键字。当使用**New**声明对象变量时，首次引用时创建对象的新实例，因此不需要**[Set](/official/Reference/Core/Set)**语句来赋值对象引用。**New**关键字不能用于声明任何内部数据类型的变量或声明依赖对象的实例，也不能与**WithEvents**一起使用。

*type*
: *可选* 变量的数据类型；可以是**Byte**、**Boolean**、**Integer**、**Long**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（用于变长字符串）、**String** *length*（用于定长字符串）、**Object**、**Variant**、用户自定义类型或对象类型。为每个定义的变量使用单独的**As** *type*子句。

使用**Public**语句声明的变量对所有应用程序的所有模块中的所有过程可用，除非**[Option Private Module](/official/Reference/Core/Option)**生效；在此情况下，变量仅在其所在的项目内为公共的。

**Public**语句不能在类模块中用于声明定长字符串变量。

使用**Public**语句声明变量的数据类型。例如，以下语句将变量声明为**Integer**：

```vb
Public NumberOfEmployees As Integer
```

也可以使用**Public**语句声明变量的对象类型。以下语句声明一个新工作表实例的变量：

```vb
Public X As New Worksheet
```

如果声明对象变量时未使用**New**关键字，则引用该对象的变量必须在使用前通过**Set**语句赋值一个现有对象。在赋值对象之前，声明的对象变量具有特殊值**Nothing**，表示它不引用任何特定的对象实例。

带空括号的**Public**语句也声明动态数组。声明动态数组后，在过程中使用**[ReDim](/official/Reference/Core/ReDim)**语句定义数组的维度和元素数。对在[**Private**](/official/Reference/Core/Private)、**Public**或[**Dim**](/official/Reference/Core/Dim)语句中显式指定大小的数组变量重新声明维度会引发错误。

当未指定数据类型或对象类型，且模块中没有[**Deftype**](/official/Reference/Core/Deftype)语句时，变量默认为**Variant**。

变量初始化时，数值变量初始化为0，变长字符串初始化为零长度字符串（""），定长字符串用零填充。**Variant**变量初始化为**Empty**。用户自定义类型变量的每个元素作为独立变量初始化。

**Public**关键字也用作**[Sub](/official/Reference/Core/Sub)**、**[Function](/official/Reference/Core/Function)**和**[Property](/official/Reference/Core/Property)**声明中的过程修饰符，使这些过程可被所有模块中的所有其他过程访问。

### 示例

本示例在标准模块的模块级（通用部分）使用**Public**语句显式将变量声明为公共的；即它们对所有应用程序的所有模块中的所有过程可用，除非**Option Private Module**生效。

```vb
Public Number As Integer ' Public Integer variable.
Public NameArray(1 To 5) As String ' Public array variable.
' Multiple declarations, two Variants and one Integer, all Public.
Public MyVar, YourVar, ThisVar As Integer
```

### 另请参阅

- [**Dim** 语句](/official/Reference/Core/Dim)
- [**Private** 语句](/official/Reference/Core/Private)
- [**Static** 语句](/official/Reference/Core/Static)
- [**Option** 语句](/official/Reference/Core/Option)
- [**ReDim** 语句](/official/Reference/Core/ReDim)