---
title: ApplicationStartConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/ApplicationStartConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5cd175aa-3208-47d5-9a66-877d8c899c1c'
  PropagateID: '5cd175aa-3208-47d5-9a66-877d8c899c1c'
  ReservedCode1: '6541b66c-fa08-462b-a024-de34e644aaa1'
  ReservedCode2: '6541b66c-fa08-462b-a024-de34e644aaa1'
---

# ApplicationStartConstants

应用程序启动逻辑报告的模式值 --- 是作为独立程序启动还是通过Automation由另一应用程序调用。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbSModeStandalone** | 0 | 应用程序由用户直接启动。 |
| **vbSModeAutomation** | 1 | 应用程序通过Automation启动，响应另一应用程序的请求。 |