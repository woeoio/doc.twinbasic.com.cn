---
title: Is
parent: Operators
permalink: /tB/Core/Is
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b900865a-ecfe-400f-b5eb-36c611b437fe'
  PropagateID: 'b900865a-ecfe-400f-b5eb-36c611b437fe'
  ReservedCode1: 'a67bc849-92f0-472c-afff-9c16e4e748a0'
  ReservedCode2: 'a67bc849-92f0-472c-afff-9c16e4e748a0'
---

# Is

用于比较两个对象引用的同一性。

语法：
> *result* **=** *object1* **Is** *object2*

*result*
: 任意 **Boolean** 或数值变量。

*object1*, *object2*
: 任意对象引用。

如果 *object1* 和 *object2* 引用同一对象，*result* 为 **True**；否则 *result* 为 **False**。**Is** 不比较对象内部的值——它比较两个引用是否指向同一实例。

可以通过多种方式使两个变量引用同一对象。以下示例中，A 被设置为引用与 B 相同的对象：

```vb
Set A = B
```

以下示例使 A 和 B 引用与 C 相同的对象：

```vb
Set A = C
Set B = C
```

将引用与 **Nothing** 进行 **Is** 比较可判断引用是否未赋值：

```vb
If MyObject Is Nothing Then
    Debug.Print "MyObject has not been assigned."
End If
```

对于同一性测试的否定，twinBASIC还提供了 [**IsNot**](/official/Reference/Core/IsNot) 运算符：`If MyObject IsNot Nothing Then` 比 `If Not (MyObject Is Nothing) Then` 更自然。

::: info
**Is** 关键字在语言中还有两个不相关的用途：

- 在 **[If...Then...Else](/official/Reference/Core/If-Then-Else)** 条件中 **TypeOf** *objectname* **Is** *objecttype* 形式下，**Is** 引入运行时类型测试。
- 在 **[Select Case](/official/Reference/Core/Select-Case)** 子句中 **Is** *comparisonoperator* *expression* 形式下，**Is** 引入与 **Select Case** 测试表达式的比较。

在这两种构造中，周围语句提供了含义；那里 **Is** 不是本页描述的对象同一性运算符。
:::

### 示例

本示例使用 **Is** 运算符比较两个对象引用。

```vb
Dim MyObject, YourObject, ThisObject, OtherObject, ThatObject, MyCheck
Set YourObject = MyObject    ' Assign object references.
Set ThisObject = MyObject
Set ThatObject = OtherObject
MyCheck = YourObject Is ThisObject    ' Returns True.
MyCheck = ThatObject Is ThisObject    ' Returns False.
' Assume MyObject <> OtherObject.
MyCheck = MyObject Is ThatObject    ' Returns False.
```

### 另请参阅

- [**IsNot** 运算符](/official/Reference/Core/IsNot)
- [**Set** 语句](/official/Reference/Core/Set)
- [**If...Then...Else** 语句](/official/Reference/Core/If-Then-Else)
- [**Select Case** 语句](/official/Reference/Core/Select-Case)