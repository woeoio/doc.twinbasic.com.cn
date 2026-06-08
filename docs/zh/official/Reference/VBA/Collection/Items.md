---
title: "Items 方法"
parent: Collection
permalink: /tB/Modules/Collection/Items
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '91b9651a-942b-48fc-a96c-0ddce27fae27'
  PropagateID: '91b9651a-942b-48fc-a96c-0ddce27fae27'
  ReservedCode1: 'b6284746-b4d7-4c34-9520-4e4c19e998d7'
  ReservedCode2: 'b6284746-b4d7-4c34-9520-4e4c19e998d7'
---

# Items

返回一个 **Variant** 数组，包含 **Collection** 对象中的所有项。返回数组的下界为零。

语法：*object*.**Items()**

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

::: info

**Items** 是 twinBASIC 扩展；经典 VBA 的 **Collection** 对象没有 **Items** 方法。在 VBA 中要实现相同效果，需要使用 **For Each** 遍历集合并将每个项复制到数组中。
:::

如果集合为空，**Items** 返回一个空数组。

**Items** 方法在将集合内容传递给期望数组的过程，或在不持有集合引用的情况下进行迭代时非常有用。

### 示例

```vb
Dim col As New Collection
col.Add "Athens"
col.Add "Belgrade"
col.Add "Cairo"

Dim a As Variant
a = col.Items   ' Get all items as a Variant array.

Dim i As Long
For i = LBound(a) To UBound(a)
    Debug.Print a(i)
Next i
```

### 另请参阅

- [Item](/official/Reference/VBA/Collection/Item) 方法
- [Keys](/official/Reference/VBA/Collection/Keys) 方法
- [Count](/official/Reference/VBA/Collection/Count) 属性
- [Add](/official/Reference/VBA/Collection/Add) 方法