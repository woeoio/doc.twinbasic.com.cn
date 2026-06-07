---
title: Mid
parent: Strings Module
permalink: /tB/Modules/Strings/Mid
---
# Mid, MidB

Returns a **String** containing a specified number of characters from a string.

Syntax:

- **Mid$(** *string*, *start* [ **,** *length* ] **)**, **Mid(** *string*, *start* [ **,** *length* ] **)**
- **MidB$(** *string*, *start* [ **,** *length* ] **)**, **MidB(** *string*, *start* [ **,** *length* ] **)**

*string*
: *required* String expression from which characters are returned. If *string* contains **Null**, **Null** is returned.

*start*
: *required* **Long**. Character position in *string* at which the part to be taken begins. If *start* is greater than the number of characters in *string*, **Mid** returns a zero-length string (`""`).

*length*
: *optional* **Variant** (**Long**). Number of characters to return. If omitted or if there are fewer than *length* characters in the text (including the character at *start*), all characters from the *start* position to the end of the string are returned.

The `$`-suffixed forms return a **String**; the unsuffixed forms return a **Variant** (**String**).

To determine the number of characters in *string*, use the [**Len**](/official/Reference/VBA/Strings/Len) function.

::: info
Use the **MidB** function with byte data contained in a string, as in double-byte character set languages. Instead of specifying the number of characters, the arguments specify numbers of bytes.
:::

::: tip
Use the [**Mid =**](/official/Reference/Core/Mid-equals) statement to replace characters within a string.
:::

### Example

This example uses the **Mid** function to return a specified number of characters from a string.

```vb
Dim MyString, FirstWord, LastWord, MidWords
MyString = "Mid Function Demo"      ' Create text string.
FirstWord = Mid(MyString, 1, 3)     ' Returns "Mid".
LastWord = Mid(MyString, 14, 4)     ' Returns "Demo".
MidWords = Mid(MyString, 5)         ' Returns "Function Demo".
```

### See Also

- [Left](/official/Reference/VBA/Strings/Left), [Len](/official/Reference/VBA/Strings/Len), [Right](/official/Reference/VBA/Strings/Right) functions
- [Mid =](/official/Reference/Core/Mid-equals) statement
