---
title: UnprotectedAccess
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/UnprotectedAccess
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'abf84bb9-ca5d-4452-862d-32f9136c622f'
  PropagateID: 'abf84bb9-ca5d-4452-862d-32f9136c622f'
  ReservedCode1: 'ba16f575-523a-42a6-914b-8bf31a5d508b'
  ReservedCode2: 'ba16f575-523a-42a6-914b-8bf31a5d508b'
---

# UnprotectedAccess

返回对绕过私有成员常规访问检查的值的引用。

语法：**UnprotectedAccess(** *Variable* **)** **As Object**

*Variable*
: *必需* 要包装的值。传递的值按**As Any**接收，因此调用适用于任何类型。

返回的对象暴露*Variable*的成员——包括**Private**和**Friend**成员——而不触发编译器通常应用的访问限制。适用于测试、序列化和其他需要合法突破封装边界的反射式场景。

::: warning
请谨慎使用此函数。绕过访问保护会使周围代码与目标类型的私有布局耦合，而根据定义，这不是稳定的API。
:::

### 另请参阅

- [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid)函数