---
title: LTrim
parent: Strings Module
permalink: /tB/Modules/Strings/LTrim
---
# LTrim

Returns a **String** containing a copy of a specified string without leading spaces.

Syntax: **LTrim$(** *string* **)**, **LTrim(** *string* **)**

*string*
: *required* Any valid string expression. If *string* contains **Null**, **Null** is returned.

The `$`-suffixed form returns a **String**; the unsuffixed form returns a **Variant** (**String**).

### Example

This example uses the **LTrim** function to strip leading spaces from a string variable.

```vb
Dim MyString, TrimString
MyString = "  <-Trim->  "         ' Initialize string.
TrimString = LTrim(MyString)      ' TrimString = "<-Trim->  ".
```

### See Also

- [RTrim](/en/official/Reference/VBA/Strings/RTrim), [Trim](/en/official/Reference/VBA/Strings/Trim) functions
