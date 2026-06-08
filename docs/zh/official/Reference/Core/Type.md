---
title: Type
parent: Statements
permalink: /tB/Core/Type
---
# Type

在模块级用于定义包含一个或多个元素的用户自定义数据类型。

语法：
> [ *attributes* ]  
> [ **Private** \| **Public** ] **Type** *varname* [ **(** **Of** *typevars* **)** ]  
> &nbsp;&nbsp;&nbsp;&nbsp; *elementname* [ **(** [ *subscripts* ] **)** ] **As** *type*  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *elementname* [ **(** [ *subscripts* ] **)** ] **As** *type* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; **. . .**  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *member-procedure* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; **. . .**  
> **End Type**

*attributes*
: *可选* (twinBASIC) 类型级属性。最值得注意的是[**PackingAlignment**](/official/Reference/Attributes#packingalignment)，它设置在内存中布局UDT时使用的字段对齐值——对于与在`#pragma pack`或`#include <pshpack1.h>`下声明的C结构体互操作非常有用。

**Public**
: *可选* 用于声明对所有项目中所有模块的所有过程可用的用户自定义类型。

**Private**
: *可选* 用于声明仅在其声明所在模块内可用的用户自定义类型。

*varname*
: 用户自定义类型的名称；遵循标准变量命名约定。

*elementname*
: 用户自定义类型中元素的名称。元素名称也遵循标准变量命名约定，但可以使用关键字。

*subscripts*
: *可选* 数组元素的维度。当*lower*未显式指定时，数组的下界由[**Option Base**](/official/Reference/Core/Option#Base)语句控制。如果没有**Option Base**语句，下界为零。

*type*
: 元素的数据类型；可以是**Byte**、**Boolean**、**Integer**、**Long**、**LongLong**、**LongPtr**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（用于变长字符串）、**String** *length*（用于定长字符串）、**Object**、**Variant**、另一个用户自定义类型或对象类型。在泛型**Type**中（见下文），*type*也可以是**Of**子句中引入的*typevars*之一。

**Of** *typevars*
: *可选* (twinBASIC) 一个或多个以逗号分隔的类型变量名称，使**Type**成为*泛型UDT*。每个类型变量可以作为元素的*type*引用。参见[泛型](/official/Features/Language/Generics)。泛型UDT尚不支持成员过程。

*member-procedure*
: *可选* (twinBASIC) 写在**Type**主体内的[**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function)或[**Property**](/official/Reference/Core/Property)过程，或[**Declare**](/official/Reference/Core/Declare)外部过程，可通过该类型的任何变量调用。参见下面的[twinBASIC增强](#twinbasic-enhancements)。

**Type**语句只能在模块级使用。使用**Type**语句声明用户自定义类型后，可以在声明作用域内的任何位置声明该类型的变量。使用[**Dim**](/official/Reference/Core/Dim)、[**Private**](/official/Reference/Core/Private)、[**Public**](/official/Reference/Core/Public)、[**ReDim**](/official/Reference/Core/ReDim)或[**Static**](/official/Reference/Core/Static)声明用户自定义类型的变量。

在标准模块和类模块中，用户自定义类型默认为公共的。可以使用**Private**关键字更改此可见性。

**Type...End Type**块中不允许使用行号和行标签。

用户自定义类型常用于数据记录，数据记录通常由多个不同数据类型的相关元素组成。

以下示例展示用户自定义类型中固定大小数组的使用：

```vb
Type StateData
    CityCode (1 To 100) As Integer    ' Declare a static array.
    County As String * 30
End Type

Dim Washington(1 To 100) As StateData
```

在上面的示例中，`StateData`包含`CityCode`静态数组，记录`Washington`具有与`StateData`相同的结构。

在用户自定义类型中声明固定大小数组时，其维度必须用数字字面量或常量而非变量声明。

### 示例

本示例使用**Type**语句定义用户自定义数据类型。**Type**语句仅在模块级使用。如果出现在类模块中，**Type**语句前必须加**Private**关键字。

```vb
Type EmployeeRecord    ' Create user-defined type.
    ID As Integer    ' Define elements of data type.
    Name As String * 20
    Address As String * 30
    Phone As Long
    HireDate As Date
End Type

Sub CreateRecord()
    Dim MyRecord As EmployeeRecord    ' Declare variable.

    ' Assignment to EmployeeRecord variable must occur in a procedure.
    MyRecord.ID = 12003    ' Assign a value to an element.
End Sub
```

### twinBASIC增强

twinBASIC以多种方式扩展了经典VBA的**Type**。UDT仍然是可传递给Win32 API的栈分配结构体，但它们也可以像轻量级类一样具有行为。

**成员过程。**[**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function)和[**Property**](/official/Reference/Core/Property)过程可以出现在`Type ... End Type`内部，并通过该类型的任何变量调用。在成员过程内部，必须使用显式的`Me.`前缀访问同一UDT的其他成员。

**生命周期和运算符钩子。**编译器连接知名成员名称：

| 成员 | 用途 |
|:---|:---|
| `Type_Initialize` | 构造函数——在创建该类型的变量时运行。 |
| `Type_Terminate` | 析构函数——在变量超出作用域时运行。 |
| `Type_Assignment` | 赋值运算符——`=`将*RHS*赋给该类型的变量。签名为`Sub Type_Assignment(ByVal RHS As ...)`，可以有多个不同*RHS*类型的重载。 |
| `Type_Conversion` | 转换运算符——从UDT产生另一种类型的值。签名为`Function Type_Conversion() As ...`，可以有多个不同返回类型的重载。 |
| `Type_DebugView` | 调试器显示——返回在IDE变量检查器中显示的**String**。 |

**UDT内部的API声明。**[**Declare**](/official/Reference/Core/Declare)语句在**Type**主体内作为常规模块级声明工作，但当其第一个参数名为`Me`且与UDT类型相同时，对该类型变量的调用会隐式将变量作为第一个参数传递：

```vb
Type HWND
    Value As LongPtr
    Public Declare PtrSafe Function BringWindowToTop Lib "user32" (ByVal Me As HWND) As Long
End Type

Dim h As HWND
h.BringWindowToTop()  ' Passes h as the first argument to the API.
```

**自定义对齐。**[**PackingAlignment**](/official/Reference/Attributes#packingalignment)类型级属性控制UDT字段的对齐。默认对齐将每个字段放置在其自身大小的倍数位置（并添加尾部填充使总大小为最大字段的倍数）。设置`[PackingAlignment(1)]`使字段无填充紧凑排列——匹配C中的`#pragma pack(push, 1)`。

```vb
[PackingAlignment(2)]
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
```

**泛型类型。**在*varname*后加类型变量列表`(Of T)`使**Type**成为泛型。元素类型可以引用类型变量。泛型UDT尚不支持成员过程。

```vb
Type ListU(Of T)
    value() As T
End Type
```

### 另请参阅

- [**Dim** 语句](/official/Reference/Core/Dim)
- [**Private** 语句](/official/Reference/Core/Private)
- [**Public** 语句](/official/Reference/Core/Public)
- [**Enum** 语句](/official/Reference/Core/Enum)
- [**Class** 语句](/official/Reference/Core/Class)
- [UDT增强](/official/Features/Language/UDTs)
- [泛型](/official/Features/Language/Generics)