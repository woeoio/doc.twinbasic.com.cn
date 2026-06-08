---
title: Exact
parent: "Assert 包"
permalink: /tB/Packages/Assert/Exact
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4665bcaf-4986-4bfe-b1b1-7c7a6c0bfafd'
  PropagateID: '4665bcaf-4986-4bfe-b1b1-7c7a6c0bfafd'
  ReservedCode1: '67f56b07-c1e2-4d3a-8f63-8a7b0da26381'
  ReservedCode2: '67f56b07-c1e2-4d3a-8f63-8a7b0da26381'
---

# Exact 模块

[**Assert**](/official/Reference/Assert/) 包的 **Exact** 模块提供具有最严格比较语义的断言。字符串比较区分大小写；数值必须在数据类型和值上都匹配（因此 `5` 不等于 `5.0`）；`vbNullString` 与 `""` 不同；`Empty` 与 `0`、`False`、`""` 和 `vbNullString` 不同；不评估对象默认成员。**Exact** 会标记被测试值中任何形式的隐式转换或强制转换。


## 比较语义

此模块中的四个相等性断言---[**AreEqual**](#areequal)、[**AreNotEqual**](#arenotequal)、[**SequenceEquals**](#sequenceequals) 和 [**NotSequenceEquals**](#notsequenceequals)---应用以下规则。其余断言不受影响。

- *字符串*比较区分大小写（无论项目的 `Option Compare` 设置如何）。
- 被比较值的数据类型必须完全匹配。`Long` 和 `Double`、`Long` 和 `Currency`、`Integer` 和 `Long` 都被视为不同。
- `vbNullString` 和零长度 **String**（`""`）被视为不同。
- `Empty` 被视为与 `0`、`False`、`""` 和 `vbNullString` 不同。
- 对象引用按标识（**Is** 运算符）比较；不检索默认成员值。
- `Null` 永远不等于任何值，甚至不等于自身---使用 [**IsNull**](#isnull) / [**IsNotNull**](#isnotnull) 来测试它。

```vb
' 在 Exact 下以下全部失败：
Exact.AreEqual 5, 5.0           ' Long 对 Double — 数据类型不同
Exact.AreEqual vbNullString, "" ' 两种空字符串形式是不同的
Exact.AreEqual Empty, 0         ' Empty 与 0 不同
Exact.AreEqual "Hello", "hello" ' 区分大小写
```

## 诊断结果

### Succeed

记录测试已到达此点而未失败。

语法：**Exact.Succeed**

返回时没有任何断言失败的测试过程隐式报告为通过，因此显式调用 **Succeed** 很少有必要。偶尔用于结果看起来可能模糊的分支---例如，应该到达末尾的循环体。

### Fail

无条件记录测试失败。

语法：**Exact.Fail** [ *Message* ]

*Message*
: *可选* 一个 **String**，描述失败，与调用的源位置一起记录。

**Fail** 标记在通过测试中不应可达的代码路径---最常见的是在预期引发错误的调用之后，在调用正常返回时运行的分支中。

```vb
On Error Resume Next
target.SomethingThatShouldRaise
If Err.Number = 0 Then Exact.Fail "expected an error, got success"
```

### Inconclusive

将测试记录为不确定---既非通过也非失败。

语法：**Exact.Inconclusive** [ *Message* ]

*Message*
: *可选* 一个 **String**，描述结果不确定的原因。

**Inconclusive** 记录测试的前提条件无法建立，后续的断言逻辑将没有意义。常见情况是设置步骤未能找到所需的外部资源---测试数据库、已配置的网络端点---此时测试本身既非凭自身优点通过也非失败。

## 相等性

### AreEqual

断言 *Actual* 等于 *Expected*。

语法：**Exact.AreEqual** *Expected*, *Actual* [, *Message* ]

*Expected*
: *必需* 一个 **Variant**，持有预期值。

*Actual*
: *必需* 一个 **Variant**，持有被测代码产生的值。

*Message*
: *可选* 一个 **String**，在比较失败时包含在失败记录中。

比较遵循此模块的[比较语义](#comparison-semantics)---*Expected* 和 *Actual* 必须具有相同的数据类型，字符串区分大小写比较，`Empty`、`vbNullString` 和 `""` 彼此不同。如果任一操作数为 **Null**，断言失败---`Null` 永远不等于任何值；使用 [**IsNull**](#isnull) 显式测试 **Null**。

### AreNotEqual

断言 *Actual* 不等于 *Expected*。

语法：**Exact.AreNotEqual** *Expected*, *Actual* [, *Message* ]

*Expected*
: *必需* 一个 **Variant**，持有 *Actual* 必须与之不同的值。

*Actual*
: *必需* 一个 **Variant**，持有被测代码产生的值。

*Message*
: *可选* 一个 **String**，在值相等时包含在失败记录中。

比较使用此模块的[比较语义](#comparison-semantics)。如果任一操作数为 **Null**，断言通过---`Null` 永远不等于任何值。

### AreSame

断言 *Actual* 和 *Expected* 引用*同一*对象---等同于 `Expected Is Actual`。

语法：**Exact.AreSame** *Expected*, *Actual* [, *Message* ]

*Expected*
: *必需* 一个 **Variant**，持有预期的对象引用。

*Actual*
: *必需* 一个 **Variant**，持有被测代码产生的引用。

*Message*
: *可选* 一个 **String**，在引用不同时包含在失败记录中。

引用标识与模块的其他比较规则无关---**AreSame** 始终使用 **Is** 运算符，从不使用默认成员相等性。要比较值而非引用，请使用 [**AreEqual**](#areequal)。

### AreNotSame

断言 *Actual* 和 *Expected* 引用*不同*的对象---等同于 `Expected IsNot Actual`。

语法：**Exact.AreNotSame** *Expected*, *Actual* [, *Message* ]

*Expected*
: *必需* 一个 **Variant**，持有 *Actual* 必须与之不同的引用。

*Actual*
: *必需* 一个 **Variant**，持有被测代码产生的引用。

*Message*
: *可选* 一个 **String**，在引用相同时包含在失败记录中。

## 布尔

### IsTrue

断言 *Condition* 求值为 **True**。

语法：**Exact.IsTrue** *Condition* [, *Message* ]

*Condition*
: *必需* 一个 **Variant**，持有要测试的条件。值被解释为 **Boolean**---零为 **False**，任何非零值为 **True**。

*Message*
: *可选* 一个 **String**，在条件为 **False** 时包含在失败记录中。

如果 *Condition* 为 **Null**，断言失败。

### IsFalse

断言 *Condition* 求值为 **False**。

语法：**Exact.IsFalse** *Condition* [, *Message* ]

*Condition*
: *必需* 一个 **Variant**，持有要测试的条件。零为 **False**，任何非零值为 **True**。

*Message*
: *可选* 一个 **String**，在条件为 **True** 时包含在失败记录中。

如果 *Condition* 为 **Null**，断言失败---`Null` 既非 **True** 也非 **False**。

## 引用和值状态

### IsNothing

断言 *Value* 是 **Nothing** 对象引用。

语法：**Exact.IsNothing** *Value* [, *Message* ]

*Value*
: *必需* 一个 **Variant**，持有要测试的对象引用。

*Message*
: *可选* 一个 **String**，在 *Value* 引用对象时包含在失败记录中。

这是对象引用测试，等同于 `Value Is Nothing`。要改为检查 **Variant** 的 **Null** 值，请使用 [**IsNull**](#isnull)。

### IsNotNothing

断言 *Value* 引用对象---即*不是* **Nothing** 引用。

语法：**Exact.IsNotNothing** *Value* [, *Message* ]

*Value*
: *必需* 一个 **Variant**，持有要测试的对象引用。

*Message*
: *可选* 一个 **String**，在 *Value* 为 **Nothing** 时包含在失败记录中。

### IsNull

断言 *Value* 是 **Variant** 的 **Null** 值。

语法：**Exact.IsNull** *Value* [, *Message* ]

*Value*
: *必需* 一个 **Variant**，持有要测试的值。

*Message*
: *可选* 一个 **String**，在 *Value* 不是 **Null** 时包含在失败记录中。

等同于检查 [**IsNull**](/official/Reference/VBA/Information/IsNull)`(Value) = True`。要改为检查 **Nothing** 对象引用，请使用 [**IsNothing**](#isnothing)。

### IsNotNull

断言 *Value* 不是 **Variant** 的 **Null** 值。

语法：**Exact.IsNotNull** *Value* [, *Message* ]

*Value*
: *必需* 一个 **Variant**，持有要测试的值。

*Message*
: *可选* 一个 **String**，在 *Value* 为 **Null** 时包含在失败记录中。

## 序列

### SequenceEquals

断言 *Actual* 和 *Expected* 包含相同数量的元素，顺序相同，且每对元素在此模块的[比较语义](#comparison-semantics)下相等。

语法：**Exact.SequenceEquals** *Expected*, *Actual* [, *FailMessage* ]

*Expected*
: *必需* 一个 **Variant**，持有数组、**Collection** 或其他可枚举值。

*Actual*
: *必需* 一个 **Variant**，持有被测代码产生的序列。

*FailMessage*
: *可选* 一个 **String**，在序列不同时包含在失败记录中。

两个参数都必须支持通过 **For Each** 迭代。断言在第一对不匹配时、长度不同时或一方为空而另一方不为空时失败。元素比较使用与 [**AreEqual**](#areequal) 相同的逐对规则，因此在 **Exact** 下元素还必须在数据类型上匹配。

### NotSequenceEquals

断言 *Actual* 和 *Expected* 不同---它们包含不同数量的元素，或至少有一对对应元素在此模块的[比较语义](#comparison-semantics)下不同。

语法：**Exact.NotSequenceEquals** *Expected*, *Actual* [, *FailMessage* ]

*Expected*
: *必需* 一个 **Variant**，持有数组、**Collection** 或其他可枚举值。

*Actual*
: *必需* 一个 **Variant**，持有被测代码产生的序列。

*FailMessage*
: *可选* 一个 **String**，在序列相等时包含在失败记录中。

## 另见

- [Strict](/official/Reference/Assert/Strict) -- 区分大小写字符串，但其他方面与 twinBASIC 代码中的直接比较行为一致
- [Permissive](/official/Reference/Assert/Permissive) -- 不区分大小写字符串；其他方面与 twinBASIC 代码中的直接比较行为一致
- [Assert 包](/official/Reference/Assert/) -- 所有三个模块的概述和比较语义表