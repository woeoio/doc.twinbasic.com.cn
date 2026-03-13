---
title: Enum
parent: 语句
permalink: /zh/tB/Core/Enum
---

# Enum
{: .no_toc }

声明枚举的类型。

语法：

> [ *属性* ]
> [ **Public** | **Private** ] **Enum** *名称*
> &nbsp;&nbsp;&nbsp;&nbsp;*成员名* [**=** *常量表达式* ]
> &nbsp;&nbsp;&nbsp;&nbsp;*成员名* [**=** *常量表达式* ] . . .
> **End Enum**

*属性*
: *可选* 以下之一：
[EnumId](Attributes#enumid), [Flags](Attributes#flags), [PopulateFrom](Attributes#populatefrom)

**Public**
: *可选* 指定**Enum**类型在整个项目中可见。**Enum**类型默认为**Public**。

**Private**
: *可选* 指定**Enum**类型仅在其出现的模块内可见。

*名称*
:  **Enum**类型的名称。*名称*必须是有效的Visual Basic标识符，并在声明**Enum**类型的变量或参数时指定为类型。

*成员名*
:  有效的Visual Basic标识符，指定**Enum**类型的组成元素的名称。

*常量表达式*
: *可选* 元素的值（计算结果为**Long**）。如果未指定*常量表达式*，则分配的值要么为零（如果是第一个*成员名*），要么比紧接在前面的*成员名*的值大1。

枚举变量是用**Enum**类型声明的变量。变量和参数都可以用**Enum**类型声明。**Enum**类型的元素在**Enum**语句中初始化为常量值。分配的值在运行时不能修改，可以包括正数和负数。例如：

```vb
Enum SecurityLevel
 IllegalEntry = -1
 SecurityLevel1 = 0
 SecurityLevel2 = 1
End Enum
```

**Enum**语句只能出现在模块级别。定义**Enum**类型后，它可以用于声明变量、参数或返回其类型的过程。您不能用模块名限定**Enum**类型名称。

类模块中的**Public Enum**类型不是类的成员；但是，它们被写入类型库。标准模块中定义的**Enum**类型不会写入类型库。不能在标准模块和类模块中定义同名的**Public Enum**类型，因为它们共享相同的命名空间。当不同类型库中的两个**Enum**类型具有相同名称但不同元素时，对该类型变量的引用取决于哪个类型库在**References**中具有更高的优先级。

您不能在**With**块中将**Enum**类型作为目标使用。

### 示例

以下示例显示**Enum**语句用于定义命名常量的集合。在这种情况下，常量是您可能选择为数据库设计数据输入窗体的颜色。

```vb
Public Enum InterfaceColors
 icMistyRose = &HE1E4FF&
 icSlateGray = &H908070&
 icDodgerBlue = &HFF901E&
 icDeepSkyBlue = &HFFBF00&
 icSpringGreen = &H7FFF00&
 icForestGreen = &H228B22&
 icGoldenrod = &H20A5DA&
 icFirebrick = &H2222B2&
End Enum
```