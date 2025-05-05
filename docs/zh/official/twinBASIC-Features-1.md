# twinBASIC 新功能

本页旨在列出并简要描述 twinBASIC 相比 VBx 带来的所有新功能，并假设读者已经熟悉 BASIC 语言编程的基本原理。这些功能分为以下几类：

* [语言语法](https://github.com/twinbasic/documentation/wiki/twinbasic-features#language-syntax)
* [项目配置](https://github.com/twinbasic/documentation/wiki/twinbasic-features#project-configuration)
* [特性（Attributes）](https://github.com/twinbasic/documentation/wiki/twinbasic-features#attributes)
* [标准库](https://github.com/twinbasic/documentation/wiki/twinbasic-features#standard-library)
* [GUI 组件](https://github.com/twinbasic/documentation/wiki/twinbasic-features#gui-components)（例如控件和窗体）
* [设计体验](https://github.com/twinbasic/documentation/wiki/twinbasic-features#design-experience)

# 特性（Attributes）
特性具有两个主要功能：它们可以作为指令影响编译器生成代码的方式，或者用于注解一个元素（窗体、模块、类、类型、枚举、声明、子程序/函数等）。在 VBx 中，特性是存在的，但不会在代码窗格中显示，并且使用难以通过源文件使用的晦涩语法。以前在 VBx 中，一些特性（如过程描述、隐藏特性和默认成员）是通过编辑器不显示的隐藏文本设置的，通过"过程特性"对话框或其他地方进行配置。在 tB 中，这些都在代码编辑器中可见。为了兼容性，保留了 VBx 中的旧特性，但新特性使用以下语法：\
`[Attribute]` 或 `[Attribute(value)]`\
后续的许多项目都会描述其相关特性，然后会描述其他杂项特性。

# 64 位编译

除了 32 位外，twinBASIC 还可以编译原生 64 位可执行文件。为此，其语法与 VBA7 兼容：使用 `LongPtr` 数据类型，并且在 64 位模式下需要将 API 标记为 `PtrSafe`，例如：\
`Public Declare PtrSafe Sub foo Lib "bar" (ByVal hWnd As LongPtr)`

> [!重要]
> 要使大多数 32 位应用程序在 64 位下正常工作，需要做更多工作。只有一些 `Long` 变量需要更改，这取决于它们的 C/C++ 数据类型，而这些类型有很多。需要改为 `LongPtr` 的例子包括像 `HWND、HBITMAP、HICON` 和 `HANDLE` 这样的句柄；像 `void*、PVOID、ULONG_PTR、DWORD_PTR` 和作为 `Long` 传递的 `LPWSTR/PWSTR/LPCWSTR/WCHAR*` 这样的指针；以及在 CopyMemory 和内存分配函数中找到的 `SIZE_T` 类型。\
> 另外，任何处理内存指针的代码都必须考虑到所有提到的类型（以及更多未提到的类型）以及 v-table 条目现在是 4 字节或 8 字节，而大多数程序员传统上都是硬编码 4 字节。UDT 对齐问题也更加频繁。这一切都非常复杂，当转向 64 位时，您应该寻求资源和建议（不过请记住，仍然支持 32 位，所以这不是必需的）。

# 语言语法

## 新数据类型
* `LongPtr` 主要用于处理指针，在 32 位模式下是 4 字节（32 位）有符号整数，在 64 位模式下是 8 字节（64 位）有符号整数。
* `LongLong` 8 字节（64 位）有符号整数，范围从 -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807。注意，此类型在 32 位和 64 位模式下都可用（VBA 将其限制在 64 位模式下）。
* `Decimal` 在 twinBASIC 中，`Decimal` 除了在 `Variant` 中使用外，还作为一个完整的常规数据类型实现。这是一个 16 字节（128 位）类型，它包含一个 12 字节（96 位）整数，具有可变小数点缩放和符号位信息。值的范围从 -79,228,162,514,264,337,593,543,950,335 到 79,228,162,514,264,337,593,543,950,335。
* 所有数据类型管理功能也适用于这些类型：`DefDec`/`DefLngLng`/`DefLongPtr`、`CDec`/`CLngLng`/`CLongPtr` 以及用于类型检查的 `vbDecimal`/`vbLongLong`/`vbLongPtr` 常量。

## 接口和 COM 类

### 定义接口
twinBASIC 支持使用 BASIC 语法定义 COM 接口，而不需要带有 IDL 和 C++ 的类型库。这些只支持在 .twin 文件中使用，不支持在传统的 .bas 或 .cls 文件中使用。它们必须出现在 `Class` 或 `Module` 语句之前，并且始终具有项目范围。通用形式如下：

```vba
[InterfaceId ("00000000-0000-0000-0000-000000000000")]
*<attributes>*
Interface <n> Extends <base-interface>
    *<attributes>*
    <method 1>
    *<attributes>*
    <method 2>
    ...
End Interface
```

方法可以是以下任何一种：`Sub`、`Function`、`Property Get`、`Property Let` 或 `Property Set`，参数遵循标准语法，并可使用标准特性。这些不能用 `Public/Private/Friend` 修饰。不使用 `End <method>`，因为这些只是原型定义。

目前可用于接口的特性包括：
* `[Description("text")]` - 在信息弹出窗口中提供描述，并在类型库中作为 `helpstring` 特性导出（如果适用）。
* `[Hidden]` - 在某些 Intellisense 和其他列表中隐藏接口。
* `[Restricted]` - 限制在大多数上下文中调用接口方法。
* `[OleAutomation(True/False)]` - 控制此特性是否在类型库中应用。默认为 **True**。
* `[ComImport]` - 指定接口是从外部 COM 库导入的，例如 Windows shell。
* `[COMExtensible(True/False)]` - 指定是否可以通过实现 IDispatch 的接口按名称调用在运行时添加的新成员。默认为 **False**。

目前可用于方法的特性包括：
* `[Description("text")]` - 参见上文。
* `[PreserveSig]` - 对于 COM 接口，通常方法返回一个语言对您隐藏的 HRESULT。`[PreserveSig]` 特性覆盖此行为并按您提供的方式精确定义函数。如果您需要将其定义为返回 4 字节 `Long` 以外的其他内容，或者想要自己处理结果，绕过当返回值为负时通常引发的运行时错误（当负值表示预期的、可接受的失败，而不是真正的错误时，这很有用，比如当枚举接口已经没有项目时）。
* `[DispId(number)]` - 定义与方法关联的调度 ID。

#### 示例
```vba
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
（其中 MyEnum 是标准的 `Enum ... End Enum` 块。）

### 定义 COM 类
除了接口外，twinBASIC 还允许定义 COM 类 —— 可以创建的实现一个或多个已定义接口的类。像接口一样，这些也必须在 .twin 文件中，而不是传统的 .bas/.cls 文件中，并且必须出现在 `Class` 或 `Module` 语句之前。通用形式是：

```vba
[CoClassId("00000000-0000-0000-0000-000000000000")]
*<attributes>*
CoClass <n>
    [Default] Interface <interface name>
    *[Default, Source] Interface <event interface name>*
    *<additional Interface items>*
End CoClass
```

每个 COM 类必须指定一个 `[Default]` 接口，源接口和其他接口是可选的。每个接口代表一个契约，表明类将提供该接口的实现。请注意，目前 twinBASIC 还不支持定义 `dispinterface` 接口，这是事件源接口的通常形式。

COM 类可用的特性如下：
* `[Description("text")]` - 在信息弹出窗口和其他地方提供描述。
* `[ComCreatable(True/False)]` - 表示此 COM 类可以用 `New` 关键字创建。默认为 *True*。
* `[AppObject]` - 表示该类是全局命名空间的一部分。如果不完全理解其含义，不应包含此特性。
* `[Hidden]` - 使 COM 类在某些地方不出现。

#### 示例
```vba
[CoClassId("52112FA1-FBE4-11CA-B5DD-0020AFE7292D")]
CoClass Foo
   [Default] Interface IFoo
   Interface IBar
End CoClass
```
其中 `IFoo` 和 `IBar` 是用前面描述的 `Interface` 语法定义的接口。

### `Implements` 的增强功能
* twinBASIC 中的 `Implements` 允许在继承的接口上使用 —— 例如，如果您有 `Interface IFoo2 Extends IFoo`，然后在类中使用 `Implements IFoo2`，而在 VBx 中这是不允许的。您需要为所有继承的接口提供方法（除了 `IDispatch` 和 `IUnknown`）。该类将标记所有接口为可用 —— 您不需要为 `IFoo` 单独声明，它会通过 `Set` 语句（及其底层的 `QueryInterface` 调用）自动传递。

* 如果您有一个被多个其他接口扩展的接口，您可以编写多个实现，或者为所有接口指定一个实现。例如：

    ```vba
    IOleWindow_GetWindow() As LongPtr _
      Implements IOleWindow.GetWindow, IShellBrowser.GetWindow, IShellView2.GetWindow
    ```

* 允许在带有 "As Any" 参数的接口上使用 `Implements`：在 VBx 中，如果您尝试使用任何包含 `As Any` 参数的接口成员，都会收到错误。在 twinBASIC 中，如果您用 `As LongPtr` 代替 `As Any`，则允许这样做，例如：

    ```vba
    Interface IFoo Extends IUnknown
        Sub Bar(ppv As Any)
    End Interface

    Class MyClass
    Implements IFoo

    Private Sub IFoo_Bar(ppv As LongPtr) Implements IFoo.Bar

    End Sub
    ```

* 基本继承的 `Implements Via`\
现在可以在类之间实现简单的继承。例如，如果您有一个实现了包含 Honk 方法的 IVehicle 接口的 cVehicle 类，您可以创建像 cCar 或 cTruck 这样的子类，它们继承原始类的方法，这样您就可以调用 cCar.Honk 而不需要编写单独的实现。以下是代码示例：

![image](https://github.com/twinbasic/documentation/assets/7834493/b0724fe2-636d-47db-a8fc-531a585ddaf9)

您可以看到，Honk 方法只由父类实现，然后当您从 IDE 中点击 CodeLens 按钮以在原地运行子程序时，从子类调用它。

## 用于通过指针调用的委托类型

通过 `Delegate` 语法，现在原生支持通过指针调用函数。twinBASIC 中的委托是与 LongPtr 兼容的函数指针类型。`AddressOf` 返回一个委托类型，该类型也向后兼容 `LongPtr`。

语法如下：

```vba
    Private Delegate Function Delegate1 (ByVal A As Long, ByVal B As Long) As Long
    
    Private Sub Command1_Click()
        Dim myDelegate As Delegate1 = AddressOf Addition
        MsgBox "Answer: " & myDelegate(5, 6)
    End Sub
    
    Public Function Addition(ByVal A As Long, ByVal B As Long) As Long
        Return A + B
    End Function
```

委托类型也可以在接口/API 声明和用户定义类型的成员中使用，例如 `ChooseColor` API：

```vba
Public Delegate Function CCHookProc (ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr
Public Type CHOOSECOLOR
    lStructSize As Long
    hwndOwner As LongPtr
    hInstance As LongPtr
    rgbResult As Long
    lpCustColors As LongPtr
    Flags As ChooseColorFlags
    lCustData As LongPtr
    lpfnHook As CCHookProc '委托函数指针类型而不是 LongPtr
    lpTemplateName As LongPtr
End Type
```

如果您已经有代码将 `Long`/`LongPtr` 分配给 `lpfnHook` 成员，它将继续正常工作，但现在您还可以获得将其设置为匹配委托的方法的类型安全好处：

```vba
Dim tCC As CHOOSECOLOR
tCC.lpfnHook = AddressOf ChooseColorHookProc

...

Public Function ChooseColorHookProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

End Function
```

## OBJ 和 LIB 文件的静态链接

tB 允许您使用正确编译的 .lib 和 .obj 文件作为静态链接库，使用类似于 DLL 的声明，只需引用项目的 Miscellaneous 文件夹中的 lib/obj 文件。一旦文件在项目中，就使用以下语法设置，以 sqlite 示例为例：

```vba
#If Win64 Then
    Import Library "/Miscellaneous/sqlite3_64.obj" As SQLITE3 Link "stdlib", "kernel32"
#Else
    Import Library "/Miscellaneous/sqlite3_32.obj" As SQLITE3 Link "stdlib", "kernel32"
#End If

通用形式：

    Import Library "相对资源路径" As 命名空间 Link "依赖项1", "依赖项2", ...
```

之后，您可以在类/模块声明中使用命名空间代替 DLL 名称：

```vba
' 使用命令行编译 sqlite-amalgamation-3440200 (v3.44.2)
'   (MSVC): cl /c /Gw /Gy /GS- /DSQLITE_OMIT_SEH sqlite3.c
#If Win64 Then
    Import Library "/Miscellaneous/sqlite3_64.obj" As SQLITE3 Link "stdlib", "kernel32"
#Else
    Import Library "/Miscellaneous/sqlite3_32.obj" As SQLITE3 Link "stdlib", "kernel32"
#End If

Module MainModule
    
    Declare PtrSafe Function sqlite3_open CDecl Lib SQLITE3 (ByVal filename As String, ByRef ppDb As LongPtr) As Long
    Declare PtrSafe Function sqlite3_exec CDecl Lib SQLITE3 (ByVal pDb As LongPtr, ByVal sql As String, ByVal exec_callback As LongPtr, ByVal udp As LongPtr, ByRef errmsg As LongPtr) As Long
...
```

>[!注意]
>StdCall 名称将与参数大小混合，例如 `int myfunc(int x, short y);` 将变为 `myfunc@6`。因此，使用 `CDecl` 可能会更好。

将来会有一个文档页面完全解释这一点；现在如果您需要帮助，请访问 tB Discord 或 GitHub 仓库的 Discussions 部分并提问。

## `Emit()` 和裸函数用于直接将汇编插入到 exe/dll 中

原始字节码可以通过 tB 的 `Emit()` 函数插入到二进制文件中。为了支持这一点，函数可以标记为 `Naked` 以移除隐藏的 tB 代码。

例如，以下是 InterlockedIncrement 编译器内部函数的实现，它替代了 Microsoft C/C++ 中的 API（将 1 添加到 `Addend` 并返回结果，作为一个原子操作，这在普通代码中不能保证）：

```vba
Public Function InlineInterlockedIncrement CDecl Naked(Addend As Long) As Long
#If Win64 Then
    Emit(&Hb8, &H01, &H00, &H00, &H00) ' mov    eax,0x1
    Emit(&Hf0, &H0f, &Hc1, &H41, &H00) ' lock xadd DWORD PTR [rcx+0x4],eax
    Emit(&Hff, &Hc0)                   ' inc    eax
    Emit(&Hc3)                         ' ret 
#Else
    Emit(&H8b, &H4c, &H24, &H04)       ' mov     ecx, DWORD PTR _Addend$[esp-4]
    Emit(&Hb8, &H01, &H00, &H00, &H00) ' mov     eax, 1
    Emit(&Hf0, &H0f, &Hc1, &H01)       ' lock xadd DWORD PTR [ecx], eax
    Emit(&H40)                         ' inc     eax
    Emit(&Hc3)                         ' ret     0
#End If
End Function
```
（注意：`CDecl` 调用约定是可选的；您可以使用 `_stdcall` 编写 x86 汇编，只需省略此表示法。）

## 类型推断

变量现在可以声明为 `As Any`，其类型将被推断，类似于 C++ 的 `auto`。\
`Dim x As Any = 5&` 将导致 x 成为 `Long` 类型。

这仅适用于 `Dim` 语句；除了在 API 声明中，参数不能是 `As Any`。

## 新运算符
* 位移运算符 `<<` 和 `>>` 对数值变量执行左移和右移操作。注意，超出可用大小的移位结果为 0，而不是循环。

* `vbNullPtr` - 允许将空指针传递给 API/接口的 UDT 成员。在 VBx 中的等效行为是将它们声明为 `As Any` 然后在调用时传递 `ByVal 0`。

    **示例**
    ```vba
    Type Foo
       bar As Long
    End Type
    Public Declare PtrSafe Function MyFunc Lib "MyDLL" (pFoo As Foo) As Long

    Private Sub CallMyFunc()
        Dim ret As Long = MyFunc(vbNullPtr)
    End Sub
    ```

另外，虽然不是严格意义上的新语法，但 twinBASIC 还增加了对 `ByVal Nothing` 的支持，以覆盖 `ByRef <interface>` 参数并在那里传递空指针。

* 短路条件运算符 `OrElse` 和 `AndAlso`。使用常规的 `Or` 和 `And` 语句时，两边都会被求值，即使不需要。使用短路运算符时，如果条件由第一边解决，则不会求值另一边。所以如果您有：
`If Condition1 OrElse Condition2 Then`，如果 Condition1 为 `True`，则不会求值 `Condition2`，并且其调用的任何代码都不会运行。

* 短路 `If()` 运算符，语法与传统的 `IIf` 相同。如果变量类型相同，这还有一个额外的好处，即不会将变量转换为 `Variant`；即 `If(condition, Long, Long)` 中的 `Long` 变量永远不会变成 `Variant`。

* 新的赋值运算符：`+= -= /= *= ^= &= <<= >>=`

    这些等同于 `var = var (operand) (var2)`。所以 `i += 1` 等同于 `i = i + 1`。

* `IsNot` 运算符：用于测试对象等价性的 *Is* 运算符的逻辑相反。例如，现在可以写 `If object IsNot Nothing Then` 而不是 `If (object Is Nothing) = False`。

## 新的字面量表示法

### 二进制字面量<br>
除了用于十六进制字面量的 `&H` 和八进制表示法的 `&O` 外，twinBASIC 还提供了用于二进制表示法的 `&B`。例如，`Dim b As Long = &B010110` 是有效的语法，且 b = 22。

### 数字分组
&H、&O 和 &B 字面量都可以使用下划线进行分组，例如，按二进制字节组对 `Long` 进行分组：`&B10110101_10100011_10000011_01101110`，或将 `LongLong` 分组为两个 `Long` 组：`&H01234567_89ABCDEF`。

## 线程安全/多线程支持
虽然还没有原生语言语法（已计划），但您可以直接调用 `CreateThread` 而不需要任何黑科技。以前，VBx 和其他 BASIC 语言通常需要复杂的变通方法才能使用 `CreateThread` 做一些专门的、极其简单的事情。在 twinBASIC 中，您可以调用它和所有其他线程 API，而不需要任何特殊步骤，当然除了小心管理这种低级线程。

### 示例

在一个新的标准 EXE 项目中，向您的窗体添加一个命令按钮和文本框：

```vba
    Private Declare PtrSafe Function GetCurrentThreadId Lib "kernel32" () As Long

    Private Declare PtrSafe Function CreateThread Lib "kernel32" ( _
                            ByRef lpThreadAttributes As Any, _
                            ByVal dwStackSize As Long, _
                            ByVal lpStartAddress As LongPtr, _
                            ByRef lpParameter As Any, _
                            ByVal dwCreationFlags As Long, _
                            ByRef lpThreadId As Long) As LongPtr

    Private Declare PtrSafe Function WaitForSingleObject Lib "kernel32" ( _
                            ByVal hHandle As LongPtr, _
                            ByVal dwMilliseconds As Long) As Long

 
    
    Private Const INFINITE = -1&
    
    Private Sub Command1_Click() Handles Command1.Click
        Dim lTID As Long
        Dim lCurTID As Long
        Dim hThreadNew As LongPtr
        lCurTID = GetCurrentThreadId()
        hThreadNew = CreateThread(ByVal 0, 0, AddressOf TestThread, ByVal 0, 0, lTID)
        Text1.Text = "线程 " & lCurTID & " 正在等待线程 " & lTID
        Dim hr As Long
        hr = WaitForSingleObject(hThreadNew, 30000&) '等待 30 秒作为默认值。如果您永远不想超时，可以使用 INFINITE。
        Text1.Text = "等待结束代码 " & CStr(hr)
    End Sub

    Public Sub TestThread()
        MsgBox "你好，线程"
    End Sub
```

在单线程代码下，如果您在更新 `Text1.Text` 之前调用 `TestThread`，在您点击消息框的确定按钮之前文本不会更新。但在这里，消息框是在单独的线程中启动的，所以执行会继续并更新文本，之后我们手动选择等待消息框线程退出。

## `AddressOf` 的改进
`AddressOf` 现在可以用于类/窗体/用户控件成员，包括通过指定实例从类外部使用。此外，不需要 `FARPROC` 类型的函数，您可以像 `Ptr = AddressOf Func` 这样使用它。所以如果您有类 `CFoo` 及其成员函数 `bar`，以下代码是有效的：

```vba
Dim foo1 As New CFoo
Dim lpfn As LongPtr = AddressOf foo1.bar
```