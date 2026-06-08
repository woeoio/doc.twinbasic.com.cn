---
title: "Item 方法"
parent: Collection
permalink: /tB/Modules/Collection/Item
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '00b0c8cf-1a69-47cd-b2c0-b4457ef6f354'
  PropagateID: '00b0c8cf-1a69-47cd-b2c0-b4457ef6f354'
  ReservedCode1: 'c17147d7-998e-48a2-becb-08659b4185c2'
  ReservedCode2: 'c17147d7-998e-48a2-becb-08659b4185c2'
---

# Item

按位置或按键返回 **Collection** 对象中的特定成员。

语法：*object*.**Item(** *index* **)**

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

*index*
: *必需* 一个指定集合成员位置的表达式。如果是数值表达式，*index* 必须是从 1 到集合的 [**Count**](/official/Reference/VBA/Collection/Count) 属性值之间的数字。如果是字符串表达式，*index* 必须与被引用成员添加到集合时指定的 *key* 参数相对应。

如果 *index* 不匹配集合中的任何现有成员，将发生错误。如果 *index* 既不是数字也不是字符串，也会发生错误。

**Item** 是 **Collection** 对象的默认成员。因此，以下两行代码是等效的：

```vb
Debug.Print MyCollection(1)
Debug.Print MyCollection.Item(1)
```

键比较由 [**KeyCompareMode**](/official/Reference/VBA/Collection/KeyCompareMode) 属性控制。

### 示例

此示例使用 **Item** 方法检索集合中对象的引用。假设 `Birthdays` 是一个 **Collection** 对象，以下代码使用键 `"SmithBill"` 和 `"SmithAdam"` 作为 *index* 参数来检索表示 Bill Smith 生日和 Adam Smith 生日的对象引用。

第一次调用显式指定了 **Item** 方法；第二次没有。两次调用都可以工作，因为 **Item** 是 **Collection** 对象的默认成员。

```vb
Dim SmithBillBD As Object
Dim SmithAdamBD As Object
Dim Birthdays As Collection
' ... assume Birthdays has been populated ...
Set SmithBillBD = Birthdays.Item("SmithBill")
Set SmithAdamBD = Birthdays("SmithAdam")
```

### 另请参阅

- [Add](/official/Reference/VBA/Collection/Add) 方法
- [Count](/official/Reference/VBA/Collection/Count) 属性
- [Exists](/official/Reference/VBA/Collection/Exists) 方法
- [Items](/official/Reference/VBA/Collection/Items) 方法
- [Remove](/official/Reference/VBA/Collection/Remove) 方法