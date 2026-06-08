---
title: "Remove 方法"
parent: Collection
permalink: /tB/Modules/Collection/Remove
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4f6fe028-efa3-45ed-ad9a-0cb9c81552df'
  PropagateID: '4f6fe028-efa3-45ed-ad9a-0cb9c81552df'
  ReservedCode1: '80eb0253-5cb4-4451-b3fe-b18900192752'
  ReservedCode2: '80eb0253-5cb4-4451-b3fe-b18900192752'
---

# Remove

从 **Collection** 对象中移除一个成员。

语法：*object*.**Remove(** *index* **)**

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

*index*
: *必需* 一个指定要移除的集合成员的表达式。如果是数值表达式，*index* 必须是从 1 到集合的 [**Count**](/official/Reference/VBA/Collection/Count) 属性值之间的数字。如果是字符串表达式，*index* 必须与成员添加到集合时指定的 *key* 参数相对应。

如果 *index* 不匹配集合中的现有成员，将发生错误。

当移除一个项时，后续项的索引会减一。在遍历集合并同时移除项时，请注意这一点——参见下面的示例。

键比较由 [**KeyCompareMode**](/official/Reference/VBA/Collection/KeyCompareMode) 属性控制。

### 示例

此示例使用 **Remove** 方法从名为 `MyClasses` 的 **Collection** 中移除所有对象。由于项会自动重新索引，因此每次循环迭代都移除第一项。

```vb
Dim Num As Long, MyClasses As Collection
Set MyClasses = New Collection
' ... assume MyClasses has been populated ...

For Num = 1 To MyClasses.Count
    MyClasses.Remove 1   ' Remove the first object each time
                         ' through the loop until there are
Next Num                 ' no objects left in the collection.
```

要在单次调用中清空集合，请改用 [**Clear**](/official/Reference/VBA/Collection/Clear) 方法。

### 另请参阅

- [Add](/official/Reference/VBA/Collection/Add) 方法
- [Clear](/official/Reference/VBA/Collection/Clear) 方法
- [Count](/official/Reference/VBA/Collection/Count) 属性
- [Item](/official/Reference/VBA/Collection/Item) 方法