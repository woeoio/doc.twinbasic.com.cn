---
title: IsNot
parent: Operators
permalink: /tB/Core/IsNot
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3a97a121-3bf3-4acb-a045-23ef7feab510'
  PropagateID: '3a97a121-3bf3-4acb-a045-23ef7feab510'
  ReservedCode1: '3acfc124-6f4b-4c31-9285-40f73773c27e'
  ReservedCode2: '3acfc124-6f4b-4c31-9285-40f73773c27e'
---

# IsNot

用于比较两个对象引用的非同一性。[**Is**](/official/Reference/Core/Is) 运算符的逻辑逆运算。

语法：
> *result* **=** *object1* **IsNot** *object2*

*result*
: 任意 **Boolean** 或数值变量。

*object1*, *object2*
: 任意对象引用。

如果 *object1* 和 *object2* 引用*不同*的对象（或其中一个为 **Nothing** 而另一个不是），*result* 为 **True**；如果它们引用同一对象，*result* 为 **False**。与 **Is** 一样，比较的是引用本身，不是对象内部的值。

::: info
**IsNot** 是twinBASIC扩展。经典VBA没有 **IsNot** 运算符；等价写法为 `Not (a Is b)`。
:::

最常见的用途是测试对象引用是否已赋值：

```vb
If MyObject IsNot Nothing Then
    ' Use MyObject.
End If
```

这比等价的 `If Not (MyObject Is Nothing) Then` 或更旧的 `If (MyObject Is Nothing) = False Then` 更自然。

### 示例

```vb
Dim A As Object, B As Object, C As Object
Set A = New Collection
Set B = A          ' B refers to the same object as A.
Set C = New Collection

Debug.Print A IsNot B    ' False - same object.
Debug.Print A IsNot C    ' True  - different objects.
Debug.Print A IsNot Nothing    ' True  - A is assigned.

Set A = Nothing
Debug.Print A IsNot Nothing    ' False - A is now unassigned.
```

### 另请参阅

- [**Is** 运算符](/official/Reference/Core/Is)
- [**Set** 语句](/official/Reference/Core/Set)