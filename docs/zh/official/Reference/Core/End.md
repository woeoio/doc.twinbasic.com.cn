---
title: End
parent: Statements
permalink: /tB/Core/End
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '92bc5f20-f9b9-4236-a60e-b706495ca1b0'
  PropagateID: '92bc5f20-f9b9-4236-a60e-b706495ca1b0'
  ReservedCode1: '5e5f9bf0-5986-4fa1-91e5-2402ccd9c07e'
  ReservedCode2: '5e5f9bf0-5986-4fa1-91e5-2402ccd9c07e'
---

# End

结束过程或块。

语法：

- **End**  
  立即终止执行。本身从不是必需的，但可以放在过程中任何位置以结束代码执行、关闭用 [**Open**](/official/Reference/Core/Open) 语句打开的文件并清除变量。

- **End Function**  
  结束 [**Function**](/official/Reference/Core/Function) 语句所必需。
  
- **End If**  
  结束块 [**If...Then...Else**](/official/Reference/Core/If-Then-Else) 语句所必需。
  
- **End Property**  
  结束 [**Property Get**](/official/Reference/Core/Property)、[**Property Let**](/official/Reference/Core/Property) 和 [**Property Set**](/official/Reference/Core/Property) 过程所必需。
  
- **End Select**  
  结束 [**Select Case**](/official/Reference/Core/Select-Case) 语句所必需。

- **End Sub**
  结束 [**Sub**](/official/Reference/Core/Sub) 语句所必需。

- **End Type**
  结束用户自定义类型(UDT)定义（[**Type**](/official/Reference/Core/Type) 语句）所必需。

- **End With**
  结束 [**With**](/official/Reference/Core/With) 语句所必需。

执行时，**End** 语句重置所有模块中所有模块级变量和所有静态局部变量。要保留这些变量的值，请改用 [**Stop**](/official/Reference/Core/Stop) 语句——然后可以在保留这些变量值的情况下恢复执行。

::: important

**End** 语句突然停止代码执行，不调用Unload、QueryUnload或Terminate事件，也不调用任何其他Visual Basic代码。窗体和类模块的Unload、QueryUnload和Terminate事件中的代码不会被执行。从类模块创建的对象被销毁，使用 **Open** 语句打开的文件被关闭，程序使用的内存被释放。其他程序持有的对象引用变为无效。
:::

**End** 语句提供了一种强制程序停止的方式。对于Visual Basic程序的正常终止，应卸载所有窗体。当没有其他程序持有对公共类模块创建的对象的引用且没有代码在执行时，程序关闭。

### 示例

本示例使用 **End** 语句在用户输入无效密码时结束代码执行。

```vb
Sub Form_Load 
  Dim Password, Pword 
  PassWord = "Swordfish" 
  Pword = InputBox("Type in your password") 
  If Pword <> PassWord Then 
    MsgBox "Sorry, incorrect password" 
    End
  End If
End Sub
```