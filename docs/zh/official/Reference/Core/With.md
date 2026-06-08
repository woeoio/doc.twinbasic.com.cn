---
title: With
parent: Statements
permalink: /tB/Core/With
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '51df9f8a-6e96-4293-97b6-7299b208580f'
  PropagateID: '51df9f8a-6e96-4293-97b6-7299b208580f'
  ReservedCode1: 'ca8f70cf-4dbd-48e6-856e-921f41cce1d6'
  ReservedCode2: 'ca8f70cf-4dbd-48e6-856e-921f41cce1d6'
---

# With

对单个对象或用户自定义类型执行一系列语句。

语法：

> **With** *object*  
> &nbsp;&nbsp;&nbsp;&nbsp;[ *statements* ]  
> **End With**

*object*
: 对象或用户自定义类型的名称。

*statements*
: *可选* 要对*object*执行的一个或多个语句。

**With**语句允许对指定对象执行一系列语句而无需重新限定对象名称。例如，要更改单个对象的多个不同属性，将属性赋值语句放在**With**控制结构中，只需引用对象一次而不是在每个属性赋值时都引用。

以下示例说明使用**With**语句为同一对象的多个属性赋值。

```vb
With MyLabel
    .Height = 2000
    .Width = 2000
    .Caption = "This is MyLabel"
End With
```

::: info
一旦进入**With**块，*object*就不能被更改。因此，单个**With**语句不能影响多个不同的对象。
:::

**With**语句可以通过将一个**With**块放在另一个**With**块内来嵌套。但是，由于外部**With**块的成员在内部**With**块中被遮蔽，在内部**With**块中必须提供完全限定的对象引用来访问外部**With**块中对象的任何成员。

::: important
不建议跳入或跳出**With**块。如果**With**块中的语句被执行，但**With**或**End With**语句未被执行，则包含对象引用的临时变量会保留在内存中，直到过程退出。
:::

### 示例

本示例使用**With**语句对单个对象执行一系列语句。对象及其属性是仅用于说明的通用名称。

```vb
With MyObject
    .Height = 100 ' Same as MyObject.Height = 100.
    .Caption = "Hello World" ' Same as MyObject.Caption = "Hello World".
    With .Font
        .Color = Red ' Same as MyObject.Font.Color = Red.
        .Bold = True ' Same as MyObject.Font.Bold = True.
    End With
End With
```