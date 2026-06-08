---
title: Raise
parent: ErrObject
permalink: /tB/Modules/ErrObject/Raise
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7e099fc2-30a0-4e9d-ad81-4fafeaaff58e'
  PropagateID: '7e099fc2-30a0-4e9d-ad81-4fafeaaff58e'
  ReservedCode1: 'b289d3b5-2651-40fc-b7ef-75588abc3860'
  ReservedCode2: 'b289d3b5-2651-40fc-b7ef-75588abc3860'
---

# Raise

生成运行时错误。

语法：**Err**.**Raise** *number* [ **,** *source* [ **,** *description* [ **,** *helpfile* [ **,** *helpcontext* ] ] ] ]

*number*
: *必需* 标识错误性质的 **Long**。内置错误的范围为 0--65535；0--512 范围保留给系统错误，513--65535 可用于用户定义的错误。从类模块引发用户定义的错误时，将选定编号与 [**vbObjectError**](/official/Reference/VBA/Constants/#vbObjectError) 常量相加——例如，`vbObjectError + 513`。

*source*
: *可选* 命名生成错误的对象或应用程序的 **String**。为对象设置 [**Source**](/official/Reference/VBA/ErrObject/Source) 属性时，使用 *project.class* 格式。如果未指定 *source*，则使用当前 twinBASIC 项目的编程 ID。

*description*
: *可选* 描述错误的 **String**。如果未指定，则检查 *number* 的值；如果可以映射到内置运行时错误代码，则使用 [**Error**](/official/Reference/VBA/Conversion/Error) 函数将返回的字符串作为 [**Description**](/official/Reference/VBA/ErrObject/Description)。如果没有匹配的内置错误，则使用消息 `Application-defined or object-defined error`。

*helpfile*
: *可选* 可找到此错误帮助的帮助文件的完全限定路径。如果未指定，则清除 [**HelpFile**](/official/Reference/VBA/ErrObject/HelpFile) 属性。

*helpcontext*
: *可选* 标识 *helpfile* 中提供错误帮助的主题的上下文 ID。如果省略，则清除 [**HelpContext**](/official/Reference/VBA/ErrObject/HelpContext) 属性。

除 *number* 外，所有参数均为可选。当调用 **Raise** 时未指定某些参数，且 **Err** 对象的相应属性仍保留先前错误的值时，这些值将作为当前错误的值。

生成运行时错误时，**Raise** 优于 [**Error**](/official/Reference/Core/Error) 语句，特别是在类模块中：**Err** 对象保存的信息比 **Error** 语句能提供的更丰富。使用 **Raise** 可以在 [**Source**](/official/Reference/VBA/ErrObject/Source) 属性中指定生成错误的来源，可以通过 [**HelpFile**](/official/Reference/VBA/ErrObject/HelpFile) 和 [**HelpContext**](/official/Reference/VBA/ErrObject/HelpContext) 引用错误的联机帮助等。

### 示例

此示例使用 **Err** 对象的 **Raise** 方法从编程 ID 为 `MyProj.MyObject` 的自动化对象内部生成错误。

```vb
Const MyContextID As Long = 1010407    ' Define a constant for the contextID.

Function TestName(ByVal CurrentName As String, ByVal NewName As String)
    If InStr(NewName, "bob") Then    ' Test the validity of NewName.
        Err.Raise vbObjectError + 513, "MyProj.MyObject", _
                  "No ""bob"" allowed in your name", _
                  "C:\MyProj\MyHelp.chm", MyContextID
    End If
End Function
```

### 另请参阅

- [Number](/official/Reference/VBA/ErrObject/Number) 属性
- [Source](/official/Reference/VBA/ErrObject/Source) 属性
- [Description](/official/Reference/VBA/ErrObject/Description) 属性
- [HelpFile](/official/Reference/VBA/ErrObject/HelpFile) 属性
- [HelpContext](/official/Reference/VBA/ErrObject/HelpContext) 属性
- [Clear](/official/Reference/VBA/ErrObject/Clear) 方法
- [Error](/official/Reference/Core/Error) 语句