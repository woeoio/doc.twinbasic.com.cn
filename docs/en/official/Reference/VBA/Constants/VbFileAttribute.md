---
title: VbFileAttribute
parent: Constants Module
permalink: /tB/Modules/Constants/VbFileAttribute
---
# VbFileAttribute

Attribute flags for files and directories used by [**Dir**](/en/official/Reference/VBA/FileSystem/Dir), [**GetAttr**](/en/official/Reference/VBA/FileSystem/GetAttr), and [**SetAttr**](/en/official/Reference/VBA/FileSystem/SetAttr). Combine multiple flags with **Or**.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbNormal** | 0 | Normal (default for **Dir** and **SetAttr**). |
| **vbReadOnly** | 1 | Read-only. |
| **vbHidden** | 2 | Hidden. |
| **VbSystem** | 4 | System file. |
| **vbVolume** | 8 | Volume label. |
| **vbDirectory** | 16 | Directory or folder. |
| **vbArchive** | 32 | File has changed since the last backup. |
| **vbAlias** | 64 | Identifier is an alias (legacy Macintosh). |

### See Also

- [Dir](/en/official/Reference/VBA/FileSystem/Dir), [GetAttr](/en/official/Reference/VBA/FileSystem/GetAttr), [SetAttr](/en/official/Reference/VBA/FileSystem/SetAttr)
