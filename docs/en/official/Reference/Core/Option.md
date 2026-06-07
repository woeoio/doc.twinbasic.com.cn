---
title: Option
parent: Statements
permalink: /tB/Core/Option
---
# Option

Configures a compiler option.


## Option Base

Syntax: **Option Base** { **0** \| **1** }

Used at the [module level](/en/official/Reference/Glossary#module-level) to declare the default lower bound for array subscripts.

Because the default base is **0**, the **Option Base** statement is never required.

If used, the statement must appear in a [module](/en/official/Reference/Glossary#module) or [class](/en/official/Reference/Glossary#class) before any procedures, functions, or properties. **Option Base** can appear only once in a module and must precede array [declarations](/en/official/Reference/Glossary#declaration) that include dimensions.

::: info
The **To** clause in the [**Dim**](/en/official/Reference/Core/Dim), [**Private**](/en/official/Reference/Core/Private), [**Public**](/en/official/Reference/Core/Public), [**ReDim**](/en/official/Reference/Core/ReDim), and [**Static**](/en/official/Reference/Core/Static) statements provides a more flexible way to control the range of an array's subscripts. However, when the lower bound is not explicitly set with a **To** clause, **Option Base** can change the default lower bound to 1. The base of an array created with the [**ParamArray**](/en/official/Reference/Core/ParamArray) keyword is zero; **Option Base** does not affect [**ParamArray**](/en/official/Reference/Core/ParamArray) (or the [**Array**](/en/official/Reference/Core/Array) function).
:::

The **Option Base** statement only affects the lower bound of arrays in the module where the statement is located.

### See Also

- [**Dim**](/en/official/Reference/Core/Dim) and [**ReDim**](/en/official/Reference/Core/ReDim) statements
- [**LBound**](/en/official/Reference/Core/LBound) and [**UBound**](/en/official/Reference/Core/UBound) functions

### Example of use at module level

This example uses the **Option Base** statement to override the default base array subscript value of 0. The [**LBound**](/en/official/Reference/Core/LBound) function returns the smallest available subscript for the indicated dimension of an array. The **Option Base** statement is used at the module level only.

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

### Example of use at class level

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

Syntax: **Option Explicit**

Used at the [module level](/en/official/Reference/Glossary#module-level) to force explicit declaration of all [variables](/en/official/Reference/Glossary#variable) in that [module](/en/official/Reference/Glossary#module).

If used, the **Option Explicit** statement must appear in a module before any [procedures](/en/official/Reference/Glossary#procedure).

This option makes it mandatory to require variable declarations. There is no complementary option to make the declarations optional.

When **Option Explicit** appears in a module, all variables must be explicitly declared by using the [**Dim**](/en/official/Reference/Core/Dim), [**Private**](/en/official/Reference/Core/Private), [**Public**](/en/official/Reference/Core/Public), [**ReDim**](/en/official/Reference/Core/ReDim), or [**Static**](/en/official/Reference/Core/Static) statements. Attempting to use an undeclared variable name raises an error at [compile time](/en/official/Reference/Glossary#compile-time).

Without the **Option Explicit** statement, and when the [**Option Explicit On**](/en/official/IDE/Project-Settings#option-explicit-on) project setting is changed to its non-default value of *No*, all undeclared variables are of **Variant** type unless the default type is otherwise specified with a [**Def**_type_](/en/official/Reference/Core/Deftype) statement.

::: info
The **Option Explicit On** project setting is *Yes* by default in new projects.
:::

**Option Explicit** prevents incorrect typing of an existing variable's name, and removes confusion where the [scope](/en/official/Reference/Glossary#scope) of a variable is not clear.

### See Also

- [**Const**](/en/official/Reference/Core/Const), [**Dim**](/en/official/Reference/Core/Dim), and [**Static**](/en/official/Reference/Core/Static) statements

### Example of use at module level

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

Syntax: **Option Compare** { **Binary** \| **Text** \| **Database** }

If used, the **Option Compare** statement must appear in a [module](/en/official/Reference/Glossary#module) before any [procedures](/en/official/Reference/Glossary#procedure).

The **Option Compare** statement specifies the [string comparison](/en/official/Reference/Glossary#string-comparison) method (**Binary**, **Text**, or **Database**) for a module. If a module doesn't include an **Option Compare** statement, the default text comparison method is **Binary**.

* **Option Compare Binary** results in string comparisons based on a [sort order](/en/official/Reference/Glossary#sort-order) derived from the internal binary representations of the characters. In Microsoft Windows, sort order is determined by the code page. A typical binary sort order is shown in the following example:

  ```vb
  A < B < E < Z < a < b < e < z < À < Ê < Ø < à < ê < ø 
  ```

* **Option Compare Text** results in string comparisons based on a case-insensitive text sort order determined by the system's [locale](/en/official/Reference/Glossary#locale). When the same characters are sorted by using **Option Compare Text**, the following text sort order is produced:

  ```vb
  (A=a) < ( À=à) < (B=b) < (E=e) < (Ê=ê) < (Z=z) < (Ø=ø) 
  ```
* **Option Compare Database** has no effect in twinBASIC. When used within Microsoft Access, it results in string comparisons based on the sort order determined by the locale ID of the database where the string comparisons occur.

### See Also

- [**InStr\$**](/en/official/Reference/VBA/Strings/InStr), [**InStr**](/en/official/Reference/VBA/Strings/InStr), [**InStrB**](/en/official/Reference/VBA/Strings/InStr), and [**InStrRev**](/en/official/Reference/VBA/Strings/InStrRev) functions.

### Example

This example uses the **Option Compare** statement to set the default string comparison method. The **Option Compare** statement is used at the module level only.

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

Syntax: **Option Private Module**

When used in applications that reference multiple [packages](/en/official/Reference/Glossary#package), **Option Private Module** prevents a [module's](/en/official/Reference/Glossary#module) or [class's](/en/official/Reference/Glossary#class) contents from being referenced outside its package.

If used, the **Option Private** statement must appear at [module level](/en/official/Reference/Glossary#module-level) or [class level](/en/official/Reference/Glossary#class-level), before any [procedures](/en/official/Reference/Glossary#procedure).

When a module contains **Option Private Module**, the public parts, for example, [variables](/en/official/Reference/Glossary#variable), [objects](/en/official/Reference/Glossary#object), and [user-defined types](/en/official/Reference/Glossary#user-defined-type) declared at the module level, are still available within the [project](/en/official/Reference/Glossary#project) containing the module, but they are not available to other applications or projects.

::: info
**Option Private** is a more verbose way of making modules or classes private to the package. An equivalent effect in a less verbose fashion is obtained with [**Private**](/en/official/Reference/Core/Private) statement as follows:

```vb
Private Module MyModule
    ' ...
End Module 

Private Class MyClass
    ' ...
End Class
```
:::

### Example

This example demonstrates the **Option Private** statement, which is used at module level to indicate that the entire module is private. With **Option Private Module**, module-level parts not declared **Private** are available to other modules in the project, but not to other projects or applications.

```vb
Module MyModule
    Option Private Module ' Indicates that the module is private.
End Module    
```
