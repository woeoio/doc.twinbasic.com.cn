---
title: InterlockedCompareExchange64
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/InterlockedCompareExchange64
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ec0a52ab-fa83-498b-872b-2cd42e35d872'
  PropagateID: 'ec0a52ab-fa83-498b-872b-2cd42e35d872'
  ReservedCode1: '9ce3571b-c3f3-483f-8d32-54fa90f7197a'
  ReservedCode2: '9ce3571b-c3f3-483f-8d32-54fa90f7197a'
---

# InterlockedCompareExchange64

原子地将内存位置的64位值与比较值进行比较，如果匹配则替换为新值。无论哪种情况都返回原始值。

语法：**InterlockedCompareExchange64(** *Target* **,** *NewValue* **,** *OldValueCompare* **)** **As LongLong**

*Target*
: *必需* **LongLong**。要更新的64位变量，按引用传递。

*NewValue*
: *必需* **LongLong**。比较成功时写入*Target*的值。

*OldValueCompare*
: *必需* **LongLong**。*Target*的预期当前值。

比较和交换作为一个原子操作发生。返回值是调用开始时*Target*中的值——成功时等于*OldValueCompare*，失败时为其他值（此时*Target*保持不变）。封装了Win32的`InterlockedCompareExchange64`内联函数。

### 另请参阅

- [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32)函数
- [InterlockedCompareExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer)函数