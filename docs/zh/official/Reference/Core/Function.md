---
title: Function
parent: Statements
permalink: /tB/Core/Function
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6fd5c18d-5fb8-4b5c-9b20-ee0037c71e38'
  PropagateID: '6fd5c18d-5fb8-4b5c-9b20-ee0037c71e38'
  ReservedCode1: '8c3050ac-876c-45cb-afc7-4d32597d7e7b'
  ReservedCode2: '8c3050ac-876c-45cb-afc7-4d32597d7e7b'
---

# Function

声明构成 **Function** 过程体的名称、参数和代码。

语法：
> [ *attributes* ]  
> [ **Public** \| **Private** \| **Friend** \| **Protected** ] [ **Static** ] [ **Overridable** ] **Function** *name* [ **(** **Of** *typevars* **)** ] [ **(** *arglist* **)** ] [ **As** *type* ] [ *binding-clause* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
> &nbsp;&nbsp;&nbsp;&nbsp; [ [ **Let** ] *name* **=** *expression* ] ...  
> &nbsp;&nbsp;&nbsp;&nbsp; [ **Set** *name* **=** *expression* ] ...  
> &nbsp;&nbsp;&nbsp;&nbsp; [ **Return** *expression* ] ...  
> &nbsp;&nbsp;&nbsp;&nbsp; [ **Exit Function** ] ...  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *statements* ] ...  
> **End Function**

*attributes*
: 以下一个或多个：  
[ArrayBoundsChecks](/official/Reference/Attributes#arrayboundschecks)、[BindOnlyIfNoArguments](/official/Reference/Attributes#bindonlyifnoarguments)、[BindOnlyIfStringSuffix](/official/Reference/Attributes#bindonlyifstringsuffix)、[CompileIf](/official/Reference/Attributes#compileif)、[ConstantFoldable](/official/Reference/Attributes#constantfoldable)、[ConstantFoldableNumericsOnly](/official/Reference/Attributes#constantfoldablenumericsonly)、[Debuggable](/official/Reference/Attributes#debuggable)、[DebugOnly](/official/Reference/Attributes#debugonly)、[Description](/official/Reference/Attributes#description)、[EnforceErrors](/official/Reference/Attributes#enforceerrors)、[EnforceWarnings](/official/Reference/Attributes#enforcewarnings)、[FloatingPointErrorChecks](/official/Reference/Attributes#floatingpointerrorchecks)、[IntegerOverflowChecks](/official/Reference/Attributes#integeroverflowchecks)、[MustBeQualified](/official/Reference/Attributes#mustbequalified)、[RunAfterBuild](/official/Reference/Attributes#runafterbuild)、[SimplerByVals](/official/Reference/Attributes#simplerbyvals)、[TestCase](/official/Reference/Attributes#testcase)、[Unimplemented](/official/Reference/Attributes#unimplemented)

**Public**
: *可选*。指示 **Function** 过程可被所有模块中的所有其他过程访问。如果在包含 **Option Private** 的模块中使用，则该过程在项目外不可用。

**Private**
: *可选* 指示 **Function** 过程仅可被声明它的模块中的其他过程访问。

**Friend**
: *可选* 仅在类模块中使用。指示 **Function** 过程在整个项目中可见，但对对象实例的控制器不可见。

**[Protected](/official/Reference/Core/Protected)**
: *可选* (twinBASIC) 仅在类中使用。指示 **Function** 过程可从声明类的内部和通过 [**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop) 派生的类访问，但外部调用者不能访问。

**Static**
: *可选* 指示 **Function** 过程的局部变量在调用之间保持其值。**Static** 属性不影响在 **Function** 外部声明的变量，即使它们在过程中使用。

**Overridable**
: *可选* (twinBASIC) 将 **Function** 标记为继承钩子，通过 [**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop) 派生的类可以用 **Overrides** 子句替换。仅在参与 **Inherits** 层次结构的类成员上有意义。

*name*
: **Function** 的名称；遵循标准变量命名约定。

**Of** *typevars*
: *可选* 一个或多个类型变量名；遵循标准变量命名约定。名称用逗号分隔。使函数成为泛型函数。

*arglist*
: *可选* 表示调用 **Function** 过程时传递的参数的变量列表。多个变量用逗号分隔。

**As** *type*
: *可选* **Function** 过程返回值的数据类型；可以是Byte、Boolean、Integer、Long、Currency、Single、Double、Decimal、Date、String（定长除外）、Object、Variant或任何用户自定义类型(UDT)。

*binding-clause*
: *可选* (twinBASIC) 三种尾部子句之一，将此函数体绑定到在别处声明的成员：

  - **Handles** *object*.*event* [ **,** *object*.*event* … ]——将此 **Function** 连接为命名事件的处理程序，替代传统的 `Object_Event` 命名约定。参见 [**Handles** 语句](/official/Reference/Core/Handles)。
  - **Implements** *iface*.*member* [ **,** *iface2*.*member2* … ]——为命名的 [**Interface**](/official/Reference/Core/Interface)（或 [**Class**](/official/Reference/Core/Class)）成员提供实现体，替代传统的 `Iface_Member` 命名约定。逗号分隔的列表允许一个函数体同时满足多个接口的成员。参见 [**Implements** 语句](/official/Reference/Core/Implements)。
  - **Overrides** *base*.*member*——为通过 [**Inherits**](/official/Features/Language/Inheritance#inherits-for-complete-oop) 继承的 **Overridable** *member* 提供实现体。与同一头部的 **Overridable** 组合使用以允许更深层的派生类再次覆盖。

*statements*
: *可选* 在 **Function** 过程内执行的任何语句组。

**[Let](/official/Reference/Core/Let)**
: *可选* 在不退出函数的情况下赋值 **Function** 的非对象类型返回值。**Let** 关键字可选。

**[Set](/official/Reference/Core/Set)**
: *可选* 在不退出函数的情况下赋值 **Function** 的对象类型返回值。

**[Return](/official/Reference/Core/Return)** *expression*
: *可选* 立即以 *expression* 作为返回值从函数返回。此形式中 *expression* 是必需的；单独的 **Return** 保留给 [**GoSub...Return**](/official/Reference/Core/GoSub-Return) 构造，不会退出 **Function**。

**[Exit Function](/official/Reference/Core/Exit)**
: *可选* 立即从函数返回而不设置返回值。用于在不需要返回值时提前离开函数（函数将产生其默认返回值：数值类型为0，字符串为 `""`，**Variant** 为 **Empty**，对象引用为 **Nothing**）。

*expression*
: *可选* **Function** 的返回值。

### *arglist*

语法：一个或多个  
[ **Optional** ] [ **ByVal** \| **ByRef** ] [ **ParamArray** ] *varname* [ **()** ] [ **As** *type* ] [ **=** *defaultvalue* ]

**Optional**
: *可选* 指示参数不是必需的。如果使用，*arglist* 中所有后续参数也必须是可选的并使用 **Optional** 关键字声明。如果使用了 **ParamArray**，则不能对任何参数使用 **Optional**。

**ByVal**
: *可选* 指示参数按值传递。

**ByRef**
: *可选* 指示参数按引用传递。**ByRef** 是默认方式，与Visual Basic .NET不同。

**ParamArray**
: *可选* 仅用作 *arglist* 中的最后一个参数，指示最后一个参数是 **Variant** 元素的 **Optional** 数组。**ParamArray** 关键字允许传递任意数量的参数。不能与 **ByVal**、**ByRef** 或 **Optional** 一起使用。

*varname*
: 表示参数的变量名称；遵循标准变量命名约定。

*type*
: *可选* 传递给过程的参数的数据类型；可以是 **Byte**、**Boolean**、**Integer**、**Long**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（仅限变长）、**Object**、**Variant**、特定对象类型或泛型类型参数的名称。如果参数不是 **Optional**，也可以指定用户自定义类型。  
如果使用泛型类型参数的名称，它将绑定到传递给函数的参数的具体类型。名称绑定具有函数体的作用域。

*defaultvalue*
: *可选* 任何常量或常量表达式。仅对 **Optional** 参数有效。如果类型为 **Object**，显式默认值只能为 **Nothing**。

如果未使用 **Public**、**Private** 或 **Friend** 显式指定，**Function** 过程默认为公共的。

如果未使用 **Static**，局部变量的值在调用之间不保留。

**Friend** 关键字只能在类模块中使用。但 **Friend** 过程可以被项目中任何模块的过程访问。**Friend** 过程不出现在其父类的类型库中，也不能被后期绑定。

**Function** 过程可以递归；即它们可以调用自身来执行给定任务。但递归可能导致栈溢出。**Static** 关键字通常不与递归 **Function** 过程一起使用。

所有可执行代码必须在过程中。**Function** 过程不能定义在另一个 **Function**、[**Sub**](/official/Reference/Core/Sub) 或 [**Property**](/official/Reference/Core/Property) 过程内。

**[Exit Function](/official/Reference/Core/Exit)** 语句和 **[Return](/official/Reference/Core/Return)** *expression* 语句都会导致立即从 **Function** 过程退出。程序执行继续到调用 **Function** 过程的语句之后的语句。这些语句可以在 **Function** 过程中的任何位置出现任意数量。**Exit Function** 适用于返回值已经赋值（或想要默认值）的情况；**Return** *expression* 在一步中设置返回值并退出。

与 **Sub** 过程一样，**Function** 过程是可以接受参数、执行一系列语句并更改其参数值的独立过程。但与 **Sub** 过程不同，当需要函数返回的值时，**Function** 过程可以像任何内部函数——如 **Sqr**、**Cos** 或 **Chr**——一样出现在表达式的右侧。

通过在表达式中使用函数名后跟括号内的参数列表来调用 **Function** 过程。参见 **[Call](/official/Reference/Core/Call)** 语句了解如何调用 **Function** 过程的具体信息。

要从函数返回值，请将值赋给函数名，或将其作为 **Return** 语句的参数。此类赋值和 **Return** 语句可以在过程中的任何位置出现任意数量。如果没有将值赋给 *name*，过程返回默认值：数值函数返回0，字符串函数返回零长度字符串("")，**Variant** 函数返回 **Empty**。如果函数返回对象引用且在 **Function** 内未使用 **Set** 或 **Return** 将对象引用赋给 *name*，则返回 **Nothing**。

以下示例展示如何为函数赋返回值。在此例中，将 **False** 赋给函数名以指示未找到某个值。

```vb
Function BinarySearch(...) As Boolean 
  '... 
  ' Value not found. Return a value of False. 
  If lower > upper Then 
    BinarySearch = False 
    Exit Function 
  End If 
  '...
End Function
```

**Function** 过程中使用的变量分为两类：在过程中显式声明的和未显式声明的。

在过程中显式声明（使用 **Dim** 或等效方式）的变量始终是过程的局部变量。在过程中使用但未显式声明的变量也是局部变量，除非它们在过程外部的更高级别被显式声明。

过程可以使用未在过程中显式声明的变量，但如果模块级别定义了同名的任何内容，则可能发生命名冲突。当过程引用与另一个过程、常量或变量同名的未声明变量时，假定过程引用的是该模块级别的名称。显式声明变量以避免此类冲突。使用 **[Option Explicit](/official/Reference/Core/Option#Explicit)** 语句强制显式声明变量。

Visual Basic可能会重新排列算术表达式以提高内部效率。当函数更改同一表达式中变量的值时，避免在算术表达式中使用 **Function** 过程。有关算术运算符的更多信息，参见运算符。

### 示例

本示例使用 **Function** 语句声明构成 **Function** 过程体的名称、参数和代码。最后一个示例使用强类型、初始化的 **Optional** 参数。

```vb
' The following user-defined function returns the square root of the 
' argument passed to it. 
Function CalculateSquareRoot(NumberArg As Double) As Double 
  If NumberArg < 0 Then ' Evaluate argument. 
    Exit Function ' Exit to calling procedure. 
  Else 
    CalculateSquareRoot = Sqr(NumberArg) ' Return square root. 
  End If 
End Function
```

使用 **ParamArray** 关键字使函数可以接受可变数量的参数。在以下定义中，它按值传递。

```vb
Function CalcSum(ByVal FirstArg As Integer, ParamArray OtherArgs()) 
  Dim ReturnValue 
  ' If the function is invoked as follows: 
  ReturnValue = CalcSum(4, 3, 2, 1) 
  ' Local variables are assigned the following values: FirstArg = 4, 
  ' OtherArgs(1) = 3, OtherArgs(2) = 2, and so on, assuming default 
  ' lower bound for arrays = 1. 
End Function
```

**Optional** 参数可以有默认值和 **Variant** 以外的类型。

```vb
' If a function's arguments are defined as follows: 
Function MyFunc(MyStr As String,Optional MyArg1 As _
 Integer = 5,Optional MyArg2 = "Dolly") 
  Dim RetVal 
  ' The function can be invoked as follows: 
  RetVal = MyFunc("Hello", 2, "World") ' All 3 arguments supplied. 
  RetVal = MyFunc("Test", , 5) ' Second argument omitted. 
  ' Arguments one and three using named-arguments. 
  RetVal = MyFunc(MyStr:="Hello ", MyArg1:=7)
End Function
```