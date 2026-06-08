---
title: Handles
parent: Statements
permalink: /tB/Core/Handles
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5d7fd5dd-f9e9-4f4f-b945-9839ec6b7ce4'
  PropagateID: '5d7fd5dd-f9e9-4f4f-b945-9839ec6b7ce4'
  ReservedCode1: '3d16e091-f23e-4ed8-b073-2cf24a8191c6'
  ReservedCode2: '3d16e091-f23e-4ed8-b073-2cf24a8191c6'
---

# Handles

过程头部上的尾部子句，将过程绑定为一个或多个特定事件的事件处理程序。

::: info
**Handles** 子句是twinBASIC扩展。经典VBA仅通过名称连接事件处理程序：名为 `Form_Load` 的 `Sub` 自动处理 `Form` 的 `Load` 事件。twinBASIC仍然支持该模式——**Handles** 将过程名称与其处理的事件解耦，并允许一个函数体同时处理多个事件。IDE自动生成事件原型时是否插入新语法由"IDE: Use new handles/implements syntax"选项控制。
:::

语法：
> *procedure-header* **Handles** *object*.*event* [ **,** *object*.*event* ] …

*procedure-header*
: 完整的 [**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function) 或 [**Property**](/official/Reference/Core/Property) 头部，包括任何访问修饰符、名称、参数列表和（对于 **Function** / **Property Get**）返回类型。

*object*
: 命名封闭类、窗体或用户控件中可见的事件源的标识符：宿主的隐式标识符（`Form`、`UserControl`、`MyClass`）、窗体上声明的控件（`Command1`、`Text1`、…）或 [**WithEvents**](/official/Reference/Core/Dim) 成员变量。

*event*
: 在 *object* 类型上声明的 [**Event**](/official/Reference/Core/Event) 的名称。

过程的参数列表必须匹配其处理的每个事件的签名。当列出多个事件时，它们必须共享相同的签名，以便一个函数体可以互换地服务它们。

因为 **Handles** 将过程的名称与其处理的事件解耦，过程可以：

- 使用描述性名称（`OnLoad`、`SyncOpacity`）而非复合的 `<Object>_<Event>` 形式；
- 将多个相关的事件处理程序合并到单个函数体中而无需重复代码；
- 处理来自名称恰好与隐式命名模式冲突的过程的事件。

经典命名约定不受影响：字面上命名为 `*object*_*event*` 的过程继续自动连接为该事件的处理程序，无论同一事件上是否有其他 **Handles** 子句。

### 示例

为窗体的 `Load` 事件使用描述性名称的处理程序：

```vb
Private Sub OnLoad() Handles Form.Load
    Debug.Print "Form is loading."
End Sub
```

单个函数体同时响应多个属性更改事件（改编自标准 `CheckMark` 控件）：

```vb
Protected Sub SignificantChange() _
        Handles BackColor.OnPropertyLet, _
                BackStyle.OnPropertyLet, _
                Appearance.OnPropertyLet, _
                Value.OnPropertyLet
    Me.WindowlessRefresh()
End Sub
```

作为对比，其中一个事件的等效经典VBA命名约定形式：

```vb
Private Sub BackColor_OnPropertyLet()
    Me.WindowlessRefresh()
End Sub
```

——每个事件需要一个单独的过程体。

### 另请参阅

- [**Sub** 语句](/official/Reference/Core/Sub)
- [**Function** 语句](/official/Reference/Core/Function)
- [**Property** 语句](/official/Reference/Core/Property)
- [**Event** 语句](/official/Reference/Core/Event)
- [**Implements** 语句](/official/Reference/Core/Implements)
- [处理程序方法语法](/official/Features/Language/Handlers)