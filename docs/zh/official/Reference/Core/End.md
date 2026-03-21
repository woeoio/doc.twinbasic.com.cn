---
title: End
parent: 语句
permalink: /zh/tB/Core/End
---

# End
{: .no_toc }

结束过程或块。

语法：

- **End**
  立即终止执行。本身从不要求，但可以放置在过程中的任何位置以结束代码执行，关闭用[**Open**](Open)语句打开的文件，并清除变量。

- **End Function**
  结束[**Function**](Function)语句所必需。

- **End If**
  结束块[**If...Then...Else**](If-Then-Else)语句所必需。

- **End Property**
  结束[**Property Get**](Property)、[**Property Let**](Property)和[**Property Set**](Property)过程所必需。

- **End Select**
  结束[**Select Case**](Select-Case)语句所必需。

- **End Sub**
  结束[**Sub**](Sub)语句所必需。

- **End Type**
  结束用户定义类型（UDT）定义（[**Type**](Type)语句）所必需。

- **End With**
  结束[**With**](With)语句所必需。

执行时，**End**语句重置所有模块级变量和所有模块中的所有静态局部变量。要保留这些变量的值，请改用[**Stop**](Stop)语句。然后您可以在保留这些变量值的同时恢复执行。

> [!NOTE]
>
> **End**语句突然停止代码执行，而不调用Unload、QueryUnload或Terminate事件，或任何其他Visual Basic代码。您在窗体和类模块的Unload、QueryUnload和Terminate事件中放置的代码不会执行。从类模块创建的对象被销毁，使用**Open**语句打开的文件被关闭，程序使用的内存被释放。其他程序持有的对象引用变为无效。

**End**语句提供了一种强制程序停止的方法。对于Visual Basic程序的正常终止，您应该卸载所有窗体。当没有其他程序持有对从您的公共类模块创建的对象的引用且没有代码执行时，您的程序立即关闭。

### 示例

此示例使用**End**语句在用户输入无效密码时结束代码执行。

```vb
Sub Form_Load
  Dim Password, Pword
  PassWord = "Swordfish"
  Pword = InputBox("输入您的密码")
  If Pword <> PassWord Then
    MsgBox "抱歉，密码不正确"
    End
  End If
End Sub
```