---
title: DateValue
parent: DateTime Module
permalink: /tB/Modules/DateTime/DateValue
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cfab601b-6f35-45c8-a07b-fda539dad352'
  PropagateID: 'cfab601b-6f35-45c8-a07b-fda539dad352'
  ReservedCode1: 'ce5d0ed2-911d-463b-be1c-ee6926b36d47'
  ReservedCode2: 'ce5d0ed2-911d-463b-be1c-ee6926b36d47'
---

# DateValue

从表示日期的字符串表达式返回 **Variant** (**Date**)。

语法：**DateValue** ( *date* )

*date*
: *必需* 表示从 100 年 1 月 1 日到 9999 年 12 月 31 日日期的字符串表达式。但是，*date* 也可以是该范围内任何可以表示日期、时间或同时表示日期和时间的表达式。

如果 *date* 是一个仅包含由有效日期分隔符分隔的数字的字符串，**DateValue** 根据系统指定的短日期格式识别月、日、年的顺序。**DateValue** 也识别包含月份名称（完整或缩写形式）的明确日期。例如，除了识别 12/30/1991 和 12/30/91 外，**DateValue** 还识别 December 30, 1991 和 Dec 30, 1991。

如果省略了 *date* 的年份部分，**DateValue** 使用系统日期中的当前年份。

如果 *date* 参数包含时间信息，**DateValue** 不返回时间。但如果 *date* 包含无效的时间信息（如 "89:98"），将发生错误。

如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则提供的日期必须为公历。如果日历为回历，则提供的日期必须为回历。

### 示例

此示例使用 **DateValue** 函数将字符串转换为日期。也可以使用日期字面量直接将日期赋值给 **Variant** 或 **Date** 变量（例如 `MyDate = #2/12/69#`）。

```vb
Dim MyDate
MyDate = DateValue("February 12, 1969")    ' Returns a date.
```

### 另请参阅

- [DateSerial](/official/Reference/VBA/DateTime/DateSerial) 函数