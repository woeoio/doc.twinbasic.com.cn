---
title: Input #
parent: Statements
permalink: /tB/Core/Input
---

# Input # statement

Reads data from an open sequential file and assigns the data to variables.

::: info
This page documents the **Input #** _statement_. The unrelated [**Input** function](/en/official/Reference/VBA/FileSystem/Input) reads a fixed number of characters from any open file.
:::

Syntax:

> **Input** **#** _filenumber_ **,** _varlist_

_filenumber_
: Any valid file number.

_varlist_
: Comma-delimited list of variables that are assigned values read from the file. _varlist_ can't contain an array variable or an object variable. However, variables that describe an element of an array or user-defined type may be used.

Data read with **Input #** is usually written to a file with [**Write #**](/en/official/Reference/Core/Write). Use this statement only with files opened in **Input** or **Binary** mode. When read, standard string or numeric data is assigned to variables without modification.

The following table illustrates how other input data is treated:

| Data                           | Value assigned to variable                                   |
| :----------------------------- | :----------------------------------------------------------- |
| Delimiting comma or blank line | **Empty**                                                    |
| `#NULL#`                       | **Null**                                                     |
| `#TRUE#` or `#FALSE#`          | **True** or **False**                                        |
| `#`_yyyy-mm-dd hh:mm:ss_`#`    | The date and/or time represented by the expression           |
| `#ERROR `_errornumber_`#`      | _errornumber_ (variable is a **Variant** tagged as an error) |

Double quotation marks (`"`) within input data are ignored.

::: warning
Do not write strings that contain embedded quotation marks (for example, `"1,2""X"`) for use with the **Input #** statement; **Input #** parses this string as two complete and separate strings.
:::

Data items in a file must appear in the same order as the variables in _varlist_ and match variables of the same data type. If a variable is numeric and the data is not numeric, a value of zero is assigned to the variable.

If the end of the file is reached while a data item is being read, the input is terminated and an error occurs.

::: info
To be able to correctly read data from a file into variables by using **Input #**, use the [**Write #**](/en/official/Reference/Core/Write) statement instead of the [**Print #**](/en/official/Reference/Core/Print) statement to write the data to the files. Using **Write #** ensures that each separate data field is properly delimited.
:::

### Example

This example uses the **Input #** statement to read data from a file into two variables. This example assumes that `TESTFILE` is a file with a few lines of data written to it by using the **Write #** statement; that is, each line contains a string in quotations and a number separated by a comma, for example, `"Hello", 234`.

```vb
Dim MyString, MyNumber
Open "TESTFILE" For Input As #1    ' Open file for input.
Do While Not EOF(1)    ' Loop until end of file.
    Input #1, MyString, MyNumber    ' Read data into two variables.
    Debug.Print MyString, MyNumber    ' Print data to the Immediate window.
Loop
Close #1    ' Close file.
```

### See Also

- [**Open** statement](/en/official/Reference/Core/Open)
- [**Close** statement](/en/official/Reference/Core/Close)
- [**Line Input #** statement](/en/official/Reference/Core/Line-Input)
- [**Write #** statement](/en/official/Reference/Core/Write)
- [**Print #** statement](/en/official/Reference/Core/Print)
- [**Input** function](/en/official/Reference/VBA/FileSystem/Input)
- [**EOF** function](/en/official/Reference/VBA/FileSystem/EOF)
