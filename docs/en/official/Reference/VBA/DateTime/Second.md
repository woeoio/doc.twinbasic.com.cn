---
title: Second
parent: DateTime Module
permalink: /tB/Modules/DateTime/Second
---
# Second

Returns a **Variant** (**Integer**) specifying a whole number between 0 and 59, inclusive, representing the second of the minute.

Syntax: **Second** ( *time* )

*time*
: *required* Any **Variant**, numeric expression, string expression, or any combination that can represent a time. If *time* contains **Null**, **Null** is returned.

### Example

This example uses the **Second** function to obtain the second of the minute from a specified time.

```vb
Dim MyTime, MySecond
MyTime = #4:35:17 PM#    ' Assign a time.
MySecond = Second(MyTime)    ' MySecond contains 17.
```

### See Also

- [Hour](/en/official/Reference/VBA/DateTime/Hour), [Minute](/en/official/Reference/VBA/DateTime/Minute), [DatePart](/en/official/Reference/VBA/DateTime/DatePart) functions
