---
title: Option
parent: Statements
permalink: /tB/Core/Option
---
# Option

配置编译器选项。


## Option Base

语法：**Option Base** { **0** \| **1** }

在[模块级](/official/Reference/Glossary#module-level)用于声明数组下标的默认下界。

由于默认基数为**0**，**Option Base**语句永远不是必需的。

如果使用，该语句必须出现在[模块](/official/Reference/Glossary#module)或[类](/official/Reference/Glossary#class)中的任何过程、函数或属性之前。**Option Base**在模块中只能出现一次，且必须在包含维度的数组[声明](/official/Reference/Glossary#declaration)之前。

::: info
[**Dim**](/official/Reference/Core/Dim)、[**Private**](/official/Reference/Core/Private)、[**Public**](/official/Reference/Core/Public)、[**ReDim**](/official/Reference/Core/ReDim)和[**Static**](/official/Reference/Core/Static)语句中的**To**子句提供了更灵活的方式来控制数组下标的范围。但是，当未用**To**子句显式设置下界时，**Option Base**可以将默认下界更改为1。使用[**ParamArray**](/official/Reference/Core/ParamArray)关键字创建的数组的基数为零；**Option Base**不影响[**ParamArray**](/official/Reference/Core/ParamArray)（或[**Array**](/official/Reference/Core/Array)函数）。
:::

**Option Base**语句仅影响该语句所在模块中数组的下界。

### 另请参阅

- [**Dim**](/official/Reference/Core/Dim)和[**ReDim**](/official/Reference/Core/ReDim)语句
- [**LBound**](/official/Reference/Core/LBound)和[**UBound**](/official/Reference/Core/UBound)函数

### 模块级使用示例

本示例使用**Option Base**语句将默认的数组下标基数值0覆盖为1。[**LBound**](/official/Reference/Core/LBound)函数返回数组指定维度的最小可用下标。**Option Base**语句仅在模块级使用。

```vb
Module MyModule
    Option Base 1 ' Set the default array subscripts to 1. 
    Sub Example()
        Dim Lower 
        Dim MyArray(20), TwoDArray(3, 4) ' Declare array variables. 
        Dim ZeroArray(0 To 5) ' Override the default base subscript. 

        ' Use LBound function to test lower bounds of arrays. 
        Console.WriteLine LBound(MyArray)      ' Prints 1. 
        Console.WriteLine LBound(TwoDArray, 2) ' Returns 1. 
        Console.WriteLinee LBound(ZeroArray)   ' Returns 0. 
    End Sub
End Module
```

### 类级使用示例

```vb
Class Example1
    Option Base 1
    Sub New()
        Dim A1(5)
        Console.WriteLine LBound(A1)  ' Prints 1
    End Sub
End Class

Class Example0
    Option Base 0
    Sub New()
        Dim A0(5)
        Console.WriteLine LBound(A0)  ' Prints 0
    End Sub
End Class
```

## Option Explicit

语法：**Option Explicit**

在[模块级](/official/Reference/Glossary#module-level)用于强制显式声明该[模块](/official/Reference/Glossary#module)中的所有[变量](/official/Reference/Glossary#variable)。

如果使用，**Option Explicit**语句必须出现在模块中的任何[过程](/official/Reference/Glossary#procedure)之前。

此选项使变量声明成为强制性的。没有对应的选项可以使声明变为可选。

当**Option Explicit**出现在模块中时，所有变量必须使用[**Dim**](/official/Reference/Core/Dim)、[**Private**](/official/Reference/Core/Private)、[**Public**](/official/Reference/Core/Public)、[**ReDim**](/official/Reference/Core/ReDim)或[**Static**](/official/Reference/Core/Static)语句显式声明。尝试使用未声明的变量名会在[编译时](/official/Reference/Glossary#compile-time)引发错误。

如果没有**Option Explicit**语句，且[**Option Explicit On**](/official/IDE/Project-Settings#option-explicit-on)项目设置更改为非默认值*No*，则所有未声明的变量均为**Variant**类型，除非使用[**Def**_type_](/official/Reference/Core/Deftype)语句另行指定默认类型。

::: info
**Option Explicit On**项目设置在新项目中默认为*Yes*。
:::

**Option Explicit**可防止错误键入现有变量的名称，并消除变量[作用域](/official/Reference/Glossary#scope)不清晰时的混淆。

### 另请参阅

- [**Const**](/official/Reference/Core/Const)、[**Dim**](/official/Reference/Core/Dim)和[**Static**](/official/Reference/Core/Static)语句

### 模块级使用示例

```vb
Module MyModule
    Option Explicit ' Force explicit variable declaration. 
	Dim MyVar ' Declare variable. 
    Sub Example()
		MyInt = 10 ' Undeclared variable generates error. 
		MyVar = 10 ' Declared variable does not generate error. 
    End Sub
End Module
```

## Option Compare

语法：**Option Compare** { **Binary** \| **Text** \| **Database** }

如果使用，**Option Compare**语句必须出现在[模块](/official/Reference/Glossary#module)中的任何[过程](/official/Reference/Glossary#procedure)之前。

**Option Compare**语句为模块指定[字符串比较](/official/Reference/Glossary#string-comparison)方法（**Binary**、**Text**或**Database**）。如果模块不包含**Option Compare**语句，默认的文本比较方法为**Binary**。

* **Option Compare Binary**会根据字符的内部二进制表示派生的[排序顺序](/official/Reference/Glossary#sort-order)进行字符串比较。在Microsoft Windows中，排序顺序由代码页决定。典型的二进制排序顺序如下例所示：

  ```vb
  A < B < E < Z < a < b < e < z < À < Ê < Ø < à < ê < ø 
  ```

* **Option Compare Text**会根据系统的[区域设置](/official/Reference/Glossary#locale)确定的不区分大小写的文本排序顺序进行字符串比较。当使用**Option Compare Text**对相同字符排序时，产生的文本排序顺序如下：

  ```vb
  (A=a) < ( À=à) < (B=b) < (E=e) < (Ê=ê) < (Z=z) < (Ø=ø) 
  ```
* **Option Compare Database**在twinBASIC中无效。在Microsoft Access中使用时，它会根据发生字符串比较的数据库的区域设置ID确定的排序顺序进行字符串比较。

### 另请参阅

- [**InStr\$**](/official/Reference/VBA/Strings/InStr)、[**InStr**](/official/Reference/VBA/Strings/InStr)、[**InStrB**](/official/Reference/VBA/Strings/InStr)和[**InStrRev**](/official/Reference/VBA/Strings/InStrRev)函数。

### 示例

本示例使用**Option Compare**语句设置默认的字符串比较方法。**Option Compare**语句仅在模块级使用。

```vb
Module ModBin
	' Set the string comparison method to Binary. 
	Option Compare Binary ' That is, "AAA" is less than "aaa". 
End Module

Module ModText
	' Set the string comparison method to Text. 
	Option Compare Text ' That is, "AAA" is equal to "aaa". 
End Module
```

## Option Private

语法：**Option Private Module**

在引用多个[包](/official/Reference/Glossary#package)的应用程序中使用时，**Option Private Module**可防止[模块](/official/Reference/Glossary#module)或[类](/official/Reference/Glossary#class)的内容在其包外被引用。

如果使用，**Option Private**语句必须出现在[模块级](/official/Reference/Glossary#module-level)或[类级](/official/Reference/Glossary#class-level)，在任何[过程](/official/Reference/Glossary#procedure)之前。

当模块包含**Option Private Module**时，公共部分（例如在模块级声明的[变量](/official/Reference/Glossary#variable)、[对象](/official/Reference/Glossary#object)和[用户自定义类型](/official/Reference/Glossary#user-defined-type)）仍可在包含该模块的[项目](/official/Reference/Glossary#project)内使用，但其他应用程序或项目无法使用。

::: info
**Option Private**是使模块或类对包私有的更冗长的方式。使用[**Private**](/official/Reference/Core/Private)语句可以用更简洁的方式获得等效效果：

```vb
Private Module MyModule
    ' ...
End Module 

Private Class MyClass
    ' ...
End Class
```
:::

### 示例

本示例演示**Option Private**语句，该语句用在模块级表示整个模块是私有的。使用**Option Private Module**时，模块级中未声明为**Private**的部分对项目中的其他模块可用，但对其他项目或应用程序不可用。

```vb
Module MyModule
    Option Private Module ' Indicates that the module is private.
End Module    
```