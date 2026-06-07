---
title: Month
parent: DateTime Module
permalink: /tB/Modules/DateTime/Month
---
# Month

Returns a **Variant** (**Integer**) specifying a whole number between 1 and 12, inclusive, representing the month of the year.

Syntax: **Month** ( *date* )

*date*
: *required* Any **Variant**, numeric expression, string expression, or any combination that can represent a date. If *date* contains **Null**, **Null** is returned.

::: info
If the [**Calendar**](/en/official/Reference/VBA/DateTime/Calendar) property setting is Gregorian, the returned integer represents the Gregorian month. If the calendar is Hijri, the returned integer represents the Hijri month. For Hijri dates, the argument can be any numeric expression that represents a date and/or time from 1/1/100 (Gregorian Aug 2, 718) through 4/3/9666 (Gregorian Dec 31, 9999).
:::

### Example

This example uses the **Month** function to obtain the month from a specified date.

```vb
Dim MyDate, MyMonth
MyDate = #February 12, 1969#    ' Assign a date.
MyMonth = Month(MyDate)    ' MyMonth contains 2.
```

### See Also

- [Day](/en/official/Reference/VBA/DateTime/Day), [Year](/en/official/Reference/VBA/DateTime/Year), [DatePart](/en/official/Reference/VBA/DateTime/DatePart) functions
