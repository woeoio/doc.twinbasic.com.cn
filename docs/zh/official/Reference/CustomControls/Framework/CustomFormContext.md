---
title: CustomFormContext
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/CustomFormContext
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8d221999-ab78-475a-a980-a2a395eddbb1'
  PropagateID: '8d221999-ab78-475a-a980-a2a395eddbb1'
  ReservedCode1: '57dc31ee-627b-452a-9820-90b539b40e06'
  ReservedCode2: '57dc31ee-627b-452a-9820-90b539b40e06'
---

# CustomFormContext 类
[**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext) 的窗体类对应类。扩展了基上下文的 **Show** 和 **Close**——顶级窗体所需而嵌入控件不需要的操作。

[**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 作为 [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext) 接收其上下文（因为它实现了 [**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl)），并在内部转换为 **CustomFormContext**，以便从自己的 **Show** 方法调用 **Show**，从 **Close** 方法调用 **Close**。

```vb
Private Sub OnInitialize(ByVal Ctx As CustomControls.CustomControlContext) _
        Implements CustomControls.ICustomControl.Initialize

    Set Me.ControlContext = CType(Of CustomFormContext)(Ctx)
End Sub
```

## 继承

**CustomFormContext** 包含 [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext) 的每个成员——[**ChangeFocusedElement**](/official/Reference/CustomControls/Framework/CustomControlContext#changefocusedelement)、[**CreateTimer**](/official/Reference/CustomControls/Framework/CustomControlContext#createtimer)、[**GetSerializer**](/official/Reference/CustomControls/Framework/CustomControlContext#getserializer) 和 [**Repaint**](/official/Reference/CustomControls/Framework/CustomControlContext#repaint)——并添加以下两个窗体专用成员。

## 方法

### Close

关闭底层窗口。等同于用户点击标题栏关闭按钮。应用程序代码通常调用 [**WaynesForm.Close**](/official/Reference/CustomControls/WaynesForm/#close)，后者再调用此方法。

语法：*object*.**Close** ( )

### Show

显示底层窗口。应用程序代码通常调用 [**WaynesForm.Show**](/official/Reference/CustomControls/WaynesForm/#show)，后者再调用此方法。

语法：*object*.**Show** ( )