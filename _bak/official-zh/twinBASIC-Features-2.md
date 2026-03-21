## 增强的指针功能

`CType(Of <type>)` 运算符明确指定将一种类型转换为另一种类型的意图。这可以用于将 `LongPtr`（或在 32 位下的 `Long`/64 位下的 `LongLong`）转换为自定义用户定义类型，根据使用情况可以选择是否创建副本。这不仅允许直接转换而无需调用 `CopyMemory`，还允许设置仅由指针表示的 UDT 的成员，而无需来回复制内存。

考虑以下 UDT：

```vb
Private Type foo
    a As Long
    b As Long
    pfizz As LongPtr '指向 fizz 类型变量的指针
End Type
Private Type bar
    pfoo As LongPtr '指向 foo 类型变量的指针
End Type
Private Type fizz
    c As Long
End Type
```

以下代码示例演示如何操作这些指针：

```vb
Sub call1()
    Dim f As foo
    test1 VarPtr(f)
    Debug.Print f.a, f.b
End Sub
Sub test1(ByVal ptr As LongPtr)
    With CType(Of foo)(ptr)
        .a = 1
        .b = 2
    End With
End Sub
```

这将打印 `1  2`。

```vb
Sub call2()
    Dim f As foo, b As bar
    b.pfoo = VarPtr(f)
    test2 b
    Debug.Print f.a, f.b
End Sub
Sub test2(b As bar)
    With CType(Of foo)(b.pfoo)
        .a = 3
        .b = 4
    End With
End Sub
```
这将打印 `3  4`

```vb
Sub call3()
    Dim f As foo, b As bar, z As fizz
    f.pfizz = VarPtr(z)
    b.pfoo = VarPtr(f)
    test3 b
    Debug.Print z.c
End Sub
Sub test3(b As bar)
    CType(Of fizz)(CType(Of foo)(b.pfoo).pfizz).c = 4
End Sub
```

也允许独立使用和嵌套；上面的代码将打印 `4`。虽然这里的示例仅是本地代码，但这对于 API 特别有用，因为在那里您不得不大量使用指针。

## `Len/LenB(Of <type>)` 支持
现在可以使用经典的 `Len` 和 `LenB` 函数直接获取类型的长度/大小，无论是内置类型还是用户定义类型，而无需声明该类型的变量。例如，要知道指针大小，您可以使用 `LenB(Of LongPtr)`。

## 重载

twinBASIC 支持两种方式的重载：

### 按参数类型重载
以下子程序可以在同一个模块/类等中共存：

```vb
Sub foo(bar As Integer)
'...
End Sub

Sub foo(bar As Long)
'...
End Sub

Sub foo(bar As Double)
'...
End Sub
```
编译器将根据数据类型自动选择调用哪一个。

### 按参数数量重载
除了上述之外，您还可以添加以下内容：

```vb
Sub Foo(bar1 As Integer)
'...
End Sub
Sub Foo(bar1 As Integer, bar2 As Integer)
'...
End Sub
```
编译器将根据参数的数量和/或类型自动选择调用哪一个。

## 内联变量初始化
您现在可以内联设置变量的初始值，而无需使用行继续符。

**示例**

`Dim i As Long = 1`

`Dim foo As Boolean = bar()`

`Dim arr As Variant = Array(1, 2, 3)`

`Dim strArr(2) As String = Array("a", "b", "c")`

## `For` 的内联变量声明
您现在不再需要为计数器变量单独的 `Dim` 语句：
```vb
For i As Long = 0 To 10
    ...
Next
```
现在是有效的语法。您可以使用任何类型，不仅仅是 `Long`。

## 泛型
以下是在 tB 中使用泛型的示例：

```vb
Public Function TCast(Of T)(ByRef Expression As T) As T
Return Expression
End Function
```
例如，可以用 `TCast(Of Date)("2021-01-01")` 返回一个 `Date` 类型的变量。

## API/方法声明的增强
### `DeclareWide` 
`DeclareWide` 关键字取代 `Declare`，禁用 API 调用的 ANSI<->Unicode 转换。这既适用于直接参数，也适用于 UDT 内的 String 参数。例如，以下功能等效：
```
Public Declare PtrSafe Sub FooW Lib "some.dll" (ByVal bar As LongPtr)
Public DeclareWide PtrSafe Sub Foo Lib "some.dll" Alias "FooW" (ByVal bar As String)
```
两者都表示完全的 Unicode 操作，但后者允许直接使用 `String` 数据类型，而无需使用 `StrPtr` 防止转换。

> [!警告]
> 这**不会**改变底层数据类型—— `String` 类型是 `BSTR`，而不是 `LPWSTR`，所以当 API 返回预分配的 `LPWSTR` 而不是填充您创建的缓冲区时，它将不提供有效的 `String` 类型。这种情况会出现在 API 参数给定为 `[out] LPWSTR *arg` 时。

### `CDecl` 支持
cdecl 调用约定既支持 API 声明，也支持代码中的方法。这包括标准 DLL 中的 DLL 导出。示例：

`Private DeclareWide PtrSafe Function _wtoi64 CDecl Lib "msvcrt" (ByVal psz As String) As LongLong`
 
```vb
[ DllExport ]
Public Function MyExportedFunction CDecl(foo As Long, Bar As Long) As Long
```

还支持使用 `CDecl` 的回调。您将传递一个在原型中包含 `CDecl` 作为定义的委托。以下是使用 [`qsort` 函数](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-wsprintfw) 执行快速排序的示例代码：

```vb
Private Delegate Function LongComparator CDecl ( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long

Private Declare PtrSafe Sub qsort CDecl _
Lib "msvcrt" ( _
    ByRef pFirst As Any, _
    ByVal lNumber As Long, _
    ByVal lSize As Long, _
    ByVal pfnComparator As LongComparator _
)

Public Sub CallMe()
    Dim z() As Long
    Dim i As Long
    Dim s As String
    
    ReDim z(10) As Long
    For i = 0 To UBound(z)
        z(i) = Int(Rnd * 1000)
    Next i
    qsort z(0), UBound(z) + 1, LenB(z(0)), AddressOf Comparator
    For i = 0 To UBound(z)
        s = s & CStr(z(i)) & vbNewLine
    Next i
    MsgBox s
End Sub

Private Function Comparator CDecl( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long
    Comparator = a - b
End Function
```

### 可变参数支持
随着 `cdecl` 调用约定的完全支持，twinBASIC 还可以处理可变参数函数。在 C/C++ 中，这些函数在其参数中包含省略号 `...`。在 tB 中，这表示为 `{ByRef | ByVal} ParamArray ... As Any()`。注意，必须显式标记 `ByRef` 或 `ByVal`；不允许隐式 `ByRef`。

使用[给定的 C/C++ 原型](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-wsprintfw)：
```cpp
int WINAPIV wsprintfW(
  [out] LPWSTR  unnamedParam1,
  [in]  LPCWSTR unnamedParam2,
        ...     
);
```

twinBASIC 声明和使用它的函数可以这样写：
```vb
Private DeclareWide PtrSafe Function wsprintfW CDecl _
Lib "user32" ( _
  ByVal buf As String, _
  ByVal format As String, _
  ByVal ParamArray args As Any() _
) As Long
    
Private Sub Test()
  Dim buf As String = Space(1024)
  wsprintfW(buf, "%d %d %d", 1, 2, 3)
  MsgBox buf
End Sub
```

### `[PreserveSig]`
之前为 COM 方法描述的 `[PreserveSig]` 特性也可以用于 API 声明。对于 API，默认值为 `True`。因此，您可以指定 `False` 以将最后一个参数重写为返回值。示例：

```vb
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" (ppshf As IShellFolder) As Long
```

可以重写为

```vb
[PreserveSig(False)] 
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" () As IShellFolder`
```

## 循环控制
以下新语句可用于控制循环的进行：

* `Continue For` - 继续进行 `For` 循环的下一次迭代（或结束）。
* `Continue While` - 继续进行 `While` 循环的下一次迭代（或结束）。
* `Continue Do` - 继续进行 `Do` 循环的下一次迭代。
* `Exit While` - 立即退出 `While` 循环。

## 函数的 `Return` 语法
您现在可以像许多其他语言一样，将赋值返回值和退出函数合并为单个语句。这是通过 `Return` 关键字实现的：

```vb
Private Function Foo() As Long
Dim i As Long = 1
If i Then
    Return i
End If
End Function
```
这等同于
```vb
Private Function Foo() As Long
Dim i As Long = 1
If i Then
    Foo = i
    Exit Function
End If
End Function
```
`Return` 也可以用于对象。目前它仅在函数中有效并且必须指定值；您不能在子程序中使用没有任何后续内容的 `Return`。

## 新的类成员处理器语法
您现在可以将方法的名称与它应用到的类成员分开。

### 事件的 `Handles`
对于窗体、用户控件和引发事件的对象上的事件，您可以将任何方法定义为处理器，而不需要将其命名为 `Object_Event()`，只需在后面加上 `Handles Object.Event`。例如，在窗体中，您可以用 `Private Sub OnLoad() Handles Form.Load` 替代 `Private Sub Form_Load()`来处理 `Load` 事件。

### 接口的 `Implements`
类似上面，对于使用 `Implements` 的窗体/用户控件/类，您可以使用 `Sub Bar() Implements IFoo.Bar`。注意，您可以指定多个实现的方法；有关更多信息，请参见接口和 COM 类部分中的"对 Implements 的增强"小节，详细说明了这些新的语言内语法定义。

>[!注意]
>这些是可选加入的\
>为了兼容性，twinBASIC 将始终继续支持事件处理和 Implements 的传统语法，您不需要使用这种新语法（或本文描述的*任何*新增功能）。是否自动创建的原型使用这种语法是通过 IDE 选项控制的："IDE: 使用新的 handles/implements 语法"。

## 自定义 UDT 打包
如果您做过大量的 Windows API 工作，您偶尔会遇到用户定义类型中添加了一个称为 pad、padding、reserved 等的额外成员，但在该类型的文档中并未出现。这是因为 UDT 应用了与默认不同的打包规则。默认情况下，UDT 有隐藏的间距字节，使其最大大小的成员出现在其大小的倍数处，并使整个 UDT 成为该大小的倍数。考虑以下 UDT：
```vb
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
Private t As MyUDT
```
如果您查询 `Len(t)`，得到 8——2 个 2 字节的 Integer 和 1 个 4 字节的 Long 的总和。但如果您查询 `LenB(t)`，得到 12。这是因为最大大小类型是 4，所以那就是打包对齐数。每个 Long 必须出现在 4 字节的倍数处，所以在 x 和 y 之间插入了 2 字节的隐藏填充。您可以通过检查 `VarPtr(t.y) - VarPtr(t)` 自己看到这一点。这给出了 `y` 的起始偏移量——是 4，而不是如果它紧跟在 `x` 后面时的 2。最后，有了隐藏的 2 字节，我们现在是 10 字节。但 UDT 的总大小必须是 4 的倍数，所以在结尾又添加了 2 个隐藏字节。\
一些 API UDT 看起来像 `MyUDT` 是正确的，但您会看到它在 VBx 中被定义为 2 个 Long——这样就得到了所需的 8 字节，对第一个成员需要特殊处理。如果您回看原始的 C/C++ 头文件，您会发现，对于这种情况，在 UDT 之前有类似 `#include <pshpack1.h>` 或 `#pragma pack(push,1)` 的内容。这手动更改了打包规则，不在任何地方插入隐藏字节。\
在 twinBASIC 中，您不必使用两个 Long 并且在第一个不是 Integer 时担心如何处理它，您可以使用原始定义加上：
```vb
[PackingAlignment(1)]
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
Private t As MyUDT
```
您现在会发现 `Len(t)` 和 `LenB(t)` 都是 8。**注意：**对齐（不是打包对齐）不是这样设置的——指定 16 不会为 `t` 得到一个 16 字节的结构。twinBASIC 目前没有与 `__declspec_align(n)` 等效的功能，但计划添加这样的功能。这在内核模式编程之外非常罕见。

## 块注释和内联注释

您现在可以使用 `/* */` 语法。例如，`Sub Foo(bar As Long /* out */)` 或：

```c
/*
这里的所有内容
都是注释，直到：
*/
```

## 数组的解构赋值支持
此功能允许您在一行中将数组的内容赋值给多个变量：

```vb
    Dim a As Long, b As Long, c As Long
    Dim d(2) As Long
    d(0) = 1
    d(1) = 2
    d(2) = 3
    Array(a, b, c) = d
    Debug.Print a, b, c
```

这将打印 `1   2   3`。您也可以这样同时赋值多个变量并得到相同的结果：

```vb
    Dim a As Long, b As Long, c As Long
    Array(a, b, c) = Array(1, 2, 3)
    Debug.Print a, b, c
```

您现在还可以这样赋值：

```vb
        Dim a As Long = 9
        Dim b As Long = 7
        Dim c() As Long = Array(a, b)
        Debug.Print c(1), UBound(c)
```

这将打印 `7    1`。

## 直接访问 COM 错误处理
您可以通过 `Err.LastHResult` 获取对 COM 接口调用的最后一个 `HRESULT`；这些通常被隐藏并映射到内部错误——COM 接口中通常被称为 `Sub` 的所有内容实际上都是返回 `HRESULT` 的函数。

更重要的是，您现在可以在接口实现中使用 `Err.ReturnHResult` **设置** `HRESULT`。这是一个重要的缺失功能，有时 Err.Raise 可以工作，但大多数程序员不得不求助于复杂的虚表交换代码来重定向到标准模块函数。例如，您现在可以在需要时通过 `Err.ReturnHResult = S_FALSE` 返回 `S_FALSE`。

## 模块级定义不限于顶部
现在可以在方法或属性之间插入模块级代码。以前所有的 `Declare` 语句、`Enum`、`Type` 等都必须出现在第一个 `Sub/Function/Property` 之前，现在以下代码是有效的：

```vb
Private Const foo = "foo"
Sub SomeMethod()
'...
End Sub
Private Const bar = "bar"
Sub SomeOtherMethod()
'...
End Sub
```

## 预设代码部分名称方法
以下内容可以使用，它们表示的内容将自动作为 `String` 插入：

* `CurrentComponentName`，例如 "Form1"
* `CurrentProcedureName`，例如在 `Sub Foo()` 中时为 "Foo"
* `CurrentProjectName`
* `CurrentSourceFile`
* `CurrentComponentCLSID`

## 移除行继续、过程大小等限制
twinBASIC 不对这些、窗体上的控件数量、模块大小等设置人为限制。

## 参数化类构造函数
类现在支持带有添加参数能力的 `New` 子程序，在 `Class_Initialize` 事件之前调用。例如，一个类可以有：

```vb
[ComCreatable(False)]
Class MyClass
Private MyClassVar As Long
Sub New(Value As Long)
MyClassVar = Value
End Sub
End Class
```

然后通过 `Dim mc As MyClass = New MyClass(123)` 创建，这会在创建时设置 `MyClassVar`。注意：使用这个的类必须是私有的，具有 `[ComCreatable(False)]` 特性，或者也包含 `Class_Initialize()`。`Class_Initialize()` 将在已编译的 OCX 的调用者中替代 `New`。在项目内，如果存在 `New`，则只使用 `New`。

## 模块和类的 `Private`/`Public` 修饰符
在 ActiveX 项目中，私有模块或类不会将其成员输入到类型库中。

## `ReadOnly` 变量
在类中，模块级变量可以声明为 `ReadOnly`，例如 `Private ReadOnly mStartDate As Date`。这允许更复杂的常量赋值：您可以使用函数返回值内联设置它，`Private ReadOnly mStartDate As Date = Now()`，或者 `ReadOnly` 常量可以在 `Class_Initialize` 或 `Sub New(...)` 中设置（参见上面的参数化类构造函数），但在其他任何地方，它们只能读取，不能更改。

# 基础库支持

## 字符串解析选项
* `Like` 运算符现在支持新的标记，以前这一直是 VB6/A 中的一个问题：\
\[!c] - 匹配除 c 之外的任何单个字符\
\[^c] - 与 [!c] 相同\
[] 还可以使用像 [a-z] 这样的范围和像 [0-9a-z] 这样的组合。

* 内置函数 `Split`/`Join` 和 `Replace` 现在支持在 VBA 中常见的可选参数。
* 新的 `String$` 函数补充了现有的 `String` 函数。
* `Format` 运行时函数可以使用起始 "-" 来反转已解析的数字的符号。以前这个功能存在问题。

## 标准运行时函数

* `ByRefX` - 返回对变量的引用。注意，使用这个是危险的，因为对引用的写操作可能会绕过常用的检查；这主要用于调试和学术用途。返回的引用是"裸"引用；即使原始变量是对象引用，它也不会添加引用计数。返回的内容必须仅用于读取。除非您知道自己在做什么，否则不要使用此功能。

* `BitShift` - 对数值变量执行编程移位。它不是新的二进制运算符语法 `>>` 和 `<<` 的替代品，而是一个补充品：它可以处理 Byte、Integer 和 Long 类型，并且可以在适当的情况下保持数据类型。它不会产生像在大整数之间使用操作符运算符时可能出现的溢出或转换问题。

    ```vb
    Dim i As Integer = &H7123
    ' 效果等同于 i >> 4，但返回的仍然是 Integer
    Debug.Print Hex$(BitShift(i, 4))  ' = "712"
    ```

* 数学函数接受任何数字类型，而不仅仅是 Double，并相应地返回适当的数据类型。例如，如果参数是 Single，返回值也将是 Single。
    ```vb
    Dim y As Single
    y = Cos(3.14159!)  ' y 将是 Single
    ```

* Rnd 改进：提供了新的可选参数来指定范围，所以 `Rnd(5, 10)` 将返回一个 5 到 10 之间的随机数。现在也接受 Single 类型的参数，并使用更好的算法来避免分布不均。

* 文件/文件夹操作函数（Kill、RmDir、Name 等）现在支持长路径（即长于 260 个字符的路径）。

* MkDir 现在可以一次创建多个级别的路径。例如：`MkDir "C:\foo\bar\baz"` 如果需要的话会创建所有三个文件夹。请注意，在 VBx 中，您需要手动调用 `MkDir "C:\foo"`，然后是 `MkDir "C:\foo\bar"`，最后是 `MkDir "C:\foo\bar\baz"`。

## 从 Windows API 返回 BSTR 字符串

众所周知，在 VBx 中使用 Windows API 处理返回字符串有些麻烦，解决方案通常涉及预分配缓冲区、检查返回长度以确保缓冲区足够大，然后根据实际长度进行截断。这在 twinBASIC 中得到了改进：如果有一个返回 BSTR 的 API，您可以从 VB 中以一种简单的方式使用它，不需要额外的步骤：

```vb
Private Declare PtrSafe Function GetPath Lib "MyDLL" (ByVal bstrPath As String) As String

Private Sub Test()
    Debug.Print GetPath("test")     '<-- API 返回的 BSTR 直接转换为 VB 字符串
End Sub
```

## 以空开头的数组
twinBASIC 支持从下标 0 开始的数组，在试图与 C/C++ 代码连接时这很有用。这无需任何技巧；您只需将数组的下界设置为 0：

```vb
Dim a(0 To 9) As Long
```

## 带范围的变量
传统上 BASIC 会用 DefXXX 语句为没有显式声明类型的变量提供默认类型 - 例如，DefInt I-N 会给出一个范围内变量的默认类型。除了这个，twinBASIC 现在还支持可以在单个语句中同时声明多个变量：

```vb
Dim i%, j%, k%
```

或者

```vb
Dim i To k As Integer
```

## 变体数组
与现代编译器中的大多数函数一样，VarPtr/StrPtr/ObjPtr 不会将其参数固定；这意味着它们可以安全地应用于变体数组的元素：

```vb
Dim va() As Variant
va = Array(1, 2, "hello", Nothing)

Debug.Print VarPtr(va(0))       '有效
Debug.Print ObjPtr(va(3))       '有效
```

## 对象内部的值语义
在 VBx 中，让一个类/接口作为值类型的一部分需要用一些丑陋的代码，通常涉及复制和释放引用并增加和减少引用计数。在 twinBASIC 中，这可以正常工作：

```vb
Private Type Pair
    First As CFoo             '这在 VBx 中会导致错误
    Second As CFoo
End Type

Public Sub Test()
    Dim p As Pair
    Set p.First = New CFoo    '这在 VBx 中是危险的，p.First 不是引用
    Set p.Second = New CFoo   '这在 VBx 中是危险的，p.Second 不是引用
    p.First.Bar              '使用对象成员
End Sub
```

## 多种参数传递方式
除了 `ByVal` 和 `ByRef` 外，twinBASIC 现在还支持 `ByRefArg` 和 `ByRefValue` 作为参数传递说明符。这些说明符允许更精细地控制如何在函数调用中传递参数。

`ByRefArg` 意味着参数按引用传递，但不会修改原始值。这类似于 C++ 中的 "const reference"。

`ByRefValue` 与 `ByRef` 的行为相同，但明确指示该参数可能被修改。这提供了额外的代码清晰性。

## Windows API 调用的改进
* 现在支持 ANSI API 函数，但在许多情况下可以避免因为使用了 `LPCSTR` 或 `LPSTR` 而需要特殊处理：对于这些，在内部执行从 Unicode 到 ANSI 和从 ANSI 到 Unicode 的转换，这样您就可以编写：

```vb
Private Declare PtrSafe Function GetWindowTextA Lib "user32" (ByVal hWnd As LongPtr, ByVal lpString As String, ByVal cch As Long) As Long
Private Declare PtrSafe Function SendMessageA Lib "user32" (ByVal hWnd As LongPtr, ByVal wMsg As Long, ByVal wParam As Long, ByVal lParam As String) As Long
```

而不是：

```vb
Private Declare PtrSafe Function GetWindowTextA Lib "user32" (ByVal hWnd As LongPtr, ByVal lpString As LongPtr, ByVal cch As Long) As Long
Private Declare PtrSafe Function SendMessageA Lib "user32" (ByVal hWnd As LongPtr, ByVal wMsg As Long, ByVal wParam As Long, ByVal lParam As LongPtr) As Long
```

* 同样，支持 `TCHAR` API，这些函数将根据是否定义了 `UNICODE` 而使用 ANSI 或 Unicode 版本。在 twinBASIC 中，这些函数将始终使用基于 Unicode 的版本。

* 在 VBx 中，当一个 API 有一个带缓冲区大小的输出字符串参数时，一个常见的习惯是这样的：

```vb
' 调用一次获取所需的长度
ret = Function(0, 0, lpLength)
' 分配必要的缓冲区
lpBuffer = String$(lpLength, 0)
' 获取字符串
ret = Function(lpBuffer, Len(lpBuffer), lpLength)
' 我们返回值，减去结尾的零终止符
Return Left$(lpBuffer, lpLength - 1)
```

twinBASIC 中与 Windows API 的字符串参数交互得到了极大的改进，所以通常不需要这些步骤 - 编译器能够判断哪些是输入字符串，哪些是输出字符串（有时两者都是）。如果您有一个返回带零终止的字符串的函数，您可以创建一个与 C++ 中基本相同的声明：

```vb
Private Declare PtrSafe Function GetUserName Lib "advapi32" Alias "GetUserNameW" (ByVal lpBuffer As String, ByRef nSize As Long) As Long

Private Function GetCurrentUserName() As String
    ' 创建变量
    Dim name As String
    Dim size As Long
    
    ' 获取名字
    GetUserName name, size
    
    ' 返回值
    Return name
End Function
```

如果一个函数返回的缓冲区没有正确终止，您可以使用 `lpBufferSize` 参数：

```vb
Private Declare PtrSafe Function Function Lib "DLL" (ByVal lpBuffer As String, ByVal lpBufferSize As Long, ByRef lpLength As Long) As Long
```

这会在内部创建一个足够大的缓冲区。