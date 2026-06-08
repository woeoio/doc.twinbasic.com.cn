---
title: "Count 属性"
parent: Collection
permalink: /tB/Modules/Collection/Count
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '416c7037-316b-4fca-901c-5ba1e0c55f1f'
  PropagateID: '416c7037-316b-4fca-901c-5ba1e0c55f1f'
  ReservedCode1: '7fc5be2e-6cc6-4556-bc8e-e7123475683d'
  ReservedCode2: '7fc5be2e-6cc6-4556-bc8e-e7123475683d'
---

# Count

返回一个 **Long**，包含 **Collection** 对象中的项数。只读。

语法：*object*.**Count**

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

### 示例

此示例使用 **Collection** 对象的 **Count** 属性来指定移除名为 `MyClasses` 的集合中所有元素所需的迭代次数。集合的数值索引默认从 1 开始。由于集合在移除元素后会自动重新索引，以下代码在每次迭代中移除第一个成员。

```vb
Dim Num As Long, MyClasses As Collection
Set MyClasses = New Collection
' ... assume MyClasses has been populated ...

For Num = 1 To MyClasses.Count   ' Default collection numeric indexes
    MyClasses.Remove 1           ' begin at 1.
Next
```

### 另请参阅

- [Add](/official/Reference/VBA/Collection/Add) 方法
- [Item](/official/Reference/VBA/Collection/Item) 方法
- [Remove](/official/Reference/VBA/Collection/Remove) 方法
- [Clear](/official/Reference/VBA/Collection/Clear) 方法