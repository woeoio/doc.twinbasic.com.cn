---
title: Implements
parent: Statements
permalink: /tB/Core/Implements
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2e516779-8322-4897-a76f-d301b44b61db'
  PropagateID: '2e516779-8322-4897-a76f-d301b44b61db'
  ReservedCode1: '6590a0af-9b72-464b-bc8b-c4d2a11e8ab8'
  ReservedCode2: '6590a0af-9b72-464b-bc8b-c4d2a11e8ab8'
---

# Implements

指定将在其出现的[类](/official/Reference/Core/Class)中实现的接口或类。

语法：
> **Implements** { *InterfaceName* \| *ClassName* } [ **,** { *InterfaceName* \| *ClassName* } ]…

*InterfaceName*
: 接口的名称——twinBASIC中定义的 [**Interface**](/official/Reference/Core/Interface) 块，或引用类型库中的接口——其成员将由类中对应的成员实现。

*ClassName*
: 将实现其默认接口的类的名称。

单个 **Implements** 语句可以用逗号分隔列出多个接口或类；这等价于为每个名称写一条 **Implements** 语句。经典VBA要求每条语句单独写。

*接口*是表示接口封装的成员（方法和属性）的原型集合；即它只包含成员过程的声明。*类*提供一个或多个接口的所有方法和属性的实现。类提供当每个函数被类控制器调用时使用的代码。所有类至少实现一个接口，该接口被视为类的默认接口。任何未显式为已实现接口成员的成员隐式为默认接口的成员。

当类实现接口时，类提供接口中指定的所有 **Public** 过程的自身版本。除了提供接口原型与实现过程之间的映射外，**Implements** 语句还使类接受指定接口ID的COM `QueryInterface` 调用。

实现接口或类时，必须包含所有 **Public** 过程。接口或类实现中缺少成员会导致错误。当未在某个已实现的过程中放置代码时，应引发适当的错误（`Const E_NOTIMPL = &H80004001`），以便实现的使用者知道某个成员未实现。

**Implements** 语句不能出现在标准模块中——它仅在 [**Class**](/official/Reference/Core/Class) 块中有效。

### twinBASIC增强功能

twinBASIC以多种方式扩展了经典VBA的 **Implements**。参见[继承](/official/Features/Language/Inheritance)获取完整讨论；主要差异：

- **逗号分隔列表**——一条 **Implements** 语句可以命名多个接口或类，如 `Implements IFoo, IBar, IBaz`。经典VBA要求每个接口单独一条 **Implements** 语句。
- **继承的接口**——`Implements` 直接作用于派生接口（如 `Implements IFoo2`，其中 `Interface IFoo2 Extends IFoo`）。类不需要单独命名 `IFoo`；基接口的 `QueryInterface` 自动满足。经典VBA不支持实现派生接口。
- **多重实现形式**——单个成员可以通过过程头部后的 `Implements <iface1>.<member>, <iface2>.<member>, …` 同时实现多个接口的方法。当多个接口声明相同成员且一个函数体应满足所有接口时，这很有用。
- **`As Any` 参数**——使用 `As Any` 参数声明的接口可以被实现（在实现类中用 `As LongPtr` 替换 `As Any`）。经典VBA拒绝此用法。

::: info
在实现过程中使用 `Private`（或 `Friend`），以便接口方法不会同时成为实现类的*默认*接口的一部分。传统命名模式为 `<InterfaceName>_<MemberName>`。
:::

### 示例

以下示例展示如何使用 **Implements** 语句使一组声明可用于多个类。通过 **Implements** 语句共享声明，两个类都不需要自己进行任何声明。示例还展示了接口的使用如何支持抽象：可以使用接口类型声明强类型变量。然后可以为其分配实现该接口的不同类类型的对象。

接口声明在一个名为 `PersonalData` 的类中：

```vb
Public Name As String
Public Address As String
```

支持客户数据的代码在一个名为 `Customer` 的类模块中。注意 `PersonalData` 接口的实现使用了接口名 `PersonalData_` 作为前缀命名的成员。

```vb
Implements PersonalData

' For PersonalData implementation
Private m_name As String
Private m_address As String

' Customer-specific
Public CustomerAgentId As Long

' PersonalData implementation
Private Property Let PersonalData_Name(ByVal RHS As String)
    m_name = RHS
End Property

Private Property Get PersonalData_Name() As String
    PersonalData_Name = m_name
End Property

Private Property Let PersonalData_Address(ByVal RHS As String)
    m_address = RHS
End Property

Private Property Get PersonalData_Address() As String
    PersonalData_Address = m_address
End Property

Private Sub Class_Initialize()
    m_name = "[customer name]"
    m_address = "[customer address]"
    CustomerAgentId = 0
End Sub
```

第二个类 `Supplier` 独立实现相同的接口，拥有自己的状态和 `Class_Initialize`。需要名称/地址访问的代码可以将变量声明为接口类型并接受任一类：

```vb
Private m_pd As PersonalData

Public Property Set PD(Data As PersonalData)
    Set m_pd = Data
End Property
```

`m_pd` 只能访问 `PersonalData` 的成员。Customer特有或Supplier特有的成员通过它不可见——将对象赋值给按接口类型声明的变量提供了多态行为。

### 另请参阅

- [**Interface** 语句](/official/Reference/Core/Interface)
- [**CoClass** 语句](/official/Reference/Core/CoClass)
- [**Class** 语句](/official/Reference/Core/Class)
- [继承](/official/Features/Language/Inheritance)
- [接口与CoClass](/official/Features/Language/Interfaces-CoClasses)