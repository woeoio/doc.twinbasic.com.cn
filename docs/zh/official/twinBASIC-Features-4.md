## 现代 IDE 功能

虽然 twinBASIC IDE 仍然有很多计划中的工作，但它已经包含了许多在其他现代 IDE 中能让生活更轻松的功能，这些功能在古老的 VBx IDE 中是找不到的，包括：

* 完全可主题化，内置暗色（默认）、亮色和经典（亮色）主题，并有一个基于 CSS 文件的简单继承系统来添加您自己的主题。

* 代码折叠，可以通过 `#Region "名称" ... #End Region` 块定义可折叠的自定义区域。

* 完全自定义的键盘快捷键，覆盖所有命令，能够保存和切换不同的设置。

* 粘性滚动，它在顶部保持上下文行，显示主要的代码部分，如模块、区域、方法、`With` 块等。

* 缩进指南，沿着常见的缩进点画线，帮助正确对齐。

* 粘贴时自动缩进。

* 粘贴为注释。

* .twin 文件中的完全 Unicode 支持，因此您可以在注释和字符串中使用字体的完整 Unicode 范围。

* 内联代码提示，在块的末尾提供注释，说明该块是什么（见图片）。

* 代码迷你地图，在滚动条旁边显示代码结构的图形概览，帮助指导您的滚动。

* 高级信息弹出窗口，它显示 UDT 成员的偏移量、通过 `Len()` 和 `LenB()` 的总大小以及它们的对齐方式；以及接口和类的虚表条目偏移量及其继承链。

* 一个控件和 TLB 文件的类型库查看器，以 twinBASIC 风格的语法而不是 ODL 显示完整内容。

* 括号和方括号的颜色匹配。

* 包含最近修改的方法列表的历史记录面板。

* 带有可选择类别的大纲面板。

* 问题面板，提供所有当前错误和警告的列表（您可以筛选只显示其中之一）。

* 在窗体设计器中，`Visible = False` 的控件会淡化显示以直观地指示这一点。此外，按住 Control 键会显示每个 tab stop 的 tab 索引。

![image](/images/official/3e4464fb80ed1a2411313e50bcc6b938.png)\
[完整大小](/images/official/fafaloneIDEscreenshot1.png)

* 基于新代码结构的项目资源管理器：\
![image](/images/official/787503850744c170c3be174d4dc20af9.png)

经典的基于文件的视图仍然是默认使用的，您可以用一个切换按钮激活新视图：\
![image](/images/official/5afe3cf2634a0d3d112ddce67146b11f.png)


## 包服务器

代码可以分组为包，并发布到在线服务器。您可以有私有包（只有您可见）或公共包（对所有人可见）。

![image](/images/official/414436d91238b08a13911e4e21e8f84f.png)

有关更多信息，请参见以下 Wiki 条目：

[twinBASIC 包是什么](twinBASIC-Packages-What-is-a-package)

[创建 TWINPACK 包](twinBASIC-Packages-Creating-a-TWINPACK-package)

[从 TWINPACK 文件导入包](twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file)

[从 TWINSERV 导入包](twinBASIC-Packages-Importing-a-package-from-TWINSERV)

[更新包](twinBASIC-Packages-Updating-a-package)

## 以 JSON 格式查看窗体和包
项目窗体和包以 JSON 格式数据存储，您可以通过在项目资源管理器中右键单击并选择"View as JSON"来查看。这对包特别有趣，因为它以更容易解析的格式展示了整个代码。

![image](/images/official/74a74f15d6e0e7ebe303aa6f35711cac.png)

![image](/images/official/df7ca92236571514b70e057b44e0758d.png)


---

# 更多功能即将推出！

这个列表涵盖了目前的所有新功能。还有更多计划中的功能，包括内置多线程语法、无符号变量类型、别名的原生支持（目前仅在类型库中支持）、完整继承等等！如果您想看到某个功能，请随时通过[在主 twinBASIC GitHub 仓库中发布 issue](https://github.com/twinbasic/twinbasic/issues) 提出功能请求。