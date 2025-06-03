## 导出函数和变量
可以从标准模块导出函数或变量，包括使用 CDecl，例如：

```vb
[DllExport]
Public Const MyExportedSymbol As Long = &H00000001

[DllExport]
Public Function MyExportedFunction(ByVal arg As Long) As Long

[DllExport]
Public Function MyCDeclExport CDecl(ByVal arg As Long)
```

这主要用于创建标准 DLL（参见下一节），但此功能也可在标准 EXE 和其他已编译项目类型中使用。

# 项目配置
## 内置支持创建标准 DLL
虽然以前可以通过黑客方式实现这一点，但 tB 将其作为内置项目类型提供。您可以在启动时选择此项目类型，然后只需在想要导出函数时用 `[DllExport]` 标记它们。名称将按原样使用，不会被修饰。支持使用正常语法的 `CDecl` 调用约定，例如 `Public Function foo CDecl(bar As Long) As Long`。\
twinBASIC 中的标准 DLL 仍然可以指定启动点；然后每个导出都会检查这段代码是否已运行，如果没有，则运行它。

## 内置支持创建控制台应用程序
此项目类型允许创建真正的控制台项目而不是 GUI 项目。有帮助的是，它还会添加一个默认的 `Console` 类用于读取/写入控制台 IO 和提供调试控制台。

## 内置支持轻松创建服务
tB 有一个服务包（WinServicesLib），让创建功能齐全的真正服务变得轻而易举。它简化了 MESSAGETABLE 资源的使用、每个 exe 的多个服务、用于 IPC 的命名管道等。请参见示例 21-22。

## 内置支持创建内核模式驱动程序
内核模式驱动程序只能访问 API 的一个非常有限的子集，并且不能调用运行时等用户模式 DLL。因此，在以前的 BASIC 产品中，这通常需要复杂的黑客技术，并且会极大地限制您可以做的事情（如果可能的话）。当然，内核模式没有 WOW64 层，所以 tB 是第一个支持为 64 位 Windows 制作驱动程序的 BASIC 产品。这由"Project: Native subsystem"选项以及以下两个功能控制。

## 内置支持覆盖入口点
BASIC 应用程序通常有一个隐藏的入口点，它在 `Sub Main` 或启动窗体的 `Form_Load` 之前首先运行。这设置了应用程序的功能，如初始化 COM。twinBASIC 支持覆盖这个入口点，并将您自己的过程设置为真正的入口点。这主要用于内核模式项目，它必须有特定类型的入口点，并且默认情况下不能调用普通的 API。但是您可能还有其他原因想要使用此选项，但请注意：如果您不自己执行初始化过程或准确理解您不能使用什么，正常应用程序中的许多功能都会失效。

## 将 API 声明放在 IAT 中
tB 可以选择将所有 API 声明放在导入地址表中，而不是像 VBx 那样通过 `LoadLibrary/GetProcAddress` 在运行时调用它们（VBx 将 TLB 声明的 API 放在导入表中；tB 也复制这一点，但进一步为项目内声明提供了选项）。

这有一个小的性能优势，因为它在启动时加载和绑定，而不是在第一次调用时，但主要用于内核模式，它不能调用 `LoadLibrary` 和其他用户模式 API 来使用延迟绑定。

## 将 ActiveX 构建注册到 `HKEY_LOCAL_MACHINE` 或 `HKEY_CURRENT_USER` 选项
虽然现代应用程序使用 `HKEY_CURRENT_USER`，但为了与 VBx 兼容，组件必须注册到 `HKEY_LOCAL_MACHINE`。注意，这在注册时需要以管理员身份运行。

## 构建时注册是可选的
tB 提供了 Project: Register DLL after build 选项，因此您可以禁用自动注册，例如，如果您想先移动文件。

# 其他特性标记
以下特性标记也可用，但上面没有描述：

* APIs、UDTs 和 Consts 的 `[Description("text")]` 特性标记，当您将鼠标悬停在它们的使用上时会在弹出窗口中显示，并在 VBx 对象浏览器中显示。此外，此特性标记可用于 `Module` 或 `Class` 来描述模块/类本身，如果类代表一个可创建的控件，它通常会在组件列表中用于描述控件，因为它也作为类级别的 `helpstring` 特性导出。
* `[RunAfterBuild]` 特性标记 - 您可以指定一个在 exe 构建后运行的函数（如果您要签名 exe，可以使用 `App.LastBuildPath` 知道它在哪里）。
* 每个类/模块和每个过程的 `[IntegerOverflowChecks(False)]`、`[FloatingPointErrorChecks(False)]` 和 `[ArrayBoundsChecks(False)]` 特性标记，用于在对性能关键的例程上禁用这些检查，同时将它们普遍保留在其他地方。
* 常量函数折叠。您可以为函数指定 `[ConstantFoldable]` 特性标记，当用非变量输入调用时，将在编译时而不是运行时计算。例如，将字符串字面量转换为 ANSI 的函数。结果永远不会改变，所以存储结果的 ANSI 字符串，而不是每次运行时重新计算。
* 方法的 `[Unimplemented]` 特性标记允许在调用未实现的方法时显示编译器警告。您也可以将其升级为错误。
* `[SetDllDirectory(True/False)]` 特性标记允许显式加载的 DLL 从其加载路径加载自己的依赖项。它还具有允许在基本应用程序的声明语句中搜索应用程序路径中的 DLL 的效果。它可以按声明或在模块内使用。
* `[EnumId("GUID")]` 指定要在类型库中与枚举关联的 GUID。
* `[TypeHint()]` 特性标记允许使用枚举为 `Long` 以外的类型填充智能感知。
* `[CompileIf(condition)]` 方法特性标记用于对条件编译进行更高级的控制。
* `[DebugOnly]` 用于 Sub/Function 将从构建中排除对它的调用。
* DLL 声明的 `[DllStackCheck(False)]` 特性标记在 32 位 API 调用中提供微小的代码生成大小减少。
* `[Debuggable(False)]` 特性标记关闭方法或模块的断点和单步执行。
* `[PopulateFrom()]` 通过 JSON 填充枚举

注意，您也可以使用带有新语法的 VBx 特性标记；`[PredeclaredId]`、`[Hidden]`、`[Restricted]` 等。

# 标准库增强

## Unicode 支持
接受字符串参数的本机函数，如 `MsgBox` 和文件系统函数（例如 `Open`、`Dir`、`Mkdir`、`Kill` 和 `RmDir`）现在支持 Unicode。此外，.twin 文件使这很容易使用，因为编辑器也支持 Unicode。因此您可以在编辑器中粘贴 Unicode 字符串，看到它正确显示，然后让 tB 函数和控件正确显示相同的字符串。

### 文件 I/O 的编码选项

`Open` 语句通过使用新的 `Encoding` 关键字和变量支持 Unicode，并允许您除了标准 Unicode 选项外还可以指定各种编码选项。

使用示例：

```vb
Open "C:\MyFile.txt" For Input Encoding utf-8 As #1
```

当前定义的编码选项完整列表（不用担心，这些会在智能感知中出现）是：`default_system_ansi`、`utf_7`、`utf_7_bom`、`utf_8`、`utf_8_bom`、`utf_16`、`utf_16_bom`、`us_ascii`、`koi8_u`、`koi8_r`、`big5`、`iso_8859_1_latin1`、`iso_8859_2_latin2`、`iso_8859_3_latin3`、`iso_8859_4_latin4`、`iso_8859_5_cyrillic`、`iso_8859_6_arabic`、`iso_8859_7_greek`、`iso_8859_8_hebrew`、`iso_8859_9_latin5_turkish`、`iso_8859_10_latin6_nordic`、`iso_8859_11_thai`、`iso_8859_13_latin8_baltic`、`iso_8859_14_latin8_celtic`、`iso_8859_15_latin9_euro`、`iso_8859_16_latin10_balkan`、`windows_1250_central_europe`、`windows_1251_cyrillic`、`windows_1252_western`、`windows_1253_greek`、`windows_1254_turkish`、`windows_1255_hebrew`、`windows_1256_arabic`、`windows_1257_baltic`、`windows_1258_vietnamese`、`ibm_850_western_europe`、`ibm_852_central_and_eastern_europe`、`ibm_855_cyrillic`、`ibm_856_hebrew`、`ibm_857_turkish`、`ibm_858_western_europe`、`ibm_860_portuguese`、`ibm_861_icelandic`、`ibm_862_hebrew`、`ibm_863_canadian`、`ibm_865_danish`、`ibm_866_cyrillic`、`ibm_869_greek`、`ibm_932_japanese` 和 `ibm_949_korean`。

根据系统支持，应该接受其他类似格式的编码。

## 新的内置函数：

除了前面描述的新数据类型相关和组件名称函数外，标准内置 `VBA` 库函数包括：

* `IsArrayInitialized(variable)` - 确定数组是否已初始化。注意：用 `Array()` 声明为空数组的 `Variant` 将返回 `True`。
* `RGBA(r, g, b, a)` - 类似于 `RBG()` 函数，但包含 alpha 通道。
* `RBG_R(rgba)`、`RGB_B(rgba)`、`RBG_G(rgba)` 和 `RGBA_A(rgba)` - 获取各个通道的值。
* `TranslateColor(ColorValue, Optional Palette)` - 将 OLE 颜色值转换为 RGB 颜色。
* `ProcessorArchitecture()` - 根据应用程序位数返回 `vbArchWin32` 或 `vbArchWin64`。
* `CallByDispId(Object, DispId, CallType, Arguments)` - 类似于 `CallByName()`，但使用调度 ID 而不是方法名。
* `RaiseEventByName(Object, Name, Args)` - 在类上调用事件，使用包含数组的单个 `Variant` 指定参数。
* `RaiseEventByName2(Object, Name, Arg1, Arg2, ...)` - 在类上调用事件，使用 ParamArray 指定参数。
* `PictureToByteArray(StdPicture)` - 将图片转换为字节数组；Globals.LoadPicture 支持从字节数组加载。
* `CreateGUID()` - 返回一个带有新生成的 GUID 的字符串。
* `AllocMem(size)` 和 `FreeMem` - 从进程堆分配和释放内存。
* `Int3Breakpoint` - 插入一个真正的断点，对连接外部调试器很有帮助。
* `GetDeclaredTypeProgId(Of T)` / `GetDeclaredTypeClsid(Of T)` 泛型用于获取 ProgID/CLSID 字符串。
* `GetDeclaredMinEnumValue(Of T)` / `GetDeclaredMaxEnumValue(Of T)` 泛型
* 一些 `Interlocked*` 函数

### 来自 msvbvm60.dll 的内置运行时函数和重定向

tB 内置支持一些最常用的运行时函数，以实现兼容性。这些都支持 32 位和 64 位。除非另有说明，所有这些函数都以两种方式工作：首先，始终存在的内置本机版本（除非您删除基本编译器包），具有最常见的参数排列。这些不需要 `Declare` 语句。如果您*确实*提供了 `Declare` 版本，tB 将允许您指定的任何参数排列（例如，`As Any` 而不是 `As LongPtr`），如果提供了别名，则映射到该别名。

* 内存函数：`GetMem1`、`GetMem2`、`GetMem4`、`GetMem8`、`PutMem1`、`PutMem2`、`PutMem4`、`PutMem8`，以及新增的 `GetMemPtr` 和 `PutMemPtr`，固定为当前指针大小。
* `vbaObjSet`、`vbaObjSetAddref`、`vbaCastObj` 和 `vbaObjAddref` 用于通过指针操作对象赋值。
* `vbaCopyBytes` 和 `vbaCopyBytesZero`
* `vbaAryMove` 和 `vbaRefVarAry`（目前只能通过 `Declare` 语句使用）。
* tB 也有一个内部的 `VarPtr`，但仍然会通过声明语句重定向调用，例如用于数组的别名（尽管 tB 的 `VarPtr` 原生支持数组）。


# GUI 组件

## 支持现代图像格式
您在 tB 窗体和控件中不再面临极其有限的图像格式选择；不仅位图和图标格式支持这些格式的完整范围，您还可以额外加载 PNG 图像、JPEG 图像、图元文件（.emf/.wmf）和 SVG 矢量图形（.svg）。

### 改进的 `LoadPicture`
此外，`LoadPicture` 可以直接从字节数组加载所有图像类型，而不需要磁盘上的文件。您可以使用此功能从资源文件或其他源加载图像。注意，如果您的项目引用了 stdole2.tlb（大多数项目都引用），目前您必须将其限定为 `Global.LoadPicture` 以获取 tB 的自定义绑定，该绑定支持字节数组。

## 窗体上的透明度和 Alpha 混合

## Form.TransparencyKey
这个新属性指定一个颜色，该颜色对于 z 序中它下面的窗口将是透明的（所有窗口，不仅仅是您项目中的窗口）。设置此属性将使指定的颜色 100% 透明。具有实心 `FillStyle` 的形状控件是用关键色为窗体的区域着色的有用工具。

## Form.Opacity

这为整个窗体设置 alpha 混合级别。像透明度一样，这适用于它正下方的所有窗口。注意，任何被 `TransparencyKey` 颜色覆盖的区域将保持 100% 透明。

以下图像显示了一个具有红色 `TransparencyKey` 的窗体，使用形状控件定义透明区域，同时为整个窗体指定 75% 的 `Opacity`：

![image alt ><](https://github.com/twinbasic/documentation/assets/7834493/85f25aa2-abc8-4d42-8510-078f8ee4a324)

## 额外的窗体功能

除了上述功能外，窗体还具有：

* `DpiScaleX`/`DpiScaleY` 属性用于检索当前值
* `.MinWidth`、`.MinHeight`、`.MaxWidth` 和 `.MaxHeight` 属性，因此不需要子类化来实现这一点
* `Form.TopMost` 属性。
* 控件锚定：控件的 x/y/cx/cy 可以设为相对的，这样它们就会随着窗体自动移动/调整大小。例如，如果您在右下角放置一个 TextBox，然后选中右和底部锚点（除了顶部和左侧），右下角将随窗体调整大小而调整大小。这节省了大量样板调整大小代码。
* 控件停靠：控件可以固定在窗体（或容器）的一侧，或者填充整个窗体/容器。多个控件可以在停靠位置组合和混合/匹配。

有关控件锚定和控件停靠的更多信息，请参见 Wiki 条目[控件锚定和停靠 ‐ 自动大小和位置管理](https://github.com/twinbasic/documentation/wiki/Control-Anchoring-and-Docking-%E2%80%90-Automatic-size-and-position-management)。