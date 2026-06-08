---
title: Padding
parent: Styles
permalink: /tB/Packages/CustomControls/Styles/Padding
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0f43955b-7764-477f-bc4b-8b88e260c8d4'
  PropagateID: '0f43955b-7764-477f-bc4b-8b88e260c8d4'
  ReservedCode1: 'a6af8603-9060-4c6d-8e04-d088269d41e3'
  ReservedCode2: 'a6af8603-9060-4c6d-8e04-d088269d41e3'
---

# Padding 类
逐侧内边距（像素），应用于 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 内文本周围。通过 [**TextRendering.Padding**](/official/Reference/CustomControls/Styles/TextRendering#padding) 访问。带内边距的区域是文本 [**Alignment**](/official/Reference/CustomControls/Styles/TextRendering#alignment) 应用的对象——添加 5 像素左侧内边距将左对齐文本向右移动 5 像素，并在左边缘缩小可用区域 5 像素。

```vb
With txtNotes.NormalState.TextRendering.Padding
    .Left = 5
    .Right = 5
End With
```

## 属性

### Bottom

底边插入的内边距（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：0。

### Left

左边插入的内边距（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：0。

### Right

右边插入的内边距（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：0。

### Top

顶边插入的内边距（像素）。[**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount)。默认：0。

## 事件

### OnChanged

四个内边距值中任一个被赋值时触发。包含的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 随之重新触发自身的 **OnChanged**，进而触发承载控件的重绘。