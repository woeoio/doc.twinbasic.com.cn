---
title: Declare
parent: 语句
permalink: /zh/tB/Core/Declare
---

# Declare

在模块级别用于声明对动态链接库（DLL）中外部过程的引用。

> [!NOTE]
>
> 带PtrSafe关键字的**Declare**语句是推荐的语法。包含**PtrSafe**的**Declare**语句在twinBASIC和VBA版本7开发环境中，在32位和64位平台上都能正确工作，但只有在**Declare**语句中所有需要存储64位数量的数据类型（参数和返回值）都更新为使用LongLong表示64位整数或LongPtr表示指针和句柄后。为了确保与VBA版本6及更早版本的向后兼容性，请使用以下结构：

```vb
#If VBA7 Then
Declare PtrSafe Sub...
#Else
Declare Sub...
#EndIf
```
> [!NOTE]
>
> 为了在构建64位目标时运行代码，所有**Declare**语句必须包含**PtrSafe**关键字，并且**Declare**语句中所有需要存储64位数量的数据类型（参数和返回值）必须更新为使用**LongLong**表示64位整数或**LongPtr**表示指针和句柄。

语法：

- > [ *属性* ]
  > [ **Public** \| **Private** ] **Declare** [ **PtrSafe**  ] **Sub** *名称* **Lib** "*库名*" [ **(** [ *参数列表* ] **)** ]
- > [ *属性* ]
  > [ **Public** \| **Private** ] **Declare** [ **PtrSafe**  ] **Sub** *名称* **Lib** "*库名*" **Alias** "*别名*" [ **(** [ *参数列表* ] **)** ]
- > [ *属性* ]
  > [ **Public** \| **Private** ] **Declare** [ **PtrSafe** ] **Function** *名称* **Lib** "*库名*" [ **(** [ *参数列表* ] **)** ] [ **As** *类型* ]
- > [ *属性* ]
  > [ **Public** \| **Private** ] **Declare** [ **PtrSafe** ] **Function** *名称* **Lib** "*库名*" **Alias** "*别名*" [ **(** [ *参数列表* ] **)** ] [ **As** *类型* ]


*属性*
: *可选* 以下之一：
[Description](Attributes#description), [DLLStackCheck](Attributes#dllstackcheck), [PreserveSig](Attributes#preservesig), [SetDllDirectory](Attributes#setdlldirectory), [UseGetLastError](Attributes#usegetlasterror)

**Public**
: *可选* 用于声明对所有其他模块中所有过程可用的过程。

**Private**
: *可选* 用于声明仅对声明所在的模块可用的过程。

**PtrSafe**
: *64位必需* PtrSafe关键字断言Declare语句在Microsoft Office的64位版本中安全运行。

**Sub / Function**
: 指示过程是否返回值（**Function**）或不返回值（**Sub**）。

*名称*
: 任何有效的过程名称。注意DLL入口点是区分大小写的。

*库名*
: 包含声明过程的DLL或代码资源的名称。

**Alias** *别名*
: *可选* 指示被调用的过程在DLL中有另一个名称。当外部过程名称与关键字相同时，这很有用。当DLL过程与相同作用域中的公共变量、常量或任何其他过程同名时，也可以使用Alias。如果DLL过程名称中的任何字符不符合DLL命名约定，Alias也很有用。
*别名*命名DLL或代码资源中的过程。如果第一个字符不是数字符号（**#**），*别名*是DLL中过程入口点的名称。如果（**#**）是第一个字符，则后续所有字符必须指示过程入口点的序数。

*参数列表*
: *可选* 表示调用过程时传递给过程的参数的变量列表。

*类型*
: *可选* **Function**过程返回的值的数据类型；可以是Byte、Boolean、Integer、Long、LongLong、LongPtr、Currency、Single、Double、Decimal（目前不支持）、Date、String（仅变长）、Variant、用户定义类型（UDT）或对象类型。**LongLong**仅在64位平台上是有效的声明类型。

### 参数列表

*参数列表*参数具有以下语法和部分：

语法：[ **Optional** ] [ **ByVal** \| **ByRef** ] [ **ParamArray** ] *变量名* [ **( )** ] [ **As** *类型* ]

**Optional**
: *可选* 指示参数不是必需的。如果使用，*参数列表*中所有后续参数也必须可选，并使用**Optional**关键字声明。如果使用**ParamArray**，则不能对任何参数使用**Optional**。

**ByVal**
: *可选* 指示参数按值传递。

**ByRef**
: *可选* 指示参数按引用传递。**ByRef**是默认值，与Visual Basic .NET不同。

**ParamArray**
: *可选* 仅用作参数列表中的最后一个参数，以指示最终参数是**Variant**元素的**Optional**数组。**ParamArray**关键字允许您提供任意数量的参数。ParamArray关键字不能与**ByVal**、**ByRef**或**Optional**一起使用。

*变量名*
: 表示传递给过程的参数的变量名称；遵循标准变量命名约定。

**( )**
:  数组变量必需。指示*变量名*是数组。

*类型*
: *可选* 传递给过程的参数的数据类型；可以是**Byte**、**Boolean**、**Integer**、**Long**、**LongLong**、**LongPtr**、**Currency**、**Single**、**Double**、**Decimal**（目前不支持）、**Date**、**String**（仅变长）、**Object**、**Variant**、用户定义类型（UDT）或对象类型。（**LongLong**仅在64位平台上是有效的声明类型。）

如果包含参数列表，则每次调用过程时都会检查参数的数量和类型。以下示例中的First子程序接受一个**Long**参数，而Second子程序不接受参数：

```vb
Declare Sub First Lib "MyLib" (X As Long)
Declare Sub Second Lib "MyLib" ()
```

> [!NOTE]
>
> - 在**Declare**语句的参数列表中不能有固定长度字符串；只能向过程传递变长字符串。固定长度字符串可以作为过程参数出现，但在传递之前会被转换为变长字符串。
> - 调用外部过程时使用**vbNullString**常量，其中外部过程需要值为零的字符串。这与零长度字符串（""）不同。

### 示例

此示例显示如何在标准模块的模块级别使用**Declare**语句声明对动态链接库（DLL）中外部过程的引用。如果**Declare**语句是**Private**的，可以将其放在类模块中。

```vb
' 在32位Microsoft Windows系统中，指定库USER32.DLL。
Declare Sub MessageBeep Lib "User32" (ByVal N As Long)

' 64位Declare语句示例：
Declare PtrSafe Function GetActiveWindow Lib "User32" () As LongPtr

' 条件编译示例
#If Vba7 Then
     ' 代码在32位或64位twinBASIC或VBA7中运行
     #If Win64 Then
          ' 代码在64位twinBASIC或VBA7中运行。
     #Else
          ' 代码不在64位twinBASIC或VBA7中运行。
     #End If
#Else
     ' 代码不在32位或64位twinBASIC或VBA7中运行。
#End If
```