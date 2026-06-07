---
title: Date
parent: DateTime Module
permalink: /tB/Modules/DateTime/Date
---
# Date

::: info

In twinBASIC, **Date** and **Date$** are implemented as module-level properties, not as functions/statements like they were in VBx. This has no impact on their behavior. These properties still have the syntax and semantics of the Date and Date$ functions and statements in VBx.
:::

## Date Property

The behavior of the **Date** property is unchanged by the [**Calendar**](/official/Reference/VBA/DateTime/Calendar) property setting.

### Get


Returns a **Variant** containing the current system date.

Syntax: **Date** [ **()** ]

#### Example

This example uses the **Date** property to return the current system date.

```vb
Dim MyDate as Variant
MyDate = Date   ' MyDate contains the current system date.
```

### Let

Sets the current system date from a value with a Variant or Date type.

Syntax: **Date** **=** *date*

*date*
: *required* For systems running Microsoft Windows 95, the *date* specification must be a date from January 1, 1980, through December 31, 2099. For systems running Microsoft Windows NT, *date* must be a date from January 1, 1980, through December 31, 2079. For the Macintosh, *date* must be a date from January 1, 1904, through February 5, 2040.

::: important

In some versions of Microsoft Windows, including Windows 10 and 11, setting the system date is a privileged operation that requires the process to have relevant permissions. Without those permissions, assignment to **Date** results in a Permission Denied runtime error.
:::

#### Example

This example uses the **Date** property to set the computer system date. In the development environment, the date literal is displayed in short date format by using the locale settings of the code.

```vb
Dim MyDate As Date
MyDate = #February 12, 1985#  ' Assign a date to a variable.
Date= MyDate                  ' Change system date. 
```

## Date$ Property

The behavior of the **Date$** property relies on the [**Calendar**](/official/Reference/VBA/DateTime/Calendar) property setting. If the calendar is Hijri, **Date$** returns or accepts a 10-character string of the form *mm-dd-yyyy*, where *mm* (01--12), *dd* (01--30) and *yyyy* (1400--1523) are the Hijri month, day, and year. The equivalent Gregorian range is Jan 1, 1980, through Dec 31, 2099.

### Get

Returns a **String** containing the current system date.

Syntax: **Date$** [ **()** ]

#### Example

This example uses the **Date** property to return the current system date as a string.

```vb
Dim MyDate$
MyDate = Date$  ' MyDate contains the current system date.
```

### Let

Sets the current system date from a string.

Syntax: **Date$** **=** *date*

*date*
: *required* For systems running Microsoft Windows 95, the *date* specification must be a date from January 1, 1980, through December 31, 2099. For systems running Microsoft Windows NT, *date* must be a date from January 1, 1980, through December 31, 2079. For the Macintosh, *date* must be a date from January 1, 1904, through February 5, 2040.

::: important

In some versions of Microsoft Windows, including Windows 10 and 11, setting the system date is a privileged operation that requires the process to have relevant permissions. Without those permissions, assignment to **Date**$ results in a Permission Denied runtime error.
:::

#### Example

This example uses the **Date$** property to set the computer system date. In the development environment, the date literal is displayed in short date format by using the locale settings of the code.

```vb
Dim MyDate$
MyDate = "02-12-1985"        ' Assign a date to a variable.
Date$ = MyDate               ' Change the system date. 
```

### See Also

- [Time](/official/Reference/VBA/DateTime/Time) property
- [Format](/official/Reference/VBA/Strings/Format) function
- [Now](/official/Reference/VBA/DateTime/Now) function