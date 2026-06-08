---
title: DefaultCursorTypeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/DefaultCursorTypeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '96e3922e-d814-4a15-bbc4-26c5c25e598f'
  PropagateID: '96e3922e-d814-4a15-bbc4-26c5c25e598f'
  ReservedCode1: '4f53b974-b8b8-4d61-9245-6078a0ff6050'
  ReservedCode2: '4f53b974-b8b8-4d61-9245-6078a0ff6050'
---

# DefaultCursorTypeConstants

Data控件连接的游标驱动值，控制由数据库客户端还是服务器管理记录集游标。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbUseDefaultCursor** | 0 | 使用数据源的默认游标驱动。 |
| **vbUseODBCCursor** | 1 | 使用客户端ODBC游标库。 |
| **vbUseServersideCursor** | 2 | 使用由数据库引擎管理的服务器端游标。 |