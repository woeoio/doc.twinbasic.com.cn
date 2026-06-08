---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fc4cc3ce-968a-4d3a-8e2e-f8e10e748fdb'
  PropagateID: 'fc4cc3ce-968a-4d3a-8e2e-f8e10e748fdb'
  ReservedCode1: '601d18d6-ef7a-47e2-939d-9116b8f3386f'
  ReservedCode2: '601d18d6-ef7a-47e2-939d-9116b8f3386f'
---

---
title: Clear
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/Clear
---
# Clear

从**DataObject**中移除所有值和格式，将其恢复到**New**后的初始空状态。

语法：*object*.**Clear**

*object*
: *必需* 求值为**DataObject**的对象表达式。

**Clear**返回后，[**GetFormat**](/official/Reference/VBRUN/DataObject/GetFormat)对每种格式报告**False**，[**AvailableFormats**](/official/Reference/VBRUN/DataObject/AvailableFormats)为空。在重用单个**DataObject**进行多次操作时使用**Clear**，以防止前一次操作的值泄漏到下一次。

### 示例

```vb
Dim Data As New DataObject
Data.SetData "First payload", vbCFText
' ... 使用Data ...

Data.Clear
Data.SetData "Second payload", vbCFText
```

### 另见

- [SetData](/official/Reference/VBRUN/DataObject/SetData) 方法
- [AvailableFormats](/official/Reference/VBRUN/DataObject/AvailableFormats) 方法