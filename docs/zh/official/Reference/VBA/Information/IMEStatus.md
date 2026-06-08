---
title: IMEStatus
parent: Information Module
permalink: /tB/Modules/Information/IMEStatus
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1e9e6fd3-f6b8-4129-b9e6-57713a2d11fb'
  PropagateID: '1e9e6fd3-f6b8-4129-b9e6-57713a2d11fb'
  ReservedCode1: 'ff346157-0f8a-442c-a49a-2db2fcc1e01c'
  ReservedCode2: 'ff346157-0f8a-442c-a49a-2db2fcc1e01c'
---

# IMEStatus

返回一个[**VbIMEStatus**](/official/Reference/VBA/Constants/VbIMEStatus)值，指定Microsoft Windows当前输入法编辑器(IME)的模式；仅在东亚版本中可用。

语法：**IMEStatus** [ **()** ]

返回值是[**VbIMEStatus**](/official/Reference/VBA/Constants/VbIMEStatus)常量之一。不同区域设置可返回的常量不同：

- **日语**：`vbIMEModeNoControl`、`vbIMEModeOn`、`vbIMEModeOff`、`vbIMEModeDisable`、`vbIMEModeHiragana`、`vbIMEModeKatakana`、`vbIMEModeKatakanaHalf`、`vbIMEModeAlphaFull`、`vbIMEModeAlpha`中的任意一个。
- **韩语**：`vbIMEModeNoControl`、`vbIMEModeAlphaFull`、`vbIMEModeAlpha`、`vbIMEModeHangulFull`、`vbIMEModeHangul`。
- **中文**：`vbIMEModeNoControl`、`vbIMEModeOn`、`vbIMEModeOff`。

### 另请参阅

- [VbIMEStatus](/official/Reference/VBA/Constants/VbIMEStatus)枚举