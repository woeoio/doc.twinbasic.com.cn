---
title: On...GoSub
parent: Statements
permalink: /tB/Core/On-GoSub
---
# On...GoSub

Branches to one of several specified subroutine lines, depending on the value of an expression.

The **On...GoSub** statement is documented together with **On...GoTo** on the [**On...GoTo, On...GoSub**](/en/official/Reference/Core/On-GoTo) page.

Syntax:
> **On** *expression* **GoSub** *destinationlist*

When *expression* evaluates to *n*, control transfers to the *n*-th label in *destinationlist*, just as if a [**GoSub**](/en/official/Reference/Core/GoSub-Return) had been executed against that label. A subsequent [**Return**](/en/official/Reference/Core/Return) within the called subroutine resumes execution at the statement following the **On...GoSub**. See [**On...GoTo, On...GoSub**](/en/official/Reference/Core/On-GoTo) for the full description of out-of-range values, the 0-255 constraint on *expression*, and worked examples.

### See Also

- [**On...GoTo** statement](/en/official/Reference/Core/On-GoTo)
- [**GoSub...Return** statement](/en/official/Reference/Core/GoSub-Return)
- [**Select Case** statement](/en/official/Reference/Core/Select-Case)
