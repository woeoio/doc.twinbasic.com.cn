---
title: EOF
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/EOF
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9630de22-b3d7-4c9c-b8ec-492b758f21a5'
  PropagateID: '9630de22-b3d7-4c9c-b8ec-492b758f21a5'
  ReservedCode1: 'd3f6a130-afa1-4277-bcfa-5675ddd9aa37'
  ReservedCode2: 'd3f6a130-afa1-4277-bcfa-5675ddd9aa37'
---

# EOF

返回一个**Integer**，当已到达以**Random**或顺序**Input**模式打开的文件末尾时，包含**Boolean**值**True**。

语法：**EOF(** *filenumber* **)**

*filenumber*
: *必需* **Integer**，包含任何有效的文件号。

### 备注

使用**EOF**可避免在文件末尾之后尝试获取输入时产生的错误。

**EOF**函数在到达文件末尾之前返回**False**。对于以**Random**或**Binary**访问模式打开的文件，**EOF**在最后执行的**Get**语句无法读取完整记录之前返回**False**。

对于以**Binary**访问模式打开的文件，尝试使用**Input**函数读取文件直到**EOF**返回**True**会产生错误。使用**Input**读取二进制文件时，请使用[LOF](/official/Reference/VBA/FileSystem/LOF)和**Loc**函数代替**EOF**，或在使用**EOF**函数时使用**Get**。对于以**Output**模式打开的文件，**EOF**始终返回**True**。

### 示例

本示例使用**EOF**函数检测文件末尾。本示例假设`MYFILE`是一个包含几行文本的文本文件。

```vb
Dim InputData
Open "MYFILE" For Input As #1    ' Open file for input.
Do While Not EOF(1)    ' Check for end of file.
    Line Input #1, InputData    ' Read line of data.
    Debug.Print InputData    ' Print to the Immediate window.
Loop
Close #1    ' Close file.
```

### 另请参阅

- [LOF](/official/Reference/VBA/FileSystem/LOF)函数