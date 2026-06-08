---
title: Static
parent: Statements
permalink: /tB/Core/Static
---
# Static

在过程级用于声明变量并分配存储空间。使用**Static**语句声明的变量在代码运行期间保留其值。

语法：
> **Static** *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ] [ **,** *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ]] **. . .**

*varname*
: 变量名称；遵循标准变量命名约定。

*subscripts*
: *可选* 数组变量的维度；最多可声明60个多维。*subscripts*参数使用以下语法：[ *lower* **To** ] *upper* [ , [ *lower* **To** ] *upper* ] **. . .**。当*lower*未显式指定时，数组的下界由[**Option Base**](/official/Reference/Core/Option#Base)语句控制。如果没有**Option Base**语句，下界为零。

**New**
: *可选* 启用隐式对象创建的关键字。当使用**New**声明对象变量时，首次引用时创建对象的新实例，因此不需要**[Set](/official/Reference/Core/Set)**语句来赋值对象引用。**New**关键字不能用于声明任何内部数据类型的变量或声明依赖对象的实例。

*type*
: *可选* 变量的数据类型；可以是**Byte**、**Boolean**、**Integer**、**Long**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（用于变长字符串）、**String** *length*（用于定长字符串）、**Object**、**Variant**、用户自定义类型或对象类型。为每个定义的变量使用单独的**As** *type*子句。

模块代码运行后，使用**Static**语句声明的变量保留其值，直到模块被重置或重新启动。在类模块中，使用**Static**语句声明的变量在每个类实例中保留其值，直到该实例被销毁。在窗体模块中，静态变量保留其值，直到窗体关闭。

在非静态过程中使用**Static**语句来显式声明仅在过程中可见但生命周期与定义该过程的模块相同的变量。

在过程中使用**Static**语句声明在过程调用之间保留其值的变量的数据类型。例如，以下语句声明一个整数固定大小数组：

```vb
Static EmployeeNumber(200) As Integer
```

以下语句声明一个新工作表实例的变量：

```vb
Static X As New Worksheet
```

如果声明对象变量时未使用**New**关键字，则引用该对象的变量必须在使用前通过**Set**语句赋值一个现有对象。在赋值对象之前，声明的对象变量具有特殊值**Nothing**，表示它不引用任何特定的对象实例。当声明中使用**New**关键字时，首次引用对象时创建对象的实例。

当未指定数据类型或对象类型，且模块中没有[**Deftype**](/official/Reference/Core/Deftype)语句时，变量默认为**Variant**。

::: info
**Static**语句和**Static**关键字类似，但用途不同。当过程使用**Static**关键字声明时（如`Static Sub CountSales()`），过程中所有局部变量的存储空间只分配一次，变量的值在整个程序运行期间保留。对于非静态过程，变量的存储空间在每次调用过程时分配并在过程退出时释放。**Static**语句用于在非静态过程中声明特定变量，使其在程序运行期间保留值。
:::

变量初始化时，数值变量初始化为0，变长字符串初始化为零长度字符串（""），定长字符串用零填充。**Variant**变量初始化为**Empty**。用户自定义类型变量的每个元素作为独立变量初始化。

按照惯例，过程中的**Static**语句放在过程开头与其他声明语句（如**[Dim](/official/Reference/Core/Dim)**）一起。

### 示例

本示例使用**Static**语句在模块代码运行期间保留变量的值。

```vb
' Function definition.
Function KeepTotal(Number)
    ' Only the variable Accumulate preserves its value between calls.
    Static Accumulate
    Accumulate = Accumulate + Number
    KeepTotal = Accumulate
End Function

' Static function definition.
Static Function MyFunction(Arg1, Arg2, Arg3)
    ' All local variables preserve value between function calls.
    Accumulate = Arg1 + Arg2 + Arg3
    Half = Accumulate / 2
    MyFunction = Half
End Function
```

### 另请参阅

- [**Dim** 语句](/official/Reference/Core/Dim)
- [**Private** 语句](/official/Reference/Core/Private)
- [**Public** 语句](/official/Reference/Core/Public)
- [**Sub** 语句](/official/Reference/Core/Sub)
- [**Function** 语句](/official/Reference/Core/Function)