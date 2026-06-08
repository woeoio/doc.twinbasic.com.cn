---
title: Eval
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/Eval
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2674000f-3506-48d4-a0df-cf4cd38589a1'
  PropagateID: '2674000f-3506-48d4-a0df-cf4cd38589a1'
  ReservedCode1: '708fd20f-2d75-4621-a4a3-89af00e5bb3a'
  ReservedCode2: '708fd20f-2d75-4621-a4a3-89af00e5bb3a'
---

# Eval

编译并计算以字符串形式提供的twinBASIC表达式，将结果作为**Variant**返回。

语法：**Eval(** *Expression* **)** **As Variant**

*Expression*
: *必需* **String**。一个可解析为值的twinBASIC表达式——例如`"2 + 2"`、`"Sqr(2)"`或`"UCase(""hello"")"`。

每次调用都会构建一个新的[**TbExpressionService**](/official/Reference/VBA/TbExpressionService/)，并注册标准库绑定器，使标准运行时函数（[**Sin**](/official/Reference/VBA/Math/Sin)、[**Sqr**](/official/Reference/VBA/Math/Sqr)、[**Len**](/official/Reference/VBA/Strings/Len)、[**CStr**](/official/Reference/VBA/Conversion/CStr)等）可见。表达式随后被编译和计算一次，服务即被丢弃。

对于重复计算同一源代码，或需要访问应用程序对象的表达式，请显式构建服务并重用已编译的[**ITbExpression**](/official/Reference/VBA/TbExpressionService/#itbexpression-interface)。

### 示例

```vb
Debug.Print Eval("2 * (Sqr(2) + 1)")    ' 4.82842712474619
Debug.Print Eval("UCase(""hello"")")     ' "HELLO"
```

### 另请参阅

- [ExpressionService模块](/official/Reference/VBA/TbExpressionService/)