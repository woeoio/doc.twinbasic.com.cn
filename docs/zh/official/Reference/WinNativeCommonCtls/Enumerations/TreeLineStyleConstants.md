---
title: TreeLineStyleConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants
---

# TreeLineStyleConstants
Controls whether the [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) draws tree lines from root nodes or only from child nodes. Used by [**TreeView.LineStyle**](/official/Reference/WinNativeCommonCtls/TreeView/#linestyle). Only has visible effect when [**Style**](/official/Reference/WinNativeCommonCtls/TreeView/#style) is one of the **tvwTreelines…** variants.

| Member                | Value | Description                                                                |
|-----------------------|-------|----------------------------------------------------------------------------|
| **tvwTreeLines** | 0 | Tree lines connect children to their parents but not root-level peers. |
| **tvwRootLines** | 1 | Tree lines connect root-level nodes to each other as well as child connections. |

## See Also

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) -- consumer
- [TreeStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) -- governs whether tree lines appear at all
