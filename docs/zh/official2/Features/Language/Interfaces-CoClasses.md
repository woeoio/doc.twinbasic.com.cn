---
title: 接口和 Coclass
parent: 语言语法
nav_order: 2
permalink: /Features/Language/Interfaces-CoClasses
---

# 接口、Coclass 和别名
twinBASIC 支持将这些功能作为原生语言语法，而在 VBx 中它们仅通过类型库支持。

## 定义接口
twinBASIC 支持使用 BASIC 语法定义 COM 接口，而不需要带有 IDL 和 C++ 的类型库。这些仅在 .twin 文件中支持，不在传统的 .bas 或 .cls 文件中。它们必须出现在`Class`或`Module`语句*之前*，并且将始终具有项目范围作用域。一般的语法如下：

```
[InterfaceId ("00000000-0000-0000-0000-000000000000")]
*<属性>*
Interface <名称> Extends <基接口>
    *<属性>*
    <方法 1>
    *<属性>*
    <方法 2>
    ...
End Interface
```

方法可以是以下任何一种：`Sub`、`Function`、`Property Get`、`Property Let`或`Property Set`，参数遵循标准语法，并具有标准属性。这些不能用`Public/Private/Friend`修改。不使用`End <方法>`，因为这只是原型定义。

### 接口的可用属性

- `[Description("文本")]` - 在信息弹出窗口中提供描述，并作为类型库中的`helpstring`属性导出（如果适用）。
- `[Hidden]` - 从某些智能感知和其他列表中隐藏接口。
- `[Restricted]` - 限制在大多数上下文中调用接口方法。
- `[OleAutomation(True/False)]` - 控制是否在类型库中应用此属性。此属性默认设置为**True**。
- `[ComImport]` - 指定接口是来自外部 COM 库的导入，例如 Windows shell。
- `[ComExtensible(True/False)]` - 指定运行时添加的新成员是否可以通过实现 IDispatch 的接口按名称调用。此属性默认设置为**False**。

### 方法的可用属性

- `[Description("文本")]` - 提供描述
- `[PreserveSig]` - 对于 COM 接口，通常方法返回语言为您隐藏的 HRESULT。`[PreserveSig]`属性覆盖此行为，并按您提供的方式正确定义函数。如果您需要将其定义为返回 4 字节`Long`以外的内容，或想自己处理结果，绕过返回值为负时引发的常规运行时错误（当负值表示预期的可接受失败而不是真正错误时，这很有帮助，例如当枚举接口没有更多项目时）。
- `[DispId(数字)]` - 定义与方法关联的分派 ID。

### 示例

```
[InterfaceId("E7064791-0E4A-425B-8C8F-08802AAFEE61")]
[Description("定义 IFoo 接口")]
[OleAutomation(False)]
Interface IFoo Extends IUnknown
    Sub MySub(Arg1 As Long)
    Function Clone() As IFoo
    [PreserveSig]
    Function MyFunc([TypeHint(MyEnum)] Arg1 As Variant) As Boolean
End Interface
```
（其中 MyEnum 是标准的`Enum ... End Enum`块。）

## 定义 Coclass

除了接口，twinBASIC 还允许定义 coclass —— 实现一个或多个已定义接口的可创建类。与接口一样，这些也必须在 .twin 文件中，而不是传统的 .bas/.cls 文件，并且必须出现在`Class`或`Module`语句之前。一般形式为：

```
[CoClassId("00000000-0000-0000-0000-000000000000")]
*<属性>*
CoClass <名称>
    [Default] Interface <接口名称>
    *[Default, Source] Interface <事件接口名称>*
    *<附加接口项>*
End CoClass
```

每个 coclass 必须至少指定一个接口，但可以有多个。它可以可选地将接口标记为默认或源。通常强烈建议用`[Default]`属性标记接口，并且在有事件的情况下也指定`[Default, Source]`以指示用于事件的默认接口。每个都代表类将提供给定接口实现的契约。请注意，目前 twinBASIC 尚不支持定义`dispinterface`接口（又名，仅分派接口），这是事件源接口的通常形式。

### Coclass 的属性

- `[Description("文本")]` - 在信息弹出窗口和其他地方提供描述。
- `[ComCreatable(True/False)]` - 指示是否可以使用`New`关键字创建此 coclass。默认情况下为*True*。
- `[AppObject]` - 指示类是全局命名空间的一部分。在没有完全理解含义的情况下，不应包含此属性。
- `[Hidden]` - 在某些地方隐藏 coclass 的出现。
- `[CoClassCustomConstructor("工厂方法的完全限定路径")]` - 允许为创建和返回 coclass 实现的新实例提供自定义逻辑。

### 示例

```
[CoClassId("52112FA1-FBE4-11CA-B5DD-0020AFE7292D")]
CoClass Foo
   [Default] Interface IFoo
   Interface IBar
End CoClass
```
其中`IFoo`和`IBar`是使用前面描述的`Interface`语法定义的接口。

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

' 实现不需要暴露。coclass 是足够的描述
' 我们应该实现 coclass 暴露的接口。
Private Class FooImpl
    Implements IFoo
    Implements IBar

    Public Sub Foo() Implements IFoo.Foo
        Debug.Print "Foo 运行"
    End Sub

    Public Sub Bar() Implements IBar.Bar
        Debug.Print "Bar 运行"
    End Sub
End Class

Public Module FooFactory
    ' 签名必须"保留"，通过"out"参数返回 HRESULT
    ' 和新实例。
    ' 注意我们创建 FooImpl 但返回 Foo coclass。
    Public Function CreateFoo(ByRef RHS As Foo) As Long
        Set RHS = New FooImpl
        Return 0 ' S_OK
    End Function
End Module

Public Module Test
    Public Sub DoIt()
        Dim MyFoo As Foo
        ' 创建 coclass Foo 的新实例
        ' 这隐式调用 FooFactory 中的自定义构造函数。
        Set MyFoo = New Foo
        MyFoo.Foo
    End Sub
End Module
```