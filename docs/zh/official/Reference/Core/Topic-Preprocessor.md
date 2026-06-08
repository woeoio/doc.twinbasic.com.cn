---
title: "#If, #Const"
parent: Statements
permalink: /tB/Core/Topic-Preprocessor
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '92a4ef18-30f8-42a1-a2c0-931670bfffe1'
  PropagateID: '92a4ef18-30f8-42a1-a2c0-931670bfffe1'
  ReservedCode1: '3750cbc4-9273-4de9-b17f-aa124a01025b'
  ReservedCode2: '3750cbc4-9273-4de9-b17f-aa124a01025b'
---

# #If...Then...#Else、#Const 指令

在*编译时*有条件地包含或排除代码块的编译器指令，并定义用于测试这些条件的常量。与运行时的[**If...Then...Else**](/official/Reference/Core/If-Then-Else)和[**Const**](/official/Reference/Core/Const)不同，这些指令在编译期间操作：非活动分支中的代码从编译输出中完全省略，不产生大小或运行时开销。

## #If...Then...#Else 指令

语法：

> **#If** *expression* **Then**  
> &nbsp;&nbsp;&nbsp;&nbsp;*statements*  
> [ **#ElseIf** *expression-n* **Then**  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *elseifstatements* ] ] ...  
> [ **#Else**  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *elsestatements* ] ]  
> **#End If**

*expression*, *expression-n*
: 完全由条件编译常量、字面量和运算符组成的表达式，计算结果为**True**或**False**。

*statements*, *elseifstatements*, *elsestatements*
: 当对应*expression*为**True**时包含的源代码行或进一步的编译器指令。

该指令的行为与运行时[**If...Then...Else**](/official/Reference/Core/If-Then-Else)语句类似，但有以下差异：

- 没有单行形式——`#If`、`#ElseIf`、`#Else`和`#End If`必须各自出现在单独的行上。
- 所有*expressions*都会被计算，无论选择了哪个分支，因此它们引用的每个常量都必须已定义。未定义的条件编译常量计算为**Empty**（即零），被视为**False**。
- 未选择分支中的代码从编译中*移除*而非在运行时跳过。在twinBASIC中，非活动代码甚至不被检查错误。IDE根据当前构建配置将非活动块显示为灰色。

::: info
[**Option Compare**](/official/Reference/Core/Option)语句不影响`#If`/`#ElseIf`中的表达式。它们始终按**Option Compare Text**生效来计算。
:::

## #Const 指令

语法：

> **#Const** *constname* **=** *expression*

*constname*
: 条件编译常量的名称；遵循标准变量命名约定。

*expression*
: 字面量、另一个条件编译常量，或使用算术或逻辑运算符（[**Is**](/official/Reference/Core/Is)除外）的任意组合。不允许使用标准运行时常量（用[**Const**](/official/Reference/Core/Const)声明的）。

使用`#Const`声明的条件编译常量对其出现的模块是私有的。项目范围的条件常量必须在项目的编译设置中定义——`#Const`不能创建它们。

条件编译常量始终在模块级计算，无论它们出现在代码中的什么位置；它们只能在`#If`/`#ElseIf`表达式中使用。

## 预定义编译器常量

twinBASIC提供了一组内置编译器常量——`Win64`、`Win32`、`TWINBASIC`、`TWINBASIC_BUILD`、`VBA7`等。完整列表及各常量的含义请参见[编译器常量](/official/Reference/Compiler-Constants)页面。

### 示例

本示例使用`Win64`预定义常量选择特定平台的导入，并使用项目定义的`DEBUG_BUILD`常量仅在调试构建中启用额外日志记录。

```vb
#Const DEBUG_BUILD = 1

#If Win64 Then
    ' 64-bit-only declarations.
    Import Library "/Miscellaneous/sqlite3_64.obj" As SQLITE3
#Else
    ' 32-bit fallback.
    Import Library "/Miscellaneous/sqlite3_32.obj" As SQLITE3
#End If

Public Sub DoWork()
#If DEBUG_BUILD Then
    Debug.Print "Entering DoWork at "; Now
#End If
    ' ...
End Sub
```

### 另请参阅

- [**If...Then...Else** 语句](/official/Reference/Core/If-Then-Else)——运行时对应语句。
- [**Const** 语句](/official/Reference/Core/Const)——**#Const**的运行时对应语句。
- [编译器常量](/official/Reference/Compiler-Constants)——内置条件常量完整列表。