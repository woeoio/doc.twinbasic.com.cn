---
title: OLEDropEffectConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/OLEDropEffectConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3525a7ae-1421-490e-97d9-d93ec3f81030'
  PropagateID: '3525a7ae-1421-490e-97d9-d93ec3f81030'
  ReservedCode1: '9b869893-f8a7-47d9-a9a9-697b9139050a'
  ReservedCode2: '9b869893-f8a7-47d9-a9a9-697b9139050a'
---

# OLEDropEffectConstants

OLE拖放事件*Effect*参数的位标志，控制源和目标希望放置执行的操作。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbDropEffectNone** | 0 | 不允许放置。 |
| **vbDropEffectCopy** | 1 | 数据应复制到目标。 |
| **vbDropEffectMove** | 2 | 数据应移动到目标 --- 放置成功后源端将其删除。 |
| **vbDropEffectLink** | 4 | 应在目标创建数据的链接。*(twinBASIC新增)* |
| **vbDropEffectScroll** | -2147483648 | 目标正在滚动，因为光标靠近其边缘。 |

::: info
仅在启用**FEATURE_OLEDRAGDROP**功能时可用。
:::