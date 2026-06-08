---
title: RaiseEventByName2
parent: Interaction Module
permalink: /tB/Modules/Interaction/RaiseEventByName2
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd3860310-671f-4e94-b5dd-ebb58a0ade56'
  PropagateID: 'd3860310-671f-4e94-b5dd-ebb58a0ade56'
  ReservedCode1: '4391073e-b67d-4a5d-a2ec-78b84cf9302f'
  ReservedCode2: '4391073e-b67d-4a5d-a2ec-78b84cf9302f'
---

# RaiseEventByName2

按名称在对象上引发事件，事件参数作为可变长度参数列表提供。**RaiseEventByName2**是twinBASIC新增项；编译时的等价物是**RaiseEvent**语句，它要求在编写代码时已知事件名称。

语法：**RaiseEventByName2(** *object* **,** *procname* [ **,** *arg1* **,** *arg2* **, ...** ] **)**

*object*
: *必需* **Object**。要在其上引发事件的对象。该对象必须声明具有匹配*procname*且元数与提供的参数数量匹配的公共事件。

*procname*
: *必需* **String**。要引发的事件的名称。

*arg1*, *arg2*, ...
: *可选* **ParamArray** of **Variant**。按声明顺序传给事件处理程序的参数。

返回**Variant**。返回值是处理程序在最后一个`ByRef`事件参数中留下的值——仅当事件具有`ByRef`"输出"或"取消"参数时有意义。

::: info
此函数的基于数组的变体——[**RaiseEventByName**](/official/Reference/VBA/Interaction/RaiseEventByName)——将参数列表作为单个打包的**Variant**数组接受，当参数列表本身是动态构建时更方便。当参数列表在调用点固定时，使用**RaiseEventByName2**。
:::

如果*procname*不匹配*object*上声明的任何事件，或提供的元数与事件声明不匹配，则产生运行时错误。

### 示例

```vb
RaiseEventByName2 MyControl, "ValueChanged", "First argument", 123, True
```

### 另请参阅

- [RaiseEventByName](/official/Reference/VBA/Interaction/RaiseEventByName)函数
- [CallByName](/official/Reference/VBA/Interaction/CallByName)函数