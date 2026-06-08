---
title: Put
parent: Statements
permalink: /tB/Core/Put
---
# Put

将变量中的数据写入磁盘文件。

语法：
> **Put** [ **#** ] *filenumber* **,** [ *recnumber* ] **,** *varname*

*filenumber*
: 任何有效的文件号。

*recnumber*
: *可选* **Variant** (**Long**)。开始写入的记录号（**Random**模式文件）或字节号（**Binary**模式文件）。

*varname*
: 包含要写入磁盘数据的变量名称。

使用**Put**写入的数据通常用[**Get**](/official/Reference/Core/Get)从文件中读取。

文件中的第一条记录或字节位于位置1，第二条位于位置2，以此类推。当省略*recnumber*时，写入最后一条**Get**或**Put**语句之后的下一条记录或字节，或最后[**Seek**](/official/Reference/VBA/FileSystem/Seek)函数指向的位置。必须包含分隔逗号：

```vb
Put #4, , FileBuffer
```

对于以**Random**模式打开的文件，适用以下规则：

- 如果写入数据的长度小于[**Open**](/official/Reference/Core/Open)语句的**Len**子句中指定的长度，**Put**在记录长度边界上写入后续记录。一条记录的末尾与下一条记录开头之间的空间用文件缓冲区的现有内容填充。由于无法确定填充数据量，通常最好使记录长度与写入数据的长度匹配。如果写入数据的长度大于**Open**语句**Len**子句中指定的长度，则产生错误。

- 如果写入的变量是变长字符串，**Put**写入包含字符串长度的2字节描述符，然后写入变量。**Open**语句**Len**子句中指定的记录长度必须至少比字符串的实际长度大2字节。

- 如果写入的变量是数值类型的**Variant**，**Put**写入2字节标识**Variant**的**VarType**，然后写入变量。例如，当写入**VarType**为3的**Variant**时，**Put**写入6字节：2字节标识**Variant**为**VarType** 3 (**Long**)，4字节包含**Long**数据。**Open**语句**Len**子句中指定的记录长度必须至少比存储变量所需的实际字节数大2字节。

  ::: info
  使用**Put**语句将**Variant**数组写入磁盘；**Put**不能将包含数组的标量**Variant**写入磁盘。**Put**也不能将对象写入磁盘。
  :::

- 如果写入的变量是**VarType** 8 (**String**)的**Variant**，**Put**写入2字节标识**VarType**，2字节指示字符串长度，然后写入字符串数据。**Open**语句**Len**子句中指定的记录长度必须至少比字符串的实际长度大4字节。

- 如果写入的变量是动态数组，**Put**写入长度等于`2 + 8 * NumberOfDimensions`的描述符。**Open**语句**Len**子句中指定的记录长度必须大于或等于写入数组数据和数组描述符所需的所有字节之和。例如，以下数组声明在写入磁盘时需要118字节。

  ```vb
  Dim MyArray(1 To 5, 1 To 10) As Integer
  ```

  118字节的分布为：18字节用于描述符（`2 + 8 * 2`），100字节用于数据（`5 * 10 * 2`）。

- 如果写入的变量是固定大小数组，**Put**仅写入数据。不写入描述符。

- 如果写入的变量是任何其他类型的变量（不是变长字符串或**Variant**），**Put**仅写入变量数据。**Open**语句**Len**子句中指定的记录长度必须大于或等于写入数据的长度。

- **Put**将用户自定义类型的元素视为各自独立写入，但元素之间没有填充。在磁盘上，使用**Put**写入的用户自定义类型中的动态数组以长度等于`2 + 8 * NumberOfDimensions`的描述符为前缀。**Open**语句**Len**子句中指定的记录长度必须大于或等于写入各个元素（包括任何数组及其描述符）所需的所有字节之和。

对于以**Binary**模式打开的文件，所有**Random**规则均适用，除了：

- **Open**语句中的**Len**子句无效。**Put**将所有变量连续写入磁盘；即记录之间没有填充。

- 对于用户自定义类型以外的任何数组，**Put**仅写入数据。不写入描述符。

- **Put**写入不是用户自定义类型元素的变长字符串时不带2字节长度描述符。写入的字节数等于字符串中的字符数。例如，以下语句向文件号1写入10字节：

  ```vb
  VarString$ = String$(10, " ")
  Put #1, , VarString$
  ```

### 示例

本示例使用**Put**语句将数据写入文件。将用户自定义类型的五条记录写入文件。

```vb
Type Record ' Define user-defined type.
    ID As Integer
    Name As String * 20
End Type

Dim MyRecord As Record, RecordNumber ' Declare variables.
' Open file for random access.
Open "TESTFILE" For Random As #1 Len = Len(MyRecord)
For RecordNumber = 1 To 5 ' Loop 5 times.
    MyRecord.ID = RecordNumber ' Define ID.
    MyRecord.Name = "My Name" & RecordNumber ' Create a string.
    Put #1, RecordNumber, MyRecord ' Write record to file.
Next RecordNumber
Close #1 ' Close file.
```

### 另请参阅

- [**Open** 语句](/official/Reference/Core/Open)
- [**Close** 语句](/official/Reference/Core/Close)
- [**Get** 语句](/official/Reference/Core/Get)
- [**Seek** 函数](/official/Reference/VBA/FileSystem/Seek)