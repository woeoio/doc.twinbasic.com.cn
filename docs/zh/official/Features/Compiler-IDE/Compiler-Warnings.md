---
title: "编译器警告"
parent: Compiler and IDE Features
nav_order: 1
permalink: /Features/Compiler-IDE/Compiler-Warnings
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1b685d56-5d51-4314-a005-5774c9af3ba4'
  PropagateID: '1b685d56-5d51-4314-a005-5774c9af3ba4'
  ReservedCode1: 'ce0bc808-fd9d-4525-8285-04a60ea10dcc'
  ReservedCode2: 'ce0bc808-fd9d-4525-8285-04a60ea10dcc'
---

# 编译器警告

twinBASIC 在设计时提供编译器警告，用于提示常见的不良实践或可能的疏忽。

## 可用警告

### 可能不正确的十六进制字面量警告

非显式值首先被强制转换为最低可能的类型。因此，如果你将常量声明为 `&H8000`，编译器会将其视为 -32,768 `Integer`，而当你将其放入 `Long` 时，你几乎可以肯定不想要 -32,768，你想要的是**正** 32,768，这需要你改用 `&H8000&`。

此警告适用于 `&H8000`-`&HFFFF` 和 `&H80000000`-`&HFFFFFFFF`。

### 使用 ReDim 隐式创建变量警告

当你使用 `ReDim myArray(1)` 时，`myArray` 变量会自动为你创建，而最佳实践是先声明所有变量。

### 使用 DefType 的警告

不鼓励使用此功能，因为它使代码难以阅读，且容易导致难以调试的错误。

完整列表可以在项目的设置页面中找到：

![image](../Images/017bd6f8-4b35-43a9-b6be-84cba69daf64.png)

## 调整警告

每个警告都可以设置为忽略或转换为错误，既可以通过设置页面的项目级设置，也可以通过每个模块/类、每个过程使用 `[IgnoreWarnings(TB___)]`、`[EnforceWarnings(TB____)]` 和 `[EnforceErrors(TB____)]` 特性来设置，其中下划线替换为**完整**数字，例如 `[IgnoreWarnings(TB0001)]`；前导零必须包含。

## 严格模式

twinBASIC 添加了以下警告消息以支持类似于 .NET 的严格模式，即不允许某些隐式转换，必须显式进行。默认情况下，这些都设置为忽略，必须在项目设置的"编译器警告"部分启用，或通过每个模块/过程使用 `[EnforceWarnings()]` 启用。所有这些都可以单独配置，并使用 `[IgnoreWarnings()]` 在过程/模块范围内忽略。

### TB0018: 隐式窄化转换

例如将 Long 转换为 Integer；如果你有 `Dim i As Integer, l As Long`，那么 `i = l` 将触发警告，而需要使用 `i = CInt(l)` 来避免。

### TB0019: 隐式枚举转换

当将一个枚举的成员赋值给另一个枚举类型的变量时，例如 `Dim day As VbDayOfWeek: day = vbBlack`。前面章节中描述了用于指针的 `CType(Of <type>)` 运算符也可用于指定显式类型转换；`day = CType(Of VbDayOfWeek)(vbBlack)` 不会触发警告。

### TB0020: 可疑的接口转换

如果声明的 coclass 没有显式命名支持的接口，转换为该接口将触发此警告，例如：

```vb
Dim myPic As StdPicture
Dim myFont As StdFont
Set myFont = myPic
```

你需要使用 `Set myFont = CType(OfStdFont)(myPic)` 来避免此警告。

### TB0021: 隐式枚举与数值之间的转换

将数字字面量赋值给枚举类型的变量时触发，例如 `Dim day As VbDayOfWeek: day = 1`。要避免它，使用 `day = CType(Of VbDayOfWeek)(1)`。