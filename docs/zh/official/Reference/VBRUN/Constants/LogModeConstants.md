---
title: LogModeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/LogModeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fcdff007-1851-42f4-a290-120bd80f3401'
  PropagateID: 'fcdff007-1851-42f4-a290-120bd80f3401'
  ReservedCode1: '47045524-800d-44e3-8c8a-e2c75c506a1b'
  ReservedCode2: '47045524-800d-44e3-8c8a-e2c75c506a1b'
---

# LogModeConstants

应用程序日志的目标和行为标志，与**App.StartLogging**一起使用。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbLogAuto** | 0 | 根据平台自动选择目标。 |
| **vbLogOff** | 1 | 禁用日志。 |
| **vbLogToFile** | 2 | 记录到文件。 |
| **vbLogToNT** | 3 | 记录到Windows事件日志。 |
| **vbLogOverwrite** | 16 | 记录到文件时，先截断而非追加。 |
| **vbLogThreadID** | 32 | 在每条日志项中包含线程ID。 |