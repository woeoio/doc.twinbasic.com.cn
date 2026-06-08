---
title: AppActivate
parent: Interaction Module
permalink: /tB/Modules/Interaction/AppActivate
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4a40c04f-e36b-4bb5-9239-86cd87df526d'
  PropagateID: '4a40c04f-e36b-4bb5-9239-86cd87df526d'
  ReservedCode1: '0bbdf01d-a12d-4eb9-9fd3-c642f63145d0'
  ReservedCode2: '0bbdf01d-a12d-4eb9-9fd3-c642f63145d0'
---

# AppActivate

激活应用程序窗口。

语法：
- **AppActivate** *title* [ **,** *wait* ]
  
  *title*
  : *必需* 字符串表达式，指定要激活的应用程序窗口标题栏中的标题。
  
  *wait*
  : *可选* Boolean值，指定调用应用程序在激活另一个应用程序之前是否需要具有焦点。如果为**False**（默认），则立即激活指定应用程序，即使调用应用程序不具有焦点。如果为**True**，调用应用程序等待直到获得焦点，然后激活指定应用程序。
  
- **AppActivate** *taskId* [ **,** *wait* ]
  
  *taskId*
  : *必需* [**Shell**](/official/Reference/VBA/Interaction/Shell)函数返回的任务ID可代替*title*用于激活应用程序。

**AppActivate**语句将焦点更改到命名应用程序或窗口，但不影响其是否最大化或最小化。当用户采取某些操作更改焦点或关闭窗口时，焦点从激活的应用程序窗口移开。使用[**Shell**](/official/Reference/VBA/Interaction/Shell)函数启动应用程序并设置窗口样式。

在确定要激活哪个应用程序时，*title*与每个运行中应用程序的标题字符串进行比较。如果没有完全匹配，则激活标题字符串以*title*开头的任何应用程序。如果*title*指定的应用程序有多个实例，则任意激活一个实例。

### 示例

本示例演示**AppActivate**语句激活应用程序窗口的各种用法。**Shell**语句假设应用程序位于指定路径。

```vb
Dim MyAppID, ReturnValue
AppActivate "Microsoft Word"   ' Activate Microsoft 
                               ' Word.

' AppActivate can also use the return value of the Shell function.
MyAppID = Shell("C:\WORD\WINWORD.EXE", 1)   ' Run Microsoft Word.
AppActivate MyAppID   ' Activate Microsoft 
                      ' Word.

' You can also use the return value of the Shell function.
ReturnValue = Shell("c:\EXCEL\EXCEL.EXE",1)   ' Run Microsoft Excel.
AppActivate ReturnValue   ' Activate Microsoft 
                          ' Excel.
```

### 另请参阅

- [SendKeys](/official/Reference/VBA/Interaction/SendKeys)语句
- [Shell](/official/Reference/VBA/Interaction/Shell)函数