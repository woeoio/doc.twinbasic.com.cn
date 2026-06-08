---
title: Description
parent: ErrObject
permalink: /tB/Modules/ErrObject/Description
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cfa5fdd6-cd83-401d-9594-057f9b2ecc19'
  PropagateID: 'cfa5fdd6-cd83-401d-9594-057f9b2ecc19'
  ReservedCode1: 'bc5025df-95ca-47b5-8a00-026b78eb3c23'
  ReservedCode2: 'bc5025df-95ca-47b5-8a00-026b78eb3c23'
---

# Description

返回或设置一个 **String**，包含与活动错误关联的描述性消息。可读/写。

语法：
- **Err**.**Description**
- **Err**.**Description** **=** *errorDescription*

*errorDescription*
: 描述错误的 **String**。读取时，**Description** 返回活动错误的描述文本，如果没有活动错误则返回零长度字符串。

**Description** 设置由错误的简短描述组成。使用此属性向用户提示代码无法或未处理的错误。

当生成用户定义的错误时，将错误的简短描述赋给 **Description** 属性。如果未填写 **Description** 且 [**Number**](/official/Reference/VBA/ErrObject/Number) 的值对应于内置运行时错误，则在生成错误时，[**Error**](/official/Reference/VBA/Conversion/Error) 函数返回的字符串将被放入 **Description**。

### 示例

此示例将用户定义的消息赋给 **Err** 对象的 **Description** 属性。

```vb
Err.Description = "It was not possible to access an object necessary " _
    & "for this operation."
```

### 另请参阅

- [Number](/official/Reference/VBA/ErrObject/Number) 属性
- [Source](/official/Reference/VBA/ErrObject/Source) 属性
- [Raise](/official/Reference/VBA/ErrObject/Raise) 方法
- [Clear](/official/Reference/VBA/ErrObject/Clear) 方法