---
title: Error
parent: Statements
permalink: /tB/Core/Error
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a36673e9-0f85-43e7-81d2-17a61b49980d'
  PropagateID: 'a36673e9-0f85-43e7-81d2-17a61b49980d'
  ReservedCode1: '2aa658c5-7b87-4f35-b65b-531a23e0ac77'
  ReservedCode2: '2aa658c5-7b87-4f35-b65b-531a23e0ac77'
---

# Error

模拟错误的发生。

语法：**Error** *errornumber*

*errornumber*
: 可以是任何有效的错误号。

**Error** 语句为向后兼容而受支持。在新代码中，特别是创建对象时，请使用 **Err** 对象的 **Raise** 方法生成运行时错误。

如果定义了 *errornumber*，**Error** 语句在 **Err** 对象的属性被赋予以下默认值后调用错误处理程序：

| 属性         | 值                                                        |
| :--------------- | :----------------------------------------------------------- |
| **Number**       | 作为 **Error** 语句参数指定的值。可以是任何有效的错误号。 |
| **Source**       | 当前Visual Basic项目的名称。 |
| **Description**  | 与指定 **Number** 的 **Error** 函数返回值对应的字符串表达式（如果该字符串存在）。如果字符串不存在，**Description** 包含零长度字符串("")。 |
| **HelpFile**     | 适当的Visual Basic帮助文件的完整驱动器、路径和文件名。 |
| **HelpContext**  | 与 **Number** 属性对应的错误在适当的Visual Basic帮助文件中的上下文ID。 |
| **LastDLLError** | 零。                                                        |

如果不存在错误处理程序或未启用任何错误处理程序，则会从 **Err** 对象属性创建并显示错误消息。

### 示例

本示例使用 **Error** 语句模拟错误号11。

```vb
On Error Resume Next ' Defer error handling. 
Error 11 ' Simulate the "Division by zero" error. 
```