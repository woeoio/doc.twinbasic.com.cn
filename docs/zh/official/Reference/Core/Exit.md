---
title: Exit
parent: Statements
permalink: /tB/Core/Exit
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4e608b90-2583-40c9-97e1-6839d29fa6c5'
  PropagateID: '4e608b90-2583-40c9-97e1-6839d29fa6c5'
  ReservedCode1: 'df655402-8cc4-4955-9224-713957e306e7'
  ReservedCode2: 'df655402-8cc4-4955-9224-713957e306e7'
---

# Exit

退出 **Do…Loop**、**For…Next**、**While...Wend**、**Function**、**Sub** 或 **Property** 代码块。

语法：

- **Exit Do**  
  提供退出 **[Do...Loop](/official/Reference/Core/Do-Loop)** 语句的方式。只能在 **Do...Loop** 语句内使用。**Exit Do** 将控制权转移到 **Loop** 语句之后的语句。在嵌套的 **Do...Loop** 语句中使用时，**Exit Do** 将控制权转移到比出现 **Exit Do** 的循环高一层嵌套的循环。
  
- **Exit For**  
  提供退出 **For** 循环的方式。只能在 **[For...Next](/official/Reference/Core/For-Next)** 或 **[For Each...Next](/official/Reference/Core/For-Next)** 循环中使用。**Exit For** 将控制权转移到 **Next** 语句之后的语句。在嵌套的 **For** 循环中使用时，**Exit For** 将控制权转移到比出现 **Exit For** 的循环高一层嵌套的循环。
  
- **Exit While**  
  提供退出 **[While...Wend](/official/Reference/Core/While-Wend)** 循环的方式。只能在 **While...Wend** 语句内使用。**Exit While** 将控制权转移到 **Wend** 语句之后的语句。在嵌套的 **While...Wend** 语句中使用时，**Exit While** 将控制权转移到比出现 **Exit While** 的循环高一层嵌套的循环。**Exit While** 是twinBASIC扩展；经典VBA没有 **While...Wend** 的提前退出形式。
  
- **Exit Function**  
  立即退出出现它的 **[Function](/official/Reference/Core/Function)** 过程。执行继续到调用 **Function** 的语句之后的语句。
  
- **Exit Property**  
  立即退出出现它的 **[Property](/official/Reference/Core/Property)** 过程。执行继续到调用 **Property** 过程的语句之后的语句。
  
- **Exit Sub**  
  立即退出出现它的 **[Sub](/official/Reference/Core/Sub)** 过程。执行继续到调用 **Sub** 过程的语句之后的语句。

不要将 **Exit** 语句与 **End** 语句混淆。**Exit** 不定义结构的结束。

### 示例

本示例使用 **Exit** 语句退出 **For...Next** 循环、**Do...Loop** 和 **Sub** 过程。

```vb
Sub ExitStatementDemo() 
  Dim I%, MyNum% 
  Do ' Set up infinite loop. 
    For I = 1 To 1000 ' Loop 1000 times. 
      MyNum = Int(Rnd * 1000) ' Generate random numbers. 
      Select Case MyNum ' Evaluate random number. 
        Case 7: Exit For ' If 7, exit For...Next. 
        Case 29: Exit Do ' If 29, exit Do...Loop. 
        Case 54: Exit Sub ' If 54, exit Sub procedure. 
      End Select
    Next I 
  Loop 
End Sub
```