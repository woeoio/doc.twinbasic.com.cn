---
title: Unlock
parent: Statements
permalink: /tB/Core/Unlock
---

# Unlock

Releases a lock acquired with the [**Lock**](/en/official/Reference/Core/Lock) statement, restoring access by other processes to the previously locked region of an open file.

The **Unlock** statement is documented together with **Lock** on the [**Lock, Unlock**](/en/official/Reference/Core/Lock) page.

Syntax:

> **Unlock** [ **#** ] _filenumber_ **,** [ *recordrange* ]

The arguments to **Unlock** must match exactly the arguments of the corresponding **Lock** statement. See [**Lock, Unlock**](/en/official/Reference/Core/Lock) for full details.

::: warning
Be sure to remove all locks with an **Unlock** statement before closing a file or quitting the program. Failure to remove locks produces unpredictable results.
:::

### See Also

- [**Lock** statement](/en/official/Reference/Core/Lock)
- [**Open** statement](/en/official/Reference/Core/Open)
- [**Close** statement](/en/official/Reference/Core/Close)

