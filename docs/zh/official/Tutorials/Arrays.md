---
title: "数组"
parent: Tutorials
permalink: /Tutorials/Arrays
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5254c09b-7179-45fc-a930-8509c7f80990'
  PropagateID: '5254c09b-7179-45fc-a930-8509c7f80990'
  ReservedCode1: 'afd03130-e92b-4a88-a7c1-304f8a085f5b'
  ReservedCode2: 'afd03130-e92b-4a88-a7c1-304f8a085f5b'
---

# 数组

数组分为两种：

1. 固定大小数组，其大小规格为编译时常量。
   `Dim MyInts(10) As Integer`
   `Dim MyLongs(10 To 19) As Long`
2. 动态数组，初始时不进行初始化，使用前必须（重新）定义维度。
   `Dim MyLongs() As Long`

固定大小数组的内存和运行时开销低于动态数组。作为小型数组——不超过8个缓存行的大小，即不超过512字节——它们的性能更好。

在更大的数组中，创建（定义维度）时动态数组的开销变得可以忽略不计。然而，无论动态数组的大小如何，元素访问仍有轻微的运行时开销。


## 数组声明语法

固定大小数组只能用于变量或类和UDT的字段。
动态数组可用于变量、字段、参数类型和返回类型。
固定大小数组可以作为接受动态数组的参数传递。

::: info

固定大小数组不能直接作为返回类型使用。当包装在UDT中时可以返回。
:::

* 过程中变量声明的语法
  **Dim** | **Static** name **()** [ **As** type ]  -- 动态数组
  **Dim** | **Static** name **(** size [ **,** size ... ] **)** [ **As** type ]  -- 固定数组
* 过程参数类型的语法；仅动态数组有效，以下两种语法等价
  name **()** [ **As** type ]   
  name **As** type **()**
* 过程返回类型的语法；仅动态数组有效
  name **As** type **()**
* 类中字段声明的语法
  **Dim** | **Private** | **Protected** | **Public** name **()** [ **As** type ]  -- 动态数组
  **Dim** | **Private** | **Protected** | **Public** name **(** size [ **,** size ....] **)** [ **As** type ]  -- 静态数组
* 类型（UDT）中字段声明的语法
  name **()** [ **As** type ]  -- 动态数组
  name **(** size [ **,** size ....] **)** [ **As** type ]  -- 静态数组

每个大小规格是一个范围，但下界是可选的，默认为当前有效的**Option Base**：

- ubound，例如
  `Dim A(10, 20)`
- lbound **To** ubound -- 范围，包含两个边界，例如
  `Dim A(1 To 10, 1 To 20)`

两种大小规格变体可以在一个声明中混合使用，例如
`Dim B(10, 1 To 20)`

以下是**Option Base**如何控制维度默认下界的方式：

```vb
Option Base 0
Dim A(10, 20)   ' is equivalent to...
Dim A(0 To 10, 0 To 20)   ' i.e. a 21 x 11 array

Option Base 1
Dim A(10, 20)   ' is equivalent to...
Dim A(1 To 10, 1 To 20)    ' i.e. a 20 x 10 array
```

只有动态数组可以作为过程参数传递：

```vb
Sub OkSub1(data() As Byte)     ' Dynamic array parameter
Sub OkSub2(data As Byte())     ' Alternate syntax

Sub BadSub1(data(10) As Byte)  ' Invalid, fixed array types are not allowed as parameters...
Sub BadSub2(data As Byte(10))  ' ... in neither syntax          
```

## 定义动态数组维度

动态数组在声明后处于未初始化状态。除了定义维度外，不能以任何方式使用。维度定义通过**ReDim**语句执行：

```vb
Dim array()
Debug.Assert IsArrayInitialized(array) = False
Debug.Print LBound(array)  ' raises a runtime error since the array is uninitialized,
                            ' and no operations are valid on it other than a ReDim

ReDim array(1 to 10)       ' now the array is initialized
Debug.Assert IsArrayInitialized(array) = True
Debug.Assert LBound(array) = 1
Debug.Assert UBound(array) = 10
```

**ReDim**有两种操作模式：默认情况下，它丢弃数组中的现有数据。可选地，它可以在新维度允许的范围内保留现有数据。

语法：

* **ReDim** [ **Preserve** ] name **(** size [ **,** size ...] **)**

::: important

使用**ReDim Preserve**只能更改数组维度的上界。
非保留的**ReDim**允许任意更改。
:::

```vb
Dim a() As Long

ReDim a(1 To 2)             ' Initial dimensioning
a(1) = 10
a(2) = 20

ReDim Preserve a(1 To 3)    ' Change of an upper bound of 1st dimension
Debug.Assert a(1) = 10
Debug.Assert a(2) = 20
Debug.Assert a(3) = 0

ReDim Preserve a(2 To 3)    ' Causes a runtime error

ReDim a(5 To 8)             ' Change of both bounds of 1st dimension while losing data
Debug.Assert a(5) = 0
```

## 确定数组维度边界

*已初始化*数组的每个维度都有关联的下界和上界。这些边界通过**LBound**和**UBound**函数访问。

```vb
Dim array(1 To 10, 3 To 20)
Debug.Assert LBound(array) = 1		' 1st dimension by default
Debug.Assert LBound(array, 1) = 1	' 1st dimension
Debug.Assert LBound(array, 2) = 3   ' 2nd dimension
Debug.Assert UBound(array, 2) = 20  ' 2nd dimension, upper bound'
```

## 确定数组大小

对未初始化的数组使用**LBound**或**UBound**会导致运行时错误。因此，确定数组给定维度中元素数量的函数必须首先检查数组是否已初始化：

```vb
Sub ArrayLen(Of T)(array() Of T, ByVal dimension% = 1) As Long
    ' zero is the default return value    
    If IsArrayInitialized(array) Then
        Return 1 + UBound(array, dimension) - LBound(array, dimension)
    End If
End Sub
```

另见[一维数组的高效低级访问](#一维数组的高效低级访问)。

## 数组元素访问

要访问数组元素，应在数组变量名后以括号列表形式提供所有维度的索引：

```vb
Dim array(1 To 10) As Long

array(1) = 42
Debug.Assert array(1) = 42

Dim array2(1 To 10, 1 To 2) As Long
array(1, 2) = 42
Debug.Assert array(1, 2) = 42
```

数组元素初始化为零/null，与twinBASIC中所有其他类型一样：

```vb
Dim intArray(1 To 10) As Integer
Debug.Assert intArray(1) = 0 AndAlso intArray(10) = 0

Dim strArray(20 To 25) As String
Debug.Assert strArray(20) = vbNullString
```

## 返回数组

任何数组都可以作为动态数组返回：

```vb
Function Fn1() As Long()
    Dim array1() As Long
    Dim array2(11) As Long
    Return array1
    Return array2
End Function
```

要返回固定大小数组，必须将其包装在UDT中：

```vb
Type Wrapper
    array(11) As Long
End Type

Function Fn2() As Wrapper
    ' The procedure name is used to access the returned value
    Fn2.array(5) = 10
End Function

Sub Test()
    Dim arr As Wrapper = Fn2()
    Debug.Assert arr.array(5) = 10
End Sub
```

## 一维数组的高效低级访问

在twinBASIC中，数组类型实现为指向Windows API **SAFEARRAY**结构的指针的指针。

这可以用于高效访问：

- 第一维度中的元素计数
- 指向数据的指针（指向数组中的第一个元素）
- 数组的字节大小

```vb
Function ArrayLen(Of T)(array() As T) As Long
    Dim p As LongPtr
    GetMemPtr(VarPtr(array), p)
    If p <> 0 Then	' if the array is initialized
    #If win64 Then
        GetMem4(p + 24, Len)
    #Else
        GetMem4(p + 16, Len)
    #End If
    End If
End Function

Function ArrayPtr(Of T)(array() As T) As LongPtr
    Dim p As LongPtr
    GetMemPtr(VarPtr(array), p)
    If p <> 0 Then
    #If win64 Then
        GetMemPtr(p + 16, Ptr)
    #Else
        GetMemPtr(p + 12, Ptr)
    #End If
    End If
End Function

Function ArrayBytes(Of T)(array() As T) As Long
    Return ArrayLen(array) * LenB(Of T)
End Function

```

这些函数用于将数组和数组计数传递给外部的**Declare**声明的过程。例如：

```vb
Declare Sub SaveData Lib "mylib" (ByVal ptr As LongPtr, ByVal count&)
Declare Sub WriteData Lib "mylib" (ByVal ptr As LongPtr, ByVal numBytes&)

Sub Save(array() As Long)
    Debug.Assert ArrayBytes(array) = ArrayLen(array) * 4   ' 4 = size of a Long
    SaveLongData(ArrayPtr(array), ArrayLen(array))
End Sub
        
Sub Write(array() As Long)
    WriteData(ArrayPtr(array), ArrayBytes(array))
End Sub
```

如果没有这些函数，这会更加繁琐：

```vb
Sub Save(array() As Long)
    If IsArrayInitialized(array) Then
        SaveLongData( _
            VarPtr(array(LBound(array))), _
            1 + UBound(array) - LBound(array))
    Else
        SaveLongData(0, 0)   ' ArrayLen, ArraySize, and ArrayPtr would
                             ' return 0 for an uninitialized array
    End If
End Sub
```

<!--
##  Using an array to access elements of a string

Dynamic arrays are internally represented with a **STATICARRAY** struct. It is possible to synthesize such a struct for wide strings (UTF-16 encoded) to allow quick enumeration.
-->