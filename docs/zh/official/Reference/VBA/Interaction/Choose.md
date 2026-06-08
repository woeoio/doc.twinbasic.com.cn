---
title: Choose
parent: Interaction Module
permalink: /tB/Modules/Interaction/Choose
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bf07d1a6-7143-40a1-840f-e186f745ff54'
  PropagateID: 'bf07d1a6-7143-40a1-840f-e186f745ff54'
  ReservedCode1: '1700c6a5-9563-4b72-8458-e15963f5e915'
  ReservedCode2: '1700c6a5-9563-4b72-8458-e15963f5e915'
---

# Choose

按基于1的索引从参数列表中选择并返回一个值。

语法：**Choose(** *index* **,** *choice-1* [ **,** *choice-2* **, ...** [ **,** *choice-n* ] ] **)**

*index*
: *必需* 数值表达式，求值为1到可用选项数之间的值。

*choice*
: *必需* **Variant**表达式，包含一个可能的选项。

如果*index*为1，**Choose**返回*choice-1*；如果*index*为2，返回*choice-2*；以此类推。如果*index*小于1或大于列出的选项数，**Choose**返回**Null**。*index*的非整数值在求值前四舍五入到最接近的整数。

::: info
**Choose**会评估列表中的*每个*选项，而不仅仅是它返回的那个。注意副作用：任何选项中的[**MsgBox**](/official/Reference/VBA/Interaction/MsgBox)调用会对每个选项调用一次，而不仅仅是选中的那个。要避免这种情况——例如当某个分支会出错时——请改用短路[**If**](/official/Reference/VBA/Interaction/If)函数。
:::

### 示例

本示例使用**Choose**将基于1的选项索引映射到名称。

```vb
Function GetChoice(Ind As Integer) As String
    GetChoice = Choose(Ind, "Speedy", "United", "Federal")
End Function
```

### 另请参阅

- [If](/official/Reference/VBA/Interaction/If)函数
- [IIf](/official/Reference/VBA/Interaction/IIf)函数
- [Switch](/official/Reference/VBA/Interaction/Switch)函数