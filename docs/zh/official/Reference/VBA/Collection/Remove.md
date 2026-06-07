---
title: Remove
parent: Collection
permalink: /tB/Modules/Collection/Remove
---
# Remove

Removes a member from a **Collection** object.

Syntax: *object*.**Remove(** *index* **)**

*object*
: *required* An object expression that evaluates to a **Collection** object.

*index*
: *required* An expression that specifies the member of the collection to remove. If a numeric expression, *index* must be a number from 1 to the value of the collection's [**Count**](/official/Reference/VBA/Collection/Count) property. If a string expression, *index* must correspond to the *key* argument specified when the member was added to the collection.

If *index* doesn't match an existing member of the collection, an error occurs.

When an item is removed, the indexes of subsequent items decrease by one. Take this into account when iterating over a collection while removing items --- see the example below.

Key comparison is governed by the [**KeyCompareMode**](/official/Reference/VBA/Collection/KeyCompareMode) property.

### Example

This example uses the **Remove** method to remove every object from a **Collection** named `MyClasses`. Because items are reindexed automatically, the first item is removed on each iteration of the loop.

```vb
Dim Num As Long, MyClasses As Collection
Set MyClasses = New Collection
' ... assume MyClasses has been populated ...

For Num = 1 To MyClasses.Count
    MyClasses.Remove 1   ' Remove the first object each time
                         ' through the loop until there are
Next Num                 ' no objects left in the collection.
```

To clear a collection in a single call, use the [**Clear**](/official/Reference/VBA/Collection/Clear) method instead.

### See Also

- [Add](/official/Reference/VBA/Collection/Add) method
- [Clear](/official/Reference/VBA/Collection/Clear) method
- [Count](/official/Reference/VBA/Collection/Count) property
- [Item](/official/Reference/VBA/Collection/Item) method
