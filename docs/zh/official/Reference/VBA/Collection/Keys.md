---
title: "Keys 方法"
parent: Collection
permalink: /tB/Modules/Collection/Keys
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6af33a4e-77df-4fd9-9aae-f7c9d5dd42fc'
  PropagateID: '6af33a4e-77df-4fd9-9aae-f7c9d5dd42fc'
  ReservedCode1: 'd1411842-20c3-4557-a2af-35bc427fda3e'
  ReservedCode2: 'd1411842-20c3-4557-a2af-35bc427fda3e'
---

# Keys

返回一个 **String** 数组，包含 **Collection** 对象中与项关联的所有键。

语法：*object*.**Keys()**

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

::: info

**Keys** 是 twinBASIC 扩展；经典 VBA 的 **Collection** 对象没有 **Keys** 方法。
:::

只有使用 **Key** 参数添加的项才会出现在返回的数组中。如果没有项具有键，则数组为空。

### 示例

```vb
Dim col As New Collection
col.Add "Athens",   Key:="a"
col.Add "Belgrade", Key:="b"
col.Add "Cairo",    Key:="c"

Dim k() As String
k = col.Keys

Dim i As Long
For i = LBound(k) To UBound(k)
    Debug.Print k(i), col(k(i))
Next i
```

### 另请参阅

- [Add](/official/Reference/VBA/Collection/Add) 方法
- [Exists](/official/Reference/VBA/Collection/Exists) 方法
- [Item](/official/Reference/VBA/Collection/Item) 方法
- [Items](/official/Reference/VBA/Collection/Items) 方法
- [Count](/official/Reference/VBA/Collection/Count) 属性