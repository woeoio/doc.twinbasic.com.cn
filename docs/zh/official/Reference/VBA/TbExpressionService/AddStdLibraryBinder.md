---
title: AddStdLibraryBinder
parent: TbExpressionService
permalink: /tB/Modules/TbExpressionService/AddStdLibraryBinder
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3772a3c6-d5f7-49d7-b497-48edc1aedd47'
  PropagateID: '3772a3c6-d5f7-49d7-b497-48edc1aedd47'
  ReservedCode1: '839d44bc-419f-4201-919c-27cfda27b8b6'
  ReservedCode2: '839d44bc-419f-4201-919c-27cfda27b8b6'
---

# AddStdLibraryBinder

注册标准库绑定器，使编译表达式可以调用常用运行时函数。

语法：*service*.**AddStdLibraryBinder**

*service*
: *必需* 计算结果为 **TbExpressionService** 对象的对象表达式。

调用 **AddStdLibraryBinder** 后，*service* 编译的表达式可以引用标准运行时库中的任何过程或属性——数学函数如 [**Sqr**](/official/Reference/VBA/Math/Sqr)、[**Sin**](/official/Reference/VBA/Math/Sin) 和 [**Round**](/official/Reference/VBA/Math/Round)；字符串函数如 [**Len**](/official/Reference/VBA/Strings/Len)、[**Mid**](/official/Reference/VBA/Strings/Mid) 和 [**Format**](/official/Reference/VBA/Strings/Format)；转换函数如 [**CStr**](/official/Reference/VBA/Conversion/CStr) 和 [**CInt**](/official/Reference/VBA/Conversion/CInt) 等等。

新的 **TbExpressionService** 没有注册任何绑定器。没有至少一个绑定器，编译表达式只能执行字面量算术——任何对命名符号的引用都会因运行时错误导致编译失败。

### 示例

```vb
Dim Service As TbExpressionService = New TbExpressionService
Service.AddStdLibraryBinder()

Debug.Print Service.Compile("Sqr(2) + Sqr(3)").Evaluate()    ' 3.14...
Debug.Print Service.Compile("UCase(""hello"")").Evaluate()   ' HELLO
```

### 另请参阅

- [Compile](/official/Reference/VBA/TbExpressionService/Compile) 方法
- [AddCustomBinderObject](/official/Reference/VBA/TbExpressionService/AddCustomBinderObject) 方法
- [AddCustomBinder](/official/Reference/VBA/TbExpressionService/AddCustomBinder) 方法