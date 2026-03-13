---
title: Error
parent: 语句
permalink: /zh/tB/Core/Error
---

# Error
{: .no_toc }

模拟错误的发生。

语法：**Error** *错误号*

*错误号*
: 可以是任何有效的错误号。

**Error**语句支持向后兼容。在新代码中，特别是创建对象时，使用**Err**对象的**Raise**方法生成运行时错误。

如果定义了*错误号*，**Error**语句在**Err**对象的属性分配以下默认值后调用错误处理程序：

| 属性 | 值 |
| :--------------- | :----------------------------------------------------------- |
| **Number** | 指定为**Error**语句参数的数值。可以是任何有效的错误号。 |
| **Source** | 当前Visual Basic项目的名称。 |
| **Description** | 对应于指定**Number**的**Error**函数返回值的字符串表达式（如果此字符串存在）。如果字符串不存在，**Description**包含零长度字符串（""）。 |
| **HelpFile** | 适当的Visual Basic帮助文件的完全限定驱动器、路径和文件名。 |
| **HelpContext** | 对应于**Number**属性的错误的适当Visual Basic帮助文件上下文ID。 |
| **LastDLLError** | 零。 |

如果不存在错误处理程序或未启用错误处理程序，则从**Err**对象属性创建并显示错误消息。

### 示例

此示例使用**Error**语句模拟错误号11。

```vb
On Error Resume Next ' 延迟错误处理。
Error 11 ' 模拟"除零"错误。
```