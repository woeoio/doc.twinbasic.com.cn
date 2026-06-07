---
title: ChDrive
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/ChDrive
---
# ChDrive

Changes the current drive.

Syntax: **ChDrive** *drive*

*drive*
: *required* A string expression that specifies an existing drive. If *drive* is a zero-length string (""), the current drive doesn't change. If the *drive* argument is a multiple-character string, **ChDrive** uses only the first letter.

### See Also

- [ChDir](/en/official/Reference/VBA/FileSystem/ChDir), [MkDir](/en/official/Reference/VBA/FileSystem/MkDir), and [RmDir](/en/official/Reference/VBA/FileSystem/RmDir) statements
- [CurDir](/en/official/Reference/VBA/FileSystem/CurDir) function

### Example

This example uses the **ChDrive** statement to change the current drive. 

```vb
ChDrive "D"   ' Make "D" the current drive.
```