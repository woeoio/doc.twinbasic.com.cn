---
title: InterlockedDecrement32
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/InterlockedDecrement32
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd39e6986-3579-4c37-9db8-b7dac970b907'
  PropagateID: 'd39e6986-3579-4c37-9db8-b7dac970b907'
  ReservedCode1: 'b810d286-9be9-43c7-8d70-595d2b561bc8'
  ReservedCode2: 'b810d286-9be9-43c7-8d70-595d2b561bc8'
---

# InterlockedDecrement32

原子地将32位值减一并返回新值。

语法：**InterlockedDecrement32(** *Target* **)** **As Long**

*Target*
: *必需* **Long**。要递减的32位变量，按引用传递。

读取、减法和写入作为一个原子操作发生。返回值是*Target*递减后的值——与零比较是发现引用计数资源最后一次释放的典型方式。封装了Win32的`InterlockedDecrement`内联函数。

### 另请参阅

- [InterlockedIncrement32](/official/Reference/VBA/HiddenModule/InterlockedIncrement32)函数
- [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32)函数