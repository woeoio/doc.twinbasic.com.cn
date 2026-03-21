---
title: For Each...Next
parent: 语句
permalink: /zh/tB/Core/For-Each-Next
---

# For Each...Next
{: .no_toc }

对数组或集合中的每个元素重复执行语句块。

语法：**For Each** *element* **In** *group*
  &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ **Continue For** ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ **Exit For** ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]
**Next** [ *element* ]

*element*
: 必需。遍历*group*中每个项的数值变量或Variant变量。

*group*
: 必需。要遍历的对象集合或数组的名称。

*statements*
: 可选。在**For Each...Next**之间的一个或多个语句，对*group*中的每个项执行。

**For Each...Next**语句的语法包含以下部分：

使用**For Each...Next**语句，您可以重复一组语句，对指定数组或集合中的每个元素执行一次。当到达**Next**语句时，控制返回到循环的开头，并重复下一个元素。如果尚未到达数组的最后一个元素或集合的最后一个元素，则重复此过程。

当不确定循环需要重复的次数时，**For Each...Next**语句特别有用。

如果指定了*element*，则每次重复循环时都必须引用相同的元素。在循环内不能更改*element*。

可以在**For Each...Next**语句中使用[**Continue For**](Continue)语句，跳过当前迭代并继续下一次迭代。

可以在**For Each...Next**语句中使用[**Exit For**](Exit)语句，在满足特定条件时退出循环。

### 示例

此示例显示如何使用**For Each...Next**语句遍历数组中的元素。

```vb
Sub ForEachExample()
    Dim MyArray(1 To 5) As Integer
    Dim i As Integer
    Dim Element As Variant

    ' 初始化数组
    For i = 1 To 5
        MyArray(i) = i * 10
    Next i

    ' 使用For Each遍历数组
    For Each Element In MyArray
        MsgBox "数组元素值: " & Element
    Next Element
End Sub
```

### 使用集合

**For Each...Next**语句也可以用于遍历对象集合：

```vb
Sub CollectionExample()
    Dim col As New Collection
    Dim item As Variant

    ' 向集合添加项目
    col.Add "项目1"
    col.Add "项目2"
    col.Add "项目3"

    ' 遍历集合
    For Each item In col
        MsgBox "集合项目: " & item
    Next item
End Sub
```

> [!NOTE]
>
> 当使用**For Each...Next**遍历数组时，不能通过*element*变量更改数组元素的值。要更改数组元素的值，应使用带索引的**For...Next**循环。