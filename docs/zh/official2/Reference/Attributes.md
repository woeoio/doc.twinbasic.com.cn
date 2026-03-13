---
title: 属性
parent: 参考部分
permalink: /zh/tB/Core/Attributes
---

# 属性
{: .no_toc }

属性有两个主要功能：

- 它们可以作为编译器的指令来影响代码生成方式，或
- 用于标注窗体、模块、类、类型、枚举、声明和[过程](../Gloss#procedure)，即子程序/函数/属性。

之前在VBx中，这些属性（如过程描述、隐藏、默认成员等）是通过IDE编辑器不显示的隐藏文本设置的，通过过程属性对话框或其他地方配置。在tB中，这些都可以在代码编辑器中看到。为了兼容性，支持VBx的遗留属性，但新属性使用以下语法：
`[属性]` 或 `[属性(值)]`

在带有可选布尔参数的属性中，如果没有提供值，则参数值被视为**True**。这并不意味着属性的默认值为True，只是如果在花括号内指定属性时没有值，其值将设置为True。不同的布尔值属性具有不同的默认值。除非用户明确提供属性，否则这些值适用。

多个属性可以在相同的方括号中指定，用逗号分隔：
`[属性1, 属性2(参数), 属性3]`

---

可用属性按字母顺序列在下面。并非每个属性都适用于每个语言元素。每个属性的适用性在其语法下方给出。
* 目录
{:toc}
---

## AppObject  (可选 Bool)
{: #appobject }

语法：**[AppObject** [ **( True** \| **False )** ] **]**

适用于：[**CoClass**](CoClass)

遗留VB属性：*VB_GlobalNameSpace*

指示类属于全局命名空间。您不应该在没有完全理解含义的情况下包含此属性。**Global**类是一个AppObject。

有关更多详细信息，请参见[此VBA文档页面](https://learn.microsoft.com/en-us/openspecs/microsoft_general_purpose_programming_languages/ms-vbal/189fb41b-cc3a-4999-a6d2-ba89f72d2870)。

## ArrayBoundsChecks  (可选 Bool)
{: #arrayboundschecks }

语法：**[ArrayBoundsChecks** [ **( True** \| **False )** ] **]**

适用于：[**Class**](Class), [**Module**](Module), [过程](../Gloss#procedure)

在类、模块或单个过程/方法的范围内禁用或启用数组元素访问边界检查。用于性能关键例程。

## BindOnlyIfNoArguments  (可选 Bool)
{: #bindonlyifnoarguments }

语法：**[BindOnlyIfNoArguments** [ **( True** \| **False )** ] **]**

适用于：[过程](../Gloss#procedure)

仅在不存在参数时才将此名称绑定到调用站点。通常false，但请参见下面的例外。

此属性解决了编译器对某些过程名称的特殊处理与同名但不应特殊处理的过程冲突的情况。这目前影响名为`Left`的过程。这些过程由编译器分配隐式的`[BindOnlyIfNoArguments(True)]`。如果用户想要具有此名称的过程，应包含`[BindOnlyIfNoArguments(False)]`。

## BindOnlyIfStringSuffix  (可选 Bool)
{: #bindonlyifstringsuffix }

语法：**[BindOnlyIfStringSuffix** [ **( True** \| **False )** ] **]**

适用于：[过程](../Gloss#procedure)

## ClassId  (String)
{: #classid }

语法：**[ClassId("** 00000000-0000-0000-0000-000000000000 **")]**

适用于：[**Class**](Class)

为类分配COM CLSID。有关详细信息，[请参见此COM文档页面](https://learn.microsoft.com/en-us/windows/win32/com/com-class-objects-and-clsids)。

## ClassInterface

twinBASIC不直接支持此属性。它使用不同的名称支持其值。参见：

* [DualInterface](#dualinterface)
* [DispInterface](#dispinterface)


## CoClassCustomConstructor  (String)
{: #coclasscustomconstructor }

语法：**[CoClassCustomConstructor("** 工厂方法的完全限定路径 **")]**

适用于：[**CoClass**](CoClass)

允许为创建和返回coclass实现的新实例提供自定义逻辑。

示例：

```vb
[CoClassId("7980D953-10BF-478C-93BB-DD0093315D96")]
[CoClassCustomConstructor("FooFactory.CreateFoo")]
[COMCreatable(True)]
Public CoClass Foo
   ' ...
End CoClass
```

有关tB中coclass的概述，请参见[定义coclass](../../Features/Language/Interfaces-CoClasses#defining-coclasses)。

## CoClassId  (String)
{: #coclassid }

语法：**[CoClassId("** 00000000-0000-0000-0000-000000000000 **")]**

适用于：[**CoClass**](CoClass)

除了接口外，twinBASIC还允许定义coclass——实现一个或多个定义接口的可创建类。像接口一样，这些也必须位于.twin文件中，而不是遗留的.bas/.cls文件，并且必须出现在`Class`或`Module`语句之前。通用形式为：

```vb
[CoClassId("00000000-0000-0000-0000-000000000000")]
*<属性>*
CoClass <名称>
    [Default] Interface <接口名称>
    *[Default, Source] Interface <事件接口名称>*
    *<额外的接口项>*
End CoClass
```

方法是[过程](../Gloss#procedure)。

有关tB中coclass的概述，请参见[定义coclass](../../Features/Language/Interfaces-CoClasses#defining-coclasses)。

## COMControl  (可选 Bool)
{: #comcontrol }

语法：**[COMControl** [ **( True** \| **False )** ] **]**

适用于：[**Interface**](Interface)

## COMCreatable  (可选 Bool)
{: #comcreatable }

语法：**[COMCreatable** [ **( True** \| **False )** ] **]**

适用于：[**Class**](Class), [**CoClass**](CoClass)

指示可以使用[**New**](New)关键字创建此coclass。

## COMExtensible  (可选 Bool)
{: #comextensible }

语法：**[COMExtensible** [ **( True** \| **False )** ] **]**

适用于：[**Interface**](Interface), [接口中的过程](../Gloss#procedure)

指定在运行时添加的新成员是否可以通过实现**IDispatch**的接口按名称调用。此属性默认设置为**False**。

## ComImport  (可选 Bool)
{: #comimport }

语法：**[ComImport** [ **( True** \| **False )** ] **]**

适用于：[**Interface**](Interface)

指定接口是来自外部COM库的导入，例如Windows shell。

## CompileIf  (Bool)
{: #compileif }

语法：**[CompileIf(** 条件 **)]**

适用于：[过程定义](../Gloss#procedure)

控制过程定义的条件编译。没有默认值。

## CompilerOptions  (String)
{: #compileroptions }

语法：**[CompilerOptions( "** 选项 **" )]**

适用于：[过程定义](../Gloss#procedure)

典型用法是`[CompilerOptions("+llvm,+optimize,+optimizesize")]`⁠来使用内置LLVM而不是默认编译器编译过程，并选择优化。可用的编译器选项：

- **+llvm** - 使用LLVM编译此过程。此功能目前处于实验阶段，不能用于编译具有"复杂"参数/变量类型（如对象、字符串和动态数组）的函数。LLVM编译器后端内置于twinBASIC中。无需单独安装LLVM，任何此类安装都会被twinBASIC忽略。
- **+optimize** - 在编译此过程时启用优化
- **+optimizesize** - 针对小代码大小优化此过程，可能会以过程速度变慢为代价
- **+optimizespeed** - 针对快速度优化此过程，可能会以增加编译后代码大小为代价

## ConstantFoldable  (可选 Bool)
{: #constantfoldable }

语法：**[ConstantFoldable** [ **( True** \| **False )** ] **]**

适用于：[**Function**](Function)

为此类函数指定此属性，当使用非变量输入调用时，将在编译时而不是运行时计算。例如，将字符串字面量转换为ANSI的函数。结果永远不会改变，因此存储生成的ANSI字符串，而不是每次运行时重新计算。此类函数也称为*纯函数*，因为它们的输出仅取决于参数，而不取决于程序的状态。

## ConstantFoldableNumericsOnly  (可选 Bool)
{: #constantfoldablenumericsonly }

语法：**[ConstantFoldableNumericsOnly** [ **( True** \| **False )** ] **]**

适用于：[**Function**](Function)

[constant foldable属性](#constantfoldable)的有限情况，仅当函数使用数值参数调用时适用。

## CustomControl  (String)
{: #customcontrol }

语法：**[Description("** 图像文件名 **")]**

适用于：[**Class**](Class)

## Debuggable  (可选 Bool)
{: #debuggable }

语法：**[Debuggable** [ **( True** \| **False )** ] **]**

适用于：[**Module**](Module), [**Class**或**Module**中的过程](../Gloss#procedure)

当为false时，关闭方法或模块的断点和单步执行。默认值为**True**。

## DebugOnly  (可选 Bool)
{: #debugonly }

语法：**[DebugOnly** [ **( True** \| **False )** ] **]**

适用于：[过程定义](../Gloss#procedure)

从构建中排除对此过程的调用。它们仅在从IDE运行时可用，即调试时。

## DefaultMember (可选 Bool)

{: #defaultmember }

语法：**[DefaultMember** [ **(** **True** \| **False** **)** ] **]**

适用于：[**Class**中的过程](../Gloss#procedure)

默认成员在对象实例本身下访问，无需指定其名称。例如，提供可索引元素的类可能具有作为默认成员的**Item**属性：

```vb
Class MyCollection
    [DefaultMember]
    Property Get Item(ByVal index&) As String
        ' ...
    End Property

    [DefaultMember]
    Property Let Item(ByVal index&, ByVal value$)
        ' ...
    End Property
End Class

Sub Example()
    Dim coll As New MyCollection
    Debug.Print "Item #3: ", coll(3)   ' 调用Property Get Item
    coll(4) = "Item 4"                 ' 调用Property Let Item
End Sub
```

## Description  (String)
{: #description }

语法：**[Description("** 任意文本 **")]**

适用于：[**Class**](Class), [**CoClass**](CoClass), [**Const**](Const), [**Declare** (API声明)](Declare), [**Interface**](Interface), [**Module**](Module), [**Type** (UDT)](Type)

在IDE中的信息弹出窗口中提供描述，并作为类型库中的`helpstring`属性导出（如果适用）。

## DispId  (Integer)
{: #dispid }

语法：**[DispId(** 123 **)]**

适用于：[接口中的过程](../Gloss#procedure)

定义通过**IDispatch**公开的过程关联的调度ID。

## DispInterface

语法：**[DispInterface]**

适用于：**Library**中的[**Interface**](Interface)

> [!NOTE]
> 此属性在twinBASIC为项目中的COM引用生成的**Library**模块中生成。无法手动创建。

指示接口通过**IDispatch**后期绑定公开方法。这是默认值。请注意，也可以指定[**DualInterface**](#dualinterface)，相比基于**IDispatch**的接口，性能有显著提升。

## DllExport  (可选 Bool)
{: #dllexport }

语法：**[DllExport** [ **( True** \| **False )** ] **]**

适用于：模块中的[过程](../Gloss#procedure)和变量。

可以从标准模块导出函数或变量。示例：

```vb
[DllExport]
Public Const MyExportedSymbol As Long = &H00000001
```

## DLLStackCheck  (可选 Bool)
{: #dllstackcheck }

语法：**[DLLStackCheck** [ **( True** \| **False)** ] **]**

适用于：[**Declare** (API声明)](Declare)

在Intel平台上对32位API调用提供较小的代码生成大小减少。在其他平台上没有效果。

## DualInterface

语法：**[DualInterface]**

适用于：**Library**中的[**Interface**](Interface)

> [!NOTE]
>
> 此属性在twinBASIC为项目中的COM引用生成的**Library**模块中生成。无法手动创建。

指示接口通过OLE VTable绑定公开方法。后者相比基于**IDispatch**的接口有显著提升的性能。

## EnforceErrors  (可选 Bool)
{: #enforceerrors }

语法：**[EnforceErrors** [ **( True** \| **False )** ] **]**

适用于：[过程](../Gloss#procedure)。

## EnforceWarnings  (可选 Bool)
{: #enforcewarnings }

语法：**[EnforceWarnings** [ **( True** \| **False )** ] **]**

适用于：[过程](../Gloss#procedure)。

## EnumId  (String)
{: #enumid }

语法：**[EnumId("** 00000000-0000-0000-0000-000000000000 **")]**

适用于：[**Enum**](Enum)

指定要与类型库中的枚举关联的GUID。

## EventInterfaceId  (String)
{: #eventinterfaceid }

语法：**[EventInterfaceId("** 00000000-0000-0000-0000-000000000000 **")]**

## EventsUseDispInterface  (可选 Bool)
{: #eventsusedispinterface }

语法：**[EventsUseDispInterface** [ **( True** \| **False )** ] **]**

## Flags  (可选 Bool)
{: #flags }

语法：**[Flags** [ **( True** \| **False )** ] **]**

适用于：[**Enum**](Enum)

将隐式枚举值计算为标志集（2的幂）。

> [!NOTE]
> 为避免混淆，一旦使用显式值，其后的所有值也必须显式)

![image](Images/flags attribute.png)

## FloatingPointErrorChecks  (可选 Bool)
{: #floatingpointerrorchecks }

语法：**[FloatingPointErrorChecks** [ **( True** \| **False)** ] **]**

适用于：[**Class**](Class), [**Module**](Module), [过程](../Gloss#procedure)

禁用浮点错误检查。用于性能关键例程。默认值为**True**。

## FormDesignerId  (String)
{: #formdesignerid }

语法：**[FormDesignerId("** 00000000-0000-0000-0000-000000000000 **")]**

适用于：[**Class**](Class)

## Hidden  (可选 Bool)
{: #hidden }

语法：**[Hidden** [ **(** **True** \| **False** **)** ] **]**

适用于：[**Class**](Class), [**CoClass**](CoClass), [**Interface**](Interface)

从某些Intellisense和其他列表中隐藏接口或类。

## IdeButton  (String)
{: #idebutton }

语法：**[IdeButton("** 标题 **")]**

适用于：模块中的[过程](../Gloss#procedure)定义。

## IgnoreWarnings  (String List)
{: #ignorewarnings }

语法：**[IgnoreWarnings** **(** **TBnnnn** [ **,** **TBmmmm** ]... **)** **]**

禁用某些警告。字符串列表应枚举要抑制的警告。

## IntegerOverflowChecks  (可选 Bool)
{: #integeroverflowchecks }

语法：**[IntegerOverflowChecks** [ **( True** \| **False )** ] **]**

适用于：[**Class**](Class), [**Module**](Module), [过程](../Gloss#procedure)

禁用整数溢出检查。用于性能关键例程。默认值为**True**。

## InterfaceId  (String)
{: #interfaceid }

语法：**[InterfaceId( "**00000000-0000-0000-0000-000000000000**" )]**

适用于：[**Interface**](Interface)

twinBASIC支持使用BASIC语法定义COM接口，而无需使用IDL和C++的类型库。这些仅在.twin文件中支持，不支持在遗留.bas或.cls文件中。它们必须出现在[**Class**](Class)或[**Module**](Module)语句*之前*，并且将始终具有项目范围的作用域。通用形式如下：

``` vb
[InterfaceId ("00000000-0000-0000-0000-000000000000")]
*<属性>*
Interface <名称> Extends <基接口>
    *<属性>*
	<方法 1>
	*<属性>*
	<方法 2>
	' ...
End Interface
```

方法是[过程](../Gloss#procedure)。

有关tB中接口的概述，请参见[定义接口](../../Features/Language/Interfaces-CoClasses.html#defining-interfaces)。

## MustBeQualified  (可选 Bool)
{: #mustbequalified }

语法：**[MustBeQualified** [ **(True** \| **False )** ] **]**

适用于：[过程](../Gloss#procedure)

## OleAutomation  (可选 Bool)
{: #oleautomation }

语法：**[OleAutomation** [ **(True** \| **False )** ] **]**

适用于：[**Interface**](Interface)

控制是否在类型库中应用此属性。此属性默认设置为**True**。

## PackingAlignment  (Integer)
{: #packingalignment }

语法：**[PackingAlignment( 1** \| **2** \| **4** \| **8** \| **16** \| **32** \| **64 )]**

适用于：[**Type** (UDT)](Type)

twinBASIC通常在UDT内自然对齐对象，例如8字节对象相对于UDT开始处在8字节边界对齐。这会在UDT字段之间留下间隙。可以使用较小的**PackingAlignment**实现更紧密的打包：

```vb
[PackingAlignment(2)]
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
Private t As MyUDT
Debug.Assert Len(t) = 8 And LenB(t) = 8
```

现在您会发现`Len(t)`和`LenB(t)`都是8。

> [!NOTE]
> 对齐（而非打包对齐）不是这样设置的。指定16不会为`t`获得16字节结构。twinBASIC目前没有`__declspec_align(n)`的等效项，但计划提供此类功能。这在内核模式编程之外很少见。

有关此功能的介绍，请参见[自定义UDT打包](../../Features/Language/UDTs#custom-udt-packing)。

## PopulateFrom  (...)
{: #populatefrom }

语法：**[PopulateFrom( "json", "**内部.json路径**", "** 表字段 **", "** 名称字段 **", "** 值字段 **" )]**

适用于：[**Enum**](Enum)

使用与项目捆绑的json文件中的值填充**Enum**。

.json文件的路径和字段名称是任意的。因此，json文件不必位于项目的资源文件夹中。

将来，此属性可能会扩展以允许更多数据文件类型，以及除**Enum**之外的使用上下文。

例如，考虑.twin文件中的此枚举声明：

``` vb
[PopulateFrom("json", "/Resources/MESSAGETABLE/Strings.json", "events", "name", "id")]
Enum EVENTS
End Enum
```

然后，应该有`/Resources/MESSAGETABLE/Strings.json`文件，其结构如下：

``` json
{
    "events":
    [
        {
            "id": -1073610751,
            "name": "service_started",
            "LCID_0000": "%1 service started"
        },
    ],
}
```

结果就像我们手动键入了以下**Enum**定义：

``` vb
Enum EVENTS
    service_started = -1073610751
End Enum
```

## PredeclaredID  (可选 Bool)
{: #predeclaredid }

语法：**[PredeclaredId** [ **( True** \| **False )** ] **]**

适用于：[**Class**](Class)

设置时，在应用程序启动时创建类的全局实例。

此属性等效于VBx .cls文件中的`VB_PredeclaredId`属性。

## PreserveSig  (可选 Bool)
{: #preservesig }

语法：**[PreserveSig** [ **(** **True** \| **False** **)** ] **]**

适用于：[Interface](Interface)中的方法, [API声明](Declare)。

默认值：Interface中为**False**，API声明中为**True**。

在COM接口中，此属性的默认值为**False**，因为通常方法返回语言为您隐藏的HRESULT。**[PreserveSig** [ **(True)** ] **]**覆盖此行为，并按您提供的确切方式定义函数。如果您需要将其定义为返回4字节**Long**以外的内容，或想自己处理结果，绕过返回值为负时引发的常规运行时错误（当负值指示预期的可接受失败而非真正错误时，这很有帮助，例如当枚举接口没有项目时）。

在API中，此属性的默认值为`True`。因此，您可以指定`False`以便将最后一个参数重写为返回值。示例：

``` vb
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" (ppshf As IShellFolder) As Long
```

可以重写为

```vb
[PreserveSig(False)]
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" () As IShellFolder`
```

## Restricted  (可选 Bool)
{: #restricted }

语法：**[Restricted** [ **( True** \| **False )** ] **]**

适用于：[**Interface**](Interface)

限制在大多数上下文中调用接口方法。

此属性与[**restricted** MIDL属性][MIDL restricted]具有相同的功能。

[MIDL restricted]: https://learn.microsoft.com/en-us/windows/win32/midl/restricted

## RunAfterBuild  (可选 Bool)
{: #runafterbuild }

语法：**[RunAfterBuild** [ **( True** \| **False )** ] **]**

适用于：[**Function**](Function), [**Sub**](Sub)

指定在构建exe后运行的函数。有`App.LastBuildPath`来知道它的位置，例如如果您要对可执行文件进行签名。

## Serialize  (可选 Bool)
{: #serialize }

语法：**[Serialize** [ **( True** \| **False )** ] **]**

适用于：[**Class**](Class)中的变量

## SetDllDirectory  (可选 Bool)
{: #setdlldirectory }

语法：**[SetDllDirectory** [ **( True** \| **False )** ] **]**

适用于：[**Declare** (API声明)](Declare), [**Module**](Module)

允许显式加载的DLL从其加载路径加载自己的依赖项。还具有允许在基础应用程序的声明语句中搜索应用程序路径中的DLL的效果。可以按声明或在模块内使用。

## SimplerByVals  (可选 Bool)
{: #simplerbyvals }

语法：**[SimplerByVals** [ **( True** \| **False )** ] **]**

适用于：[过程](../Gloss#procedure)

## SpecialCompilerBinding  (可选 Bool)
{: #specialcompilerbinding }

语法：**[SpecialCompilerBinding** [ **( True** \| **False )** ] **]**

## TestCase  (可选 Bool)
{: #testcase }

语法：**[TestCase** [ **( True** \| **False )** ] **]**

适用于：模块中的[过程](../Gloss#procedure)定义。

## TestFixture  (可选 Bool)
{: #testfixture }

语法：**[TestFixture **[ **( True** \| **False )** ] **]**

适用于：[**Module**](Module)

## TypeHint  (EnumType)
{: #typehint }

语法：**[TypeHint(** 枚举类型 **)]**

适用于：[过程](../Gloss#procedure)参数

允许为**Long**以外的类型填充带有枚举的Intellisense。

## Unimplemented  (可选 Bool)
{: #unimplemented }

语法：**[Unimplemented** [ **( True** \| **False )** ] **]**

适用于：[过程定义](../Gloss#procedure)

使编译器在调用过程时发出关于过程未实现的警告。您也可以将其升级为错误。

## UseGetLastError  (可选 Bool)
{: #usegetlasterror }

语法：**[UseGetLastError** [ **( True** \| **False )** ] **]**

适用于：[**Declare** (API声明)](Declare)

如果声明的函数指示错误条件，编译器不会自动调用`GetLastError`来检索错误代码。此属性的默认值为**True**，即声明的函数在出错时假定会设置`LastError`。

## UserDefinedTypeIsAnAlias  (可选 Bool)
{: #userdefinedtypeisanalias }

语法：**[UserDefinedTypeIsAnAlias** [ **( True** \| **False )** ] **]**

适用于：[**Type** (UDT)](Type)

## WindowsControl  (可选 Bool)
{: #windowscontrol }

语法：**[WindowsControl** [ **( True** \| **False )** ] **]**