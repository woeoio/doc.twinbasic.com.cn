---
title: AddCustomBinder
parent: TbExpressionService
permalink: /tB/Modules/TbExpressionService/AddCustomBinder
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'db07eb8a-2116-48f0-9e17-0f433aedafa5'
  PropagateID: 'db07eb8a-2116-48f0-9e17-0f433aedafa5'
  ReservedCode1: '8c608a09-5f70-445a-b127-0affacd2f533'
  ReservedCode2: '8c608a09-5f70-445a-b127-0affacd2f533'
---

# AddCustomBinder

注册用户提供的绑定器，在编译时动态解析符号。

语法：*service*.**AddCustomBinder** *customBinder*

*service*
: *必需* 计算结果为 **TbExpressionService** 对象的对象表达式。

*customBinder*
: *必需* 实现 [**ITbCustomBinder**](./#itbcustombinder-interface) 的对象。

当 [**AddCustomBinderObject**](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) 不适用时使用 **AddCustomBinder**——例如，当表达式可用的名称不是静态已知的，当名称应解析为固定对象上的成员访问之外的其他内容，或当实现者需要在解析过程中检查调用点的参数数量时。

引擎在编译期间对每个已注册的自定义绑定器调用 [**Bind**](/official/Reference/VBA/TbExpressionService/Bind)，每个未解析符号调用一次。第一个返回非 **Nothing** 结果的绑定器胜出。一个服务可以注册多个自定义绑定器，按注册顺序查询。

### 示例

此示例将一个类实例同时注册为属性源（通过带 [**IsAppObject**](./#IsAppObject) 的 [**AddCustomBinderObject**](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject)）和自定义绑定器。表达式中的裸符号首先通过属性源作为 `Me` 的成员查找；未匹配的符号将传递给 `Me.Bind`，后者可以动态解析——例如，针对活动记录集。

```vb
' Inside a class that does: Implements ITbCustomBinder
Dim Service As TbExpressionService = New TbExpressionService
Service.AddStdLibraryBinder()
Service.AddCustomBinderObject "Report", Me, IsAppObject
Service.AddCustomBinder Me

Dim Expr As ITbExpression = Service.Compile("UCase(FieldName) & "" — "" & Title")
```

### 另请参阅

- [Bind](/official/Reference/VBA/TbExpressionService/Bind) 方法
- [Compile](/official/Reference/VBA/TbExpressionService/Compile) 方法
- [AddStdLibraryBinder](/official/Reference/VBA/TbExpressionService/AddStdLibraryBinder) 方法
- [AddCustomBinderObject](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) 方法