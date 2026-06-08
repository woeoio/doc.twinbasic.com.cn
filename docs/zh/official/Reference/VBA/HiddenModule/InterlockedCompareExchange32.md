---
title: InterlockedCompareExchange32
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/InterlockedCompareExchange32
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ec89d98e-dbf1-4688-87e0-4f0f04927447'
  PropagateID: 'ec89d98e-dbf1-4688-87e0-4f0f04927447'
  ReservedCode1: '73f4c0a3-309d-4397-90de-9c1c454b30a9'
  ReservedCode2: '73f4c0a3-309d-4397-90de-9c1c454b30a9'
---

# InterlockedCompareExchange32

原子地将内存位置的32位值与比较值进行比较，如果匹配则替换为新值。无论哪种情况都返回原始值。

语法：**InterlockedCompareExchange32(** *Target* **,** *NewValue* **,** *OldValueCompare* **)** **As Long**

*Target*
: *必需* **Long**。要更新的32位变量，按引用传递。

*NewValue*
: *必需* **Long**。比较成功时写入*Target*的值。

*OldValueCompare*
: *必需* **Long**。*Target*的预期当前值。

比较和交换作为一个原子操作发生。返回值是调用开始时*Target*中的值——成功时等于*OldValueCompare*，失败时为其他值（此时*Target*保持不变）。封装了Win32的`InterlockedCompareExchange`内联函数。

### 另请参阅

- [InterlockedCompareExchange64](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64)函数
- [InterlockedCompareExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer)函数
- [InterlockedIncrement32](/official/Reference/VBA/HiddenModule/InterlockedIncrement32)、[InterlockedDecrement32](/official/Reference/VBA/HiddenModule/InterlockedDecrement32)函数