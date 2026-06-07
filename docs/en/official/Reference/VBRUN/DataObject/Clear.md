---
title: Clear
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/Clear
---
# Clear

Removes every value and format from the **DataObject**, returning it to the empty state it had immediately after **New**.

Syntax: *object*.**Clear**

*object*
: *required* An object expression that evaluates to a **DataObject**.

After **Clear** returns, [**GetFormat**](/en/official/Reference/VBRUN/DataObject/GetFormat) reports **False** for every format and [**AvailableFormats**](/en/official/Reference/VBRUN/DataObject/AvailableFormats) is empty. Use **Clear** when reusing a single **DataObject** for several operations, so that values from the previous operation cannot leak into the next one.

### Example

```vb
Dim Data As New DataObject
Data.SetData "First payload", vbCFText
' ... use Data ...

Data.Clear
Data.SetData "Second payload", vbCFText
```

### See Also

- [SetData](/en/official/Reference/VBRUN/DataObject/SetData) method
- [AvailableFormats](/en/official/Reference/VBRUN/DataObject/AvailableFormats) method
