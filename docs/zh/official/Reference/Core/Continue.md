---
title: Continue
parent: Statements
permalink: /tB/Core/Continue
---

# Continue


Immediately begins the next iteration of the enclosing loop.

Syntax: **Continue** [ **Do** \| **For** \| **While** ]

Do

: Used within a [Do](/official/Reference/Core/Do-Loop) loop.

For

: Used within a [For](/official/Reference/Core/For-Next) loop.

While

: Used within a [While](/official/Reference/Core/While-Wend) loop

::: info
**Continue** is a twinBASIC extension. Classic VBA has no skip-iteration form for any loop construct --- the closest equivalent is a forward [**GoTo**](/official/Reference/Core/GoTo) to a label placed just before the loop's terminator.
:::

### Example

This example uses **Continue For** to skip processing of certain characters of the string.

```vb
Dim i%, ch$, text$
For i = 1 To 10
    ch = Mid$(text, i, 1)
    If ch = " " Then Continue For
    ' Process a non-space character here
Next i
```
