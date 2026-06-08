---
title: TreeBorderStyleConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fc990f75-f070-4b82-8018-bea6a1c7d22c'
  PropagateID: 'fc990f75-f070-4b82-8018-bea6a1c7d22c'
  ReservedCode1: 'fe547c5b-3a08-4f12-ad0b-54373bb5c3d0'
  ReservedCode2: 'fe547c5b-3a08-4f12-ad0b-54373bb5c3d0'
---

# TreeBorderStyleConstants
由 [**TreeView.BorderStyle**](/official/Reference/WinNativeCommonCtls/TreeView/#borderstyle) 和 [**ListView.BorderStyle**](/official/Reference/WinNativeCommonCtls/ListView/#borderstyle) 共同使用的边框样式枚举。`cc…`（公共控件）前缀反映该枚举在此包的多个控件之间共享。

实际渲染效果与 [**Appearance**](/official/Reference/VBRUN/Constants/AppearanceConstants) 交互：当 **Appearance** 为 **vbAppear3d** 且 **BorderStyle** 为 **ccFixedSingle** 时，控件获得操作系统主题的3D边缘（`WS_EX_CLIENTEDGE`）；当 **Appearance** 为 **vbAppearFlat** 且 **BorderStyle** 为 **ccFixedSingle** 时，控件获得单像素平面边框（`WS_BORDER`）。

| 成员                | 值 | 描述                  |
|-----------------------|-------|------------------------------|
| **ccNone**              | 0 | 控件无边框。 |
| **ccFixedSingle** | 1 | 单像素边框。          |

## 另见

- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) —— 使用者
- [ListView](/official/Reference/WinNativeCommonCtls/ListView/) —— 使用者