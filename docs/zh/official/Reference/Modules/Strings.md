---
title: 字符串模块
parent: 内置模块
permalink: /zh/tB/Modules/Strings
---

# 字符串模块
{: .no_toc }

字符串模块提供了处理和操作字符串数据的函数集合。这些函数支持字符串创建、修改、搜索、替换和格式化等各种操作。

## 字符串创建和转换

### 基本转换

- **Str** - 将数字转换为字符串
- **Val** - 将字符串转换为数字
- **CStr** - 转换为字符串类型
- **Format** - 格式化表达式

### 字符串构建

- **Space** - 返回指定数量的空格
- **String** - 返回重复指定次数的字符
- **Chr** - 返回指定ASCII码的字符
- **Asc** - 返回字符的ASCII码

## 字符串操作

### 大小写转换

- **UCase** - 转换为大写
- **LCase** - 转换为小写
- **StrConv** - 多种字符串转换

### 修剪和填充

- **LTrim** - 删除前导空格
- **RTrim** - 删除尾随空格
- **Trim** - 删除前导和尾随空格

## 字符串搜索和替换

### 搜索函数

- **InStr** - 返回字符串在另一个字符串中的位置
- **InStrRev** - 从右向左搜索字符串
- **Like** - 字符串模式匹配

### 替换函数

- **Replace** - 替换字符串中的子字符串
- **Split** - 将字符串分割为数组
- **Join** - 将数组元素连接为字符串

## 字符串提取

### 子字符串函数

- **Left** - 返回字符串左侧的字符
- **Right** - 返回字符串右侧的字符
- **Mid** - 返回字符串中间的字符
- **Len** - 返回字符串长度

## 使用示例

### 基本字符串操作

```vb
Sub BasicStringOperations()
    Dim original As String
    Dim result As String

    original = "  Hello World  "

    ' 修剪空格
    result = Trim(original)
    MsgBox "修剪后: '" & result & "'"

    ' 大小写转换
    result = UCase(result)
    MsgBox "大写: " & result

    ' 长度
    MsgBox "长度: " & Len(result)
End Sub
```

### 字符串搜索

```vb
Sub StringSearch()
    Dim text As String
    Dim position As Integer

    text = "The quick brown fox jumps over the lazy dog"

    ' 搜索子字符串
    position = InStr(text, "fox")
    MsgBox "'fox' 位置: " & position

    ' 从指定位置开始搜索
    position = InStr(10, text, "the")
    MsgBox "从位置10开始搜索'the': " & position

    ' 不区分大小写搜索
    position = InStr(1, UCase(text), UCase("FOX"))
    MsgBox "不区分大小写搜索: " & position
End Sub
```

### 字符串替换

```vb
Sub StringReplacement()
    Dim original As String
    Dim newText As String

    original = "Hello World, Hello Universe, Hello Everyone"

    ' 简单替换
    newText = Replace(original, "Hello", "Hi")
    MsgBox "替换后: " & newText

    ' 限制替换次数
    newText = Replace(original, "Hello", "Hi", 1, 2)
    MsgBox "替换前2次: " & newText
End Sub
```

### 字符串分割和连接

```vb
Sub SplitAndJoin()
    Dim csvData As String
    Dim parts() As String
    Dim result As String
    Dim i As Integer

    csvData = "apple,banana,orange,grape"

    ' 分割字符串
    parts = Split(csvData, ",")

    ' 显示分割结果
    For i = 0 To UBound(parts)
        Debug.Print "部分 " & i & ": " & parts(i)
    Next i

    ' 重新连接
    result = Join(parts, " | ")
    MsgBox "重新连接: " & result
End Sub
```

### 数字和字符串转换

```vb
Sub NumberStringConversion()
    Dim number As Double
    Dim strNum As String
    Dim converted As Double

    number = 123.456

    ' 数字转字符串
    strNum = Str(number)
    MsgBox "Str(): " & strNum

    strNum = CStr(number)
    MsgBox "CStr(): " & strNum

    ' 格式化数字
    strNum = Format(number, "#,##0.00")
    MsgBox "格式化: " & strNum

    ' 字符串转数字
    converted = Val("123.45abc") ' 返回123.45
    MsgBox "Val() 结果: " & converted
End Sub
```

### 字符代码转换

```vb
Sub CharacterCodeConversion()
    Dim char As String
    Dim code As Integer

    ' 字符转ASCII码
    char = "A"
    code = Asc(char)
    MsgBox "ASCII码 of '" & char & "': " & code

    ' ASCII码转字符
    code = 66
    char = Chr(code)
    MsgBox "字符 for ASCII " & code & ": '" & char & "'"

    ' 生成字母表
    Dim i As Integer
    Dim alphabet As String

    For i = 65 To 90 ' A-Z
        alphabet = alphabet & Chr(i) & " "
    Next i

    MsgBox "大写字母: " & alphabet
End Sub
```

### 字符串模式匹配

```vb
Sub PatternMatching()
    Dim text As String
    Dim pattern As String
    Dim isMatch As Boolean

    text = "document.txt"
    pattern = "*.txt"

    isMatch = text Like pattern
    MsgBox "'" & text & "' Like '" & pattern & "': " & isMatch

    ' 更多模式匹配示例
    text = "user123"
    pattern = "user###"
    isMatch = text Like pattern
    MsgBox "'" & text & "' Like '" & pattern & "': " & isMatch
End Sub
```

## 字符串构建技巧

### 动态字符串构建

```vb
Sub BuildString()
    Dim result As String
    Dim i As Integer

    ' 使用字符串连接
    For i = 1 To 5
        result = result & "Line " & i & vbCrLf
    Next i

    MsgBox result

    ' 使用String函数创建重复字符
    result = String(50, "-")
    MsgBox result

    ' 使用Space函数创建空格
    result = Space(10) & "居中内容" & Space(10)
    MsgBox "|" & result & "|"
End Sub
```

## 性能优化

### 高效的字符串操作

```vb
Sub EfficientStringOps()
    ' 避免在循环中频繁连接
    Dim parts(1 To 100) As String
    Dim result As String
    Dim i As Integer

    ' 先构建数组，再一次性连接
    For i = 1 To 100
        parts(i) = "Item " & i
    Next i

    result = Join(parts, ", ")
    ' 这比在循环中重复连接更高效
End Sub
```

## 注意事项

- **字符串索引** - twinBASIC字符串索引从1开始
- **空字符串** - 使用`""`表示空字符串
- **Null处理** - 字符串变量不能为Null
- **性能考虑** - 大量字符串操作时考虑性能
- **内存使用** - 长字符串可能占用较多内存

## 相关模块

- [**数学模块**](/zh/tB/Modules/Math) - 数字格式化
- [**日期时间模块**](/zh/tB/Modules/DateTime) - 日期时间格式化
- [**文件系统模块**](/zh/tB/Modules/FileSystem) - 文件路径处理

> [!NOTE]
>
> 字符串模块函数在twinBASIC中与VB6和VBA完全兼容，但提供了更好的Unicode支持和性能优化。