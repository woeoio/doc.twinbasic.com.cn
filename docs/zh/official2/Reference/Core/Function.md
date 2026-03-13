---
title: Function
parent: 语句
permalink: /zh/tB/Core/Function
---

# Function
{: .no_toc }

声明用户定义函数过程的名称、参数和代码，这些代码构成函数的主体。

语法：**[Public | Private] [Static] Function** *functionname* [ **(** *[parameterlist]* **)** ] [ **As** *type* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *functionname* = *expression* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ **Exit Function** ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]
  &nbsp;&nbsp;&nbsp;&nbsp;[ *functionname* = *expression* ]
**End Function**

**Public**
: 可选。可选关键字，用于指定所有模块中的所有过程都可以访问该**Function**过程。

**Private**
: 可选。可选关键字，用于指定只有声明该过程的模块中的其他过程才能访问该**Function**过程。

**Static**
: 可选。可选关键字，用于指定**Function**过程中的所有局部变量的值在调用之间保持不变。

*functionname*
: 必需。**Function**过程的名称；遵循标准变量命名约定。

*parameterlist*
: 可选。代表在调用时要传递给**Function**过程的参数的变量列表，多个变量用逗号分隔。如果没有参数，则为空。

*type*
: 可选。**Function**过程返回的数据类型；可以是Byte、Boolean、Integer、Long、Currency、Single、Double、Decimal、Date、String、Object、Variant或用户定义类型。

*statements*
: 可选。在**Function**过程中执行的任何语句组。

*expression*
: 可选。函数的返回值。

使用**Function**语句创建函数过程。函数可以使用*functionname* = *expression*语法返回值，或者在函数体内使用**Return**语句。

函数过程的名称必须以字母开头，并且只能包含字母、数字和下划线字符。函数名称的最大长度为255个字符。

**Function**过程可以具有任意数量的参数，这些参数可以是必需或可选的。参数可以是任何数据类型，包括用户定义类型。

### 示例

此示例显示如何使用**Function**语句创建简单的函数。

```vb
Function AddNumbers(ByVal num1 As Integer, ByVal num2 As Integer) As Integer
    AddNumbers = num1 + num2
End Function

Sub TestAddNumbers()
    Dim result As Integer
    result = AddNumbers(5, 3)
    MsgBox "结果是: " & result
End Sub
```

### 使用可选参数

函数可以包含可选参数：

```vb
Function GreetUser(ByVal name As String, Optional ByVal greeting As String = "你好") As String
    GreetUser = greeting & ", " & name
End Function

Sub TestGreetUser()
    MsgBox GreetUser("张三") ' 输出: 你好, 张三
    MsgBox GreetUser("李四", "欢迎") ' 输出: 欢迎, 李四
End Sub
```

### 使用ByRef参数

默认情况下，参数通过引用传递（ByRef）：

```vb
Function DoubleValue(ByRef value As Integer) As Integer
    value = value * 2
    DoubleValue = value
End Function

Sub TestDoubleValue()
    Dim num As Integer
    num = 5
    MsgBox "原始值: " & num ' 输出: 5
    Call DoubleValue(num)
    MsgBox "调用函数后的值: " & num ' 输出: 10
End Sub
```

### 返回数组

函数可以返回数组：

```vb
Function CreateArray() As Integer()
    Dim arr(1 To 3) As Integer
    arr(1) = 10
    arr(2) = 20
    arr(3) = 30
    CreateArray = arr
End Function

Sub TestCreateArray()
    Dim myArray() As Integer
    myArray = CreateArray()
    MsgBox "数组第一个元素: " & myArray(1)
End Sub
```

> [!NOTE]
>
> 函数名称用作返回值变量。在函数内为函数名称赋值会设置返回值。
>
> 使用**Exit Function**语句可以从函数中的任何位置退出函数。