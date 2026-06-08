---
title: Source
parent: ErrObject
permalink: /tB/Modules/ErrObject/Source
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9ddd9b48-de34-4572-b1df-8d80e1a8aafd'
  PropagateID: '9ddd9b48-de34-4572-b1df-8d80e1a8aafd'
  ReservedCode1: '5e5625f1-671f-4fe8-a090-62bf0e22306d'
  ReservedCode2: '5e5625f1-671f-4fe8-a090-62bf0e22306d'
---

# Source

返回或设置一个 **String**，指定最初生成错误的对象或应用程序的名称。可读/写。

语法：
- **Err**.**Source**
- **Err**.**Source** **=** *errorSource*

*errorSource*
: 标识错误来源的 **String**。读取时，**Source** 返回活动错误的来源，如果没有活动错误则返回零长度字符串。

**Source** 属性保存表示生成错误的对象的字符串；该表达式通常是对象的类名或编程 ID。

当处理代码无法处理被访问对象中生成的错误时，使用 **Source** 提供信息。例如，当对自动化服务器的调用引发 `Division by zero` 错误时，服务器将其错误代码设置为 **Err.Number**，并将其编程 ID 设置为 **Source**。

从用户代码生成错误时，**Source** 是应用程序的编程 ID。对于类模块，**Source** 应包含 *project.class* 格式的名称。

当发生意外错误时，**Source** 属性将自动填充。对于标准模块中的错误，**Source** 包含项目名称。对于类模块中的错误，**Source** 包含 *project.class* 格式的名称。

### 示例

此示例将自动化对象的编程 ID 赋给变量 `myObjectID`，然后在通过 [**Raise**](/official/Reference/VBA/ErrObject/Raise) 方法生成错误时将其赋给 **Err** 对象的 **Source** 属性。

处理错误时，不要依赖 **Source** 属性（或除 [**Number**](/official/Reference/VBA/ErrObject/Number) 之外的任何 **Err** 属性）来控制程序流程。除 **Number** 之外的其他属性的预期用途是在无法处理错误时向最终用户显示详细信息。

```vb
Dim myObjectID As String, myHelpFile As String, myHelpContext As Long
myObjectID = "MyApp.MyClass"
Err.Raise Number:=vbObjectError + 894, Source:=myObjectID, _
          Description:="Was not able to complete your task", _
          HelpFile:=myHelpFile, HelpContext:=myHelpContext
```

### 另请参阅

- [Number](/official/Reference/VBA/ErrObject/Number) 属性
- [Description](/official/Reference/VBA/ErrObject/Description) 属性
- [Raise](/official/Reference/VBA/ErrObject/Raise) 方法
- [Clear](/official/Reference/VBA/ErrObject/Clear) 方法