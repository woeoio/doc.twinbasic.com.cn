# VBCCR (VB6 ActiveX 通用控件替代库)

VBCCR 是 Visual Basic 6 中 Microsoft 通用控件 (MSComCtl) 的全面替代品。该库在保持与原始控件兼容的同时，提供了增强的功能和改进的视觉外观。作者：[Kr00l](https://github.com/Kr00l)

**本套控件库最重要主要是解决了在原生vb6窗体控件上显示unicode字符的问题。从此再也不怕乱码了！！！**

本文档由 [vb6.pro](https://vb6.pro) 站长邓伟整理，转载请注明出处。文档使用了 vscode + copilot ai 生成制作。

## 概述

VBCCR 库包含以下控件：

1. 动画控件 (VBCCRAnimation)
2. 复选框控件 (VBCCRCheck)
3. 组合框控件 (VBCCRComboBox)
4. 命令按钮控件 (VBCCRCmdBtn)
5. 命令链接控件 (VBCCRCmdLink)
6. 通用对话框控件 (VBCCRCommonDialog)
7. 工具条控件 (VBCCRCoolBar)
8. 日期时间选择器控件 (VBCCRDTPicker)
9. 驱动器列表控件 (VBCCRDriveList)
10. 驱动器路径控件 (VBCCRDrivePath)
11. 文件路径控件 (VBCCRFilePath)
12. 字体组合框控件 (VBCCRFontCombo)
13. 框架控件 (VBCCRFrame)
14. 热键控件 (VBCCRHotKey)
<!-- 15. 图像控件 (VBCCRImage) -->
16. 图像组合框控件 (VBCCRImageCombo)
17. 图像列表控件 (VBCCRImageList)
18. IP地址控件 (VBCCRIPAddress)
19. 标签控件 (VBCCRLabel)
20. 线条控件 (VBCCRLine)
21. 链接标签控件 (VBCCRLinkLabel)
22. 列表框控件 (VBCCRListBox)
23. 列表视图控件 (VBCCRListView)
24. 多媒体控件 (VBCCRMCIWnd)
25. 月历控件 (VBCCRMonthCalendar)
26. 月视图控件 (VBCCRMonthView)
27. 选项控件 (VBCCROption)
28. 选项按钮控件 (VBCCROptionButton)
29. 分页控件 (VBCCRPager)
30. 图片框控件 (VBCCRPicture)
31. 进度条控件 (VBCCRProgressBar)
32. 富文本框控件 (VBCCRRichTextBox)
33. 滚动条控件 (VBCCRScrollBar)
34. 形状控件 (VBCCRShape)
35. 滑块控件 (VBCCRSlider)
36. 数字调节框控件 (VBCCRSpinBox)
37. 状态栏控件 (VBCCRStatusBar)
38. 系统信息控件 (VBCCRSysInfo)
39. 选项卡控件 (VBCCRTabStrip)
40. 文本框控件 (VBCCRTextBox)
41. 定时器控件 (VBCCRTimer)
42. 工具栏控件 (VBCCRToolBar)
43. 树形视图控件 (VBCCRTreeView)
44. 上下调节控件 (VBCCRUpDown)
45. 虚拟组合框控件 (VBCCRVirtualCombo)
46. 虚拟列表框控件 (VBCCRVListBox)
<!-- 47. 网页浏览器控件 (VBCCRWebBrowser) -->
48. 窗口化标签控件 (VBCCRWindowedLabel)

## 主要特性

- 现代化的视觉外观
- 比原始 MSComCtl 更强大的功能
- 与 VB6 完全兼容
- 更好的性能
- 更优的内存管理
- 扩展的自定义选项

## 文档结构

每个控件都有其专门的文档页面，包含：
- 详细的属性和方法说明
- 事件文档
- 代码示例
- 常见用例

## 快速入门

要在您的 VB6 项目中开始使用 VBCCR 控件：

1. 从 [本站直接](https://gitcode.com/woeoio/vb6.pro/releases/download/vbccr/VBCCR18.OCX.zip) 下载已经编译好的 VBCCR 控件
2. 或者：从 [GitHub 仓库](https://github.com/Kr00l/VBCCR) 下载 VBCCR 库，自行编译
3. 在您的系统中注册 OCX 文件
4. 在您的 VB6 项目中添加对 VBCCR 控件的引用
5. 开始在您的窗体中使用这些增强的控件

<!-- ## 控件文档

- [动画控件](./animation.md)
- [复选框控件](./checkbox.md)
- [组合框控件](./combobox.md)
- [命令按钮控件](./commandbutton.md)
- [命令链接控件](./commandlink.md)
- [通用对话框控件](./commondialog.md)
- [工具条控件](./coolbar.md)
- [日期时间选择器控件](./datetimepicker.md)
- [驱动器列表控件](./drivelist.md)
- [驱动器路径控件](./drivepath.md)
- [文件路径控件](./filepath.md)
- [字体组合框控件](./fontcombo.md)
- [框架控件](./frame.md)
- [热键控件](./hotkey.md)
- [图像控件](./image.md)
- [图像组合框控件](./imagecombo.md)
- [图像列表控件](./imagelist.md)
- [IP地址控件](./ipaddress.md)
- [标签控件](./label.md)
- [线条控件](./line.md)
- [链接标签控件](./linklabel.md)
- [列表框控件](./listbox.md)
- [列表视图控件](./listview.md)
- [多媒体控件](./mciwnd.md)
- [月历控件](./monthcalendar.md)
- [月视图控件](./monthview.md)
- [选项控件](./option.md)
- [选项按钮控件](./optionbutton.md)
- [分页控件](./pager.md)
- [图片框控件](./picture.md)
- [进度条控件](./progressbar.md)
- [富文本框控件](./richtextbox.md)
- [滚动条控件](./scrollbar.md)
- [形状控件](./shape.md)
- [滑块控件](./slider.md)
- [数字调节框控件](./spinbox.md)
- [状态栏控件](./statusbar.md)
- [系统信息控件](./sysinfo.md)
- [选项卡控件](./tabstrip.md)
- [文本框控件](./textbox.md)
- [定时器控件](./timer.md)
- [工具栏控件](./toolbar.md)
- [树形视图控件](./treeview.md)
- [上下调节控件](./updown.md)
- [虚拟组合框控件](./virtualcombo.md)
- [虚拟列表框控件](./vlistbox.md)
- [网页浏览器控件](./webbrowser.md)
- [窗口化标签控件](./windowedlabel.md) -->

## 官方文档

你也可以先阅读一次作者写的[官方文档](./readme.md)内容，然后再查看ai写的每一个控件详解。

## 附加资源

- [原始 VBForums 讨论帖](https://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls-(Replacement-of-the-MS-common-controls))
- [源代码仓库](https://github.com/Kr00l/VBCCR)
- [历史讨论帖](https://www.vbforums.com/showthread.php?698563-CommonControls-(Replacement-of-the-MS-common-controls))
