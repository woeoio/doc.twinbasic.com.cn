---
title: Interface
parent: Statements
permalink: /tB/Core/Interface
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a943da30-1075-4262-8bdf-8259b8094d2a'
  PropagateID: 'a943da30-1075-4262-8bdf-8259b8094d2a'
  ReservedCode1: '1f65fe1e-9d16-4ae2-867b-5224138cc617'
  ReservedCode2: '1f65fe1e-9d16-4ae2-867b-5224138cc617'
---

# Interface

使用twinBASIC语法定义COM接口。接口是契约：一组命名的无实现的方法和属性原型。类通过使用 [**Implements**](/official/Reference/Core/Implements) 语句提供接口的实现。

::: info
**Interface** 块是twinBASIC扩展。在经典VBA中没有interface关键字——接口只能通过引用的类型库（IDL/C++）间接定义，或使用无实现的类。
:::

语法：
> [ *attributes* ]  
> [ **Public** \| **Private** ] **Interface** *name* [ **Extends** *baseinterface* [ **,** *baseinterface* ] ... ]  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *attributes* ]  
> &nbsp;&nbsp;&nbsp;&nbsp; *member-prototype*  
> &nbsp;&nbsp;&nbsp;&nbsp; ...  
> **End Interface**

*attributes*
: *可选* 接口和成员级别的属性。参见下文[可用属性](#available-attributes)。

*name*
: 命名接口的标识符。按照惯例，接口名以大写 `I` 开头（`IFoo`、`ICalculator`、...）。

*baseinterface*
: *可选* *name* 扩展的一个或多个接口。实现类需要为继承的方法也提供函数体；在twinBASIC中，类可以 `Implements` *name* 并依赖继承的接口自动满足。

*member-prototype*
: 仅头部的声明。可以是 [**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function)、[**Property Get**](/official/Reference/Core/Property)、[**Property Let**](/official/Reference/Core/Property) 或 [**Property Set**](/official/Reference/Core/Property) 签名，包含参数和返回类型。成员上不允许使用 **Public**/**Private**/**Friend** 修饰符。没有 `End Sub` / `End Function` / `End Property`——原型在行尾结束。

**Interface** 块仅在 `.twin` 源文件中有效（不支持传统 `.bas` 或 `.cls` 文件），且必须出现在文件中 [**Class**](/official/Reference/Core/Class) 或 [**Module**](/official/Reference/Core/Module) 语句*之前*。接口始终具有项目范围的作用域。

### 可用属性

接口级别属性：

- `[InterfaceId("...")]`——固定接口的IID（字符串GUID）。在任何公共/导出的接口上设置此项，以便其他项目的使用者绑定到稳定的标识。
- `[Description("text")]`——在类型库中作为 `helpstring` 公开。
- `[Hidden]`——从IntelliSense和类似列表中隐藏接口。
- `[Restricted]`——限制接口方法在大多数上下文中被调用。
- `[OleAutomation(True/False)]`——控制属性是否在类型库中应用。默认为 `True`。
- `[ComImport]`——将接口声明为从外部COM库（如Windows shell）导入。
- `[ComExtensible(True/False)]`——控制是否可以通过 `IDispatch` 调用动态添加的成员。默认为 `False`。

成员级别属性：

- `[Description("text")]`
- `[PreserveSig]`——保留原始COM签名（返回 `HRESULT`），而不让运行时将负值结果转换为错误。当需要字面返回值，或负值表示*可接受的失败*（如枚举器用尽项目）时使用此属性。
- `[DispId(number)]`——固定与成员关联的调度ID。

### 示例

```vb
[InterfaceId("E7064791-0E4A-425B-8C8F-08802AAFEE61")]
[Description("Defines the IFoo interface")]
[OleAutomation(False)]
Interface IFoo Extends IUnknown
    Sub MySub(Arg1 As Long)
    Function Clone() As IFoo
    [PreserveSig]
    Function MyFunc([TypeHint(MyEnum)] Arg1 As Variant) As Boolean
End Interface
```

实现 `IFoo` 的类为每个成员提供函数体：

```vb
Class FooImpl
    Implements IFoo

    Private Sub IFoo_MySub(Arg1 As Long) Implements IFoo.MySub
        Debug.Print "MySub called with"; Arg1
    End Sub

    Private Function IFoo_Clone() As IFoo Implements IFoo.Clone
        Set IFoo_Clone = New FooImpl
    End Function

    Private Function IFoo_MyFunc(Arg1 As Variant) As Boolean Implements IFoo.MyFunc
        IFoo_MyFunc = True
    End Function
End Class
```

### 另请参阅

- [**Implements** 语句](/official/Reference/Core/Implements)
- [**CoClass** 语句](/official/Reference/Core/CoClass)
- [**Class** 语句](/official/Reference/Core/Class)
- [接口与CoClass](/official/Features/Language/Interfaces-CoClasses)
- [继承](/official/Features/Language/Inheritance)