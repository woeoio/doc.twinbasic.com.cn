---
title: Exit
parent: 语句
permalink: /zh/tB/Core/Exit
---

# Exit
{: .no_toc }

退出**Do…Loop**、**For…Next**、**Function**、**Sub**或**Property**代码块。

语法：

- **Exit Do**
  提供退出**[Do...Loop](Do-Loop)**语句的方法。只能在**Do...Loop**语句内使用。**Exit Do**将控制权转移到**Loop**语句后面的语句。当在嵌套的**Do...Loop**语句中使用时，**Exit Do**将控制权转移到比**Exit Do**出现的循环高一级的循环。

- **Exit For**
  提供退出**For**循环的方法。只能在**[For...Next](For-Next)**或**[For Each...Next](For-Next)**循环中使用。**Exit For**将控制权转移到**Next**语句后面的语句。当在嵌套的**For**循环中使用时，**Exit For**将控制权转移到比**Exit For**出现的循环高一级的循环。

- **Exit Function**
  立即退出其出现的**[Function](Function)**过程。执行继续到调用**Function**的语句后面的语句。

- **Exit Property**
  立即退出其出现的**[Property](Property)**过程。执行继续到调用**Property**过程的语句后面的语句。

- **Exit Sub**
  立即退出其出现的**[Sub](Sub)**过程。执行继续到调用**Sub**过程的语句后面的语句。

不要将**Exit**语句与**End**语句混淆。**Exit**不定义结构的结束。

### 示例

此示例使用**Exit**语句退出**For...Next**循环、**Do...Loop**和**Sub**过程。

```vb
Sub ExitStatementDemo()
  Dim I%, MyNum%
  Do ' 设置无限循环。
    For I = 1 To 1000 ' 循环1000次。
      MyNum = Int(Rnd * 1000) ' 生成随机数。
      Select Case MyNum ' 评估随机数。
        Case 7: Exit For ' 如果是7，退出For...Next。
        Case 29: Exit Do ' 如果是29，退出Do...Loop。
        Case 54: Exit Sub ' 如果是54，退出Sub过程。
      End Select
    Next I
  Loop
End Sub
```