---
title: Enum
parent: Statements
permalink: /tB/Core/Enum
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a405fb42-3828-4a7b-86de-aba4f2fa462c'
  PropagateID: 'a405fb42-3828-4a7b-86de-aba4f2fa462c'
  ReservedCode1: 'a65ce68c-70eb-4af8-8d5d-8dfa3e30ab3b'
  ReservedCode2: 'a65ce68c-70eb-4af8-8d5d-8dfa3e30ab3b'
---

# Enum

声明枚举类型。

语法：

> [ *attributes* ]  
> [ **Public** | **Private** ] **Enum** *name*  
> &nbsp;&nbsp;&nbsp;&nbsp;*membername* [**=** *constantexpression* ]   
> &nbsp;&nbsp;&nbsp;&nbsp;*membername* [**=** *constantexpression* ] . . .  
> **End Enum**

*attributes*
: *可选* 以下一个或多个：  
[EnumId](/official/Reference/Attributes#enumid)、[Flags](/official/Reference/Attributes#flags)、[PopulateFrom](/official/Reference/Attributes#populatefrom)

**Public**
: *可选* 指定 **Enum** 类型在整个项目中可见。**Enum** 类型默认为 **Public**。

**Private**
: *可选* 指定 **Enum** 类型仅在其出现的模块内可见。

*name*
: **Enum** 类型的名称。*name* 必须是有效的Visual Basic标识符，在声明 **Enum** 类型的变量或参数时作为类型指定。

*membername*
: 有效的Visual Basic标识符，指定 **Enum** 类型组成元素的名称。

*constantexpression*
: *可选* 元素的值（求值为 **Long**）。如果未指定 *constantexpression*，则赋值为零（如果是第一个 *membername*），或比紧接前一个 *membername* 的值大1。

枚举变量是用 **Enum** 类型声明的变量。变量和参数都可以用 **Enum** 类型声明。**Enum** 类型的元素在 **Enum** 语句中初始化为常量值。赋值不能在运行时修改，可以包含正数和负数。例如：

```vb
Enum SecurityLevel 
 IllegalEntry = -1 
 SecurityLevel1 = 0 
 SecurityLevel2 = 1 
End Enum 
```

**Enum** 语句只能出现在模块级别。定义 **Enum** 类型后，可用于声明变量、参数或返回其类型的过程。**Enum** 类型名不能用模块名限定。

类模块中的 **Public Enum** 类型不是类的成员；但是，它们会写入类型库。标准模块中定义的 **Enum** 类型不会写入类型库。同名的 **Public Enum** 类型不能同时在标准模块和类模块中定义，因为它们共享同一命名空间。当不同类型库中的两个 **Enum** 类型同名但元素不同时，对该类型变量的引用取决于哪个类型库在 **引用** 中具有更高优先级。

**Enum** 类型不能用作 **With** 块的目标。

### 示例

以下示例展示使用 **Enum** 语句定义命名常量集合。在此例中，常量是可能用于设计数据库数据输入窗体的颜色。

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