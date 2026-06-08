---
title: "twinBASIC新增功能"
parent: Reference Section
nav_order: 11
permalink: /Reference/twinBASIC-Additions
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2fe8b4da-40ce-42e4-bb62-3b050286411e'
  PropagateID: '2fe8b4da-40ce-42e4-bb62-3b050286411e'
  ReservedCode1: 'd0f27ae1-085c-4819-a0fd-24f9033bfd9c'
  ReservedCode2: 'd0f27ae1-085c-4819-a0fd-24f9033bfd9c'
---

# twinBASIC新增功能

twinBASIC通过新的数据类型、语言构造、运算符、运行时函数和项目级功能扩展了VBA语言。本页列出了有独立参考页的新增功能，按类别分组。

面向从VBA或VB6转来的开发者的更广泛概述，参见[欢迎页](/official/)。

---

## 新数据类型

| 类型 | 描述 | 备注 |
|------|-------------|-------|
| **LongLong** | 8字节有符号整数 | 在32位和64位构建中都可用；VBA限制为64位 |
| **LongPtr** | 指针宽度有符号整数 | 32位为4字节，64位为8字节；用于`Declare`语句 |
| **Decimal** | 128位定点小数类型 | 可作为独立声明类型使用，不仅是**Variant**子类型 |

参见[数据类型](/official/Reference/Data-Types)获取完整类型表，[功能 → 新数据类型](/official/Features/Language/Data-Types)了解这三种类型的更多详情。

---

## 新语言构造

### 面向对象

- [**Interface**](/official/Reference/Core/Interface) -- 使用twinBASIC语法定义COM接口；实现它的类必须提供所有成员
- [**CoClass**](/official/Reference/Core/CoClass) -- 声明COM co-class；在编译时生成COM注册元数据
- [**Inherits**](/official/Reference/Core/Implements) -- 使一个类继承另一个类的实现（仅支持单继承）
- [**Implements Via**](/official/Reference/Core/Implements) -- `Implements`的扩展形式，将接口调度委托给成员对象，而非需要逐成员转发代码
- [**Protected**](/official/Reference/Core/Protected) -- 声明类及其派生类可访问的类成员；VBA无等效功能

### 泛型

twinBASIC使用`Of`关键字支持泛型类型和泛型模块。泛型类或模块在实例化时接受一个或多个类型参数 --- 例如[WinEventLogLib](/official/Reference/WinEventLogLib/EventLog)包中的`EventLog(Of EventIds, Categories)`，或[WinServicesLib](/official/Reference/WinServicesLib/ServiceCreator)中的`ServiceCreator(Of T)`。

### 新声明关键字

- [**Delegate**](/official/Reference/Core/Delegate) -- 声明有类型函数指针类型；启用类型安全的`AddressOf`和CDecl回调
- **Enum**成员范围 -- 枚举成员现在可以通过名称引用其他成员，而不仅是字面整数

### 控制流

- [**Continue**](/official/Reference/Core/Continue) -- 跳到封闭循环的下一次迭代（`Continue For`、`Continue Do`、`Continue While`）；VBA无等效功能
- [**Return**](/official/Reference/Core/Return) -- 在一条语句中退出**Function**或**Property Get**并提供返回值；同时保留旧版**GoSub**/**Return**含义

### 属性

twinBASIC在声明和模块上使用方括号属性语法：

```vb
[Documentation("Returns the absolute value of n.")]
[COMCreatable(False)]
Public Function Abs(ByVal n As Double) As Double
```

完整列表参见[属性](/official/Reference/Attributes)，包括`[DllExport]`、`[DebugOnly]`、`[WindowsControl]`、`[MustBeQualified]`、`[PreserveSig]`等。

### 内联初始化

变量可以在声明时初始化：

```vb
Dim total As Long = 0
Dim greeting As String = "Hello"
Dim items() As String = Array("a", "b", "c")
```

参见[功能 → 内联初始化](/official/Features/Language/Inline-Initialization)。

### 参数化New

当类暴露具有匹配参数的`_Initialize`方法时，`New`接受构造函数参数：

```vb
Dim conn As New NamedPipeClientConnection("\\.\pipe\mypipe", token)
```

参见[功能 → New](/official/Features/GUI-Components/New)。

---

## 新运算符

| 运算符 | 描述 |
|----------|-------------|
| [**AndAlso**](/official/Reference/Core/AndAlso) | 短路逻辑AND --- 左操作数为`False`时不求值右操作数 |
| [**OrElse**](/official/Reference/Core/OrElse) | 短路逻辑OR --- 左操作数为`True`时不求值右操作数 |
| [**IsNot**](/official/Reference/Core/IsNot) | `Is`的逻辑反；`a IsNot b`等同于`Not (a Is b)` |
| [**LeftShift**](/official/Reference/Core/LeftShift) | 按位左移；`x LeftShift n`将x左移n位 |
| [**RightShift**](/official/Reference/Core/RightShift) | 按位右移；`x RightShift n`将x右移n位 |

---

## 新运行时函数

这些函数存在于VBA包中，但标准VBA中没有等效功能 --- 它们是twinBASIC新增的：

| 函数 | 模块 | 描述 |
|----------|--------|-------------|
| [**CType**](/official/Reference/VBA/Conversion/CType) | Conversion | 显式转换为调用方提供的类型；语法`CType(expr, TypeName)` |
| [**If**](/official/Reference/VBA/Interaction/If) | Interaction | 三元 --- 求值为两个值之一；仅求值所选分支 |
| [**CallByDispId**](/official/Reference/VBA/Interaction/CallByDispId) | Interaction | 通过IDispatch调度ID调用方法或属性 |
| [**RaiseEventByName**](/official/Reference/VBA/Interaction/RaiseEventByName) | Interaction | 按名称引发事件，以**Variant**数组传递参数 |
| [**RaiseEventByName2**](/official/Reference/VBA/Interaction/RaiseEventByName2) | Interaction | 按名称引发事件，使用可变长度参数列表 |
| [**ObjPtr**](/official/Reference/VBA/Information/ObjPtr) | Information | 返回对象的COM标识地址 |
| [**VarPtr**](/official/Reference/VBA/Information/VarPtr) | Information | 返回变量的地址 |
| [**StrPtr**](/official/Reference/VBA/Information/StrPtr) | Information | 返回**String**底层字符缓冲区的地址 |
| [**IsArrayInitialized**](/official/Reference/VBA/Information/IsArrayInitialized) | Information | 返回动态数组是否已分配维度 |
| [**TranslateColor**](/official/Reference/VBA/Information/TranslateColor) | Information | 将OLE颜色转换为纯RGB值 |

额外的低级内存、线程和内省函数记录在[HiddenModule](/official/Reference/VBA/HiddenModule/)节中。

---

## 项目和运行时功能

### 64位编译

twinBASIC可以编译为32位或64位本机代码。目标按项目设置。参见[功能 → 64位编译](/official/Features/64bit)并使用`#If Win64 Then` / `#If Win32 Then`条件编译架构特定代码。

### 静态链接(Fusion)

twinBASIC可以将其运行时静态链接到输出EXE中，生成无需单独运行时DLL的单文件可分发程序。参见[功能 → Fusion](/official/Features/Fusion)。

### 多线程

twinBASIC通过`Thread` API支持后台线程。参见[功能 → 多线程](/official/Features/Advanced/Multithreading)。

### 内联汇编

[**Emit**](/official/Reference/VBA/HiddenModule/Emit) / [**EmitAny**](/official/Reference/VBA/HiddenModule/EmitAny)函数向封闭过程生成的代码中注入原始字节序列。`[Naked]`属性抑制生成的序言和结语。参见[功能 → 汇编](/official/Features/Advanced/Assembly)。

### 增强的API声明

除了标准`Declare`，twinBASIC新增了：

- `DeclareWide` --- 禁用字符串参数的ANSI/Unicode转换
- `CDecl`调用约定，在声明和常规函数上
- `ByVal` UDT传递
- 可变参数（`CDecl` + `ParamArray ... As Any()`）参数列表

参见[功能 → 增强API声明](/official/Features/Advanced/API-Declarations)。

---

## IDE新增功能

- **CodeLens** --- 过程上方的内联操作栏（"运行"、"调试"、"测试"），无需离开编辑器。参见[功能 → CodeLens](/official/Features/Compiler-IDE/CodeLens)。
- **包服务器** (TWINSERV) --- 无需离开IDE即可从中央注册表安装包。参见[功能 → 导入包](/official/Features/Packages/Importing-a-package-from-TWINSERV)。
- **类型推断** --- `Dim x = 1`推断为**Long**；`For Each item In collection`在集合有类型时推断元素类型。参见[功能 → 类型推断](/official/Features/Language/Type-Inference)。
- **条件编译常量**（`#Const`、`#If`）--- VBA集合的超集；参见[编译器常量](/official/Reference/Compiler-Constants)。

---

### 另见

- [数据类型](/official/Reference/Data-Types) -- 所有内置类型的存储大小和取值范围
- [功能](/official/Features/) -- 每个twinBASIC功能的深入介绍
- [分类索引](/official/Reference/Categories) -- 按用途分组的语句和过程