---
title: 委托案例
parent: 语言语法
nav_order: 5
permalink: /Features/Language/DelegateCases
---

# 委托实战案例

本文档收集了 twinBASIC 委托在实际项目中的应用案例，展示委托在不同场景下的真实用法和技巧。

---

## 案例一：API Hook — 通过委托调用 Trampoline

> **来源仓库**：[fafalone/APIHook](https://github.com/fafalone/APIHook)
>
> 一个通用的 API Hook 模块，支持 x86/x64 双架构，包含 trampoline 以调用原始函数。

### 场景描述

在实现 API Hook（IAT Hook / Inline Hook）时，需要：
1. 用 `AddressOf` 将自定义的替换函数地址传给 Hook 安装函数
2. Hook 安装后，通过 trampoline（跳板代码）调用原始函数
3. trampoline 地址是一个运行时动态分配的 `LongPtr`，需要以正确的函数签名调用它

这是**委托 + LongPtr + CType 模式**的经典应用——trampoline 地址是运行时才知道的 `LongPtr`，但调用时必须以原始函数的签名执行。

### 核心代码

```vb
' 1. 用 Delegate 声明原始函数的签名
Private Delegate Function fn_MessageBoxW _
    ( _
        ByVal hWnd As LongPtr, _
        ByVal lpText As LongPtr, _
        ByVal lpCaption As LongPtr, _
        ByVal uType As Long) As Long

' 2. Hook 描述符 — TrampolineAddress 存为 LongPtr
Public Type HookDescriptor
    TargetAddress      As LongPtr   ' 被钩住的函数地址
    TrampolineAddress  As LongPtr   ' 可执行的跳板地址（调用此 = 调原函数）
    OriginalBytes(0 To 13) As Byte  ' 保存的原始字节
    PatchSize          As Long      ' 5 (x86) 或 14 (x64)
    IsInstalled        As Boolean
End Type

Private g_Hook As HookDescriptor

' 3. 替换函数 — 拦截调用并通过 trampoline 调原函数
Public Function Hook_MessageBoxW(ByVal hWnd As LongPtr, _
                                  ByVal lpText As LongPtr, _
                                  ByVal lpCaption As LongPtr, _
                                  ByVal uType As Long) As Long
    Debug.Print "MessageBoxW intercepted!"
    ' ★ 关键：将 LongPtr 的 trampoline 地址转为委托类型后调用
    Dim pfnOrig As fn_MessageBoxW = g_Hook.TrampolineAddress
    Hook_MessageBoxW = pfnOrig(hWnd, lpText, lpCaption, uType)
End Function

' 4. 安装 Hook — 传递 AddressOf 替换函数
Sub Demo_Install()
    Dim ok As Boolean
    ok = InstallHook("user32.dll", "MessageBoxW", _
                     AddressOf Hook_MessageBoxW, g_Hook)
    If ok Then Debug.Print "Hook installed."
End Sub
```

### 新发现：委托变量可以直接从 LongPtr 隐式构造

在之前的文档中，我们推荐使用 `CType(Of DelegateType)(longPtrValue)` 将 LongPtr 转换为委托。但此案例展示了一个更简洁的写法：

```vb
' 之前推荐的写法
Dim pfnOrig As fn_MessageBoxW = CType(Of fn_MessageBoxW)(g_Hook.TrampolineAddress)

' 本案例的写法 — 直接赋值
Dim pfnOrig As fn_MessageBoxW = g_Hook.TrampolineAddress
```

**`LongPtr` 可以直接赋值给同类型的委托变量，无需 `CType` 显式转换。** 这是因为委托本质上就是与 LongPtr 兼容的函数指针类型，twinBASIC 允许 LongPtr 到委托的隐式转换。

> **注意**：这里的"直接赋值"是在**声明时初始化**（`Dim ... As DelegateType = longPtrValue`），而不是先声明后赋值。如果你先 `Dim` 再赋值，行为可能不同。实际使用时建议两种方式都测试确认。

### 新发现：委托可以作为"函数签名模板"

在这个案例中，`fn_MessageBoxW` 委托并没有被用于传统的回调场景——它从未通过 `AddressOf` 获取某个函数的地址。它的作用是**定义一种函数签名**，让 trampoline 的 `LongPtr` 地址能以正确的参数和返回值类型被调用。

这种用法可以理解为：**委托 = 函数签名 + 函数指针**。当 LongPtr 被赋给委托变量后，编译器就知道如何正确设置调用栈、传递参数和处理返回值。

### InstallHook 函数签名：hookProc 使用 LongPtr 而非委托

注意 `InstallHook` 的 `hookProc` 参数类型是 `LongPtr`，而不是委托类型：

```vb
Public Function InstallHook(ByVal moduleName As String, _
                            ByVal procName As String, _
                            ByVal hookProc As LongPtr, _      ' ← LongPtr，不是委托
                            ByRef hook As HookDescriptor) As Boolean
```

调用时传入 `AddressOf Hook_MessageBoxW`，twinBASIC 自动将委托类型转换为 `LongPtr`。这验证了委托与 LongPtr 的双向兼容性：

- **委托 → LongPtr**：隐式转换（`AddressOf` 返回值可以直接传给 `LongPtr` 参数）
- **LongPtr → 委托**：直接赋值或 `CType` 转换

### 完整的 API Hook 工作流

```
┌─────────────────────────────────────────────────┐
│  InstallHook("user32.dll", "MessageBoxW",       │
│              AddressOf Hook_MessageBoxW, g_Hook) │
│                                                   │
│  1. GetModuleHandle + GetProcAddress             │
│     → 获取 MessageBoxW 的真实地址 (LongPtr)       │
│                                                   │
│  2. BuildTrampoline                               │
│     → 在附近分配可执行内存                        │
│     → 写入原始字节 + 跳回指令                     │
│     → 返回 trampoline 地址 (LongPtr)              │
│                                                   │
│  3. BuildPatchX86/X64(hookProc)                   │
│     → 生成跳转到 Hook_MessageBoxW 的补丁          │
│                                                   │
│  4. ProtectedWrite                                │
│     → 将补丁写入目标函数头部                      │
│                                                   │
│  5. 保存描述符                                    │
│     g_Hook.TrampolineAddress = trampoline         │
│     g_Hook.TargetAddress = targetAddr             │
└─────────────────────────────────────────────────┘

调用流程:
  App → MessageBoxW → [detour patch] → Hook_MessageBoxW
                                          ↓
                                    Dim pfnOrig As fn_MessageBoxW = g_Hook.TrampolineAddress
                                    pfnOrig(hWnd, lpText, lpCaption, uType)
                                          ↓
                                    [trampoline: 原始字节 + 跳回]
                                          ↓
                                    MessageBoxW+14 继续执行
```

---

## 案例二：控制台事件系统 — LongPtr 存储 + CType 调用

> **来源**：twinBASIC 挑战赛 #1 诊断工具项目

### 场景描述

在构建控制台类库时，需要支持 resize、按键、鼠标等多种事件。由于委托类型不能作为类的私有成员存储，采用 `LongPtr` + 布尔标志 + `CType` 转换的模式。

### 核心代码

```vb
' 委托定义
Public Delegate Sub ConsoleResizeHandler(ByVal newWidth As Long, ByVal newHeight As Long)
Public Delegate Sub ConsoleKeyHandler(ByRef keyInfo As ConsoleKeyInfo, ByRef handled As Boolean)
Public Delegate Function ConsoleCtrlHandler(ByVal ctrlType As Long) As Long

' 类中用 LongPtr 存储
Public Class cConsole
    Private m_OnResize As LongPtr
    Private m_OnKey As LongPtr
    Private m_HasResizeHandler As Boolean
    Private m_HasKeyHandler As Boolean

    ' 用 Property Let 设置
    Public Property Let OnResize(ByVal handler As ConsoleResizeHandler)
        m_OnResize = CLngPtr(handler)
        m_HasResizeHandler = (handler <> 0)
    End Property

    ' 调用时用 CType 转回
    Public Sub CheckResize()
        If m_HasResizeHandler AndAlso m_OnResize <> 0 Then
            Dim h As ConsoleResizeHandler = CType(Of ConsoleResizeHandler)(m_OnResize)
            h(newWidth, newHeight)
        End If
    End Sub
End Class

' 使用
Dim con As New cConsole
con.OnResize = AddressOf MyResizeHandler
```

### 关键要点

- **Property Let**（不是 `Set`）用于接收委托参数
- **CLngPtr()** 将委托转为 LongPtr 存储
- **布尔标志 + `<> 0`** 双重检查，避免调用空委托
- **CType(Of DelegateType)(m_Ptr)** 将 LongPtr 转回委托再调用

---

## 案例三：CDecl 回调 — qsort 排序

> **来源**：twinBASIC 官方文档 — 增强的 API 声明

### 核心代码

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
    Dim z(10) As Long
    Dim i As Long
    For i = 0 To UBound(z)
        z(i) = Int(Rnd * 1000)
    Next i
    qsort z(0), UBound(z) + 1, LenB(z(0)), AddressOf Comparator
End Sub

Private Function Comparator CDecl( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long
    Comparator = a - b
End Function
```

### 关键要点

- 委托定义中加 `CDecl` 关键字，与 C 运行时库的调用约定匹配
- 回调函数本身也必须加 `CDecl`
- 委托类型可以直接作为 API 声明的参数类型，替代 `LongPtr`

---

## 案例四：DLL 导出回调 — 从外部接收函数地址

> **来源**：综合实践

### 场景描述

DLL 需要接收宿主程序传入的回调地址。地址以 `LongPtr` 参数传入，存为 `LongPtr`，需要时转换为委托调用。

### 核心代码

```vb
Public Delegate Sub ProgressCallback(ByVal percent As Long, ByVal msg As String)

Private g_ProgressAddr As LongPtr

[DllExport]
Public Function DoWork(ByVal progressAddr As LongPtr) As Long
    g_ProgressAddr = progressAddr
    ' ...执行工作...
    If g_ProgressAddr <> 0 Then
        Dim cb As ProgressCallback = CType(Of ProgressCallback)(g_ProgressAddr)
        cb(50, "进行中...")
    End If
    DoWork = 1
End Function
```

### 关键要点

- DLL 导出函数的参数必须用 `LongPtr`（不能直接用委托类型，因为跨 DLL 边界时委托类型不可见）
- 存储、判断、调用三步模式：`LongPtr` 存储 → `<> 0` 判断 → `CType` 转换后调用

---

## LongPtr 与委托的转换方式汇总

通过以上案例，可以总结出 LongPtr 与委托之间的所有转换方式：

| 转换方向 | 方式 | 示例 | 案例来源 |
|---------|------|------|---------|
| 委托 → LongPtr | `CLngPtr()` | `m_Ptr = CLngPtr(handler)` | 案例二 |
| 委托 → LongPtr | 隐式转换 | `InstallHook(..., AddressOf HookProc, ...)` | 案例一 |
| LongPtr → 委托 | 直接赋值 | `Dim pfn As DelegateType = longPtr` | 案例一 |
| LongPtr → 委托 | `CType(Of T)()` | `Dim pfn = CType(Of DelegateType)(m_Ptr)` | 案例二、四 |
| 委托 → LongPtr | 赋给 LongPtr 变量 | `Dim ptr As LongPtr = myDelegate` | 通用 |

### 直接赋值 vs CType：选哪个？

两种方式都能工作，但有细微差别：

```vb
' 方式 A：直接赋值（更简洁，APIHook 案例使用）
Dim pfnOrig As fn_MessageBoxW = g_Hook.TrampolineAddress

' 方式 B：CType 显式转换（更显式，诊断工具案例使用）
Dim h As ConsoleResizeHandler = CType(Of ConsoleResizeHandler)(m_OnResize)
```

- **方式 A** 更简洁，适合一行代码内完成声明+赋值+调用
- **方式 B** 更明确，类型转换意图清晰，适合团队协作或代码审查

两种方式在功能上等价，选择取决于个人偏好和团队规范。
