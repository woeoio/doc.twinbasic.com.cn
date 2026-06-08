---
title: CustomControlsCollection
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/CustomControlsCollection
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c907b6f0-a81d-4a0f-9bf8-e80101de4f6e'
  PropagateID: 'c907b6f0-a81d-4a0f-9bf8-e80101de4f6e'
  ReservedCode1: '3181d6a0-826d-458e-9e62-05874ffcc25c'
  ReservedCode2: '3181d6a0-826d-458e-9e62-05874ffcc25c'
---

# CustomControlsCollection 类
自定义窗体上承载的控件集合。作为 [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 的 **Controls** 属性访问。支持按整数或名称的索引访问、**For Each** 枚举以及运行时添加/删除控件。

```vb
Dim ctl As Object
For Each ctl In MyForm.Controls
    Debug.Print ctl.Name
Next
```

## 属性

### Count

集合中的控件数量。**Long**。只读。

语法：*object*.**Count**

### Item

返回给定索引或给定名称的控件。**默认属性**——**Controls** ( *…* ) 简写调用 **Item**。

语法：*object*.**Item** ( *IndexOrName* ) **As Object**

*IndexOrName*
: *必需* **Variant**，为 **Long** 零基索引或与控件 [**Name**](/official/Reference/CustomControls/#controls) 匹配的 **String**。

## 方法

### Add

按类 **ProgID** 向集合添加新控件，为其命名并附加到容器。

语法：*object*.**Add** ( *ProgId*, *ControlName*, *Container* ) **As Object**

*ProgId*
: *必需* **String**，包含要创建控件的类 **ProgID**。

*ControlName*
: *必需* **String**，分配给新控件的 **Name**。

*Container*
: *必需* **Object** 引用，指向将承载新控件的窗体、框架或其他容器。

返回新创建的控件，类型为 **Object**。

### Remove

从集合中移除给定索引或给定名称的控件。

语法：*object*.**Remove** *IndexOrName*

*IndexOrName*
: *必需* **Variant**，为 **Long** 零基索引或与控件 [**Name**](/official/Reference/CustomControls/#controls) 匹配的 **String**。

## 迭代

对集合的 `For Each` 循环依次产生每个承载的控件：

```vb
Dim ctl As Object
For Each ctl In MyForm.Controls
    ' …
Next
```

支持此功能的隐藏成员是 `_NewEnum`；应用程序代码不会直接调用它。