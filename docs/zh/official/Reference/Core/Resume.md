---
title: Resume
parent: Statements
permalink: /tB/Core/Resume
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0455db5d-5653-4eab-ac57-b6165f6d6b6c'
  PropagateID: '0455db5d-5653-4eab-ac57-b6165f6d6b6c'
  ReservedCode1: 'd3f72c4d-bf9a-4c6b-a11e-5781d144c598'
  ReservedCode2: 'd3f72c4d-bf9a-4c6b-a11e-5781d144c598'
---

# Resume

在错误处理例程完成后恢复执行。

语法：
- > **Resume** [ **0** ]
- > **Resume Next**
- > **Resume** *line*

**Resume**
: 如果错误发生在与错误处理程序相同的过程中，执行从导致错误的语句恢复。如果错误发生在被调用过程中，执行从最后调用包含错误处理例程过程的语句恢复。**Resume**和**Resume 0**等效。

**Resume Next**
: 如果错误发生在与错误处理程序相同的过程中，执行从导致错误的语句之后紧接着的语句恢复。如果错误发生在被调用过程中，执行从最后调用包含错误处理例程过程（或[**On Error Resume Next**](/official/Reference/Core/On-Error)语句）的语句之后紧接着的语句恢复。

**Resume** *line*
: 执行在指定的*line*处恢复。*line*参数是行标签或行号，必须与错误处理程序在同一过程中。

在错误处理例程以外的任何地方使用**Resume**语句会引发错误。

### 示例

本示例使用**Resume**语句结束过程中的错误处理，然后从导致错误的语句恢复执行。错误号55用于演示**Resume**语句的使用。

```vb
Sub ResumeStatementDemo()
    On Error GoTo ErrorHandler ' Enable error-handling routine.
    Open "TESTFILE" For Output As #1 ' Open file for output.
    Kill "TESTFILE" ' Attempt to delete open file.
    Exit Sub ' Exit Sub to avoid error handler.
ErrorHandler: ' Error-handling routine.
    Select Case Err.Number ' Evaluate error number.
        Case 55 ' "File already open" error.
            Close #1 ' Close open file.
        Case Else
            ' Handle other situations here....
    End Select
    Resume ' Resume execution at same line that caused the error.
End Sub
```

### 另请参阅

- [**On Error** 语句](/official/Reference/Core/On-Error)
- [**Error** 语句](/official/Reference/Core/Error)
- [**GoTo** 语句](/official/Reference/Core/GoTo)