---
title: 内置模块
parent: 参考
permalink: /zh/tB/Modules
---

# 内置模块
{: .no_toc }

twinBASIC提供了丰富的内置模块，包含各种函数和语句，用于执行常见的编程任务。这些模块按功能分类，为开发者提供了强大的工具集。

## 模块分类

### 核心功能模块

- [**数学运算**](/zh/tB/Modules/Math) - 数学计算和函数
- [**字符串处理**](/zh/tB/Modules/Strings) - 字符串操作和格式化
- [**日期时间**](/zh/tB/Modules/DateTime) - 日期和时间处理
- [**文件系统**](/zh/tB/Modules/FileSystem) - 文件和目录操作
- [**交互**](/zh/tB/Modules/Interaction) - 用户和系统交互
- [**财务**](/zh/tB/Modules/Financial) - 财务计算函数

## 模块概述

### 数学运算模块
提供数学计算功能：

```vb
' 基本数学运算
Dim result As Double
result = Sqr(16)      ' 平方根
result = Abs(-10)     ' 绝对值
result = Sin(3.14159) ' 三角函数

' 随机数生成
Randomize
result = Rnd()        ' 生成随机数
```

### 字符串处理模块
提供字符串操作功能：

```vb
' 字符串操作
Dim text As String
text = UCase("hello")     ' 转换为大写
text = LTrim("  hello  ")  ' 去除左侧空格
text = Replace("hello", "l", "L") ' 替换字符

' 字符串格式化
text = Format(123.456, "#,##0.00") ' 数字格式化
```

### 日期时间模块
提供日期时间处理功能：

```vb
' 日期时间操作
Dim currentDate As Date
currentDate = Now           ' 当前日期时间
currentDate = Date          ' 当前日期
currentDate = Time          ' 当前时间

' 日期计算
dim futureDate As Date
futureDate = DateAdd("d", 30, Date)  ' 30天后的日期
```

### 文件系统模块
提供文件和目录操作：

```vb
' 文件操作
FileCopy "source.txt", "dest.txt"  ' 复制文件
Kill "temp.txt"                     ' 删除文件
Name "old.txt" As "new.txt"        ' 重命名文件

' 目录操作
MkDir "C:\NewFolder"                ' 创建目录
ChDir "C:\Windows"                  ' 更改目录
```

### 交互模块
提供用户和系统交互功能：

```vb
' 注册表操作
SaveSetting "MyApp", "Prefs", "Theme", "Dark"
Dim theme As String
theme = GetSetting("MyApp", "Prefs", "Theme", "Light")

' 应用程序控制
AppActivate "记事本"     ' 激活应用程序
Beep                        ' 发出蜂鸣声
```

### 财务模块
提供财务计算功能：

```vb
' 财务计算
Dim presentValue As Double
presentValue = PV(0.05, 10, -1000)  ' 现值计算

Dim futureValue As Double
futureValue = FV(0.05, 10, -1000)   ' 未来值计算
```

## 使用指南

### 选择合适的模块

根据您的编程需求选择合适的模块：

- **数据处理** - 使用数学和字符串模块
- **文件管理** - 使用文件系统模块
- **用户界面** - 使用交互模块
- **业务逻辑** - 使用财务和日期时间模块

### 性能考虑

- 避免在循环中重复调用模块函数
- 使用适当的错误处理
- 考虑数据类型转换的开销
- 批量操作时优先使用数组

### 错误处理

每个模块都可能产生错误，建议包含适当的错误处理：

```vb
Sub SafeModuleUsage()
    On Error GoTo ErrorHandler

    ' 使用模块函数
    Dim result As Double
    result = Sqr(-1) ' 可能产生错误

    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 5 ' 无效的过程调用
            MsgBox "数学运算错误", vbCritical
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description
    End Select
End Sub
```

## 兼容性说明

twinBASIC的内置模块与VB6和VBA保持高度兼容：

- **完全兼容** - 大多数函数和语句
- **增强功能** - 改进的错误处理和性能
- **扩展功能** - 新增的现代编程特性

## 最佳实践

1. **模块选择** - 根据具体需求选择最合适的模块
2. **错误处理** - 始终包含适当的错误处理机制
3. **性能优化** - 避免不必要的函数调用
4. **代码组织** - 合理组织模块的使用
5. **文档注释** - 记录复杂的模块使用逻辑

## 学习资源

- [数学运算模块文档](/zh/tB/Modules/Math)
- [字符串处理模块文档](/zh/tB/Modules/Strings)
- [日期时间模块文档](/zh/tB/Modules/DateTime)
- [文件系统模块文档](/zh/tB/Modules/FileSystem)
- [交互模块文档](/zh/tB/Modules/Interaction)
- [财务模块文档](/zh/tB/Modules/Financial)

> [!TIP]
>
> 建议先熟悉核心模块（数学、字符串、日期时间），然后根据需要学习其他专业模块。每个模块都有详细的文档和示例。

> [!NOTE]
>
> 随着twinBASIC的发展，可能会添加新的内置模块。请定期查看文档以了解最新的模块和功能。