---
title: 过程和函数
parent: 参考
permalink: /zh/tB/Reference/Procedures-and-Functions
---

# 过程和函数
{: .no_toc }

过程和函数是twinBASIC程序的基本构建块，用于组织代码、实现功能复用和提高程序的可维护性。

## 过程类型

### Sub过程（子程序）

Sub过程执行特定任务但不返回值：

```vb
Sub DisplayMessage()
    MsgBox "Hello, World!"
End Sub

Sub CalculateArea(length As Double, width As Double)
    Dim area As Double
    area = length * width
    MsgBox "面积是: " & area
End Sub
```

### Function函数

Function函数执行任务并返回值：

```vb
Function AddNumbers(num1 As Integer, num2 As Integer) As Integer
    AddNumbers = num1 + num2
End Function

Function GetUserName() As String
    GetUserName = "张三"
End Function
```

### Property属性过程

属性过程用于封装对象的属性：

```vb
' Property Get - 获取属性值
Property Get Name() As String
    Name = m_Name
End Property

' Property Let - 设置属性值
Property Let Name(value As String)
    m_Name = value
End Property

' Property Set - 设置对象属性
Property Set Document(obj As Object)
    Set m_Document = obj
End Property
```

## 过程声明

### 访问修饰符

- **Public** - 所有模块都可以访问
- **Private** - 只有声明模块可以访问
- **Friend** - 同一项目内可以访问

### 其他修饰符

- **Static** - 过程内的局部变量在调用间保持值
- **Overloads** - 重载过程（如果支持）
- **Overrides** - 重写基类方法（如果支持）

```vb
Public Sub PublicProcedure()
    ' 公共过程
End Sub

Private Function PrivateFunction() As String
    ' 私有函数
End Function

Static Sub StaticProcedure()
    Static counter As Integer
    counter = counter + 1
    MsgBox "调用次数: " & counter
End Sub
```

## 参数传递

### ByVal（按值传递）

参数的值被复制，过程内修改不影响原始变量：

```vb
Sub ModifyByVal(ByVal value As Integer)
    value = value * 2
    ' 原始变量不会被修改
End Sub
```

### ByRef（按引用传递）

参数的引用被传递，过程内修改会影响原始变量：

```vb
Sub ModifyByRef(ByRef value As Integer)
    value = value * 2
    ' 原始变量会被修改
End Sub
```

### 可选参数

使用Optional关键字声明可选参数：

```vb
Function GreetUser(name As String, Optional greeting As String = "你好") As String
    GreetUser = greeting & ", " & name
End Function
```

### 参数数组

使用ParamArray声明可变数量的参数：

```vb
Function SumNumbers(ParamArray numbers() As Variant) As Double
    Dim total As Double
    Dim i As Integer

    For i = 0 To UBound(numbers)
        total = total + numbers(i)
    Next i

    SumNumbers = total
End Function
```

## 过程调用

### 调用语法

```vb
' 调用Sub过程
Call MySub(arg1, arg2)
MySub arg1, arg2

' 调用Function函数
dim result As Integer
result = MyFunction(arg1, arg2)

' 使用Call关键字
Call MyFunction(arg1, arg2)
```

### 命名参数

```vb
Sub SetWindowProperties(Title As String, Width As Integer, Height As Integer)
    ' 过程实现
End Sub

' 使用命名参数调用
SetWindowProperties Title:="我的窗口", Width:=800, Height:=600
```

## 变量作用域和生命周期

### 局部变量

在过程内声明的变量，只在过程执行期间存在：

```vb
Sub LocalVariableExample()
    Dim localVar As Integer
    localVar = 42
    ' localVar只在过程内可用
End Sub
```

### 静态变量

使用Static声明的变量在过程调用间保持值：

```vb
Sub StaticVariableExample()
    Static counter As Integer
    counter = counter + 1
    MsgBox "调用次数: " & counter
End Sub
```

### 模块级变量

在模块级别声明的变量对整个模块可用：

```vb
' 模块级别
Private moduleVar As String

Sub SetModuleVar()
    moduleVar = "模块变量"
End Sub

Sub UseModuleVar()
    MsgBox moduleVar
End Sub
```

## 错误处理

### On Error语句

```vb
Sub ErrorHandlingExample()
    On Error GoTo ErrorHandler

    ' 可能出错的代码
    Dim result As Integer
    result = 10 / 0

    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 11 ' 除零错误
            MsgBox "不能除以零", vbCritical
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description, vbCritical
    End Select
End Sub
```

### 错误传播

```vb
Sub CallerProcedure()
    On Error GoTo ErrorHandler

    Call CalledProcedure

    Exit Sub

ErrorHandler:
    MsgBox "在CalledProcedure中发生错误: " & Err.Description
End Sub

Sub CalledProcedure()
    ' 不处理错误，让调用者处理
    Dim result As Integer
    result = 10 / 0
End Sub
```

## 递归

### 递归函数

```vb
Function Factorial(n As Integer) As Long
    If n <= 1 Then
        Factorial = 1
    Else
        Factorial = n * Factorial(n - 1)
    End If
End Function

Sub TestFactorial()
    MsgBox "5! = " & Factorial(5)
End Sub
```

## 过程和函数的最佳实践

### 代码组织

1. **单一职责** - 每个过程/函数只做一件事
2. **适当大小** - 保持过程和函数的长度合理
3. **清晰命名** - 使用描述性的名称
4. **参数最小化** - 尽量减少参数数量

### 错误处理

1. **始终包含错误处理** - 特别是对于可能失败的操作
2. **提供有意义的错误消息** - 帮助用户理解问题
3. **适当清理资源** - 在错误处理中释放资源

### 性能考虑

1. **避免过度递归** - 递归可能导致堆栈溢出
2. **合理使用ByRef** - 对于大型数据结构使用ByRef
3. **缓存计算结果** - 避免重复计算

## 相关主题

- [**Function语句**](/zh/tB/Core/Function) - 函数声明的详细语法
- [**Sub语句**](/zh/tB/Core/Sub) - 子程序声明的详细语法
- [**Property语句**](/zh/tB/Core/Property) - 属性过程的详细语法
- [**变量声明**](/zh/tB/Core/Dim) - 变量声明和作用域
- [**错误处理**](/zh/tB/Core/Error) - 详细的错误处理机制

> [!TIP]
>
> 良好的过程和函数设计是编写可维护代码的关键。遵循最佳实践，保持代码的清晰和简洁。

> [!NOTE]
>
> twinBASIC的过程和函数与VB6和VBA高度兼容，但提供了更好的类型检查和现代语言特性。