---
title: For...Next
parent: 语句
permalink: /zh/tB/Core/For-Next
---

# For...Next
{: .no_toc }

重复执行语句块，直到指定的值超出范围。

语法：**For** *counter* = *start* **To** *end* [ **Step** *step* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ **Continue For** ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ **Exit For** ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]
**Next** [ *counter* ]

*counter*
: 必需。用作循环计数器的数值变量。*counter*参数不能是Boolean或数组元素。

*start*
: 必需。*counter*的初始值。

*end*
: 必需。*counter*的最终值。

*step*
: 可选。*counter*每次增加的量。如果未指定，则*step*默认为1。

*statements*
: 可选。在**For**和**Next**之间的一个或多个语句，对*counter*的每个值执行。

**For...Next**语句的语法包含以下部分：

**For...Next**语句通过使用计数器重复语句块，每次重复时将计数器的当前值与结束值进行比较。第一次输入循环时，*start*被分配给*counter*。每次重复时，*counter*都会增加*step*的值，然后与*end*进行比较。如果*counter*大于*end*（或小于*end*，如果*step*为负），则**Next**语句将控制权转移到紧跟在**Next**后面的语句。否则，循环内的语句将执行。

如果在循环内更改*counter*的值，将使循环的执行更加复杂，并可能导致意外的结果。

如果要在循环中跳过一次迭代，请在**For...Next**语句中使用[**Continue For**](Continue)语句。

如果要在满足特定条件时退出循环，请在**For...Next**语句中使用[**Exit For**](Exit)语句。

可以在**For...Next**语句中嵌套最多64个**For...Next**循环。但是，每个**Next**语句必须引用前面的**For**语句中声明的计数器变量。如果在嵌套的**For...Next**循环中包含*counter*参数，则应指定最内层的*counter*。

### 示例

此示例显示如何使用**For...Next**语句。

```vb
Sub ForNextExample()
    Dim Counter As Integer

    For Counter = 1 To 10
        MsgBox "计数器值: " & Counter
    Next Counter
End Sub
```

### 使用Step

可以使用**Step**关键字指定计数器每次增加的量：

```vb
Sub ForStepExample()
    Dim Counter As Integer

    ' 每次增加2
    For Counter = 2 To 20 Step 2
        MsgBox "偶数: " & Counter
    Next Counter

    ' 使用负Step递减
    For Counter = 10 To 1 Step -1
        MsgBox "倒计时: " & Counter
    Next Counter
End Sub
```

### 嵌套循环

可以在**For...Next**语句中嵌套其他循环：

```vb
Sub NestedForExample()
    Dim i As Integer, j As Integer

    For i = 1 To 3
        For j = 1 To 3
            MsgBox "i = " & i & ", j = " & j
        Next j
    Next i
End Sub
```

> [!NOTE]
>
> 当在**For...Next**循环内使用**Exit For**时，控制将立即转移到紧跟在**Next**语句后面的语句。