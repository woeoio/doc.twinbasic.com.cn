---
title: TreeStyleConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeStyleConstants
---

# TreeStyleConstants
Composite visual style of a [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/), encoding a 3-bit combination of which elements appear: **plus-minus** buttons, **treelines**, and **picture** icons. The labels are always shown.

Used by [**TreeView.Style**](/official/Reference/WinNativeCommonCtls/TreeView/#style). Default: **tvwTreelinesPlusMinusPictureText**.

The composite decoding:

| [**Style**](/official/Reference/WinNativeCommonCtls/TreeView/#style)                  | Buttons | Lines | Icons | Labels |
|--------------------------------------------------|---------|-------|-------|--------|
| **tvwTextOnly**                                  | ---       | ---     | ---     | yes    |
| **tvwPictureText**                               | ---       | ---     | yes   | yes    |
| **tvwPlusMinusText**                             | yes     | ---     | ---     | yes    |
| **tvwPlusMinusPictureText**                      | yes     | ---     | yes   | yes    |
| **tvwTreelinesText**                             | ---       | yes   | ---     | yes    |
| **tvwTreelinesPictureText**                      | ---       | yes   | yes   | yes    |
| **tvwTreelinesPlusMinusText**                    | yes     | yes   | ---     | yes    |
| **tvwTreelinesPlusMinusPictureText**             | yes     | yes   | yes   | yes    |

The enum's underlying values are 0--7, matching the order in the table.

| Member                                       | Value |
|----------------------------------------------|-------|
| **tvwTextOnly**                                       | 0 |
| **tvwPictureText**                                 | 1 |
| **tvwPlusMinusText**                             | 2 |
| **tvwPlusMinusPictureText**               | 3 |
| **tvwTreelinesText**                             | 4 |
| **tvwTreelinesPictureText**               | 5 |
| **tvwTreelinesPlusMinusText**           | 6 |
| **tvwTreelinesPlusMinusPictureText** | 7 |

## See Also

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) -- consumer
- [TreeLineStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) -- selects whether root-level lines are drawn when the **tvwTreelines…** variants are in effect
