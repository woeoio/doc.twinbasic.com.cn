---
title: GetObject
parent: Interaction Module
permalink: /tB/Modules/Interaction/GetObject
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '380ac443-0135-4938-9aaa-2a936dff9fb9'
  PropagateID: '380ac443-0135-4938-9aaa-2a936dff9fb9'
  ReservedCode1: '3cfc9a68-7124-4446-a760-cce58cbf288d'
  ReservedCode2: '3cfc9a68-7124-4446-a760-cce58cbf288d'
---

# GetObject

返回对COM/Automation对象的引用——可以是已运行的实例，也可以是绑定到文件的实例。

语法：**GetObject(** [ *pathname* ] [ **,** *class* ] **)**

*pathname*
: *可选* **Variant**（**String**）。包含要检索对象的文件的完整路径和名称。如果省略*pathname*，则需要*class*。

*class*
: *可选* **Variant**（**String**）。要检索的对象的类，格式为*appname*.*objecttype*——例如`"Excel.Application"`。

要将返回的引用赋给变量，请使用**Set**：

```vb
Dim CADObject As Object
Set CADObject = GetObject("C:\CAD\SCHEMA.CAD")
```

使用*pathname*调用时，为该文件注册的应用程序被启动（如果尚未运行），并激活文件内的对象。

如果*pathname*为零长度字符串(`""`)，**GetObject**返回*class*指定类型的*新*实例。如果完全省略*pathname*，**GetObject**尝试附加到*class*指定类型的*当前运行中的*实例；如果没有这样的实例，则产生运行时错误。

某些应用程序支持激活文件的*部分*。在文件名后附加`!`和应用程序特定的标识符——例如CAD绘图的第三层：

```vb
Set LayerObject = GetObject("C:\CAD\SCHEMA.CAD!Layer3")
```

当未指定*class*时，操作系统根据提供的文件名确定要启动的应用程序和要激活的对象。但是，某些文件可能支持不止一种对象类。要明确指定，请提供两个参数：

```vb
Dim MyObject As Object
Set MyObject = GetObject("C:\Drawings\Sample.drw", "Figment.Drawing")
```

::: info
**GetObject**附加到对象的当前实例，或创建已加载文件的对象。当没有当前实例且不应以加载文件的方式启动对象时，[**CreateObject**](/official/Reference/VBA/Interaction/CreateObject)创建新实例。
:::

对于注册为单实例的对象，使用零长度字符串语法的**GetObject**始终返回同一实例，省略*pathname*的形式会导致错误。

### 示例

本示例使用**GetObject**从文件附加到Microsoft Excel **Worksheet**。第一次调用（不带*pathname*）尝试附加到正在运行的Excel；第二次调用打开文件。如果脚本启动时Excel尚未运行，则在最后通过**Application.Quit**关闭。

```vb
Dim MyXl As Object
Dim ExcelWasNotRunning As Boolean

On Error Resume Next
Set MyXl = GetObject(, "Excel.Application")
If Err.Number <> 0 Then ExcelWasNotRunning = True
Err.Clear
On Error GoTo 0

Set MyXl = GetObject("C:\Reports\MyTest.xls")
MyXl.Application.Visible = True
MyXl.Parent.Windows(1).Visible = True
' ... work with the workbook through MyXl ...

If ExcelWasNotRunning Then MyXl.Application.Quit
Set MyXl = Nothing
```

### 另请参阅

- [CreateObject](/official/Reference/VBA/Interaction/CreateObject)函数