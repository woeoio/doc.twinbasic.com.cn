---
title: "InputB, InputB$"
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/InputB
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b6757ef4-a5ae-474f-88e5-4a82d99e438a'
  PropagateID: 'b6757ef4-a5ae-474f-88e5-4a82d99e438a'
  ReservedCode1: '1272d2ed-e257-4aa3-86a4-f1ee68ca4e91'
  ReservedCode2: '1272d2ed-e257-4aa3-86a4-f1ee68ca4e91'
---

# InputB, InputB$

返回从以**Input**或**Binary**模式打开的文件中读取的固定数量字节。

语法：
- **InputB(** *Number* **,** [ **#** ] *FileNumber* **)** --- 返回**Variant**。
- **InputB$(** *Number* **,** [ **#** ] *FileNumber* **)** --- 返回一个**String**，其底层字节即为读取到的字节。

*Number*
: *必需* 要返回的字节数。

*FileNumber*
: *必需* 用于以[**Open**](/official/Reference/Core/Open)语句打开文件的文件号。

**InputB**是[**Input**](/official/Reference/VBA/FileSystem/Input)的面向字节版本。**Input**计算和返回字符（在twinBASIC的UTF-16缓冲区中每个字符两个字节），而**InputB**计算和返回原始字节——当通过文本方式打开的通道读取二进制数据时非常有用。

字节在打包到结果中时不会进行任何字符集转换；**String**形式只是将字节序列重新解释为UTF-16字符串进行存储。

### 示例

```vb
Dim Bytes As Variant
Open "data.bin" For Binary Access Read As #1
Bytes = InputB(LOF(1), 1)            ' Read the whole file as bytes.
Close #1
```

### 另请参阅

- [Input, Input$](/official/Reference/VBA/FileSystem/Input)函数
- [Open](/official/Reference/Core/Open)语句
- [LOF](/official/Reference/VBA/FileSystem/LOF)函数