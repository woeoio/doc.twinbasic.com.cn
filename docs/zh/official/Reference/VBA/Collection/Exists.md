---
title: "Exists 方法"
parent: Collection
permalink: /tB/Modules/Collection/Exists
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '21adc86e-14df-4930-ac03-f33e68b4e34f'
  PropagateID: '21adc86e-14df-4930-ac03-f33e68b4e34f'
  ReservedCode1: '4855650b-956b-468a-9b4c-343a0f72873d'
  ReservedCode2: '4855650b-956b-468a-9b4c-343a0f72873d'
---

# Exists

如果指定的键存在于 **Collection** 对象中，则返回 **True**；否则返回 **False**。

语法：*object*.**Exists(** *key* **)**

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

*key*
: *必需* 一个 **String** 值，标识要在集合中查找的项。

::: info

**Exists** 是 twinBASIC 扩展；经典 VBA 的 **Collection** 对象没有 **Exists** 方法。在 VBA 中要实现相同效果，需要在错误处理块中调用 [**Item**](/official/Reference/VBA/Collection/Item)。
:::

键比较由 [**KeyCompareMode**](/official/Reference/VBA/Collection/KeyCompareMode) 属性控制。

### 示例

```vb
Dim MyCollection As New Collection
MyCollection.Add "alpha", Key:="a"
MyCollection.Add "beta",  Key:="b"

If MyCollection.Exists("a") Then
    Debug.Print "Key 'a' is in the collection."
End If

If Not MyCollection.Exists("z") Then
    Debug.Print "Key 'z' is not in the collection."
End If
```

### 另请参阅

- [Add](/official/Reference/VBA/Collection/Add) 方法
- [Item](/official/Reference/VBA/Collection/Item) 方法
- [Keys](/official/Reference/VBA/Collection/Keys) 方法
- [KeyCompareMode](/official/Reference/VBA/Collection/KeyCompareMode) 属性