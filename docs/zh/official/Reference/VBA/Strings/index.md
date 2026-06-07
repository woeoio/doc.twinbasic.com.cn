---
title: Strings Module
parent: VBA Package
permalink: /tB/Modules/Strings/
---

# Strings module

The **Strings** module groups together the runtime's text-processing primitives --- measuring strings, looking inside them, building new ones from old ones, splitting and joining arrays of them, and formatting non-string values as text. Most members come in two callable forms: a `$`-suffixed form (e.g. **Left$**) that returns a **String**, and an unsuffixed form (e.g. **Left**) that returns a **Variant** (**String**) and propagates **Null** through the call. Several also have a `B` variant --- **AscB**, **ChrB**, **InStrB**, **LeftB**, **LenB**, **MidB**, **RightB** --- that operates on byte positions rather than character positions, for use with byte-buffer data held in a **String**.

## Length and character codes

[**Len**](/official/Reference/VBA/Strings/Len) returns the number of characters in a string, or --- when given a non-string variable --- the number of bytes the variable occupies. [**Asc**](/official/Reference/VBA/Strings/Asc) returns the character code of a string's first character; [**Chr**](/official/Reference/VBA/Strings/Chr) is its inverse, building a single-character string from a code point. The `W` variants ([**AscW**](/official/Reference/VBA/Strings/Asc), [**ChrW**](/official/Reference/VBA/Strings/Chr)) work in Unicode regardless of the system code page.

```vb
Debug.Print Len("Hello")            ' 5
Debug.Print Asc("A")                ' 65
Debug.Print Chr(65)                 ' "A"
```

## Searching and comparing

[**StrComp**](/official/Reference/VBA/Strings/StrComp) compares two strings and returns -1, 0, or 1 to report which is greater (or equal). [**InStr**](/official/Reference/VBA/Strings/InStr) and [**InStrRev**](/official/Reference/VBA/Strings/InStrRev) return the position of one string inside another, scanning forward from a chosen start position or backward from one. All three accept an optional *compare* argument controlling whether the comparison is case-sensitive (**vbBinaryCompare**), case-insensitive (**vbTextCompare**), or governed by the surrounding [**Option Compare**](/official/Reference/Core/Option) setting (**vbUseCompareOption**). Note that **InStrRev** swaps the order of the haystack and needle arguments relative to **InStr**.

```vb
Debug.Print InStr("Hello, world", "o")           ' 5  (first match, forward)
Debug.Print InStrRev("Hello, world", "o")        ' 9  (first match, reverse)
Debug.Print StrComp("ABC", "abc", vbTextCompare) ' 0  (equal under text compare)
```

## Substrings, padding, and trimming

[**Left**](/official/Reference/VBA/Strings/Left), [**Mid**](/official/Reference/VBA/Strings/Mid), and [**Right**](/official/Reference/VBA/Strings/Right) extract a substring from the start, middle, or end of a string. **Mid** doubles as an l-value via the [**Mid =**](/official/Reference/Core/Mid-equals) statement, which writes characters back into a string in place. [**Space**](/official/Reference/VBA/Strings/Space) returns a run of spaces and [**String**](/official/Reference/VBA/Strings/String) returns a run of any chosen character --- both useful for padding fixed-width output. [**LTrim**](/official/Reference/VBA/Strings/LTrim), [**RTrim**](/official/Reference/VBA/Strings/RTrim), and [**Trim**](/official/Reference/VBA/Strings/Trim) strip leading, trailing, or both kinds of whitespace from a string.

```vb
Dim S As String
S = "  Hello, world  "
Debug.Print "[" & Trim(S) & "]"     ' "[Hello, world]"
Debug.Print Left(Trim(S), 5)        ' "Hello"
Debug.Print String(3, "*") & " " & Space(2) & "!"   ' "***   !"
```

## Case folding and other transformations

[**LCase**](/official/Reference/VBA/Strings/LCase) and [**UCase**](/official/Reference/VBA/Strings/UCase) fold a string to lowercase or uppercase. [**StrReverse**](/official/Reference/VBA/Strings/StrReverse) reverses the character order. [**StrConv**](/official/Reference/VBA/Strings/StrConv) bundles a wider set of conversions --- case folding, proper-casing, narrow/wide and Hiragana/Katakana mapping for DBCS locales, and Unicode-to-ANSI byte-array round-tripping --- selected by an additive flag argument.

```vb
Debug.Print UCase("Hello")               ' "HELLO"
Debug.Print StrReverse("Hello")          ' "olleH"
Debug.Print StrConv("hello world", vbProperCase)   ' "Hello World"
```

## Splitting, joining, replacing, filtering

[**Split**](/official/Reference/VBA/Strings/Split) breaks a string apart at a delimiter into a zero-based array of substrings; [**Join**](/official/Reference/VBA/Strings/Join) reverses the operation, gluing an array back together with a chosen separator between elements. [**Replace**](/official/Reference/VBA/Strings/Replace) substitutes one substring for another across a string, optionally limited to a fixed number of replacements or starting from a given offset. [**Filter**](/official/Reference/VBA/Strings/Filter) reduces a string array to only those elements that contain --- or, with *include* set to **False**, do not contain --- a chosen substring.

```vb
Dim Parts() As String
Parts = Split("red,green,blue", ",")
Debug.Print Join(Parts, " / ")              ' "red / green / blue"
Debug.Print Replace("red,green,blue", ",", "; ")  ' "red; green; blue"
```

## Formatting values as text

[**Format**](/official/Reference/VBA/Strings/Format) is the general-purpose formatter: it takes any expression --- number, date, or string --- together with a named or user-defined format string, and returns the rendered text. The four named-formatter functions [**FormatCurrency**](/official/Reference/VBA/Strings/FormatCurrency), [**FormatNumber**](/official/Reference/VBA/Strings/FormatNumber), [**FormatPercent**](/official/Reference/VBA/Strings/FormatPercent), and [**FormatDateTime**](/official/Reference/VBA/Strings/FormatDateTime) wrap the most common cases with explicit parameters in place of a format string, so the call site reads as the intent rather than as a recipe. [**MonthName**](/official/Reference/VBA/Strings/MonthName) and [**WeekdayName**](/official/Reference/VBA/Strings/WeekdayName) return the localised name (or abbreviation) of a month or day of the week, given its numeric index.

```vb
Debug.Print Format(1234.5, "#,##0.00")         ' "1,234.50"
Debug.Print FormatCurrency(1234.5)             ' "$1,234.50"   (US locale)
Debug.Print FormatDateTime(Now, vbLongDate)    ' "Saturday, May 9, 2026"
Debug.Print MonthName(1)                       ' "January"
```

## Members

- [Asc](/official/Reference/VBA/Strings/Asc) -- returns the character code of the first character in a string
- [Chr](/official/Reference/VBA/Strings/Chr) -- returns the character associated with a character code
- [Filter](/official/Reference/VBA/Strings/Filter) -- returns a subset of a string array matching (or not matching) a substring
- [Format](/official/Reference/VBA/Strings/Format) -- formats an expression according to a format expression
- [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency) -- formats an expression as a currency string
- [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) -- formats an expression as a date/time string
- [FormatNumber](/official/Reference/VBA/Strings/FormatNumber) -- formats an expression as a numeric string
- [FormatPercent](/official/Reference/VBA/Strings/FormatPercent) -- formats an expression as a percent string
- [InStr](/official/Reference/VBA/Strings/InStr) -- returns the position of one string within another
- [InStrRev](/official/Reference/VBA/Strings/InStrRev) -- returns the position of one string within another, searching from the end
- [Join](/official/Reference/VBA/Strings/Join) -- concatenates a string array using a given delimiter
- [LCase](/official/Reference/VBA/Strings/LCase) -- returns a string converted to lowercase
- [Left](/official/Reference/VBA/Strings/Left) -- returns a leftmost substring of a string
- [Len](/official/Reference/VBA/Strings/Len) -- returns the length of a string, or the storage size of a variable
- [LTrim](/official/Reference/VBA/Strings/LTrim) -- removes leading spaces from a string
- [Mid](/official/Reference/VBA/Strings/Mid) -- returns a substring of a string
- [MonthName](/official/Reference/VBA/Strings/MonthName) -- returns the name of the specified month
- [Replace](/official/Reference/VBA/Strings/Replace) -- replaces substrings within a string
- [Right](/official/Reference/VBA/Strings/Right) -- returns a rightmost substring of a string
- [RTrim](/official/Reference/VBA/Strings/RTrim) -- removes trailing spaces from a string
- [Space](/official/Reference/VBA/Strings/Space) -- returns a string of spaces
- [Split](/official/Reference/VBA/Strings/Split) -- splits a string into a string array on a delimiter
- [StrComp](/official/Reference/VBA/Strings/StrComp) -- compares two strings
- [StrConv](/official/Reference/VBA/Strings/StrConv) -- converts a string to a specified format
- [String](/official/Reference/VBA/Strings/String) -- returns a string of repeating characters
- [StrReverse](/official/Reference/VBA/Strings/StrReverse) -- reverses the order of characters of a string
- [Trim](/official/Reference/VBA/Strings/Trim) -- removes leading and trailing spaces from a string
- [UCase](/official/Reference/VBA/Strings/UCase) -- returns a string converted to uppercase
- [WeekdayName](/official/Reference/VBA/Strings/WeekdayName) -- returns the name of the specified day of the week
