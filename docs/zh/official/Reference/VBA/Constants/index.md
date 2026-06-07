---
title: Constants Module
parent: VBA Package
permalink: /tB/Modules/Constants/
---

# Constants module

## Constants

**vbBack**
: The backspace character --- **Chr(8)**.

**vbCr**
: The carriage return character --- **Chr(13)**.

**vbCrLf**
: The carriage return + linefeed pair --- **Chr(13) & Chr(10)**.

**vbFormFeed**
: The form feed character --- **Chr(12)**.

**vbLf**
: The linefeed character --- **Chr(10)**.

**vbNewLine**
: The platform-appropriate newline character. In twinBASIC, identical to **vbCrLf**.

**vbNullChar**
: The null character --- **Chr(0)**.

**vbNullPtr**
: A null pointer of type **LongPtr** (zero), for use with API declarations that take a pointer or handle argument.

**vbNullString**
: A null string pointer. Distinct from the zero-length string `""`; used when calling external procedures that differentiate between a null pointer and an empty string.

**vbObjectError**
: The base value for user-defined error numbers --- **&H80040000** (-2147221504). User-defined error numbers should be greater than this; for example, `Err.Raise vbObjectError + 1000`.

**vbTab**
: The tab character --- **Chr(9)**.

**vbVerticalTab**
: The vertical tab character --- **Chr(11)**.

## Enumerations

- [VbAppWinStyle](/official/Reference/VBA/Constants/VbAppWinStyle) -- window style values for the **Shell** function
- [VbArchitecture](/official/Reference/VBA/Constants/VbArchitecture) -- processor architecture identifiers
- [VbCalendar](/official/Reference/VBA/Constants/VbCalendar) -- calendar type values (Gregorian or Hijri)
- [VbCallType](/official/Reference/VBA/Constants/VbCallType) -- procedure call type values for **CallByName**
- [VbCompareMethod](/official/Reference/VBA/Constants/VbCompareMethod) -- text comparison modes for string functions
- [VbDateTimeFormat](/official/Reference/VBA/Constants/VbDateTimeFormat) -- format codes for **FormatDateTime**
- [VbDayOfWeek](/official/Reference/VBA/Constants/VbDayOfWeek) -- day-of-week constants for date functions
- [VbFileAttribute](/official/Reference/VBA/Constants/VbFileAttribute) -- file attribute flags for **Dir**, **GetAttr**, and **SetAttr**
- [VbFirstWeekOfYear](/official/Reference/VBA/Constants/VbFirstWeekOfYear) -- first-week-of-year selectors for date functions
- [VbIMEStatus](/official/Reference/VBA/Constants/VbIMEStatus) -- Input Method Editor status values
- [VbMsgBoxResult](/official/Reference/VBA/Constants/VbMsgBoxResult) -- the values returned by **MsgBox**
- [VbMsgBoxStyle](/official/Reference/VBA/Constants/VbMsgBoxStyle) -- buttons, icons, and behaviour flags for **MsgBox**
- [VbStrConv](/official/Reference/VBA/Constants/VbStrConv) -- conversion type flags for **StrConv**
- [VbTriState](/official/Reference/VBA/Constants/VbTriState) -- three-state values used in place of **Boolean** arguments
- [VbVarType](/official/Reference/VBA/Constants/VbVarType) -- variant subtype codes returned by **VarType**
