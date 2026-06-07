---
title: MacID
parent: Conversion Module
permalink: /tB/Modules/Conversion/MacID
---
# MacID

Used on the Macintosh to convert a 4-character constant to a value that may be used by [**Dir**](/official/Reference/VBA/FileSystem/Dir), [**Kill**](/official/Reference/VBA/FileSystem/Kill), **Shell**, and [**AppActivate**](/official/Reference/VBA/Interaction/AppActivate).

Syntax: **MacID(** *constant* **)**

*constant*
: *required* A **String** of 4 characters used to specify a resource type, file type, application signature, or Apple Event --- for example, `"TEXT"`, `"OBIN"`, `"XLS5"` for Excel files (`"XLS8"` for Excel 97); Microsoft Word uses `"W6BN"` (`"W8BN"` for Word 97).

The return type is **Long**.

**MacID** is used with **Dir** and **Kill** to specify a Macintosh file type. Because the Macintosh does not support `*` and `?` as wildcards, a four-character constant identifies groups of files instead. For example, the following statement returns `TEXT`-type files from the current folder:

```vb
Dir("SomePath", MacID("TEXT"))
```

**MacID** is used with **Shell** and **AppActivate** to specify an application by using the application's unique signature.

::: info
twinBASIC currently targets Windows. **MacID** is provided for source compatibility with VBA code originally written for the Macintosh; on Windows, the value it returns has no special meaning to the file-system or shell functions.
:::
