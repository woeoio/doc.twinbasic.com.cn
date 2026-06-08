---
title: Close
parent: Statements
permalink: /tB/Core/Close
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c314b52d-0a99-431b-b33e-e60988437884'
  PropagateID: 'c314b52d-0a99-431b-b33e-e60988437884'
  ReservedCode1: 'ca1f769f-1ec9-4bc1-b0f3-cfaf09a1bf44'
  ReservedCode2: 'ca1f769f-1ec9-4bc1-b0f3-cfaf09a1bf44'
---

# Close

结束对使用 **Open** 语句打开的文件的输入/输出(I/O)。

语法： 

- **Close** [[ **#** ] *filenumber1* ] [ **,** [ **#** ] *filenumber2* ] *. . .*  
  *filenumber* 是任何有效的文件号，以求值为整数的表达式给出。文件号不必是常量。**#** 前缀可选。
  
- **Close**  
  省略 *filenumber* 列表时，由 **Open** 语句打开的所有活动文件都将被关闭。

::: warning

无参数形式应仅在关闭/退出程序时使用，因为它会关闭程序中其他地方打开的*所有*文件。
:::

当以 **Output** 或 **Append** 模式打开的文件被关闭时，最后的输出缓冲区会写入该文件的操作系统缓冲区。与已关闭文件关联的所有缓冲区空间都会被释放。

执行 **Close** 语句时，文件与其文件号的关联终止。

### 示例

本示例使用 **Close** 语句关闭为 **Output** 打开的三个文件。

```vb
Dim I%, FileName$, FileNumber%(1 To 3)
For I = 1 To 3             ' Loop 3 times
   FileName = "TEST" & I   ' Create file name
   FileNumber(I) = FreeFile()
   Open FileName For Output As #FileNumber(I)   ' Open file
   Print #FileNumber(I), "This is a test."      ' Write string to file
Next I
Close #FileNumber(1), #FileNumber(2), #FileNumber(3)  ' Close the 3 open files.
```

### 另请参阅

- [Open](/official/Reference/Core/Open) 语句
- [FreeFile](/official/Reference/VBA/FileSystem/) 函数