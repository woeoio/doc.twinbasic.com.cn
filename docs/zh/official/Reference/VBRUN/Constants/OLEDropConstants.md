---
title: OLEDropConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/OLEDropConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2bc21cc9-45e4-4fec-9b24-58493f99d174'
  PropagateID: '2bc21cc9-45e4-4fec-9b24-58493f99d174'
  ReservedCode1: 'e000665c-04aa-47c1-9f6e-1441fd853537'
  ReservedCode2: 'e000665c-04aa-47c1-9f6e-1441fd853537'
---

# OLEDropConstants

控件**OLEDropMode**属性的模式值，控制控件是否以及如何接受OLE放置操作。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEDropNone** | 0 | 控件不接受OLE放置。 |
| **vbOLEDropManual** | 1 | 控件引发**OLEDragOver**和**OLEDragDrop**事件；由开发者的代码决定如何处理。 |
| **vbOLEDropAutomatic** | 2 | 控件根据放置数据的格式自动处理放置。 |

::: info
仅在启用**FEATURE_OLEDRAGDROP**功能时可用。
:::