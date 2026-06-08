---
title: "On...GoSub"
parent: Statements
permalink: /tB/Core/On-GoSub
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b2632e1f-8b78-46ec-be84-37ec23f9ef47'
  PropagateID: 'b2632e1f-8b78-46ec-be84-37ec23f9ef47'
  ReservedCode1: '00f1842f-3526-4435-945d-bd49ef47718a'
  ReservedCode2: '00f1842f-3526-4435-945d-bd49ef47718a'
---

# On...GoSub

根据表达式的值，分支到几个指定子例行程序行之一。

**On...GoSub**语句与**On...GoTo**一起记录在[**On...GoTo, On...GoSub**](/official/Reference/Core/On-GoTo)页面上。

语法：
> **On** *expression* **GoSub** *destinationlist*

当*expression*的计算结果为*n*时，控制转移到*destinationlist*中的第*n*个标签，就像对该标签执行了[**GoSub**](/official/Reference/Core/GoSub-Return)一样。被调用子例程中后续的[**Return**](/official/Reference/Core/Return)在**On...GoSub**之后的语句处恢复执行。有关超范围值的处理、*expression*的0-255约束以及详细示例，请参见[**On...GoTo, On...GoSub**](/official/Reference/Core/On-GoTo)。

### 另请参阅

- [**On...GoTo** 语句](/official/Reference/Core/On-GoTo)
- [**GoSub...Return** 语句](/official/Reference/Core/GoSub-Return)
- [**Select Case** 语句](/official/Reference/Core/Select-Case)