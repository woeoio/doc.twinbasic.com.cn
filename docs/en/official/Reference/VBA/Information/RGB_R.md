---
title: RGB_R
parent: Information Module
permalink: /tB/Modules/Information/RGB_R
---
# RGB_R

Returns the red component (as an **Integer**) from a given RGBA colour value.

Syntax: **RGB_R(** *RGBA* **)**

*RGBA*
: *required* A **Long** RGBA colour value, of the kind returned by [**RGB**](/en/official/Reference/VBA/Information/RGB) or [**RGBA**](/en/official/Reference/VBA/Information/RGBA).

The return value is the red component in the range 0--255.

### Example

This example extracts the red component from a colour built with **RGB**.

```vb
Dim MyColor As Long
Dim RedComponent As Integer
MyColor = RGB(255, 100, 150)
RedComponent = RGB_R(MyColor)         ' Returns 255.
```

### See Also

- [RGB](/en/official/Reference/VBA/Information/RGB), [RGBA](/en/official/Reference/VBA/Information/RGBA) functions
- [RGB_G](/en/official/Reference/VBA/Information/RGB_G), [RGB_B](/en/official/Reference/VBA/Information/RGB_B), [RGBA_A](/en/official/Reference/VBA/Information/RGBA_A) functions
