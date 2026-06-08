---
title: LinkModeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/LinkModeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '319bcde4-212b-4644-957b-93a6a16e406c'
  PropagateID: '319bcde4-212b-4644-957b-93a6a16e406c'
  ReservedCode1: '9ce491ad-f159-4b94-88b8-26ee7d34c0f8'
  ReservedCode2: '9ce491ad-f159-4b94-88b8-26ee7d34c0f8'
---

# LinkModeConstants

窗体和支持控件的**LinkMode**属性的DDE链接模式值。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbLinkNone** | 0 | 无活动DDE链接。 |
| **vbLinkAutomatic** | 1 | 源数据更改时控件自动更新。（与**vbLinkSource**值相同。） |
| **vbLinkSource** | 1 | 窗体作为DDE源：其控件更改时通知已链接的客户端。 |
| **vbLinkManual** | 2 | 仅在调用**LinkRequest**时更新。 |
| **vbLinkNotify** | 3 | 源数据更改时引发**LinkNotify**事件；控件仅按需更新。 |