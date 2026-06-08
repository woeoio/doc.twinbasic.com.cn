---
title: Bind
parent: TbExpressionService
permalink: /tB/Modules/TbExpressionService/Bind
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd732a014-b6ff-4035-ad5d-0f0385ee4ac8'
  PropagateID: 'd732a014-b6ff-4035-ad5d-0f0385ee4ac8'
  ReservedCode1: '88566010-dea9-4d2b-a5b8-35485867fa97'
  ReservedCode2: '88566010-dea9-4d2b-a5b8-35485867fa97'
---

# Bind

将表达式中引用的符号解析为产生其值的 [**ITbExpression**](./#itbexpression-interface)。

语法：*binder*.**Bind(** *symbol*, *argCount* **)**

*binder*
: *必需* 计算结果为 [**ITbCustomBinder**](./#itbcustombinder-interface) 对象的对象表达式。

*symbol*
: *必需* 包含正在查找的名称的 **String**——即正在编译的表达式源中出现的标识符。

*argCount*
: *必需* 给出调用点参数数量的 **Long**，如果 *symbol* 作为裸值引用（属性式访问）则为 `0`。

返回值是一个 [**ITbExpression**](./#itbexpression-interface)，其 [**Evaluate**](/official/Reference/VBA/TbExpressionService/Evaluate) 方法在调用时产生 *symbol* 的值，或返回 **Nothing** 以指示此绑定器无法解析 *symbol*，引擎应继续查询下一个绑定器。

**Bind** 在编译期间由引擎调用——对表达式源中遇到的每个未解析符号调用一次——而非在求值时。实现者应构造一个 **ITbExpression**，在稍后求值时产生该值，或返回 **Nothing** 以便另一个绑定器有机会处理。

*argCount* 参数使实现者可以区分属性式引用（`MyName`，*argCount* 为 `0`）和函数式调用（`MyName(1, 2, 3)`，*argCount* 为 `3`），并将它们绑定到不同的事物。

类通过包含 `Implements ITbCustomBinder` 然后将其自身传递给 [**AddCustomBinder**](/official/Reference/VBA/TbExpressionService/AddCustomBinder) 来将自身注册为绑定器。

### 示例

此 **ITbCustomBinder** 实现针对外部记录集的当前行查找零参数符号，将其他所有内容推迟到下一个绑定器。

```vb
Implements ITbCustomBinder

Public Recordset As Object

Protected Function Bind(ByVal Symbol As String, ByVal ArgCount As Long) As ITbExpression _
        Implements ITbCustomBinder.Bind

    If ArgCount = 0 AndAlso Recordset IsNot Nothing Then
        Dim Field As Object = Recordset.GetFieldBinder(Symbol)
        If TypeOf Field Is ITbExpression Then
            Return CType(Of ITbExpression)(Field)
        End If
    End If
    ' Returning Nothing lets the next binder try.
End Function
```

### 另请参阅

- [AddCustomBinder](/official/Reference/VBA/TbExpressionService/AddCustomBinder) 方法
- [Evaluate](/official/Reference/VBA/TbExpressionService/Evaluate) 方法
- [Compile](/official/Reference/VBA/TbExpressionService/Compile) 方法