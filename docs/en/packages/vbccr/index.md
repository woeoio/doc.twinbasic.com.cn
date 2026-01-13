# VB6 CommonControls Replacement

**VBCCR ActiveX**

VBCCR is a comprehensive replacement for the Microsoft Common Controls (MSComCtl) in Visual Basic 6. This library provides enhanced functionality and improved visual appearance while maintaining compatibility with the original controls.
Author: [Kr00l](https://github.com/Kr00l)

**The most important feature of this control library is that it solves the problem of displaying Unicode characters in native VB6 form controls. Say goodbye to garbled text!**

This document was compiled by woeoio, the webmaster of [vb6.pro](https://vb6.pro). Please credit the source if you share or reproduce this content. The documentation was created using VSCode and Copilot AI.

::: tip Now available in Twinbasic package
VBCCR now provides direct references in Twinbasic's package manager, eliminating the need for external DLL files.
:::

## Overview

The VBCCR library includes the following controls:

1. Animation Control (VBCCRAnimation)
2. Checkbox Control (VBCCRCheck)
3. ComboBox Control (VBCCRComboBox)
4. CommandButton Control (VBCCRCmdBtn)
5. CommandLink Control (VBCCRCmdLink)
6. CommonDialog Control (VBCCRCommonDialog)
7. CoolBar Control (VBCCRCoolBar)
8. DateTimePicker Control (VBCCRDTPicker)
9. DriveList Control (VBCCRDriveList)
10. DrivePath Control (VBCCRDrivePath)
11. FilePath Control (VBCCRFilePath)
12. FontCombo Control (VBCCRFontCombo)
13. Frame Control (VBCCRFrame)
14. HotKey Control (VBCCRHotKey)
15. ImageCombo Control (VBCCRImageCombo)
16. ImageList Control (VBCCRImageList)
17. IPAddress Control (VBCCRIPAddress)
18. Label Control (VBCCRLabel)
19. Line Control (VBCCRLine)
20. LinkLabel Control (VBCCRLinkLabel)
21. ListBox Control (VBCCRListBox)
22. ListView Control (VBCCRListView)
23. MCIWnd Control (VBCCRMCIWnd)
24. MonthCalendar Control (VBCCRMonthCalendar)
25. MonthView Control (VBCCRMonthView)
26. Option Control (VBCCROption)
27. OptionButton Control (VBCCROptionButton)
28. Pager Control (VBCCRPager)
29. Picture Control (VBCCRPicture)
30. ProgressBar Control (VBCCRProgressBar)
31. RichTextBox Control (VBCCRRichTextBox)
32. ScrollBar Control (VBCCRScrollBar)
33. Shape Control (VBCCRShape)
34. Slider Control (VBCCRSlider)
35. SpinBox Control (VBCCRSpinBox)
36. StatusBar Control (VBCCRStatusBar)
37. SysInfo Control (VBCCRSysInfo)
38. TabStrip Control (VBCCRTabStrip)
39. TextBox Control (VBCCRTextBox)
40. Timer Control (VBCCRTimer)
41. ToolBar Control (VBCCRToolBar)
42. TreeView Control (VBCCRTreeView)
43. UpDown Control (VBCCRUpDown)
44. VirtualCombo Control (VBCCRVirtualCombo)
45. VListBox Control (VBCCRVListBox)
<!-- 47. WebBrowser Control (VBCCRWebBrowser) -->
46. WindowedLabel Control (VBCCRWindowedLabel)

## Key Features

- Modern visual appearance
- Enhanced functionality compared to original MSComCtl
- Full compatibility with VB6
- Improved performance
- Better memory management
- Extended customization options

## Documentation Structure

Each control has its own dedicated documentation page with:

- Detailed properties and methods description
- Events documentation
- Code examples
- Common use cases

## Getting Started

To begin using VBCCR controls in your VB6 project:

1. Download the compiled VBCCR control from [Direct](https://gitcode.com/woeoio/vb6.pro/releases/download/vbccr/VBCCR18.OCX.zip)
2. Or: Download the VBCCR library from [GitHub Repository](https://github.com/Kr00l/VBCCR) , and compile it yourself.
3. Register the OCX file in your system
4. Add references to the VBCCR controls in your VB6 project
5. Start using the enhanced controls in your forms

<!-- ## Control Documentation

- [Animation Control](./animation.md)
- [Checkbox Control](./checkbox.md)
- [ComboBox Control](./combobox.md)
- [CommandButton Control](./commandbutton.md)
- [CommandLink Control](./commandlink.md)
- [CommonDialog Control](./commondialog.md)
- [CoolBar Control](./coolbar.md)
- [DateTimePicker Control](./datetimepicker.md)
- [DriveList Control](./drivelist.md)
- [DrivePath Control](./drivepath.md)
- [FilePath Control](./filepath.md)
- [FontCombo Control](./fontcombo.md)
- [Frame Control](./frame.md)
- [HotKey Control](./hotkey.md)
- [Image Control](./image.md)
- [ImageCombo Control](./imagecombo.md)
- [ImageList Control](./imagelist.md)
- [IPAddress Control](./ipaddress.md)
- [Label Control](./label.md)
- [Line Control](./line.md)
- [LinkLabel Control](./linklabel.md)
- [ListBox Control](./listbox.md)
- [ListView Control](./listview.md)
- [MCIWnd Control](./mciwnd.md)
- [MonthCalendar Control](./monthcalendar.md)
- [MonthView Control](./monthview.md)
- [Option Control](./option.md)
- [OptionButton Control](./optionbutton.md)
- [Pager Control](./pager.md)
- [Picture Control](./picture.md)
- [ProgressBar Control](./progressbar.md)
- [RichTextBox Control](./richtextbox.md)
- [ScrollBar Control](./scrollbar.md)
- [Shape Control](./shape.md)
- [Slider Control](./slider.md)
- [SpinBox Control](./spinbox.md)
- [StatusBar Control](./statusbar.md)
- [SysInfo Control](./sysinfo.md)
- [TabStrip Control](./tabstrip.md)
- [TextBox Control](./textbox.md)
- [Timer Control](./timer.md)
- [ToolBar Control](./toolbar.md)
- [TreeView Control](./treeview.md)
- [UpDown Control](./updown.md)
- [VirtualCombo Control](./virtualcombo.md)
- [VListBox Control](./vlistbox.md)
- [WebBrowser Control](./webbrowser.md)
- [WindowedLabel Control](./windowedlabel.md) -->

## Official Documentation

You can also start by reading the [official documentation](./readme.md) written by the author, and then refer to the AI-generated detailed explanations for each control.

## Additional Resources

- [Original VBForums Thread](<https://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls-(Replacement-of-the-MS-common-controls)>)
- [Source Code Repository](https://github.com/Kr00l/VBCCR)
- [Legacy Discussion Thread](<https://www.vbforums.com/showthread.php?698563-CommonControls-(Replacement-of-the-MS-common-controls)>)
