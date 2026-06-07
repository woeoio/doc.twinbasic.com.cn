---
title: Trim
parent: Strings Module
permalink: /tB/Modules/Strings/Trim
---
# Trim

Returns a **String** containing a copy of a specified string without leading and trailing spaces.

Syntax: **Trim$(** *string* **)**, **Trim(** *string* **)**

*string*
: *required* Any valid string expression. If *string* contains **Null**, **Null** is returned.

The `$`-suffixed form returns a **String**; the unsuffixed form returns a **Variant** (**String**).

### Example

This example uses the **Trim** function to strip both leading and trailing spaces from a string variable.

```vb
Dim MyString, TrimString
MyString = "  <-Trim->  "        ' Initialize string.
TrimString = Trim(MyString)      ' TrimString = "<-Trim->".
```

### See Also

- [LTrim](/official/Reference/VBA/Strings/LTrim), [RTrim](/official/Reference/VBA/Strings/RTrim) functions
