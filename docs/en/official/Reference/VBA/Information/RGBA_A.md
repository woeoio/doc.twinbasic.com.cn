---
title: RGBA_A
parent: Information Module
permalink: /tB/Modules/Information/RGBA_A
---
# RGBA_A

Returns the alpha component (as an **Integer**) from a given RGBA colour value.

Syntax: **RGBA_A(** *RGBA* **)**

*RGBA*
: *required* A **Long** RGBA colour value, of the kind returned by [**RGBA**](/en/official/Reference/VBA/Information/RGBA).

The return value is the alpha (opacity) component in the range 0--255: **0** is fully transparent and **255** is fully opaque.

### Example

This example extracts the alpha component from a colour built with **RGBA**.

```vb
Dim MyColor As Long
Dim AlphaComponent As Integer
MyColor = RGBA(255, 0, 0, 128)
AlphaComponent = RGBA_A(MyColor)      ' Returns 128.
```

### See Also

- [RGBA](/en/official/Reference/VBA/Information/RGBA), [RGB](/en/official/Reference/VBA/Information/RGB) functions
- [RGB_R](/en/official/Reference/VBA/Information/RGB_R), [RGB_G](/en/official/Reference/VBA/Information/RGB_G), [RGB_B](/en/official/Reference/VBA/Information/RGB_B) functions
