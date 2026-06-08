---
title: Call
parent: Statements
permalink: /tB/Core/Call
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'aa90d73b-ae57-4709-93cb-7462b74f643c'
  PropagateID: 'aa90d73b-ae57-4709-93cb-7462b74f643c'
  ReservedCode1: 'abf87c81-26d3-40ac-aa12-4626dd07ca9c'
  ReservedCode2: 'abf87c81-26d3-40ac-aa12-4626dd07ca9c'
---

# Call

将控制权转移到 **Sub** [过程](/official/Reference/Glossary#procedure)、**Function** 过程或动态链接库(DLL)过程。

语法：

- **Call** *name* **(** [ *argumentlist* ] **)**  
  当指定 **Call** 关键字时，*argumentlist* 必须用括号括起来。  
   
- *name* **(** [ *argumentlist* ] **)**  
  不使用 **Call** 关键字时，*argumentlist* 可以选择是否用括号括起来，  
  
- *name* [ *argumentlist* ] 

*name*
: 要调用的过程名称

*argumentlist*
: *可选* 传递给过程的变量、数组或表达式的逗号分隔列表。*argumentlist* 的组成部分可以包含 **ByVal** 或 **ByRef** 关键字，以描述参数传递给被调用过程的方式。

调用过程时不需要 **Call** 关键字。但是，当使用 **Call** 关键字调用需要参数的过程时，*argumentlist* 必须用括号括起来。省略 **Call** 关键字时，*argumentlist* 周围的括号也必须省略。使用任一 **Call** 语法调用任何内部或用户自定义函数时，函数的返回值将被丢弃。

要将整个数组传递给过程，请使用数组名后跟空括号。

### 示例

本示例演示如何使用 **Call** 语句将控制权转移到 **Sub** 过程、内部函数和动态链接库(DLL)过程。

```vb
' Call a Sub procedure. 
Call PrintToDebugWindow("Hello World")     
' The above statement causes control to be passed to the following 
' Sub procedure. 
Sub PrintToDebugWindow(AnyString) 
    Debug.Print AnyString    ' Print to the Immediate window. 
End Sub 
 
' Call an intrinsic function. The return value of the function is 
' discarded. 
Call Shell(AppName, 1)    ' AppName contains the path of the  
        ' executable file. 
 
' Call a Microsoft Windows DLL procedure. The Declare statement must be  
' Private in a Class Module, but not in a standard Module. 
Private Declare Sub MessageBeep Lib "User" (ByVal N As Integer) 
Sub CallMyDll() 
    Call MessageBeep(0)    ' Call Windows DLL procedure. 
    MessageBeep 0    ' Call again without Call keyword. 
End Sub
```

### 另请参阅

- [**Declare** 语句](/official/Reference/Core/Declare)
- [**Function** 语句](/official/Reference/Core/Function)
- [**Sub** 语句](/official/Reference/Core/Sub)