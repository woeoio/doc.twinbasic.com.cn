---
title: 泛型
parent: 语言语法
nav_order: 5
permalink: /Features/Language/Generics
---

# 泛型

> [!重要]
> 泛型是复制粘贴代码然后搜索替换类型名称的语法糖。
>
> 不使用泛型语法也可以实现泛型语法提供的所有功能，只需编写重复代码。

然而，这种重复容易出错且繁琐，因此泛型语法保持代码 DRY[^1]。

泛型语法引入了*类型参数* / *类型变量*，其*类型值*在编译期间存在，而不是仅在运行时存在的常规参数及其值。

过程、**类**和**类型**（UDT）可以设为泛型。

> [!警告]
> 泛型**类型**（UDT）尚不支持成员过程（错误 TB5124）。

## 泛型过程

语法：

* **定义**
  ( **Function** | ... ) *名称* **(Of** *类型变量列表* **)** **(** *参数列表* **)** **As** *返回类型*

* 详细说明：
  ( **Function** | **Sub** | **Property** (**Get** | **Let** | **Set**) ) *名称* **(Of** *类型变量1* [ **,** *类型变量2* ...]**)** **(** *参数列表* **)** **As** *返回类型*
  *参数列表*可以引用任何类型变量，例如
  `Sub MyPrint(Of T)(ByVal file&, value As T)`

* **调用**或**调用点**
  *名称* [ **(Of** *类型参数列表* **)** ] [ **(** *参数列表* **)** ]

* 详细说明：
  *名称* [ **(Of** *类型参数1* [ **,** *类型参数2* ] **)** ] [ **(** *参数列表* **)** ]
  定义*参数列表*中的类型变量将替换为*参数列表*中提供的具体或参数类型，除非在*类型参数列表*中显式提供为类型参数。
  未在*参数列表*中引用的类型变量必须在*类型参数列表*中作为*类型参数*提供。

在定义中，*类型变量列表*，即 **(Of** *类型变量* ... **)**，引入泛型性。类型变量（*类型变量*）引入可以在以下位置引用的任意类型的标识符：

- *参数列表*，
- *返回类型*，以及
- 过程的主体。

在调用中，*类型参数列表*，即 **(Of** *类型参数* ... **)**，是可选的，根据需要为那些未出现在定义的*参数列表*中的类型变量提供类型参数。在*参数列表*中使用的类型变量在调用点被分配各自参数的类型值，*除非在*类型参数列表*中显式提供了它们的值*。

### 调用点类型参数

对应于可以从调用参数类型推断的类型类型变量必须形成*类型变量列表*的尾部：

```vb
Sub MySub1(Of T, U, V)(argu As U, argv As V): End Sub
MySub1(Of Long)(33%, 42%)                ' 有效：推断 U, V = Integer
MySub1(Of Long, Single)(33%, 42%)        ' 有效：提供 U = Single，推断 V = Integer
MySub1(Of Long, Single, Double)(33%, 42%)' 有效：提供 U = Single，提供 V = Double
MySub1(Of Long, , Double)(33%, 42%)      ' 无效：省略的推断类型必须是尾部的
```

因此，要抑制推断，将类型变量放在类型列表中*非可推断类型参数之前*：

```vb
' T 必须提供，不会被推断
Function MyFn1(Of T, U)(argu As T) As U: End Function
MyFn1(Of Single, String)(10%)   ' 有效：提供 T = Single, U = String
MyFn1(Of, String)(10%)          ' 无效：T 不是尾部的，所以不能省略
                                ' 实际上，MyFn1 的定义
                                ' 抑制了 T 的推断
```

只有未使用的类型变量才能在*类型变量列表*中*第一个之后*的位置省略其参数。：

```vb
Sub MySub2(Of T, U, V)(argt As T, argv As V): End Sub
Sub MySub3(Of U, V)(argv As V): End Sub

MySub2(Of Single, , Double)(1%, 2%) ' 有效：未使用的 U 可以省略，因为它不是第一个
                                    ' 在类型参数列表中
MySub3(Of, Single)(22%)             ' 无效：未使用的 U 不能省略，因为它是第一个
                                    ' 类型参数列表中的变量
```

### 示例 1

在此示例中，泛型**First**和**Last**子程序的调用不需要使用*类型参数列表*显式提供类型参数值，即 **(Of** ... **)**，因为它们可以从参数类型推断。

```vb
Public Function First(Of T)(Array() As T) As T
    If IsArrayInitialized(Array) Then Return Array(LBound(Array))
End Function

Public Function Last(Of T)(Array() As T) As T
    If IsArrayInitialized(Array) Then Return Array(UBound(Array))
End Function

Sub Test()
    Dim data() As String = Array("A", "B", "C")
    Debug.Assert First(data) = "A"
    Debug.Assert Last(data) = "C"
End Sub
```

没有泛型语法，过程将不得不为它使用的每种类型*T*编写。在下面的示例中，这将是`T=String`和`T=Integer`：

```vb
Public Function First(Array() As String) As String
    If IsArrayInitialized(Array) Then Return Array(LBound(Array))
End Function

Public Function First(Array() As Integer) As Integer
    If IsArrayInitialized(Array) Then Return Array(LBound(Array))
End Function

Sub Test()
    Dim strings() As String = Array("A", "B", "C")
    Dim ints() As Integer = Array(1, 2, 3)
    Debug.Assert First(strings) = "A" AndAlso First(ints) = 1
End Sub
```

### 示例 2，其中一些类型变量未出现在*参数列表*中

当类型变量可能不出现在*参数列表*中时，有两种常见情况：

- 当它是*结果类型*时，和/或
- 当它在过程的主体中使用时。

下面的示例说明了这些可能性：

```vb
Public Function Caster(Of R, U, T)(value As T) As R
    Dim intermediate As U = CType(Of U)(value)
    Return CType(Of R)(intermediate)
End Function

Sub Test()
    ' 类型 T 被推断为 Single，来自参数 1.23!
    Debug.Assert Example(Of String, Integer)(1.23!) = "1"
    ' 类型 T 被显式提供为 Double。参数被转换为该类型。
    Debug.Print Example(Of String, Integer, Double)(1.23!) = "1"
End Sub
```

函数**Caster**在其范围内引入了三个类型变量：

- **T**默认从**value**参数的类型推断，或可以在调用时提供，
- **R**是结果类型，必须在调用时提供，
- **U**是函数主体中使用的类型，必须在调用时提供。

> [!提示]
> 定义中类型变量的顺序可以选择，以便尾部变量在*参数列表*中使用。如果在调用点从参数类型推断的类型合适，则可以省略这些类型变量的类型值。

1. 在调用`Example(Of String, Integer)(1.23!)`中，
   *T*被推断为**Single**，*U*被提供并设置为**Integer**，**R**被提供并设置为**String**。

2. 在调用`Example(Of String, Integer, Double)(1.23!)`中，
    *T*被提供并设置为**Double**，*U*被提供并设置为**Integer**，*R*被提供并设置为**String**。
   * 首先，编译器将`1.23!`转换为形式参数的类型，即**Double**`1.23#`。
   * 然后，在函数主体中，当*value*被赋值给**intermediate**时，它被转换为**Integer**。
   * 最后，也在主体中，**intermediate**被转换为**String**的结果类型，并返回。


## 泛型类和 UDT

语法：

* **定义**
  [ **Class** | ... ] *名称* **(Of** *类型变量列表* **)**
* 详细说明：
  [ **Class** | **Type** ] *名称* **(Of** *类型变量1* [ **,** *类型变量2* ... ] **)**
* **实例化**
  *名称* **(Of** *类型参数列表* **)**
* 详细说明：
  *名称* **(Of** *类型参数1* [ **,** *类型参数2* ... ] **)**

类型变量（*类型变量*）引入可以在类主体内任何位置引用的任意类型的标识符。

> [!重要]
> 实例化泛型类和 UDT 时，必须提供**所有类型参数**。
>
> 如果没有，可能会发生代码生成错误和运行时静默失败。

### 正确和错误实例化的示例

```vb
Class MyClass(Of T, U)
    Function DumpT%(value As T): Debug.Print value: End Function
    Function DumpU%(value As U): Debug.Print value: End Function
End Class

Dim i As New MyClass(Of Integer) ' 无效，U 未提供，静默错误
i.DumpT(12)     ' 有效，使用 T = Integer
i.DumpU(12)     ' 无效，使用未定义的 U，导致代码生成/静默错误

Dim j As New MyClass(Of Integer, Single)   ' 正确实例化
j.DumpU(12)     ' 有效，使用 U = Single
```

### 类型实例与对象实例

泛型类使得可以用实例化中提供的类型参数替换类型变量。每次使用类型参数提及泛型类名称都会将泛型类类型实例化为常规类类型。

> [!注意]
> 编译时：通过调用其名称和参数来实例化泛型类。
>
> 运行时：可以创建这些实例化类型的对象。

在下面的示例中，实例化了两个类类型：**MyClass**(**Integer**)和**MyClass**(**String**)。这发生在编译时。运行时没有创建**MyClass**的实例，因为两个变量默认为**Nothing**：

```vb
Class MyClass(Of T) ' ...

Sub Test()
    Dim intVar As MyClass(Integer)
    Dim strVar As MyClass(String)
    Debug.Assert intVar Is Nothing AndAlso strVar Is Nothing
End Sub
```

### 列表类示例

类泛型允许在整个类的方法中使用类型。以下示例显示了这一点，制作一个泛型列表类：

```vb
[COMCreatable(False)]
Class List(Of T)
    Private mData() As T

    Sub New(preset() As T)
        mData = preset
    End Sub

    [DefaultMember]
    Function GetAt(ByVal index&) As T
        Return mData(index)
    End Function
End Class

Sub Test()
    Dim li As Any = New List(Of Integer)(Array(5, 6, 7))
    Debug.Assert li(0) = 5 AndAlso li(2) = 7
End Sub

```

### 列表 UDT 示例

虽然泛型 UDT 在 twinBASIC 中尚不支持成员过程，但支持数据成员：

```vb
Type ListU(Of T)
    value() As T
End Type

Sub Test()
    Dim lu As ListU(Of Long)
    ReDim lu.value(10)
    lu.value(0) = 5
End Sub
```

[^1]: DRY = 不要重复自己