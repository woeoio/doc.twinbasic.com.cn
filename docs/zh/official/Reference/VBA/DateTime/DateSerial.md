---
title: DateSerial
parent: DateTime Module
permalink: /tB/Modules/DateTime/DateSerial
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '91a99b73-cc6d-4231-b1d6-5ab7d821cc9c'
  PropagateID: '91a99b73-cc6d-4231-b1d6-5ab7d821cc9c'
  ReservedCode1: '44aef43c-96de-4829-a77d-25c4bca4a5ae'
  ReservedCode2: '44aef43c-96de-4829-a77d-25c4bca4a5ae'
---

# DateSerial

返回指定年、月、日的 **Variant** (**Date**)。

语法：**DateSerial** ( *year*, *month*, *day* )

*year*
: *必需* **Integer**。100 到 9999 之间的数字（含），或数值表达式。

*month*
: *必需* **Integer**。任何数值表达式。

*day*
: *必需* **Integer**。任何数值表达式。

要指定日期（如 1991 年 12 月 31 日），每个 **DateSerial** 参数的数字范围应在单位的可接受范围内（日为 1--31，月为 1--12）。也可以通过使用表示某个日期之前或之后的天数、月数或年数的任何数值表达式来为每个参数指定相对日期。

以下示例使用数值表达式而非绝对日期数字。**DateSerial** 函数返回的日期是第一天之前的一天（`1 - 1`），8 月之前两个月（`8 - 2`），1990 年之前 10 年（`1990 - 10`）——即 1980 年 5 月 31 日。

当任何参数超出可接受范围时，会适当进位到下一个更大的单位。例如，35 天被计算为一个月加上若干天，具体取决于其在一年中的位置。如果任何单个参数超出 -32,768 到 32,767 的范围，将发生错误。如果三个参数指定的日期超出可接受的日期范围，也将发生错误。

*year* 参数的两位数年份根据用户定义的机器设置进行解释。默认设置为 0 到 29 之间的值被解释为 2000--2029 年，30 到 99 之间的值被解释为 1930--1999 年。对于所有其他 *year* 参数，请使用四位数年份。

如果 [**Calendar**](/official/Reference/VBA/DateTime/Calendar) 属性设置为公历，则提供的值假定为公历。如果设置为回历，则提供的值假定为回历，0 到 99 之间的两位数 *year* 值被解释为 1400--1499 年。

### 示例

此示例使用 **DateSerial** 函数返回指定年、月、日的日期。

```vb
Dim MyDate
MyDate = DateSerial(1969, 2, 12)    ' Returns February 12, 1969.
```

### 另请参阅

- [DateValue](/official/Reference/VBA/DateTime/DateValue)、[Day](/official/Reference/VBA/DateTime/Day)、[Month](/official/Reference/VBA/DateTime/Month)、[Year](/official/Reference/VBA/DateTime/Year) 函数