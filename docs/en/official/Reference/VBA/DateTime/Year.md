---
title: Year
parent: DateTime Module
permalink: /tB/Modules/DateTime/Year
---
# Year

Returns a **Variant** (**Integer**) containing a whole number representing the year.

Syntax: **Year** ( *date* )

*date*
: *required* Any **Variant**, numeric expression, string expression, or any combination that can represent a date. If *date* contains **Null**, **Null** is returned.

::: info
If the [**Calendar**](/en/official/Reference/VBA/DateTime/Calendar) property setting is Gregorian, the returned integer represents the Gregorian year for the date argument. If the calendar is Hijri, the returned integer represents the Hijri year for the date argument.
:::

### Example

This example uses the **Year** function to obtain the year from a specified date.

```vb
Dim MyDate, MyYear
MyDate = #February 12, 1969#    ' Assign a date.
MyYear = Year(MyDate)    ' MyYear contains 1969.
```

### See Also

- [Day](/en/official/Reference/VBA/DateTime/Day), [Month](/en/official/Reference/VBA/DateTime/Month), [DatePart](/en/official/Reference/VBA/DateTime/DatePart) functions
