---
title: If
parent: Interaction Module
permalink: /tB/Modules/Interaction/If
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '07ab35e0-ccce-4314-945b-5df06c13e9be'
  PropagateID: '07ab35e0-ccce-4314-945b-5df06c13e9be'
  ReservedCode1: '049849f8-2436-4caf-80c4-5d0f488e48cb'
  ReservedCode2: '049849f8-2436-4caf-80c4-5d0f488e48cb'
---

# If

根据条件返回两个值之一，仅评估返回的分支。**If**是twinBASIC新增项；在VBA中，最接近的等价物是[**IIf**](/official/Reference/VBA/Interaction/IIf)，它始终评估两个分支。

语法：

- **If(** *expression* **,** *truepart* **,** *falsepart* **)**
- **If(** *expressiontruepart* **,** *falsepart* **)**

*expression*
: *必需* 为其真值评估的表达式。可以是任何可转换为**Boolean**的表达式。

*truepart*
: *必需* 当*expression*为**True**时返回的值或表达式。在三参数形式中，仅当*expression*为**True**时才评估。

*falsepart*
: *必需* 当*expression*为**False**，或*expressiontruepart*为**Null**、**Empty**或**Nothing**时返回的值或表达式。仅在实际需要时评估。

*expressiontruepart*
: *必需*（在两参数形式中）同时作为测试和"已设置"时返回值的表达式。函数返回*expressiontruepart*，除非它为**Null**、**Empty**或**Nothing**对象引用，在这种情况下返回*falsepart*。适用于空值合并——例如`If(MaybeNothing, FallbackValue)`。

三参数形式是内联条件：当*expression*为**True**时返回*truepart*，否则返回*falsepart*，仅评估所选分支。这使得诸如`If(Divisor <> 0, 100 / Divisor, "n/a")`的表达式即使*Divisor*为零也是安全的。

::: info
**If**在编译器中使用特殊的内部绑定，可能不像常规函数那样运行——特别是`Application.Run "If", ...`和其他反射调用者不会调用它。
:::

### 示例

```vb
Dim Divisor As Long
Divisor = 0

' Three-argument form — short-circuits, so the division never happens when Divisor = 0.
Dim Result As Variant
Result = If(Divisor <> 0, 100 / Divisor, "n/a")     ' "n/a"

' Two-argument form — null-coalescing.
Dim MaybeName As Variant
MaybeName = Null
Debug.Print If(MaybeName, "Anonymous")              ' "Anonymous"

MaybeName = "Alice"
Debug.Print If(MaybeName, "Anonymous")              ' "Alice"
```

### 另请参阅

- [IIf](/official/Reference/VBA/Interaction/IIf)函数
- [Choose](/official/Reference/VBA/Interaction/Choose)函数
- [Switch](/official/Reference/VBA/Interaction/Switch)函数