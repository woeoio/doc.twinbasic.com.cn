---
title: GoSub ... Return
parent: Statements
permalink: /tB/Core/GoSub-Return
---
# GoSub ... Return

Branches to and returns from a subroutine within a procedure.

Syntax:
> **GoSub** *line*  
> &nbsp;&nbsp;&nbsp;&nbsp; ...  
> *line*  
> &nbsp;&nbsp;&nbsp;&nbsp; ...  
> &nbsp;&nbsp;&nbsp;&nbsp; **Return**

*line*
: Any line label or line number.

Use **GoSub** and **Return** anywhere in a procedure, but **GoSub** and the corresponding **Return** statement must be in the same procedure. A subroutine can contain more than one **Return** statement, but the first **Return** statement encountered causes the flow of execution to branch back to the statement immediately following the most recently executed **GoSub** statement.

::: info
**GoSub...Return** cannot enter or exit [**Sub**](/en/official/Reference/Core/Sub) procedures.
:::

::: tip
Creating separate callable procedures may provide a more structured alternative to using **GoSub...Return**.
:::

### Example

This example uses **GoSub** to call a subroutine within a **Sub** procedure. The **Return** statement causes the execution to resume at the statement immediately following the **GoSub** statement. The [**Exit Sub**](/en/official/Reference/Core/Exit) statement is used to prevent control from accidentally flowing into the subroutine.

```vb
Sub GosubDemo()
    Dim Num
    ' Solicit a number from the user.
    Num = InputBox("Enter a positive number to be divided by 2.")
    ' Only use routine if user enters a positive number.
    If Num > 0 Then GoSub MyRoutine
    Debug.Print Num
    Exit Sub ' Use Exit to prevent an error.
MyRoutine:
    Num = Num / 2 ' Perform the division.
    Return ' Return control to statement following the GoSub statement.
End Sub
```

### See Also

- [**Return** statement](/en/official/Reference/Core/Return)
- [**GoTo** statement](/en/official/Reference/Core/GoTo)
- [**On...GoSub** statement](/en/official/Reference/Core/On-GoSub)
- [**Sub** statement](/en/official/Reference/Core/Sub)
