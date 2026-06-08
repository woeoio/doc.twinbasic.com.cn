---
title: IsArrayInitialized
parent: Information Module
permalink: /tB/Modules/Information/IsArrayInitialized
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ee3a208a-9f6f-4ae0-b98e-44b871ec8145'
  PropagateID: 'ee3a208a-9f6f-4ae0-b98e-44b871ec8145'
  ReservedCode1: 'ef7a112b-2c91-45eb-9887-2cd498929afd'
  ReservedCode2: 'ef7a112b-2c91-45eb-9887-2cd498929afd'
---

# IsArrayInitialized

返回一个**Boolean**，指示变量是否包含已分配维度的数组。

语法：**IsArrayInitialized(** *varname* **)**

*varname*
: *必需* 要测试的数组变量。

以空括号声明的动态数组(`Dim a() As Long`)在**ReDim**为其分配存储空间之前保持特殊的"未初始化"状态。**IsArrayInitialized**在该状态下返回**False**，在数组具有维度后返回**True**。对未初始化的数组调用[**LBound**](/official/Reference/VBA/Information/LBound)或[**UBound**](/official/Reference/VBA/Information/UBound)，或访问其任何元素，都会引发运行时错误——因此**IsArrayInitialized**是在读取之前进行安全测试的方式。

如果*varname*不是数组，**IsArrayInitialized**返回**False**。

### 示例

本示例在**ReDim**前后以及**Erase**释放存储空间后测试数组。

```vb
Dim a() As Long
Debug.Print IsArrayInitialized(a)     ' False — declared but unsized.
ReDim a(0 To 9)
Debug.Print IsArrayInitialized(a)     ' True — dimensions allocated.
Erase a
Debug.Print IsArrayInitialized(a)     ' False — Erase released the storage.
```

### 另请参阅

- [IsArray](/official/Reference/VBA/Information/IsArray)函数
- [IsObject](/official/Reference/VBA/Information/IsObject)函数
- [IsEmpty](/official/Reference/VBA/Information/IsEmpty)函数
- [LBound](/official/Reference/VBA/Information/LBound)、[UBound](/official/Reference/VBA/Information/UBound)函数