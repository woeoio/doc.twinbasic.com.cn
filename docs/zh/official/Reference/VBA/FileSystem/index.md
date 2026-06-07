---
title: FileSystem Module
parent: VBA Package
permalink: /tB/Modules/FileSystem/
---

# FileSystem module

The **FileSystem** module groups together the procedures and statements for working with files and directories on disk. Its members divide cleanly into two camps: *pathname-based* operations that act on something named in the filesystem (creating and deleting files and directories, querying their attributes, iterating over a directory listing), and *file-number-based* operations that act on a handle previously returned by the **Open** statement (reading, positioning, formatting, and tracking the channel).

## Navigating directories

[**ChDrive**](/official/Reference/VBA/FileSystem/ChDrive) changes the current drive, [**ChDir**](/official/Reference/VBA/FileSystem/ChDir) changes the current directory on a given drive, and [**CurDir**](/official/Reference/VBA/FileSystem/CurDir) returns the path of the current drive --- or of any other drive, if one is named. [**MkDir**](/official/Reference/VBA/FileSystem/MkDir) and [**RmDir**](/official/Reference/VBA/FileSystem/RmDir) create and remove directories.

```vb
ChDrive "D"
ChDir "D:\Projects"
Debug.Print CurDir              ' "D:\Projects"
MkDir "D:\Projects\Output"
```

## Inspecting files and directories

[**Dir**](/official/Reference/VBA/FileSystem/Dir) is the wildcard matcher: pass it a pathname containing `*` or `?` and it returns the first matching name, then call it again with no arguments to step through subsequent matches until it returns `""`. [**FileLen**](/official/Reference/VBA/FileSystem/FileLen) returns the size of a file in bytes without opening it, and [**FileDateTime**](/official/Reference/VBA/FileSystem/FileDateTime) returns its last-modified timestamp. [**GetAttr**](/official/Reference/VBA/FileSystem/GetAttr) and [**SetAttr**](/official/Reference/VBA/FileSystem/SetAttr) read and write the [**VbFileAttribute**](/official/Reference/VBA/Constants/VbFileAttribute) flag bits --- read-only, hidden, system, archive --- and **GetAttr** also reports whether a name refers to a directory by setting the **vbDirectory** bit.

```vb
Dim Name As String
Name = Dir("C:\Logs\*.log")
Do While Name <> ""
    Debug.Print Name & vbTab & FileLen("C:\Logs\" & Name)
    Name = Dir
Loop
```

## Copying and deleting

[**FileCopy**](/official/Reference/VBA/FileSystem/FileCopy) copies one file to another, and [**Kill**](/official/Reference/VBA/FileSystem/Kill) deletes files matching a wildcard pattern. Both operate by pathname and raise a run-time error when asked to act on a file the current process has open.

```vb
FileCopy "C:\Data\report.xlsx", "C:\Backup\report.xlsx"
Kill "C:\Backup\*.tmp"
```

## Opening and tracking file numbers

The lower-level read/write statements --- **Open**, **Close**, **Get**, **Put**, **Print**, **Write**, **Input**, and **Line Input** --- work in terms of a *file number* in the range 1--511. [**FreeFile**](/official/Reference/VBA/FileSystem/FreeFile) returns the next number that isn't currently in use, sparing the caller from picking one by hand and racing other code to it. Once a file is open, [**FileAttr**](/official/Reference/VBA/FileSystem/FileAttr) reports the access mode --- **Input**, **Output**, **Random**, **Append**, or **Binary** --- that the file number was opened with. [**Reset**](/official/Reference/VBA/FileSystem/Reset) closes every file number currently open and flushes its buffers, and is most useful as a last-ditch cleanup before exit.

```vb
Dim N As Long
N = FreeFile
Open "C:\Data\report.txt" For Input As #N
' ... read ...
Close #N
```

## Position within an open file

For an open file number, [**EOF**](/official/Reference/VBA/FileSystem/EOF) returns **True** once a sequential read has run past the last record, [**LOF**](/official/Reference/VBA/FileSystem/LOF) returns the file's total length in bytes, and [**Loc**](/official/Reference/VBA/FileSystem/Loc) returns the current read/write position. The unit of *position* depends on the open mode --- record number for **Random**, byte offset for **Binary**, and the byte position divided by 128 for sequential modes --- so the per-mode tables on each function's page are the authoritative reference. [**Seek**](/official/Reference/VBA/FileSystem/Seek) doubles as a function and a statement: the function returns the position of the **next** read or write (whereas **Loc** reports the position of the *last*), and the statement repositions the file pointer ahead of the next operation.

```vb
Dim N As Long, Line As String
N = FreeFile
Open "C:\Data\big.log" For Input As #N
Do While Not EOF(N)
    Line Input #N, Line
Loop
Close #N
```

## Reading and formatting through open file numbers

[**Input**](/official/Reference/VBA/FileSystem/Input) and [**Input$**](/official/Reference/VBA/FileSystem/Input) return a fixed number of characters read from a file number opened with **Open**, as a **Variant** or a **String** respectively; [**InputB**](/official/Reference/VBA/FileSystem/InputB) and [**InputB$**](/official/Reference/VBA/FileSystem/InputB) are their byte-oriented counterparts, counting raw bytes rather than UTF-16 characters. They differ from the **Input #** statement in that they return every character they read --- commas, newlines, quotation marks, leading spaces, and all --- making them the right choice when the bytes on disk are not a stream of comma-delimited values.

[**Width**](/official/Reference/VBA/FileSystem/Width) sets the output line width on a sequential output channel: subsequent **Print #** wraps to a new line once the chosen number of characters has been written, or never wraps at all when *Width* is `0`.

## Members

- [ChDir](/official/Reference/VBA/FileSystem/ChDir) -- changes the current directory or folder
- [ChDrive](/official/Reference/VBA/FileSystem/ChDrive) -- changes the current drive
- [CurDir](/official/Reference/VBA/FileSystem/CurDir) -- returns the current path
- [Dir](/official/Reference/VBA/FileSystem/Dir) -- returns the name of a file, directory, folder, or volume label that matches a pattern
- [EOF](/official/Reference/VBA/FileSystem/EOF) -- returns whether the end of a file opened for **Random** or sequential **Input** has been reached
- [FileAttr](/official/Reference/VBA/FileSystem/FileAttr) -- returns the file mode for files opened with the **Open** statement
- [FileCopy](/official/Reference/VBA/FileSystem/FileCopy) -- copies a file
- [FileDateTime](/official/Reference/VBA/FileSystem/FileDateTime) -- returns the date and time when a file was created or last modified
- [FileLen](/official/Reference/VBA/FileSystem/FileLen) -- returns the length of a file in bytes
- [FreeFile](/official/Reference/VBA/FileSystem/FreeFile) -- returns the next file number available for use by the **Open** statement
- [GetAttr](/official/Reference/VBA/FileSystem/GetAttr) -- returns the attributes of a file or directory
- [Input, Input$](/official/Reference/VBA/FileSystem/Input) -- reads a fixed number of characters from an open sequential file
- [InputB, InputB$](/official/Reference/VBA/FileSystem/InputB) -- reads a fixed number of bytes from an open sequential file
- [Kill](/official/Reference/VBA/FileSystem/Kill) -- deletes files from a disk
- [Loc](/official/Reference/VBA/FileSystem/Loc) -- returns the current read/write position within an open file
- [LOF](/official/Reference/VBA/FileSystem/LOF) -- returns the size, in bytes, of an open file
- [MkDir](/official/Reference/VBA/FileSystem/MkDir) -- creates a new directory or folder
- [Reset](/official/Reference/VBA/FileSystem/Reset) -- closes all disk files opened by using the **Open** statement
- [RmDir](/official/Reference/VBA/FileSystem/RmDir) -- removes an existing directory or folder
- [Seek](/official/Reference/VBA/FileSystem/Seek) -- returns or sets the read/write position within an open file
- [SetAttr](/official/Reference/VBA/FileSystem/SetAttr) -- sets attribute information for a file
- [Width](/official/Reference/VBA/FileSystem/Width) -- sets the line width for a sequential output file
