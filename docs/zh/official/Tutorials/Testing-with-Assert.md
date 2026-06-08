---
title: "使用Assert编写单元测试"
parent: Tutorials
permalink: /Tutorials/Testing-with-Assert
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4e5f8d17-4a09-44e3-8c84-2cba19f50848'
  PropagateID: '4e5f8d17-4a09-44e3-8c84-2cba19f50848'
  ReservedCode1: '41fe337d-0805-4d88-8e41-4e067970bc6a'
  ReservedCode2: '41fe337d-0805-4d88-8e41-4e067970bc6a'
---

# 使用Assert编写单元测试

本教程展示如何编写一个小函数、使用**Assert**包为其添加测试，并从IDE内部运行这些测试。


## Assert包

[Assert包](/official/Reference/Assert/)提供三个模块——[**Exact**](/official/Reference/Assert/Exact)、[**Strict**](/official/Reference/Assert/Strict)和[**Permissive**](/official/Reference/Assert/Permissive)——它们共享相同的十五成员API：

| 模块 | 字符串比较 | 数值数据类型必须匹配 |
|--------|-------------------|-----------------------------|
| **Exact** | 区分大小写 | 是——`5` 和 `5.0` 不相等 |
| **Strict** | 区分大小写 | 否 |
| **Permissive** | 不区分大小写 | 否 |

这三个模块在发布构建中会被编译掉：每个成员都标记了 `[DebugOnly(True)]`，因此断言调用在生产EXE中零运行时开销。测试与生产代码位于同一项目中，并在IDE中由完整调试器运行。

最常用的成员：

- `Exact.AreEqual expected, actual` —— 如果两个值不同则失败
- `Exact.IsTrue condition` —— 如果条件为 `False` 则失败
- `Exact.IsFalse condition` —— 如果条件为 `True` 则失败
- `Exact.Fail message` —— 无条件记录失败
- `Exact.Succeed` —— 显式记录通过（在条件路径末尾很有用）

每个失败的断言记录源位置、期望值和实际值以及可选的消息字符串。结果显示在**调试控制台**面板中。

## 添加包

打开**项目 → 引用**（Ctrl+T）→ **可用包**，勾选**Assert**。点击**确定**。三个模块（`Exact`、`Strict`、`Permissive`）现在在作用域中，无需任何 `Imports` 语句。

## 被测试的函数

向项目添加一个标准**模块**（在项目资源管理器中右键点击项目，然后**添加 → 模块**）。命名为 `StringUtils`。添加以下函数：

```vb
' Pads s on the left with padChar until it reaches totalWidth characters.
' If s is already at or beyond totalWidth, it is returned unchanged.
Public Function PadLeft(ByVal s As String, _
                        ByVal totalWidth As Long, _
                        Optional ByVal padChar As String = " ") As String
    If Len(s) >= totalWidth Then
        PadLeft = s
    Else
        PadLeft = String(totalWidth - Len(s), Left$(padChar, 1)) & s
    End If
End Function
```

`PadLeft` 是一个很好的测试对象：它有明确的规格说明、带有默认值的可选参数，以及多个不同的边界情况。

## 编写测试

添加第二个模块 `TestStringUtils`。每个测试是一个 `Public Sub`，测试函数的一个方面。保持每个Sub简短——理想情况下每个Sub一个逻辑场景，名称描述其检查内容。

```vb
Public Sub TestPadLeft_Normal()
    ' Three spaces prefix "hi" to reach width 5
    Exact.AreEqual "   hi", PadLeft("hi", 5)
End Sub

Public Sub TestPadLeft_CustomPadChar()
    ' Zero-pad to width 5
    Exact.AreEqual "00042", PadLeft("42", 5, "0")
End Sub

Public Sub TestPadLeft_AtWidth()
    ' Already at width -- no change
    Exact.AreEqual "hello", PadLeft("hello", 5)
End Sub

Public Sub TestPadLeft_ExceedsWidth()
    ' Already longer than width -- not truncated
    Exact.AreEqual "toolong", PadLeft("toolong", 5)
End Sub

Public Sub TestPadLeft_EmptyString()
    ' Empty input -- result is all padding
    Exact.AreEqual "   ", PadLeft("", 3)
End Sub

Public Sub TestPadLeft_SingleChar()
    ' Width of 1, input already 1 char -- no change
    Exact.AreEqual "x", PadLeft("x", 1)
End Sub
```

这些测试覆盖了：正常情况、自定义填充字符、边界情况、超出边界情况、空输入和最小输入。

## 运行测试

有两种方式运行测试Sub：

1. **CodeLens** —— 将光标放在测试Sub内的任何位置。`Sub` 行上方的CodeLens条显示一个 `▶ Run` 按钮。点击它运行该Sub。结果立即显示在**调试控制台**中。

2. **从Sub内部按F5** —— 将光标放在Sub内并按**F5**。twinBASIC运行该过程，并在其返回或断言失败时停止。

要批量运行所有测试，添加一个运行器Sub按顺序调用每个测试：

```vb
Public Sub RunAllTests()
    TestPadLeft_Normal
    TestPadLeft_CustomPadChar
    TestPadLeft_AtWidth
    TestPadLeft_ExceedsWidth
    TestPadLeft_EmptyString
    TestPadLeft_SingleChar
    Debug.Print "All PadLeft tests passed."
End Sub
```

将光标放在 `RunAllTests` 内并按**F5**（或点击CodeLens条中的**▶ Run**）。如果任何断言失败，执行在失败行停止，调试控制台显示哪个断言失败、其期望值和实际值以及源位置。

## 测试错误路径

有时函数应该对错误输入引发错误。使用 `On Error Resume Next` 和 `Err.Number` 进行测试：

```vb
Public Sub TestPadLeft_ZeroWidth()
    ' A width of 0 is technically valid -- the string is returned unchanged
    ' if it is already zero-length, and unchanged otherwise.
    Exact.AreEqual "hi", PadLeft("hi", 0)
    Exact.AreEqual "", PadLeft("", 0)
End Sub
```

如果你期望函数引发错误：

```vb
Public Sub TestSomethingThatShouldRaise()
    On Error Resume Next
    SomeFunctionThatRaises 0    ' call that should fail
    If Err.Number = 0 Then
        Exact.Fail "expected an error, but none was raised"
    End If
    On Error GoTo 0
End Sub
```

## 选择正确的模块

默认使用**Exact**——其最严格的比较语义防止测试因错误原因而通过。当被测试代码有意不区分大小写，或比较的值无论数值类型如何都应相等时，切换到**Strict**或**Permissive**：

```vb
' Exact would fail because "hello" ≠ "Hello" (case differs)
Strict.AreEqual "HELLO", LCase$("HELLO")  ' fails -- "hello" ≠ "HELLO"
Permissive.AreEqual "HELLO", LCase$("HELLO")  ' passes -- case-insensitive
```

三个模块的完整文档见：

- [Exact模块](/official/Reference/Assert/Exact) —— 最严格的语义
- [Strict模块](/official/Reference/Assert/Strict) —— 区分大小写字符串，类型宽松数值
- [Permissive模块](/official/Reference/Assert/Permissive) —— 不区分大小写字符串，类型宽松数值

## 测试组织

随着项目增长，将测试保持在它们所测试的代码附近。一种常见约定：

- 每个关注点一个生产模块：`StringUtils`、`DateUtils`、`FileHelpers`、……
- 每个生产模块一个测试模块：`TestStringUtils`、`TestDateUtils`、`TestFileHelpers`、……
- 在 `TestRunner` 模块中有一个顶层 `RunAll` Sub，调用每个模块的运行器

由于所有测试Sub在发布构建中会被编译掉（`[DebugOnly(True)]`），这种组织不会给发布可执行文件增加任何开销。

## 下一步

- **Assert包参考** —— 所有十五个成员的详细说明：[Assert包](/official/Reference/Assert/)
- **窗体基础** —— 构建窗体以可视化地承载小型测试工具：[窗体基础](/official/Tutorials/Forms)
- **Windows API** —— 编写和测试封装Declare的函数：[调用Windows API](/official/Tutorials/Windows-API)