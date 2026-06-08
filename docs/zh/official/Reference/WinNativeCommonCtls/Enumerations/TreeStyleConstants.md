---
title: TreeStyleConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeStyleConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7f0df8d3-1977-49e9-995c-31d0b6cc2695'
  PropagateID: '7f0df8d3-1977-49e9-995c-31d0b6cc2695'
  ReservedCode1: '354c37f1-26e0-4113-bf28-b05a546f3c11'
  ReservedCode2: '354c37f1-26e0-4113-bf28-b05a546f3c11'
---

# TreeStyleConstants
[**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 的复合视觉样式，编码了显示哪些元素的3位组合：**加减**按钮、**树线**和**图片**图标。标签始终显示。

由 [**TreeView.Style**](/official/Reference/WinNativeCommonCtls/TreeView/#style) 使用。默认：**tvwTreelinesPlusMinusPictureText**。

复合解码：

| [**Style**](/official/Reference/WinNativeCommonCtls/TreeView/#style)                  | 按钮 | 线条 | 图标 | 标签 |
|--------------------------------------------------|---------|-------|-------|--------|
| **tvwTextOnly**                                  | ---       | ---     | ---     | 是    |
| **tvwPictureText**                               | ---       | ---     | 是   | 是    |
| **tvwPlusMinusText**                             | 是     | ---     | ---     | 是    |
| **tvwPlusMinusPictureText**                      | 是     | ---     | 是   | 是    |
| **tvwTreelinesText**                             | ---       | 是   | ---     | 是    |
| **tvwTreelinesPictureText**                      | ---       | 是   | 是   | 是    |
| **tvwTreelinesPlusMinusText**                    | 是     | 是   | ---     | 是    |
| **tvwTreelinesPlusMinusPictureText**             | 是     | 是   | 是   | 是    |

该枚举的基础值为0--7，与表中的顺序一致。

| 成员                                       | 值 |
|----------------------------------------------|-------|
| **tvwTextOnly**                                       | 0 |
| **tvwPictureText**                                 | 1 |
| **tvwPlusMinusText**                             | 2 |
| **tvwPlusMinusPictureText**               | 3 |
| **tvwTreelinesText**                             | 4 |
| **tvwTreelinesPictureText**               | 5 |
| **tvwTreelinesPlusMinusText**           | 6 |
| **tvwTreelinesPlusMinusPictureText** | 7 |

## 另见

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) —— 使用者
- [TreeLineStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) —— 选择当 **tvwTreelines…** 变体生效时是否绘制根级线条