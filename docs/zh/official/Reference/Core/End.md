---
title: End
parent: Statements
permalink: /tB/Core/End
---

# End

Ends a procedure or block.

Syntax:

- **End**  
  Terminates execution immediately. Never required by itself but may be placed anywhere in a procedure to end code execution, close files opened with the [**Open**](/official/Reference/Core/Open) statement, and to clear variables.

- **End Function**  
  Required to end a [**Function**](/official/Reference/Core/Function) statement.
  
- **End If**  
  Required to end a block [**If...Then...Else**](/official/Reference/Core/If-Then-Else) statement.
  
- **End Property**  
  Required to end a [**Property Get**](/official/Reference/Core/Property), [**Property Let**](/official/Reference/Core/Property), and [**Property Set**](/official/Reference/Core/Property) procedure.
  
- **End Select**  
  Required to end a [**Select Case**](/official/Reference/Core/Select-Case) statement.

- **End Sub**
  Required to end a [**Sub**](/official/Reference/Core/Sub) statement.

- **End Type**
  Required to end a user-defined type (UDT) definition ([**Type**](/official/Reference/Core/Type) statement).

- **End With**
  Required to end a [**With**](/official/Reference/Core/With) statement.

When executed, the **End** statement resets all module-level variables and all static local variables in all modules. To preserve the value of these variables, use the [**Stop**](/official/Reference/Core/Stop) statement instead --- execution can then resume while preserving the value of those variables.

::: important

The **End** statement stops code execution abruptly, without invoking the Unload, QueryUnload, or Terminate event, or any other Visual Basic code. Code placed in the Unload, QueryUnload, and Terminate events of forms and class modules is not executed. Objects created from class modules are destroyed, files opened by using the **Open** statement are closed, and memory used by the program is freed. Object references held by other programs are invalidated.
:::

The **End** statement provides a way to force the program to halt. For normal termination of a Visual Basic program, all forms should be unloaded. The program closes as soon as there are no other programs holding references to objects created from public class modules and no code executing.

### Example

This example uses the **End** statement to end code execution if the user enters an invalid password.

```vb
Sub Form_Load 
  Dim Password, Pword 
  PassWord = "Swordfish" 
  Pword = InputBox("Type in your password") 
  If Pword <> PassWord Then 
    MsgBox "Sorry, incorrect password" 
    End
  End If
End Sub
```
