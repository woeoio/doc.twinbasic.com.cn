---
title: Framework
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/Framework/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'dc9e36eb-8a9f-4d23-a670-8feaf5601b7e'
  PropagateID: 'dc9e36eb-8a9f-4d23-a670-8feaf5601b7e'
  ReservedCode1: 'd5651cc3-588e-4dde-afe8-6ac58358a84f'
  ReservedCode2: 'd5651cc3-588e-4dde-afe8-6ac58358a84f'
---

# Framework

[**CustomControls**](/official/Reference/CustomControls/) 包的框架部分——自定义控件*作者*编写时所针对的接口、回调对象和绘图基元。包中的八个具体 `Waynes…` 控件本身就是基于此框架构建的；相同的组件可用于需要实现全新自定义控件的用户代码。

自定义控件：

1. 实现 [**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl)（或窗体类自定义控件的 [**ICustomForm**](/official/Reference/CustomControls/Framework/ICustomForm)）。
2. 存储在 **Initialize** 时传入的 [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext)，用于请求重绘、创建定时器或更改焦点元素。
3. 在 **Paint** 内部，构建一个或多个 `ElementDescriptor` 记录并通过 **RuntimeUICCCanvasAddElement** 传递给 [**Canvas**](/official/Reference/CustomControls/Framework/Canvas)——框架对其进行光栅化、处理输入路由，并通过描述符的 `AddressOf` 注册回调分发事件。

```vb
Class MyControl
    Implements CustomControls.ICustomControl

    Private Context As CustomControls.CustomControlContext

    Private Sub OnInitialize(ByVal Ctx As CustomControls.CustomControlContext) _
            Implements CustomControls.ICustomControl.Initialize
        Set Me.Context = Ctx
    End Sub

    Private Sub OnDestroy() _
            Implements CustomControls.ICustomControl.Destroy
    End Sub

    Private Sub OnPaint(ByVal Canvas As CustomControls.Canvas) _
            Implements CustomControls.ICustomControl.Paint
        ' build ElementDescriptor records and call Canvas.RuntimeUICCCanvasAddElement
    End Sub
End Class
```

## 接口

- [ICustomControl](/official/Reference/CustomControls/Framework/ICustomControl) —— 每个具体自定义控件实现的接口：**Initialize**、**Destroy**、**Paint**
- [ICustomForm](/official/Reference/CustomControls/Framework/ICustomForm) —— 自定义窗体类的相应接口

## 回调对象

- [CustomControlContext](/official/Reference/CustomControls/Framework/CustomControlContext) —— 传递给 **Initialize** 的回调对象；**GetSerializer**、**Repaint**、**CreateTimer**、**ChangeFocusedElement**
- [CustomFormContext](/official/Reference/CustomControls/Framework/CustomFormContext) —— 扩展了 **CustomControlContext** 的 **Show** 和 **Close**，传递给自定义窗体的 **Initialize**
- [CustomControlTimer](/official/Reference/CustomControls/Framework/CustomControlTimer) —— 由 **CustomControlContext.CreateTimer** 返回的定时器；**Interval**、**Enabled**、**OnTimer** 事件
- [CustomControlsCollection](/official/Reference/CustomControls/Framework/CustomControlsCollection) —— [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 或任何其他自定义窗体上的 **Controls** 集合

## 绘图基元

- [Canvas](/official/Reference/CustomControls/Framework/Canvas) —— 传递给 **Paint** 的绘图表面；**RuntimeUICCCanvasAddElement**，以及大小和 DPI 访问器
- [SerializeInfo](/official/Reference/CustomControls/Framework/SerializeInfo) —— 由 **CustomControlContext.GetSerializer** 返回的每实例序列化器；**RuntimeUISrzDeserialize**、设计模式标志、所有者句柄、运行时模式