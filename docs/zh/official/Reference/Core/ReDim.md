---
title: ReDim
parent: Statements
permalink: /tB/Core/ReDim
---
# ReDim

在过程级用于为动态数组变量重新分配存储空间。

语法：
> **ReDim** [ **Preserve** ] *varname* **(** *subscripts* **)** [ **As** *type* ] [ **,** *varname* **(** *subscripts* **)** [ **As** *type* ] ] **. . .**

**Preserve**
: *可选* 用于在更改最后维度大小时保留现有数组中数据的关键字。

*varname*
: 变量名称；遵循标准变量命名约定。

*subscripts*
: 数组变量的维度；最多可声明60个多维。*subscripts*参数使用以下语法：[ *lower* **To** ] *upper* [ , [ *lower* **To** ] *upper* ] **. . .**。当*lower*未显式指定时，数组的下界由[**Option Base**](/official/Reference/Core/Option#Base)语句控制。如果没有**Option Base**语句，下界为零。

*type*
: *可选* 变量的数据类型；可以是**Byte**、**Boolean**、**Integer**、**Long**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（用于变长字符串）、**String** *length*（用于定长字符串）、**Object**、**Variant**、用户自定义类型或对象类型。  
为每个定义的变量使用单独的**As** *type*子句。对于包含数组的**Variant**，*type*描述数组每个元素的类型，但不会将**Variant**更改为其他类型。

**ReDim**语句用于调整已通过[**Private**](/official/Reference/Core/Private)、[**Public**](/official/Reference/Core/Public)或[**Dim**](/official/Reference/Core/Dim)语句用空括号（不带维度下标）正式声明的动态数组的大小。

可以重复使用**ReDim**语句更改数组中的元素数和维度。但是，用一种数据类型声明的数组不能随后通过**ReDim**更改为另一种数据类型，除非数组包含在**Variant**中。如果数组包含在**Variant**中，可以使用**As** *type*子句更改元素的类型，除非使用**Preserve**关键字，在这种情况下不允许更改数据类型。

使用**Preserve**关键字，只能调整最后一个数组维度的大小，且维度数不能改变。例如，当数组只有一个维度时，可以调整该维度的大小，因为它是唯一的也是最后的维度。但是，当数组有两个或更多维度时，只有最后一个维度的大小可以更改，同时仍保留数组的内容。

以下示例展示如何在不擦除数组中现有数据的情况下增加动态数组最后一个维度的大小。

```vb
ReDim X(10, 10, 10)
. . .
ReDim Preserve X(10, 10, 15)
```

同样，使用**Preserve**时，数组大小只能通过更改上界来改变；更改下界会导致错误。

当数组变小时，被消除元素中的数据将丢失。

变量初始化时，数值变量初始化为0，变长字符串初始化为零长度字符串（""），定长字符串用零填充。**Variant**变量初始化为**Empty**。用户自定义类型变量的每个元素作为独立变量初始化。

引用对象的变量必须在使用前通过[**Set**](/official/Reference/Core/Set)语句赋值一个现有对象。在赋值对象之前，声明的对象变量具有特殊值**Nothing**，表示它不引用任何特定的对象实例。

如果**ReDim**语句声明的变量在模块级或过程级不存在，则**ReDim**语句充当声明语句。如果后来创建了同名的另一个变量，即使在更宽的作用域中，**ReDim**将引用后来的变量，不一定导致编译错误，即使**Option Explicit**生效也是如此。为避免此类冲突，不应将**ReDim**用作声明语句，而仅用于重新定义数组维度。

::: info
要调整包含在**Variant**中的数组大小，必须在尝试调整其数组大小之前显式声明**Variant**变量。
:::

### 示例

本示例使用**ReDim**语句为动态数组变量分配和重新分配存储空间。假设**Option Base**为**1**。

```vb
Dim MyArray() As Integer ' Declare dynamic array.
ReDim MyArray(5) ' Allocate 5 elements.
For I = 1 To 5 ' Loop 5 times.
    MyArray(I) = I ' Initialize array.
Next I
```

下一条语句调整数组大小并擦除元素。

```vb
ReDim MyArray(10) ' Resize to 10 elements.
For I = 1 To 10 ' Loop 10 times.
    MyArray(I) = I ' Initialize array.
Next I
```

以下语句调整数组大小但不擦除元素。

```vb
ReDim Preserve MyArray(15) ' Resize to 15 elements.
```

### 另请参阅

- [**Dim** 语句](/official/Reference/Core/Dim)
- [**Private** 语句](/official/Reference/Core/Private)
- [**Public** 语句](/official/Reference/Core/Public)
- [**Static** 语句](/official/Reference/Core/Static)
- [**Erase** 语句](/official/Reference/Core/Erase)