---
title: TreeBorderStyleConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants
---

# TreeBorderStyleConstants
The border style enumeration used by both [**TreeView.BorderStyle**](/en/official/Reference/WinNativeCommonCtls/TreeView/#borderstyle) and [**ListView.BorderStyle**](/en/official/Reference/WinNativeCommonCtls/ListView/#borderstyle). The `cc…` (common-controls) prefix reflects that the enum is shared across multiple controls in this package.

The effective rendering interacts with [**Appearance**](/en/official/Reference/VBRUN/Constants/AppearanceConstants): when **Appearance** is **vbAppear3d** and **BorderStyle** is **ccFixedSingle**, the control gets an OS-themed 3D edge (`WS_EX_CLIENTEDGE`); when **Appearance** is **vbAppearFlat** and **BorderStyle** is **ccFixedSingle**, the control gets a single-pixel flat border (`WS_BORDER`).

| Member                | Value | Description                  |
|-----------------------|-------|------------------------------|
| **ccNone**              | 0 | No border around the control. |
| **ccFixedSingle** | 1 | Single-pixel border.          |

## See Also

- [TreeView](/en/official/Reference/WinNativeCommonCtls/TreeView/) -- consumer
- [ListView](/en/official/Reference/WinNativeCommonCtls/ListView/) -- consumer
