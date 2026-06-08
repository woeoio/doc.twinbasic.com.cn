---
title: Number
parent: ErrObject
permalink: /tB/Modules/ErrObject/Number
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7e92073f-5dba-49a3-9705-c78c6d58a057'
  PropagateID: '7e92073f-5dba-49a3-9705-c78c6d58a057'
  ReservedCode1: '12226221-a0ce-43d2-9448-e08b0cffe2e4'
  ReservedCode2: '12226221-a0ce-43d2-9448-e08b0cffe2e4'
---

# Number

返回或设置一个 **Long** 值，指定一个错误。**Number** 是 **Err** 对象的默认成员，因此单独引用 **Err** 等效于 **Err.Number**。可读/写。

语法：
- **Err**.**Number**
- **Err**.**Number** **=** *errorNumber*

*errorNumber*
: 要赋给 **Err** 对象的 **Long** 错误代码。读取时，**Number** 返回当前错误代码，如果没有活动错误则返回 **0**。

从对象返回用户定义的错误时，通过将选定的错误代码与 [**vbObjectError**](/official/Reference/VBA/Constants/#vbObjectError) 常量相加来设置 **Err.Number**。例如，以下代码返回 1051 作为错误代码：

```vb
Err.Raise Number:=vbObjectError + 1051, Source:="SomeClass"
```

### 示例

第一个示例说明 **Number** 属性在错误处理例程中的典型用法。

```vb
Sub Demo()
    On Error GoTo Handler

    Dim x As Double, y As Double
    x = 1 / y                ' Create division-by-zero error.
    Exit Sub
Handler:
    MsgBox Err.Number
    MsgBox Err.Description
    ' Check for division-by-zero error.
    If Err.Number = 11 Then
        y = y + 1
    End If
    Resume
End Sub
```

第二个示例检查 **Err** 对象的 **Number** 属性，以确定自动化对象返回的错误是由该对象定义的，还是映射到了内置错误。

常量 **vbObjectError** 是一个非常大的负数，对象将其加到自己的错误代码上以指示该错误是服务器定义的；从 **Err.Number** 中减去它即可剥离该偏移。如果错误是对象定义的，基础数字会留在 `myError` 中，并连同错误的原始来源一起显示在消息框中。如果 **Err.Number** 表示内置错误，则显示内置错误号。

```vb
Dim myError As Long, msg As String
' Strip off the constant added by the object to indicate one of its own errors.
myError = Err.Number - vbObjectError
' If you subtract vbObjectError and the number is still in the range 0-65535,
' it is an object-defined error code.
If myError > 0 And myError < 65535 Then
    msg = "The object you accessed assigned this number to the error: " _
        & myError & ". The originator of the error was: " _
        & Err.Source & ". Press F1 to see the originator's Help topic."
Else
    msg = "This error (# " & Err.Number & ") is a built-in error number." _
        & " Press the Help button or F1 for the Help topic for this error."
End If
MsgBox msg, , "Object Error", Err.HelpFile, Err.HelpContext
```

### 另请参阅

- [Description](/official/Reference/VBA/ErrObject/Description) 属性
- [Source](/official/Reference/VBA/ErrObject/Source) 属性
- [Raise](/official/Reference/VBA/ErrObject/Raise) 方法
- [Clear](/official/Reference/VBA/ErrObject/Clear) 方法