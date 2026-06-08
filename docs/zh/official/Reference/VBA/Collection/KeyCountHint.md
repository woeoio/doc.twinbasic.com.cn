---
title: KeyCountHint
parent: Collection
permalink: /tB/Modules/Collection/KeyCountHint
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '938caa29-06b7-40cc-8be4-2ba836f94a7f'
  PropagateID: '938caa29-06b7-40cc-8be4-2ba836f94a7f'
  ReservedCode1: '9e31d2dd-2058-4a8b-a7a0-1efed229f068'
  ReservedCode2: '9e31d2dd-2058-4a8b-a7a0-1efed229f068'
---

# KeyCountHint

返回或设置向 **Collection** 对象提示预期持有的键控项数量，使底层哈希表可以相应地调整大小。可读写。

语法：
- *object*.**KeyCountHint**
- *object*.**KeyCountHint** **=** *hint*

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

*hint*
: 一个 **Long** 值，给出预计将添加到集合中的键控项数量。

::: info

**KeyCountHint** 是 twinBASIC 扩展，在经典 VBA 的 **Collection** 对象中没有等效项。
:::

设置 **KeyCountHint** 是可选的。在向集合添加任何项之前设置最为有效：该提示用于预分配哈希表，避免在插入项时反复调整大小。如果实际的键控项数量超过提示值，集合仍能正常工作，但哈希表增长时性能可能会降低。

该提示仅影响键控项（使用 **Key** 参数添加的项）；不使用键添加的项不受影响。

### 示例

```vb
Dim Big As New Collection
Big.KeyCountHint = 100000   ' We expect about 100k keyed items.

Dim i As Long
For i = 1 To 100000
    Big.Add i, Key:=CStr(i)
Next
```

### 另请参阅

- [Add](/official/Reference/VBA/Collection/Add) 方法
- [Exists](/official/Reference/VBA/Collection/Exists) 方法
- [KeyCompareMode](/official/Reference/VBA/Collection/KeyCompareMode) 属性