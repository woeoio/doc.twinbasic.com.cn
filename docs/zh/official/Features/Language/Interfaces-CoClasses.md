---
title: "接口和 CoClass"
parent: Language Syntax
nav_order: 2
permalink: /Features/Language/Interfaces-CoClasses
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f2ef02e8-0ceb-438f-b77e-ea7374e98c06'
  PropagateID: 'f2ef02e8-0ceb-438f-b77e-ea7374e98c06'
  ReservedCode1: 'b1a82323-e3c0-40d6-a282-3e5cb78b2f4a'
  ReservedCode2: 'b1a82323-e3c0-40d6-a282-3e5cb78b2f4a'
---

# 接口、CoClass 和别名

twinBASIC 将这些功能作为原生语言语法支持，而在 VBx 中它们只能通过类型库支持。

## 定义接口

twinBASIC 支持使用 BASIC 语法定义 COM 接口，而不需要使用 IDL 和 C++ 的类型库。这些只在 .twin 文件中支持，不支持在遗留的 .bas 或 .cls 文件中。它们必须出现在 `Class` 或 `Module` 语句*之前*，并且始终具有项目范围的可见性。通用形式如下：

```vb
[InterfaceId ("00000000-0000-0000-0000-000000000000")]
'*<attributes>*
Interface name Extends base_interface
    '*<attributes>*
    '<method 1>
    '*<attributes>*
    '<method 2>
    '...
End Interface
```

方法可以是以下任意一种：`Sub`、`Function`、`Property Get`、`Property Let` 或 `Property Set`，参数遵循标准语法，可使用标准特性。这些不能用 `Public/Private/Friend` 修饰。不使用 `End <method>`，因为这些只是原型定义。

### 接口的可用特性

- `[Description("text")]` - 在信息弹窗中提供描述，并作为 `helpstring` 属性导出到类型库（如适用）。
- `[Hidden]` - 从某些 Intellisense 和其他列表中隐藏接口。
- `[Restricted]` - 限制接口方法在大多数上下文中被调用。
- `[OleAutomation(True/False)]` - 控制是否在类型库中应用此属性。默认为 **True**。
- `[ComImport]` - 指定接口是从外部 COM 库导入的，例如 Windows shell。
- `[ComExtensible(True/False)]` - 指定运行时添加的新成员是否可以通过实现 IDispatch 的接口按名称调用。默认为 **False**。

### 方法的可用特性

- `[Description("text")]` - 提供描述
- `[PreserveSig]` - 对于 COM 接口，通常方法返回 HRESULT，语言会隐藏它。`[PreserveSig]` 属性覆盖此行为并完全按你提供的方式定义函数。如果你需要定义返回值不是 4 字节 `Long`，或者想自己处理结果（绕过返回值为负时引发的正常运行时错误），这是必要的（当负值表示预期的可接受失败而非真正的错误时很有用，如枚举接口没有更多项时）。
- `[DispId(number)]` - 定义与方法关联的调度 ID。

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
（其中 MyEnum 是标准的 `Enum ... End Enum` 块。）

## 定义 CoClass

除了接口外，twinBASIC 还允许定义 coclass——实现一个或多个已定义接口的可创建类。与接口一样，这些也必须在 .twin 文件中而非遗留的 .bas/.cls 文件中，且必须出现在 `Class` 或 `Module` 语句之前。通用形式为：

```vb
[CoClassId("00000000-0000-0000-0000-000000000000")]
'<attributes>
CoClass name
    [Default] Interface interface_name
    [Default, Source] Interface event_interface_name
    'additional Interface items>
End CoClass
```

每个 coclass 必须至少指定一个接口，但可以有多个。可以可选地将接口标记为默认或源。通常强烈建议将接口标记为 `[Default]` 属性，在有事件的情况下还应指定 `[Default, Source]` 以指示用于事件的默认接口。每个接口代表一个契约，类将提供该接口的实现。注意，目前 twinBASIC 尚不支持定义 `dispinterface` 接口（即仅调度的接口），这是事件源接口的常见形式。

### CoClass 的特性

- `[Description("text")]` - 在信息弹窗和其他地方提供描述。
- `[ComCreatable(True/False)]` - 指示此 coclass 可以使用 `New` 关键字创建。默认为 *True*。
- `[AppObject]` - 指示类是全局命名空间的一部分。不应在不完全理解其含义的情况下包含此属性。
- `[Hidden]` - 隐藏 coclass 使其不出现在某些地方。
- `[CoClassCustomConstructor("factory method 的完全限定路径")]` - 允许自定义逻辑来创建和返回 coclass 实现的新实例。

### 示例

```vb
[CoClassId("52112FA1-FBE4-11CA-B5DD-0020AFE7292D")]
CoClass Foo
   [Default] Interface IFoo
   Interface IBar
End CoClass
```
其中 `IFoo` 和 `IBar` 是使用前面描述的 `Interface` 语法定义的接口。

## 自定义构造函数示例

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
[COMCreatable(True)]
Public CoClass Foo
    [Default] Interface IFoo
    Interface IBar
End CoClass

' The implementation do not have to be exposed. The coclass is a sufficient description
' and we should implement the interfaces that the coclass exposes.
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
    ' The signature must be "preserved", returning a HRESULT
    ' and the new instance via the "out" parameter.
    ' Note that we new up the FooImpl but return the Foo coclass.
    Public Function CreateFoo(ByRef RHS As Foo) As Long
        Set RHS = New FooImpl
        Return 0 ' S_OK
    End Function
End Module

Public Module Test
    Public Sub DoIt()
        Dim MyFoo As Foo
        ' create a new instance of coclass Foo
        ' this implicilty calls the custom constructor
        ' in the FooFactory.
        Set MyFoo = New Foo
        MyFoo.Foo
    End Sub
End Module
```