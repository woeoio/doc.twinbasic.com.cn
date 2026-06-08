---
title: InterlockedExchangePointer
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/InterlockedExchangePointer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a77082d5-10d0-4737-b2c0-b510067fb8d5'
  PropagateID: 'a77082d5-10d0-4737-b2c0-b510067fb8d5'
  ReservedCode1: 'e5abaf93-acab-406d-a69d-105a9e6d529d'
  ReservedCode2: 'e5abaf93-acab-406d-a69d-105a9e6d529d'
---

# InterlockedExchangePointer

原子地交换内存位置的指针大小值并返回之前的值。

语法：**InterlockedExchangePointer(** *Target* **,** *NewValue* **)** **As LongPtr**

*Target*
: *必需* **LongPtr**。要更新的指针大小变量，按引用传递。

*NewValue*
: *必需* **LongPtr**。要存储在*Target*的新值。

存储和读取之前的值作为单个原子操作发生，其他线程可观测到该操作要么完全在调用之前，要么完全在调用之后。封装了Win32的`InterlockedExchangePointer`内联函数。

### 另请参阅

- [InterlockedCompareExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer)函数
- [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32)、[InterlockedCompareExchange64](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64)函数