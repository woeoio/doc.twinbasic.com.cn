---
title: KeyCompareMode
parent: Collection
permalink: /tB/Modules/Collection/KeyCompareMode
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b4d98f4d-46f9-4aa5-bcff-7e771ca9a39e'
  PropagateID: 'b4d98f4d-46f9-4aa5-bcff-7e771ca9a39e'
  ReservedCode1: 'e3541788-d41e-47cc-a2c0-6958c4972447'
  ReservedCode2: 'e3541788-d41e-47cc-a2c0-6958c4972447'
---

# KeyCompareMode

返回或设置 **Collection** 对象中匹配字符串键时使用的比较模式。可读写。

语法：
- *object*.**KeyCompareMode**
- *object*.**KeyCompareMode** **=** *compare*

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

*compare*
: 一个 **VbCompareMethod** 值，指定 [**Add**](/official/Reference/VBA/Collection/Add)、[**Item**](/official/Reference/VBA/Collection/Item)、[**Remove**](/official/Reference/VBA/Collection/Remove) 和 [**Exists**](/official/Reference/VBA/Collection/Exists) 在查找键时使用的比较模式。

*compare* 参数设置如下：

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbBinaryCompare** | 0 | 执行区分大小写的二进制比较。 |
| **vbTextCompare** | 1 | 执行不区分大小写的文本比较。 |

::: info

**KeyCompareMode** 是 twinBASIC 扩展；经典 VBA 的 **Collection** 对象始终使用不区分大小写的比较，并且不公开此属性。
:::

默认比较模式为 **vbTextCompare**。更改比较模式会对现有键重新哈希，因此对于大型集合，最有效的做法是在添加项之前设置 **KeyCompareMode**。

### 示例

```vb
Dim col As New Collection

' Default mode is binary (case-sensitive).
col.Add "first",  Key:="A"
col.Add "second", Key:="a"   ' Distinct from "A" — succeeds.

Dim col2 As New Collection
col2.KeyCompareMode = vbTextCompare
col2.Add "first", Key:="A"
' col2.Add "second", Key:="a"  ' Would raise an error — same key as "A".
```

### 另请参阅

- [Add](/official/Reference/VBA/Collection/Add) 方法
- [Exists](/official/Reference/VBA/Collection/Exists) 方法
- [KeyCountHint](/official/Reference/VBA/Collection/KeyCountHint) 属性
- [StrComp](/official/Reference/VBA/Strings/StrComp) 函数
- [Option Compare](/official/Reference/Core/Option) 语句