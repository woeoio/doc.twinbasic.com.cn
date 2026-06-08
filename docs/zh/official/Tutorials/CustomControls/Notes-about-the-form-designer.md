---
title: "关于窗体设计器的说明"
parent: CustomControls
nav_order: 5
permalink: /Tutorials/CustomControls/Form Designer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0c9d33eb-f0c6-4922-b6bb-07e7f72d3bf7'
  PropagateID: '0c9d33eb-f0c6-4922-b6bb-07e7f72d3bf7'
  ReservedCode1: 'e1888ff2-ecc8-4c7b-9609-f1134e8d44c7'
  ReservedCode2: 'e1888ff2-ecc8-4c7b-9609-f1134e8d44c7'
---

# 关于窗体设计器的说明

对于窗体设计器中控件的绘制，CustomControl实例会被实例化，然后在绘制完成后立即释放。设计模式标志暴露在框架的[`SerializeInfo.RuntimeUISrzIsDesignMode`](/official/Reference/CustomControls/Framework/SerializeInfo#runtimeuisrzisdesignmode)上——希望仅在设计器内渲染占位符的控件（如[`WaynesTimer`](/official/Reference/CustomControls/WaynesTimer)绘制其🕑字形的方式）在[`Initialize`](/official/Reference/CustomControls/Framework/ICustomControl#initialize)期间检查此标志。

## 另见

- [CustomControls包参考](/official/Reference/CustomControls/) —— 框架和内置 `Waynes…` 控件的概述