---
title: Get
parent: Statements
permalink: /tB/Core/Get
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '237237a5-8514-4090-9606-fb719788928a'
  PropagateID: '237237a5-8514-4090-9606-fb719788928a'
  ReservedCode1: '843cf532-adac-44de-b63a-21b246f873c5'
  ReservedCode2: '843cf532-adac-44de-b63a-21b246f873c5'
---

# Get

将数据从打开的磁盘文件读入变量。

::: info
本页记录 **Get** *语句*（文件I/O）。不相关的 **[Property Get](/official/Reference/Core/Property)** 过程形式是该关键字的不同用法。
:::

语法：
> **Get** [ **#** ] *filenumber* **,** [ *recnumber* ] **,** *varname*

*filenumber*
: 任何有效的文件号。

*recnumber*
: *可选* **Variant** (**Long**)。开始读取的记录号（**Random** 模式文件）或字节号（**Binary** 模式文件）。

*varname*
: 读入数据的有效变量名。

用 **Get** 读取的数据通常用 [**Put**](/official/Reference/Core/Put) 写入文件。文件中的第一条记录或字节位于位置1，第二条位于位置2，依此类推。省略 *recnumber* 时，读取上次 **Get** 或 **Put** 语句之后的下一条记录或字节（或上次 [**Seek**](/official/Reference/VBA/FileSystem/Seek) 函数指向的位置）。分隔逗号必须包括：

```vb
Get #4, , FileBuffer
```

对于以 **Random** 模式打开的文件，适用以下规则：

- 如果读取的数据长度小于 [**Open**](/official/Reference/Core/Open) 语句 **Len** 子句中指定的长度，**Get** 在记录长度边界上读取后续记录。一条记录的末尾与下一条记录开头之间的空间用文件缓冲区的现有内容填充。由于无法确定填充数据量，通常最好让记录长度与读取数据的长度匹配。

- 如果读入的变量是变长字符串，**Get** 读取包含字符串长度的2字节描述符，然后读取进入变量的数据。因此，**Open** 语句中 **Len** 子句指定的记录长度必须至少比字符串的实际长度大2字节。

- 如果读入的变量是数值类型的 **Variant**，**Get** 读取2字节标识 **Variant** 的 **VarType**，然后读取进入变量的数据。例如，读取 **VarType** 3 的 **Variant** 时，**Get** 读取6字节：2字节标识 **Variant** 为 **VarType** 3（**Long**），4字节包含 **Long** 数据。**Open** 语句中 **Len** 子句指定的记录长度必须至少比存储变量所需的实际字节数大2字节。

  ::: info
  使用 **Get** 语句从磁盘读取 **Variant** 数组；**Get** 不能读取包含数组的标量 **Variant**。**Get** 也不能从磁盘读取对象。
  :::

- 如果读入的变量是 **VarType** 8（**String**）的 **Variant**，**Get** 读取2字节标识 **VarType**，2字节指示字符串长度，然后读取字符串数据。**Open** 语句中 **Len** 子句指定的记录长度必须至少比字符串的实际长度大4字节。

- 如果读入的变量是动态数组，**Get** 读取长度等于2加8乘维数的描述符，即 `2 + 8 * NumberOfDimensions`。**Open** 语句中 **Len** 子句指定的记录长度必须大于或等于读取数组数据和数组描述符所需的所有字节之和。例如，以下数组声明在数组写入磁盘时需要118字节。

  ```vb
  Dim MyArray(1 To 5, 1 To 10) As Integer
  ```

  118字节分布如下：18字节用于描述符（`2 + 8 * 2`），100字节用于数据（`5 * 10 * 2`）。

- 如果读入的变量是固定大小数组，**Get** 仅读取数据。不读取描述符。

- 如果读入的变量是任何其他类型的变量（不是变长字符串或 **Variant**），**Get** 仅读取变量数据。**Open** 语句中 **Len** 子句指定的记录长度必须大于或等于读取数据的长度。

- **Get** 读取用户自定义类型的元素就像每个元素单独读取一样，但元素之间没有填充。在磁盘上，用户自定义类型中的动态数组（用 **Put** 写入）前面有一个长度等于 `2 + 8 * NumberOfDimensions` 的描述符。**Open** 语句中 **Len** 子句指定的记录长度必须大于或等于读取各元素（包括任何数组及其描述符）所需的所有字节之和。

对于以 **Binary** 模式打开的文件，所有 **Random** 规则均适用，除了：

- **Open** 语句中的 **Len** 子句无效。**Get** 从磁盘连续读取所有变量；即记录之间没有填充。

- 对于用户自定义类型以外的任何数组，**Get** 仅读取数据。不读取描述符。

- **Get** 读取不是用户自定义类型元素的变长字符串时，不期望2字节长度描述符。读取的字节数等于字符串中已有的字符数。例如，以下语句从文件号1读取10字节：

  ```vb
  VarString = String(10, " ")
  Get #1, , VarString
  ```

### 示例

本示例使用 **Get** 语句从文件读取数据到变量。本示例假设 `TESTFILE` 是包含用户自定义类型 `Record` 的五条记录的文件。

```vb
Type Record ' Define user-defined type.
    ID As Integer
    Name As String * 20
End Type

Dim MyRecord As Record, Position ' Declare variables.
' Open sample file for random access.
Open "TESTFILE" For Random As #1 Len = Len(MyRecord)
' Read the sample file using the Get statement.
Position = 3 ' Define record number.
Get #1, Position, MyRecord ' Read third record.
Close #1 ' Close file.
```

### 另请参阅

- [**Open** 语句](/official/Reference/Core/Open)
- [**Close** 语句](/official/Reference/Core/Close)
- [**Put** 语句](/official/Reference/Core/Put)
- [**Seek** 函数](/official/Reference/VBA/FileSystem/Seek)