---
title: "类功能"
parent: Advanced Features
nav_order: 5
permalink: /Features/Advanced/Classes-and-Modules
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6ccc1bba-fe7a-4448-929a-ab065f7f1508'
  PropagateID: '6ccc1bba-fe7a-4448-929a-ab065f7f1508'
  ReservedCode1: 'ad479915-d211-45f7-bd27-2c689b158c9a'
  ReservedCode2: 'ad479915-d211-45f7-bd27-2c689b158c9a'
---

# 类和模块增强

twinBASIC 为类和模块提供了多项增强。

## 参数化类构造函数

类现在支持带有参数的 `New` Sub，在类构造时在 `Class_Initialize` 事件之前调用。

### 示例

例如，一个类可以这样定义：

```vb
[ComCreatable(False)]
Class MyClass
Private MyClassVar As Long
Sub New(Value As Long)
MyClassVar = Value
End Sub
End Class
```

然后通过 `Dim mc As MyClass = New MyClass(123)` 创建，这会在创建时设置 `MyClassVar`。注意：使用此功能的类必须是私有的，具有 `[ComCreatable(False)]` 特性，或同时包含 `Class_Initialize()`。在编译的 OCX 的调用者中，`Class_Initialize()` 将替代 `New`。在项目内部，如果存在 `New` 则只会使用 `New`。

## 模块和类的 Private/Public 修饰符

私有模块或类的成员不会在 ActiveX 项目中进入类型库。

## ReadOnly 变量

在类中，模块级变量可以声明为 `ReadOnly`，例如 `Private ReadOnly mStartDate As Date`。这允许更复杂的常量赋值：你可以使用函数返回值来内联设置它，`Private ReadOnly mStartDate As Date = Now()`，或者在 `Class_Initialize` 或 `Sub New(...)` 中设置 `ReadOnly` 常量（参见上面的参数化类构造函数），但在其他所有地方，它们只能读取，不能修改。

## 导出的函数和变量

可以从标准模块中导出函数或变量，包括使用 CDecl。

### 示例

```vb
[DllExport]
Public Const MyExportedSymbol As Long = &H00000001

[DllExport]
Public Function MyExportedFunction(ByVal arg As Long) As Long

[DllExport]
Public Function MyCDeclExport CDecl(ByVal arg As Long)
```

这主要用于创建标准 DLL（参见[项目类型](/official/Features/Project-Configuration/Project-Types)），但此功能在标准 EXE 和其他编译项目类型中也可用。

## 创建不带 IDispatch 的类

默认情况下，编译器在所有 VBx/twinBASIC 类中创建 `IDispatch` 的默认实现。这允许后期绑定和其他功能。但有时你可能想要一个只实现 `IUnknown` 的更受限的类。这在 twinBASIC 中通过 `NotDispatchable` 关键字实现，用法如下：

```vb
NotDispatchable Class MyClass
'...
End Class
```

使用上述声明后，`MyClass` 将不会实现 `IDispatch`。这意味着它将不适用于后期绑定——即你不能将它用于声明为 `As Object` 的变量。如果你尝试将 `Object`（或 `IDispatch`）变量 `Set` 到此类，将引发 `E_NOINTERFACE` 错误。