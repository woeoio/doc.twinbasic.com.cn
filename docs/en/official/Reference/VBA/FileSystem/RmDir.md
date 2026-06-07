---
title: RmDir
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/RmDir
---
# RmDir

Removes an existing directory or folder.

Syntax: **RmDir** *path*

*path*
: A string expression that identifies the directory or folder to be removed. The *path* may include the drive. If no drive is specified, **RmDir** removes the directory or folder on the current drive.

An error occurs when **RmDir** is used on a directory or folder containing files. Use the [**Kill**](/en/official/Reference/VBA/FileSystem/Kill) statement to delete all files before attempting to remove a directory or folder.

### See Also

- [ChDir](/en/official/Reference/VBA/FileSystem/ChDir), [ChDrive](/en/official/Reference/VBA/FileSystem/ChDrive), [MkDir](/en/official/Reference/VBA/FileSystem/MkDir) statements
- [CurDir](/en/official/Reference/VBA/FileSystem/CurDir), [Dir](/en/official/Reference/VBA/FileSystem/Dir) functions
- [Kill](/en/official/Reference/VBA/FileSystem/Kill) statement

### Example

This example uses the **RmDir** statement to remove an existing directory or folder.

```vb
' Assume that MYDIR is an empty directory or folder.
RmDir "MYDIR"   ' Remove MYDIR.
```
