---
title: Anchors
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Anchors
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '6b56c2be-5dc8-48c5-986d-37bdcdb5c547'
  PropagateID: '6b56c2be-5dc8-48c5-986d-37bdcdb5c547'
  ReservedCode1: 'a5d2ef89-6f08-47c5-980d-3977bca7ba59'
  ReservedCode2: 'a5d2ef89-6f08-47c5-980d-3977bca7ba59'
---

# Anchors 类
决定容器调整大小时控件的哪些边附着到其父容器。例如，**Left** 和 **Right** 都设为 **True** 的控件保持其左右边缘与容器边缘等距，容器增长时水平拉伸。控件通过其继承的 **Anchors** 属性接收此对象。

默认为 **Left**=**True**、**Top**=**True**、**Right**=**False**、**Bottom**=**False**——控件保持与容器左上角相同的偏移且不调整大小。要使控件在窗体调整大小时填充容器底部，将其锚定到 **Left**、**Right** 和 **Bottom**。

```vb
With txtNotes.Anchors
    .Left = True
    .Top = True
    .Right = True
    .Bottom = True
End With
```

## 属性

### Bottom

当 **True** 时，控件底边与容器底边保持等距。**Boolean**，默认 **False**。

### Left

当 **True** 时，控件左边与容器左边保持等距。**Boolean**，默认 **True**。

### Right

当 **True** 时，控件右边与容器右边保持等距。**Boolean**，默认 **False**。

### Top

当 **True** 时，控件顶边与容器顶边保持等距。**Boolean**，默认 **True**。

## 事件

### OnChanged

四个锚定标志中任一个被赋值时触发。承载控件监听此事件并重新应用停靠布局。应用程序代码通常不直接订阅。