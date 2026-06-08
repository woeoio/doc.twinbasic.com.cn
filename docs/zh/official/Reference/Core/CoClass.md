---
title: CoClass
parent: Statements
permalink: /tB/Core/CoClass
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '13a456c4-6e4e-4b89-8e09-d6c3b4a844b0'
  PropagateID: '13a456c4-6e4e-4b89-8e09-d6c3b4a844b0'
  ReservedCode1: 'cf44d530-8cc7-4a53-b281-88d78cebdf18'
  ReservedCode2: 'cf44d530-8cc7-4a53-b281-88d78cebdf18'
---

# CoClass

将可创建的COM类定义为契约：一个公共名称和标识，配合一个或多个类将公开的 [**Interface**](/official/Reference/Core/Interface) 块。实际实现位于使用 [**Implements**](/official/Reference/Core/Implements) 的单独 [**Class**](/official/Reference/Core/Class)（通常为 `Private`）中。

::: info
**CoClass** 块是twinBASIC扩展。在经典VBA中，coclass只能通过引用的类型库（IDL/C++）间接定义。
:::

语法：
> [ *attributes* ]  
> [ **Public** \| **Private** ] **CoClass** *name*  
> &nbsp;&nbsp;&nbsp;&nbsp; [ *member-attributes* ] **Interface** *interfacename*  
> &nbsp;&nbsp;&nbsp;&nbsp; ...  
> **End CoClass**

*attributes*
: *可选* Coclass级别的属性。参见下文[可用属性](#available-attributes)。

*name*
: 命名coclass的标识符。

*interfacename*
: 项目中定义的（或从引用的类型库导入的）coclass公开的 [**Interface**](/official/Reference/Core/Interface)。coclass必须列出至少一个接口，可以列出多个。

*member-attributes*
: *可选* 每个接口的标记，主要包括：

  - `[Default]`——将接口标记为coclass的默认接口。惯例上强烈建议恰好标记一个接口为 `[Default]`。
  - `[Source]`——将接口标记为源接口（出/事件接口）。与 `[Default]` 组合使用（`[Default, Source]`）以标记默认事件接口。

**CoClass** 块仅在 `.twin` 源文件中有效（不支持传统 `.bas` 或 `.cls` 文件），且必须出现在文件中 [**Class**](/official/Reference/Core/Class) 或 [**Module**](/official/Reference/Core/Module) 语句*之前*。

### 可用属性

- `[CoClassId("...")]`——固定coclass的CLSID（字符串GUID）。在任何公共/导出的coclass上设置此项，以便其他项目的使用者绑定到稳定的标识。
- `[Description("text")]`——在类型库中作为 `helpstring` 公开。
- `[ComCreatable(True/False)]`——指示coclass是否可以用 **New** 创建。默认为 `True`。
- `[AppObject]`——将类标记为全局命名空间的一部分。仅在完全理解其影响时使用。
- `[Hidden]`——从IntelliSense和类似列表中隐藏coclass。
- `[CoClassCustomConstructor("ModuleName.FunctionName")]`——指定工厂函数（返回 `HRESULT` 并通过out参数产生新实例），用于替代默认的 `New` 行为。工厂可以构造任何实现了coclass接口的私有类。

### 示例

一个简单的coclass公开两个接口，`IFoo` 标记为默认接口：

```vb
[CoClassId("52112FA1-FBE4-11CA-B5DD-0020AFE7292D")]
CoClass Foo
    [Default] Interface IFoo
    Interface IBar
End CoClass
```

一个更完整的示例，展示自定义构造函数coclass与私有实现类的搭配。coclass `Foo` 是使用者看到并实例化的内容；实际实现 `FooImpl` 是隐藏的：

```vb
[InterfaceId("016BC30A-A8E0-4AAF-93AE-13BD838A149E")]
Public Interface IFoo
    Sub Foo()
End Interface

[InterfaceId("2A20E655-30A4-4534-86BC-6A7E281C425D")]
Public Interface IBar
    Sub Bar()
End Interface

[CoClassId("7980D953-10BF-478C-93BB-DD0093315D96")]
[CoClassCustomConstructor("FooFactory.CreateFoo")]
[ComCreatable(True)]
Public CoClass Foo
    [Default] Interface IFoo
    Interface IBar
End CoClass

' The implementation does not have to be exposed.
Private Class FooImpl
    Implements IFoo
    Implements IBar

    Public Sub Foo() Implements IFoo.Foo
        Debug.Print "Foo ran"
    End Sub

    Public Sub Bar() Implements IBar.Bar
        Debug.Print "Bar ran"
    End Sub
End Class

Public Module FooFactory
    ' The signature must be "preserved", returning an HRESULT
    ' and the new instance via the "out" parameter.
    Public Function CreateFoo(ByRef RHS As Foo) As Long
        Set RHS = New FooImpl
        Return 0 ' S_OK
    End Function
End Module

Public Module Test
    Public Sub DoIt()
        Dim MyFoo As Foo
        Set MyFoo = New Foo  ' Implicitly calls FooFactory.CreateFoo.
        MyFoo.Foo
    End Sub
End Module
```

### 另请参阅

- [**Interface** 语句](/official/Reference/Core/Interface)
- [**Implements** 语句](/official/Reference/Core/Implements)
- [**Class** 语句](/official/Reference/Core/Class)
- [接口与CoClass](/official/Features/Language/Interfaces-CoClasses)