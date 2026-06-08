---
title: Evaluate
parent: TbExpressionService
permalink: /tB/Modules/TbExpressionService/Evaluate
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b8446aa8-a153-480c-8d04-d5b9c847934f'
  PropagateID: 'b8446aa8-a153-480c-8d04-d5b9c847934f'
  ReservedCode1: '2f951eba-7297-4198-b524-218e75c50aac'
  ReservedCode2: '2f951eba-7297-4198-b524-218e75c50aac'
---

# Evaluate

运行编译表达式并返回其当前值。

语法：*expression*.**Evaluate()**

*expression*
: *必需* 计算结果为 [**ITbExpression**](./#itbexpression-interface) 的对象表达式，通常为 [**Compile**](/official/Reference/VBA/TbExpressionService/Compile) 返回的值。

返回值为 **Variant**，包含表达式的结果。其子类型反映值的自然类型——例如，数值表达式为 **Double**，文本生成为 **String**，比较为 **Boolean**。

每次调用都会根据其绑定的当前状态重新运行表达式。如果绑定对象暴露的属性值在调用之间可能变化——宿主应用程序状态、记录集的当前行、可配置参数——对同一编译表达式求值两次可能合法地返回不同的值。

表达式内部引发的运行时错误——除零、类型不匹配、对绑定对象的无效调用——像任何其他运行时错误一样从 **Evaluate** 传播出来。

### 示例

此示例编译一个通过 [**AddCustomBinderObject**](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) 引用宿主对象属性的表达式，然后在属性具有不同值时求值两次。

```vb
Dim Service As TbExpressionService = New TbExpressionService
Service.AddStdLibraryBinder()
Service.AddCustomBinderObject "State", Me, IsAppObject

Dim Expr As ITbExpression = Service.Compile("Counter * 2")

Me.Counter = 1 : Debug.Print Expr.Evaluate()    ' 2
Me.Counter = 5 : Debug.Print Expr.Evaluate()    ' 10
```

### 另请参阅

- [Compile](/official/Reference/VBA/TbExpressionService/Compile) 方法
- [Bind](/official/Reference/VBA/TbExpressionService/Bind) 方法