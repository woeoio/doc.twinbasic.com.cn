---
title: Command
parent: Interaction Module
permalink: /tB/Modules/Interaction/Command
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '26e8d13d-d85d-4276-89a0-26c5a7b84a83'
  PropagateID: '26e8d13d-d85d-4276-89a0-26c5a7b84a83'
  ReservedCode1: 'bb70931b-b604-4c95-a161-5c73d17de204'
  ReservedCode2: 'bb70931b-b604-4c95-a161-5c73d17de204'
---

# Command, Command$

返回用于启动程序的命令行参数部分。

语法：

- **Command$()**
- **Command()**

带`$`后缀的形式返回**String**；不带后缀的形式返回**Variant**（**String**）。

对于编译为可执行文件的应用程序，**Command**返回命令行中应用程序名称之后出现的任何参数。例如，命令行：

```
MyApp /switch arg1 arg2
```

**Command**返回`"/switch arg1 arg2"`。

### 示例

本示例使用**Command**检索命令行参数并将其拆分为数组。

```vb
Function GetCommandLine(Optional MaxArgs As Variant) As Variant
    Dim Ch As String, CmdLine As String, CmdLnLen As Long
    Dim InArg As Boolean, I As Long, NumArgs As Long

    If IsMissing(MaxArgs) Then MaxArgs = 10
    ReDim ArgArray(MaxArgs)

    NumArgs = 0
    InArg = False
    CmdLine = Command()
    CmdLnLen = Len(CmdLine)

    For I = 1 To CmdLnLen
        Ch = Mid(CmdLine, I, 1)
        If Ch <> " " And Ch <> vbTab Then
            If Not InArg Then
                If NumArgs = MaxArgs Then Exit For
                NumArgs = NumArgs + 1
                InArg = True
            End If
            ArgArray(NumArgs) = ArgArray(NumArgs) & Ch
        Else
            InArg = False
        End If
    Next I

    ReDim Preserve ArgArray(NumArgs)
    GetCommandLine = ArgArray()
End Function
```

### 另请参阅

- [Shell](/official/Reference/VBA/Interaction/Shell)函数
- [Environ](/official/Reference/VBA/Interaction/Environ)函数