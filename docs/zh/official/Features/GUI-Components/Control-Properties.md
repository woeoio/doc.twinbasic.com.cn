---
title: "控件属性增强"
parent: GUI Components
nav_order: 6
permalink: /Features/GUI-Components/Control-Properties
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4621da2d-e707-4e0d-becd-01a1bdd83877'
  PropagateID: '4621da2d-e707-4e0d-becd-01a1bdd83877'
  ReservedCode1: '2e7d0342-1cbb-47a6-9bf7-6d96247eb9e2'
  ReservedCode2: '2e7d0342-1cbb-47a6-9bf7-6d96247eb9e2'
---

# 控件属性增强

## TextBox 增强

- `TextBox.NumbersOnly` 属性：通过在底层控件上设置 `ES_NUMBER` 样式，将输入限制为 0-9。
- `TextBox.TextHint` 属性：在空 TextBox 中设置浅灰色提示文本（`EM_SETCUEBANNER`）。

## Label 增强

- `Label.VerticalAlignment` 属性：默认为 Top。
- `Label.LineSpacing` 属性（单位为 twip，默认为 0）
- `Label.Angle` 属性（单位为度，旋转标签文本）
- `Label.BorderCustom` 属性（有子选项可分别为每边设置边框的大小、内边距和颜色）。

## Timer 增强

`Timer.Interval` 现在可以设置为任意正 `Long` 值，而不再局限于 65,535。

## 示例

```vb
TextBox1.TextHint = "Enter your name"
TextBox1.NumbersOnly = True

Label1.Angle = 45
Label1.LineSpacing = 30

Timer1.Interval = 120000  ' 2 minutes; not limited to 65,535 ms
```