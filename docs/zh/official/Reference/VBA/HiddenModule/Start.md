---
title: Start
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/Start
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1e01cb29-f3bd-4ebc-8210-398a5d86a737'
  PropagateID: '1e01cb29-f3bd-4ebc-8210-398a5d86a737'
  ReservedCode1: '20a3ff41-9002-4e92-8eb2-a75700d3c438'
  ReservedCode2: '20a3ff41-9002-4e92-8eb2-a75700d3c438'
---

# Start

激活消息钩子上的所有已注册订阅，使匹配的消息开始转发到其回调。

语法：*hook*.**Start**

*hook*
: *必需* 一个已使用[**RegisterMessage**](/official/Reference/VBA/HiddenModule/RegisterMessage)设置订阅的[**IGetMessageHook**](./#igetmessagehook-interface)实例。

对已启动的钩子调用**Start**没有效果。对没有订阅的钩子调用是无害的但不会产生任何效果——先注册，再启动。

### 另请参阅

- [RegisterMessage](/official/Reference/VBA/HiddenModule/RegisterMessage)方法
- [Stop](/official/Reference/VBA/HiddenModule/Stop)方法
- [IGetMessageHook接口](./#igetmessagehook-interface)