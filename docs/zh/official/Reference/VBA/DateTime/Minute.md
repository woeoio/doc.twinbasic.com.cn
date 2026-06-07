---
title: Minute
parent: DateTime Module
permalink: /tB/Modules/DateTime/Minute
---
# Minute

Returns a **Variant** (**Integer**) specifying a whole number between 0 and 59, inclusive, representing the minute of the hour.

Syntax: **Minute** ( *time* )

*time*
: *required* Any **Variant**, numeric expression, string expression, or any combination that can represent a time. If *time* contains **Null**, **Null** is returned.

### Example

This example uses the **Minute** function to obtain the minute of the hour from a specified time.

```vb
Dim MyTime, MyMinute
MyTime = #4:35:17 PM#    ' Assign a time.
MyMinute = Minute(MyTime)    ' MyMinute contains 35.
```

### See Also

- [Hour](/official/Reference/VBA/DateTime/Hour), [Second](/official/Reference/VBA/DateTime/Second), [DatePart](/official/Reference/VBA/DateTime/DatePart) functions
