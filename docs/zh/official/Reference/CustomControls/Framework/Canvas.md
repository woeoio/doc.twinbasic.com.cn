---
title: Canvas
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/Canvas
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8a234857-25f9-4aab-bc40-33729095df95'
  PropagateID: '8a234857-25f9-4aab-bc40-33729095df95'
  ReservedCode1: '0de29b9f-9f58-4a69-885a-80bf73a5a10c'
  ReservedCode2: '0de29b9f-9f58-4a69-885a-80bf73a5a10c'
---

# Canvas 类型（UDT）
自定义控件绘制到的绘图表面。每次重绘过程传递给 [**ICustomControl.Paint**](/official/Reference/CustomControls/Framework/ICustomControl#paint)，仅在该方法内部使用——其生命周期为单次绘制过程的持续时间。

自定义控件构建一个或多个 `ElementDescriptor` 记录描述要绘制的矩形——每个具有位置、大小、填充、边框、角、文本、光标、tab 索引和一组 `AddressOf` 注册的输入回调——并通过 [**RuntimeUICCCanvasAddElement**](#runtimeuicccanvasaddelement) 传递每个描述符。框架对描述符进行光栅化，将命中测试路由到已注册的回调，并（在描述符选择加入时）跟踪键盘 tab 顺序和焦点。

```vb
Private Sub OnPaint(ByVal Canvas As CustomControls.Canvas) _
        Implements CustomControls.ICustomControl.Paint

    Dim descriptor As ElementDescriptor
    With descriptor
        .Left = 0
        .Top = 0
        .Width = Canvas.RuntimeUICCGetWidth()
        .Height = Canvas.RuntimeUICCGetHeight()
        Set .BackgroundFill = Me.NormalState.BackgroundFill
        .Text = Me.Caption
        Set .TextRenderingOptions = Me.NormalState.TextRendering
        .OnClick = AddressOf BtnClick
        Canvas.RuntimeUICCCanvasAddElement(descriptor)
    End With
End Sub
```

## 方法

### RuntimeUICCCanvasAddElement

向画布添加 `ElementDescriptor`。每个元素成为一个绘制的矩形及其输入处理区域。描述符按添加顺序渲染，因此后添加的元素绘制在先添加的元素之上。

语法：*Canvas*.**RuntimeUICCCanvasAddElement** *ElementDescriptor*

*ElementDescriptor*
: *必需* 已填充 `ElementDescriptor` UDT 的 `ByRef` 引用。框架从中复制所需值；调用者可以重用该变量来描述下一个元素。

### RuntimeUICCGetDpi

返回控件当前显示所在监视器的 DPI，以整数形式（标准值 96 / 120 / 144 / …）。

语法：*Canvas*.**RuntimeUICCGetDpi** ( ) **As Long**

### RuntimeUICCGetDpiScaleFactor

返回 DPI 缩放因子——`RuntimeUICCGetDpi / 96`——以 **Double** 形式。将 [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount) 类型的测量值乘以此值以将设计时像素转换为绘制时的设备像素。

语法：*Canvas*.**RuntimeUICCGetDpiScaleFactor** ( ) **As Double**

### RuntimeUICCGetHeight

返回画布高度（设备像素）。

语法：*Canvas*.**RuntimeUICCGetHeight** ( ) **As Long**

### RuntimeUICCGetWidth

返回画布宽度（设备像素）。

语法：*Canvas*.**RuntimeUICCGetWidth** ( ) **As Long**