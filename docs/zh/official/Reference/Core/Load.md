---
title: Load
parent: Statements
permalink: /tB/Core/Load
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4044b392-107b-4702-b83b-bc29779df5c5'
  PropagateID: '4044b392-107b-4702-b83b-bc29779df5c5'
  ReservedCode1: '4f15e44b-bf26-4cd6-a597-b856305990ce'
  ReservedCode2: '4f15e44b-bf26-4cd6-a597-b856305990ce'
---

# Load

将对象——通常是窗体——加载到内存但不在屏幕上显示。

语法：
> **Load** *object*

*object*
: 求值为可加载对象的对象表达式（通常是窗体或控件数组元素）。

对象加载后，被放入内存但不可见。使用 **Show** 方法使其可见。对象在可见之前，用户不能与它交互；可以在其 **Initialize** 事件处理程序中以编程方式操作对象。

当不再需要对象时，使用 [**Unload**](/official/Reference/Core/Unload) 将其从内存中移除。

### 示例

以下示例中，`UserForm2` 在 `UserForm1` 的 **Initialize** 事件期间加载。随后点击 `UserForm2` 会显示 `UserForm1`。

```vb
' This is the Initialize event procedure for UserForm1.
Private Sub UserForm_Initialize()
    Load UserForm2
    UserForm2.Show
End Sub

' This is the Click event of UserForm2.
Private Sub UserForm_Click()
    UserForm2.Hide
End Sub

' This is the Click event for UserForm1.
Private Sub UserForm_Click()
    UserForm2.Show
End Sub
```

### 另请参阅

- [**Unload** 语句](/official/Reference/Core/Unload)