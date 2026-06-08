---
title: SerializeInfo
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/SerializeInfo
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '607d6e46-9027-4907-9700-ab1e8afacddb'
  PropagateID: '607d6e46-9027-4907-9700-ab1e8afacddb'
  ReservedCode1: 'f4a7a59c-3e74-4b01-bf69-d50b48f665c7'
  ReservedCode2: 'f4a7a59c-3e74-4b01-bf69-d50b48f665c7'
---

# SerializeInfo 类型（UDT）
自定义控件的每实例序列化器，由 [**CustomControlContext.GetSerializer**](/official/Reference/CustomControls/Framework/CustomControlContext#getserializer) 返回。主入口是 [**RuntimeUISrzDeserialize**](#runtimeuisrzdeserialize)——从控件的 [**Initialize**](/official/Reference/CustomControls/Framework/ICustomControl#initialize) 调用，以加载保存到窗体序列化数据中的设计器属性值。其余成员暴露框架状态——设计模式标志、运行时/报告模式、所有者窗口句柄——控件在初始化时可能需要。

```vb
Private Sub OnInitialize(ByVal Ctx As CustomControls.CustomControlContext) _
        Implements CustomControls.ICustomControl.Initialize

    With Ctx.GetSerializer
        If Not .RuntimeUISrzDeserialize(Me, False) Then
            InitializeDefaultValues
        End If

        Me.IsDesignMode = .RuntimeUISrzIsDesignMode()
    End With

    Set Me.ControlContext = Ctx
End Sub
```

## 方法

### RuntimeUISrzDeserialize

将此控件实例的序列化属性值加载到 *Object* 中。如果存在序列化数据并已应用则返回 **True**，如果未找到数据则返回 **False**——此时控件应应用自己的默认值。

语法：*SerializeInfo*.**RuntimeUISrzDeserialize** ( *Object*, *UseOuterOwner* ) **As Boolean**

*Object*
: *必需* 应填充属性的自定义控件实例。在 **Initialize** 实现内部，这是 **Me**。

*UseOuterOwner*
: *必需* 高级用途的 **Boolean** 标志；正常情况下传 **False**。

### RuntimeUISrzGetFormHWND

返回父窗体底层 Win32 窗口的 **HWND**。

语法：*SerializeInfo*.**RuntimeUISrzGetFormHWND** ( ) **As LongPtr**

### RuntimeUISrzGetOrientationHint

返回指示父窗体方向提示的值。**Long**。

语法：*SerializeInfo*.**RuntimeUISrzGetOrientationHint** ( ) **As Long**

### RuntimeUISrzGetRootCLSID

返回拥有此控件的窗体类的 CLSID，以 **String** 形式。

语法：*SerializeInfo*.**RuntimeUISrzGetRootCLSID** ( ) **As String**

### RuntimeUISrzGetRootClassDispatch

返回拥有此控件的窗体类实例，类型为 **Object**。

语法：*SerializeInfo*.**RuntimeUISrzGetRootClassDispatch** ( ) **As Object**

### RuntimeUISrzIsDesignMode

如果控件在设计时（窗体设计器内部）被创建而非运行时，则返回 **True**。希望仅在设计时渲染占位符的控件——如 [**WaynesTimer**](/official/Reference/CustomControls/WaynesTimer)，它只在 **IsDesignMode** 为 **True** 时绘制其 🕑 图标——在 **Initialize** 期间读取此标志。

语法：*SerializeInfo*.**RuntimeUISrzIsDesignMode** ( ) **As Boolean**

### RuntimeUISrzIsReportMode

如果控件作为报告渲染过程的一部分被创建，则返回 **True**。

语法：*SerializeInfo*.**RuntimeUISrzIsReportMode** ( ) **As Boolean**

### RuntimeUISrzIsRuntimeAdded

如果控件是在运行时添加的（通过 [**CustomControlsCollection.Add**](/official/Reference/CustomControls/Framework/CustomControlsCollection#add)）而非在窗体设计器中放置的，则返回 **True**。

语法：*SerializeInfo*.**RuntimeUISrzIsRuntimeAdded** ( ) **As Boolean**