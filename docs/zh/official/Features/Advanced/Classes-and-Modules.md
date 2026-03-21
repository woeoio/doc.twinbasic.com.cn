---
title: 类功能
parent: 高级功能
nav_order: 5
permalink: /Features/Advanced/Classes-and-Modules
---

# 类和模块增强功能
twinBASIC 为类和模块提供了多项增强功能。

## 参数化类构造函数

类现在支持带有添加参数能力的 `New` 子程序，在类构造期间在 `Class_Initialize` 事件之前调用。

### 示例

例如，一个类可以有：

```
[ComCreatable(False)]
Class MyClass
Private MyClassVar As Long
Sub New(Value As Long)
MyClassVar = Value
End Sub
End Class
```

然后通过 `Dim mc As MyClass = New MyClass(123)` 创建，在创建时设置 `MyClassVar`。注意：使用此功能的类必须是私有的，具有 `[ComCreatable(False)]` 属性，或者也包含 `Class_Initialize()`。`Class_Initialize()` 将在编译 OCX 的调用者中替换 `New`。在项目内，如果存在，只会使用 `New`。

## 模块和类的私有/公共修饰符

私有模块或类不会将其成员输入到 ActiveX 项目的类型库中。

## 只读变量

在类中，模块级变量可以声明为 `ReadOnly`，例如 `Private ReadOnly mStartDate As Date`。这允许更复杂的常量赋值：您可以使用函数返回值来内联设置它，`Private ReadOnly mStartDate As Date = Now()`，或者 `ReadOnly` 常量可以在 `Class_Initialize` 或 `Sub New(...)` 中设置（参见上面的参数化类构造函数），但在其他地方，它们只能读取，不能更改。

## 导出的函数和变量

可以从标准模块导出函数或变量，包括使用 CDecl。

### 示例

```
[DllExport]
Public Const MyExportedSymbol As Long = &H00000001

[DllExport]
Public Function MyExportedFunction(ByVal arg As Long) As Long

[DllExport]
Public Function MyCDeclExport CDecl(ByVal arg As Long)
```

这主要用于创建标准 DLL（参见[项目类型](../Project-Configuration/Project-Types.md)），但此功能在标准 EXE 和其他编译项目类型中也可用。