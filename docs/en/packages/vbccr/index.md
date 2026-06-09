---
title: VBCCR Development Manual
description: VBCCR Development Manual - Complete API reference based on source code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8a55c35b-50e2-4545-89e6-5ff097e2f899'
  PropagateID: '8a55c35b-50e2-4545-89e6-5ff097e2f899'
  ReservedCode1: '3b311a20-1937-4109-9280-7feb7b147457'
  ReservedCode2: '3b311a20-1937-4109-9280-7feb7b147457'
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
| [CheckBoxW](./buttons/checkboxw) | CheckBoxW | Unicode CheckBox control |
| [CommandButtonW](./buttons/commandbuttonw) | CommandButtonW | Unicode CommandButton control |
| [CommandLink](./buttons/commandlink) | CommandLink | CommandLink control |
| [OptionButtonW](./buttons/optionbuttonw) | OptionButtonW | Unicode OptionButton control |

### Text

| Control | Class Name | Description |
|---------|-----------|-------------|
| [TextBoxW](./text/textboxw) | TextBoxW | Unicode TextBox control |
| [RichTextBox](./text/richtextbox) | RichTextBox | RichTextBox control |
| [SpinBox](./text/spinbox) | SpinBox | SpinBox control |
| [LabelW](./text/labelw) | LabelW | Unicode Label control |
| [WindowedLabel](./text/windowedlabel) | WindowedLabel | Windowed Label control |
| [LinkLabel](./text/linklabel) | LinkLabel | LinkLabel control |
| [HotKey](./text/hotkey) | HotKey | HotKey control |

### Lists

| Control | Class Name | Description |
|---------|-----------|-------------|
| [ComboBoxW](./lists/comboboxw) | ComboBoxW | Unicode ComboBox control |
| [ListBoxW](./lists/listboxw) | ListBoxW | Unicode ListBox control |
| [FontCombo](./lists/fontcombo) | FontCombo | Font selection ComboBox control |
| [ImageCombo](./lists/imagecombo) | ImageCombo | Image ComboBox control |
| [IPAddress](./lists/ipaddress) | IPAddress | IP Address control |
| [VirtualCombo](./lists/virtualcombo) | VirtualCombo | Virtual ComboBox control |
| [VListBox](./lists/vlistbox) | VListBox | Virtual ListBox control |

### Views

| Control | Class Name | Description |
|---------|-----------|-------------|
| [ListView](./views/listview) | ListView | ListView control |
| [TreeView](./views/treeview) | TreeView | TreeView control |
| [TabStrip](./views/tabstrip) | TabStrip | TabStrip control |

### Bars

| Control | Class Name | Description |
|---------|-----------|-------------|
| [ToolBar](./bars/toolbar) | ToolBar | ToolBar control |
| [StatusBar](./bars/statusbar) | StatusBar | StatusBar control |
| [CoolBar](./bars/coolbar) | CoolBar | Dockable toolbar control |
| [Pager](./bars/pager) | Pager | Pager control |

### Ranges

| Control | Class Name | Description |
|---------|-----------|-------------|
| [Slider](./ranges/slider) | Slider | Slider control |
| [ProgressBar](./ranges/progressbar) | ProgressBar | ProgressBar control |
| [UpDown](./ranges/updown) | UpDown | UpDown control |
| [Animation](./ranges/animation) | Animation | Animation control |

### Date/Time

| Control | Class Name | Description |
|---------|-----------|-------------|
| [DTPicker](./datetime/dtpicker) | DTPicker | DateTimePicker control |
| [MonthView](./datetime/monthview) | MonthView | MonthView control |

### System

| Control | Class Name | Description |
|---------|-----------|-------------|
| [CommonDialog](./system/commondialog) | CommonDialog | Common Dialog class |
| [SysInfo](./system/sysinfo) | SysInfo | System Information control |
| [ImageList](./system/imagelist) | ImageList | ImageList control |
| [FrameW](./system/framew) | FrameW | Unicode Frame control |
| [MCIWnd](./system/mciwnd) | MCIWnd | Multimedia control |

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

[Read Author Documentation](./author)

## Additional Resources

- [VBCCR GitHub Repository](https://github.com/Kr00l/VBCCR)
- [VBForums Discussion Thread](https://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls)