---
title: Call
parent: 语句
permalink: /zh/tB/Core/Call
---

# Call

{: no_toc }

将控制权转移给**Sub**[过程](../Gloss#procedure)、**Function**过程或动态链接库（DLL）过程。

语法：

- **Call** *名称* **(** [ *参数列表* ] **)**
  当指定**Call**关键字时，*参数列表*必须用括号括起来。

- *名称* **(** [ *参数列表* ] **)**
  没有**Call**关键字时，*参数列表*可以选择性地用括号括起来，

- *名称* [ *参数列表* ]

*名称*
: 要调用的过程名称

*参数列表*
: *可选* 要传递给过程的变量、数组或表达式的逗号分隔列表。*参数列表*的组件可能包括**ByVal**或**ByRef**关键字来描述参数传递给被调用过程的方式。

调用过程时不要求使用**Call**关键字。但是，如果使用**Call**关键字调用需要参数的过程，*参数列表*必须用括号括起来。如果省略**Call**关键字，还必须省略*参数列表*周围的括号。如果使用任一**Call**语法调用任何内置或用户定义函数，函数的返回值将被丢弃。

要传递整个数组给过程，请使用数组名称后跟空括号。

### 示例

此示例说明如何使用**Call**语句将控制权转移给**Sub**过程、内置函数和动态链接库（DLL）过程。

``` vb
' 调用Sub过程。
Call PrintToDebugWindow("Hello World")
' 上述语句导致控制权传递给以下
' Sub过程。
Sub PrintToDebugWindow(AnyString)
    Debug.Print AnyString    ' 打印到立即窗口。
End Sub

' 调用内置函数。函数的返回值
' 被丢弃。
Call Shell(AppName, 1)    ' AppName包含
        ' 可执行文件的路径。

' 调用Microsoft Windows DLL过程。Declare语句在类模块中
' 必须是Private，但在标准模块中不必。
Private Declare Sub MessageBeep Lib "User" (ByVal N As Integer)
Sub CallMyDll()
    Call MessageBeep(0)    ' 调用Windows DLL过程。
    MessageBeep 0    ' 再次调用，不使用Call关键字。
End Sub
```

### 另请参见

- [**Declare** 语句](Declare)
- [**Function** 语句](Function)
- [**Sub** 语句](Sub)