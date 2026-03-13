---
title: 多线程
parent: 高级功能
nav_order: 1
permalink: /Features/Advanced/Multithreading
---

# 线程安全性 / 多线程支持

虽然还没有原生的语言语法（计划中），但您可以直接调用 `CreateThread` 而无需任何技巧。以前，VBx 和其他 BASIC 语言通常需要复杂的变通方法才能使用 `CreateThread`，除了某些专门的、极其简单的事情。在 twinBASIC 中，您可以调用它和所有其他线程 API，无需任何特殊步骤，当然除了像这样在低级进行线程化时需要小心管理。

## 示例

在新的标准 EXE 项目中，向您的窗体添加一个命令按钮和文本框：

```vb
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
    hr = WaitForSingleObject(hThreadNew, 30000&) '默认等待 30 秒。如果您不想超时，可以使用 INFINITE。
    Text1.Text = "等待结束代码 " & CStr(hr)
End Sub

Public Sub TestThread()
    MsgBox "你好线程"
End Sub
```

在单线程代码下，如果您在更新 `Text1.Text` 之前调用 `TestThread`，文本不会更新，直到您在消息框上单击确定。但在这里，消息框在单独的线程中启动，因此执行继续并更新文本，之后我们手动选择等待消息框线程退出。