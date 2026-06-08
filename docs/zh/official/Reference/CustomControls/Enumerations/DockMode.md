---
title: DockMode
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/DockMode
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e64abd5e-51d6-45fd-bc8c-774b18af85d2'
  PropagateID: 'e64abd5e-51d6-45fd-bc8c-774b18af85d2'
  ReservedCode1: '03099ec6-7131-486e-8119-27d22283bde3'
  ReservedCode2: '03099ec6-7131-486e-8119-27d22283bde3'
---

# DockMode
控件相对于其容器的定位方式——附着到一个边缘、填充整个客户区域或不停靠（由 [**Left**](/official/Reference/CustomControls/#controls) / [**Top**](/official/Reference/CustomControls/#controls) / [**Width**](/official/Reference/CustomControls/#controls) / [**Height**](/official/Reference/CustomControls/#controls) 绝对定位）。由每个具体自定义控件继承的 **Dock** 属性使用。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbDockNone** | 0 | 不停靠。控件的 **Left**、**Top**、**Width** 和 **Height** 直接使用，由控件的 [**Anchors**](/official/Reference/CustomControls/Styles/Anchors) 在容器调整大小时调节。 |
| **tbDockLeft** | 1 | 附着到容器左边缘。保留宽度；高度拉伸到容器客户区域。 |
| **tbDockTop** | 2 | 附着到容器上边缘。保留高度；宽度拉伸。 |
| **tbDockRight** | 3 | 附着到容器右边缘。保留宽度；高度拉伸。 |
| **tbDockBottom** | 4 | 附着到容器底边缘。保留高度；宽度拉伸。 |
| **tbDockFill** | 5 | 填充其他停靠同级声明边缘后的整个剩余客户区域。 |

当同一容器内有多个同级停靠时顺序很重要：每个停靠控件从*在其之前添加的同级*声明其边缘后的剩余客户区域中声明其边缘。因此 **Dock = tbDockFill** 的控件最后添加以继承残余空间：

```vb
Private Sub Form_Load()
    lblHeader.Dock = tbDockTop      ' attached to the top, full width
    lblStatus.Dock = tbDockBottom   ' attached to the bottom, full width
    pnlTree.Dock   = tbDockLeft     ' attached to the left, between header and status
    pnlAside.Dock  = tbDockRight    ' attached to the right, between header and status
    pnlMain.Dock   = tbDockFill     ' fills whatever is left in the middle
End Sub
```

将 **Dock** 设为 **tbDockNone** 以外的任何值会使控件自身的 [**Anchors**](/official/Reference/CustomControls/Styles/Anchors) 无关——停靠完全接管位置和大小。当 **Dock** 重置为 **tbDockNone** 时恢复手动定位。