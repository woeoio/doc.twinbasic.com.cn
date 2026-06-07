---
title: Mid =
parent: Statements
permalink: /tB/Core/Mid-equals
---
# Mid = statement

Replaces a specified number of characters in a **Variant** (**String**) variable with characters from another string.

::: info
This page documents the **Mid =** *statement* (string mutation). The unrelated [**Mid** function](/official/Reference/VBA/Strings/Mid) returns a substring without modifying its argument.
:::

Syntax:
> **Mid(** *stringvar* **,** *start* [ **,** *length* ] **) =** *string*

*stringvar*
: Name of the string variable to modify.

*start*
: **Variant** (**Long**). Character position in *stringvar* where the replacement of text begins.

*length*
: *optional* **Variant** (**Long**). Number of characters to replace. If omitted, all of *string* is used.

*string*
: String expression that replaces part of *stringvar*.

The number of characters replaced is always less than or equal to the number of characters in *stringvar*.

::: info
Use the [**MidB =**](/official/Reference/Core/MidB-equals) statement with byte data contained in a string. In the **MidB =** statement, *start* specifies the byte position within *stringvar* where replacement begins, and *length* specifies the number of bytes to replace.
:::

### Example

This example uses the **Mid =** statement to replace a specified number of characters in a string variable with characters from another string.

```vb
Dim MyString
MyString = "The dog jumps" ' Initialize string.
Mid(MyString, 5, 3) = "fox" ' MyString = "The fox jumps".
Mid(MyString, 5) = "cow" ' MyString = "The cow jumps".
Mid(MyString, 5) = "cow jumped over" ' MyString = "The cow jumpe".
Mid(MyString, 5, 3) = "duck" ' MyString = "The duc jumpe".
```

### See Also

- [**MidB =** statement](/official/Reference/Core/MidB-equals)
- [**Mid** function](/official/Reference/VBA/Strings/Mid)
- [**LSet** statement](/official/Reference/Core/LSet)
- [**RSet** statement](/official/Reference/Core/RSet)
