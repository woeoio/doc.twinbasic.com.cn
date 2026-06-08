---
title: RaiseEventByName
parent: Interaction Module
permalink: /tB/Modules/Interaction/RaiseEventByName
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1b3eeebe-e63b-4e58-acda-9176558b3ff9'
  PropagateID: '1b3eeebe-e63b-4e58-acda-9176558b3ff9'
  ReservedCode1: '114671a6-3c6c-41b1-98c5-72e75a902cd2'
  ReservedCode2: '114671a6-3c6c-41b1-98c5-72e75a902cd2'
---

# RaiseEventByName

按名称在对象上引发事件，事件参数作为**Variant**数组提供。**RaiseEventByName**是twinBASIC新增项；编译时的等价物是**RaiseEvent**语句，它要求在编写代码时已知事件名称。

语法：**RaiseEventByName(** *object* **,** *procname* [ **,** *argsarray* ] **)**

*object*
: *必需* **Object**。要在其上引发事件的对象。该对象必须声明具有匹配*procname*且元数与*argsarray*中项数匹配的公共事件。

*procname*
: *必需* **String**。要引发的事件的名称。

*argsarray*
: *可选* **Variant**。包含传给事件处理程序的参数的一维数组，按声明顺序。对于不带参数的事件，传入未初始化的**Variant**。

返回**Variant**。返回值是处理程序在最后一个`ByRef`事件参数中留下的值——仅当事件具有`ByRef`"输出"或"取消"参数时有意义。

::: info
此函数的可变长度参数变体——[**RaiseEventByName2**](/official/Reference/VBA/Interaction/RaiseEventByName2)——通过**ParamArray**直接接受参数，当事件签名固定时通常更易读。当参数列表本身是动态构建时，使用**RaiseEventByName**。
:::

如果*procname*不匹配*object*上声明的任何事件，或提供的元数与事件声明不匹配，则产生运行时错误。

### 示例

```vb
Dim Args(0) As Variant
Args(0) = "Some argument value"
RaiseEventByName MyControl, "ValueChanged", Args
```

### 另请参阅

- [RaiseEventByName2](/official/Reference/VBA/Interaction/RaiseEventByName2)函数
- [CallByName](/official/Reference/VBA/Interaction/CallByName)函数