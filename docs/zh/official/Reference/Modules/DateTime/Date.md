---
title: Date
parent: 日期时间模块
permalink: /zh/tB/Modules/DateTime/Date
---

# Date 函数
{: .no_toc }

返回或设置当前系统日期。

## 语法

```vb
Date[(date)]
```

### 参数

*date*
: 可选。有效的日期表达式。如果省略参数，则**Date**函数返回当前系统日期。

### 返回值

**Variant**类型的日期子类型，包含日期信息。

## 说明

**Date**函数有两种用途：
1. 不带参数时，返回当前系统日期
2. 带参数时，设置系统日期

当不带参数调用时，**Date**函数返回格式为"mm-dd-yyyy"的字符串，其中：
- *mm* 是月份（01-12）
- *dd* 是日期（01-31）
- *yyyy* 是年份（100-9999）

当带参数调用时，**Date**函数尝试将参数转换为有效日期，并设置系统日期。

## 示例

### 获取当前日期

```vb
Sub GetCurrentDate()
    Dim currentDate As String
    currentDate = Date
    MsgBox "当前日期是: " & currentDate
End Sub
```

### 设置系统日期

```vb
Sub SetSystemDate()
    ' 将系统日期设置为2024年1月15日
    Date = #1/15/2024#
    MsgBox "系统日期已设置为: " & Date
End Sub
```

### 日期计算

```vb
Sub DateCalculation()
    Dim startDate As Date
    Dim endDate As Date
    Dim daysDiff As Integer

    startDate = Date
    endDate = #12/31/2024#

    ' 计算两个日期之间的天数差
    daysDiff = DateDiff("d", startDate, endDate)

    MsgBox "从今天到2024年底还有 " & daysDiff & " 天"
End Sub
```

### 格式化日期输出

```vb
Sub FormatDate()
    Dim today As Date
    today = Date

    ' 使用不同格式显示日期
    MsgBox "短日期格式: " & Format(today, "Short Date")
    MsgBox "长日期格式: " & Format(today, "Long Date")
    MsgBox "自定义格式: " & Format(today, "yyyy年mm月dd日")
End Sub
```

### 检查日期有效性

```vb
Sub CheckDateValidity()
    Dim testDate As String
    testDate = "2024-02-29" ' 闰年测试

    If IsDate(testDate) Then
        Date = CDate(testDate)
        MsgBox "日期设置成功: " & Date
    Else
        MsgBox "无效的日期格式"
    End If
End Sub
```

## 注意事项

- 设置系统日期需要适当的权限
- 在某些系统上，程序可能无法更改系统日期
- 日期格式可能因系统区域设置而异
- 建议使用**Now**函数获取包含时间的当前日期时间
- 对于更复杂的日期操作，请考虑使用**DateAdd**、**DateDiff**和**DatePart**函数

## 相关函数

- [**Now**](Now) - 返回当前日期和时间
- [**Time**](Time) - 返回当前系统时间
- [**Timer**](Timer) - 返回自午夜以来的秒数
- [**DateAdd**](DateAdd) - 向日期添加指定的时间间隔
- [**DateDiff**](DateDiff) - 返回两个日期之间的时间间隔数
- [**DatePart**](DatePart) - 返回日期的指定部分
- [**DateSerial**](DateSerial) - 返回指定年、月、日的日期
- [**DateValue**](DateValue) - 返回日期子类型的Variant

> [!NOTE]
>
> 在twinBASIC中，**Date**函数与VB6和VBA完全兼容，但提供了更好的类型检查和错误处理。