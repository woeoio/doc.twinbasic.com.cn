---
title: 新函数
parent: 标准库
nav_order: 3
permalink: /Features/Standard-Library/New-Functions
---

# 新的内置函数

除了前面已经描述的新数据类型相关和组件名称函数外，标准内置`VBA`库现在包括许多新功能。

## 新函数

- `IsArrayInitialized(变量)` - 确定数组是否已初始化。注意：使用`Array()`声明为空数组的`Variant`将返回`True`。
- `RGBA(r, g, b, a)` - 像`RBG()`函数一样，只是包括 alpha 通道。
- `RBG_R(rgba)`、`RGB_B(rgba)`、`RBG_G(rgba)`和`RGBA_A(rgba)` - 获取各个通道的值。
- `TranslateColor(颜色值, 可选 调色板)` - 将 OLE 颜色值转换为 RGB 颜色。
- `ProcessorArchitecture()` - 根据应用程序位数返回`vbArchWin32`或`vbArchWin64`。
- `CallByDispId(对象, 分派 ID, 调用类型, 参数)` - 类似于`CallByName()`，但使用分派 ID 而不是方法名称。
- `RaiseEventByName(对象, 名称, 参数)` - 在类上调用事件，使用指定为包含数组的单个`Variant`的参数。
- `RaiseEventByName2(对象, 名称, 参数1, 参数2, ...)` - 在类上调用事件，使用指定为 ParamArray 的参数。
- `PictureToByteArray(StdPicture)` - 将图片转换为字节数组；Global.LoadPicture 支持从字节数组加载。
- `CreateGUID()` - 返回带有新生成的 GUID 的字符串。
- `AllocMem(大小)`和`FreeMem` - 从进程堆分配和释放内存。
- `Int3Breakpoint` - 插入对附加外部调试器有帮助的真正断点。
- `GetDeclaredTypeProgId(Of T)` / `GetDeclaredTypeClsid(Of T)`泛型，用于获取 ProgID/CLSID 的字符串。
- `GetDeclaredMinEnumValue(Of T)` / `GetDeclaredMaxEnumValue(Of T)`泛型。
- 一些`Interlocked*`函数

## 来自 msvbvm60.dll 的运行时函数

tB 为一些最常用的运行时函数提供内置支持，以兼容。这些都支持 32 位和 64 位。除非另有说明，所有这些函数以两种方式工作：首先，内置原生版本始终存在（除非您删除基本编译器包），具有最常见的参数排列。这些不需要`Declare`语句。如果您*确实*提供了`Declare`版本，tB 将允许您指定的任何参数排列（例如`As Any`而不是`As LongPtr`），如果提供了别名，则映射到别名。

### 内存函数

- `GetMem1`、`GetMem2`、`GetMem4`、`GetMem8`、`PutMem1`、`PutMem2`、`PutMem4`、`PutMem8`
- 新添加的`GetMemPtr`和`PutMemPtr`固定到当前指针大小

### 对象操作

- `vbaObjSet`、`vbaObjSetAddref`、`vbaCastObj`和`vbaObjAddref`用于通过指针操作对象赋值。

### 数组操作

- `vbaCopyBytes`和`vbaCopyBytesZero`
- `vbaAryMove`和`vbaRefVarAry`（目前仅在`Declare`语句中）。
- tB 也有内置的`VarPtr`，但仍将通过声明语句重定向调用，例如用于数组的别名（尽管 tB 的`VarPtr`原生支持数组）。

## 新的 App 对象属性

- `App.IsInIDE` - 从 IDE 运行时为`True`。
- `App.IsElevated` - 返回程序当前是否以管理员权限运行。
- `App.LastBuildPath` - 返回上次构建的完整路径。在编译器/IDE 重启之间不持久。
- `App.Build` - 用于额外的版本号字段。
- `App.ModulePath` - 返回当前执行模块的完整路径。例如，如果放在 DLL 中并从 EXE 调用，将返回 DLL 的路径。此外，当方法在应用程序本身时，从 IDE 运行时会给出 twinBASIC 调试器 DLL。

## COM 错误处理

### 直接访问 COM 错误

您可以通过`Err.LastHResult`检索最后一次 COM 接口调用的`HRESULT`；这些通常被隐藏并映射到内部错误——COM 接口中通常称为`Sub`的一切实际上都是返回`HRESULT`的函数。

### 设置返回 HRESULT

更重要的是，您现在可以在接口实现中**设置**`HRESULT`，使用`Err.ReturnHResult`。这是一个关键的缺失功能，有时 Err.Raise 会工作，但大多数程序员诉诸复杂 vtable 交换代码来重定向到标准模块函数。例如，您现在可以在预期的地方返回`S_FALSE`，使用`Err.ReturnHResult = S_FALSE`。

## 解构赋值

此功能允许您将数组的内容赋值给单个行中的多个变量：

```vb
Dim a As Long, b As Long, c As Long
Dim d(2) As Long
d(0) = 1
d(1) = 2
d(2) = 3
Array(a, b, c) = d
Debug.Print a, b, c
```

这将打印`1   2   3`。您也可以像这样一次赋值多个变量并获得相同结果：

```vb
Dim a As Long, b As Long, c As Long
Array(a, b, c) = Array(1, 2, 3)
Debug.Print a, b, c
```

您现在也可以做这样的赋值：

```vb
Dim a As Long = 9
Dim b As Long = 7
Dim c() As Long = Array(a, b)
Debug.Print c(1), UBound(c)
```

这将打印`7    1`。