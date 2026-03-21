---
title: 用户控件增强功能
parent: GUI 组件
nav_order: 7
permalink: /Features/GUI-Components/UserControl
---

# 用户控件增强功能

用户控件对象现在提供新功能以更好地处理控件。

## PreKeyEvents 属性

用户控件对象现在提供新的布尔属性 `PreKeyEvents`，启用对应的新事件 `PreKeyDown` 和 `PreKeyUp`。这些允许处理特殊键，如制表符、箭头等，而无需操作系统或 COM 钩子（例如，基于 `IOleInPlaceActiveObject` 接口）。

这些适用于用户控件内的所有子窗口，包括由 `CreateWindowEx` 创建的窗口。

## 访问原始消息数据

您可以在 `PreKeyDown`/`PreKeyUp` 事件处理程序中使用新的 `PreKeyWParam`/`PreKeyLParam` 和 `PreKeyTargetHwnd` 用户控件属性访问原始消息数据。