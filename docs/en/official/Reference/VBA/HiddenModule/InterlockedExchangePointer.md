---
title: InterlockedExchangePointer
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/InterlockedExchangePointer
---
# InterlockedExchangePointer

Atomically exchanges a pointer-sized value at a memory location and returns the previous value.

Syntax: **InterlockedExchangePointer(** *Target* **,** *NewValue* **)** **As LongPtr**

*Target*
: *required* **LongPtr**. The pointer-sized variable to update, passed by reference.

*NewValue*
: *required* **LongPtr**. The new value to store at *Target*.

The store and the read of the prior value happen as a single atomic operation, observable by other threads as either fully-before or fully-after the call. Wraps the Win32 `InterlockedExchangePointer` intrinsic.

### See Also

- [InterlockedCompareExchangePointer](/en/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer) function
- [InterlockedCompareExchange32](/en/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32), [InterlockedCompareExchange64](/en/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64) functions
