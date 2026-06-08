---
title: "调用Windows API"
parent: Tutorials
permalink: /Tutorials/Windows-API
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cd17c8cd-5987-4e40-bcf2-e088c2af8e86'
  PropagateID: 'cd17c8cd-5987-4e40-bcf2-e088c2af8e86'
  ReservedCode1: 'f0bc7419-dd2a-4588-b064-ca453849f3ce'
  ReservedCode2: 'f0bc7419-dd2a-4588-b064-ca453849f3ce'
---

# 调用Windows API

本教程演示端到端的Windows API调用——编写 `Declare` 语句、调用函数、处理结果，以及在出错时读取错误信息。完成后你将拥有一个小型窗体，可以实时跟踪并显示当前鼠标光标位置。


## 背景

Windows API是系统DLL（如 `user32.dll`、`kernel32.dll` 和 `gdi32.dll`）暴露的大量C函数集合。VBA和twinBASIC可以使用 `Declare` 语句直接调用这些函数，该语句将外部函数映射到模块的命名空间中并提供类型化签名。

编写Declare时最重要的两件事：

1. **每个参数的正确类型。** 错误的类型可能传递错误的字节数并破坏栈或堆。
2. **32位与64位兼容性。** 许多Win32类型是指针大小的；在32位构建中为4字节，在64位构建中为8字节。

twinBASIC通过**LongPtr**（指针宽度整数）和 `PtrSafe` 关键字（表示Declare在64位进程中安全使用）处理这两个问题。

## 示例：跟踪鼠标坐标

`GetCursorPos` 读取鼠标指针的当前屏幕坐标，并将其写入调用方提供的 `POINT` 结构中。它是一个简单、安全且无副作用的函数——学习该模式的良好起点。

Windows SDK中的C原型：

```c
BOOL GetCursorPos(LPPOINT lpPoint);
```

- 返回值：成功时非零，失败时为零。
- 唯一参数是指向 `POINT` 结构的指针，函数将填充该结构。

twinBASIC翻译：

```vb
Private Type POINT
    x As Long
    y As Long
End Type

Private Declare PtrSafe Function GetCursorPos Lib "user32" _
    (lpPoint As POINT) As Long
```

`POINT` 包含两个32位整数字段。即使在64位构建中，字段本身仍是32位的——只有指针值改变宽度。这里使用 `Long` 是正确的。

参数 `lpPoint As POINT` 默认按**ByRef**传递。ByRef意味着twinBASIC将局部 `POINT` 变量的地址传递给函数，函数通过该指针将坐标写回。这是Windows中类型为 `LP<Something>` 的输出参数的标准模式。

## 步骤1：创建项目和窗体

创建一个新的标准EXE项目（或打开现有项目）。在 `Form1` 上添加：

| 控件 | 名称 | 标题 | 备注 |
|---------|------|---------|-------|
| Label | `lblCoords` | `(waiting...)` | 显示当前坐标 |
| Timer | `Timer1` | --- | 将**Interval**设为 `100`（毫秒），**Enabled**设为 `True` |

Timer每100毫秒触发其 `Timer` 事件。每次触发将调用 `GetCursorPos` 并更新标签。

<!-- screenshot: Form1 with a large Label and a Timer control in the lower-left corner -->

## 步骤2：添加Declare和UDT

打开 `Form1` 的代码编辑器。在模块顶部、任何过程之前，添加UDT和Declare：

```vb
Private Type POINT
    x As Long
    y As Long
End Type

Private Declare PtrSafe Function GetCursorPos Lib "user32" _
    (lpPoint As POINT) As Long
```

::: info
`PtrSafe` 在任何将用于64位构建的 `Declare` 上都是必需的。它告诉编译器该签名已经过指针宽度正确性审查。在仅32位项目上包含 `PtrSafe` 没有影响，因此在所有地方使用它是良好实践。
:::

## 步骤3：调用函数并处理结果

在设计器中双击Timer控件生成 `Timer1_Timer` 事件处理程序，然后填充内容：

```vb
Private Sub Timer1_Timer()
    Dim pt As POINT
    Dim success As Long

    success = GetCursorPos(pt)

    If success <> 0 Then
        lblCoords.Caption = "X: " & pt.x & "   Y: " & pt.y
    Else
        lblCoords.Caption = "(error)"
    End If
End Sub
```

`GetCursorPos` 成功时返回非零值，失败时返回零。`POINT` 字段 `x` 和 `y` 仅在返回值为非零时有效。

## 步骤4：运行应用程序

按**F5**。在窗体上移动鼠标。标签每秒更新十次，显示当前屏幕坐标（以像素为单位，从主显示器左上角测量）。

## 使用GetLastError处理错误

当Win32函数返回失败代码时，扩展错误信息可通过 `GetLastError` 获取——另一个kernel32函数：

```vb
Private Declare PtrSafe Function GetLastError Lib "kernel32" () As Long
```

::: info
在VBA兼容代码中，你也可以通过[**Err.LastDllError**](/official/Reference/VBA/Information/Err)读取上一个Win32错误，该值在任何DLL调用后自动填充。两者返回相同的值；`Err.LastDllError` 不需要额外的Declare。
:::

Timer处理程序的健壮版本：

```vb
Private Sub Timer1_Timer()
    Dim pt As POINT

    If GetCursorPos(pt) <> 0 Then
        lblCoords.Caption = "X: " & pt.x & "   Y: " & pt.y
    Else
        lblCoords.Caption = "GetCursorPos failed (error " & Err.LastDllError & ")"
    End If
End Sub
```

实际上 `GetCursorPos` 几乎不会失败；检查返回代码对于处理文件句柄、网络连接或安全上下文的函数更为重要，这些场景中失败是常见的。

## 32位与64位注意事项

对于 `GetCursorPos`，这种区别不会出现，因为其所有类型都是具体的32位整数。许多其他API函数使用指针大小的类型，需要小心处理：

| C类型 | twinBASIC类型 | 原因 |
|--------|----------------|-----|
| `HWND`, `HANDLE` | **LongPtr** | 窗口和对象句柄是指针大小 |
| `HINSTANCE`, `HMODULE` | **LongPtr** | 实例句柄是指针大小 |
| `LPCWSTR`, `LPWSTR` | **LongPtr** (配合StrPtr) 或 **String** | 字符串指针是指针大小 |
| `DWORD` | **Long** | 始终32位 |
| `BOOL` | **Long** | 始终32位 |
| `INT`, `int` | **Long** | 始终32位 |

使用 `Long` 作为句柄类型的Declare在32位模式下可以编译和运行，但在64位模式下会失败或崩溃，因为64位句柄无法放入4字节。对于句柄和指针参数，始终使用 `LongPtr`。

### 示例：GetForegroundWindow

```vb
Private Declare PtrSafe Function GetForegroundWindow Lib "user32" () As LongPtr

Private Sub ShowActiveWindow()
    Dim hwnd As LongPtr
    hwnd = GetForegroundWindow()
    MsgBox "Active window handle: " & hwnd
End Sub
```

返回类型为 `LongPtr`，因为窗口句柄是指针大小的。在32位构建中 `LongPtr` 为4字节；在64位构建中为8字节。相同的Declare和相同的调用代码在两种目标下都能工作，无需任何 `#If Win64` 条件编译。

## ANSI与Unicode函数变体

大多数Win32文本相关函数有两个变体：ANSI版本（后缀 `A`）接受 `LPSTR` / `char*` 字符串，Unicode版本（后缀 `W`）接受 `LPWSTR` / `wchar_t*` 字符串。twinBASIC字符串是Unicode（`BSTR`），因此始终优先使用 `W` 变体。

当无别名的名称会解析为ANSI变体时，在 `Alias` 子句中指定Unicode函数名：

```vb
' Without Alias, the linker resolves to the ANSI variant on some systems.
' Alias forces the Unicode variant explicitly:
Private Declare PtrSafe Function GetWindowText Lib "user32" _
    Alias "GetWindowTextW" _
    (ByVal hwnd As LongPtr, _
     ByVal lpString As Long, _
     ByVal nMaxCount As Long) As Long
```

对于twinBASIC可以直接传递**String**的函数，`DeclareWide` 是手动管理缓冲区指针的替代方案——参见[特性 → 增强的API声明](/official/Features/Advanced/API-Declarations)了解 `DeclareWide` 和 `CDecl` 扩展。

## 完整代码

光标跟踪窗体的完整模块：

```vb
Private Type POINT
    x As Long
    y As Long
End Type

Private Declare PtrSafe Function GetCursorPos Lib "user32" _
    (lpPoint As POINT) As Long

Private Sub Form_Load()
    Me.Caption = "Cursor position"
    lblCoords.Caption = "(waiting...)"
    Timer1.Interval = 100
    Timer1.Enabled = True
End Sub

Private Sub Timer1_Timer()
    Dim pt As POINT

    If GetCursorPos(pt) <> 0 Then
        lblCoords.Caption = "X: " & pt.x & "   Y: " & pt.y
    Else
        lblCoords.Caption = "GetCursorPos failed (error " & Err.LastDllError & ")"
    End If
End Sub
```

## 下一步

- **增强的API声明** —— `DeclareWide`、`CDecl`、`ByVal` UDT、可变参数：[特性 → 增强的API声明](/official/Features/Advanced/API-Declarations)
- **窗体基础** —— 标准VB控件和事件模型：[窗体基础](/official/Tutorials/Forms)
- **单元测试** —— 验证封装API调用的函数：[使用Assert编写单元测试](/official/Tutorials/Testing-with-Assert)