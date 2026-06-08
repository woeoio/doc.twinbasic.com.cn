---
title: "绘制/绘图到你的控件"
parent: CustomControls
nav_order: 4
permalink: /Tutorials/CustomControls/Painting
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ba08f8de-7f80-44a7-ba4f-d95653a2acd6'
  PropagateID: 'ba08f8de-7f80-44a7-ba4f-d95653a2acd6'
  ReservedCode1: '646e42a5-1bdd-4e39-9dee-03a9c2cf738f'
  ReservedCode2: '646e42a5-1bdd-4e39-9dee-03a9c2cf738f'
---

# 绘制/绘图到你的控件

### ICustomControl.Paint方法

这是CustomControl最重要的方法。它告诉窗体引擎你希望如何渲染你的控件。参见[`ICustomControl.Paint`](/official/Reference/CustomControls/Framework/ICustomControl#paint)参考了解宿主端契约。

::: tip
强烈建议在尝试实现自己的CustomControl之前，先查看并实验twinBASIC提供的示例项目。
:::

```vb
Private Sub OnPaint(ByVal Canvas As CustomControls.Canvas)  _
    Implements ICustomControl.Paint
```

你会收到一个[`Canvas`](/official/Reference/CustomControls/Framework/Canvas)对象，它提供以下方法：

```vb
Canvas.Width As Long    ' Property-Get
Canvas.Height As Long   ' Property-Get]
Canvas.Dpi As Long      ' Property-Get]
Canvas.DpiScaleFactor As Double ' Property-Get
Canvas.AddElement(Descriptor As ElementDescriptor)
```

::: info
当前框架将这些成员拼写为[`RuntimeUICCGetWidth`](/official/Reference/CustomControls/Framework/Canvas#runtimeuiccgetwidth)、[`RuntimeUICCGetHeight`](/official/Reference/CustomControls/Framework/Canvas#runtimeuiccgetheight)、[`RuntimeUICCGetDpi`](/official/Reference/CustomControls/Framework/Canvas#runtimeuiccgetdpi)、[`RuntimeUICCGetDpiScaleFactor`](/official/Reference/CustomControls/Framework/Canvas#runtimeuiccgetdpiscalefactor)和[`RuntimeUICCCanvasAddElement`](/official/Reference/CustomControls/Framework/Canvas#runtimeuicccanvasaddelement)。上面显示的较短名称是API最初起草时的名称；底层行为是相同的。
:::

`Canvas.Width` 和 `Canvas.Height` 是你的控件正在绘制的绝对像素大小。与你控件未经DPI缩放的Width/Height属性不同，`Canvas.Width` 和 `Canvas.Height` 的值**已经过**DPI缩放。

`Canvas.Dpi` 属性表示Windows中的DPI设置。如果没有DPI缩放生效，此值为96。例如，如果你的显示器缩放设置为150%，则 `Canvas.Dpi` 属性将为144。

`Canvas.DpiScaleFactor` 属性给出表示DPI缩放百分比的浮点值。值为1表示无缩放。例如，如果你的显示器缩放设置为150%，则 `Canvas.DpiScaleFactor` 属性将为1.5。

`Canvas.AddElement` 方法用于向你的控件添加元素。*元素*被认为是窗体引擎将为你渲染的内容。例如，你可能有一个一次显示100个单元格的网格控件。每个单元格就是一个*元素*。元素可以相互重叠（允许不透明度/透明度）。窗体引擎按你调用AddElement的顺序绘制它们，这意味着最后添加的元素具有最高的z序。

***
### AddElement(ElementDescriptor)

AddElement方法接受一个参数；ElementDescriptor。ElementDescriptor是一个UDT，精确定义了元素的绘制方式以及它如何响应鼠标点击等事件。

```vb
Public Type ElementDescriptor
   OnClick As LongPtr               ' event function callback pointer
   OnDblClick As LongPtr            ' event function callback pointer
   OnMouseDown As LongPtr           ' event function callback pointer
   OnMouseUp As LongPtr             ' event function callback pointer
   OnMouseEnter As LongPtr          ' event function callback pointer
   OnMouseLeave As LongPtr          ' event function callback pointer
   OnMouseMove As LongPtr           ' event function callback pointer
   OnScrollH As LongPtr             ' event function callback pointer
   OnScrollV As LongPtr             ' event function callback pointer
   Left As Long                     ' pixel offset (control relative, DPI scaled)
   Top As Long                      ' pixel offset (control relative, DPI scaled)
   Width As Long                    ' pixel width (DPI scaled)
   Height As Long                   ' pixel width (DPI scaled)
   Cursor As MousePointerConstants  ' cursor/pointer icon
   TrackingIdX As LongLong          ' for tracking this element, passed to events
   TrackingIdY As LongLong          ' for tracking this element, passed to events
   Text As String                   ' the text to render
   TextRenderingOptions As TextRendering ' options to customize text rendering (object)
   BackgroundFill As Fill           ' options to customize back fill rendering (object)
   Corners As Corners               ' options to customize corner rendering (object)
   Borders As Borders               ' options to customize border rendering (object)
End Type
```

***
### 提示
- 每次OnPaint方法被调用时，你从一块空白画布开始。

- Left/Top/Width/Height可以合法地位于画布区域之外。例如，负的Left/Top，或超过Canvas.Width/Canvas.Height的Width/Height不会有不良影响。窗体引擎会为你适当地裁剪所有内容，使得控件设计更加简单。

- 你应该考虑使Paint例程高效。尽量避免实例化COM对象，在绘制多个相似元素时，尝试通过在循环外设置公共属性来重用ElementDescriptor（参见WaynesGrid的示例）

- 当控件内有多个元素时，TrackingIdX和TrackingIdY很重要。这两个值组合时应唯一表示该元素，并且在Paint例程再次被调用时必须保持不变。这是支持事件所需的。例如，在网格控件中，每个单元格都有一个与单元格X/Y坐标关联的TrackingIdX/TrackingIdY值。

- 目前仅提供鼠标事件，但焦点事件和键盘事件即将推出。

- 你可以通过简单地使用 `AddressOf MyEvent` 来使用基于类的事件处理程序，现在甚至可以在类成员上使用。你可以在示例中看到这种用法，如WaynesGrid。所有鼠标事件具有以下格式：

```vb
Class MyCustomControl
    '...
    Private Sub MyClickEvent(ByRef EventInfo As MouseEvent)
        MsgBox "You clicked me!"
    End Sub

    Private Sub OnPaint(ByVal Canvas As CustomControls.Canvas)  _
            Implements ICustomControl.Paint
        Dim MyDescriptor As ElementDescriptor
        MyDescriptor.OnClick = AddressOf MyClickEvent
    End Sub
```

EventInfo（MouseEvent）提供鼠标信息，如鼠标的相对X/Y位置，以及前面讨论的TrackingX/Y值。

- 当你调用Canvas.AddElement时，你的元素进入渲染管线。它**不会**立即绘制到屏幕上。渲染管线会与你在上次OnPaint调用中提供的上一个渲染管线进行比较，tB窗体引擎只会重绘控件中已更改的区域。这使得控件绘制高效，同时无需关心如何进行局部重绘的细节。

***
## 另见

- [`ICustomControl`](/official/Reference/CustomControls/Framework/ICustomControl) —— 每个自定义控件实现的接口
- [`Canvas`](/official/Reference/CustomControls/Framework/Canvas) —— 传递给**Paint**的绘图面
- `ElementDescriptor` 的 `BackgroundFill` / `Borders` / `Corners` / `TextRenderingOptions` 字段使用的样式辅助工具：[`Fill`](/official/Reference/CustomControls/Styles/Fill)、[`Borders`](/official/Reference/CustomControls/Styles/Borders)、[`Corners`](/official/Reference/CustomControls/Styles/Corners)、[`TextRendering`](/official/Reference/CustomControls/Styles/TextRendering)
- [CustomControls包参考](/official/Reference/CustomControls/) —— 框架和内置 `Waynes…` 控件的概述（其中多个——`WaynesGrid`、`WaynesButton`、……——正是上面提到的工作示例）