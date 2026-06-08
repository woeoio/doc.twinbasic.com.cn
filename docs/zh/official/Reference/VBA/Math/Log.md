---
title: Log
parent: Math Module
permalink: /tB/Modules/Math/Log
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ff967d03-fff7-405a-adae-e3d69b806dc9'
  PropagateID: 'ff967d03-fff7-405a-adae-e3d69b806dc9'
  ReservedCode1: 'bdd153e1-36f2-459a-b0af-7e10570fa8af'
  ReservedCode2: 'bdd153e1-36f2-459a-b0af-7e10570fa8af'
---

# Log

返回一个 **Double**，指定数字的自然对数。

语法：**Log(** *number* **)**

*number*
: *必需* **Double** 或任何大于零的有效数值表达式。

自然对数是以 *e* 为底的对数。常量 *e* 约为 2.718282。

对于任意数字 *x* 的以 *n* 为底的对数，可以通过将 *x* 的自然对数除以 *n* 的自然对数来计算：

Log<sub>*n*</sub>(*x*) = **Log(** *x* **)** / **Log(** *n* **)**

以下示例演示了一个计算以 10 为底对数的自定义 **Function**：

```vb
Static Function Log10(X)
    Log10 = Log(X) / Log(10#)
End Function
```

### 示例

此示例使用 **Log** 函数返回数字的自然对数。

```vb
Dim MyAngle, MyLog
' Define angle in radians.
MyAngle = 1.3
' Calculate inverse hyperbolic sine.
MyLog = Log(MyAngle + Sqr(MyAngle * MyAngle + 1))
```

### 另请参阅

- [Exp](/official/Reference/VBA/Math/Exp) 函数
- [Sqr](/official/Reference/VBA/Math/Sqr) 函数