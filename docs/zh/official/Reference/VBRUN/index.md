---
title: VBRUN Package
parent: Packages
nav_order: 3
permalink: /tB/Packages/VBRUN/
---

# VBRUN Package

VBRUN内置包汇集了twinBASIC的运行时类型：运行时传递给控件和事件处理器的环境、异步和错误处理对象；在**UserControl**和数据源类上公开的集合包装器；剪贴板/OLE拖放容器；**UserControl**保存和加载使用的**PropertyBag**持久化助手；以及经典VB6窗体、内部控件和运行时服务用于表示选项值的枚举。

## 类

- [AmbientProperties](/official/Reference/VBRUN/AmbientProperties/) -- 只读对象，描述宿主容器的外观、区域设置以及嵌入控件的设计/运行时模式
- [AsyncProperty](/official/Reference/VBRUN/AsyncProperty/) -- 事件参数对象，标识异步**UserControl.AsyncRead**请求并传递结果值
- [ContainedControls](/official/Reference/VBRUN/ContainedControls/) -- 消费者放置在控件容器**UserControl**内部的控件的只读集合
- [DataMembers](/official/Reference/VBRUN/DataMembers/) -- 在设计时向数据绑定消费者公布的命名数据源成员集合
- [DataObject](/official/Reference/VBRUN/DataObject/) -- 剪贴板/OLE拖放容器，以多种剪贴板格式保存一个有效负载
- [ErrorCallstack](/official/Reference/VBRUN/ErrorCallstack/) -- 引发运行时错误时调用堆栈的快照，以[**ErrorStackFrame**](/official/Reference/VBRUN/ErrorStackFrame/)项序列的形式公开
- [ErrorContext](/official/Reference/VBRUN/ErrorContext/) -- 结构化错误对象——编号、描述、来源、帮助、OS错误、状态和调用堆栈
- [ErrorStackFrame](/official/Reference/VBRUN/ErrorStackFrame/) -- [**ErrorCallstack**](/official/Reference/VBRUN/ErrorCallstack/)上的单个过程——其项目、模块和过程名称
- [Hyperlink](/official/Reference/VBRUN/Hyperlink/) -- 浏览器式导航的运行时桥梁；控件调用**UserControl.Hyperlink.NavigateTo**请求宿主加载目标
- [ParentControls](/official/Reference/VBRUN/ParentControls/) -- **UserControl**在其容器中的同级控件集合，可选择包装在宿主**Extender**中
- [PropertyBag](/official/Reference/VBRUN/PropertyBag/) -- 可创建的键/值存储，用于持久化对象状态——由**UserControl**保存/加载使用，可序列化为单个字节数组

## 模块

- [Constants](/official/Reference/VBRUN/Constants/) -- 经典VB6窗体、内部控件和运行时服务使用的枚举——颜色、鼠标指针、键码、拖放状态、OLE容器行为、打印机设置值……