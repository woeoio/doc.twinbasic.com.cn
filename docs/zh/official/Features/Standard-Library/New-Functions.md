---
title: "新函数"
parent: Standard Library
nav_order: 3
permalink: /Features/Standard-Library/New-Functions
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8a8dabfd-6c3d-4edc-ba43-6496a74e662e'
  PropagateID: '8a8dabfd-6c3d-4edc-ba43-6496a74e662e'
  ReservedCode1: '311b52af-bfbf-4e47-9432-2e494019b716'
  ReservedCode2: '311b52af-bfbf-4e47-9432-2e494019b716'
---

# 新内置函数

除了前面描述的与数据类型相关和组件名称的函数外，标准内置 `VBA` 库现在包含许多新功能。

## 新函数

- `IsArrayInitialized(variable)` - 判断数组是否已初始化。注意：用 `Array()` 声明为空数组的 `Variant` 将返回 `True`。
- `RGBA(r, g, b, a)` - 类似 `RBG()` 函数，但包含 alpha 通道。
- `RBG_R(rgba)`、`RGB_B(rgba)`、`RBG_G(rgba)` 和 `RGBA_A(rgba)` - 获取各通道的值。
- `TranslateColor(ColorValue, Optional Palette)` - 将 OLE 颜色值转换为 RGB 颜色。
- `ProcessorArchitecture()` - 根据应用程序位数返回 `vbArchWin32` 或 `vbArchWin64`。
- `CallByDispId(Object, DispId, CallType, Arguments)` - 类似 `CallByName()`，但使用调度 ID 而非方法名。
- `RaiseEventByName(Object, Name, Args)` - 在类上触发事件，使用包含数组的单个 `Variant` 参数。
- `RaiseEventByName2(Object, Name, Arg1, Arg2, ...)` - 在类上触发事件，使用 ParamArray 参数。
- `PictureToByteArray(StdPicture)` - 将图片转换为字节数组；Global.LoadPicture 支持从字节数组加载。
- `CreateGUID()` - 返回一个新生成的 GUID 字符串。
- `AllocMem(size)` 和 `FreeMem` - 从进程堆分配和释放内存。
- `Int3Breakpoint` - 插入真正的断点，有助于已附加的外部调试器。
- `GetDeclaredTypeProgId(Of T)` / `GetDeclaredTypeClsid(Of T)` 泛型，用于获取 ProgID/CLSID 字符串。
- `GetDeclaredMinEnumValue(Of T)` / `GetDeclaredMaxEnumValue(Of T)` 泛型。
- 一些 `Interlocked*` 函数

## 来自 msvbvm60.dll 的运行时函数

tB 内置了对一些最常用运行时函数的支持，以兼容性。这些都同时支持 32 位和 64 位。除非另有说明，所有这些函数以两种方式工作：首先，始终存在的内置原生版本（除非你移除了基本编译器包），具有最常见的参数排列。这些不需要 `Declare` 语句。如果你*确实*提供了 `Declare` 版本，tB 将允许你指定的任何参数排列（例如用 `As Any` 代替 `As LongPtr`），并在提供别名时映射到别名。

### 内存函数

- `GetMem1`、`GetMem2`、`GetMem4`、`GetMem8`、`PutMem1`、`PutMem2`、`PutMem4`、`PutMem8`
- 新增 `GetMemPtr` 和 `PutMemPtr`，对应当前指针大小

### 对象操作

- `vbaObjSet`、`vbaObjSetAddref`、`vbaCastObj` 和 `vbaObjAddref`，用于通过指针操作对象赋值。

### 数组操作

- `vbaCopyBytes` 和 `vbaCopyBytesZero`
- `vbaAryMove` 和 `vbaRefVarAry`（目前仅支持通过 `Declare` 语句）。
- tB 也有内置的 `VarPtr`，但仍会通过 declare 语句重定向调用，例如用于数组的别名（不过 tB 的 `VarPtr` 原生支持数组）。

## 新的 App 对象属性

- `App.IsInIDE` - 从 IDE 运行时为 `True`。
- `App.IsElevated` - 返回程序当前是否以管理员权限运行。
- `App.LastBuildPath` - 返回上次构建的完整路径。不在编译器/IDE 重启之间持久保存。
- `App.Build` - 用于额外的版本号字段。
- `App.ModulePath` - 返回当前执行模块的完整路径。例如，如果放在 DLL 中并从 EXE 调用，将返回 DLL 的路径。此外，从 IDE 运行且方法在应用本身中时，返回的是 twinBASIC 调试器 DLL。

## COM 错误处理

### 直接访问 COM 错误

你可以通过 `Err.LastHResult` 检索最后一次 COM 接口调用的 `HRESULT`；这些通常被隐藏并映射为内部错误——COM 接口中正常称为 `Sub` 的所有内容实际上是返回 `HRESULT` 的函数。

### 设置返回 HRESULT

更重要的是，你现在可以在接口实现中使用 `Err.ReturnHResult` **设置** `HRESULT`。这是一个关键缺失的功能，以前有时 `Err.Raise` 可以工作，但大多数程序员诉诸于复杂的 v-table 交换代码来重定向到标准模块函数。例如，你现在可以在需要时用 `Err.ReturnHResult = S_FALSE` 返回 `S_FALSE`。

## 解构赋值

此功能允许你将数组内容在单行中赋值给多个变量：

```vb
Dim a As Long, b As Long, c As Long
Dim d(2) As Long
d(0) = 1
d(1) = 2
d(2) = 3
Array(a, b, c) = d
Debug.Print a, b, c
```

这将打印 `1   2   3`。你也可以这样一次赋值多个变量并得到相同结果：

```vb
Dim a As Long, b As Long, c As Long
Array(a, b, c) = Array(1, 2, 3)
Debug.Print a, b, c
```

你现在还可以这样做：

```vb
Dim a As Long = 9
Dim b As Long = 7
Dim c() As Long = Array(a, b)
Debug.Print c(1), UBound(c)
```

打印 `7    1`。