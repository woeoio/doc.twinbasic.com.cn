---
title: Collection
parent: VBA Package
nav_order: 10
permalink: /tB/Modules/Collection/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8500fb69-456d-434b-bfb9-0e84d2771829'
  PropagateID: '8500fb69-456d-434b-bfb9-0e84d2771829'
  ReservedCode1: 'd6315a3d-a8cf-4033-9e33-0465c2189428'
  ReservedCode2: 'd6315a3d-a8cf-4033-9e33-0465c2189428'
---

# Collection 类

**Collection** 是一个有序的项集合，可以作为一个整体来引用。集合的成员不必共享相同的数据类型——任何值或对象引用都是可接受的。可以通过项在集合中从 1 开始的数字位置访问，或者在添加时指定了键的情况下，通过该键访问。

## 创建、填充和释放集合

集合使用 **New** 创建，使用 [**Add**](/official/Reference/VBA/Collection/Add) 填充，使用 [**Remove**](/official/Reference/VBA/Collection/Remove)（一次移除一项）或 [**Clear**](/official/Reference/VBA/Collection/Clear)（一次移除所有项）缩减。当引用集合的变量超出作用域或被设置为 **Nothing** 时，集合及其持有的所有对象引用将被释放。

```vb
Sub Demo()
    Dim Cars As Collection
    Set Cars = New Collection

    Cars.Add "Polestar 2", Key:="EV"      ' Add with a key.
    Cars.Add "Volvo XC40", Key:="ICE"
    Cars.Add "Toyota Mirai"               ' Add without a key.

    Debug.Print Cars.Count                ' 3
    Debug.Print Cars("EV")                ' "Polestar 2" — Item is the default member.
    Debug.Print Cars(3)                   ' "Toyota Mirai" — indexes are 1-based.

    Cars.Remove "ICE"                     ' Remove the Volvo XC40 by key.
    Cars.Remove 1                         ' Remove the Polestar 2 by index.

    Set Cars = Nothing                    ' Release the collection.
End Sub
```

## 遍历集合

可以使用 [**For Each...Next**](/official/Reference/Core/For-Each-Next) 语句遍历 **Collection**，该语句按插入顺序依次产出每个项，无论项是否使用键添加。如果要遍历键，请使用 [**Keys**](/official/Reference/VBA/Collection/Keys) 获取；若要将值的快照作为数组获取（例如在迭代期间集合可能被修改时），请使用 [**Items**](/official/Reference/VBA/Collection/Items)。

```vb
Dim Numbers As New Collection
Numbers.Add 10
Numbers.Add 20
Numbers.Add 30

Dim n As Variant
For Each n In Numbers
    Debug.Print n            ' Prints 10, then 20, then 30.
Next n
```

## 成员

- [Add](/official/Reference/VBA/Collection/Add) -- 向集合添加一个元素
- [Clear](/official/Reference/VBA/Collection/Clear) -- 移除集合中的所有元素
- [Count](/official/Reference/VBA/Collection/Count) -- 返回集合中的元素数量
- [Exists](/official/Reference/VBA/Collection/Exists) -- 返回集合中是否存在具有特定键的元素
- [Item](/official/Reference/VBA/Collection/Item) -- 按索引或键返回集合中的一个元素（默认成员）
- [Items](/official/Reference/VBA/Collection/Items) -- 返回集合中所有元素的 **Variant** 数组
- [KeyCompareMode](/official/Reference/VBA/Collection/KeyCompareMode) -- 返回或设置用于键的文本比较模式
- [KeyCountHint](/official/Reference/VBA/Collection/KeyCountHint) -- 返回或设置预期键控项数量的提示
- [Keys](/official/Reference/VBA/Collection/Keys) -- 返回集合中所有键的 **String** 数组
- [Remove](/official/Reference/VBA/Collection/Remove) -- 按索引或键移除集合中的一个元素