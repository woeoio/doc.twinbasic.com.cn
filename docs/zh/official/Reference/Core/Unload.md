---
title: Unload
parent: Statements
permalink: /tB/Core/Unload
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '03db344c-e2f3-464c-876f-8a30a070a571'
  PropagateID: '03db344c-e2f3-464c-876f-8a30a070a571'
  ReservedCode1: '499973aa-5aa9-4e77-8879-ea2219df5e89'
  ReservedCode2: '499973aa-5aa9-4e77-8879-ea2219df5e89'
---

# Unload

从内存中移除对象——通常是窗体。

语法：
> **Unload** *object*

*object*
: 计算为可卸载对象（通常是窗体或控件数组元素）的对象表达式。

当对象被卸载时，它从内存中移除，与该对象关联的所有内存被回收。在使用[**Load**](/official/Reference/Core/Load)语句将其再次放入内存之前，用户无法与该对象交互，也无法通过编程方式操作该对象。

### 示例

以下示例假设程序中有两个`UserForm`。在`UserForm1`的**Initialize**事件中，`UserForm2`被加载并显示。当用户点击`UserForm2`时，它被卸载并显示`UserForm1`。当`UserForm1`被点击时，它也被卸载。

```vb
' This is the Initialize event procedure for UserForm1.
Private Sub UserForm_Initialize()
    Load UserForm2
    UserForm2.Show
End Sub

' This is the Click event for UserForm2.
Private Sub UserForm_Click()
    Unload UserForm2
End Sub

' This is the Click event for UserForm1.
Private Sub UserForm_Click()
    Unload UserForm1
End Sub
```

### 另请参阅

- [**Load** 语句](/official/Reference/Core/Load)