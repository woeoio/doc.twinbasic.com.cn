---
title: "Handler 方法语法"
parent: Language Syntax
nav_order: 15
permalink: /Features/Language/Handlers
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd2144a17-e60b-45db-bfd9-69a9d9fb8632'
  PropagateID: 'd2144a17-e60b-45db-bfd9-69a9d9fb8632'
  ReservedCode1: '2f5befba-d84a-494d-882e-56748416d4c4'
  ReservedCode2: '2f5befba-d84a-494d-882e-56748416d4c4'
---

# 新的 Handler 类成员语法

你现在可以将方法名与它所应用的类成员分开。

## 事件 Handles

对于窗体、UserControl 和引发事件的对象上的事件，你可以将任何方法定义为处理程序，而无需将其命名为 `Object_Event()`，只需在其后添加 `Handles Object.Event`。例如，在窗体中，你可以用 `Private Sub OnLoad() Handles Form.Load` 来处理 `Load` 事件，而不是 `Private Sub Form_Load()`。

```vb
Private Sub OnLoad() Handles Form.Load
    Caption = "Loaded"
End Sub

Private Sub OnClick() Handles Command1.Click
    Debug.Print "clicked"
End Sub
```

## 接口 Implements

类似于上述，对于使用 `Implements` 的窗体/UC/类，你可以使用 `Sub Bar() Implements IFoo.Bar`。注意你可以指定多个实现的方法；更多信息请参见 [Implements 增强部分](/official/Features/Language/Interfaces-CoClasses)。

::: info
这些是可选的。为了兼容性，twinBASIC 将始终继续支持传统的事件处理和 Implements 语法，你不被要求使用此新语法（或本文中描述的*任何*新增功能）。自动创建的原型是否使用此语法通过 IDE 选项控制："IDE: Use new handles/implements syntax"。
:::