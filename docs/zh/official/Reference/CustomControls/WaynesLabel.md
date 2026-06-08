---
title: WaynesLabel
parent: CustomControls Package
permalink: /tB/Packages/CustomControls/WaynesLabel
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '49cc13c4-53e4-4eec-bb84-acda94b77559'
  PropagateID: '49cc13c4-53e4-4eec-bb84-acda94b77559'
  ReservedCode1: '1a760e4d-0f94-4813-96e0-17a1e46146bd'
  ReservedCode2: '1a760e4d-0f94-4813-96e0-17a1e46146bd'
---

# WaynesLabel 类
静态文本显示控件。使用配置的 [**TextRendering**](#textrendering) 在 [**BackgroundFill**](#backgroundfill) 之上于其矩形内绘制 [**Caption**](#caption) 字符串。标签没有交互状态——无论鼠标是否悬停，外观都相同。

```vb
Private Sub Form_Load()
    Label1.Caption = "Hello, world"
    With Label1.TextRendering
        .Font.Size = 14
        .Font.Weight = tbBold
        .Alignment = tbAlignMiddleCenter
        .Fill.ColorPoints.SetSolidColor vbWhite
    End With
    Label1.BackgroundFill.ColorPoints.SetSolidColor vbBlue
End Sub
```

由于 [**BackgroundFill**](#backgroundfill) 和 [**TextRendering**](#textrendering) 接受与其他控件相同的 [**Fill**](/official/Reference/CustomControls/Styles/Fill) 渐变和 [**Outlines**](/official/Reference/CustomControls/Styles/TextRendering#outlines) 数组，标签可以作为横幅、标题条或状态面板，而无需在窗体上放置更重的控件。将 [**TextRendering.OverflowMode**](/official/Reference/CustomControls/Styles/TextRendering#overflowmode) 设为 **tbShrinkToFit** 可在动态设置的标题宽于标签时仍保持可见：

```vb
With Label1.TextRendering
    .Font.Size = 24
    .Font.Weight = tbBold
    .Alignment = tbAlignMiddleCenter
    .OverflowMode = tbShrinkToFit
    .Fill.SetSimplePattern vbWhite, &HCCCCFF, _
            Pattern:=tbGradientNorthToSouth
End With
Label1.BackgroundFill.SetSimplePattern &H014C99, &H99CCFF, _
        Pattern:=tbGradientNorthWestToSouthEast
```

## 属性

### Anchors

调整大小时控件的哪些边附着到其容器。[**Anchors**](/official/Reference/CustomControls/Styles/Anchors)。继承。

### BackgroundFill

绘制标签整个客户区域的 [**Fill**](/official/Reference/CustomControls/Styles/Fill)。

### Caption

标签上显示的文本。**String**。默认：`"Label"`。

语法：*object*.**Caption** [ = *string* ]

### Dock

控件在其容器内的停靠方式。[**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) 的成员。继承。

### Height

控件的高度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Left

控件左边缘距其容器的水平偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Name

控件在其父窗体上的唯一设计时名称。**String**。继承。

### TextRendering

控制 [**Caption**](#caption) 绘制方式的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering)——字体、内边距、填充、轮廓、对齐和溢出。

### Top

控件上边缘距其容器的垂直偏移量（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。

### Visible

控件当前是否显示。**Boolean**。继承。默认：**True**。

### Width

控件的宽度（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。继承。