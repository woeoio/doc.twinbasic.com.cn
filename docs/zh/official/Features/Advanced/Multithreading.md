---
title: 多线程
parent: Advanced Features
nav_order: 1
permalink: /Features/Advanced/Multithreading
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'aacf24b6-1466-4a47-8603-46669c1876b6'
  PropagateID: 'aacf24b6-1466-4a47-8603-46669c1876b6'
  ReservedCode1: 'aecda5c0-ae5a-43fd-a156-90ee05ed8816'
  ReservedCode2: 'aecda5c0-ae5a-43fd-a156-90ee05ed8816'
---

# 线程安全 / 多线程支持

虽然目前还没有原生语言语法（计划中），但你可以直接调用 `CreateThread` 而无需任何变通方法。以前，VBx 和其他 BASIC 语言通常需要复杂的变通方法才能使用 `CreateThread` 来做一些非常简单的事情之外的事情。在 twinBASIC 中，你可以直接调用它以及所有其他线程 API，除了当然需要谨慎管理这种底层的线程操作外，无需任何特殊步骤。

## 示例

在新的标准 EXE 项目中，向窗体添加一个 CommandButton 和一个 TextBox：

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
    Text1.Text = "Thread " & lCurTID & " is waiting on thread " & lTID
    Dim hr As Long
    hr = WaitForSingleObject(hThreadNew, 30000&) 'Wait 30s as a default. You can use INFINITE instead if you never want to time out.
    Text1.Text = "Wait end code " & CStr(hr)
End Sub

Public Sub TestThread()
    MsgBox "Hello thread"
End Sub
```

在单线程代码下，如果你在更新 `Text1.Text` 之前调用 `TestThread`，文本在你点击消息框的确定按钮之前不会更新。但在这里，消息框在单独的线程中启动，所以执行继续并更新了文本，之后我们手动选择等待消息框线程退出。