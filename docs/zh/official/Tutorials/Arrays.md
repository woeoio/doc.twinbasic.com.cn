---
title: 数组编程
parent: 教程
permalink: /zh/tB/Tutorials/Arrays
---

# 数组编程教程
{: .no_toc }

数组是存储多个相同类型数据的有序集合。在twinBASIC中，数组是编程的基础工具之一，掌握数组的使用对编写高效的程序至关重要。

## 数组基础

### 声明数组

在twinBASIC中，可以使用多种方式声明数组：

```vb
' 声明静态数组
Dim numbers(5) As Integer        ' 0到5，共6个元素
Dim names(1 To 10) As String     ' 1到10，共10个元素

' 声明动态数组
Dim dynamicArray() As Double

' 声明多维数组
Dim matrix(3, 3) As Integer      ' 4x4矩阵
Dim table(1 To 5, 1 To 3) As String ' 5行3列表格
```

### 初始化数组

```vb
' 声明时初始化
Dim colors(2) As String
colors(0) = "红色"
colors(1) = "绿色"
colors(2) = "蓝色"

' 使用Array函数（Variant数组）
Dim fruits As Variant
fruits = Array("苹果", "香蕉", "橙子")

' 循环初始化
Dim i As Integer
For i = 0 To 4
    numbers(i) = i * 10
Next i
```

## 一维数组操作

### 基本遍历

```vb
Sub TraverseArray()
    Dim scores(4) As Integer
    Dim i As Integer

    ' 初始化数组
    For i = 0 To 4
        scores(i) = (i + 1) * 20
    Next i

    ' 遍历输出
    For i = 0 To 4
        Debug.Print "分数(" & i & "): " & scores(i)
    Next i

    ' 使用For Each遍历
    Dim score As Variant
    For Each score In scores
        Debug.Print "分数: " & score
    Next score
End Sub
```

### 数组搜索

```vb
Function FindInArray(arr() As Integer, target As Integer) As Integer
    Dim i As Integer

    For i = LBound(arr) To UBound(arr)
        If arr(i) = target Then
            FindInArray = i
            Exit Function
        End If
    Next i

    FindInArray = -1 ' 未找到
End Function

Sub TestSearch()
    Dim numbers(4) As Integer
    Dim result As Integer

    ' 初始化数组
    numbers(0) = 10
    numbers(1) = 20
    numbers(2) = 30
    numbers(3) = 40
    numbers(4) = 50

    ' 搜索元素
    result = FindInArray(numbers, 30)
    If result <> -1 Then
        MsgBox "找到30，位置: " & result
    Else
        MsgBox "未找到30"
    End If
End Sub
```

### 数组排序

```vb
Sub BubbleSort(arr() As Integer)
    Dim i As Integer, j As Integer
    Dim temp As Integer
    Dim n As Integer

    n = UBound(arr) - LBound(arr) + 1

    For i = LBound(arr) To UBound(arr) - 1
        For j = LBound(arr) To UBound(arr) - i - 1
            If arr(j) > arr(j + 1) Then
                ' 交换元素
                temp = arr(j)
                arr(j) = arr(j + 1)
                arr(j + 1) = temp
            End If
        Next j
    Next i
End Sub

Sub TestSorting()
    Dim numbers(4) As Integer
    Dim i As Integer

    ' 初始化随机数组
    Randomize
    For i = 0 To 4
        numbers(i) = Int(Rnd() * 100)
    Next i

    MsgBox "排序前: " & JoinArray(numbers, ", ")

    ' 排序
    BubbleSort numbers

    MsgBox "排序后: " & JoinArray(numbers, ", ")
End Sub

Function JoinArray(arr() As Integer, delimiter As String) As String
    Dim result As String
    Dim i As Integer

    For i = LBound(arr) To UBound(arr)
        If i > LBound(arr) Then result = result & delimiter
        result = result & arr(i)
    Next i

    JoinArray = result
End Function
```

## 多维数组

### 二维数组操作

```vb
Sub MatrixOperations()
    Dim matrix(2, 2) As Integer
    Dim i As Integer, j As Integer

    ' 初始化矩阵
    For i = 0 To 2
        For j = 0 To 2
            matrix(i, j) = i * 3 + j + 1
        Next j
    Next i

    ' 输出矩阵
    For i = 0 To 2
        Dim row As String
        For j = 0 To 2
            row = row & matrix(i, j) & "\t"
        Next j
        Debug.Print row
    Next i
End Sub
```

### 动态多维数组

```vb
Sub DynamicMatrix()
    Dim rows As Integer, cols As Integer
    Dim matrix() As Double
    Dim i As Integer, j As Integer

    rows = 3
    cols = 4

    ' 重定义动态数组
    ReDim matrix(rows - 1, cols - 1)

    ' 初始化
    For i = 0 To rows - 1
        For j = 0 To cols - 1
            matrix(i, j) = i + j * 0.1
        Next j
    Next i

    ' 输出
    For i = 0 To rows - 1
        For j = 0 To cols - 1
            Debug.Print "matrix(" & i & "," & j & ") = " & matrix(i, j)
        Next j
    Next i
End Sub
```

## 动态数组

### 动态数组管理

```vb
Sub DynamicArrayExample()
    Dim numbers() As Integer
    Dim count As Integer
    Dim i As Integer

    ' 初始大小
    count = 3
    ReDim numbers(count - 1)

    ' 填充数据
    For i = 0 To count - 1
        numbers(i) = i + 1
    Next i

    ' 扩展数组（保留原有数据）
    ReDim Preserve numbers(count + 2)

    ' 添加新数据
    For i = count To UBound(numbers)
        numbers(i) = i + 1
    Next i

    MsgBox "数组大小: " & UBound(numbers) + 1
End Sub
```

### 数组参数传递

```vb
Sub ProcessArray(arr() As String)
    Dim i As Integer

    For i = LBound(arr) To UBound(arr)
        arr(i) = UCase(arr(i))
    Next i
End Sub

Sub TestArrayParameter()
    Dim words(2) As String

    words(0) = "hello"
    words(1) = "world"
    words(2) = "twinbasic"

    MsgBox "处理前: " & Join(words, " ")

    ' 传递数组参数
    ProcessArray words

    MsgBox "处理后: " & Join(words, " ")
End Sub
```

## 数组函数

### 常用数组函数

```vb
Sub ArrayFunctionsDemo()
    Dim arr() As Integer
    Dim i As Integer

    ' 使用Array函数创建数组
    arr = Array(5, 2, 8, 1, 9, 3)

    ' 获取数组边界
    Debug.Print "下界: " & LBound(arr)
    Debug.Print "上界: " & UBound(arr)
    Debug.Print "元素个数: " & UBound(arr) - LBound(arr) + 1

    ' 排序数组
    Call QuickSort(arr, LBound(arr), UBound(arr))

    ' 输出排序结果
    For i = LBound(arr) To UBound(arr)
        Debug.Print arr(i)
    Next i
End Sub

' 快速排序算法
Sub QuickSort(arr() As Integer, low As Integer, high As Integer)
    If low < high Then
        Dim pivot As Integer
        pivot = Partition(arr, low, high)

        QuickSort arr, low, pivot - 1
        QuickSort arr, pivot + 1, high
    End If
End Sub

Function Partition(arr() As Integer, low As Integer, high As Integer) As Integer
    Dim pivot As Integer
    Dim i As Integer, j As Integer
    Dim temp As Integer

    pivot = arr(high)
    i = low - 1

    For j = low To high - 1
        If arr(j) <= pivot Then
            i = i + 1
            temp = arr(i)
            arr(i) = arr(j)
            arr(j) = temp
        End If
    Next j

    temp = arr(i + 1)
    arr(i + 1) = arr(high)
    arr(high) = temp

    Partition = i + 1
End Function
```

## 实际应用示例

### 学生成绩管理系统

```vb
Type Student
    Name As String
    Scores(4) As Integer ' 5门课程成绩
    Average As Double
End Type

Sub StudentGradeSystem()
    Dim students(2) As Student
    Dim i As Integer, j As Integer
    Dim total As Integer

    ' 初始化学生数据
    students(0).Name = "张三"
    students(1).Name = "李四"
    students(2).Name = "王五"

    ' 输入成绩
    For i = 0 To 2
        total = 0
        For j = 0 To 4
            students(i).Scores(j) = Int(Rnd() * 41) + 60 ' 60-100分
            total = total + students(i).Scores(j)
        Next j
        students(i).Average = total / 5
    Next i

    ' 输出成绩报告
    For i = 0 To 2
        Debug.Print "学生: " & students(i).Name
        Debug.Print "平均分: " & Format(students(i).Average, "0.0")
        Debug.Print "---"
    Next i
End Sub
```

### 数据统计分析

```vb
Sub DataAnalysis()
    Dim data(99) As Double
    Dim i As Integer
    Dim sum As Double, average As Double
    Dim min As Double, max As Double

    ' 生成随机数据
    Randomize
    For i = 0 To 99
        data(i) = Rnd() * 100
    Next i

    ' 计算统计量
    sum = 0
    min = data(0)
    max = data(0)

    For i = 0 To 99
        sum = sum + data(i)
        If data(i) < min Then min = data(i)
        If data(i) > max Then max = data(i)
    Next i

    average = sum / 100

    MsgBox "数据分析结果:" & vbCrLf & _
           "最小值: " & Format(min, "0.00") & vbCrLf & _
           "最大值: " & Format(max, "0.00") & vbCrLf & _
           "平均值: " & Format(average, "0.00")
End Sub
```

## 最佳实践

### 数组使用建议

1. **选择合适的数组类型**
   - 大小固定时用静态数组
   - 大小变化时用动态数组
   - 多维数据用多维数组

2. **性能优化**
   - 避免频繁的ReDim Preserve
   - 预分配足够的空间
   - 使用合适的数据类型

3. **错误预防**
   - 检查数组边界
   - 验证数组是否已初始化
   - 处理空数组情况

4. **代码可读性**
   - 使用有意义的数组名称
   - 添加适当的注释
   - 保持一致的索引风格

## 常见问题和解决方案

### 数组越界错误

```vb
' 错误的做法
Dim arr(5) As Integer
arr(6) = 10 ' 运行时错误

' 正确的做法
If index >= LBound(arr) And index <= UBound(arr) Then
    arr(index) = 10
Else
    MsgBox "数组索引越界"
End If
```

### 动态数组未初始化

```vb
' 错误的做法
Dim arr() As Integer
arr(0) = 1 ' 运行时错误

' 正确的做法
Dim arr() As Integer
ReDim arr(0)
arr(0) = 1
```

> [!TIP]
>
> 数组是编程的基础，建议多练习不同类型的数组操作。从简单的遍历开始，逐步掌握排序、搜索等高级操作。

> [!NOTE]
>
> twinBASIC的数组功能与VB6和VBA完全兼容，但在性能和功能上有所增强。