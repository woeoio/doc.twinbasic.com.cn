---
title: AddCustomBinderObject
parent: TbExpressionService
permalink: /tB/Modules/TbExpressionService/AddCustomBinderObject
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '99e084e3-f783-4925-9eae-53493f15354a'
  PropagateID: '99e084e3-f783-4925-9eae-53493f15354a'
  ReservedCode1: '5f088ead-1592-48d8-bc3b-d2b6c14259c0'
  ReservedCode2: '5f088ead-1592-48d8-bc3b-d2b6c14259c0'
---

# AddCustomBinderObject

暴露对象的公共成员，使编译表达式可以访问它们。

语法：*service*.**AddCustomBinderObject** *name*, *object* [ **,** *flags* ]

*service*
: *必需* 计算结果为 **TbExpressionService** 对象的对象表达式。

*name*
: *必需* 一个 **String**，给出 *object* 的成员对 *service* 编译的表达式可见时的限定名。

*object*
: *必需* 要暴露公共成员的对象。

*flags*
: *可选* [**ExpressionEngineBinderFlags**](./#expressionenginebinderflags) 值的组合。默认为 `0`，此时对象的成员仅当由 *name* 限定时才可访问（例如 `Report.Title`）。传入 [**IsAppObject**](./#IsAppObject) 可以使成员无需限定即可访问，类似于 Office 宿主的 **Application** 成员。

成员解析通过标准 COM/IDispatch 协议按名称执行——任何可从对象外部调用的属性或方法都可从表达式中调用。只要可能对表达式求值，对象就必须保持活动状态。

多个对象可以绑定到同一服务，每个对象有自己的 *name*。按添加顺序查询。

### 示例

此示例暴露宿主的报表对象，使表达式可以通过限定名或裸名引用其属性。

```vb
Dim Service As TbExpressionService = New TbExpressionService
Service.AddStdLibraryBinder()
Service.AddCustomBinderObject "Report", Me, IsAppObject

Debug.Print Service.Compile("Report.Title").Evaluate()    ' "Sales Q4"
Debug.Print Service.Compile("Title").Evaluate()           ' "Sales Q4" — IsAppObject in effect
```

### 另请参阅

- [Compile](/official/Reference/VBA/TbExpressionService/Compile) 方法
- [AddStdLibraryBinder](/official/Reference/VBA/TbExpressionService/AddStdLibraryBinder) 方法
- [AddCustomBinder](/official/Reference/VBA/TbExpressionService/AddCustomBinder) 方法