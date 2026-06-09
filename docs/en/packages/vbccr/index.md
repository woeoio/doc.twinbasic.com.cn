---
title: VBCCR Development Manual
description: VBCCR Development Manual - Complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '416c73d2-760a-46b2-b70b-a4405cfcd3d0'
  PropagateID: '416c73d2-760a-46b2-b70b-a4405cfcd3d0'
  ReservedCode1: '3b280cae-ab4c-4dde-afc3-2f882df74acf'
  ReservedCode2: '3b280cae-ab4c-4dde-afc3-2f882df74acf'
---

# VBCCR Development Manual

VBCCR (VB Common Controls Replacement) is a comprehensive replacement library for the Microsoft Common Controls (MSComCtl) in Visual Basic 6, developed and maintained by [Kr00l](https://github.com/Kr00l/VBCCR). While maintaining compatibility with the original controls, it provides enhanced functionality, improved visual appearance, and **full Unicode support**.

**Key advantage: Resolves the garbled text issue when displaying Unicode characters on native VB6 form controls.**

This documentation is based on the VBCCR 1.8 source code. All interface information is derived from the actual code to ensure accuracy.

## Quick Start

1. Download the VBCCR library from the [GitHub repository](https://github.com/Kr00l/VBCCR)
2. Register the OCX file on your system: `regsvr32 VBCCR18.OCX`
3. Add a reference to the VBCCR controls in your VB6 project
4. Use the enhanced controls on your forms

## Included Controls

### Buttons

| Control | Class Name | Description |
|---------|-----------|-------------|
| [CheckBoxW](./buttons/checkboxw.md) | CheckBoxW | Unicode CheckBox control |
| [CommandButtonW](./buttons/commandbuttonw.md) | CommandButtonW | Unicode CommandButton control |
| [CommandLink](./buttons/commandlink.md) | CommandLink | CommandLink control |
| [OptionButtonW](./buttons/optionbuttonw.md) | OptionButtonW | Unicode OptionButton control |

### Text

| Control | Class Name | Description |
|---------|-----------|-------------|
| [TextBoxW](./text/textboxw.md) | TextBoxW | Unicode TextBox control |
| [RichTextBox](./text/richtextbox.md) | RichTextBox | RichTextBox control |
| [SpinBox](./text/spinbox.md) | SpinBox | SpinBox control |
| [LabelW](./text/labelw.md) | LabelW | Unicode Label control |
| [WindowedLabel](./text/windowedlabel.md) | WindowedLabel | Windowed Label control |
| [LinkLabel](./text/linklabel.md) | LinkLabel | LinkLabel control |
| [HotKey](./text/hotkey.md) | HotKey | HotKey control |

### Lists

| Control | Class Name | Description |
|---------|-----------|-------------|
| [ComboBoxW](./lists/comboboxw.md) | ComboBoxW | Unicode ComboBox control |
| [ListBoxW](./lists/listboxw.md) | ListBoxW | Unicode ListBox control |
| [FontCombo](./lists/fontcombo.md) | FontCombo | Font selection ComboBox control |
| [ImageCombo](./lists/imagecombo.md) | ImageCombo | Image ComboBox control |
| [IPAddress](./lists/ipaddress.md) | IPAddress | IP Address control |
| [VirtualCombo](./lists/virtualcombo.md) | VirtualCombo | Virtual ComboBox control |
| [VListBox](./lists/vlistbox.md) | VListBox | Virtual ListBox control |

### Views

| Control | Class Name | Description |
|---------|-----------|-------------|
| [ListView](./views/listview.md) | ListView | ListView control |
| [TreeView](./views/treeview.md) | TreeView | TreeView control |
| [TabStrip](./views/tabstrip.md) | TabStrip | TabStrip control |

### Bars

| Control | Class Name | Description |
|---------|-----------|-------------|
| [ToolBar](./bars/toolbar.md) | ToolBar | ToolBar control |
| [StatusBar](./bars/statusbar.md) | StatusBar | StatusBar control |
| [CoolBar](./bars/coolbar.md) | CoolBar | Dockable toolbar control |
| [Pager](./bars/pager.md) | Pager | Pager control |

### Ranges

| Control | Class Name | Description |
|---------|-----------|-------------|
| [Slider](./ranges/slider.md) | Slider | Slider control |
| [ProgressBar](./ranges/progressbar.md) | ProgressBar | ProgressBar control |
| [UpDown](./ranges/updown.md) | UpDown | UpDown control |
| [Animation](./ranges/animation.md) | Animation | Animation control |

### Date/Time

| Control | Class Name | Description |
|---------|-----------|-------------|
| [DTPicker](./datetime/dtpicker.md) | DTPicker | DateTimePicker control |
| [MonthView](./datetime/monthview.md) | MonthView | MonthView control |

### System

| Control | Class Name | Description |
|---------|-----------|-------------|
| [CommonDialog](./system/commondialog.md) | CommonDialog | Common Dialog class |
| [SysInfo](./system/sysinfo.md) | SysInfo | System Information control |
| [ImageList](./system/imagelist.md) | ImageList | ImageList control |
| [FrameW](./system/framew.md) | FrameW | Unicode Frame control |
| [MCIWnd](./system/mciwnd.md) | MCIWnd | Multimedia control |

## Common Helper Modules

VBCCR also provides the following public helper modules shared by all controls:

| Module | File | Description |
|--------|------|-------------|
| Common | Common.bas | General utility functions (MsgBox, SendKeys Unicode versions, clipboard operations, DPI helpers, image processing, etc.) |
| VisualStyles | VisualStyles.bas | Visual style management (ActivateVisualStyles, RemoveVisualStyles, GetComCtlVersion) |
| ISubclass | ISubclass.cls | Subclassing interface |
| ComCtlsBase | ComCtlsBase.bas | Control base module |
| VTableHandle | VTableHandle.bas | VTable handling module |

## Common Enumerations

The following enumerations are shared across multiple controls:

### CCAppearanceConstants
| Constant | Value | Description |
|----------|-------|-------------|
| cc2D | 0 | Flat appearance |
| cc3D | 1 | 3D appearance |

### CCLeftRightAlignmentConstants
| Constant | Value | Description |
|----------|-------|-------------|
| ccLeft | 0 | Left alignment |
| ccRight | 1 | Right alignment |

### CCVerticalAlignmentConstants
| Constant | Value | Description |
|----------|-------|-------------|
| ccTop | 0 | Top alignment |
| ccBottom | 1 | Bottom alignment |
| ccVCenter | 2 | Vertical center |

### CCMousePointerConstants
| Constant | Value |
|----------|-------|
| ccDefault | 0 |
| ccArrow | 1 |
| ccCrosshair | 2 |
| ccIBeam | 3 |
| ccIcon | 4 |
| ccSize | 5 |
| ccSizeNESW | 6 |
| ccSizeNS | 7 |
| ccSizeNWSE | 8 |
| ccSizeWE | 9 |
| ccUpArrow | 10 |
| ccHourglass | 11 |
| ccNoDrop | 12 |
| ccArrowHourglass | 13 |
| ccArrowQuestion | 14 |
| ccSizeAll | 15 |
| ccCustom | 99 |

### CCRightToLeftModeConstants
| Constant | Value | Description |
|----------|-------|-------------|
| ccRtlModeNo | 0 | No RTL |
| ccRtlModeStandard | 1 | Standard RTL |
| ccRtlModeV2 | 2 | V2 mode RTL |

### CCIMEModeConstants
| Constant | Value |
|----------|-------|
| ccIMENoControl | 0 |
| ccIMEOn | 1 |
| ccIMEOff | 2 |
| ccIMEDisable | 3 |
| ccIMEHiragana | 4 |
| ccIMEKatakanaDbl | 5 |
| ccIMEKatakanaSng | 6 |
| ccIMEAlphaDbl | 7 |
| ccIMEAlphaSng | 8 |
| ccIMEHangulDbl | 9 |
| ccIMEHangulSng | 10 |

### OLEDropModeConstants
| Constant | Value |
|----------|-------|
| ccOLEDropNone | 0 |
| ccOLEDropManual | 1 |

## Author Documentation

The official documentation written by VBCCR author Kr00l (Chinese translation), covering StdEXE/OCX version usage guides, OCX2StdEXE tool instructions, compilation options, and version history:

[Read Author Documentation](./author.md)

## Additional Resources

- [VBCCR GitHub Repository](https://github.com/Kr00l/VBCCR)
- [VBForums Discussion Thread](https://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls)