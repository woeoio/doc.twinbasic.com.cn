---
title: HelpFile
parent: ErrObject
permalink: /tB/Modules/ErrObject/HelpFile
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '569cadaa-7cfd-4992-a01e-a5d12238e9c9'
  PropagateID: '569cadaa-7cfd-4992-a01e-a5d12238e9c9'
  ReservedCode1: '0d6f3873-406e-48be-8907-8c779fae03ce'
  ReservedCode2: '0d6f3873-406e-48be-8907-8c779fae03ce'
---

# HelpFile

返回或设置一个 **String**，包含与活动错误关联的帮助文件的完全限定路径。可读/写。

语法：
- **Err**.**HelpFile**
- **Err**.**HelpFile** **=** *helpFilePath*

*helpFilePath*
: 包含要与活动错误关联的帮助文件（通常为 `.chm` 文件或 URL）完全限定路径的 **String**。

如果在 **HelpFile** 中指定了帮助文件，当用户在错误消息对话框中按**帮助**按钮（或 **F1**）时，将自动调用该文件。如果 [**HelpContext**](/official/Reference/VBA/ErrObject/HelpContext) 属性包含指定文件的有效上下文 ID，则自动显示该主题。

编写处理典型错误的例程。使用对象编程时，对象的帮助文件可以在错误不可恢复时改善错误处理或向用户显示有意义的消息。

### 示例

此示例使用 **Err** 对象的 **HelpFile** 属性启动帮助系统。

```vb
Dim msg As String
Err.Clear
On Error Resume Next            ' Suppress errors for demonstration purposes.
Err.Raise 6                     ' Generate "Overflow" error.
msg = "Press F1 or HELP to see " & Err.HelpFile & _
      " topic for this error."
MsgBox msg, , "Error: " & Err.Description, Err.HelpFile
```

### 另请参阅

- [HelpContext](/official/Reference/VBA/ErrObject/HelpContext) 属性
- [Number](/official/Reference/VBA/ErrObject/Number) 属性
- [Raise](/official/Reference/VBA/ErrObject/Raise) 方法