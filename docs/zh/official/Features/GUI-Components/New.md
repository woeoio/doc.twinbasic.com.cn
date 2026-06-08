---
title: "新控件"
parent: GUI Components
nav_order: 5
permalink: /Features/GUI-Components/New
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '90a34c76-03dd-40dd-889d-64a9e6504c4f'
  PropagateID: '90a34c76-03dd-40dd-889d-64a9e6504c4f'
  ReservedCode1: 'ba74e1f8-1621-492d-93d5-754a1667faf0'
  ReservedCode2: 'ba74e1f8-1621-492d-93d5-754a1667faf0'
---

# 新控件

twinBASIC 引入了几种新控件来增强你的应用程序。

## QR Code 控件

![image](../Images/54ed49d8-b434-45e3-9e63-a1fe75cdf814.png)

使用原生控件轻松显示自定义 QR 码。

## Multiframe 控件

![image](../Images/4ad9c774-b31d-47d3-9963-6d99ac4f37bb.png)

此控件允许你创建多个帧，其大小以百分比指定，这样当控件调整大小时，帧内的内容按比例扩展。有关详细信息和视频演示，Mike Wolfe 的 twinBASIC 周更新在[发布时做了介绍](https://nolongerset.com/twinbasic-update-april-29-2025/#experimental-multi-frame-control)。

结合锚定和停靠，这允许设计高度功能化和复杂的布局，无需编写任何处理大小调整的代码。

## CheckMark 控件

![image](../Images/5fc60b7b-4f54-445c-8504-451019b7ec55.png)

主要面向报表但在窗体和 UserControl 中也可用，CheckMark 控件提供了可缩放的勾选组件，而普通 CheckBox 控件中此组件固定为单一尺寸。