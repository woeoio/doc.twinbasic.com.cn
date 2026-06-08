---
title: Sub
parent: Statements
permalink: /tB/Core/Sub
---
# Sub

声明构成**Sub**过程主体的名称、参数和代码。

语法：
> [ *attributes* ]  
> [ **Public** \| **Private** \| **Friend** \| **Protected** ] [ **Static** ] [ **Overridable** ] **Sub** *name* [ **(** **Of** *typevars* **)** ] [ **(** *arglist* **)** ] [ *binding-clause* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
> &nbsp;&nbsp;&nbsp;&nbsp; [ **Exit Sub** ] ...  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
> **End Sub**

*attributes*
: *可选* 过程的一个或多个[受支持属性](/official/Reference/Attributes)。

**Public**
: *可选* 指示**Sub**过程可被所有模块中的所有其他过程访问。如果在包含**Option Private**的模块中使用，则该过程在项目外不可用。

**Private**
: *可选* 指示**Sub**过程仅在其声明的模块中的其他过程可访问。

**Friend**
: *可选* 仅在类模块中使用。指示**Sub**过程在整个项目中可见，但对对象实例的控制器不可见。

**[Protected](/official/Reference/Core/Protected)**
: *可选* (twinBASIC) 仅在类中使用。指示**Sub**过程可从声明类的内部和通过[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)派生的类中访问，但外部调用者不能访问。

**[Static](/official/Reference/Core/Static)**
: *可选* 指示**Sub**过程的局部变量在调用之间保留。**Static**属性不影响在**Sub**外部声明的变量，即使它们在过程中被使用。

**Overridable**
: *可选* (twinBASIC) 将**Sub**标记为继承钩子，通过[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)派生的类可以用**Overrides**子句替换。仅在参与**Inherits**层次结构的类成员上有意义。

*name*
: **Sub**的名称；遵循标准变量命名约定。特殊名称`New`声明实例构造函数——参见[继承](/official/Features/Language/Inheritance)了解链式构造`*baseclass*.New(...)`。

**Of** *typevars*
: *可选* 一个或多个类型变量名称，遵循标准变量命名约定。名称以逗号分隔。使过程成为泛型**Sub**。

*arglist*
: *可选* 表示调用**Sub**过程时传递参数的变量列表。多个变量以逗号分隔。语法见下面的[*arglist*](#arglist)。

*binding-clause*
: *可选* (twinBASIC) 三种尾随子句之一，将此主体绑定到在其他地方声明的成员：

  - **Handles** *object*.*event* [ **,** *object*.*event* … ]——将此**Sub**连接为命名事件的处理程序，取代传统的`Object_Event`命名约定。参见[**Handles**语句](/official/Reference/Core/Handles)。
  - **Implements** *iface*.*member* [ **,** *iface2*.*member2* … ]——为命名的[**Interface**](/official/Reference/Core/Interface)（或[**Class**](/official/Reference/Core/Class)）成员提供主体，取代传统的`Iface_Member`命名约定。逗号分隔列表允许一个主体同时满足多个接口的成员。参见[**Implements**语句](/official/Reference/Core/Implements)。
  - **Overrides** *base*.*member*——为通过[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)继承的**Overridable** *member*提供主体。与同一标题上的**Overridable**组合可允许更深层派生类再次覆盖。

*statements*
: *可选* 在**Sub**过程中执行的任何语句组。

**[Exit Sub](/official/Reference/Core/Exit)**
: *可选* 立即从**Sub**过程返回。（裸[**Return**](/official/Reference/Core/Return)语句*不会*退出**Sub**——它保留给[**GoSub...Return**](/official/Reference/Core/GoSub-Return)构造。）

### *arglist*

语法：一个或多个  
[ **Optional** ] [ **ByVal** \| **ByRef** ] [ **[ParamArray](/official/Reference/Core/ParamArray)** ] *varname* [ **()** ] [ **As** *type* ] [ **=** *defaultvalue* ]

**Optional**
: *可选* 指示参数不是必需的。如果使用，*arglist*中后续的所有参数也必须是可选的并使用**Optional**关键字声明。如果使用**ParamArray**，则不能用于任何参数。

**ByVal**
: *可选* 指示参数按值传递。

**ByRef**
: *可选* 指示参数按引用传递。与Visual Basic .NET不同，**ByRef**是默认的。

**[ParamArray](/official/Reference/Core/ParamArray)**
: *可选* 仅用作*arglist*中的最后一个参数，指示最后一个参数是**Variant**元素的**Optional**数组。**ParamArray**关键字允许传递任意数量的参数。不能与**ByVal**、**ByRef**或**Optional**一起使用。

*varname*
: 表示参数的变量名称；遵循标准变量命名约定。

*type*
: *可选* 传递给过程的参数的数据类型；可以是**Byte**、**Boolean**、**Integer**、**Long**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（仅变长）、**Object**、**Variant**、特定对象类型或泛型类型参数的名称。如果参数不是**Optional**，也可以指定用户自定义类型。  
如果使用泛型类型参数的名称，它将绑定到传递给过程的参数的具体类型。名称绑定的作用域为过程主体。

*defaultvalue*
: *可选* 任何常量或常量表达式。仅对**Optional**参数有效。如果类型为**Object**，则显式默认值只能为**Nothing**。

如果未使用**Public**、**Private**或**Friend**显式指定，**Sub**过程默认为公共的。

如果未使用**Static**，局部变量的值在调用之间不保留。

**Friend**关键字只能在类模块中使用。但是，**Friend**过程可被项目中任何模块的过程访问。**Friend**过程不出现在其父类的类型库中，也不能被后期绑定。

**Sub**过程可以是递归的；即它们可以调用自身来执行给定任务。但是，递归可能导致堆栈溢出。**Static**关键字通常不与递归**Sub**过程一起使用。

所有可执行代码必须在过程中。**Sub**过程不能在另一个**[Sub](/official/Reference/Core/Sub)**、**[Function](/official/Reference/Core/Function)**或**[Property](/official/Reference/Core/Property)**过程内部定义。

**[Exit Sub](/official/Reference/Core/Exit)**语句导致从**Sub**过程立即退出。程序执行继续到调用**Sub**过程的语句之后的语句。任何数量的**Exit Sub**语句可以出现在**Sub**过程中的任何位置。

与**Function**过程类似，**Sub**过程是一个独立的过程，可以接受参数、执行一系列语句并更改其参数的值。但是，与返回值的**Function**过程不同，**Sub**过程不能用于表达式中。

**Sub**过程通过使用过程名称后跟参数列表来调用。有关如何调用**Sub**过程的具体信息，请参见**[Call](/official/Reference/Core/Call)**语句。

**Sub**过程中使用的变量分为两类：在过程中显式声明的和未显式声明的。在过程中显式声明的变量（使用**Dim**或等效语句）始终是过程的局部变量。在过程中使用但未显式声明的变量也是局部变量，除非它们在过程外部的更高级别显式声明。

过程可以使用未在过程中显式声明的变量，但如果模块级定义的任何内容具有相同名称，则可能发生命名冲突。当过程引用与另一个过程、常量或变量同名的未声明变量时，假定过程引用的是该模块级名称。为避免此类冲突，请显式声明变量。使用**[Option Explicit](/official/Reference/Core/Option#Explicit)**语句强制显式声明变量。

::: info
**GoSub**、**GoTo**和**Return**不能进入或退出**Sub**过程。使用[**Exit Sub**](/official/Reference/Core/Exit)提前离开**Sub**。
:::

### 示例

本示例使用**Sub**语句定义构成**Sub**过程主体的名称、参数和代码。

```vb
' Sub procedure definition.
' Sub procedure with two arguments.
Sub SubComputeArea(Length As Double, TheWidth As Double)
    Dim Area As Double ' Declare local variable.

    If Length = 0 Or TheWidth = 0 Then
        ' If either argument = 0.
        Exit Sub ' Exit Sub immediately.
    End If

    Area = Length * TheWidth ' Calculate area of rectangle.
    Debug.Print Area ' Print Area to Debug window.
End Sub
```

### 另请参阅

- [**Call** 语句](/official/Reference/Core/Call)
- [**Function** 语句](/official/Reference/Core/Function)
- [**Property** 语句](/official/Reference/Core/Property)
- [**Exit** 语句](/official/Reference/Core/Exit)
- [**Return** 语句](/official/Reference/Core/Return)
- [**Implements** 语句](/official/Reference/Core/Implements)
- [**Handles** 语句](/official/Reference/Core/Handles)
- [**Protected** 语句](/official/Reference/Core/Protected)
- [处理程序方法语法](/official/Features/Language/Handlers)
- [继承](/official/Features/Language/Inheritance)
- [泛型](/official/Features/Language/Generics)