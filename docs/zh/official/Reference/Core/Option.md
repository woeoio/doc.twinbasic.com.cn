---
title: Option
parent: 语句
permalink: /zh/tB/Core/Option
---

# Option
{: .no_toc }

在模块级别控制某些编译行为的默认设置。

## Option Base

设置数组声明的默认下界。

语法：**Option Base** { 0 | 1 }

**Option Base**语句为模块中声明的所有数组设置默认下界，除非数组声明中使用了**To**子句显式指定下界。

如果未指定**Option Base**语句，则数组的默认下界为0。

### 示例

```vb
Option Base 1

Sub ArrayExample()
    Dim MyArray(5) As Integer ' 数组索引从1到5
    Dim i As Integer

    For i = 1 To 5
        MyArray(i) = i * 10
    Next i
End Sub
```

## Option Compare

指定字符串比较方法。

语法：**Option Compare** { **Binary** | **Text** }

**Binary**
: 基于字符的内部二进制表示形式从排序顺序派生的比较。在Microsoft Windows中，二进制比较区分大小写。

**Text**
: 基于由系统区域设置确定的不区分大小写的文本排序顺序进行的比较。

### 示例

```vb
Option Compare Text

Sub StringCompareExample()
    Dim str1 As String, str2 As String
    str1 = "Hello"
    str2 = "hello"

    If str1 = str2 Then
        MsgBox "字符串相等（不区分大小写）"
    Else
        MsgBox "字符串不相等"
    End If
End Sub
```

## Option Explicit

强制显式声明模块中的所有变量。

语法：**Option Explicit**

当使用**Option Explicit**时，必须在首次使用变量之前使用**Dim**、**Private**、**Public**或**ReDim**语句显式声明所有变量。如果尝试使用未声明的变量名，则会发生编译时错误。

### 示例

```vb
Option Explicit

Sub ExplicitExample()
    Dim myVariable As Integer ' 必须声明变量
    myVariable = 42
    MsgBox myVariable
    ' 使用未声明的变量会导致编译错误
End Sub
```

## Option Private

标记模块为私有，限制其对项目其他部分的访问。

语法：**Option Private Module**

**Option Private Module**语句使模块及其内容对整个项目私有，但对引用该项目的其他项目不可见。

### 示例

```vb
Option Private Module

' 此模块中的代码对整个项目可用
' 但对引用此项目的其他项目不可用
```

## Option Explicit On/Off (twinBASIC特定)

twinBASIC支持显式控制Option Explicit行为的编译器指令。

语法：**#Option Explicit** { **On** | **Off** }

**On**
: 启用显式变量声明要求（相当于Option Explicit）

**Off**
: 禁用显式变量声明要求

### 示例

```vb
#Option Explicit On

Sub ExplicitControlExample()
    ' 启用显式声明要求
    Dim myVar As String
    myVar = "Hello World"
End Sub
```

## Option Strict (twinBASIC特定)

twinBASIC支持严格的类型检查。

语法：**#Option Strict** { **On** | **Off** }

**On**
: 启用严格的类型检查，禁止隐式类型转换

**Off**
: 允许隐式类型转换（默认）

### 示例

```vb
#Option Strict On

Sub StrictExample()
    Dim str As String
    Dim num As Integer

    num = 42
    ' str = num ' 这会导致编译错误，需要显式转换
    str = CStr(num) ' 正确的显式转换
End Sub
```

> [!NOTE]
>
> - **Option**语句必须在模块级别使用，不能在过程内使用
> - 一个模块中每种**Option**语句只能使用一次
> - **Option**语句必须出现在模块中任何其他代码之前
> - 某些**Option**设置（如**#Option**）是twinBASIC特有的扩展