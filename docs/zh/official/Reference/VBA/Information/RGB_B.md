---
title: RGB_B
parent: Information Module
permalink: /tB/Modules/Information/RGB_B
---
# RGB_B

Returns the blue component (as an **Integer**) from a given RGBA colour value.

Syntax: **RGB_B(** *RGBA* **)**

*RGBA*
: *required* A **Long** RGBA colour value, of the kind returned by [**RGB**](/official/Reference/VBA/Information/RGB) or [**RGBA**](/official/Reference/VBA/Information/RGBA).

The return value is the blue component in the range 0--255.

### Example

This example extracts the blue component from a colour built with **RGB**.

```vb
Dim MyColor As Long
Dim BlueComponent As Integer
MyColor = RGB(210, 45, 200)
BlueComponent = RGB_B(MyColor)        ' Returns 200.
```

### See Also

- [RGB](/official/Reference/VBA/Information/RGB), [RGBA](/official/Reference/VBA/Information/RGBA) functions
- [RGB_R](/official/Reference/VBA/Information/RGB_R), [RGB_G](/official/Reference/VBA/Information/RGB_G), [RGBA_A](/official/Reference/VBA/Information/RGBA_A) functions
