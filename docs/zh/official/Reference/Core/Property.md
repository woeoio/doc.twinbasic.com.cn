---
title: Property
parent: Statements
permalink: /tB/Core/Property
---
# Property

声明构成**Property**过程主体的名称、参数和代码：获取属性值、为属性赋值或设置对象属性引用的过程。

属性通过最多三个属性过程向调用者公开，这些过程在同一模块中共享相同的*name*：

- **Property Get**过程返回属性的值（或对象引用）。
- **Property Let**过程为属性赋非对象值。
- **Property Set**过程为属性赋对象引用。

语法：

- > [ *attributes* ]  
  > [ **Public** \| **Private** \| **Friend** \| **Protected** ] [ **Static** ] [ **Overridable** ] **Property Get** *name* [ **(** **Of** *typevars* **)** ] [ **(** *arglist* **)** ] [ **As** *type* ] [ *binding-clause* ]  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ [ **Let** ] *name* **=** *expression* ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ **Set** *name* **=** *expression* ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ **Return** *expression* ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ **Exit Property** ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
  > **End Property**

- > [ *attributes* ]  
  > [ **Public** \| **Private** \| **Friend** \| **Protected** ] [ **Static** ] [ **Overridable** ] **Property Let** *name* [ **(** **Of** *typevars* **)** ] **(** [ *arglist* **,** ] *value* **)** [ *binding-clause* ]  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ **Exit Property** ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
  > **End Property**

- > [ *attributes* ]  
  > [ **Public** \| **Private** \| **Friend** \| **Protected** ] [ **Static** ] [ **Overridable** ] **Property Set** *name* [ **(** **Of** *typevars* **)** ] **(** [ *arglist* **,** ] *reference* **)** [ *binding-clause* ]  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ **Exit Property** ] ...  
  > &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
  > **End Property**

*attributes*
: *可选* 过程的一个或多个[受支持属性](/official/Reference/Attributes)。

**Public**
: *可选* 指示**Property**过程可被所有模块中的所有其他过程访问。如果在包含**Option Private**语句的模块中使用，则该过程在项目外不可用。

**Private**
: *可选* 指示**Property**过程仅在其声明的模块中的其他过程可访问。

**Friend**
: *可选* 仅在类模块中使用。指示**Property**过程在整个项目中可见，但对对象实例的控制器不可见。

**[Protected](/official/Reference/Core/Protected)**
: *可选* (twinBASIC) 仅在类中使用。指示**Property**过程可从声明类的内部和通过[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)派生的类中访问，但外部调用者不能访问。同一属性的三个访问器形式（**Get**、**Let**、**Set**）应在访问修饰符上保持一致。

**[Static](/official/Reference/Core/Static)**
: *可选* 指示**Property**过程的局部变量在调用之间保留。**Static**属性不影响在**Property**过程外部声明的变量，即使它们在过程中被使用。

**Overridable**
: *可选* (twinBASIC) 将**Property**标记为继承钩子，通过[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)派生的类可以用**Overrides**子句替换。仅在参与**Inherits**层次结构的类成员上有意义。

*name*
: **Property**过程的名称；遵循标准变量命名约定，但同一模块中匹配的**Property Get**、**Property Let**和**Property Set**过程共享相同的名称。

**Of** *typevars*
: *可选* 一个或多个类型变量名称，遵循标准变量命名约定。名称以逗号分隔。使过程成为泛型**Property**过程。匹配的**Property Get**、**Property Let**和**Property Set**过程必须声明相同的泛型参数。

*arglist*
: 表示调用**Property**过程时传递参数的变量列表。多个参数以逗号分隔。**Property Let**或**Property Set**过程中每个参数的名称和数据类型必须与匹配的**Property Get**过程中对应参数相同。语法见下面的[*arglist*](#arglist)。*arglist*对**Property Get**是可选的；对于**Property Let**和**Property Set**，至少需要*value*/*reference*参数。

**As** *type*
: *可选* **Property Get**过程返回值的数据类型；可以是**Byte**、**Boolean**、**Integer**、**Long**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（定长除外）、**Object**、**Variant**、用户自定义类型或数组。**Property Get**过程的返回*type*必须与对应**Property Let**过程的*value*参数（如果存在）的数据类型相同，或与对应**Property Set**过程的*reference*参数兼容。

*statements*
: *可选* 在**Property**过程主体中执行的任何语句组。

*expression*
: *可选* 在**Property Get**中，过程返回的值（或用**Set**赋值时的引用）。

*value*
: 在**Property Let**中，包含要赋给属性值的变量。调用过程时，此参数出现在调用表达式的右侧。*value*的数据类型必须与对应**Property Get**过程的返回类型相同。*value*不能为**Optional**或**ParamArray**。

*reference*
: 在**Property Set**中，包含对象引用赋值右侧使用的对象引用的变量。*reference*不能为**Optional**。

*binding-clause*
: *可选* (twinBASIC) 三种尾随子句之一，将此访问器绑定到在其他地方声明的成员：

  - **Handles** *object*.*event* [ **,** *object*.*event* … ]——将属性连接为命名事件的处理程序，取代传统的`Object_Event`命名约定。参见[**Handles**语句](/official/Reference/Core/Handles)。
  - **Implements** *iface*.*member* [ **,** *iface2*.*member2* … ]——为命名的[**Interface**](/official/Reference/Core/Interface)（或[**Class**](/official/Reference/Core/Class)）成员提供主体，取代传统的`Iface_Member`命名约定。逗号分隔列表允许一个主体同时满足多个接口的成员。参见[**Implements**语句](/official/Reference/Core/Implements)。
  - **Overrides** *base*.*member*——为通过[**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop)继承的**Overridable** *member*提供主体。与同一标题上的**Overridable**组合可允许更深层派生类再次覆盖。

**[Exit Property](/official/Reference/Core/Exit)**
: *可选* 立即从**Property**过程返回而不设置返回值。在**Property Get**、**Property Let**和**Property Set**中有效。

**[Return](/official/Reference/Core/Return)** *expression*
: *可选* 仅在**Property Get**过程中有效。立即从过程返回并以*expression*作为属性值。此形式中*expression*是必需的；裸**Return**保留给[**GoSub...Return**](/official/Reference/Core/GoSub-Return)构造，不会退出**Property**过程。

### *arglist*

语法：一个或多个  
[ **Optional** ] [ **ByVal** \| **ByRef** ] [ **[ParamArray](/official/Reference/Core/ParamArray)** ] *varname* [ **()** ] [ **As** *type* ] [ **=** *defaultvalue* ]

**Optional**
: *可选* 指示参数不是必需的。如果使用，*arglist*中后续的所有参数也必须是可选的，并使用**Optional**关键字声明。**Property Let**或**Property Set**调用的右侧（*value*或*reference*参数）不能为**Optional**。

**ByVal**
: *可选* 指示参数按值传递。

**ByRef**
: *可选* 指示参数按引用传递。与Visual Basic .NET不同，**ByRef**是默认的。

**[ParamArray](/official/Reference/Core/ParamArray)**
: *可选* 指示参数是**Variant**元素的**Optional**数组。**ParamArray**关键字允许传递任意数量的参数。不能与**ByVal**、**ByRef**或**Optional**一起使用，也不能作为**Property Let**或**Property Set**过程的*value*/*reference*参数。

*varname*
: 表示参数的变量名称；遵循标准变量命名约定。

*type*
: *可选* 传递给过程的参数的数据类型；可以是**Byte**、**Boolean**、**Integer**、**Long**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（仅变长）、**Object**、**Variant**、特定对象类型或泛型类型参数的名称。如果参数不是**Optional**，也可以指定用户自定义类型。  
如果使用泛型类型参数的名称，它将绑定到传递给过程的参数的具体类型。名称绑定的作用域为过程主体。

*defaultvalue*
: *可选* 任何常量或常量表达式。仅对**Optional**参数有效。如果类型为**Object**，则显式默认值只能为**Nothing**。

如果未使用**Public**、**Private**或**Friend**显式指定，**Property**过程默认为公共的。如果未使用**Static**，局部变量的值在调用之间不保留。

**Friend**关键字只能在类模块中使用。但是，**Friend**过程可被项目中任何模块的过程访问。**Friend**过程不出现在其父类的类型库中，也不能被后期绑定。

所有可执行代码必须在过程中。**Property**过程不能在另一个**[Property](/official/Reference/Core/Property)**、**[Sub](/official/Reference/Core/Sub)**或**[Function](/official/Reference/Core/Function)**过程内部定义。

**[Exit Property](/official/Reference/Core/Exit)**语句，以及**[Return](/official/Reference/Core/Return)** *expression*语句（仅在**Property Get**中），导致从**Property**过程立即退出。程序执行继续到调用**Property**过程的语句之后的语句。这些语句可以出现在**Property**过程中的任何位置，数量不限。

与**Sub**和**Function**过程类似，**Property**过程是一个独立的过程，可以接受参数、执行一系列语句并更改其参数的值。**Property Get**过程可以像**Function**或属性名一样用在表达式的右侧。**Property Let**过程只能用在属性赋值表达式或[**Let**](/official/Reference/Core/Let)语句的左侧。**Property Set**过程只能用在对象引用赋值或**[Set](/official/Reference/Core/Set)**语句的左侧。

### 示例

本示例使用**Property**语句定义一个`PenColor`属性：一个接受颜色名字符串并存储数字代码的**Property Let**，以及一个从存储的数字代码返回颜色名的**Property Get**。

```vb
Dim CurrentColor As Integer
Const BLACK = 0, RED = 1, GREEN = 2, BLUE = 3

' Set the pen color property for a Drawing package.
' The module-level variable CurrentColor is set to
' a numeric value that identifies the color used for drawing.
Property Let PenColor(ColorName As String)
    Select Case ColorName ' Check color name string.
        Case "Red"
            CurrentColor = RED ' Assign value for Red.
        Case "Green"
            CurrentColor = GREEN ' Assign value for Green.
        Case "Blue"
            CurrentColor = BLUE ' Assign value for Blue.
        Case Else
            CurrentColor = BLACK ' Assign default value.
    End Select
End Property

' Returns the current color of the pen as a string.
Property Get PenColor() As String
    Select Case CurrentColor
        Case RED:   PenColor = "Red"
        Case GREEN: PenColor = "Green"
        Case BLUE:  PenColor = "Blue"
    End Select
End Property

' Calling code:
PenColor = "Red"        ' Calls Property Let.
ColorName = PenColor    ' Calls Property Get.
```

**Property Set**过程赋值对象引用，方式与**Property Let**赋值非常类似：

```vb
' The Pen property may be set to different Pen implementations.
Property Set Pen(P As Object)
    Set CurrentPen = P ' Assign Pen to object.
End Property
```

### 另请参阅

- [**Sub** 语句](/official/Reference/Core/Sub)
- [**Function** 语句](/official/Reference/Core/Function)
- [**Let** 语句](/official/Reference/Core/Let)
- [**Set** 语句](/official/Reference/Core/Set)
- [**Exit** 语句](/official/Reference/Core/Exit)
- [**Return** 语句](/official/Reference/Core/Return)
- [**Implements** 语句](/official/Reference/Core/Implements)
- [**Handles** 语句](/official/Reference/Core/Handles)
- [**Protected** 语句](/official/Reference/Core/Protected)
- [处理程序方法语法](/official/Features/Language/Handlers)
- [继承](/official/Features/Language/Inheritance)
- [泛型](/official/Features/Language/Generics)