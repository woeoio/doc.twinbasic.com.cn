---
title: InterlockedCompareExchangePointer
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/InterlockedCompareExchangePointer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f08b3934-fc63-46e1-a454-7fc6e3c34d37'
  PropagateID: 'f08b3934-fc63-46e1-a454-7fc6e3c34d37'
  ReservedCode1: 'c30b0fae-7489-42cf-b178-86baa28a24cc'
  ReservedCode2: 'c30b0fae-7489-42cf-b178-86baa28a24cc'
---

# InterlockedCompareExchangePointer

原子地将内存位置的指针大小值与比较值进行比较，如果匹配则替换为新值。无论哪种情况都返回原始值。

语法：**InterlockedCompareExchangePointer(** *Target* **,** *NewValue* **,** *OldValueCompare* **)** **As LongPtr**

*Target*
: *必需* **LongPtr**。要更新的指针大小变量，按引用传递。

*NewValue*
: *必需* **LongPtr**。比较成功时写入*Target*的值。

*OldValueCompare*
: *必需* **LongPtr**。*Target*的预期当前值。

比较和交换作为一个原子操作发生。返回值是调用开始时*Target*中的值——成功时等于*OldValueCompare*，失败时为其他值（此时*Target*保持不变）。封装了Win32的`InterlockedCompareExchangePointer`内联函数。

### 示例

```vb
' Atomically claim ownership of a slot.
Dim Slot As LongPtr = 0
Dim NewObj As LongPtr = ObjPtr(New Collection)
If InterlockedCompareExchangePointer(Slot, NewObj, 0) = 0 Then
    ' Won the race — Slot now holds NewObj.
End If
```

### 另请参阅

- [InterlockedExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedExchangePointer)函数
- [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32)、[InterlockedCompareExchange64](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64)函数