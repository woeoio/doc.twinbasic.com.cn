---
title: CustomControlContext
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/CustomControlContext
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7f29fbd8-cd21-4ef9-afb2-b04e2ea6d962'
  PropagateID: '7f29fbd8-cd21-4ef9-afb2-b04e2ea6d962'
  ReservedCode1: '95f6b70e-28a8-4e3c-a984-039dd5d18a0c'
  ReservedCode2: '95f6b70e-28a8-4e3c-a984-039dd5d18a0c'
---

# CustomControlContext 类
传递给自定义控件 [**Initialize**](/official/Reference/CustomControls/Framework/ICustomControl#initialize) 的回调对象。保持回到框架的连接——用于反序列化设计器设置的属性值、请求重绘、创建定时器以及在控件绘制的元素之间移动键盘焦点。

自定义控件将 **CustomControlContext** 存储在私有字段中（通常名为 **ControlContext**），以便在 **Initialize** 返回后的任何时刻回调框架。窗体类对应类 [**CustomFormContext**](/official/Reference/CustomControls/Framework/CustomFormContext) 扩展了 **Show** 和 **Close**。

```vb
Private Sub OnInitialize(ByVal Ctx As CustomControls.CustomControlContext) _
        Implements CustomControls.ICustomControl.Initialize

    ' Load any serialized property values
    If Not Ctx.GetSerializer.RuntimeUISrzDeserialize(Me, False) Then
        InitializeDefaultValues
    End If

    ' Remember the context for later
    Set Me.ControlContext = Ctx
End Sub
```

## 方法

### ChangeFocusedElement

请求框架将键盘焦点移至特定 `ElementTabIndex` 值，如同用户按 **TAB** 直至到达该位置。[**WaynesGrid**](/official/Reference/CustomControls/WaynesGrid/) 在以编程方式选择单元格时使用此方法——网格更改其 **SelectedCellX** / **SelectedCellY** 然后调用此方法，使窗体级焦点跟踪与之匹配。

语法：*object*.**ChangeFocusedElement** *ElementTabIndex*

*ElementTabIndex*
: *必需* **Long**，匹配最近一次绘制过程中添加到画布的元素的 **ElementTabIndex**。

### CreateTimer

返回一个新的 [**CustomControlTimer**](/official/Reference/CustomControls/Framework/CustomControlTimer)，绑定到此控件的生命周期。定时器创建时为**禁用**状态；调用者设置 [**Interval**](/official/Reference/CustomControls/Framework/CustomControlTimer#interval)，订阅定时器的 **OnTimer** 事件，并将 [**Enabled**](/official/Reference/CustomControls/Framework/CustomControlTimer#enabled) 设为 **True** 以启动。

语法：*object*.**CreateTimer** ( ) **As stdole.IUnknown**

框架以 **stdole.IUnknown** 类型返回定时器；用 `CType(Of CustomControlTimer)(…)` 转换以获取强类型引用。[**WaynesTimer**](/official/Reference/CustomControls/WaynesTimer) 和 [**WaynesSlider**](/official/Reference/CustomControls/WaynesSlider/) 都使用此模式。

### GetSerializer

返回此控件实例的 [**SerializeInfo**](/official/Reference/CustomControls/Framework/SerializeInfo) 句柄。序列化器暴露反序列化入口点和运行时/设计时模式标志。

语法：*object*.**GetSerializer** ( ) **As SerializeInfo**

### Repaint

通知框架控件外观已更改，画布应在下次机会时重绘。框架最终回调 [**ICustomControl.Paint**](/official/Reference/CustomControls/Framework/ICustomControl#paint)；快速连续多次调用 **Repaint** 最多只产生一次绘制。

语法：*object*.**Repaint** ( )

每个具体 `Waynes…` 控件都挂钩其状态和样式子对象上的 **OnChanged** 事件，并从处理程序中调用 **Repaint**——因此运行时赋值如 `btn.NormalState.BackgroundFill.ColorPoints.SetSolidColor vbBlue` 会触发自动重绘。