---
title: 处理程序方法语法
parent: 语言语法
nav_order: 15
permalink: /Features/Language/Handlers
---

# 新处理程序类成员语法

您现在可以将方法名称与其应用的类成员分开。

## 事件的 Handles

对于窗体、用户控件和引发事件的对象上的事件，您可以将任何方法定义为处理程序，而不需要将其命名为`Object_Event()`，只需在其后跟上`Handles Object.Event`。例如，在窗体中，您可以使用`Private Sub OnLoad() Handles Form.Load`处理`Load`事件，而不是`Private Sub Form_Load()`。

## 接口的 Implements

与上述类似，对于使用`Implements`的窗体/用户控件/类，您可以使用`Sub Bar() Implements IFoo.Bar`。请注意，您可以指定多个实现的方法；更多信息，请参阅[Implements 部分的增强功能](Interfaces-CoClasses)。

> [!注意]
> 这些是选择性的。为了兼容性，twinBASIC 将始终继续支持事件处理和 Implements 的传统语法，您不需要使用此新语法（或本文中描述的任何添加功能）。自动创建的原型是否使用此语法通过 IDE 选项控制："IDE：使用新的 handles/implements 语法"。