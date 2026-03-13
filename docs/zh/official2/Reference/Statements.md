---
title: 语句参考
parent: 参考
permalink: /zh/tB/Reference/Statements
---

# 语句参考
{: .no_toc }

twinBASIC提供了丰富的语句集合，用于控制程序流程、处理数据、管理资源和实现各种编程功能。本参考提供了所有twinBASIC语句的完整指南。

## 程序流程控制

### 条件语句

#### If...Then...Else

```vb
If condition Then
    ' 条件为真时执行的代码
ElseIf anotherCondition Then
    ' 另一个条件为真时执行的代码
Else
    ' 所有条件都为假时执行的代码
End If
```

#### Select Case

```vb
Select Case expression
    Case value1
        ' expression等于value1时执行
    Case value2, value3
        ' expression等于value2或value3时执行
    Case Else
        ' 所有情况都不匹配时执行
End Select
```

### 循环语句

#### For...Next

```vb
For counter = start To end [Step step]
    ' 循环体
Next [counter]
```

#### For Each...Next

```vb
For Each element In collection
    ' 循环体
Next [element]
```

#### Do...Loop

```vb
Do [{While | Until} condition]
    ' 循环体
Loop

Do
    ' 循环体
Loop [{While | Until} condition]
```

#### While...Wend

```vb
While condition
    ' 循环体
Wend
```

### 跳转语句

#### GoTo

```vb
GoTo label
' ...
label:
' 跳转目标
```

#### Exit语句

```vb
Exit Do      ' 退出Do循环
Exit For     ' 退出For循环
Exit Sub     ' 退出Sub过程
Exit Function ' 退出Function函数
Exit Property ' 退出Property过程
```

#### Continue语句

```vb
Continue Do   ' 继续下一次Do循环
Continue For  ' 继续下一次For循环
```

## 变量和常量声明

### 变量声明

#### Dim

```vb
Dim variableName [As dataType]
Dim var1 As Integer, var2 As String
```

#### Private

```vb
Private variableName As dataType
```

#### Public

```vb
Public variableName As dataType
```

#### Static

```vb
Static variableName As dataType
```

### 常量声明

#### Const

```vb
Const constantName As dataType = value
Const PI As Double = 3.14159
```

### 数组声明

```vb
Dim arrayName(upperBound) As dataType
Dim multiArray(1 To 3, 1 To 4) As Integer
Dim dynamicArray() As String
```

## 过程声明

### Sub过程

```vb
[Public | Private] Sub procedureName([parameters])
    ' 过程体
End Sub
```

### Function函数

```vb
[Public | Private] Function functionName([parameters]) [As returnType]
    ' 函数体
    functionName = returnValue
End Function
```

### Property过程

```vb
Property Get propertyName([parameters]) As dataType
    ' 获取属性值
End Property

Property Let propertyName([parameters], value As dataType)
    ' 设置属性值
End Property

Property Set propertyName([parameters], value As Object)
    ' 设置对象属性
End Property
```

## 错误处理

### On Error

```vb
On Error GoTo label
On Error Resume Next
On Error GoTo 0
```

### Resume

```vb
Resume          ' 重新执行出错语句
Resume Next     ' 执行下一条语句
Resume label    ' 跳转到指定标签
```

### Error

```vb
Error errorNumber
```

## 文件操作

### 文件控制

```vb
Open pathname For mode [Access access] [lock] As [#]filenumber
Close [[#]filenumber[, [#]filenumber]...]
Reset
```

### 文件读写

```vb
Input #filenumber, variableList
Line Input #filenumber, variable
Print #filenumber, [outputList]
Write #filenumber, [outputList]
```

### 文件管理

```vb
FileCopy source, destination
Kill pathname
Name oldPath As newPath
```

### 目录操作

```vb
ChDir path
ChDrive drive
MkDir path
RmDir path
```

## 对象操作

### 对象创建和销毁

```vb
Set objectVariable = New className
Set objectVariable = Nothing
```

### 对象操作

```vb
With objectExpression
    .property = value
    .method
End With
```

## 类型定义

### 用户定义类型

```vb
Type typeName
    member1 As dataType
    member2 As dataType
End Type
```

### 枚举

```vb
Enum enumName
    member1 = value1
    member2 = value2
End Enum
```

## 编译器指令

### Option语句

```vb
Option Explicit      ' 强制显式声明变量
Option Base {0 | 1} ' 设置数组下界
Option Compare {Binary | Text} ' 字符串比较方式
Option Private Module ' 模块私有化
```

### #Const 和 #If

```vb
#Const constantName = expression

#If expression Then
    ' 条件编译代码
#ElseIf expression Then
    ' 其他条件代码
#Else
    ' 其他情况代码
#End If
```

## 应用程序控制

### 程序执行

```vb
Call procedureName([arguments])
End [Sub | Function | Property]
Stop
```

### 外部程序

```vb
Shell pathName[, windowStyle]
AppActivate title[, wait]
SendKeys string[, wait]
```

## 注册表操作

```vb
SaveSetting appname, section, key, setting
GetSetting(appname, section, key[, default])
DeleteSetting appname, section[, key]
```

## 其他语句

### 调试

```vb
Debug.Print expression
Stop
Assert condition
```

### 事件处理

```vb
Event eventName([parameters])
RaiseEvent eventName([arguments])
```

### 异步操作

```vb
Async Function functionName() As Task(Of returnType)
Await expression
```

## 语句使用指南

### 代码风格

1. **缩进** - 使用一致的缩进（通常4个空格）
2. **空行** - 在逻辑块之间使用空行
3. **注释** - 为复杂的逻辑添加注释
4. **命名** - 使用有意义的标识符名称

### 性能考虑

1. **避免深层嵌套** - 保持代码结构扁平
2. **合理使用循环** - 避免不必要的迭代
3. **选择合适的数据结构** - 根据需求选择数组、集合等
4. **及时释放资源** - 关闭文件、释放对象等

### 错误预防

1. **输入验证** - 验证所有输入参数
2. **边界检查** - 检查数组边界和循环条件
3. **异常处理** - 使用适当的错误处理机制
4. **资源清理** - 确保异常情况下资源被正确释放

## 相关参考

- [**核心语句**](/zh/tB/Core) - 基本语句的详细说明
- [**过程和函数**](/zh/tB/Reference/Procedures-and-Functions) - 过程和函数的完整指南
- [**内置模块**](/zh/tB/Modules) - 内置函数的参考
- [**术语表**](/zh/tB/Reference/Glossary) - 编程术语定义

> [!TIP]
>
> 熟练掌握各种语句的使用是编写高效twinBASIC程序的关键。建议通过实际编程练习来加深理解。

> [!NOTE]
>
> twinBASIC的语句与VB6和VBA高度兼容，但提供了更多现代语言特性和改进的错误处理机制。