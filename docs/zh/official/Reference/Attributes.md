---
title: "属性"
parent: Reference Section
nav_order: 6
permalink: /tB/Core/Attributes
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c9ccc6b0-4d9f-4781-b8c1-d3eda9513afb'
  PropagateID: 'c9ccc6b0-4d9f-4781-b8c1-d3eda9513afb'
  ReservedCode1: 'b9c92ae6-6a42-4f25-bc76-59ee51a81783'
  ReservedCode2: 'b9c92ae6-6a42-4f25-bc76-59ee51a81783'
---

# 属性

属性有两个主要功能：

- 它们可以作为给编译器的指令来影响代码生成方式，或
- 用于标注窗体、模块、类、类型、枚举、Declares和[过程](/official/Reference/Glossary#procedure)，即Sub/Function/Properties。

以前在VBx中，这些属性（如过程描述、隐藏、默认成员等）是通过IDE编辑器不显示的隐藏文本设置的，通过"过程属性"对话框或其他地方配置。在tB中，这些都在代码编辑器中可见。VBx的旧属性出于兼容性而受支持，但新属性使用以下语法：
`[Attribute]`或`[Attribute(value)]`

在接受可选布尔参数的属性中，如果未提供值，则参数值取为**True**。这不意味着属性的默认值为True，只是如果属性在方括号内指定但没有值，其值将被设为True。不同的布尔值属性有不同的默认值。这些默认值在用户未显式提供属性时适用。

多个属性可以在同一方括号内指定，用逗号分隔：
`[Attribute1, Attribute2(param), Attribute3]`

---

可用属性按字母顺序列出如下。并非每个属性都适用于每个语言元素。每个属性的适用范围在其语法下方给出。
---

## AppObject  (可选 Bool)

语法：**[AppObject** [ **( True** \| **False )** ] **]**

适用于：[**CoClass**](/official/Reference/Core/CoClass)

旧版VB属性：*VB_GlobalNameSpace*

指示该类属于全局命名空间。在未完全理解其含义的情况下，不应包含此属性。**Global**类是一个AppObject。

更多细节参见[此VBA文档页](https://learn.microsoft.com/en-us/openspecs/microsoft_general_purpose_programming_languages/ms-vbal/189fb41b-cc3a-4999-a6d2-ba89f72d2870)。

## ArrayBoundsChecks  (可选 Bool)

语法：**[ArrayBoundsChecks** [ **( True** \| **False )** ] **]**

适用于：[**Class**](/official/Reference/Core/Class)、[**Module**](/official/Reference/Core/Module)、[过程](/official/Reference/Glossary#procedure)

在类、模块或单个过程/方法的范围内禁用或启用数组元素访问边界检查。用于性能关键的例程。

## BindOnlyIfNoArguments  (可选 Bool)

语法：**[BindOnlyIfNoArguments** [ **( True** \| **False )** ] **]**

适用于：[过程](/official/Reference/Glossary#procedure)

仅在不存在参数时将此名称绑定到调用点。通常为False，但下面有一个例外。

此属性解决编译器对某些过程名称的特殊处理与不应被特殊处理的同名过程之间的冲突。目前这影响名为`Left`的过程。此类过程会被编译器隐式分配`[BindOnlyIfNoArguments(True)]`。如果用户希望拥有此名称的过程，应包含`[BindOnlyIfNoArguments(False)]`。

## BindOnlyIfStringSuffix  (可选 Bool)

语法：**[BindOnlyIfStringSuffix** [ **( True** \| **False )** ] **]**

适用于：[过程](/official/Reference/Glossary#procedure)

## ClassId  (String)

语法：**[ClassId("** 00000000-0000-0000-0000-000000000000 **")]**

适用于：[**Class**](/official/Reference/Core/Class)

为类分配COM CLSID。详情参见[此COM文档页](https://learn.microsoft.com/en-us/windows/win32/com/com-class-objects-and-clsids)。

## ClassInterface

twinBASIC不直接支持此属性。它以不同名称支持其值。参见：

* [DualInterface](#dualinterface)
* [DispInterface](#dispinterface)


## CoClassCustomConstructor  (String)

语法：**[CoClassCustomConstructor("** 工厂方法的完全限定路径 **")]**

适用于：[**CoClass**](/official/Reference/Core/CoClass)

允许自定义逻辑来创建并返回coclass实现的新实例。

示例：

```vb
[CoClassId("7980D953-10BF-478C-93BB-DD0093315D96")]
[CoClassCustomConstructor("FooFactory.CreateFoo")]
[COMCreatable(True)]
Public CoClass Foo
   ' ...
End CoClass
```

关于tB中coclasses的概述，参见[定义coclasses](/official/Features/Language/Interfaces-CoClasses#defining-coclasses)。

## CoClassId  (String)

语法：**[CoClassId("** 00000000-0000-0000-0000-000000000000 **")]**

适用于：[**CoClass**](/official/Reference/Core/CoClass)

除了接口，twinBASIC还允许定义coclasses --- 实现一个或多个已定义接口的可创建类。与接口一样，这些也必须在.twin文件中而非旧版.bas/.cls文件中，且必须出现在`Class`或`Module`语句之前。通用形式如下：

```vb
[CoClassId("00000000-0000-0000-0000-000000000000")]
*<attributes>*
CoClass <name>
    [Default] Interface <interface name>
    *[Default, Source] Interface <event interface name>*
    *<additional Interface items>*
End CoClass
```

方法是[过程](/official/Reference/Glossary#procedure)。

关于tB中coclasses的概述，参见[定义coclasses](/official/Features/Language/Interfaces-CoClasses#defining-coclasses)。

## COMControl  (可选 Bool)

语法：**[COMControl** [ **( True** \| **False )** ] **]**

适用于：[**Interface**](/official/Reference/Core/Interface)

## COMCreatable  (可选 Bool)

语法：**[COMCreatable** [ **( True** \| **False )** ] **]**

适用于：[**Class**](/official/Reference/Core/Class)、[**CoClass**](/official/Reference/Core/CoClass)

指示此coclass可以使用[**New**](/official/Reference/Core/New)关键字创建。

## COMExtensible  (可选 Bool)

语法：**[COMExtensible** [ **( True** \| **False )** ] **]**

适用于：[**Interface**](/official/Reference/Core/Interface)、[接口中的过程](/official/Reference/Glossary#procedure)

指定运行时添加的新成员是否可以通过实现**IDispatch**的接口按名称调用。此属性默认为**False**。

## ComImport  (可选 Bool)

语法：**[ComImport** [ **( True** \| **False )** ] **]**

适用于：[**Interface**](/official/Reference/Core/Interface)

指定接口是从外部COM库导入的，例如Windows Shell。

## CompileIf  (Bool)

语法：**[CompileIf(** 条件 **)]**

适用于：[过程定义](/official/Reference/Glossary#procedure)

控制过程定义的条件编译。没有默认值。

## CompilerOptions  (String)

语法：**[CompilerOptions( "** 选项 **" )]**

适用于：[过程定义](/official/Reference/Glossary#procedure)

典型用法是`[CompilerOptions("+llvm,+optimize,+optimizesize")]`以使用内置LLVM而非默认编译器编译过程，并选择优化。可用编译器选项：

- **+llvm** - 使用LLVM编译此过程。此功能目前为实验性，不能用于编译带有"复杂"参数/变量类型（如对象、字符串和动态数组）的函数。LLVM编译器后端内置于twinBASIC。无需单独安装LLVM，twinBASIC会忽略任何此类安装。
- **+optimize** - 在编译此过程时启用优化
- **+optimizesize** - 优化此过程以获得更小的代码大小，可能以过程速度变慢为代价
- **+optimizespeed** - 优化此过程以获得更快的速度，可能以编译后更大的代码体积为代价

## ConstantFoldable  (可选 Bool)

语法：**[ConstantFoldable** [ **( True** \| **False )** ] **]**

适用于：[**Function**](/official/Reference/Core/Function)

为使用非变量输入调用时将在编译时而非运行时计算的函数指定此属性。例如，将字符串字面量转换为ANSI的函数。结果永远不会改变，因此存储生成的ANSI字符串，而非每次运行重新计算。此类函数也称为*纯函数*，因为其输出仅取决于参数，而不取决于程序状态。

## ConstantFoldableNumericsOnly  (可选 Bool)

语法：**[ConstantFoldableNumericsOnly** [ **( True** \| **False )** ] **]**

适用于：[**Function**](/official/Reference/Core/Function)

[常量折叠属性](#constantfoldable)的有限情况，仅在函数使用数值参数调用时适用。

## CustomControl  (String)

语法：**[Description("** 图片文件名 **")]**

适用于：[**Class**](/official/Reference/Core/Class)

## Debuggable  (可选 Bool)

语法：**[Debuggable** [ **( True** \| **False )** ] **]**

适用于：[**Module**](/official/Reference/Core/Module)、[**Class**或**Module**中的过程](/official/Reference/Glossary#procedure)

为False时，关闭方法或模块的断点和单步执行。默认值为**True**。

## DebugOnly  (可选 Bool)

语法：**[DebugOnly** [ **( True** \| **False )** ] **]**

适用于：[过程定义](/official/Reference/Glossary#procedure)

将对此过程的调用从Build中排除。它们仅在从IDE运行（即调试）时可用。

## DefaultMember (可选 Bool)


语法：**[DefaultMember** [ **(** **True** \| **False** **)** ] **]**

适用于：[**Class**中的过程](/official/Reference/Glossary#procedure)

默认成员在对象实例本身下访问，无需指定其名称。例如，提供可索引元素的类可能有一个**Item**属性作为默认成员：

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
    Debug.Print "Item #3: ", coll(3)   ' Property Get Item is invoked
    coll(4) = "Item 4"                 ' Property Let Item is invoked
End Sub
```

## Description  (String) 

语法：**[Description("** 任意文本 **")]**

适用于：[**Class**](/official/Reference/Core/Class)、[**CoClass**](/official/Reference/Core/CoClass)、[**Const**](/official/Reference/Core/Const)、[**Declare** (API声明)](/official/Reference/Core/Declare)、[**Interface**](/official/Reference/Core/Interface)、[**Module**](/official/Reference/Core/Module)、[**Type** (UDT)](/official/Reference/Core/Type)

在IDE信息弹出窗口中提供描述，并作为`helpstring`属性导出到类型库（如适用）。

## DispId  (Integer)

语法：**[DispId(** 123 **)]**

适用于：[接口中的过程](/official/Reference/Glossary#procedure)

定义通过**IDispatch**公开时与过程关联的调度ID。

## DispInterface

语法：**[DispInterface]**

适用于：**Library**中的[**Interface**](/official/Reference/Core/Interface)

::: info
此属性在twinBASIC为项目中的COM引用生成的**Library**模块中生成。它不能手动创建。
:::

指示接口通过**IDispatch**后期绑定公开方法。这是默认值。注意也可以指定[**DualInterface**](#dualinterface)，与基于**IDispatch**的接口相比性能大幅提升。

## DllExport  (可选 Bool)

语法：**[DllExport** [ **( True** \| **False )** ] **]**

适用于：模块中的[过程](/official/Reference/Glossary#procedure)和变量。

可以从标准模块导出函数或变量。示例：

```vb
[DllExport]
Public Const MyExportedSymbol As Long = &H00000001
```

## DLLStackCheck  (可选 Bool)

语法：**[DLLStackCheck** [ **( True** \| **False)** ] **]**

适用于：[**Declare** (API声明)](/official/Reference/Core/Declare)

在Intel平台上的32位API调用中略微减少代码生成大小。对其他平台无影响。

## DualInterface

语法：**[DualInterface]**

适用于：**Library**中的[**Interface**](/official/Reference/Core/Interface)

::: info

此属性在twinBASIC为项目中的COM引用生成的**Library**模块中生成。它不能手动创建。
:::

指示接口通过OLE VTable绑定公开方法。后者与基于**IDispatch**的接口相比性能大幅提升。

## EnforceErrors  (可选 Bool)

语法：**[EnforceErrors** [ **( True** \| **False )** ] **]**

适用于：[过程](/official/Reference/Glossary#procedure)。

## EnforceWarnings  (可选 Bool)

语法：**[EnforceWarnings** [ **( True** \| **False )** ] **]**

适用于：[过程](/official/Reference/Glossary#procedure)。

## EnumId  (String)

语法：**[EnumId("** 00000000-0000-0000-0000-000000000000 **")]**

适用于：[**Enum**](/official/Reference/Core/Enum)

指定要与类型库中的枚举关联的GUID。

## EventInterfaceId  (String)

语法：**[EventInterfaceId("** 00000000-0000-0000-0000-000000000000 **")]**

## EventsUseDispInterface  (可选 Bool)

语法：**[EventsUseDispInterface** [ **( True** \| **False )** ] **]**

## Flags  (可选 Bool)

语法：**[Flags** [ **( True** \| **False )** ] **]**

适用于：[**Enum**](/official/Reference/Core/Enum)

将隐式枚举值作为标志集（2的幂）计算。

::: info
为避免混淆，一旦使用显式值，其后所有剩余值也必须为显式值）
:::

![image](Images/flags-attribute.png)

## FloatingPointErrorChecks  (可选 Bool)

语法：**[FloatingPointErrorChecks** [ **( True** \| **False)** ] **]**

适用于：[**Class**](/official/Reference/Core/Class)、[**Module**](/official/Reference/Core/Module)、[过程](/official/Reference/Glossary#procedure)

禁用浮点错误检查。用于性能关键的例程。默认值为**True**。

## FormDesignerId  (String)

语法：**[FormDesignerId("** 00000000-0000-0000-0000-000000000000 **")]**

适用于：[**Class**](/official/Reference/Core/Class)

## Hidden  (可选 Bool)

语法：**[Hidden** [ **(** **True** \| **False** **)** ] **]**

适用于：[**Class**](/official/Reference/Core/Class)、[**CoClass**](/official/Reference/Core/CoClass)、[**Interface**](/official/Reference/Core/Interface)

将接口或类从某些IntelliSense和其他列表中隐藏。

## IdeButton  (String)

语法：**[IdeButton("** 标题 **")]**

适用于：模块中的[过程](/official/Reference/Glossary#procedure)定义。

## IgnoreWarnings  (String List)

语法：**[IgnoreWarnings** **(** **TBnnnn** [ **,** **TBmmmm** ]... **)** **]**

禁用某些警告。字符串列表应枚举要抑制的警告。

## IntegerOverflowChecks  (可选 Bool)

语法：**[IntegerOverflowChecks** [ **( True** \| **False )** ] **]**

适用于：[**Class**](/official/Reference/Core/Class)、[**Module**](/official/Reference/Core/Module)、[过程](/official/Reference/Glossary#procedure)

禁用整数溢出检查。用于性能关键的例程。默认值为**True**。

## InterfaceId  (String)

语法：**[InterfaceId( "**00000000-0000-0000-0000-000000000000**" )]**

适用于：[**Interface**](/official/Reference/Core/Interface)

twinBASIC支持使用BASIC语法定义COM接口，而不需要带有IDL和C++的类型库。这些仅在.twin文件中受支持，不支持旧版.bas或.cls文件。它们必须出现在[**Class**](/official/Reference/Core/Class)或[**Module**](/official/Reference/Core/Module)语句*之前*，并始终具有项目范围的可见性。通用形式如下：

```vb
[InterfaceId ("00000000-0000-0000-0000-000000000000")]
*<attributes>*
Interface <name> Extends <base-interface>
    *<attributes>*
	<method 1>
	*<attributes>*
	<method 2>
	' ...
End Interface
```

方法是[过程](/official/Reference/Glossary#procedure)。

关于tB中接口的概述，参见[定义接口](/official/Features/Language/Interfaces-CoClasses#defining-interfaces)。

## MustBeQualified  (可选 Bool)

语法：**[MustBeQualified** [ **(True** \| **False )** ] **]**

适用于：[过程](/official/Reference/Glossary#procedure)

## OleAutomation  (可选 Bool)

语法：**[OleAutomation** [ **(True** \| **False )** ] **]**

适用于：[**Interface**](/official/Reference/Core/Interface)

控制此属性是否在类型库中应用。此属性默认为**True**。

## PackingAlignment  (Integer)

语法：**[PackingAlignment( 1** \| **2** \| **4** \| **8** \| **16** \| **32** \| **64 )]**

适用于：[**Type** (UDT)](/official/Reference/Core/Type)

twinBASIC通常在UDT内自然对齐对象，例如8字节对象相对于UDT起始处在8字节边界对齐。这可能在UDT字段之间留下间隙。使用较小的**PackingAlignment**可以实现更紧凑的打包：

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

你现在会发现`Len(t)`和`LenB(t)`都是8。

::: info
对齐方式（而非打包对齐）不是以此方式设置的。指定16不会让`t`得到16字节结构。twinBASIC目前没有`__declspec_align(n)`的等效功能，但计划添加此功能。这在内核模式编程之外很少见。
:::

关于此功能的介绍，参见[自定义UDT打包](/official/Features/Language/UDTs#custom-udt-packing)。

## PopulateFrom  (...)

语法：**[PopulateFrom( "json", "**.json的内部路径**", "** 表字段 **", "** 名称字段 **", "** 值字段 **" )]**

适用于：[**Enum**](/official/Reference/Core/Enum)

从项目附带的json文件中用值填充**Enum**。

.json文件的路径和字段名是任意的。因此，json文件不必在项目内的Resources文件夹中。

将来，此属性可能会扩展以允许更多数据文件类型和除**Enum**之外的更多使用上下文。

例如，考虑.twin文件中的以下枚举声明：

```vb
[PopulateFrom("json", "/Resources/MESSAGETABLE/Strings.json", "events", "name", "id")]
Enum EVENTS
End Enum
```

那么，应有`/Resources/MESSAGETABLE/Strings.json`文件，结构如下：

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

结果等同于我们手写以下**Enum**定义：

```vb
Enum EVENTS
    service_started = -1073610751
End Enum
```

## PredeclaredID  (可选 Bool)

语法：**[PredeclaredId** [ **( True** \| **False )** ] **]**

适用于：[**Class**](/official/Reference/Core/Class)

设置后，应用程序启动时会创建该类的全局实例。

此属性等同于VBx .cls文件中的`VB_PredeclaredId`属性。

## PreserveSig  (可选 Bool)

语法：**[PreserveSig** [ **(** **True** \| **False** **)** ] **]**

适用于：[接口](/official/Reference/Core/Interface)中的方法、[API声明](/official/Reference/Core/Declare)。

默认值：接口中为**False**，API Declare中为**True**。

在COM接口中，此属性的默认值为**False**，因为通常方法返回HRESULT，语言对你隐藏了它。**[PreserveSig** [ **(True)** ] **]**覆盖此行为，按照你提供的方式定义函数。如果你需要将其定义为返回4字节**Long**以外的类型，或者希望自己处理结果（绕过返回值为负数时引发的正常运行时错误），这是必要的（当负值表示预期的、可接受的失败而非真正的错误时有帮助，例如当枚举接口没有更多项时）。

在API中，此属性的默认值为`True`。因此，你可以指定`False`将最后一个参数重写为返回值。示例：

```vb
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" (ppshf As IShellFolder) As Long
```

可以重写为

```vb
[PreserveSig(False)] 
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" () As IShellFolder`
```

## Restricted  (可选 Bool)

语法：**[Restricted** [ **( True** \| **False )** ] **]**

适用于：[**Interface**](/official/Reference/Core/Interface)

限制接口方法在大多数上下文中被调用。

此属性与[**restricted** MIDL属性][MIDL restricted]功能相同。

[MIDL restricted]: https://learn.microsoft.com/en-us/windows/win32/midl/restricted

## RunAfterBuild  (可选 Bool)

语法：**[RunAfterBuild** [ **( True** \| **False )** ] **]**

适用于：[**Function**](/official/Reference/Core/Function)、[**Sub**](/official/Reference/Core/Sub)

指定在exe构建完成后运行的函数。如果例如要对可执行文件签名，可使用`App.LastBuildPath`了解其位置。

## Serialize  (可选 Bool)

语法：**[Serialize** [ **( True** \| **False )** ] **]**

适用于：[**Class**](/official/Reference/Core/Class)中的变量

## SetDllDirectory  (可选 Bool)

语法：**[SetDllDirectory** [ **( True** \| **False )** ] **]**

适用于：[**Declare** (API声明)](/official/Reference/Core/Declare)、[**Module**](/official/Reference/Core/Module)

允许显式加载的DLL从其加载路径加载自己的依赖项。还具有允许在基本应用的declare语句中搜索DLL的应用路径的效果。可以按声明或在模块内使用。

## SimplerByVals  (可选 Bool)

语法：**[SimplerByVals** [ **( True** \| **False )** ] **]**

适用于：[过程](/official/Reference/Glossary#procedure)

## SpecialCompilerBinding  (可选 Bool)

语法：**[SpecialCompilerBinding** [ **( True** \| **False )** ] **]**

## TestCase  (可选 Bool)

语法：**[TestCase** [ **( True** \| **False )** ] **]**

适用于：模块中的[过程](/official/Reference/Glossary#procedure)定义。

## TestFixture  (可选 Bool)

语法：**[TestFixture **[ **( True** \| **False )** ] **]**

适用于：[**Module**](/official/Reference/Core/Module)

## TypeHint  (EnumType)

语法：**[TypeHint(** 枚举类型 **)]**

适用于：[过程](/official/Reference/Glossary#procedure)参数

允许为**Long**以外的类型填充IntelliSense枚举。

## Unimplemented  (可选 Bool)

语法：**[Unimplemented** [ **( True** \| **False )** ] **]**

适用于：[过程](/official/Reference/Glossary#procedure)定义

使编译器在调用此过程时发出关于过程未实现的警告。你还可以将其升级为错误。

## UseGetLastError  (可选 Bool)

语法：**[UseGetLastError** [ **( True** \| **False )** ] **]**

适用于：[**Declare** (API声明)](/official/Reference/Core/Declare)

如果声明的函数指示错误条件，编译器不会自动调用`GetLastError`检索错误代码。此属性的默认值为**True**，即假定Declare的函数在出错时设置`LastError`。

## UserDefinedTypeIsAnAlias  (可选 Bool)

语法：**[UserDefinedTypeIsAnAlias** [ **( True** \| **False )** ] **]**

适用于：[**Type** (UDT)](/official/Reference/Core/Type)

## WindowsControl  (可选 Bool)

语法：**[WindowsControl** [ **( True** \| **False )** ] **]**