---
title: Stop (IGetMessageHook)
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/Stop
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6f2597bf-8c1f-4bcc-a633-541a9c99de3f'
  PropagateID: '6f2597bf-8c1f-4bcc-a633-541a9c99de3f'
  ReservedCode1: '813616f6-54dd-4e7f-ad27-615c08116b99'
  ReservedCode2: '813616f6-54dd-4e7f-ad27-615c08116b99'
---

# Stop

停用消息钩子上的所有已注册订阅，使匹配的消息不再转发到其回调。

语法：*hook*.**Stop**

*hook*
: *必需* 一个[**IGetMessageHook**](./#igetmessagehook-interface)实例。

**Stop**后订阅仍保持注册状态——再次调用[**Start**](/official/Reference/VBA/HiddenModule/Start)即可恢复传递而无需重新注册。对已停止的钩子调用**Stop**没有效果。

::: info
这是[**IGetMessageHook**](./#igetmessagehook-interface)接口的**Stop**方法。不相关的[**Stop**](/official/Reference/Core/Stop)语句是一个语言关键字，暂停执行并进入调试器。
:::

### 另请参阅

- [Start](/official/Reference/VBA/HiddenModule/Start)方法
- [RegisterMessage](/official/Reference/VBA/HiddenModule/RegisterMessage)方法
- [Stop](/official/Reference/Core/Stop)语句（语言关键字）