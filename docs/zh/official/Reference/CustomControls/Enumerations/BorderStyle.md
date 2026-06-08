---
title: BorderStyle
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/BorderStyle
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '75f4e626-786e-4e36-97b9-77e49add65bf'
  PropagateID: '75f4e626-786e-4e36-97b9-77e49add65bf'
  ReservedCode1: 'c360db84-7d94-4017-8338-89cbcc582acb'
  ReservedCode2: 'c360db84-7d94-4017-8338-89cbcc582acb'
---

# BorderStyle
[**WaynesForm**](/official/Reference/CustomControls/WaynesForm/) 窗口使用的 Win32 框架样式。决定窗口是否有粗或细边框、是否可以通过拖动边缘调整大小，以及是显示普通标题栏还是较小的工具窗口标题栏。由 [**WindowsFormOptions.BorderStyle**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#borderstyle) 使用。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbNone** | 0 | 无边框——窗体为无边框、无标题的矩形。 |
| **tbFixedSingle** | 1 | 细单线边框；运行时大小固定。 |
| **tbFixedSizable** | 2 | 带普通标题栏的标准可调大小边框。新构造的 [**WindowsFormOptions**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions) 的默认值。 |
| **tbFixedDialog** | 3 | 对话框框架边框；大小固定，系统菜单只提供 **移动** / **关闭**。 |
| **tbFixedToolWindow** | 4 | 带较小标题栏的工具窗口边框；大小固定。 |
| **tbSizableToolWindow** | 5 | 带较小标题栏的工具窗口边框；窗口可调大小。 |

大多边框样式不能与 **MinimizeButton** 或 **MaximizeButton** 组合——只有 **tbFixedSizable** 显示完整的大小控件。在不包含这些按钮的窗口样式上将 [**MinimizeButton**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#minimizebutton) 或 [**MaximizeButton**](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#maximizebutton) 设为 **True** 无效。