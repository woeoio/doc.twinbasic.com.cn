---
title: GoTo
parent: Statements
permalink: /tB/Core/GoTo
---
# GoTo

Branches unconditionally to a specified line within a procedure.

Syntax:
> **GoTo** *line*

*line*
: Any line label or line number.

**GoTo** can branch only to lines within the procedure where it appears.

::: info
Too many **GoTo** statements can make code difficult to read and debug. Use structured control statements ([**Do...Loop**](/official/Reference/Core/Do-Loop), [**For...Next**](/official/Reference/Core/For-Next), [**If...Then...Else**](/official/Reference/Core/If-Then-Else), [**Select Case**](/official/Reference/Core/Select-Case)) whenever possible.
:::

### Example

This example uses the **GoTo** statement to branch to line labels within a procedure.

```vb
Sub GotoStatementDemo()
    Dim Number, MyString
    Number = 1 ' Initialize variable.
    ' Evaluate Number and branch to appropriate label.
    If Number = 1 Then GoTo Line1 Else GoTo Line2

Line1:
    MyString = "Number equals 1"
    GoTo LastLine ' Go to LastLine.
Line2:
    ' The following statement never gets executed.
    MyString = "Number equals 2"
LastLine:
    Debug.Print MyString ' Print "Number equals 1" in the Immediate window.
End Sub
```

### See Also

- [**On...GoTo** statement](/official/Reference/Core/On-GoTo)
- [**GoSub...Return** statement](/official/Reference/Core/GoSub-Return)
- [**On Error** statement](/official/Reference/Core/On-Error)
- [**Select Case** statement](/official/Reference/Core/Select-Case)
