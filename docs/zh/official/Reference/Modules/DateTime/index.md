---
title: 日期时间模块
parent: 内置模块
permalink: /zh/tB/Modules/DateTime
---

# 日期时间模块
{: .no_toc }

日期时间模块提供了处理日期和时间的函数集合。这些函数允许您获取、设置、格式化和计算日期和时间值。

## 核心函数

### 获取和设置日期时间

- [**Date**](/zh/tB/Modules/DateTime/Date) - 返回或设置当前系统日期
- [**Time**](/zh/tB/Modules/DateTime/Time) - 返回或设置当前系统时间
- [**Now**](/zh/tB/Modules/DateTime/Now) - 返回当前日期和时间
- [**Timer**](/zh/tB/Modules/DateTime/Timer) - 返回自午夜以来的秒数

### 日期时间创建

- [**DateSerial**](/zh/tB/Modules/DateTime/DateSerial) - 从年、月、日创建日期
- [**TimeSerial**](/zh/tB/Modules/DateTime/TimeSerial) - 从时、分、秒创建时间
- [**DateValue**](/zh/tB/Modules/DateTime/DateValue) - 从字符串返回日期
- [**TimeValue**](/zh/tB/Modules/DateTime/TimeValue) - 从字符串返回时间

### 日期时间计算

- [**DateAdd**](/zh/tB/Modules/DateTime/DateAdd) - 向日期添加指定的时间间隔
- [**DateDiff**](/zh/tB/Modules/DateTime/DateDiff) - 计算两个日期之间的间隔
- [**DatePart**](/zh/tB/Modules/DateTime/DatePart) - 返回日期的指定部分
- [**DateInterval**](/zh/tB/Modules/DateTime/DateInterval) - 定义日期间隔常量

### 日期时间组件

- [**Year**](/zh/tB/Modules/DateTime/Year) - 返回日期的年份部分
- [**Month**](/zh/tB/Modules/DateTime/Month) - 返回日期的月份部分
- [**Day**](/zh/tB/Modules/DateTime/Day) - 返回日期的日部分
- [**Weekday**](/zh/tB/Modules/DateTime/Weekday) - 返回日期的星期几
- [**Hour**](/zh/tB/Modules/DateTime/Hour) - 返回时间的小时部分
- [**Minute**](/zh/tB/Modules/DateTime/Minute) - 返回时间的分钟部分
- [**Second**](/zh/tB/Modules/DateTime/Second) - 返回时间的秒部分

## 格式化函数

- [**FormatDateTime**](/zh/tB/Modules/DateTime/FormatDateTime) - 按预定义格式格式化日期时间
- [**Format**](/zh/tB/Modules/DateTime/Format) - 按自定义格式格式化日期时间

## 验证函数

- [**IsDate**](/zh/tB/Modules/DateTime/IsDate) - 检查表达式是否为有效日期

## 使用示例

### 基本日期时间操作

```vb
Sub DateTimeBasics()
    Dim currentDateTime As Date
    Dim currentDate As String
    Dim currentTime As String

    ' 获取当前日期和时间
    currentDateTime = Now
    currentDate = Date
    currentTime = Time

    MsgBox "当前日期时间: " & currentDateTime
    MsgBox "当前日期: " & currentDate
    MsgBox "当前时间: " & currentTime
End Sub
```

### 日期计算

```vb
Sub DateCalculations()
    Dim startDate As Date
    Dim endDate As Date
    Dim daysBetween As Long
    Dim futureDate As Date

    startDate = #1/1/2024#
    endDate = #12/31/2024#

    ' 计算天数差
    daysBetween = DateDiff("d", startDate, endDate)

    ' 添加30天
    futureDate = DateAdd("d", 30, startDate)

    MsgBox "天数差: " & daysBetween
    MsgBox "30天后: " & futureDate
End Sub
```

### 日期时间组件提取

```vb
Sub ExtractDateTimeParts()
    Dim dt As Date
    dt = Now

    MsgBox "年份: " & Year(dt)
    MsgBox "月份: " & Month(dt)
    MsgBox "日期: " & Day(dt)
    MsgBox "小时: " & Hour(dt)
    MsgBox "分钟: " & Minute(dt)
    MsgBox "秒: " & Second(dt)
End Sub
```

## 日期时间格式

twinBASIC支持多种日期时间格式：

### 标准格式
- **General Date** - 通用日期格式
- **Long Date** - 长日期格式（包含星期几）
- **Medium Date** - 中等日期格式
- **Short Date** - 短日期格式
- **Long Time** - 长时间格式（包含秒）
- **Medium Time** - 中等时间格式
- **Short Time** - 短时间格式

### 自定义格式
- **yyyy** - 四位年份
- **mm** - 两位月份
- **dd** - 两位日期
- **hh** - 两位小时（12小时制）
- **HH** - 两位小时（24小时制）
- **nn** - 两位分钟
- **ss** - 两位秒

## 注意事项

- 日期时间值在内部存储为Double类型
- 日期部分存储在整数部分，时间部分存储在小数部分
- 系统区域设置会影响日期时间的显示格式
- 进行日期计算时要注意闰年和月份天数的差异
- 使用**IsDate**函数验证用户输入的日期有效性

## 兼容性

twinBASIC的日期时间函数与VB6和VBA完全兼容，但提供了：

- 更好的类型检查
- 更严格的错误处理
- 改进的性能
- 额外的日期时间功能

> [!TIP]
>
> 对于复杂的日期时间操作，建议结合使用多个函数，如使用**DateSerial**创建日期，使用**DateAdd**进行计算，使用**Format**进行格式化输出。