---
title: DateAdd
parent: DateTime Module
permalink: /tB/Modules/DateTime/DateAdd
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e628367f-9173-4a1d-b18b-7e5b9b1b8e03'
  PropagateID: 'e628367f-9173-4a1d-b18b-7e5b9b1b8e03'
  ReservedCode1: 'bcc6b37b-a6ea-469a-9907-25b2b42bbaf8'
  ReservedCode2: 'bcc6b37b-a6ea-469a-9907-25b2b42bbaf8'
---

# DateAdd

返回一个 **Variant** (**Date**)，包含添加了指定时间间隔的日期。

语法：**DateAdd** ( *interval*, *number*, *date* )

*interval*
: *必需* 字符串表达式，表示要添加的时间间隔。参见[间隔设置](#interval-settings)。

*number*
: *必需* 数值表达式，表示要添加的间隔数。可以为正（获取未来日期）或负（获取过去日期）。

*date*
: *必需* **Variant** (**Date**) 或字面量，表示要添加间隔的日期。

### 间隔设置

| 设置 | 描述 |
|------|------|
| **yyyy** | 年 |
| **q** | 季度 |
| **m** | 月 |
| **y** | 一年中的天数 |
| **d** | 日 |
| **w** | 星期几 |
| **ww** | 周 |
| **h** | 小时 |
| **n** | 分钟 |
| **s** | 秒 |

要向 *date* 添加天数，请使用一年中的天数 ("y")、日 ("d") 或星期几 ("w")。

::: info
当使用 "w" 间隔向日期添加天数时，**DateAdd** 添加指定的总天数，而不仅仅是工作日（周一至周五）。
:::

**DateAdd** 不会返回无效日期。以下示例向 1 月 31 日添加一个月：

```vb
DateAdd("m", 1, "31-Jan-95")
```

在这种情况下，**DateAdd** 返回 28-Feb-95，而非 31-Feb-95。如果 *date* 是 31-Jan-96，则返回 29-Feb-96，因为 1996 年是闰年。

如果计算出的日期早于 100 年，将发生错误。

如果 *number* 不是 **Long** 值，则在求值前四舍五入到最接近的整数。

返回值的格式由**控制面板**设置决定，而非 *date* 参数中传递的格式。

如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则提供的日期必须为公历。如果日历为回历，则提供的日期必须为回历。

### 示例

此示例取一个日期，并使用 **DateAdd** 函数显示指定月数后的对应日期。

```vb
Dim FirstDate As Date
Dim IntervalType As String
Dim Number As Integer
IntervalType = "m"    ' "m" specifies months as interval.
FirstDate = InputBox("Enter a date")
Number = InputBox("Enter number of months to add")
MsgBox "New date: " & DateAdd(IntervalType, Number, FirstDate)
```

### 另请参阅

- [DateDiff](/official/Reference/VBA/DateTime/DateDiff)、[DatePart](/official/Reference/VBA/DateTime/DatePart) 函数