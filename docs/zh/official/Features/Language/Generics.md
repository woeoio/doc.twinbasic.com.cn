---
title: "泛型"
parent: Language Syntax
nav_order: 5
permalink: /Features/Language/Generics
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7347a22a-aa26-4ed3-8a49-eb20b49d0a32'
  PropagateID: '7347a22a-aa26-4ed3-8a49-eb20b49d0a32'
  ReservedCode1: 'f98f488b-ccf5-44c0-a725-4701d6ec628b'
  ReservedCode2: 'f98f488b-ccf5-44c0-a725-4701d6ec628b'
---

# 泛型

::: important
泛型是"复制粘贴代码后搜索替换类型名"的语法糖。

泛型语法提供的所有功能都可以通过编写重复代码来实现。
:::

然而这种重复既容易出错又乏味，因此泛型语法保持代码 DRY[^1]。

泛型语法引入了*类型参数*/*类型变量*，其*类型值*在编译时存在，而常规参数及其值仅在运行时存在。

过程、**Class** 和 **Type**（UDT）可以声明为泛型。

::: warning
泛型 **Type**（UDT）尚不支持成员过程（错误 TB5124）。
:::

## 泛型过程

语法：

* **定义**
  ( **Function** | ... ) *name* **(Of** *type-variable-list* **)** **(** *parameter-list* **)** **As** *return-type*

* 详细形式：
  ( **Function** | **Sub** | **Property** (**Get** | **Let** | **Set**) ) *name* **(Of** *type-var1* [ **,** *type-var2* ...]**)** **(** *parameter-list* **)** **As** *return-type*
  *parameter-list* 可以引用任何类型变量，例如
  `Sub MyPrint(Of T)(ByVal file&, value As T)`

* **调用**或**调用点**
  *name* [ **(Of** *type-argument-list* **)** ] [ **(** *argument-list* **)** ]

* 详细形式：
  *name* [ **(Of** *type-arg1* [ **,** *type-arg2* ] **)** ] [ **(** *argument-list* **)** ]
  定义中 *parameter-list* 中的类型变量将被调用点 *argument-list* 中提供的具体类型替代，除非在 *type-argument-list* 中显式提供。
  未在 *parameter-list* 中引用的类型变量必须在 *type-argument-list* 中作为*类型参数*提供。

在定义中，*type-variable-list*，即 **(Of** *type-var* ... **)**，引入泛型性。类型变量（*type-var*）引入任意类型的标识符，可以在以下位置引用：

- *parameter-list*，
- *return-type*，以及
- 过程体。

在调用中，*type-argument-list*，即 **(Of** *type-arg* ... **)**，根据需要可选，为那些不出现在定义 *parameter-list* 中的类型变量提供类型参数。在 *parameter-list* 中使用的类型变量将自动从调用点对应参数的类型推断出类型值，*除非在 *type-argument-list* 中显式提供了其值*。

### 调用点类型参数

对应可从调用参数类型推断出的类型的类型变量必须构成 *type-variable-list* 的尾部：

```vb
Sub MySub1(Of T, U, V)(argu As U, argv As V): End Sub
MySub1(Of Long)(33%, 42%)                ' Valid: deduced U, V = Integer
MySub1(Of Long, Single)(33%, 42%)        ' Valid: provided U = Single, deduced V = Integer
MySub1(Of Long, Single, Double)(33%, 42%)' Valid: provided U = Single, provided V = Double
MySub1(Of Long, , Double)(33%, 42%)      ' Invalid: omitted deduced type must be trailing
```

因此，要禁止推断，将类型变量放在类型列表中不可推断的类型参数*之前*：

```vb
' T must be provided, it won't be deduced
Function MyFn1(Of T, U)(argu As T) As U: End Function
MyFn1(Of Single, String)(10%)   ' Valid: provided T = Single, U = String
MyFn1(Of, String)(10%)          ' Invalid: T is not trailing so it can't be omitted
                                ' Effectively, the definition of MyFn1 
                                ' suppresses deduction of T
```

只有未使用的类型变量可以在 *type-variable-list* 中第一个位置*之后*省略其参数：

```vb
Sub MySub2(Of T, U, V)(argt As T, argv As V): End Sub
Sub MySub3(Of U, V)(argv As V): End Sub

MySub2(Of Single, , Double)(1%, 2%) ' Valid: unused U can be omitted as it's not the first
                                    ' in the type-parameter-list
MySub3(Of, Single)(22%)             ' Invalid: unused U can't be omitted as it's the first
                                    ' variable in the type-parameter-list
```

### 示例 1

在此示例中，泛型 **First** 和 **Last** Sub 的调用不需要显式提供类型参数值（即 **(Of** ... **)**），因为它们可以从参数类型推断。

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

如果没有泛型语法，过程必须为每个使用的类型 *T* 单独编写。在下面的示例中，需要 `T=String` 和 `T=Integer`：

```vb
Public Function First(Array() As String) As String
    If IsArrayInitialized(Array) Then Return Array(LBound(Array))
End Function
    
Public Function First(Array() As Integer) As Integer
    If IsArrayInitialized(Array) Then Return Array(UBound(Array))
End Function
        
Sub Test()
    Dim strings() As String = Array("A", "B", "C")
    Dim ints() As Integer = Array(1, 2, 3)
    Debug.Assert First(strings) = "A" AndAlso First(ints) = 1
End Sub
```

### 示例 2：部分类型变量不出现在 *parameter-list* 中

类型变量可能不出现在 *parameter-list* 中的常见情况有两种：

- 当它是*返回类型*时，和/或
- 当它在过程体中使用时。

以下示例说明了这些情况：

```vb
Public Function Caster(Of R, U, T)(value As T) As R
    Dim intermediate As U = CType(Of U)(value)
    Return CType(Of R)(intermediate)
End Function

Sub Test()
    ' Type T is deduced to be Single, from the argument 1.23!
    Debug.Assert Example(Of String, Integer)(1.23!) = "1"
    ' Type T is explicitly provided as Double. The argument is cast to that type.
    Debug.Print Example(Of String, Integer, Double)(1.23!) = "1"
End Sub
```

函数 **Caster** 在其作用域内引入了三个类型变量：

- **T** 默认从 **value** 参数的类型推断，或在调用时提供，
- **R** 是返回类型，必须在调用时提供，
- **U** 是函数体中使用的类型，必须在调用时提供。

::: tip
定义中类型变量的顺序可以安排为尾部变量在 *parameter-list* 中使用。这样如果调用点从参数类型推断的类型合适，这些类型变量的类型值可以省略。
:::

1. 在调用 `Example(Of String, Integer)(1.23!)` 中，
   *T* 被推断为 **Single**，*U* 被提供并设为 **Integer**，**R** 被提供并设为 **String**。

2. 在调用 `Example(Of String, Integer, Double)(1.23!)` 中，
   *T* 被提供并设为 **Double**，*U* 被提供并设为 **Integer**，**R** 被提供并设为 **String**。
   * 首先，编译器将 `1.23!` 转换为形参的类型，即 **Double** `1.23#`。
   * 然后，在函数体中，*value* 在赋值给 **intermediate** 时被转换为 **Integer**。
   * 最后，同样在函数体中，**intermediate** 被转换为结果类型 **String** 并返回。


## 泛型类和 UDT

语法：

* **定义**
  [ **Class** | ... ] *name* **(Of** *type-variable-list* **)**
* 详细形式：
  [ **Class** | **Type** ] *name* **(Of** *type-var1* [ **,** *type-var2* ... ] **)**
* **实例化**
  *name* **(Of** *type-argument-list* **)**
* 详细形式：
  *name* **(Of** *type-arg1* [ **,** *type-arg2* ... ] **)**

类型变量（*type-var*）引入任意类型的标识符，可以在类体内的任何位置引用。

::: important
实例化泛型类和 UDT 时，**所有类型参数**都必须提供。

如果未提供，可能会导致代码生成错误和运行时的静默失败。
:::

### 正确和不正确实例化的示例

```vb
Class MyClass(Of T, U)
    Function DumpT%(value As T): Debug.Print value: End Function
    Function DumpU%(value As U): Debug.Print value: End Function
End Class

Dim i As New MyClass(Of Integer) ' Invalid, U is not provided, silent error
i.DumpT(12)     ' Valid, uses T = Integer
i.DumpU(12)     ' Invalid, uses undefined U, causes a codegen/silent error

Dim j As New MyClass(Of Integer, Single)   ' Correct instantiation
j.DumpU(12)     ' Valid, uses U = Single
```

### 类型实例与对象实例

泛型类允许用实例化时提供的类型参数替换类型变量。每次使用泛型类名加类型参数都会将泛型类类型实例化为一个常规类类型。

::: info
编译时：通过调用类名加参数来实例化泛型类。

运行时：可以创建那些实例化类型的对象。
:::

在下面的示例中，实例化了两个类类型：**MyClass**(**Integer**) 和 **MyClass**(**String**)。这发生在编译时。运行时没有创建 **MyClass** 的实例，因为两个变量都默认为 **Nothing**：

```vb
Class MyClass(Of T) ' ...

Sub Test()
    Dim intVar As MyClass(Integer)
    Dim strVar As MyClass(String)
    Debug.Assert intVar Is Nothing AndAlso strVar Is Nothing
End Sub
```

### List 类示例

泛型类允许在整个类的方法中使用类型参数。以下示例展示了创建一个泛型 List 类：

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

### List UDT 示例

虽然 twinBASIC 中泛型 UDT 尚不支持成员过程，但数据成员是支持的：

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

[^1]: DRY = Don't Repeat Yourself