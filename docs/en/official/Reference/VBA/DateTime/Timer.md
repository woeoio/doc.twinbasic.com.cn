---
title: Timer
parent: DateTime Module
permalink: /tB/Modules/DateTime/Timer
---
# Timer

Returns a **Single** representing the number of seconds elapsed since midnight.

Syntax: **Timer**

The **Timer** function returns fractional portions of a second.

### Example

This example uses the **Timer** function to measure elapsed time.

```vb
Dim Start As Single, Finish As Single
Start = Timer                   ' Record start time.
' ... perform some operation ...
Finish = Timer                  ' Record end time.
Debug.Print "Elapsed: " & Finish - Start & " seconds"
```

### See Also

- [Time](/en/official/Reference/VBA/DateTime/Time) property
- [Now](/en/official/Reference/VBA/DateTime/Now) function
