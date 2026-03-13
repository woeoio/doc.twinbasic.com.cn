---
title: Close
parent: 语句
permalink: /zh/tB/Core/Close
---

# Close
{: .no_toc }

结束使用**Open**语句打开的文件的输入/输出（I/O）。

语法：

- **Close** [[ **#** ] *文件号1* ] [ **,** [ **#** ] *文件号2* ] *. . .*
  *文件号*是任何有效的文件号，作为计算结果为整数的表达式给出。文件号不必是常量。**#**前缀是可选的。

- **Close**
  如果省略*文件号*列表，则关闭**Open**语句打开的所有活动文件。

> [!WARNING]
>
> 无参数形式应该仅在关闭/退出程序时使用，因为它将关闭程序中其他地方打开的*所有*文件。

当关闭以**Output**或**Append**方式打开的文件时，最终输出缓冲区被写入该文件的操作系统缓冲区。与关闭文件相关的所有缓冲区空间被释放。

当执行**Close**语句时，文件与其文件号的关联结束。

### 示例

此示例使用**Close**语句关闭为**Output**打开的三个文件。

```vb
Dim I%, FileName$, FileNumber%(1 To 3)
For I = 1 To 3             ' 循环3次
   FileName = "TEST" & I   ' 创建文件名
   FileNumber(I) = FreeFile()
   Open FileName For Output As #FileNumber(I)   ' 打开文件
   Print #FileNumber(I), "This is a test."      ' 写入字符串到文件
Next I
Close #FileNumber(1), #FileNumber(2), #FileNumber(3)  ' 关闭3个打开的文件。
```

### 另请参见

- [Open](Open) 语句
- [FreeFile](../Modules/FileSystem) 函数