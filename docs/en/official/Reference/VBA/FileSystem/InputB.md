---
title: InputB, InputB$
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/InputB
---
# InputB, InputB$

Returns a fixed number of bytes read from a file opened in **Input** or **Binary** mode.

Syntax:
- **InputB(** *Number* **,** [ **#** ] *FileNumber* **)** --- returns a **Variant**.
- **InputB$(** *Number* **,** [ **#** ] *FileNumber* **)** --- returns a **String** whose underlying bytes are the bytes that were read.

*Number*
: *required* The number of bytes to return.

*FileNumber*
: *required* The file number used to open the file with the [**Open**](/en/official/Reference/Core/Open) statement.

**InputB** is the byte-oriented counterpart of [**Input**](/en/official/Reference/VBA/FileSystem/Input). Where **Input** counts and returns characters (two bytes per character in twinBASIC's UTF-16 buffer), **InputB** counts and returns raw bytes --- useful when reading binary data through a textually-opened channel.

The bytes are packed into the result without any character-set translation; the **String** form simply reinterprets the byte run as a UTF-16 string for storage.

### Example

```vb
Dim Bytes As Variant
Open "data.bin" For Binary Access Read As #1
Bytes = InputB(LOF(1), 1)            ' Read the whole file as bytes.
Close #1
```

### See Also

- [Input, Input$](/en/official/Reference/VBA/FileSystem/Input) functions
- [Open](/en/official/Reference/Core/Open) statement
- [LOF](/en/official/Reference/VBA/FileSystem/LOF) function
