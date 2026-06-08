---
title: ObjPtr
parent: Information Module
permalink: /tB/Modules/Information/ObjPtr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '904c6e01-8217-4dad-b61b-520286e27467'
  PropagateID: '904c6e01-8217-4dad-b61b-520286e27467'
  ReservedCode1: '32eb4e33-df79-4b88-b87b-02d1c2bf5843'
  ReservedCode2: '32eb4e33-df79-4b88-b87b-02d1c2bf5843'
---

# ObjPtr

返回对象的COM标识地址，作为**LongPtr**。

语法：**ObjPtr(** *Object* **)**

*Object*
: *必需* 要获取指针的对象引用。参数作为**IUnknown**传入。

返回值是对象**IUnknown**虚表的地址——COM运行时用于测试对象标识的相同值。两个**Object**变量引用同一实例当且仅当它们的**ObjPtr**值相等。

该指针仅在底层对象保持活动期间有效；获取**ObjPtr**不会持有引用。将结果传给需要原始对象地址的API函数，或存储用于标识检查，但不要假设在最后一个引用释放后它仍有意义。

### 示例

```vb
Dim a As Collection
Dim b As Collection
Set a = New Collection
Set b = a
Debug.Print ObjPtr(a) = ObjPtr(b)   ' True — same instance.

Set b = New Collection
Debug.Print ObjPtr(a) = ObjPtr(b)   ' False — different instances.
```

### 另请参阅

- [StrPtr](/official/Reference/VBA/Information/StrPtr)函数
- [VarPtr](/official/Reference/VBA/Information/VarPtr)函数