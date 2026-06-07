---
title: Now
parent: DateTime Module
permalink: /tB/Modules/DateTime/Now
---
# Now

Returns a **Variant** (**Date**) specifying the current date and time according to the system date and time.

Syntax: **Now** [ **()** ]

### Example

This example uses the **Now** function to return the current system date and time.

```vb
Dim Today
Today = Now           ' Assign current system date and time.
Debug.Print Today     ' Prints e.g. 5/7/2026 2:30:15 PM
Debug.Print Year(Today)    ' e.g. 2026
Debug.Print Month(Today)   ' e.g. 5
Debug.Print Hour(Today)    ' e.g. 14
```

### See Also

- [Date](/official/Reference/VBA/DateTime/Date), [Time](/official/Reference/VBA/DateTime/Time) properties
