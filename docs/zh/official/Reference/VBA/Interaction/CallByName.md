---
title: CallByName
parent: Interaction Module
permalink: /tB/Modules/Interaction/CallByName
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9cd4582e-f4f8-47f2-8a20-59426a6da15b'
  PropagateID: '9cd4582e-f4f8-47f2-8a20-59426a6da15b'
  ReservedCode1: '91b2de06-648c-4057-a8b4-99864829adb1'
  ReservedCode2: '91b2de06-648c-4057-a8b4-99864829adb1'
---

# CallByName

在运行时按名称查找并调用对象上的方法，或读取或写入属性。

语法：**CallByName(** *object* **,** *procname* **,** *calltype* [ **,** *args* ... ] **)**

*object*
: *必需* **Object**。要调用其成员的对象。

*procname*
: *必需* **String**。要在*object*上调用的方法或属性的名称。

*calltype*
: *必需* [**VbCallType**](/official/Reference/VBA/Constants/VbCallType)值，指示成员类型：`vbMethod`、`vbGet`、`vbLet`或`vbSet`。

*args*
: *可选* 传给方法、**Property Get**、**Property Let**或**Property Set**的参数。

返回值是一个**Variant**，包含调用返回的任何内容。对于不返回值的方法或属性赋值，结果为**Empty**。

### 示例

这三个调用使用**CallByName**按名称操作控件。第一个将其**MousePointer**属性设置为十字光标，第二个读回同一属性，第三个调用**Move**方法重新定位控件。

```vb
CallByName Text1, "MousePointer", vbLet, vbCrosshair
Result = CallByName(Text1, "MousePointer", vbGet)
CallByName Text1, "Move", vbMethod, 100, 100
```

### 另请参阅

- [CallByDispId](/official/Reference/VBA/Interaction/CallByDispId)函数
- [VbCallType](/official/Reference/VBA/Constants/VbCallType)枚举