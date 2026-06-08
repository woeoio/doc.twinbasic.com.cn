---
title: WaynesFrame
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesFrame
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ba1cd5a9-5bd1-47bd-bf4a-fde0e4525f5d'
  PropagateID: 'ba1cd5a9-5bd1-47bd-bf4a-fde0e4525f5d'
  ReservedCode1: '8a3d766f-c369-4781-86aa-45a1a643a8c1'
  ReservedCode2: '8a3d766f-c369-4781-86aa-45a1a643a8c1'
---

# WaynesFrame 类
矩形容器控件，其整个区域以可配置的 [**BackgroundFill**](#backgroundfill) 绘制。用于在 [**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 上对其他控件进行分组，拥有与其他自定义控件相同的布局/大小成员。

默认填充为纯中灰色（[**WAYNESCOLOR_GREY**](#) —— `&H808080`）；通过访问 **Fill.ColorPoints** 集合更改。

```vb
Private Sub Form_Load()
    Frame1.BackgroundFill.ColorPoints.SetSolidColor vbWhite
End Sub
```

框架非常适合作为 [**Dock**](/official/Reference/CustomControls/Enumerations/DockMode) 定位子控件的容器。将框架自身的 **Dock** 设为 **tbDockFill** 使其占据窗体主体，然后将子控件停靠到 **tbDockTop** / **tbDockLeft** / **tbDockFill** 等——停靠计算遍历容器树，因此子控件停靠到框架的客户区域而非窗体。子控件添加的顺序仍决定它们先占据哪些边缘。

## 属性

### Anchors

调整大小时控件的哪些边附着到其容器。[**Anchors**](/official/Reference/CustomControls/Styles/Anchors)。继承。

### BackgroundFill

绘制框架整个客户区域的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。

### Dock

控件在其容器内的停靠方式。[**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) 的成员。继承。默认：**tbDockNone**。

### Height

控件的高度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Left

控件左边缘距其容器的水平偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Name

控件在其父窗体上的唯一设计时名称。**String**。继承。

### Top

控件上边缘距其容器的垂直偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Visible

控件当前是否显示。**Boolean**。继承。默认：**True**。

### Width

控件的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。