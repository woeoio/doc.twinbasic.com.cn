---
title: 控件属性增强功能
parent: GUI 组件
nav_order: 6
permalink: /Features/GUI-Components/Control-Properties
---

# 控件属性增强功能

## 文本框增强功能

- `TextBox.NumbersOnly` 属性：通过设置底层控件的 `ES_NUMBER` 样式，将输入限制为 0-9。
- `TextBox.TextHint` 属性：在空文本框中设置浅灰色提示文本（`EM_SETCUEBANNER`）。

## 标签增强功能

- `Label.VerticalAlignment` 属性：默认为顶部。
- `Label.LineSpacing` 属性（以缇为单位，默认为 0）
- `Label.Angle` 属性（以度为单位，旋转标签文本）
- `Label.BorderCustom` 属性（具有子选项，可为每侧独立设置边框的大小、填充和颜色）。

## 计时器增强功能

`Timer.Interval` 现在可以设置为任何正的 `Long` 值，而不限于 65,535。