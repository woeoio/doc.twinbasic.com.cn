---
title: Beep
parent: Interaction Module
permalink: /tB/Modules/Interaction/Beep
---
# Beep

Sounds a tone through the computer's speaker.

Syntax: **Beep**

The frequency and duration of the beep depend on the hardware and system software, and vary among computers.

### Example

This example uses the **Beep** statement to sound three consecutive tones through the computer's speaker.

```vb
Dim I%
For I = 1 To 3   ' Loop 3 times.
   Beep          ' Sound a tone.
Next I
```

### See Also

- [DoEvents](/official/Reference/VBA/Interaction/DoEvents) function
- [Shell](/official/Reference/VBA/Interaction/Shell) function
- [MsgBox](/official/Reference/VBA/Interaction/MsgBox) function