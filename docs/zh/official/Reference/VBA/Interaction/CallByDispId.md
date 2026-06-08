---
title: CallByDispId
parent: Interaction Module
permalink: /tB/Modules/Interaction/CallByDispId
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8d399d2b-4a98-4601-9758-827d683fea2b'
  PropagateID: '8d399d2b-4a98-4601-9758-827d683fea2b'
  ReservedCode1: '34015412-08fc-4cb6-8e1c-531ee97004fe'
  ReservedCode2: '34015412-08fc-4cb6-8e1c-531ee97004fe'
---

# CallByDispId

在运行时通过原始IDispatch调度ID查找并调用对象上的方法，或读取或写入属性。**CallByDispId**是twinBASIC新增项；按名称变体[**CallByName**](/official/Reference/VBA/Interaction/CallByName)在VBA中也存在。

语法：**CallByDispId(** *object* **,** *dispid* **,** *calltype* [ **,** *args* ... ] **)**

*object*
: *必需* **Object**。要调用其成员的对象。

*dispid*
: *必需* **Long**。要调用的方法或属性的IDispatch调度ID(`DISPID`)。

*calltype*
: *必需* [**VbCallType**](/official/Reference/VBA/Constants/VbCallType)值，指示成员类型：`vbMethod`、`vbGet`、`vbLet`或`vbSet`。

*args*
: *可选* 传给方法、**Property Get**、**Property Let**或**Property Set**的参数。

返回值是一个**Variant**，包含调用返回的任何内容。对于不返回值的方法或属性赋值，结果为**Empty**。

**CallByDispId**跳过了[**CallByName**](/official/Reference/VBA/Interaction/CallByName)执行的名称查找，这在两种情况下很有用：当调度ID已知且应避免`GetIDsOfNames`往返开销时，以及当目标成员不按名称公开时（例如具有`DISPID_VALUE = 0`的默认成员、显式DISPID扩展或隐藏/受限成员）。

### 示例

本示例通过调度ID调用对象的默认成员——`DISPID_VALUE`，定义为0。

```vb
Const DISPID_VALUE As Long = 0

Dim Result As Variant
Result = CallByDispId(SomeObject, DISPID_VALUE, vbGet)
```

### 另请参阅

- [CallByName](/official/Reference/VBA/Interaction/CallByName)函数
- [VbCallType](/official/Reference/VBA/Constants/VbCallType)枚举