---
title: "Clear 方法"
parent: Collection
permalink: /tB/Modules/Collection/Clear
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '84d045bb-b704-41d1-a7f2-3d15803f3e31'
  PropagateID: '84d045bb-b704-41d1-a7f2-3d15803f3e31'
  ReservedCode1: 'e7a028ed-21bb-4898-9cca-3f7e5a67925e'
  ReservedCode2: 'e7a028ed-21bb-4898-9cca-3f7e5a67925e'
---

# Clear

移除 **Collection** 对象中的所有元素。**Clear** 返回后，集合的 [**Count**](/official/Reference/VBA/Collection/Count) 为零。

语法：*object*.**Clear**

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

::: info

**Clear** 是 twinBASIC 扩展；经典 VBA 的 **Collection** 对象没有 **Clear** 方法。在 VBA 中要实现相同效果，需要反复移除第一项，直到集合为空。
:::

**Clear** 将 **Collection** 重置为初始的空状态——当需要重用对象而不创建新实例时非常有用。

### 示例

```vb
Dim MyClasses As New Collection
MyClasses.Add "first"
MyClasses.Add "second"
MyClasses.Add "third"
Debug.Print MyClasses.Count   ' Prints 3.

MyClasses.Clear
Debug.Print MyClasses.Count   ' Prints 0.
```

### 另请参阅

- [Count](/official/Reference/VBA/Collection/Count) 属性
- [Remove](/official/Reference/VBA/Collection/Remove) 方法