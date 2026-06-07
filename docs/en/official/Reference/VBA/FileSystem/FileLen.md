---
title: FileLen
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/FileLen
---
# FileLen

Returns a **Long** specifying the length of a file in bytes.

Syntax: **FileLen(** *pathname* **)**

*pathname*
: *required* String expression that specifies a file name. The *pathname* may include the directory or folder, and the drive.

If the specified file is open when the **FileLen** function is called, the value returned represents the size of the file immediately before it was opened.

::: info
Use the [LOF](/en/official/Reference/VBA/FileSystem/LOF) function to obtain the length of an open file.
:::

### Example

This example uses the **FileLen** function to return the length of a file in bytes. For purposes of this example, assume that `TESTFILE` is a file containing some data.

```vb
Dim MySize
MySize = FileLen("TESTFILE")    ' Returns file length (bytes).
```

### See Also

- [LOF](/en/official/Reference/VBA/FileSystem/LOF) function
- [FileDateTime](/en/official/Reference/VBA/FileSystem/FileDateTime) function
