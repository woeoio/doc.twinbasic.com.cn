---
title: HelpContext
parent: ErrObject
permalink: /tB/Modules/ErrObject/HelpContext
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8e6bda1c-746e-4d34-8f03-d31516d74048'
  PropagateID: '8e6bda1c-746e-4d34-8f03-d31516d74048'
  ReservedCode1: 'e6c15235-9180-4ed6-ae58-f077feb7ce69'
  ReservedCode2: 'e6c15235-9180-4ed6-ae58-f077feb7ce69'
---

# HelpContext

返回或设置一个 **Long**，包含与活动错误关联的帮助文件中主题的上下文 ID。可读/写。

语法：
- **Err**.**HelpContext**
- **Err**.**HelpContext** **=** *contextID*

*contextID*
: 指定相应帮助主题上下文 ID 的 **Long**。当没有特定主题适用时设置为 **0**。

**HelpContext** 属性用于自动显示 [**HelpFile**](/official/Reference/VBA/ErrObject/HelpFile) 属性中指定的帮助主题。

如果 **HelpFile** 和 **HelpContext** 均为空，则检查 [**Number**](/official/Reference/VBA/ErrObject/Number) 的值。如果 **Number** 对应于内置运行时错误，则使用该错误的帮助上下文 ID。如果 **Number** 值不对应于内置错误，则显示帮助文件的内容页。

编写处理典型错误的例程。使用对象编程时，对象的帮助文件可以在错误不可恢复时改善错误处理或向用户显示有意义的消息。

### 示例

此示例使用 **Err** 对象的 **HelpContext** 属性显示 `Overflow` 错误的帮助主题。

```vb
Dim msg As String
Err.Clear
On Error Resume Next
Err.Raise 6                     ' Generate "Overflow" error.
If Err.Number <> 0 Then
    msg = "Press F1 or HELP to see " & Err.HelpFile & " topic for" & _
          " the following HelpContext: " & Err.HelpContext
    MsgBox msg, , "Error: " & Err.Description, Err.HelpFile, _
           Err.HelpContext
End If
```

### 另请参阅

- [HelpFile](/official/Reference/VBA/ErrObject/HelpFile) 属性
- [Number](/official/Reference/VBA/ErrObject/Number) 属性
- [Raise](/official/Reference/VBA/ErrObject/Raise) 方法