---
title: Erase
parent: Statements
permalink: /tB/Core/Erase
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c4434498-17b2-4842-9e35-56ad66a7d789'
  PropagateID: 'c4434498-17b2-4842-9e35-56ad66a7d789'
  ReservedCode1: '0c4d5ae3-6e51-4e4c-bba9-08d4b5486d43'
  ReservedCode2: '0c4d5ae3-6e51-4e4c-bba9-08d4b5486d43'
---

# Erase

重新初始化固定大小数组的元素，或释放动态数组的存储空间。

语法：**Erase** *arraylist*

*arraylist*
: 要清除的一个或多个逗号分隔的数组变量

**Erase** 的行为取决于数组是固定大小（普通）还是动态的。**Erase** 不为固定大小数组回收内存。Erase 按以下方式设置固定数组的元素：

| 数组类型 |	Erase 对固定数组元素的影响 |
|-|-|
| 固定数值数组 |	将每个元素设为零。 |
| 固定字符串数组（变长） |	将每个元素设为零长度字符串("")。 |
| 固定字符串数组（定长） |	将每个元素设为零。 |
| 固定Variant数组 |	将每个元素设为 **Empty**。 |
| 用户自定义类型数组 |	将每个元素像单独变量一样设置。 |
| 对象数组 |	将每个元素设为特殊值 **Nothing**。 |

**Erase** 释放动态数组使用的内存。程序再次引用动态数组之前，必须使用ReDim语句重新声明数组变量的维度。

### 示例
本示例使用 **Erase** 语句重新初始化固定大小数组的元素并释放动态数组的存储空间。

```vb
' Declare array variables. 
Dim NumArray(10) As Integer        ' Integer array. 
Dim StrVarArray(10) As String      ' Variable-string array. 
Dim StrFixArray(10) As String * 10 ' Fixed-string array. 
Dim VarArray(10) As Variant        ' Variant array. 
Dim DynamicArray() As Integer      ' Dynamic array. 
ReDim DynamicArray(10)      ' Allocate storage space. 
Erase NumArray                     ' Each element set to 0. 
Erase StrVarArray                  ' Each element set to zero-length 
                                   ' string (""). 
Erase StrFixArray                  ' Each element set to 0. 
Erase VarArray                     ' Each element set to Empty. 
Erase DynamicArray                 ' Free memory used by array.
```