---
title: Unlock
parent: Statements
permalink: /tB/Core/Unlock
---
# Unlock

Releases a lock acquired with the [**Lock**](/official/Reference/Core/Lock) statement, restoring access by other processes to the previously locked region of an open file.

The **Unlock** statement is documented together with **Lock** on the [**Lock, Unlock**](/official/Reference/Core/Lock) page.

Syntax:
> **Unlock** [ **#** ] *filenumber* **,** [ *recordrange* ]

The arguments to **Unlock** must match exactly the arguments of the corresponding **Lock** statement. See [**Lock, Unlock**](/official/Reference/Core/Lock) for full details.

::: important
Be sure to remove all locks with an **Unlock** statement before closing a file or quitting the program. Failure to remove locks produces unpredictable results.
:::

### See Also

- [**Lock** statement](/official/Reference/Core/Lock)
- [**Open** statement](/official/Reference/Core/Open)
- [**Close** statement](/official/Reference/Core/Close)
