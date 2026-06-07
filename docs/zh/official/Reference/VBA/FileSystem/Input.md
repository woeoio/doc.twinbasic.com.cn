---
title: Input, Input$
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/Input
---
# Input, Input$

Returns a fixed number of characters read from a file opened in **Input** or **Binary** mode.

Syntax:
- **Input(** *Number* **,** [ **#** ] *FileNumber* **)** --- returns a **Variant**.
- **Input$(** *Number* **,** [ **#** ] *FileNumber* **)** --- returns a **String**.

*Number*
: *required* The number of characters to return.

*FileNumber*
: *required* The file number used to open the file with the [**Open**](/official/Reference/Core/Open) statement.

Data read with **Input** is usually written to a file with **Print #** or **[Put](/official/Reference/Core/Put)**. Use this function only with files opened in **Input** or **Binary** mode.

Unlike the **Input #** statement, the **Input** function returns all the characters it reads, including commas, carriage returns, linefeeds, quotation marks, and leading spaces.

For files opened for **Binary** access, an attempt to read through the file using **Input** until [**EOF**](/official/Reference/VBA/FileSystem/EOF) returns **True** generates an error. Use [**LOF**](/official/Reference/VBA/FileSystem/LOF) and [**Loc**](/official/Reference/VBA/FileSystem/Loc) instead of **EOF** when reading binary files with **Input**, or use **[Get](/official/Reference/Core/Get)** when **EOF** is needed.

::: info
Use [**InputB**](/official/Reference/VBA/FileSystem/InputB) for byte data contained within text files. With **InputB**, *Number* specifies the number of bytes to return rather than the number of characters.
:::

### Example

This example uses the **Input** function to read one character at a time from a file and print it to the immediate window. *TESTFILE* is assumed to be a text file with a few lines of sample data.

```vb
Dim MyChar As Variant
Open "TESTFILE" For Input As #1     ' Open file.
Do While Not EOF(1)                 ' Loop until end of file.
    MyChar = Input(1, #1)           ' Get one character.
    Debug.Print MyChar              ' Print to the immediate window.
Loop
Close #1                            ' Close file.
```

### See Also

- [InputB, InputB$](/official/Reference/VBA/FileSystem/InputB) functions
- [Open](/official/Reference/Core/Open) statement
- [EOF](/official/Reference/VBA/FileSystem/EOF), [LOF](/official/Reference/VBA/FileSystem/LOF), [Loc](/official/Reference/VBA/FileSystem/Loc) functions
