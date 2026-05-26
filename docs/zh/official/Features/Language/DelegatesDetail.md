---
title: 委托类型（详解）
parent: 语言语法
nav_order: 4
permalink: /Features/Language/Delegates2
---

# 用于间接调用的委托类型

原生支持通过指针调用函数，通过 `Delegate` 语法。twinBASIC 中的委托是一个与 LongPtr 兼容的函数指针类型。`AddressOf` 返回一个委托类型，也与 `LongPtr` 向后兼容。

## 基本用法

### 定义委托类型

使用 `Delegate` 关键字定义一个函数指针类型，声明其参数签名和返回值类型：

```vb
' 定义一个无返回值的委托（类似 Sub）
Public Delegate Sub NotifyHandler(ByVal message As String)

' 定义一个有返回值的委托（类似 Function）
Public Delegate Function MathOp(ByVal A As Long, ByVal B As Long) As Long

' 定义一个带指针参数的委托（适用于 Win32 API 回调）
Public Delegate Function WndProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr
```

> **注意**：twinBASIC 委托目前不支持泛型参数，即不能写 `Delegate Sub Action(Of T)(ByVal item As T)`。需要针对每种参数类型定义具体的委托类型。

### 赋值与调用

通过 `AddressOf` 获取函数地址并赋值给委托变量，然后直接以函数调用语法调用委托：

```vb
Private Delegate Function Delegate1(ByVal A As Long, ByVal B As Long) As Long

Private Sub Command1_Click()
    Dim myDelegate As Delegate1 = AddressOf Addition
    MsgBox "答案: " & myDelegate(5, 6)
End Sub

Public Function Addition(ByVal A As Long, ByVal B As Long) As Long
    Return A + B
End Function
```

委托变量也可以先声明、后赋值，不必在声明时立即初始化：

```vb
Dim myDelegate As Delegate1    ' 先声明
myDelegate = AddressOf Addition ' 后赋值
MsgBox "答案: " & myDelegate(5, 6)
```

## 委托与 LongPtr 的关系

twinBASIC 的委托类型与 `LongPtr` 完全兼容，这意味着：

- 委托可以隐式转换为 `LongPtr`
- `LongPtr` 可以通过 `CType` 显式转换回委托类型
- 旧的 VB6 代码中将回调指针存为 `LongPtr` 的做法仍然有效

### 为什么要转 LongPtr？

在类模块中，委托类型有一些限制，使得直接存储委托变量并不总是可行：

| 操作 | 委托类型 | LongPtr |
|------|---------|---------|
| 作为类的私有成员 | ❌ 不支持 | ✅ 支持 |
| 用 `Set` 赋值 | ❌ 不是对象 | 不适用 |
| 用 `IsNot Nothing` 判断 | ❌ 不支持 | ✅ 可与 0 比较 |
| 用 `Property Let` 赋值 | ✅ 支持 | ✅ 支持 |
| 用 `Property Set` 赋值 | ❌ 不支持 | 不适用 |

因此，**在实际项目中，推荐使用 `LongPtr` 存储委托指针**，需要调用时再转换回委托类型。

### LongPtr 存储与 CType 转换模式

这是一个经过实践验证的完整模式：

```vb
' --- 定义委托 ---
Public Delegate Sub ResizeHandler(ByVal newWidth As Long, ByVal newHeight As Long)

' --- 在类中用 LongPtr 存储委托指针 ---
Public Class MyWindow
    ' 用 LongPtr 存储函数指针
    Private m_OnResize As LongPtr
    ' 用布尔标志记录是否已设置
    Private m_HasResizeHandler As Boolean

    ' 用 Property Let（不是 Set）设置委托
    Public Property Let OnResize(ByVal handler As ResizeHandler)
        m_OnResize = CLngPtr(handler)        ' 委托转 LongPtr
        m_HasResizeHandler = (handler <> 0)   ' 判断是否为空
    End Property

    ' 触发事件时，用 CType 转回委托类型再调用
    Public Sub RaiseResize(ByVal w As Long, ByVal h As Long)
        If m_HasResizeHandler AndAlso m_OnResize <> 0 Then
            Dim h As ResizeHandler = CType(Of ResizeHandler)(m_OnResize)
            h(w, h)
        End If
    End Sub
End Class
```

关键步骤总结：

1. **存储**：`m_Ptr = CLngPtr(delegateValue)` — 委托转 LongPtr
2. **判断是否为空**：`delegateValue <> 0` 或维护布尔标志
3. **调用**：`CType(Of DelegateType)(m_Ptr)` — LongPtr 转回委托，然后直接调用

## 委托作为 UDT 成员

委托类型可以作为用户定义类型（UDT / Structure）的成员，替代传统的 `LongPtr` 函数指针字段，提供类型安全：

```vb
Public Delegate Function CCHookProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

Public Type CHOOSECOLOR
    lStructSize As Long
    hwndOwner As LongPtr
    hInstance As LongPtr
    rgbResult As Long
    lpCustColors As LongPtr
    Flags As ChooseColorFlags
    lCustData As LongPtr
    lpfnHook As CCHookProc    ' 委托函数指针类型，而不是 LongPtr
    lpTemplateName As LongPtr
End Type
```

如果您已经有代码将 `Long`/`LongPtr` 赋值给 `lpfnHook` 成员，它将继续正常工作，但现在您还可以获得将其设置为匹配委托的方法的类型安全优势：

```vb
Dim tCC As CHOOSECOLOR
tCC.lpfnHook = AddressOf ChooseColorHookProc

'...

Public Function ChooseColorHookProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

End Function
```

## 委托在 API 声明中的使用

### 标准回调函数

委托可以直接用于 API 声明的回调参数，替代传统的 `LongPtr`，获得编译时类型检查：

```vb
' 传统写法（VB6 兼容）
Public Declare PtrSafe Function EnumWindows Lib "user32" ( _
    ByVal lpEnumFunc As LongPtr, _
    ByVal lParam As LongPtr) As Long

' 委托写法（推荐，类型安全）
Public Delegate Function EnumWindowsProc(ByVal hwnd As LongPtr, ByVal lParam As LongPtr) As Long

Public Declare PtrSafe Function EnumWindows Lib "user32" ( _
    ByVal lpEnumFunc As EnumWindowsProc, _
    ByVal lParam As LongPtr) As Long
```

使用时通过 `AddressOf` 传递回调函数：

```vb
Public Sub ListWindows()
    EnumWindows AddressOf MyEnumProc, 0
End Sub

Private Function MyEnumProc(ByVal hwnd As LongPtr, ByVal lParam As LongPtr) As Long
    ' 处理每个窗口...
    Return 1  ' 继续枚举
End Function
```

### CDecl 回调

twinBASIC 支持 `CDecl` 调用约定的回调。在委托定义中加入 `CDecl` 关键字即可。以下示例使用 C 运行时的 `qsort` 函数进行快速排序：

```vb
Private Delegate Function LongComparator CDecl( _
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

Public Sub SortArray()
    Dim z() As Long
    Dim i As Long

    ReDim z(10) As Long
    For i = 0 To UBound(z)
        z(i) = Int(Rnd * 1000)
    Next i

    ' AddressOf 自动匹配 LongComparator 委托签名
    qsort z(0), UBound(z) + 1, LenB(z(0)), AddressOf Comparator

    For i = 0 To UBound(z)
        Debug.Print CStr(z(i))
    Next i
End Sub

Private Function Comparator CDecl( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long
    Comparator = a - b
End Function
```

> **重要**：回调函数的调用约定（`CDecl` 或默认的 `StdCall`）必须与委托定义一致，否则会导致栈不平衡和程序崩溃。

## DLL 封装中的回调

在实际项目中，经常需要封装 DLL 并暴露回调接口。以下是完整的 DLL 回调封装示例。

### 场景：封装一个异步任务库

```vb
' === 回调委托定义 ===
Public Delegate Sub TaskCompleteCallback(ByVal taskId As Long, ByVal result As Long)
Public Delegate Sub TaskProgressCallback(ByVal taskId As Long, ByVal percent As Long)

' === DLL 内部类 ===
Public Class cAsyncTask
    Private m_TaskId As Long
    Private m_OnComplete As LongPtr
    Private m_OnProgress As LongPtr
    Private m_HasComplete As Boolean
    Private m_HasProgress As Boolean

    Public Sub New(ByVal taskId As Long)
        m_TaskId = taskId
    End Sub

    ' 设置完成回调 — 用 Property Let，不用 Set
    Public Property Let OnComplete(ByVal cb As TaskCompleteCallback)
        m_OnComplete = CLngPtr(cb)
        m_HasComplete = (cb <> 0)
    End Property

    ' 设置进度回调
    Public Property Let OnProgress(ByVal cb As TaskProgressCallback)
        m_OnProgress = CLngPtr(cb)
        m_HasProgress = (cb <> 0)
    End Property

    ' 模拟异步执行
    Public Sub Execute()
        Dim i As Long
        For i = 1 To 100
            ' 报告进度
            If m_HasProgress AndAlso m_OnProgress <> 0 Then
                Dim pcb As TaskProgressCallback = CType(Of TaskProgressCallback)(m_OnProgress)
                pcb(m_TaskId, i)
            End If
            ' ...执行任务...
        Next i

        ' 报告完成
        If m_HasComplete AndAlso m_OnComplete <> 0 Then
            Dim ccb As TaskCompleteCallback = CType(Of TaskCompleteCallback)(m_OnComplete)
            ccb(m_TaskId, 42)
        End If
    End Sub
End Class
```

### 场景：从外部接收函数地址作为回调

当 DLL 的函数地址是从参数传进来的时候（例如由宿主程序传入），需要将 `LongPtr` 转换为委托类型再调用：

```vb
' 定义回调委托
Public Delegate Sub ExternalCallback(ByVal eventData As LongPtr)

' DLL 导出函数：接收外部回调地址
[DllExport]
Public Function RegisterCallback(ByVal callbackAddr As LongPtr) As Long
    ' 方式一：直接用 LongPtr 存储，调用时转换
    g_CallbackAddr = callbackAddr

    ' 方式二：立即转换为委托类型
    Dim cb As ExternalCallback = CType(Of ExternalCallback)(callbackAddr)
    ' 现在可以直接调用
    cb(0)   ' 测试调用

    RegisterCallback = 1  ' 成功
End Function

' 全局存储
Private g_CallbackAddr As LongPtr

' 在需要时调用回调
Public Sub FireEvent(ByVal data As LongPtr)
    If g_CallbackAddr <> 0 Then
        Dim cb As ExternalCallback = CType(Of ExternalCallback)(g_CallbackAddr)
        cb(data)
    End If
End Sub
```

### 场景：VB6 兼容的间接赋值

在 VB6 中，`AddressOf` 只能作为参数传递给函数，不能直接赋值给变量。虽然 twinBASIC 已经取消了这一限制，但如果需要兼容 VB6 风格，可以使用辅助函数间接获取地址：

```vb
' VB6 兼容方式：通过辅助函数获取 AddressOf
Public Function GetAddressOf(ByVal addr As LongPtr) As LongPtr
    GetAddressOf = addr
End Function

' 使用
Dim procAddress As LongPtr
procAddress = GetAddressOf(AddressOf MyCallback)

' 然后可以将 procAddress 传给 DLL 或存储
```

> **twinBASIC 中不需要这种变通**。twinBASIC 允许直接使用 `AddressOf` 赋值：
> ```vb
> Dim procAddress As LongPtr = CLngPtr(AddressOf MyCallback)
> ' 或者直接赋给委托变量
> Dim myCb As ExternalCallback = AddressOf MyCallback
> ```

## 观察者模式（委托实现事件订阅）

委托可以实现轻量级的观察者模式，比 `WithEvents` 更灵活：

```vb
' 定义数据变更委托
Public Delegate Sub DataChangedHandler(ByVal data As Variant)

' 被观察者（Subject）
Public Class cDataSource
    Private m_Observers As Collection
    Private m_Data As Variant

    Public Sub New()
        Set m_Observers = New Collection
    End Sub

    ' 订阅
    Public Sub Subscribe(ByVal handler As DataChangedHandler)
        m_Observers.Add CLngPtr(handler)
    End Sub

    ' 通知所有观察者
    Private Sub NotifyObservers()
        Dim ptr As Variant
        For Each ptr In m_Observers
            If CLngPtr(ptr) <> 0 Then
                Dim h As DataChangedHandler = CType(Of DataChangedHandler)(CLngPtr(ptr))
                h(m_Data)
            End If
        Next ptr
    End Sub

    ' 修改数据时自动通知
    Public Property Let Data(ByVal value As Variant)
        m_Data = value
        NotifyObservers
    End Property
End Class
```

使用：

```vb
Dim src As New cDataSource
src.Subscribe AddressOf OnDataChanged

Public Sub OnDataChanged(ByVal data As Variant)
    Debug.Print "数据已变更: " & CStr(data)
End Sub
```

## 重要注意事项

### 1. 委托不是对象

twinBASIC 的委托是值类型（函数指针），不是对象。因此：

```vb
' ❌ 错误 — 委托不能用 Set 赋值
Set myDelegate = AddressOf SomeFunc

' ✅ 正确 — 直接赋值
myDelegate = AddressOf SomeFunc

' ❌ 错误 — 委托不能用 Is/IsNot Nothing 判断
If myDelegate IsNot Nothing Then ...

' ✅ 正确 — 与 0 比较判断是否为空
If myDelegate <> 0 Then ...

' ❌ 错误 — 委托不能用 Property Set
Public Property Set OnEvent(ByVal handler As MyDelegate)

' ✅ 正确 — 使用 Property Let
Public Property Let OnEvent(ByVal handler As MyDelegate)
```

### 2. 委托不支持泛型

```vb
' ❌ 不支持
Public Delegate Sub Action(Of T)(ByVal item As T)

' ✅ 需要为每种类型定义具体委托
Public Delegate Sub LongAction(ByVal item As Long)
Public Delegate Sub StringAction(ByVal item As String)
Public Delegate Sub VariantAction(ByVal item As Variant)
```

### 3. 调用约定必须匹配

回调函数的调用约定（`StdCall` / `CDecl`）必须与委托定义一致：

- Win32 API 回调通常使用 `StdCall`（twinBASIC 默认）
- C 运行时库回调（如 `qsort`）使用 `CDecl`
- 不匹配会导致栈损坏和程序崩溃

### 4. 委托为空时调用会崩溃

调用一个未初始化（值为 0）的委托会导致访问违规异常。务必在调用前检查：

```vb
' ❌ 危险 — 如果 myDelegate 为 0 会崩溃
myDelegate(123)

' ✅ 安全 — 先检查
If myDelegate <> 0 Then
    myDelegate(123)
End If
```

### 5. 签名必须严格匹配

回调函数的参数类型、数量、传递方式（ByVal/ByRef）和返回值类型必须与委托定义完全一致，否则会导致未定义行为。

## FAQ

### Q1：委托必须在声明时赋值吗？

**不需要。** 委托变量可以先声明、后赋值：

```vb
' 方式一：声明时赋值
Dim myDelegate As Delegate1 = AddressOf Addition

' 方式二：先声明，后赋值
Dim myDelegate As Delegate1
myDelegate = AddressOf Addition

' 方式三：声明为 LongPtr，需要时再转换
Dim ptr As LongPtr
ptr = CLngPtr(AddressOf Addition)
' ... 之后调用时转换
Dim d As Delegate1 = CType(Of Delegate1)(ptr)
d(5, 6)
```

### Q2：从外部传入的函数地址（LongPtr），如何赋值给委托？

当函数地址以 `LongPtr` 形式从参数传入时（如 DLL 回调场景），使用 `CType(Of DelegateType)` 将其转换为委托类型：

```vb
Public Delegate Sub MyCallback(ByVal data As Long)

' 外部传入 LongPtr 地址
Public Sub SetCallback(ByVal callbackAddr As LongPtr)
    ' 直接转换为委托并调用
    Dim cb As MyCallback = CType(Of MyCallback)(callbackAddr)
    cb(123)
End Sub
```

也可以先存为 `LongPtr`，在需要时再转换：

```vb
Private m_Callback As LongPtr

Public Sub SetCallback(ByVal callbackAddr As LongPtr)
    m_Callback = callbackAddr  ' 存储
End Sub

Public Sub DoSomething()
    If m_Callback <> 0 Then
        Dim cb As MyCallback = CType(Of MyCallback)(m_Callback)
        cb(42)
    End If
End Sub
```

### Q3：`myDelegate = pFunc` 这样直接把 LongPtr 赋给委托变量可以吗？

**不能直接赋值。** `LongPtr` 不能隐式转换为委托类型，需要使用 `CType`：

```vb
' ❌ 编译错误 — LongPtr 不能直接赋给委托
Dim myDelegate As Delegate1 = pFunc

' ✅ 正确 — 使用 CType 显式转换
Dim myDelegate As Delegate1 = CType(Of Delegate1)(pFunc)
```

但反过来，委托可以隐式转换为 `LongPtr`：

```vb
' ✅ 正确 — 委托可隐式转 LongPtr
Dim ptr As LongPtr = CLngPtr(myDelegate)
' 或者直接
Dim ptr As LongPtr = myDelegate
```

### Q4：如何判断委托是否已设置（是否为空）？

委托不是对象，不能用 `IsNot Nothing`。应与 `0` 比较：

```vb
' ❌ 错误
If myDelegate IsNot Nothing Then ...

' ✅ 正确
If myDelegate <> 0 Then ...

' ✅ 推荐：维护一个布尔标志
Private m_HasHandler As Boolean
Public Property Let OnEvent(ByVal handler As MyDelegate)
    m_Ptr = CLngPtr(handler)
    m_HasHandler = (handler <> 0)
End Property
```

### Q5：DLL 封装时，回调地址从参数传入该怎么处理？

这是最常见的实际场景。完整的处理模式如下：

```vb
' 1. 定义回调委托
Public Delegate Sub ProgressCallback(ByVal percent As Long, ByVal msg As String)

' 2. 在导出函数中接收 LongPtr 地址
[DllExport]
Public Function DoWork(ByVal progressAddr As LongPtr) As Long
    ' 3. 存储为 LongPtr
    g_ProgressAddr = progressAddr
    ' ...执行工作...
    ' 4. 需要回调时转换并调用
    If g_ProgressAddr <> 0 Then
        Dim cb As ProgressCallback = CType(Of ProgressCallback)(g_ProgressAddr)
        cb(50, "进行中...")
    End If
    DoWork = 1
End Function

Private g_ProgressAddr As LongPtr
```

如果回调地址是通过 UDT 结构体的字段传入的，处理方式相同：

```vb
Public Type WORK_PARAMS
    hwnd As LongPtr
    lpProgress As LongPtr     ' 回调地址作为 LongPtr 字段
    lpUserData As LongPtr
End Type

Public Sub ProcessWork(ByRef params As WORK_PARAMS)
    If params.lpProgress <> 0 Then
        Dim cb As ProgressCallback = CType(Of ProgressCallback)(params.lpProgress)
        cb(100, "完成")
    End If
End Sub
```

### Q6：AddressOf 在类模块中有限制吗？

在 VB6 中，`AddressOf` 只能在标准模块（.bas）中使用。**twinBASIC 取消了这一限制**，`AddressOf` 可以在类模块、标准模块等任何地方使用。这使得在类中设置委托回调变得非常自然：

```vb
Public Class MyClass
    Private m_OnResize As LongPtr
    Private m_HasResize As Boolean

    Public Property Let OnResize(ByVal handler As ResizeHandler)
        m_OnResize = CLngPtr(handler)
        m_HasResize = (handler <> 0)
    End Property
End Class

' 在任何模块中使用
Dim obj As New MyClass
obj.OnResize = AddressOf MyResizeHandler   ' ✅ twinBASIC 中完全合法
```

### Q7：委托和 WithEvents/Event 有什么区别？

| 特性 | Delegate 委托 | Event 事件 |
|------|-------------|-----------|
| 多订阅 | 需手动维护集合 | 内置多订阅支持 |
| 语法 | `AddressOf` + `CType` | `WithEvents` + `RaiseEvent` |
| 类型安全 | ✅ 编译时检查签名 | ✅ 编译时检查签名 |
| 可存储/传递 | ✅ 以 LongPtr 形式 | ❌ 不能传递事件 |
| 适合 DLL 回调 | ✅ 与 C API 兼容 | ❌ 不兼容 |
| 适合观察者模式 | ✅ 灵活 | ✅ 更简洁 |

简单规则：
- **内部模块间通信** → 用 `Event`/`WithEvents`（更简洁）
- **与外部 DLL/C API 交互** → 用 `Delegate`（必须）
- **需要动态注册/传递回调** → 用 `Delegate`（更灵活）
