# 绘制/绘画到您的控件
### ICustomControl.Paint 方法
这是自定义控件中最重要的方法。它告诉窗体引擎您希望如何渲染您的控件。

_**提示：强烈建议在尝试实现自己的自定义控件之前，先查看并试验 twinBASIC 提供的示例项目。**_

    Private Sub OnPaint(ByVal Canvas As CustomControls.Canvas)  _
        Implements ICustomControl.Paint

您会收到一个提供以下方法的 Canvas 对象：

    Canvas.Width As Long   [Propert-Get]
    Canvas.Height As Long   [Propert-Get]
    Canvas.Dpi As Long   [Propert-Get]
    Canvas.DpiScaleFactor As Double [Propert-Get]
    Canvas.AddElement(Descriptor As ElementDescriptor)

`Canvas.Width` 和 `Canvas.Height` 是您的控件正在绘制到的绝对像素大小。与控件的 Width/Height 属性不同，这些属性是未经 DPI 缩放的，而 `Canvas.Width` 和 `Canvas.Height` 值**已经**经过 DPI 缩放。

`Canvas.Dpi` 属性表示 Windows 中的 DPI 设置。如果没有 DPI 缩放生效，此值为 96。例如，如果您在显示器上将缩放设置为 150%，那么 `Canvas.Dpi` 属性将为 144。

`Canvas.DpiScaleFactor` 属性给出一个表示 DPI 缩放百分比的浮点值。值为 1 表示没有缩放。例如，如果您在显示器上将缩放设置为 150%，那么 `Canvas.DpiScaleFactor` 属性将为 1.5。

`Canvas.AddElement` 方法用于向控件添加元素。*元素*被视为窗体引擎将为您渲染的内容。例如，您可能有一个一次显示 100 个单元格的网格控件。每个单元格都将是一个*元素*。元素可以相互重叠（允许不透明度/透明度）。窗体引擎按照您调用 AddElement 的顺序绘制它们，这意味着最后添加的元素将具有最高的 z 序。
***
### AddElement(ElementDescriptor)
AddElement 方法接受单个参数：ElementDescriptor。ElementDescriptor 是一个 UDT，它精确定义了元素将如何绘制以及如何对鼠标点击等事件做出反应。

    Public Type ElementDescriptor
       OnClick As LongPtr               ' 事件函数回调指针
       OnDblClick As LongPtr            ' 事件函数回调指针
       OnMouseDown As LongPtr           ' 事件函数回调指针
       OnMouseUp As LongPtr             ' 事件函数回调指针
       OnMouseEnter As LongPtr          ' 事件函数回调指针
       OnMouseLeave As LongPtr          ' 事件函数回调指针
       OnMouseMove As LongPtr           ' 事件函数回调指针
       OnScrollH As LongPtr             ' 事件函数回调指针
       OnScrollV As LongPtr             ' 事件函数回调指针
       Left As Long                     ' 像素偏移（相对于控件，已 DPI 缩放）
       Top As Long                      ' 像素偏移（相对于控件，已 DPI 缩放）
       Width As Long                    ' 像素宽度（已 DPI 缩放）
       Height As Long                   ' 像素高度（已 DPI 缩放）
       Cursor As MousePointerConstants  ' 鼠标指针图标
       TrackingIdX As LongLong          ' 用于跟踪此元素，传递给事件
       TrackingIdY As LongLong          ' 用于跟踪此元素，传递给事件
       Text As String                   ' 要渲染的文本
       TextRenderingOptions As TextRendering ' 自定义文本渲染的选项（对象）
       BackgroundFill As Fill           ' 自定义背景填充渲染的选项（对象）
       Corners As Corners               ' 自定义角落渲染的选项（对象）
       Borders As Borders               ' 自定义边框渲染的选项（对象）
    End Type
***
### 提示
- 每次调用您的 OnPaint 方法时，您都从一个空白画布开始。

- Left/Top/Width/Height 可以合法地在画布区域之外。例如，负的 Left/Top，或者超出 Canvas.Width/Canvas.Height 的 Width/Height 不会产生不良影响。窗体引擎会为您适当地裁剪所有内容，使您的控件设计更加简单。

- 您应该考虑使 Paint 例程高效。尽量不要实例化 COM 对象，在绘制多个类似元素时，尝试通过在循环外设置公共属性来重用 ElementDescriptors（参见 WaynesGrid 的示例）。

- 当您在控件内有多个元素时，TrackingIdX 和 TrackingIdY 很重要。这两个值组合起来应该唯一地表示元素，并且如果再次调用您的 Paint 例程，必须保持不变。这对于支持事件是必需的。例如，在网格控件中，每个单元格都会有一个与之关联的 TrackingIdX/TrackingIdY 值，给出单元格的 X/Y 坐标。

- 目前只提供鼠标事件，但焦点事件即将推出，键盘事件也将推出。

- 您可以使用基于类的事件处理程序，只需使用 `AddressOf MyEvent`，现在即使在类成员上也可以使用。您可以在示例中频繁看到这种用法，比如 WaynesGrid。所有鼠标事件都具有以下格式：   
```
Class MyCustomControl
    ...
    Private Sub MyClickEvent(ByRef EventInfo As MouseEvent)
        MsgBox "You clicked me!"
    End Sub

    Private Sub OnPaint(ByVal Canvas As CustomControls.Canvas)  _
            Implements ICustomControl.Paint
        Dim MyDescriptor As ElementDescriptor
        MyDescriptor.OnClick = AddressOf MyClickEvent
    End Sub
```
EventInfo (MouseEvent) 提供鼠标信息，如鼠标的相对 X/Y 位置，以及前面讨论的 TrackingX/Y 值。

- 当您调用 Canvas.AddElement 时，您的元素进入渲染管道。它**不会**立即绘制到屏幕上。渲染管道与您在上一次 OnPaint 调用中提供的前一个渲染管道进行比较，tB 窗体引擎只会重绘控件中已更改的区域。这允许高效地绘制控件，同时不需要关注如何进行部分重绘的细节。