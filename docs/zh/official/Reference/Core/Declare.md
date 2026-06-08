---
title: Declare
parent: Statements
permalink: /tB/Core/Declare
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '80c9162c-ca41-4ecf-8807-2a607a30692a'
  PropagateID: '80c9162c-ca41-4ecf-8807-2a607a30692a'
  ReservedCode1: 'bc1b0fdf-d2b4-495e-a174-cc701b714d6b'
  ReservedCode2: 'bc1b0fdf-d2b4-495e-a174-cc701b714d6b'
---

# Declare

在模块级别声明对动态链接库(DLL)中外部过程的引用。

::: info

带有PtrSafe关键字的 **Declare** 语句是推荐的语法。包含 **PtrSafe** 的 **Declare** 语句只有在将 **Declare** 语句中需要存储64位量的所有数据类型（参数和返回值）更新为对64位整数使用LongLong、对指针和句柄使用LongPtr之后，才能在twinBASIC和VBA版本7开发环境的32位和64位平台上正常工作。
:::

为确保与VBA版本6及更早版本的向后兼容，请使用以下结构：

```vb
#If VBA7 Then 
Declare PtrSafe Sub... 
#Else 
Declare Sub... 
#EndIf
```

::: info

要在为64位目标构建时运行代码，所有 **Declare** 语句必须包含 **PtrSafe** 关键字，且 **Declare** 语句中需要存储64位量的所有数据类型（参数和返回值）必须更新为对64位整数使用 **LongLong**、对指针和句柄使用 **LongPtr**。
:::

语法：

- > [ *attributes* ]  
  > [ **Public** \| **Private** ] **Declare** [ **PtrSafe** ] **Sub** *name* **Lib** "*libname*" [ **(** [ *arglist* ] **)** ]
- > [ *attributes* ]  
  > [ **Public** \| **Private** ] **Declare** [ **PtrSafe** ] **Sub** *name* **Lib** "*libname*" **Alias** "*aliasname*" [ **(** [ *arglist* ] **)** ]
- > [ *attributes* ]  
  > [ **Public** \| **Private** ] **Declare** [ **PtrSafe** ] **Function** *name* **Lib** "*libname*" [ **(** [ *arglist* ] **)** ] [ **As** *type* ]
- > [ *attributes* ]  
  > [ **Public** \| **Private** ] **Declare** [ **PtrSafe** ] **Function** *name* **Lib** "*libname*" **Alias** "*aliasname*" [ **(** [ *arglist* ] **)** ] [ **As** *type* ]


*attributes*
: *可选* 以下一个或多个：  
[Description](/official/Reference/Attributes#description)、[DLLStackCheck](/official/Reference/Attributes#dllstackcheck)、[PreserveSig](/official/Reference/Attributes#preservesig)、[SetDllDirectory](/official/Reference/Attributes#setdlldirectory)、[UseGetLastError](/official/Reference/Attributes#usegetlasterror)

**Public**
: *可选* 用于声明对所有模块中所有其他过程可用的过程。

**Private**
: *可选* 用于声明仅在声明所在模块内可用的过程。

**PtrSafe**
: *64位必填* PtrSafe关键字断言Declare语句可以在64位版本的Microsoft Office中安全运行。

**Sub / Function**
: 指示过程是否返回值（**Function**）或不返回值（**Sub**）。

*name*
: 任何有效的过程名称。注意DLL入口点区分大小写。

*libname*
: 包含所声明过程的DLL或代码资源的名称。

**Alias** *aliasname*
: *可选* 指示被调用的过程在DLL中有另一个名称。当外部过程名与关键字相同时很有用。当DLL过程与同一作用域中的公共变量、常量或任何其他过程同名时，Alias也适用。当DLL过程名中有不符合DLL命名约定的字符时，Alias也很有用。  
*aliasname* 命名DLL或代码资源中的过程。如果第一个字符不是数字符号（**#**），*aliasname* 是DLL中过程入口点的名称。如果第一个字符是（**#**），后续所有字符必须指示过程入口点的序号。

*arglist* 
: *可选* 表示调用过程时传递的参数的变量列表。

*type*
: *可选* **Function** 过程返回值的数据类型；可以是Byte、Boolean、Integer、Long、LongLong、LongPtr、Currency、Single、Double、Decimal、Date、String（仅限变长）、Variant、用户自定义类型(UDT)或对象类型。**LongLong** 仅在64位平台上是有效的声明类型。

### arglist

*arglist* 参数的语法和组成部分如下：

语法：[ **Optional** ] [ **ByVal** \| **ByRef** ] [ **ParamArray** ] *varname* [ **( )** ] [ **As** *type* ]

**Optional**
: *可选* 指示参数不是必需的。如果使用，*arglist* 中所有后续参数也必须是可选的并使用 **Optional** 关键字声明。如果使用了 **ParamArray**，则不能对任何参数使用 **Optional**。

**ByVal**
: *可选* 指示参数按值传递。

**ByRef**
: *可选* 指示参数按引用传递。**ByRef** 是默认方式，与Visual Basic .NET不同。

**ParamArray**
: *可选* 仅用作arglist中的最后一个参数，指示最后一个参数是 **Variant** 元素的 **Optional** 数组。**ParamArray** 关键字允许传递任意数量的参数。ParamArray关键字不能与 **ByVal**、**ByRef** 或 **Optional** 一起使用。

*varname*
: 表示传递给过程的参数的变量名称；遵循标准变量命名约定。

**( )**
: 数组变量必需。指示 *varname* 是数组。

*type*
: *可选* 传递给过程的参数的数据类型；可以是 **Byte**、**Boolean**、**Integer**、**Long**、**LongLong**、**LongPtr**、**Currency**、**Single**、**Double**、**Decimal**、**Date**、**String**（仅限变长）、**Object**、**Variant**、用户自定义类型(UDT)或对象类型。（**LongLong** 仅在64位平台上是有效的声明类型。）

当包含参数列表时，每次调用过程时都会检查参数的数量和类型。以下示例中，第一个Sub接受一个 **Long** 参数，而第二个Sub不接受参数：

```vb
Declare Sub First Lib "MyLib" (X As Long)
Declare Sub Second Lib "MyLib" ()
```

::: info

- 定长字符串不能出现在 **Declare** 语句的参数列表中；只能向过程传递变长字符串。定长字符串可以作为过程参数出现，但在传递之前会被转换为变长字符串。
- **vbNullString** 常量在调用外部过程时使用，当外部过程需要值为零的字符串时。这与零长度字符串("")不同。
:::

### 示例

本示例展示如何在标准模块的模块级别使用 **Declare** 语句声明对动态链接库(DLL)中外部过程的引用。**Declare** 语句在为 **Private** 时可以放在类模块中。

```vb
' In 32-bit Microsoft Windows systems, specify the library USER32.DLL.
Declare Sub MessageBeep Lib "User32" (ByVal N As Long)
 
' 64-bit Declare statement example:
Declare PtrSafe Function GetActiveWindow Lib "User32" () As LongPtr
 
' Conditional Compilation Example 
#If Vba7 Then
     ' Code is running in 32-bit or 64-bit twinBASIC or VBA7
     #If Win64 Then
          ' Code is running in 64-bit twinBASIC or VBA7.
     #Else
          ' Code is not running in 64-bit twinBASIC or VBA7.
     #End If
#Else
     ' Code is NOT running in 32-bit or 64-bit twinBASIC or VBA7.
#End If 
```