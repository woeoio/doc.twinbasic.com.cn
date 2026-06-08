---
title: FileSystem模块
parent: VBA Package
permalink: /tB/Modules/FileSystem/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fb824c18-a466-4331-b0b4-22cc81fa02b8'
  PropagateID: 'fb824c18-a466-4331-b0b4-22cc81fa02b8'
  ReservedCode1: '8cbb5312-11d7-4070-8904-c2cd8bd18862'
  ReservedCode2: '8cbb5312-11d7-4070-8904-c2cd8bd18862'
---

# FileSystem模块

**FileSystem**模块将用于处理磁盘文件和目录的过程和语句组合在一起。其成员可分为两类：*基于路径名*的操作，作用于文件系统中命名的对象（创建和删除文件与目录、查询属性、遍历目录列表），以及*基于文件号*的操作，作用于先前由**Open**语句返回的句柄（读取、定位、格式化和跟踪通道）。

## 导航目录

[**ChDrive**](/official/Reference/VBA/FileSystem/ChDrive)更改当前驱动器，[**ChDir**](/official/Reference/VBA/FileSystem/ChDir)更改指定驱动器上的当前目录，[**CurDir**](/official/Reference/VBA/FileSystem/CurDir)返回当前驱动器的路径——如果指定了其他驱动器，则返回该驱动器的路径。[**MkDir**](/official/Reference/VBA/FileSystem/MkDir)和[**RmDir**](/official/Reference/VBA/FileSystem/RmDir)分别创建和删除目录。

```vb
ChDrive "D"
ChDir "D:\Projects"
Debug.Print CurDir              ' "D:\Projects"
MkDir "D:\Projects\Output"
```

## 检查文件和目录

[**Dir**](/official/Reference/VBA/FileSystem/Dir)是通配符匹配器：传入包含`*`或`?`的路径名，它返回第一个匹配的名称，然后不带参数再次调用可遍历后续匹配项，直到返回`""`。[**FileLen**](/official/Reference/VBA/FileSystem/FileLen)无需打开文件即可返回文件大小（字节），[**FileDateTime**](/official/Reference/VBA/FileSystem/FileDateTime)返回最后修改时间戳。[**GetAttr**](/official/Reference/VBA/FileSystem/GetAttr)和[**SetAttr**](/official/Reference/VBA/FileSystem/SetAttr)读取和写入[**VbFileAttribute**](/official/Reference/VBA/Constants/VbFileAttribute)标志位——只读、隐藏、系统、存档——**GetAttr**还通过设置**vbDirectory**位来报告名称是否指向目录。

```vb
Dim Name As String
Name = Dir("C:\Logs\*.log")
Do While Name <> ""
    Debug.Print Name & vbTab & FileLen("C:\Logs\" & Name)
    Name = Dir
Loop
```

## 复制和删除

[**FileCopy**](/official/Reference/VBA/FileSystem/FileCopy)将一个文件复制到另一个文件，[**Kill**](/official/Reference/VBA/FileSystem/Kill)删除匹配通配符模式的文件。两者都通过路径名操作，当要求对当前进程已打开的文件执行操作时会引发运行时错误。

```vb
FileCopy "C:\Data\report.xlsx", "C:\Backup\report.xlsx"
Kill "C:\Backup\*.tmp"
```

## 打开和跟踪文件号

较低层的读/写语句——**Open**、**Close**、**Get**、**Put**、**Print**、**Write**、**Input**和**Line Input**——使用1--511范围内的*文件号*进行操作。[**FreeFile**](/official/Reference/VBA/FileSystem/FreeFile)返回当前未使用的下一个文件号，使调用者无需手动选择并与其他代码竞争。文件打开后，[**FileAttr**](/official/Reference/VBA/FileSystem/FileAttr)报告文件号打开时的访问模式——**Input**、**Output**、**Random**、**Append**或**Binary**。[**Reset**](/official/Reference/VBA/FileSystem/Reset)关闭所有当前打开的文件号并刷新其缓冲区，在退出前作为最后的清理最为有用。

```vb
Dim N As Long
N = FreeFile
Open "C:\Data\report.txt" For Input As #N
' ... read ...
Close #N
```

## 打开文件中的位置

对于打开的文件号，[**EOF**](/official/Reference/VBA/FileSystem/EOF)在顺序读取超过最后一条记录后返回**True**，[**LOF**](/official/Reference/VBA/FileSystem/LOF)返回文件的总长度（字节），[**Loc**](/official/Reference/VBA/FileSystem/Loc)返回当前读/写位置。*位置*的单位取决于打开模式——**Random**模式为记录号，**Binary**模式为字节偏移量，顺序模式为字节位置除以128——因此每个函数页面上的按模式说明表是权威参考。[**Seek**](/official/Reference/VBA/FileSystem/Seek)兼具函数和语句的功能：函数返回*下一次*读或写的位置（而**Loc**报告*上一次*的位置），语句在下一次操作前重新定位文件指针。

```vb
Dim N As Long, Line As String
N = FreeFile
Open "C:\Data\big.log" For Input As #N
Do While Not EOF(N)
    Line Input #N, Line
Loop
Close #N
```

## 通过文件号读取和格式化

[**Input**](/official/Reference/VBA/FileSystem/Input)和[**Input$**](/official/Reference/VBA/FileSystem/Input)从以**Open**语句打开的文件号中读取固定数量的字符，分别返回**Variant**和**String**；[**InputB**](/official/Reference/VBA/FileSystem/InputB)和[**InputB$**](/official/Reference/VBA/FileSystem/InputB)是它们的面向字节版本，计算原始字节数而非UTF-16字符数。它们与**Input #**语句的不同之处在于，它们返回读取到的每个字符——逗号、换行符、引号、前导空格等——当磁盘上的字节不是逗号分隔值的流时，它们是正确的选择。

[**Width**](/official/Reference/VBA/FileSystem/Width)设置顺序输出通道上的输出行宽：后续的**Print #**在写入指定数量的字符后换行，当*Width*为`0`时则永不换行。

## 成员

- [ChDir](/official/Reference/VBA/FileSystem/ChDir) -- 更改当前目录或文件夹
- [ChDrive](/official/Reference/VBA/FileSystem/ChDrive) -- 更改当前驱动器
- [CurDir](/official/Reference/VBA/FileSystem/CurDir) -- 返回当前路径
- [Dir](/official/Reference/VBA/FileSystem/Dir) -- 返回与模式匹配的文件、目录、文件夹或卷标的名称
- [EOF](/official/Reference/VBA/FileSystem/EOF) -- 返回是否已到达以**Random**或顺序**Input**模式打开的文件末尾
- [FileAttr](/official/Reference/VBA/FileSystem/FileAttr) -- 返回以**Open**语句打开的文件模式
- [FileCopy](/official/Reference/VBA/FileSystem/FileCopy) -- 复制文件
- [FileDateTime](/official/Reference/VBA/FileSystem/FileDateTime) -- 返回文件创建或最后修改的日期和时间
- [FileLen](/official/Reference/VBA/FileSystem/FileLen) -- 返回文件的字节长度
- [FreeFile](/official/Reference/VBA/FileSystem/FreeFile) -- 返回**Open**语句可用的下一个文件号
- [GetAttr](/official/Reference/VBA/FileSystem/GetAttr) -- 返回文件或目录的属性
- [Input, Input$](/official/Reference/VBA/FileSystem/Input) -- 从打开的顺序文件中读取固定数量的字符
- [InputB, InputB$](/official/Reference/VBA/FileSystem/InputB) -- 从打开的顺序文件中读取固定数量的字节
- [Kill](/official/Reference/VBA/FileSystem/Kill) -- 从磁盘删除文件
- [Loc](/official/Reference/VBA/FileSystem/Loc) -- 返回打开文件中当前的读/写位置
- [LOF](/official/Reference/VBA/FileSystem/LOF) -- 返回打开文件的大小（字节）
- [MkDir](/official/Reference/VBA/FileSystem/MkDir) -- 创建新目录或文件夹
- [Reset](/official/Reference/VBA/FileSystem/Reset) -- 关闭所有以**Open**语句打开的磁盘文件
- [RmDir](/official/Reference/VBA/FileSystem/RmDir) -- 删除现有目录或文件夹
- [Seek](/official/Reference/VBA/FileSystem/Seek) -- 返回或设置打开文件中的读/写位置
- [SetAttr](/official/Reference/VBA/FileSystem/SetAttr) -- 设置文件的属性信息
- [Width](/official/Reference/VBA/FileSystem/Width) -- 设置顺序输出文件的行宽