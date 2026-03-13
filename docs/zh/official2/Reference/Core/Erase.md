---
title: Erase
parent: 语句
permalink: /zh/tB/Core/Erase
---

# Erase
{: .no_toc }

重新初始化固定大小数组的元素，或释放动态数组存储空间。

语法：**Erase** *数组列表*

*数组列表*
:  一个或多个要擦除的逗号分隔的数组变量

**Erase**的行为取决于数组是固定大小（普通）还是动态的。**Erase**不回收固定大小数组的内存。Erase按以下方式设置固定数组的元素：

| 数组类型 | Erase对固定数组元素的影响 |
|-|-|
| 固定数值数组 | 将每个元素设置为零。 |
| 固定字符串数组（变长） | 将每个元素设置为零长度字符串（""）。 |
| 固定字符串数组（定长） | 将每个元素设置为零。 |
| 固定Variant数组 | 将每个元素设置为**Empty**。 |
| 用户定义类型数组 | 将每个元素设置为其为单独变量时的状态。 |
| 对象数组 | 将每个元素设置为特殊值**Nothing**。 |

**Erase**释放动态数组使用的内存。在程序可以再次引用动态数组之前，必须使用ReDim语句重新声明数组变量的维度。

### 示例

此示例使用**Erase**语句重新初始化固定大小数组的元素并释放动态数组存储空间。

```vb
' 声明数组变量。
Dim NumArray(10) As Integer        ' Integer数组。
Dim StrVarArray(10) As String      ' 变长字符串数组。
Dim StrFixArray(10) As String * 10 ' 定长字符串数组。
Dim VarArray(10) As Variant        ' Variant数组。
Dim DynamicArray() As Integer      ' 动态数组。
ReDim DynamicArray(10)      ' 分配存储空间。
Erase NumArray                     ' 每个元素设置为0。
Erase StrVarArray                  ' 每个元素设置为零长度
                                   ' 字符串（""）。
Erase StrFixArray                  ' 每个元素设置为0。
Erase VarArray                     ' 每个元素设置为Empty。
Erase DynamicArray                 ' 释放数组使用的内存。
```