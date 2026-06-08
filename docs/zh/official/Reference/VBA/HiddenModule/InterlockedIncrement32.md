---
title: InterlockedIncrement32
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/InterlockedIncrement32
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0fa71364-1940-493f-9a2b-de6eaee7ac9e'
  PropagateID: '0fa71364-1940-493f-9a2b-de6eaee7ac9e'
  ReservedCode1: '5ac3da89-2a0d-4c12-bf55-d0d9cf62db90'
  ReservedCode2: '5ac3da89-2a0d-4c12-bf55-d0d9cf62db90'
---

# InterlockedIncrement32

原子地将32位值加一并返回新值。

语法：**InterlockedIncrement32(** *Target* **)** **As Long**

*Target*
: *必需* **Long**。要递增的32位变量，按引用传递。

读取、加法和写入作为一个原子操作发生。返回值是*Target*递增后的值。封装了Win32的`InterlockedIncrement`内联函数。

### 另请参阅

- [InterlockedDecrement32](/official/Reference/VBA/HiddenModule/InterlockedDecrement32)函数
- [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32)函数