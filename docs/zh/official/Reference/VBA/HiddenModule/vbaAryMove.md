---
title: vbaAryMove
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaAryMove
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'dd1e3aba-d856-442f-8e94-21e66c10c8a4'
  PropagateID: 'dd1e3aba-d856-442f-8e94-21e66c10c8a4'
  ReservedCode1: '4dbad42b-e200-4d6f-bfc7-72d80d3aa547'
  ReservedCode2: '4dbad42b-e200-4d6f-bfc7-72d80d3aa547'
---

# vbaAryMove

以O(1)时间将一个数组变量的内容移动到另一个中，源数组变为空。

语法：**vbaAryMove** *Dest* **,** *Source*

*Dest*
: *必需* 接收*Source*内容的数组变量。先释放任何先前内容。

*Source*
: *必需* 将内容传输到*Dest*的数组变量。调用后，*Source*处于未分配状态。

**SAFEARRAY**描述符指针被移动而不复制其元素——等效于交换并释放而非逐元素复制。两个数组必须具有兼容的元素类型。

这是从函数返回新构建数组的基础构建块，无需为出站复制付出代价。

### 另请参阅

- [vbaRefVarAry](/official/Reference/VBA/HiddenModule/vbaRefVarAry)函数
- [vbaCopyBytes](/official/Reference/VBA/HiddenModule/vbaCopyBytes)函数