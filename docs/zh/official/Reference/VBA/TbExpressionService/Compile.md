---
title: Compile
parent: TbExpressionService
permalink: /tB/Modules/TbExpressionService/Compile
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c2188c6d-8284-4a91-8861-5724074fe789'
  PropagateID: 'c2188c6d-8284-4a91-8861-5724074fe789'
  ReservedCode1: 'cb2a97d6-450e-44b6-b7ac-7046f9d31f18'
  ReservedCode2: 'cb2a97d6-450e-44b6-b7ac-7046f9d31f18'
---

# Compile

解析表达式字符串并返回编译后的 **ITbExpression**。

语法：*service*.**Compile(** *expression* **)**

*service*
: *必需* 计算结果为 **TbExpressionService** 对象的对象表达式。

*expression*
: *必需* 包含 twinBASIC 语法表达式的 **String**——例如，`"Sqr(2) + 1"` 或 `"UCase(FirstName) & "" "" & UCase(LastName)"`。

返回值是一个 [**ITbExpression**](./#itbexpression-interface)。对其调用 [**Evaluate**](/official/Reference/VBA/TbExpressionService/Evaluate) 会运行表达式并产生当前值；同一实例可以根据需要求值任意次数。

*expression* 中引用的符号——函数名、对象成员、属性——在调用时根据 *service* 注册的绑定器解析。在调用 **Compile** 之前必须至少注册一个绑定器；最常见的起点是 [**AddStdLibraryBinder**](/official/Reference/VBA/TbExpressionService/AddStdLibraryBinder)，它暴露标准运行时库。

编译是相对耗费资源的步骤；求值重用编译后的形式。当一段源文本将用于重复求值时——每行刷新的公式列、调试器中采样的监视表达式——编译一次并保留 **ITbExpression**。

如果 *expression* 格式错误，或引用了没有注册绑定器能解析的符号，**Compile** 将引发运行时错误。

### 示例

```vb
Dim Service As TbExpressionService = New TbExpressionService
Service.AddStdLibraryBinder()

Dim Square As ITbExpression = Service.Compile("Sqr(2)")
Debug.Print Square.Evaluate()    ' 1.4142135623731
Debug.Print Square.Evaluate()    ' Same compiled instance, evaluated again.
```

### 另请参阅

- [Evaluate](/official/Reference/VBA/TbExpressionService/Evaluate) 方法
- [AddStdLibraryBinder](/official/Reference/VBA/TbExpressionService/AddStdLibraryBinder) 方法
- [AddCustomBinderObject](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) 方法
- [AddCustomBinder](/official/Reference/VBA/TbExpressionService/AddCustomBinder) 方法