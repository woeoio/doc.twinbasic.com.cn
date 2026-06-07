---
title: MkDir
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/MkDir
---
# MkDir

Creates a new directory or folder.

Syntax: **MkDir** *path*

*path*
: A string expression that identifies the directory or folder to be created. The *path* may include the drive. If no drive is specified, **MkDir** creates the new directory or folder on the current drive.

### See Also

- [ChDir](/official/Reference/VBA/FileSystem/ChDir), [ChDrive](/official/Reference/VBA/FileSystem/ChDrive), [RmDir](/official/Reference/VBA/FileSystem/RmDir) statements
- [CurDir](/official/Reference/VBA/FileSystem/CurDir), [Dir](/official/Reference/VBA/FileSystem/Dir) functions

### Example

This example uses the **MkDir** statement to create a directory or folder. If the drive is not specified, the new directory or folder is created on the current drive.

```vb
MkDir "MYDIR"   ' Make new directory or folder.
```
