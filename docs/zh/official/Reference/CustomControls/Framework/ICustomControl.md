---
title: ICustomControl
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/ICustomControl
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3c7af408-a200-4297-b8f8-6195f61d568e'
  PropagateID: '3c7af408-a200-4297-b8f8-6195f61d568e'
  ReservedCode1: 'cebc26b5-de34-4743-b6da-885fa0bbb755'
  ReservedCode2: 'cebc26b5-de34-4743-b6da-885fa0bbb755'
---

# ICustomControl 接口
每个自定义控件实现的接口。框架在控件实例化并反序列化其属性值后调用 **Initialize** 一次，每次需要重绘控件区域时调用 **Paint**，控件被释放时调用 **Destroy** 一次。

包中的八个具体 `Waynes…` 类都实现了此接口，同时继承了标准布局/名称成员的混入基类。

```vb
Class MyControl
    Implements CustomControls.ICustomControl

    Private Sub OnInitialize(ByVal Context As CustomControls.CustomControlContext) _
            Implements CustomControls.ICustomControl.Initialize
        ' …
    End Sub

    Private Sub OnDestroy() _
            Implements CustomControls.ICustomControl.Destroy
        ' …
    End Sub

    Private Sub OnPaint(ByVal Canvas As CustomControls.Canvas) _
            Implements CustomControls.ICustomControl.Paint
        ' …
    End Sub
End Class
```

## 方法

### Destroy

控件被释放时调用一次。实现应释放其持有的对反向引用自身对象的引用，使引用图可以无环地收缩。

语法：*object*.**Destroy** ( )

### Initialize

框架构建控件并将窗体 `.frm` 数据中设计器设置的属性值反序列化到新实例后调用一次。

语法：*object*.**Initialize** ( *Context* )

*Context*
: *必需* 此控件实例的 [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext)。保存它（通常作为名为 **ControlContext** 的类字段）——这是 **Initialize** 返回后请求重绘、创建定时器或检查运行时模式的唯一方式。

常见实现调用 **Context.GetSerializer().RuntimeUISrzDeserialize(Me, False)** 以将设计器属性值加载到实例中；如果调用返回 **False**，则未找到序列化数据，控件应应用自己的默认值。

### Paint

每次框架需要重绘控件客户区域时调用。实现构建一个或多个 `ElementDescriptor` 记录描述要绘制的矩形，并通过 *Canvas*.**RuntimeUICCCanvasAddElement** 传递每个描述符。

语法：*object*.**Paint** ( *Canvas* )

*Canvas*
: *必需* 此绘制过程的 [**Canvas**](/official/Reference/CustomControls/Framework/Canvas) 绘图表面。其 **RuntimeUICCGetWidth**、**RuntimeUICCGetHeight** 和 **RuntimeUICCGetDpiScaleFactor** 方法提供被绘制区域的大小和 DPI，以设备像素为单位。

描述符可以包含事件回调（`OnClick`、`OnMouseDown` 等）作为 `AddressOf` 指针；框架通过这些指针分发输入，控件无需显式订阅任何内容。

控件应通过调用 [**CustomControlContext.Repaint**](/official/Reference/CustomControls/Framework/CustomControlContext#repaint) 请求额外重绘，而非直接调用 **Paint**——框架控制何时发出实际绘制过程。