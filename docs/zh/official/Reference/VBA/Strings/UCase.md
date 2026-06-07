---
title: UCase
parent: Strings Module
permalink: /tB/Modules/Strings/UCase
---
# UCase

Returns a **String** containing the specified string, converted to uppercase.

Syntax: **UCase$(** *string* **)**, **UCase(** *string* **)**

*string*
: *required* Any valid string expression. If *string* contains **Null**, **Null** is returned.

The `$`-suffixed form returns a **String**; the unsuffixed form returns a **Variant** (**String**).

Only lowercase letters are converted to uppercase; all uppercase letters and nonletter characters remain unchanged.

### Example

This example uses the **UCase** function to return an uppercase version of a string.

```vb
Dim LowerCase, UpperCase
LowerCase = "Hello World 1234"    ' String to convert.
UpperCase = UCase(LowerCase)      ' Returns "HELLO WORLD 1234".
```

### See Also

- [LCase](/official/Reference/VBA/Strings/LCase), [StrConv](/official/Reference/VBA/Strings/StrConv) functions
