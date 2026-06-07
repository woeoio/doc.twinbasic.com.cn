---
title: MonthName
parent: Strings Module
permalink: /tB/Modules/Strings/MonthName
---
# MonthName

Returns a string indicating the specified month.

Syntax: **MonthName(** *month* [ **,** *abbreviate* ] **)**

*month*
: *required* The numeric designation of the month. For example, January is 1, February is 2, and so on.

*abbreviate*
: *optional* **Boolean** value that indicates if the month name is to be abbreviated. If omitted, the default is **False**, which means that the month name is not abbreviated.

### Example

This example uses **MonthName** to return the full and abbreviated name of a month.

```vb
Debug.Print MonthName(3)           ' "March"
Debug.Print MonthName(3, True)     ' "Mar"
Debug.Print MonthName(12)          ' "December"
```

### See Also

- [FormatDateTime](/en/official/Reference/VBA/Strings/FormatDateTime), [WeekdayName](/en/official/Reference/VBA/Strings/WeekdayName) functions
