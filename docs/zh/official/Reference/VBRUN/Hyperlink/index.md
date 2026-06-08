---
title: Hyperlink
parent: VBRUN Package
nav_order: 16
permalink: /tB/Packages/VBRUN/Hyperlink/
---

# Hyperlink 类

**Hyperlink**对象允许控件或窗体请求其容器导航到目标文档，就像在浏览器中点击链接一样。它通过宿主的**Hyperlink**属性从控件代码中使用——例如**UserControl.Hyperlink**——在参与浏览器式导航的容器（Internet Explorer、Office绑定器和其他少数支持超链接的宿主）中工作。当宿主不支持超链接导航时，运行时回退到启动目标的系统默认处理器。

``vb
Private Sub HelpButton_Click()
    UserControl.Hyperlink.NavigateTo "https://docs.twinbasic.com/"
End Sub
``

## 成员

### GoBack

请求容器在其历史列表中后退一步，如同用户按下了浏览器的**Back**按钮。

语法：*object*.**GoBack**

*object*
: *必需* 求值为**Hyperlink**对象的对象表达式。

如果没有前一条目，或宿主不维护历史列表，则调用无效（或引发错误，取决于宿主）。

### GoForward

请求容器在其历史列表中前进一步，如同用户按下了浏览器的**Forward**按钮。

语法：*object*.**GoForward**

*object*
: *必需* 求值为**Hyperlink**对象的对象表达式。

如果没有下一条目，或宿主不维护历史列表，则调用无效（或引发错误，取决于宿主）。

### NavigateTo

请求容器导航到目标文档。

语法：*object*.**NavigateTo** *Target* [ **,** *Location* [ **,** *FrameName* ] ]

*object*
: *必需* 求值为**Hyperlink**对象的对象表达式。

*Target*
: *必需* 给出目标的**String**——URL、UNC路径或本地文件路径。容器负责解析字符串并将其分派到正确的处理器。

*Location*
: *可选* 命名*Target*内锚点或书签的**String**——例如HTML URL中#后的片段——容器在加载文档后应滚动到该位置。

*FrameName*
: *可选* 命名HTML框架集中应接收导航的框架的**String**，代替顶级窗口。不支持HTML框架的宿主将忽略此参数。

如果宿主实现浏览器式导航，新目标将添加到历史列表，使后续的[**GoBack**](#goback)和[**GoForward**](#goforward)调用按预期工作。