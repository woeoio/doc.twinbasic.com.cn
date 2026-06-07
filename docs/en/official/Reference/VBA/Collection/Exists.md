---
title: Exists
parent: Collection
permalink: /tB/Modules/Collection/Exists
---
# Exists

Returns **True** if a specified key exists in a **Collection** object; **False** if it does not.

Syntax: *object*.**Exists(** *key* **)**

*object*
: *required* An object expression that evaluates to a **Collection** object.

*key*
: *required* A **String** value identifying the item to locate in the collection.

::: info

**Exists** is a twinBASIC extension; the classic VBA **Collection** object has no **Exists** method. The same effect in VBA requires calling [**Item**](/en/official/Reference/VBA/Collection/Item) inside an error-handling block.
:::

Key comparison is governed by the [**KeyCompareMode**](/en/official/Reference/VBA/Collection/KeyCompareMode) property.

### Example

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

### See Also

- [Add](/en/official/Reference/VBA/Collection/Add) method
- [Item](/en/official/Reference/VBA/Collection/Item) method
- [Keys](/en/official/Reference/VBA/Collection/Keys) method
- [KeyCompareMode](/en/official/Reference/VBA/Collection/KeyCompareMode) property
