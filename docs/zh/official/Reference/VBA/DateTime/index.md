---
title: DateTime Module
parent: VBA Package
permalink: /tB/Modules/DateTime/
---

# DateTime module

The **DateTime** module groups together the procedures for reading the system clock, building **Date** values from their components, parsing them out of strings, taking them apart again, and shifting them forward or backward by a chosen unit. A single setting --- the [**Calendar**](/official/Reference/VBA/DateTime/Calendar) property --- switches the whole module between the Gregorian and Hijri calendars.

## Reading the system clock

[**Now**](/official/Reference/VBA/DateTime/Now) returns the current system date *and* time as a single **Variant** of subtype **Date**; [**Date**](/official/Reference/VBA/DateTime/Date) returns just the date portion and [**Time**](/official/Reference/VBA/DateTime/Time) just the time portion. Each of the latter two has a `$`-suffixed sibling --- **Date$** and **Time$** --- that returns the same value as a formatted **String** rather than a **Date**. All four are also writable: assigning to them changes the system clock, subject to the operating system's privilege requirements.

::: info
In twinBASIC, **Date**, **Date$**, **Time**, and **Time$** are implemented as module-level properties rather than the functions/statements they were in VBx. The syntax and semantics are otherwise unchanged.
:::

[**Timer**](/official/Reference/VBA/DateTime/Timer) returns a **Single** giving the number of seconds --- with fractional precision --- elapsed since midnight, and is the conventional way to measure elapsed time within a run.

```vb
Dim Started As Single
Started = Timer
' ... do some work ...
Debug.Print "Elapsed: " & (Timer - Started) & " seconds"
```

## Building dates and times from components

[**DateSerial**](/official/Reference/VBA/DateTime/DateSerial) builds a **Date** from year, month, and day arguments; [**TimeSerial**](/official/Reference/VBA/DateTime/TimeSerial) builds one from hour, minute, and second. Both honour out-of-range arguments by carrying --- passing 13 as the month rolls into the next year, and passing 75 as the minute rolls into the next hour --- which makes them well-suited to expressing relative dates as plain arithmetic on the components.

```vb
Dim FirstOfNextMonth As Date
FirstOfNextMonth = DateSerial(Year(Now), Month(Now) + 1, 1)
```

[**DateValue**](/official/Reference/VBA/DateTime/DateValue) parses a date out of a string in the system's short date format --- recognising both numeric forms and unambiguous month names --- and discards any time portion. [**TimeValue**](/official/Reference/VBA/DateTime/TimeValue) is the corresponding parser for time strings; it discards any date portion. For values that originate as date literals in source code, the surrounding `#...#` syntax is usually a better fit than either parser.

## Extracting parts of a date

The single-component accessors each return one part of a **Date** as an **Integer**: [**Year**](/official/Reference/VBA/DateTime/Year), [**Month**](/official/Reference/VBA/DateTime/Month), [**Day**](/official/Reference/VBA/DateTime/Day), [**Weekday**](/official/Reference/VBA/DateTime/Weekday), [**Hour**](/official/Reference/VBA/DateTime/Hour), [**Minute**](/official/Reference/VBA/DateTime/Minute), and [**Second**](/official/Reference/VBA/DateTime/Second). [**DatePart**](/official/Reference/VBA/DateTime/DatePart) generalises the same idea, taking the chosen part as a string interval code (`"yyyy"`, `"q"`, `"m"`, `"d"`, ...) --- useful when the unit itself is a parameter.

```vb
Dim D As Date
D = #2/12/1969#
Debug.Print Year(D)       ' 1969
Debug.Print Month(D)      ' 2
Debug.Print Day(D)        ' 12
Debug.Print Weekday(D)    ' 4 — Wednesday
```

## Date arithmetic

[**DateAdd**](/official/Reference/VBA/DateTime/DateAdd) shifts a date by a chosen number of intervals --- years, quarters, months, weeks, days, hours, minutes, or seconds --- taking calendar irregularities (varying month lengths, leap years) into account, and clamping to the last day of the target month when a literal day-of-month would be invalid. [**DateDiff**](/official/Reference/VBA/DateTime/DateDiff) does the inverse: it returns the count of whole intervals between two dates. Both share the same string interval codes used by **DatePart**.

```vb
Debug.Print DateAdd("m", 1, #1/31/2026#)          ' 2/28/2026 — clamped to last day of February
Debug.Print DateDiff("d", #1/1/2026#, #5/9/2026#) ' 128
```

## Calendar selection

The [**Calendar**](/official/Reference/VBA/DateTime/Calendar) property selects the calendar --- **vbCalGreg** (Gregorian, the default) or **vbCalHijri** (Hijri) --- used by the rest of the module. The setting controls how **Date$** formats the system date, how arguments to **DateSerial**, **DateValue**, **DateAdd**, and **DateDiff** are interpreted, and how the parts returned by **DatePart**, **Year**, **Month**, **Day**, and **Weekday** are reported.

## Members

- [Calendar](/official/Reference/VBA/DateTime/Calendar) -- returns or sets the calendar type (Gregorian or Hijri)
- [Date](/official/Reference/VBA/DateTime/Date) -- sets or returns the current system date
- [DateAdd](/official/Reference/VBA/DateTime/DateAdd) -- adds a time interval to a date
- [DateDiff](/official/Reference/VBA/DateTime/DateDiff) -- returns the number of time intervals between two dates
- [DatePart](/official/Reference/VBA/DateTime/DatePart) -- returns a specified part of a given date
- [DateSerial](/official/Reference/VBA/DateTime/DateSerial) -- returns a date for a specified year, month, and day
- [DateValue](/official/Reference/VBA/DateTime/DateValue) -- converts a string to a date
- [Day](/official/Reference/VBA/DateTime/Day) -- returns the day of the month from a date value
- [Hour](/official/Reference/VBA/DateTime/Hour) -- returns the hour of the day from a time value
- [Minute](/official/Reference/VBA/DateTime/Minute) -- returns the minute of the hour from a time value
- [Month](/official/Reference/VBA/DateTime/Month) -- returns the month of the year from a date value
- [Now](/official/Reference/VBA/DateTime/Now) -- returns the current system date and time
- [Second](/official/Reference/VBA/DateTime/Second) -- returns the second of the minute from a time value
- [Time](/official/Reference/VBA/DateTime/Time) -- sets or returns the current system time
- [Timer](/official/Reference/VBA/DateTime/Timer) -- returns the number of seconds elapsed since midnight
- [TimeSerial](/official/Reference/VBA/DateTime/TimeSerial) -- returns a time for a specific hour, minute, and second
- [TimeValue](/official/Reference/VBA/DateTime/TimeValue) -- converts a string to a time
- [Weekday](/official/Reference/VBA/DateTime/Weekday) -- returns the day of the week from a date value
- [Year](/official/Reference/VBA/DateTime/Year) -- returns the year from a date value
