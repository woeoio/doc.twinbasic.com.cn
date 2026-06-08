---
title: OLEDragConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/OLEDragConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '93bdac2b-7b30-40fa-813d-8f9df0c58d2b'
  PropagateID: '93bdac2b-7b30-40fa-813d-8f9df0c58d2b'
  ReservedCode1: '08274b23-3463-4630-a2cf-5091e98efbea'
  ReservedCode2: '08274b23-3463-4630-a2cf-5091e98efbea'
---

# OLEDragConstants

控件**OLEDragMode**属性的模式值，控制OLE拖动操作自动开始还是仅按需开始。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEDragManual** | 0 | 仅在代码调用控件的**OLEDrag**方法时开始OLE拖动。 |
| **vbOLEDragAutomatic** | 1 | 用户开始拖动控件时自动开始OLE拖动。 |

::: info
仅在启用**FEATURE_OLEDRAGDROP**功能时可用。
:::