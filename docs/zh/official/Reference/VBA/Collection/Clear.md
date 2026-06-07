---
title: Clear
parent: Collection
permalink: /tB/Modules/Collection/Clear
---
# Clear

Removes all elements from a **Collection** object. After **Clear** returns, the collection's [**Count**](/official/Reference/VBA/Collection/Count) is zero.

Syntax: *object*.**Clear**

*object*
: *required* An object expression that evaluates to a **Collection** object.

::: info

**Clear** is a twinBASIC extension; the classic VBA **Collection** object has no **Clear** method. The same effect in VBA requires repeatedly removing the first item until the collection is empty.
:::

**Clear** resets a **Collection** to its initial, empty state --- useful when the object is to be reused without creating a new instance.

### Example

```vb
Dim MyClasses As New Collection
MyClasses.Add "first"
MyClasses.Add "second"
MyClasses.Add "third"
Debug.Print MyClasses.Count   ' Prints 3.

MyClasses.Clear
Debug.Print MyClasses.Count   ' Prints 0.
```

### See Also

- [Count](/official/Reference/VBA/Collection/Count) property
- [Remove](/official/Reference/VBA/Collection/Remove) method
